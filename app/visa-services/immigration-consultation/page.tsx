import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ContactForm } from "@/components/contact-form"
import { ArrowRight, CheckCircle, Users, Home, Briefcase, Heart, Scale, Globe, Clock, Award } from "lucide-react"
import Link from "next/link"

const services = [
  {
    icon: Home,
    title: "Permanent Residency",
    description: "Complete guidance for PR applications worldwide",
    countries: ["Canada Express Entry", "Australia SkillSelect", "UK Settlement", "US Green Card"],
  },
  {
    icon: Briefcase,
    title: "Work Immigration",
    description: "Professional immigration for skilled workers",
    countries: ["H-1B to Green Card", "Provincial Nominee", "Skilled Migration", "Employer Sponsorship"],
  },
  {
    icon: Heart,
    title: "Family Immigration",
    description: "Reunite with family through immigration programs",
    countries: ["Spouse Sponsorship", "Parent Sponsorship", "Child Immigration", "Family Reunification"],
  },
  {
    icon: Scale,
    title: "Legal Consultation",
    description: "Expert legal advice for complex immigration cases",
    countries: ["Appeal Cases", "Refusal Analysis", "Legal Representation", "Court Proceedings"],
  },
]

const consultationTypes = [
  {
    title: "Initial Assessment",
    duration: "60 minutes",
    price: "$150",
    features: ["Eligibility Review", "Options Analysis", "Timeline Planning", "Document Checklist"],
  },
  {
    title: "Comprehensive Review",
    duration: "90 minutes",
    price: "$250",
    features: ["Detailed Case Analysis", "Strategy Development", "Risk Assessment", "Action Plan"],
  },
  {
    title: "Ongoing Support",
    duration: "Monthly",
    price: "$300/month",
    features: ["Regular Updates", "Application Monitoring", "Document Review", "Priority Support"],
  },
]

const processSteps = [
  {
    step: "01",
    title: "Initial Consultation",
    description: "Comprehensive assessment of your immigration goals and eligibility",
    timeline: "1-2 hours",
  },
  {
    step: "02",
    title: "Strategy Development",
    description: "Create personalized immigration strategy and timeline",
    timeline: "3-5 days",
  },
  {
    step: "03",
    title: "Application Process",
    description: "Guide through application preparation and submission",
    timeline: "Ongoing",
  },
  {
    step: "04",
    title: "Follow-up Support",
    description: "Continuous support until successful completion",
    timeline: "As needed",
  },
]

const stats = [
  { number: "2,000+", label: "Successful Cases", icon: Users },
  { number: "15+", label: "Years Experience", icon: Award },
  { number: "25+", label: "Countries Covered", icon: Globe },
  { number: "24/7", label: "Support Available", icon: Clock },
]

const expertiseAreas = [
  "Express Entry (Canada)",
  "Australian Points System",
  "UK Immigration Rules",
  "US Immigration Law",
  "European Union Migration",
  "Investment Immigration",
  "Refugee & Asylum Cases",
  "Business Immigration",
]

export default function ImmigrationConsultationPage() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main>
        {/* Hero Section */}
        <section className="relative overflow-hidden py-20 lg:py-32">
          <div
            className="absolute inset-0 bg-cover bg-center bg-no-repeat"
            style={{
              backgroundImage: `url('/professional-consultation-immigration-advisor-cli.png')`,
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-br from-background/95 via-background/90 to-primary/20" />
          <div className="absolute inset-0 bg-grid-white/[0.02] bg-[size:50px_50px]" />

          <div className="container relative mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center space-y-8 animate-fade-in">
              <Badge className="bg-accent/10 text-accent border-accent/20 backdrop-blur-sm">
                Immigration Consultation
              </Badge>
              <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl lg:text-6xl text-balance">
                Expert Immigration Advice for <span className="text-accent">Your Future</span>
              </h1>
              <p className="text-xl text-muted-foreground text-pretty max-w-3xl mx-auto">
                Navigate complex immigration laws with confidence. Our certified immigration consultants provide
                personalized guidance for permanent residency, work permits, and family immigration across multiple
                countries.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button asChild size="lg" className="bg-accent hover:bg-accent/90">
                  <Link href="#contact-form">
                    Book Free Consultation
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
                <Button asChild variant="outline" size="lg" className="backdrop-blur-sm bg-transparent">
                  <Link href="#services">Explore Services</Link>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-16 bg-card/50">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-3">
                    <stat.icon className="h-6 w-6 text-primary" />
                  </div>
                  <div className="text-2xl md:text-3xl font-bold text-primary mb-1">{stat.number}</div>
                  <div className="text-sm text-muted-foreground">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Services Overview */}
        <section id="services" className="py-20">
          <div className="container mx-auto px-4">
            <div className="text-center space-y-4 mb-16">
              <h2 className="text-3xl font-bold text-foreground sm:text-4xl text-balance">Immigration Services</h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-pretty">
                Comprehensive immigration consultation services for all your migration needs.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {services.map((service) => (
                <Card key={service.title} className="border-border/50 hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <div className="rounded-lg bg-accent/10 p-3 w-fit">
                      <service.icon className="h-6 w-6 text-accent" />
                    </div>
                    <CardTitle className="text-xl">{service.title}</CardTitle>
                    <CardDescription className="text-muted-foreground">{service.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div>
                        <h4 className="font-semibold text-foreground mb-2">Popular Programs:</h4>
                        <ul className="space-y-1">
                          {service.countries.map((country) => (
                            <li key={country} className="flex items-center space-x-2">
                              <CheckCircle className="h-4 w-4 text-accent flex-shrink-0" />
                              <span className="text-sm text-muted-foreground">{country}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Consultation Packages */}
        <section className="py-20 bg-card/30">
          <div className="container mx-auto px-4">
            <div className="text-center space-y-4 mb-16">
              <h2 className="text-3xl font-bold text-foreground sm:text-4xl text-balance">Consultation Packages</h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-pretty">
                Choose the consultation package that best fits your immigration needs and budget.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {consultationTypes.map((consultation) => (
                <Card key={consultation.title} className="border-border/50 hover:shadow-lg transition-shadow">
                  <CardHeader className="text-center">
                    <CardTitle className="text-xl">{consultation.title}</CardTitle>
                    <div className="text-3xl font-bold text-accent">{consultation.price}</div>
                    <CardDescription>{consultation.duration}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-3">
                      {consultation.features.map((feature) => (
                        <li key={feature} className="flex items-center space-x-2">
                          <CheckCircle className="h-4 w-4 text-accent flex-shrink-0" />
                          <span className="text-sm text-muted-foreground">{feature}</span>
                        </li>
                      ))}
                    </ul>
                    <Button className="w-full mt-6 bg-accent hover:bg-accent/90">Book Consultation</Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Process Timeline */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="text-center space-y-4 mb-16">
              <h2 className="text-3xl font-bold text-foreground sm:text-4xl text-balance">Consultation Process</h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-pretty">
                Our structured approach ensures you receive comprehensive immigration guidance.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {processSteps.map((step) => (
                <div key={step.step} className="text-center space-y-4">
                  <div className="text-4xl font-bold text-accent">{step.step}</div>
                  <h3 className="text-xl font-semibold text-foreground">{step.title}</h3>
                  <p className="text-muted-foreground">{step.description}</p>
                  <div className="flex items-center justify-center space-x-1 text-sm text-accent">
                    <Clock className="h-4 w-4" />
                    <span>{step.timeline}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Expertise Areas */}
        <section className="py-20 bg-card/30">
          <div className="container mx-auto px-4">
            <div className="text-center space-y-4 mb-16">
              <h2 className="text-3xl font-bold text-foreground sm:text-4xl text-balance">Areas of Expertise</h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-pretty">
                Our consultants specialize in various immigration programs and countries.
              </p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {expertiseAreas.map((area) => (
                <Card key={area} className="border-border/50 text-center">
                  <CardContent className="p-4">
                    <div className="flex items-center justify-center space-x-2">
                      <CheckCircle className="h-4 w-4 text-accent flex-shrink-0" />
                      <span className="text-sm font-medium text-foreground">{area}</span>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Form Section */}
        <section id="contact-form" className="py-20">
          <div className="container mx-auto px-4">
            <div className="text-center space-y-4 mb-16">
              <h2 className="text-3xl font-bold text-foreground sm:text-4xl text-balance">
                Ready to Start Your Immigration Journey?
              </h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-pretty">
                Book a consultation with our certified immigration experts and take the first step towards your new life
                abroad.
              </p>
            </div>
            <ContactForm
              title="Book Immigration Consultation"
              description="Fill out the form below and our immigration consultants will contact you within 24 hours to schedule your consultation."
            />
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
