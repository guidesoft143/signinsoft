"use client"

import type React from "react"

import { useState } from "react"
import { PageLayout } from "@/components/page-layout"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Badge } from "@/components/ui/badge"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  Send,
  MessageSquare,
  Users,
  Headphones,
  CheckCircle,
  AlertCircle,
} from "lucide-react"
import { useToast } from "@/hooks/use-toast"
import Image from "next/image"

export default function ContactPage() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    service: "",
    message: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const { toast } = useToast()

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }))
  }

  const handleSelectChange = (value: string) => {
    setFormData((prev) => ({
      ...prev,
      service: value,
    }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    try {
      const formDataToSend = new FormData()
      formDataToSend.append("to", "hr@signinsoft.net")
      formDataToSend.append(
        "subject",
        `Contact Form Inquiry: ${formData.service || "General"} - ${formData.firstName} ${formData.lastName}`,
      )
      formDataToSend.append("firstName", formData.firstName)
      formDataToSend.append("lastName", formData.lastName)
      formDataToSend.append("email", formData.email)
      formDataToSend.append("phone", formData.phone)
      formDataToSend.append("service", formData.service)
      formDataToSend.append("message", formData.message)

      // Create email body
      const emailBody = `
        New Contact Form Inquiry
        
        Contact Details:
        Name: ${formData.firstName} ${formData.lastName}
        Email: ${formData.email}
        Phone: ${formData.phone}
        Service Interest: ${formData.service || "Not specified"}
        
        Message:
        ${formData.message}
        
        Inquiry submitted on: ${new Date().toLocaleString()}
      `

      formDataToSend.append("body", emailBody)

      // In a real application, this would send to your backend API
      // For now, we'll simulate the API call
      await new Promise((resolve) => setTimeout(resolve, 2000))

      toast({
        title: "Message Sent Successfully!",
        description: "We've received your inquiry and will contact you soon.",
        action: <CheckCircle className="h-4 w-4" />,
      })

      // Reset form
      setFormData({
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        service: "",
        message: "",
      })
    } catch (error) {
      toast({
        title: "Submission Failed",
        description: "There was an error sending your message. Please try again.",
        variant: "destructive",
        action: <AlertCircle className="h-4 w-4" />,
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  const offices = [
    {
      country: "USA",
      city: "Somerset, NJ",
      address: "1553 Route 27, Room 1000-2, Suite 1000, Somerset, NJ 08873",
      phone: "+1(302) 703-1113",
      email: "info@signinsoft.net",
      hours: "Mon-Fri: 9:00 AM - 6:00 PM EST",
    },
    {
      country: "India",
      city: "Hyderabad",
      address: "Flat no.202, Sri Sai Goverdhan Kunj, SR Nagar, Hyderabad-500038",
      phone: "040 – 40023456",
      email: "info@signinsoft.co.in",
      hours: "Mon-Fri: 9:00 AM - 6:00 PM IST",
    },
    {
      country: "Dubai, UAE",
      city: "Al Garhood",
      address: "HNS Business Center, Office 12, Emitech Building, AL Garhood",
      phone: "+971 554881986",
      email: "info@signinsoft.net",
      hours: "Mon-Fri: 9:00 AM - 6:00 PM GST",
    },
  ]

  const contactReasons = [
    {
      icon: MessageSquare,
      title: "General Inquiry",
      description: "Questions about our services or company",
    },
    {
      icon: Users,
      title: "Project Discussion",
      description: "Ready to start your next project",
    },
    {
      icon: Headphones,
      title: "Support",
      description: "Need help with existing services",
    },
  ]

  return (
    <PageLayout>
      {/* Hero Section */}
      <section className="relative py-20 px-4 bg-gradient-to-br from-primary/10 via-background to-secondary/10 overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/modern-office-contact-center-customer-service-team.png"
            alt="Contact SigninSoft"
            fill
            className="object-cover opacity-20"
            priority
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-br from-background/90 via-background/80 to-primary/10" />

        <div className="max-w-7xl mx-auto text-center relative animate-fade-in">
          <Badge className="mb-4 bg-primary/20 text-primary border-primary/30 animate-bounce-in">
            <MessageSquare className="w-3 h-3 mr-1 flat-icon flat-icon-small" />
            Contact Us
          </Badge>
          <h1 className="text-4xl md:text-6xl font-bold mb-6 text-balance animate-slide-up">
            Let's Start a<span className="text-primary gradient-text"> Conversation</span>
          </h1>
          <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto text-pretty animate-slide-up">
            Ready to transform your business or need visa assistance? Our global team is here to help you succeed. Reach
            out to us and let's discuss your goals.
          </p>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div className="animate-slide-up">
              <h2 className="text-3xl font-bold mb-6">Send us a Message</h2>
              <Card className="border-border/50 hover:shadow-lg transition-shadow card-animate">
                <CardContent className="p-6">
                  <form onSubmit={handleSubmit} className="space-y-6 stagger-animation">
                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <label className="text-sm font-medium mb-2 block">First Name *</label>
                        <Input
                          name="firstName"
                          value={formData.firstName}
                          onChange={handleInputChange}
                          placeholder="John"
                          required
                          className="hover-lift"
                        />
                      </div>
                      <div>
                        <label className="text-sm font-medium mb-2 block">Last Name *</label>
                        <Input
                          name="lastName"
                          value={formData.lastName}
                          onChange={handleInputChange}
                          placeholder="Doe"
                          required
                          className="hover-lift"
                        />
                      </div>
                    </div>
                    <div>
                      <label className="text-sm font-medium mb-2 block">Email *</label>
                      <Input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        placeholder="john@example.com"
                        required
                        className="hover-lift"
                      />
                    </div>
                    <div>
                      <label className="text-sm font-medium mb-2 block">Phone *</label>
                      <Input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                        placeholder="+1 (555) 123-4567"
                        required
                        className="hover-lift"
                      />
                    </div>
                    <div>
                      <label className="text-sm font-medium mb-2 block">Service Interest</label>
                      <Select value={formData.service} onValueChange={handleSelectChange}>
                        <SelectTrigger className="hover-lift">
                          <SelectValue placeholder="Select a service" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="it-consulting">IT Consulting</SelectItem>
                          <SelectItem value="software-development">Software Development</SelectItem>
                          <SelectItem value="ui-ux-design">UI/UX Design</SelectItem>
                          <SelectItem value="data-analytics">Data & Analytics</SelectItem>
                          <SelectItem value="cybersecurity">Cybersecurity</SelectItem>
                          <SelectItem value="digital-marketing">Digital Marketing</SelectItem>
                          <SelectItem value="visa-services">Visa Services</SelectItem>
                          <SelectItem value="other">Other</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <div>
                      <label className="text-sm font-medium mb-2 block">Message *</label>
                      <Textarea
                        name="message"
                        value={formData.message}
                        onChange={handleInputChange}
                        placeholder="Tell us about your project or requirements..."
                        className="min-h-[120px] hover-lift"
                        required
                      />
                    </div>
                    <Button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full bg-primary hover:bg-primary/90 btn-animate hover-lift disabled:opacity-50"
                    >
                      {isSubmitting ? (
                        <>
                          <div className="loading-dots mr-2">
                            <span></span>
                            <span></span>
                            <span></span>
                          </div>
                          Sending Message...
                        </>
                      ) : (
                        <>
                          Send Message
                          <Send className="ml-2 h-4 w-4" />
                        </>
                      )}
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>

            {/* Contact Reasons */}
            <div className="animate-slide-up">
              <h2 className="text-3xl font-bold mb-6">How Can We Help?</h2>
              <div className="space-y-6 mb-8 stagger-animation">
                {contactReasons.map((reason, index) => (
                  <Card key={index} className="border-border/50 hover:border-primary/30 transition-colors card-animate">
                    <CardContent className="p-6">
                      <div className="flex items-start gap-4">
                        <div className="w-12 h-12 bg-primary/20 rounded-lg flex items-center justify-center flex-shrink-0 flat-icon flat-icon-large hover-scale">
                          <reason.icon className="h-6 w-6 text-primary" />
                        </div>
                        <div>
                          <h3 className="text-xl font-semibold mb-2">{reason.title}</h3>
                          <p className="text-muted-foreground">{reason.description}</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>

              <Card className="bg-gradient-to-br from-primary/10 to-secondary/10 border-primary/20 card-animate">
                <CardContent className="p-6 text-center">
                  <h3 className="text-xl font-semibold mb-2">Need Immediate Assistance?</h3>
                  <p className="text-muted-foreground mb-4">
                    Our team is available for urgent inquiries and consultations.
                  </p>
                  <Button
                    variant="outline"
                    className="border-primary text-primary hover:bg-primary hover:text-primary-foreground bg-transparent btn-animate hover-lift"
                  >
                    Schedule a Call
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Office Locations */}
      <section className="py-20 px-4 bg-card/30">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Global Offices</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Visit us at any of our locations or reach out through your preferred communication channel.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 stagger-animation">
            {offices.map((office, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow card-animate">
                <CardHeader>
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-12 h-12 bg-primary/20 rounded-lg flex items-center justify-center flat-icon flat-icon-large hover-scale">
                      <MapPin className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <CardTitle className="text-xl">{office.country}</CardTitle>
                      <p className="text-muted-foreground text-sm">{office.city}</p>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <h4 className="font-semibold mb-2 flex items-center gap-2">
                      <MapPin className="h-4 w-4 text-primary flat-icon flat-icon-small" />
                      Address
                    </h4>
                    <p className="text-muted-foreground text-sm">{office.address}</p>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2 flex items-center gap-2">
                      <Phone className="h-4 w-4 text-primary flat-icon flat-icon-small" />
                      Phone
                    </h4>
                    <p className="text-sm">{office.phone}</p>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2 flex items-center gap-2">
                      <Mail className="h-4 w-4 text-primary flat-icon flat-icon-small" />
                      Email
                    </h4>
                    <p className="text-sm">{office.email}</p>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2 flex items-center gap-2">
                      <Clock className="h-4 w-4 text-primary flat-icon flat-icon-small" />
                      Hours
                    </h4>
                    <p className="text-sm text-muted-foreground">{office.hours}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-gradient-to-r from-primary to-secondary animate-fade-in">
        <div className="max-w-4xl mx-auto text-center text-primary-foreground">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 animate-slide-up">Ready to Get Started?</h2>
          <p className="text-xl mb-8 opacity-90 animate-slide-up">
            Join hundreds of satisfied clients who have transformed their business with SigninSoft.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-slide-up">
            <Button size="lg" variant="secondary" className="btn-animate hover-lift">
              Start Your Project
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary bg-transparent btn-animate hover-lift"
            >
              Free Consultation
            </Button>
          </div>
        </div>
      </section>
    </PageLayout>
  )
}
