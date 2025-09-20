"use client"

import type React from "react"

import { useState } from "react"
import Link from "next/link"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Checkbox } from "@/components/ui/checkbox"
import { Badge } from "@/components/ui/badge"
import { X } from "lucide-react"

const industries = [
  "Technology",
  "Healthcare",
  "Finance",
  "Education",
  "Marketing",
  "Manufacturing",
  "Retail",
  "Consulting",
  "Non-profit",
  "Government",
]

const skills = [
  "JavaScript",
  "Python",
  "Data Analysis",
  "Project Management",
  "Communication",
  "Leadership",
  "Marketing",
  "Design",
  "Sales",
  "Customer Service",
  "Writing",
  "Research",
  "Problem Solving",
  "Teamwork",
  "Time Management",
]

const interests = [
  "Artificial Intelligence",
  "Web Development",
  "Data Science",
  "Digital Marketing",
  "Product Management",
  "UX/UI Design",
  "Cybersecurity",
  "Cloud Computing",
  "Mobile Development",
  "Business Strategy",
  "Content Creation",
  "E-commerce",
  "Sustainability",
  "Healthcare Innovation",
  "Financial Technology",
]

export default function CareerForm() {
  const router = useRouter()
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [formData, setFormData] = useState({
    currentRole: "",
    experienceLevel: "",
    industry: "",
    selectedSkills: [] as string[],
    selectedInterests: [] as string[],
    careerGoals: "",
  })

  const handleSkillToggle = (skill: string) => {
    setFormData((prev) => ({
      ...prev,
      selectedSkills: prev.selectedSkills.includes(skill)
        ? prev.selectedSkills.filter((s) => s !== skill)
        : [...prev.selectedSkills, skill],
    }))
  }

  const handleInterestToggle = (interest: string) => {
    setFormData((prev) => ({
      ...prev,
      selectedInterests: prev.selectedInterests.includes(interest)
        ? prev.selectedInterests.filter((i) => i !== interest)
        : [...prev.selectedInterests, interest],
    }))
  }

  const removeSkill = (skill: string) => {
    setFormData((prev) => ({
      ...prev,
      selectedSkills: prev.selectedSkills.filter((s) => s !== skill),
    }))
  }

  const removeInterest = (interest: string) => {
    setFormData((prev) => ({
      ...prev,
      selectedInterests: prev.selectedInterests.filter((i) => i !== interest),
    }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Store form data in localStorage for the results page
    localStorage.setItem("careerFormData", JSON.stringify(formData))

    // Simulate form processing time
    setTimeout(() => {
      router.push("/loading")
    }, 1000)
  }

  const isFormValid =
    formData.currentRole &&
    formData.experienceLevel &&
    formData.industry &&
    formData.selectedSkills.length > 0 &&
    formData.selectedInterests.length > 0

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-green-50">
      {/* Header */}
      <header className="border-b bg-white/80 backdrop-blur-sm">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <Link href="/" className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-sm">CA</span>
            </div>
            <span className="font-semibold text-lg">Career Advisor</span>
          </Link>
          <nav className="hidden md:flex items-center space-x-6">
            <Link href="/" className="text-gray-600 hover:text-gray-900">
              Home
            </Link>
            <Link href="/about" className="text-gray-600 hover:text-gray-900">
              About
            </Link>
            <Link href="/contact" className="text-gray-600 hover:text-gray-900">
              Contact
            </Link>
          </nav>
        </div>
      </header>

      <main className="container mx-auto px-4 py-8">
        <div className="max-w-2xl mx-auto">
          <div className="text-center mb-8">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">Tell Us About Yourself</h1>
            <p className="text-lg text-gray-600">
              Help us understand your background so we can provide personalized career guidance.
            </p>
          </div>

          <Card className="shadow-lg">
            <CardHeader>
              <CardTitle>Career Assessment Form</CardTitle>
              <CardDescription>
                Fill out the form below to get your personalized career recommendations.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Current Role */}
                <div className="space-y-2">
                  <Label htmlFor="currentRole">Current Role</Label>
                  <Select
                    value={formData.currentRole}
                    onValueChange={(value) => setFormData((prev) => ({ ...prev, currentRole: value }))}
                  >
                    <SelectTrigger>
                      <SelectValue placeholder="Select your current role" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="student">Student</SelectItem>
                      <SelectItem value="entry-level">Entry Level Professional</SelectItem>
                      <SelectItem value="mid-level">Mid-Level Professional</SelectItem>
                      <SelectItem value="senior-level">Senior Professional</SelectItem>
                      <SelectItem value="manager">Manager</SelectItem>
                      <SelectItem value="director">Director</SelectItem>
                      <SelectItem value="executive">Executive</SelectItem>
                      <SelectItem value="entrepreneur">Entrepreneur</SelectItem>
                      <SelectItem value="freelancer">Freelancer</SelectItem>
                      <SelectItem value="unemployed">Currently Unemployed</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                {/* Experience Level */}
                <div className="space-y-2">
                  <Label htmlFor="experienceLevel">Years of Experience</Label>
                  <Select
                    value={formData.experienceLevel}
                    onValueChange={(value) => setFormData((prev) => ({ ...prev, experienceLevel: value }))}
                  >
                    <SelectTrigger>
                      <SelectValue placeholder="Select your experience level" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="0-1">0-1 years</SelectItem>
                      <SelectItem value="2-3">2-3 years</SelectItem>
                      <SelectItem value="4-6">4-6 years</SelectItem>
                      <SelectItem value="7-10">7-10 years</SelectItem>
                      <SelectItem value="10+">10+ years</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                {/* Industry */}
                <div className="space-y-2">
                  <Label htmlFor="industry">Industry</Label>
                  <Select
                    value={formData.industry}
                    onValueChange={(value) => setFormData((prev) => ({ ...prev, industry: value }))}
                  >
                    <SelectTrigger>
                      <SelectValue placeholder="Select your industry" />
                    </SelectTrigger>
                    <SelectContent>
                      {industries.map((industry) => (
                        <SelectItem key={industry} value={industry.toLowerCase()}>
                          {industry}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                {/* Skills Multi-Select */}
                <div className="space-y-3">
                  <Label>Current Skills (Select all that apply)</Label>
                  {formData.selectedSkills.length > 0 && (
                    <div className="flex flex-wrap gap-2 mb-3">
                      {formData.selectedSkills.map((skill) => (
                        <Badge key={skill} variant="secondary" className="flex items-center gap-1">
                          {skill}
                          <X className="h-3 w-3 cursor-pointer hover:text-red-500" onClick={() => removeSkill(skill)} />
                        </Badge>
                      ))}
                    </div>
                  )}
                  <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                    {skills.map((skill) => (
                      <div key={skill} className="flex items-center space-x-2">
                        <Checkbox
                          id={`skill-${skill}`}
                          checked={formData.selectedSkills.includes(skill)}
                          onCheckedChange={() => handleSkillToggle(skill)}
                        />
                        <Label htmlFor={`skill-${skill}`} className="text-sm font-normal cursor-pointer">
                          {skill}
                        </Label>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Interests Multi-Select */}
                <div className="space-y-3">
                  <Label>Career Interests (Select all that apply)</Label>
                  {formData.selectedInterests.length > 0 && (
                    <div className="flex flex-wrap gap-2 mb-3">
                      {formData.selectedInterests.map((interest) => (
                        <Badge key={interest} variant="outline" className="flex items-center gap-1">
                          {interest}
                          <X
                            className="h-3 w-3 cursor-pointer hover:text-red-500"
                            onClick={() => removeInterest(interest)}
                          />
                        </Badge>
                      ))}
                    </div>
                  )}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    {interests.map((interest) => (
                      <div key={interest} className="flex items-center space-x-2">
                        <Checkbox
                          id={`interest-${interest}`}
                          checked={formData.selectedInterests.includes(interest)}
                          onCheckedChange={() => handleInterestToggle(interest)}
                        />
                        <Label htmlFor={`interest-${interest}`} className="text-sm font-normal cursor-pointer">
                          {interest}
                        </Label>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Career Goals */}
                <div className="space-y-2">
                  <Label htmlFor="careerGoals">Career Goals (Optional)</Label>
                  <Select
                    value={formData.careerGoals}
                    onValueChange={(value) => setFormData((prev) => ({ ...prev, careerGoals: value }))}
                  >
                    <SelectTrigger>
                      <SelectValue placeholder="What are your main career goals?" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="promotion">Get a promotion</SelectItem>
                      <SelectItem value="career-change">Change careers</SelectItem>
                      <SelectItem value="skill-development">Develop new skills</SelectItem>
                      <SelectItem value="leadership">Move into leadership</SelectItem>
                      <SelectItem value="entrepreneurship">Start my own business</SelectItem>
                      <SelectItem value="work-life-balance">Improve work-life balance</SelectItem>
                      <SelectItem value="higher-salary">Increase salary</SelectItem>
                      <SelectItem value="remote-work">Find remote work opportunities</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <Button
                  type="submit"
                  className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 text-lg rounded-xl disabled:opacity-50 disabled:cursor-not-allowed"
                  disabled={!isFormValid || isSubmitting}
                >
                  {isSubmitting ? (
                    <div className="flex items-center justify-center">
                      <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin mr-2"></div>
                      Processing...
                    </div>
                  ) : (
                    "Get My Career Recommendations"
                  )}
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </main>
    </div>
  )
}
