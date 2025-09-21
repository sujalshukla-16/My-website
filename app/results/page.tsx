"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  TrendingUp,
  Target,
  BookOpen,
  Clock,
  Star,
  CheckCircle,
  AlertCircle,
  ArrowRight,
  Download,
} from "lucide-react";

interface FormData {
  currentRole: string;
  experienceLevel: string;
  industry: string;
  selectedSkills: string[];
  selectedInterests: string[];
  careerGoals: string;
}

export default function ResultsPage() {
  const [formData, setFormData] = useState<FormData | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate loading time
    const timer = setTimeout(() => {
      const storedData = localStorage.getItem("careerFormData");
      if (storedData) {
        setFormData(JSON.parse(storedData));
      }
      setLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-50 to-green-50 flex items-center justify-center">
        <div className="text-center">
          <div className="w-16 h-16 border-4 border-blue-600 border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
          <h2 className="text-2xl font-semibold text-gray-900 mb-2">
            Analyzing Your Profile
          </h2>
          <p className="text-gray-600">
            Our AI is generating personalized recommendations...
          </p>
        </div>
      </div>
    );
  }

  if (!formData) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-50 to-green-50 flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">
            No Data Found
          </h2>
          <p className="text-gray-600 mb-6">
            Please complete the career assessment first.
          </p>
          <Link href="/career-form">
            <Button className="bg-blue-600 hover:bg-blue-700">
              Take Assessment
            </Button>
          </Link>
        </div>
      </div>
    );
  }

  // Simulated AI recommendations based on form data
  const careerRecommendations = [
    {
      title: "Senior Software Engineer",
      match: 92,
      salary: "₹95,00,000 - ₹1,30,00,000",
      growth: "High",
      description: "Lead development teams and architect scalable solutions",
      skills: ["JavaScript", "Python", "Leadership", "Problem Solving"],
    },
    {
      title: "Product Manager",
      match: 87,
      salary: "₹90,00,000 - ₹1,22,00,000",
      growth: "Very High",
      description:
        "Drive product strategy and coordinate cross-functional teams",
      skills: ["Project Management", "Communication", "Data Analysis"],
    },
    {
      title: "Data Scientist",
      match: 83,
      salary: "₹82,00,000 - ₹1,15,00,000",
      growth: "High",
      description: "Extract insights from data to drive business decisions",
      skills: ["Python", "Data Analysis", "Research", "Problem Solving"],
    },
  ];

  const skillGaps = [
    {
      skill: "Machine Learning",
      importance: "High",
      timeToLearn: "6-8 months",
    },
    {
      skill: "Cloud Architecture",
      importance: "Medium",
      timeToLearn: "3-4 months",
    },
    {
      skill: "Advanced Analytics",
      importance: "High",
      timeToLearn: "4-6 months",
    },
    {
      skill: "Team Leadership",
      importance: "Medium",
      timeToLearn: "2-3 months",
    },
  ];

  const learningRoadmap = [
    {
      phase: "Phase 1 (Months 1-2)",
      focus: "Foundation Building",
      courses: [
        {
          name: "Introduction to Machine Learning",
          provider: "Coursera",
          duration: "6 weeks",
        },
        {
          name: "Python for Data Science",
          provider: "edX",
          duration: "4 weeks",
        },
      ],
    },
    {
      phase: "Phase 2 (Months 3-4)",
      focus: "Skill Development",
      courses: [
        {
          name: "Advanced ML Algorithms",
          provider: "Udacity",
          duration: "8 weeks",
        },
        {
          name: "Leadership Fundamentals",
          provider: "LinkedIn Learning",
          duration: "3 weeks",
        },
      ],
    },
    {
      phase: "Phase 3 (Months 5-6)",
      focus: "Specialization",
      courses: [
        {
          name: "Cloud Computing with AWS",
          provider: "AWS Training",
          duration: "6 weeks",
        },
        {
          name: "Data Visualization",
          provider: "Tableau",
          duration: "4 weeks",
        },
      ],
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-green-50">
      {/* Header */}
      <header className="border-b bg-white/80 backdrop-blur-sm">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <Link href="/" className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-sm">CN</span>
            </div>
            <span className="font-semibold text-lg">CareerNavigator</span>
          </Link>
          <div className="flex items-center space-x-4">
            <Button variant="outline" size="sm">
              <Download className="w-4 h-4 mr-2" />
              Export Report
            </Button>
            <Link href="/career-form">
              <Button variant="ghost" size="sm">
                Retake Assessment
              </Button>
            </Link>
          </div>
        </div>
      </header>

      <main className="container mx-auto px-4 py-8">
        {/* Header Section */}
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Your Personalized Career Report
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Based on your skills, interests, and goals, here are our AI-powered
            recommendations for your career journey.
          </p>
        </div>

        {/* Profile Summary */}
        <Card className="mb-8 shadow-lg">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Target className="w-5 h-5 text-blue-600" />
              Profile Summary
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-4 gap-4">
              <div>
                <p className="text-sm text-gray-600">Current Role</p>
                <p className="font-semibold capitalize">
                  {formData.currentRole.replace("-", " ")}
                </p>
              </div>
              <div>
                <p className="text-sm text-gray-600">Experience</p>
                <p className="font-semibold">
                  {formData.experienceLevel} years
                </p>
              </div>
              <div>
                <p className="text-sm text-gray-600">Industry</p>
                <p className="font-semibold capitalize">{formData.industry}</p>
              </div>
              <div>
                <p className="text-sm text-gray-600">Skills Count</p>
                <p className="font-semibold">
                  {formData.selectedSkills.length} skills
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Main Content Tabs */}
        <Tabs defaultValue="recommendations" className="space-y-6">
          <TabsList className="grid w-full grid-cols-3">
            <TabsTrigger
              value="recommendations"
              className="flex items-center gap-2"
            >
              <TrendingUp className="w-4 h-4" />
              Career Recommendations
            </TabsTrigger>
            <TabsTrigger value="skills" className="flex items-center gap-2">
              <AlertCircle className="w-4 h-4" />
              Skill Gaps
            </TabsTrigger>
            <TabsTrigger value="roadmap" className="flex items-center gap-2">
              <BookOpen className="w-4 h-4" />
              Learning Roadmap
            </TabsTrigger>
          </TabsList>

          {/* Career Recommendations Tab */}
          <TabsContent value="recommendations" className="space-y-6">
            <div className="grid gap-6">
              {careerRecommendations.map((career, index) => (
                <Card
                  key={index}
                  className="shadow-lg hover:shadow-xl transition-shadow"
                >
                  <CardHeader>
                    <div className="flex items-start justify-between">
                      <div>
                        <CardTitle className="text-xl">
                          {career.title}
                        </CardTitle>
                        <CardDescription className="mt-2">
                          {career.description}
                        </CardDescription>
                      </div>
                      <div className="text-right">
                        <div className="flex items-center gap-2 mb-2">
                          <Star className="w-4 h-4 text-yellow-500" />
                          <span className="font-semibold text-lg">
                            {career.match}% Match
                          </span>
                        </div>
                        <Progress value={career.match} className="w-24" />
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="grid md:grid-cols-3 gap-4 mb-4">
                      <div>
                        <p className="text-sm text-gray-600">Salary Range</p>
                        <p className="font-semibold text-green-600">
                          {career.salary}
                        </p>
                      </div>
                      <div>
                        <p className="text-sm text-gray-600">
                          Growth Potential
                        </p>
                        <Badge
                          variant={
                            career.growth === "Very High"
                              ? "default"
                              : "secondary"
                          }
                        >
                          {career.growth}
                        </Badge>
                      </div>
                      <div>
                        <p className="text-sm text-gray-600">Matching Skills</p>
                        <p className="font-semibold">
                          {career.skills.length} of{" "}
                          {formData.selectedSkills.length}
                        </p>
                      </div>
                    </div>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {career.skills.map((skill) => (
                        <Badge
                          key={skill}
                          variant="outline"
                          className="text-xs"
                        >
                          {skill}
                        </Badge>
                      ))}
                    </div>
                    <Button className="w-full bg-blue-600 hover:bg-blue-700">
                      Learn More About This Role
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          {/* Skill Gaps Tab */}
          <TabsContent value="skills" className="space-y-6">
            <Card className="shadow-lg">
              <CardHeader>
                <CardTitle>Skills to Develop</CardTitle>
                <CardDescription>
                  These skills will help you advance in your chosen career path
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {skillGaps.map((gap, index) => (
                    <div
                      key={index}
                      className="flex items-center justify-between p-4 border rounded-lg"
                    >
                      <div className="flex-1">
                        <h4 className="font-semibold">{gap.skill}</h4>
                        <div className="flex items-center gap-4 mt-2">
                          <Badge
                            variant={
                              gap.importance === "High"
                                ? "destructive"
                                : "secondary"
                            }
                          >
                            {gap.importance} Priority
                          </Badge>
                          <div className="flex items-center gap-1 text-sm text-gray-600">
                            <Clock className="w-4 h-4" />
                            {gap.timeToLearn}
                          </div>
                        </div>
                      </div>
                      <Button variant="outline" size="sm">
                        Find Courses
                      </Button>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Learning Roadmap Tab */}
          <TabsContent value="roadmap" className="space-y-6">
            <div className="space-y-6">
              {learningRoadmap.map((phase, index) => (
                <Card key={index} className="shadow-lg">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <CheckCircle className="w-5 h-5 text-green-600" />
                      {phase.phase}
                    </CardTitle>
                    <CardDescription>Focus: {phase.focus}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3">
                      {phase.courses.map((course, courseIndex) => (
                        <div
                          key={courseIndex}
                          className="flex items-center justify-between p-3 bg-gray-50 rounded-lg"
                        >
                          <div>
                            <h5 className="font-medium">{course.name}</h5>
                            <p className="text-sm text-gray-600">
                              {course.provider} • {course.duration}
                            </p>
                          </div>
                          <Button variant="outline" size="sm">
                            Enroll
                          </Button>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>
        </Tabs>

        {/* Call to Action */}
        <Card className="mt-8 bg-gradient-to-r from-blue-600 to-green-600 text-white shadow-lg">
          <CardContent className="p-8 text-center">
            <h3 className="text-2xl font-bold mb-4">
              Ready to Start Your Journey?
            </h3>
            <p className="text-blue-100 mb-6 max-w-2xl mx-auto">
              Take the first step towards your dream career. Our AI has created
              a personalized plan just for you.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="secondary" size="lg">
                Download Full Report
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="text-white border-white hover:bg-white hover:text-blue-600 bg-transparent"
              >
                Schedule Career Consultation
              </Button>
            </div>
          </CardContent>
        </Card>
      </main>
    </div>
  );
}
