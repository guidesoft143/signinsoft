"use client"

import type React from "react"
import { useState } from "react"
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Badge } from "@/components/ui/badge"
import { MapPin, Clock, DollarSign, Users, Upload, CheckCircle, AlertCircle } from "lucide-react"
import { useToast } from "@/hooks/use-toast"

interface JobModalProps {
  job: {
    id: string
    title: string
    department: string
    location: string
    type: string
    salary: string
    experience: string
    description: string
    requirements: string[]
    responsibilities: string[]
    benefits: string[]
  }
  isOpen: boolean
  onClose: () => void
}

export function JobModal({ job, isOpen, onClose }: JobModalProps) {
  const [showApplicationForm, setShowApplicationForm] = useState(false)
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    experience: "",
    coverLetter: "",
    resume: null as File | null,
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const { toast } = useToast()

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }))
  }

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const file = e.target.files[0]

      // Validate file size (5MB limit)
      if (file.size > 5 * 1024 * 1024) {
        toast({
          title: "File too large",
          description: "Please select a file smaller than 5MB.",
          variant: "destructive",
        })
        return
      }

      // Validate file type
      const allowedTypes = [
        "application/pdf",
        "application/msword",
        "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
      ]
      if (!allowedTypes.includes(file.type)) {
        toast({
          title: "Invalid file type",
          description: "Please select a PDF, DOC, or DOCX file.",
          variant: "destructive",
        })
        return
      }

      setFormData((prev) => ({
        ...prev,
        resume: file,
      }))
    }
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    try {
      const formDataToSend = new FormData()
      formDataToSend.append("to", "hr@signinsoft.net")
      formDataToSend.append("subject", `Job Application: ${job.title} - ${formData.fullName}`)
      formDataToSend.append("jobId", job.id)
      formDataToSend.append("jobTitle", job.title)
      formDataToSend.append("department", job.department)
      formDataToSend.append("fullName", formData.fullName)
      formDataToSend.append("email", formData.email)
      formDataToSend.append("phone", formData.phone)
      formDataToSend.append("experience", formData.experience)
      formDataToSend.append("coverLetter", formData.coverLetter)

      if (formData.resume) {
        formDataToSend.append("resume", formData.resume)
      }

      // Create email body
      const emailBody = `
        New Job Application Received
        
        Position: ${job.title}
        Department: ${job.department}
        
        Applicant Details:
        Name: ${formData.fullName}
        Email: ${formData.email}
        Phone: ${formData.phone}
        Experience: ${formData.experience} years
        
        Cover Letter:
        ${formData.coverLetter || "No cover letter provided"}
        
        Resume: ${formData.resume ? "Attached" : "Not provided"}
        
        Application submitted on: ${new Date().toLocaleString()}
      `

      formDataToSend.append("body", emailBody)

      // In a real application, this would send to your backend API
      // For now, we'll simulate the API call
      await new Promise((resolve) => setTimeout(resolve, 2000))

      toast({
        title: "Application Submitted Successfully!",
        description: "We've received your application and will contact you soon.",
        action: <CheckCircle className="h-4 w-4" />,
      })

      // Reset form and close modal
      setFormData({
        fullName: "",
        email: "",
        phone: "",
        experience: "",
        coverLetter: "",
        resume: null,
      })
      setShowApplicationForm(false)
      onClose()
    } catch (error) {
      toast({
        title: "Submission Failed",
        description: "There was an error submitting your application. Please try again.",
        variant: "destructive",
        action: <AlertCircle className="h-4 w-4" />,
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  const handleModalClose = () => {
    setShowApplicationForm(false)
    onClose()
  }

  return (
    <Dialog open={isOpen} onOpenChange={handleModalClose}>
      <DialogContent className="lightbox-overlay lightbox-content max-w-4xl animate-scale-in">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold text-primary gradient-text animate-slide-down">
            {job.title}
          </DialogTitle>
          <div className="flex flex-wrap gap-2 mt-2 animate-fade-in">
            <Badge variant="secondary" className="bg-primary/10 text-primary hover-scale">
              <MapPin className="w-3 h-3 mr-1 flat-icon flat-icon-small" />
              {job.location}
            </Badge>
            <Badge variant="secondary" className="bg-accent/10 text-accent hover-scale">
              <Clock className="w-3 h-3 mr-1 flat-icon flat-icon-small" />
              {job.type}
            </Badge>
            <Badge variant="secondary" className="bg-muted hover-scale">
              <DollarSign className="w-3 h-3 mr-1 flat-icon flat-icon-small" />
              {job.salary}
            </Badge>
            <Badge variant="secondary" className="bg-muted hover-scale">
              <Users className="w-3 h-3 mr-1 flat-icon flat-icon-small" />
              {job.experience}
            </Badge>
          </div>
        </DialogHeader>

        {!showApplicationForm ? (
          <div className="space-y-6 animate-fade-in">
            <div className="animate-slide-up">
              <h3 className="text-lg font-semibold mb-3 text-primary">Job Description</h3>
              <p className="text-muted-foreground leading-relaxed text-pretty">{job.description}</p>
            </div>

            <div className="animate-slide-up">
              <h3 className="text-lg font-semibold mb-3 text-primary">Key Responsibilities</h3>
              <ul className="space-y-2">
                {job.responsibilities.map((responsibility, index) => (
                  <li key={index} className="flex items-start hover-lift">
                    <span className="w-2 h-2 bg-accent rounded-full mt-2 mr-3 flex-shrink-0 animate-pulse" />
                    <span className="text-muted-foreground">{responsibility}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="animate-slide-up">
              <h3 className="text-lg font-semibold mb-3 text-primary">Requirements</h3>
              <ul className="space-y-2">
                {job.requirements.map((requirement, index) => (
                  <li key={index} className="flex items-start hover-lift">
                    <span className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0 animate-pulse" />
                    <span className="text-muted-foreground">{requirement}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="animate-slide-up">
              <h3 className="text-lg font-semibold mb-3 text-primary">Benefits</h3>
              <ul className="space-y-2">
                {job.benefits.map((benefit, index) => (
                  <li key={index} className="flex items-start hover-lift">
                    <span className="w-2 h-2 bg-accent rounded-full mt-2 mr-3 flex-shrink-0 animate-pulse" />
                    <span className="text-muted-foreground">{benefit}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="flex gap-3 pt-4 animate-slide-up">
              <Button
                onClick={() => setShowApplicationForm(true)}
                className="bg-primary hover:bg-primary/90 text-primary-foreground btn-animate hover-lift"
              >
                Apply Now
              </Button>
              <Button variant="outline" onClick={handleModalClose} className="btn-animate hover-lift bg-transparent">
                Close
              </Button>
            </div>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4 animate-scale-in">
            <h3 className="text-lg font-semibold text-primary mb-4 gradient-text">Apply for {job.title}</h3>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 stagger-animation">
              <div>
                <Label htmlFor="fullName" className="text-sm font-medium">
                  Full Name *
                </Label>
                <Input
                  id="fullName"
                  name="fullName"
                  value={formData.fullName}
                  onChange={handleInputChange}
                  required
                  className="mt-1 hover-lift"
                  placeholder="Enter your full name"
                />
              </div>
              <div>
                <Label htmlFor="email" className="text-sm font-medium">
                  Email Address *
                </Label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                  className="mt-1 hover-lift"
                  placeholder="your.email@example.com"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 stagger-animation">
              <div>
                <Label htmlFor="phone" className="text-sm font-medium">
                  Phone Number *
                </Label>
                <Input
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                  required
                  className="mt-1 hover-lift"
                  placeholder="+1 (555) 123-4567"
                />
              </div>
              <div>
                <Label htmlFor="experience" className="text-sm font-medium">
                  Years of Experience *
                </Label>
                <Input
                  id="experience"
                  name="experience"
                  value={formData.experience}
                  onChange={handleInputChange}
                  required
                  className="mt-1 hover-lift"
                  placeholder="e.g., 5"
                />
              </div>
            </div>

            <div className="animate-slide-up">
              <Label htmlFor="resume" className="text-sm font-medium">
                Upload Resume *
              </Label>
              <div className="mt-1 flex items-center gap-2">
                <Input
                  id="resume"
                  name="resume"
                  type="file"
                  accept=".pdf,.doc,.docx"
                  onChange={handleFileChange}
                  required
                  className="file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-primary file:text-primary-foreground hover:file:bg-primary/90 hover-lift"
                />
                <Upload className="w-4 h-4 text-muted-foreground flat-icon flat-icon-small" />
              </div>
              <p className="text-xs text-muted-foreground mt-1">
                Accepted formats: PDF, DOC, DOCX (Max 5MB)
                {formData.resume && <span className="text-primary ml-2">✓ {formData.resume.name}</span>}
              </p>
            </div>

            <div className="animate-slide-up">
              <Label htmlFor="coverLetter" className="text-sm font-medium">
                Cover Letter
              </Label>
              <Textarea
                id="coverLetter"
                name="coverLetter"
                value={formData.coverLetter}
                onChange={handleInputChange}
                rows={4}
                className="mt-1 hover-lift"
                placeholder="Tell us why you're interested in this position and what makes you a great fit..."
              />
            </div>

            <div className="flex gap-3 pt-4 animate-slide-up">
              <Button
                type="submit"
                disabled={isSubmitting}
                className="bg-primary hover:bg-primary/90 text-primary-foreground btn-animate hover-lift disabled:opacity-50"
              >
                {isSubmitting ? (
                  <>
                    <div className="loading-dots mr-2">
                      <span></span>
                      <span></span>
                      <span></span>
                    </div>
                    Submitting...
                  </>
                ) : (
                  "Submit Application"
                )}
              </Button>
              <Button
                type="button"
                variant="outline"
                onClick={() => setShowApplicationForm(false)}
                className="btn-animate hover-lift"
                disabled={isSubmitting}
              >
                Back to Job Details
              </Button>
            </div>
          </form>
        )}
      </DialogContent>
    </Dialog>
  )
}
