"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { ArrowRight, ChevronLeft, ChevronRight, Zap, Globe, Users, Award, CheckCircle } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

const slides = [
  {
    id: 1,
    title: "Transform Your Business with Expert IT Solutions",
    subtitle: "Professional software development and IT consulting services",
    description:
      "Custom software solutions, web applications, and digital transformation services to accelerate your business growth.",
    image: "/modern-office-technology-team-collaboration-digita.png",
    cta: "Start Your Project",
    ctaLink: "/services/software-development",
    stats: [
      { number: "500+", label: "Projects Delivered" },
      { number: "50+", label: "Global Clients" },
      { number: "10+", label: "Years Experience" },
      { number: "3", label: "Global Offices" },
    ],
  },
  {
    id: 2,
    title: "Navigate Your Visa Journey with Confidence",
    subtitle: "Comprehensive visa and immigration services worldwide",
    description:
      "Expert guidance for study abroad, work visas, business immigration, and family reunification across 50+ countries.",
    image: "/international-travel-passport-visa-documents-globa.png",
    cta: "Apply for Visa",
    ctaLink: "/visa-services",
    stats: [
      { number: "15,000+", label: "Visas Processed" },
      { number: "98%", label: "Success Rate" },
      { number: "50+", label: "Countries" },
      { number: "24/7", label: "Support" },
    ],
  },
  {
    id: 3,
    title: "Cutting-Edge Technology Solutions",
    subtitle: "Modern tech stack for scalable applications",
    description:
      "React, Next.js, Node.js, Python, cloud infrastructure, and AI-powered solutions for enterprise-grade applications.",
    image: "/modern-technology-stack-coding-development-react-n.png",
    cta: "View Technologies",
    ctaLink: "/technologies",
    stats: [
      { number: "20+", label: "Technologies" },
      { number: "100%", label: "Cloud Native" },
      { number: "99.9%", label: "Uptime" },
      { number: "24/7", label: "Monitoring" },
    ],
  },
  {
    id: 4,
    title: "Global Presence, Local Expertise",
    subtitle: "Offices in USA, India, and Dubai",
    description:
      "Round-the-clock support with local expertise in major business hubs. Seamless collaboration across time zones.",
    image: "/global-business-offices-usa-india-dubai-internatio.png",
    cta: "Contact Us",
    ctaLink: "/contact",
    stats: [
      { number: "3", label: "Global Offices" },
      { number: "100+", label: "Team Members" },
      { number: "25+", label: "Time Zones" },
      { number: "15+", label: "Languages" },
    ],
  },
]

export function HeroSlider() {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [isAutoPlaying, setIsAutoPlaying] = useState(true)
  const [isLoaded, setIsLoaded] = useState(false)

  // Auto-advance slides with lazy loading
  useEffect(() => {
    if (!isAutoPlaying) return

    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length)
    }, 6000) // Increased interval for better UX

    return () => clearInterval(interval)
  }, [isAutoPlaying])

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsLoaded(true)
          }
        })
      },
      { threshold: 0.1 },
    )

    const heroElement = document.getElementById("hero-slider")
    if (heroElement) {
      observer.observe(heroElement)
    }

    return () => observer.disconnect()
  }, [])

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length)
    setIsAutoPlaying(false)
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length)
    setIsAutoPlaying(false)
  }

  const goToSlide = (index: number) => {
    setCurrentSlide(index)
    setIsAutoPlaying(false)
  }

  const currentSlideData = slides[currentSlide]

  return (
    <section id="hero-slider" className="relative overflow-hidden py-20 lg:py-32">
      {/* Background Image with Lazy Loading */}
      <div className="absolute inset-0">
        <Image
          src={currentSlideData.image || "/placeholder.svg"}
          alt={currentSlideData.title}
          fill
          className="object-cover transition-all duration-1000 ease-in-out"
          priority={currentSlide === 0}
          loading={currentSlide === 0 ? "eager" : "lazy"}
          sizes="100vw"
        />
      </div>
      <div className="absolute inset-0 bg-gradient-to-br from-background/95 via-background/90 to-primary/20" />
      <div className="absolute inset-0 bg-grid-white/[0.02] bg-[size:50px_50px]" />

      <div className="container relative mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center min-h-[600px]">
          <div className={`space-y-8 ${isLoaded ? "animate-fade-in" : "opacity-0"}`}>
            <div className="space-y-4">
              <div className="inline-flex items-center rounded-full border border-accent/20 bg-accent/10 px-4 py-2 text-sm text-accent backdrop-blur-sm animate-bounce-in">
                <Zap className="mr-2 h-4 w-4 flat-icon flat-icon-small" />
                Get into your Future
              </div>
              <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl lg:text-6xl text-balance animate-slide-up">
                {currentSlideData.title.split(" ").map((word, index) =>
                  word === "Expert" || word === "Confidence" || word === "Technology" || word === "Global" ? (
                    <span key={index} className="text-accent gradient-text">
                      {word}{" "}
                    </span>
                  ) : (
                    <span key={index}>{word} </span>
                  ),
                )}
              </h1>
              <p className="text-lg text-accent font-medium animate-slide-up">{currentSlideData.subtitle}</p>
              <p className="text-xl text-muted-foreground text-pretty max-w-2xl animate-slide-up">
                {currentSlideData.description}
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 animate-slide-up">
              <Button
                asChild
                size="lg"
                className="bg-accent hover:bg-accent/90 text-accent-foreground btn-animate hover-lift"
              >
                <Link href={currentSlideData.ctaLink}>
                  {currentSlideData.cta}
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button
                asChild
                variant="outline"
                size="lg"
                className="backdrop-blur-sm bg-transparent btn-animate hover-lift"
              >
                <Link href="/about">Learn More</Link>
              </Button>
            </div>

            {/* Stats Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 pt-8 stagger-animation">
              {currentSlideData.stats.map((stat, index) => (
                <div key={index} className="text-center card-animate">
                  <div className="text-2xl font-bold text-accent gradient-text">{stat.number}</div>
                  <div className="text-sm text-muted-foreground">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>

          <div className={`relative ${isLoaded ? "animate-slide-left" : "opacity-0"}`}>
            <div className="relative rounded-2xl bg-gradient-to-br from-primary/20 to-accent/20 p-8 backdrop-blur-sm border border-white/10 card-animate">
              <div className="space-y-6 stagger-animation">
                <div className="flex items-center space-x-4 rounded-lg bg-card/50 p-4 backdrop-blur hover-lift">
                  <div className="rounded-full bg-accent/20 p-3 flat-icon flat-icon-large">
                    <Globe className="h-6 w-6 text-accent" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground">Global Presence</h3>
                    <p className="text-sm text-muted-foreground">USA • India • Dubai</p>
                  </div>
                </div>

                <div className="flex items-center space-x-4 rounded-lg bg-card/50 p-4 backdrop-blur hover-lift">
                  <div className="rounded-full bg-accent/20 p-3 flat-icon flat-icon-large">
                    <Users className="h-6 w-6 text-accent" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground">Expert Team</h3>
                    <p className="text-sm text-muted-foreground">Certified professionals</p>
                  </div>
                </div>

                <div className="flex items-center space-x-4 rounded-lg bg-card/50 p-4 backdrop-blur hover-lift">
                  <div className="rounded-full bg-accent/20 p-3 flat-icon flat-icon-large">
                    <Award className="h-6 w-6 text-accent" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground">Quality Assured</h3>
                    <p className="text-sm text-muted-foreground">ISO certified processes</p>
                  </div>
                </div>

                <div className="flex items-center space-x-4 rounded-lg bg-card/50 p-4 backdrop-blur hover-lift">
                  <div className="rounded-full bg-accent/20 p-3 flat-icon flat-icon-large">
                    <CheckCircle className="h-6 w-6 text-accent" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground">Proven Results</h3>
                    <p className="text-sm text-muted-foreground">98% success rate</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Navigation Controls */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex items-center space-x-4 animate-fade-in">
        <button
          onClick={prevSlide}
          className="p-2 rounded-full bg-background/20 backdrop-blur-sm border border-white/10 hover:bg-background/30 transition-colors hover-scale"
          aria-label="Previous slide"
        >
          <ChevronLeft className="h-5 w-5 text-foreground" />
        </button>

        <div className="flex space-x-2">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 hover-scale ${
                index === currentSlide ? "bg-accent animate-pulse-glow" : "bg-background/40 backdrop-blur-sm"
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>

        <button
          onClick={nextSlide}
          className="p-2 rounded-full bg-background/20 backdrop-blur-sm border border-white/10 hover:bg-background/30 transition-colors hover-scale"
          aria-label="Next slide"
        >
          <ChevronRight className="h-5 w-5 text-foreground" />
        </button>
      </div>

      {/* Auto-play indicator */}
      <div className="absolute top-8 right-8 animate-fade-in">
        <button
          onClick={() => setIsAutoPlaying(!isAutoPlaying)}
          className="p-2 rounded-full bg-background/20 backdrop-blur-sm border border-white/10 hover:bg-background/30 transition-colors hover-scale"
          aria-label={isAutoPlaying ? "Pause slideshow" : "Play slideshow"}
        >
          {isAutoPlaying ? (
            <div className="w-4 h-4 flex items-center justify-center">
              <div className="w-1 h-3 bg-foreground mr-0.5 animate-pulse"></div>
              <div className="w-1 h-3 bg-foreground animate-pulse"></div>
            </div>
          ) : (
            <div className="w-4 h-4 flex items-center justify-center">
              <div className="w-0 h-0 border-l-[6px] border-l-foreground border-t-[4px] border-t-transparent border-b-[4px] border-b-transparent ml-0.5"></div>
            </div>
          )}
        </button>
      </div>
    </section>
  )
}
