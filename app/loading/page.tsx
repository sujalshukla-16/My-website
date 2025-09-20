"use client"

import { useEffect, useState } from "react"
import { useRouter } from "next/navigation"
import { Progress } from "@/components/ui/progress"
import { CheckCircle, Brain, Target, BookOpen } from "lucide-react"

const loadingSteps = [
  { id: 1, text: "Analyzing your profile...", icon: Brain },
  { id: 2, text: "Matching career opportunities...", icon: Target },
  { id: 3, text: "Identifying skill gaps...", icon: CheckCircle },
  { id: 4, text: "Creating learning roadmap...", icon: BookOpen },
]

export default function LoadingPage() {
  const router = useRouter()
  const [currentStep, setCurrentStep] = useState(0)
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    const stepInterval = setInterval(() => {
      setCurrentStep((prev) => {
        if (prev < loadingSteps.length - 1) {
          return prev + 1
        }
        return prev
      })
    }, 1500)

    const progressInterval = setInterval(() => {
      setProgress((prev) => {
        if (prev < 100) {
          return prev + 2
        }
        return prev
      })
    }, 120)

    const redirectTimer = setTimeout(() => {
      router.push("/results")
    }, 6000)

    return () => {
      clearInterval(stepInterval)
      clearInterval(progressInterval)
      clearTimeout(redirectTimer)
    }
  }, [router])

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-green-50 flex items-center justify-center">
      <div className="max-w-md w-full mx-4">
        <div className="text-center mb-8">
          <div className="w-20 h-20 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-6 animate-pulse">
            <Brain className="w-10 h-10 text-white" />
          </div>
          <h1 className="text-3xl font-bold text-gray-900 mb-4">AI Analysis in Progress</h1>
          <p className="text-gray-600">
            Our advanced AI is analyzing your profile to create personalized career recommendations.
          </p>
        </div>

        <div className="space-y-6">
          <div className="space-y-2">
            <div className="flex justify-between text-sm text-gray-600">
              <span>Progress</span>
              <span>{Math.min(progress, 100)}%</span>
            </div>
            <Progress value={Math.min(progress, 100)} className="h-2" />
          </div>

          <div className="space-y-4">
            {loadingSteps.map((step, index) => {
              const Icon = step.icon
              const isActive = index === currentStep
              const isCompleted = index < currentStep

              return (
                <div
                  key={step.id}
                  className={`flex items-center space-x-3 p-3 rounded-lg transition-all duration-500 ${
                    isActive
                      ? "bg-blue-100 border-2 border-blue-300"
                      : isCompleted
                        ? "bg-green-50 border-2 border-green-200"
                        : "bg-gray-50 border-2 border-gray-200"
                  }`}
                >
                  <div
                    className={`w-8 h-8 rounded-full flex items-center justify-center transition-all duration-300 ${
                      isActive ? "bg-blue-600 animate-pulse" : isCompleted ? "bg-green-600" : "bg-gray-400"
                    }`}
                  >
                    {isCompleted ? (
                      <CheckCircle className="w-5 h-5 text-white" />
                    ) : (
                      <Icon className={`w-4 h-4 text-white ${isActive ? "animate-bounce" : ""}`} />
                    )}
                  </div>
                  <span
                    className={`font-medium transition-colors duration-300 ${
                      isActive ? "text-blue-900" : isCompleted ? "text-green-900" : "text-gray-600"
                    }`}
                  >
                    {step.text}
                  </span>
                </div>
              )
            })}
          </div>

          <div className="text-center text-sm text-gray-500 mt-6">This usually takes 30-60 seconds...</div>
        </div>
      </div>
    </div>
  )
}
