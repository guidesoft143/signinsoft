"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ChevronLeft, ChevronRight, Star, Quote } from "lucide-react"
import { useState } from "react"

const testimonials = [
  {
    name: "Sarah Johnson",
    role: "CEO, TechStart Inc.",
    location: "New York, USA",
    content:
      "SigninSoft transformed our digital infrastructure completely. Their team's expertise in cloud migration and software development helped us scale our business 3x in just one year.",
    rating: 5,
  },
  {
    name: "Raj Patel",
    role: "Student",
    location: "Mumbai, India",
    content:
      "Thanks to SigninSoft's visa services, I successfully got my student visa for studying in Canada. Their guidance throughout the process was exceptional and stress-free.",
    rating: 5,
  },
  {
    name: "Ahmed Al-Rashid",
    role: "Business Owner",
    location: "Dubai, UAE",
    content:
      "The team at SigninSoft helped me establish my business in the US with their comprehensive visa and business consulting services. Highly professional and reliable.",
    rating: 5,
  },
  {
    name: "Maria Rodriguez",
    role: "CTO, FinanceFlow",
    location: "California, USA",
    content:
      "Outstanding cybersecurity implementation! SigninSoft's team secured our financial platform with enterprise-grade security solutions. Our clients trust us more than ever.",
    rating: 5,
  },
]

export function TestimonialsSlider() {
  const [currentIndex, setCurrentIndex] = useState(0)

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length)
  }

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length)
  }

  return (
    <section className="py-20 bg-card/30">
      <div className="container mx-auto px-4">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-3xl font-bold text-foreground sm:text-4xl text-balance">What Our Clients Say</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto text-pretty">
            Don't just take our word for it. Here's what our satisfied clients have to say about our services.
          </p>
        </div>

        <div className="relative max-w-4xl mx-auto">
          <Card className="border-border/50">
            <CardContent className="p-8">
              <div className="flex items-center justify-center mb-6">
                <Quote className="h-12 w-12 text-accent/30" />
              </div>

              <div className="text-center space-y-6">
                <div className="flex justify-center space-x-1 mb-4">
                  {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 fill-accent text-accent" />
                  ))}
                </div>

                <blockquote className="text-xl text-foreground leading-relaxed text-pretty">
                  "{testimonials[currentIndex].content}"
                </blockquote>

                <div className="space-y-2">
                  <div className="font-semibold text-foreground text-lg">{testimonials[currentIndex].name}</div>
                  <div className="text-muted-foreground">{testimonials[currentIndex].role}</div>
                  <div className="text-sm text-accent">{testimonials[currentIndex].location}</div>
                </div>
              </div>
            </CardContent>
          </Card>

          <div className="flex justify-center items-center space-x-4 mt-8">
            <Button variant="outline" size="icon" onClick={prevSlide}>
              <ChevronLeft className="h-4 w-4" />
            </Button>

            <div className="flex space-x-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  className={`w-3 h-3 rounded-full transition-colors ${
                    index === currentIndex ? "bg-accent" : "bg-muted"
                  }`}
                  onClick={() => setCurrentIndex(index)}
                />
              ))}
            </div>

            <Button variant="outline" size="icon" onClick={nextSlide}>
              <ChevronRight className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
