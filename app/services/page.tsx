import { PageLayout } from "@/components/page-layout"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ArrowRight, Cloud, Code, Palette, BarChart3, Shield, Megaphone } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

const services = [
  {
    icon: Cloud,
    title: "IT Consulting & Strategy",
    description: "Digital transformation, enterprise architecture, and cloud consulting solutions.",
    href: "/services/it-consulting",
    features: ["Digital Transformation", "Enterprise Architecture", "Cloud & DevOps Consulting"],
  },
  {
    icon: Code,
    title: "Software Development",
    description: "Custom web, mobile, and enterprise software solutions built to scale.",
    href: "/services/software-development",
    features: ["Web Applications", "Mobile Apps", "Custom Software"],
  },
  {
    icon: Palette,
    title: "UI/UX Design",
    description: "User-centered design, prototyping, and brand identity development.",
    href: "/services/ui-ux-design",
    features: ["User Research", "Prototyping", "Product Design"],
  },
  {
    icon: BarChart3,
    title: "Data & Analytics",
    description: "Business intelligence, data engineering, and AI/ML solutions.",
    href: "/services/data-analytics",
    features: ["Data Engineering", "Business Intelligence", "AI/ML Solutions"],
  },
  {
    icon: Shield,
    title: "Cybersecurity Services",
    description: "Comprehensive security solutions and compliance management.",
    href: "/services/cybersecurity",
    features: ["Threat Detection", "Compliance", "Security Operations"],
  },
  {
    icon: Megaphone,
    title: "Digital Marketing",
    description: "SEO, SEM, social media marketing, and performance campaigns.",
    href: "/services/digital-marketing",
    features: ["SEO & SEM", "Social Media", "Performance Marketing"],
  },
]

export default function ServicesPage() {
  return (
    <PageLayout>
      {/* Hero Section */}
      <section className="relative py-20 px-4 bg-gradient-to-br from-primary/10 via-background to-secondary/10 overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/modern-it-infrastructure-cloud-computing-software-.png"
            alt="IT Services - Modern Technology Solutions"
            fill
            className="object-cover opacity-20"
            priority
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-br from-background/95 via-background/90 to-primary/20" />

        <div className="max-w-7xl mx-auto text-center relative animate-fade-in">
          <Badge className="mb-4 bg-primary/20 text-primary border-primary/30 animate-bounce-in">
            <Cloud className="w-3 h-3 mr-1 flat-icon flat-icon-small" />
            Our Services
          </Badge>
          <h1 className="text-4xl md:text-6xl font-bold mb-6 text-balance animate-slide-up">
            Comprehensive <span className="text-primary gradient-text">IT Solutions</span> for Modern Businesses
          </h1>
          <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto text-pretty animate-slide-up">
            From strategy to implementation, we provide end-to-end technology solutions that drive business growth,
            enhance efficiency, and deliver competitive advantages in today's digital landscape.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-slide-up">
            <Button asChild size="lg" className="bg-primary hover:bg-primary/90 btn-animate hover-lift">
              <Link href="/contact">
                Get Started Today
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button
              asChild
              variant="outline"
              size="lg"
              className="backdrop-blur-sm bg-transparent btn-animate hover-lift"
            >
              <Link href="/about">View Case Studies</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Services</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Explore our comprehensive range of IT services designed to meet your business needs and drive digital
              transformation.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 stagger-animation">
            {services.map((service) => (
              <Card
                key={service.title}
                className="group hover:shadow-lg transition-all duration-300 border-border/50 hover:border-primary/30 card-animate"
              >
                <CardHeader>
                  <div className="rounded-lg bg-primary/20 p-3 w-fit flat-icon flat-icon-large hover-scale">
                    <service.icon className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle className="text-xl">{service.title}</CardTitle>
                  <CardDescription className="text-muted-foreground">{service.description}</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <ul className="space-y-2">
                    {service.features.map((feature) => (
                      <li key={feature} className="text-sm text-muted-foreground hover-lift">
                        • {feature}
                      </li>
                    ))}
                  </ul>
                  <Button asChild variant="ghost" className="group-hover:text-primary transition-colors btn-animate">
                    <Link href={service.href}>
                      Learn More
                      <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
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
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Why Choose SigninSoft</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Partner with us for reliable, scalable, and innovative IT solutions that drive business success.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 stagger-animation">
            {[
              {
                title: "Global Expertise",
                description: "Offices in USA, India, and Dubai with local market knowledge and global best practices.",
              },
              {
                title: "Proven Track Record",
                description: "500+ successful projects delivered across various industries and business sizes.",
              },
              {
                title: "Cutting-Edge Technology",
                description: "Latest technologies and frameworks to ensure your solutions are future-ready.",
              },
              {
                title: "24/7 Support",
                description: "Round-the-clock support and maintenance to keep your systems running smoothly.",
              },
            ].map((benefit) => (
              <div key={benefit.title} className="text-center space-y-4 card-animate">
                <h3 className="text-xl font-semibold text-foreground">{benefit.title}</h3>
                <p className="text-muted-foreground">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-gradient-to-r from-primary to-secondary animate-fade-in">
        <div className="max-w-4xl mx-auto text-center text-primary-foreground">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 animate-slide-up">Ready to Transform Your Business?</h2>
          <p className="text-xl mb-8 opacity-90 animate-slide-up">
            Let's discuss how our comprehensive IT services can help you achieve your business goals and drive digital
            transformation.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-slide-up">
            <Button asChild size="lg" variant="secondary" className="btn-animate hover-lift">
              <Link href="/contact">
                Schedule Consultation
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button
              asChild
              variant="outline"
              size="lg"
              className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary bg-transparent btn-animate hover-lift"
            >
              <Link href="/visa-services">Explore Visa Services</Link>
            </Button>
          </div>
        </div>
      </section>
    </PageLayout>
  )
}
