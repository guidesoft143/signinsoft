import { PageLayout } from "@/components/page-layout"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ArrowRight, Globe, Users, Clock, Shield, CheckCircle, Plane } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

export default function VisaServicesPage() {
  const visaServices = [
    {
      title: "Study Abroad Visas",
      description: "Complete guidance for student visa applications worldwide",
      icon: Users,
      href: "/visa-services/study-abroad",
      features: ["University Selection", "Document Preparation", "Interview Coaching", "Post-arrival Support"],
    },
    {
      title: "Work & Business Visas",
      description: "Professional visa services for career opportunities",
      icon: Globe,
      href: "/visa-services/work-business",
      features: ["H1B Processing", "L1 Visas", "Business Setup", "Investment Visas"],
    },
    {
      title: "Travel & Tourism",
      description: "Hassle-free tourist and visitor visa processing",
      icon: Plane,
      href: "/visa-services/travel-tourism",
      features: ["Tourist Visas", "Family Visits", "Medical Tourism", "Transit Visas"],
    },
    {
      title: "Visa Extension & Renewal",
      description: "Extend your stay with professional assistance",
      icon: Clock,
      href: "/visa-services/extension-renewal",
      features: ["Status Extensions", "Renewals", "Change of Status", "Emergency Processing"],
    },
    {
      title: "Document Verification",
      description: "Authentic document attestation and verification",
      icon: Shield,
      href: "/visa-services/document-verification",
      features: ["Educational Certificates", "Employment Letters", "Apostille Services", "Translation"],
    },
    {
      title: "Immigration Consultation",
      description: "Expert advice for your immigration journey",
      icon: CheckCircle,
      href: "/visa-services/immigration-consultation",
      features: ["Case Assessment", "Legal Guidance", "Strategy Planning", "Ongoing Support"],
    },
  ]

  const stats = [
    { number: "15,000+", label: "Successful Applications" },
    { number: "98%", label: "Approval Rate" },
    { number: "50+", label: "Countries Covered" },
    { number: "24/7", label: "Support Available" },
  ]

  return (
    <PageLayout>
      {/* Hero Section */}
      <section className="relative py-20 px-4 bg-gradient-to-br from-primary/10 via-background to-secondary/10 overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/international-travel-passport-visa-documents-globa.png"
            alt="Visa Services - International Travel and Immigration"
            fill
            className="object-cover opacity-20"
            priority
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-br from-background/95 via-background/90 to-primary/20" />

        <div className="max-w-7xl mx-auto text-center relative animate-fade-in">
          <Badge className="mb-4 bg-primary/20 text-primary border-primary/30 backdrop-blur-sm animate-bounce-in">
            <Plane className="w-3 h-3 mr-1 flat-icon flat-icon-small" />
            Visa Services
          </Badge>
          <h1 className="text-4xl md:text-6xl font-bold mb-6 text-balance animate-slide-up">
            Your Gateway to
            <span className="text-primary gradient-text"> Global Opportunities</span>
          </h1>
          <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto text-pretty animate-slide-up">
            Navigate the complex world of visas with confidence. Our expert team provides comprehensive visa services
            for study, work, business, and travel across 50+ countries.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-slide-up">
            <Button size="lg" className="bg-primary hover:bg-primary/90 btn-animate hover-lift">
              Start Your Application
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
            <Button size="lg" variant="outline" className="backdrop-blur-sm bg-transparent btn-animate hover-lift">
              Free Consultation
            </Button>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 px-4 bg-card/50">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 stagger-animation">
            {stats.map((stat, index) => (
              <div key={index} className="text-center card-animate hover-scale">
                <div className="text-3xl md:text-4xl font-bold text-primary mb-2 gradient-text">{stat.number}</div>
                <div className="text-muted-foreground">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Comprehensive Visa Services</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              From student visas to business immigration, we provide end-to-end support for all your visa and
              immigration needs.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 stagger-animation">
            {visaServices.map((service, index) => (
              <Card
                key={index}
                className="group hover:shadow-lg transition-all duration-300 border-border/50 hover:border-primary/30 card-animate"
              >
                <CardHeader>
                  <div className="w-16 h-16 bg-primary/20 rounded-lg flex items-center justify-center mb-4 flat-icon flat-icon-large hover-scale">
                    <service.icon className="h-8 w-8 text-primary" />
                  </div>
                  <CardTitle className="group-hover:text-primary transition-colors">{service.title}</CardTitle>
                  <CardDescription>{service.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 mb-6">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center text-sm hover-lift">
                        <CheckCircle className="h-4 w-4 text-primary mr-2 flex-shrink-0 flat-icon flat-icon-small" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <Button
                    asChild
                    variant="outline"
                    className="w-full group-hover:bg-primary group-hover:text-primary-foreground bg-transparent btn-animate hover-lift"
                  >
                    <Link href={service.href}>
                      Learn More
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 px-4 bg-card/30">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Why Choose SigninSoft for Visa Services?</h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 stagger-animation">
            <div className="text-center card-animate">
              <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-4 flat-icon flat-icon-large hover-scale">
                <Users className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Expert Team</h3>
              <p className="text-muted-foreground">Certified immigration consultants with 15+ years experience</p>
            </div>

            <div className="text-center card-animate">
              <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-4 flat-icon flat-icon-large hover-scale">
                <Clock className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Fast Processing</h3>
              <p className="text-muted-foreground">Quick turnaround times with priority processing options</p>
            </div>

            <div className="text-center card-animate">
              <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-4 flat-icon flat-icon-large hover-scale">
                <Shield className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Secure Process</h3>
              <p className="text-muted-foreground">100% secure document handling with complete confidentiality</p>
            </div>

            <div className="text-center card-animate">
              <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-4 flat-icon flat-icon-large hover-scale">
                <Globe className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Global Reach</h3>
              <p className="text-muted-foreground">Offices in USA, India, and Dubai for worldwide support</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-gradient-to-r from-primary to-secondary animate-fade-in">
        <div className="max-w-4xl mx-auto text-center text-primary-foreground">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 animate-slide-up">Ready to Start Your Visa Journey?</h2>
          <p className="text-xl mb-8 opacity-90 animate-slide-up">
            Get expert guidance and personalized support for your visa application process.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-slide-up">
            <Button size="lg" variant="secondary" className="btn-animate hover-lift">
              Schedule Free Consultation
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary bg-transparent btn-animate hover-lift"
            >
              Contact Our Experts
            </Button>
          </div>
        </div>
      </section>
    </PageLayout>
  )
}
