import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ArrowRight, CheckCircle, Cloud, TrendingUp, Users, Shield, Zap } from "lucide-react"
import Link from "next/link"

const services = [
  {
    title: "Digital Transformation",
    description: "Comprehensive digital strategy and roadmap development to modernize your business operations.",
    features: ["Legacy System Modernization", "Process Automation", "Digital Strategy Planning", "Change Management"],
  },
  {
    title: "Enterprise Architecture",
    description: "Design scalable, secure, and efficient enterprise architecture solutions.",
    features: ["System Integration", "Architecture Assessment", "Technology Roadmaps", "Governance Frameworks"],
  },
  {
    title: "Cloud & DevOps Consulting",
    description: "Expert guidance on cloud migration, infrastructure optimization, and DevOps implementation.",
    features: [
      "Cloud Migration Strategy",
      "Infrastructure as Code",
      "CI/CD Pipeline Setup",
      "Performance Optimization",
    ],
  },
]

const benefits = [
  {
    icon: TrendingUp,
    title: "Increased Efficiency",
    description: "Streamline operations and reduce costs through strategic technology implementation.",
  },
  {
    icon: Shield,
    title: "Enhanced Security",
    description: "Implement robust security frameworks to protect your digital assets.",
  },
  {
    icon: Users,
    title: "Expert Guidance",
    description: "Access to certified consultants with deep industry expertise.",
  },
  {
    icon: Zap,
    title: "Faster Time-to-Market",
    description: "Accelerate your digital initiatives with proven methodologies.",
  },
]

export default function ITConsultingPage() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main>
        {/* Hero Section */}
        <section className="relative overflow-hidden bg-gradient-to-br from-background via-background to-primary/5 py-20 lg:py-32">
          <div className="absolute inset-0 bg-grid-white/[0.02] bg-[size:50px_50px]" />
          <div className="container relative mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center space-y-8">
              <Badge className="bg-accent/10 text-accent border-accent/20">IT Consulting & Strategy</Badge>
              <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl lg:text-6xl text-balance">
                Transform Your Business with <span className="text-accent">Strategic IT Consulting</span>
              </h1>
              <p className="text-xl text-muted-foreground text-pretty max-w-3xl mx-auto">
                Navigate the complex digital landscape with our expert IT consulting services. We help organizations
                modernize their technology infrastructure, optimize operations, and drive sustainable growth.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button asChild size="lg" className="bg-accent hover:bg-accent/90">
                  <Link href="/contact">
                    Get Free Consultation
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
                <Button asChild variant="outline" size="lg">
                  <Link href="/case-studies">View Case Studies</Link>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Services Overview */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="text-center space-y-4 mb-16">
              <h2 className="text-3xl font-bold text-foreground sm:text-4xl text-balance">Our Consulting Services</h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-pretty">
                Comprehensive IT consulting solutions tailored to your business needs and industry requirements.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {services.map((service) => (
                <Card key={service.title} className="border-border/50">
                  <CardHeader>
                    <div className="rounded-lg bg-accent/10 p-3 w-fit">
                      <Cloud className="h-6 w-6 text-accent" />
                    </div>
                    <CardTitle className="text-xl">{service.title}</CardTitle>
                    <CardDescription className="text-muted-foreground">{service.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2">
                      {service.features.map((feature) => (
                        <li key={feature} className="flex items-center space-x-2">
                          <CheckCircle className="h-4 w-4 text-accent flex-shrink-0" />
                          <span className="text-sm text-muted-foreground">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-20 bg-card/30">
          <div className="container mx-auto px-4">
            <div className="text-center space-y-4 mb-16">
              <h2 className="text-3xl font-bold text-foreground sm:text-4xl text-balance">Why Choose Our Consulting</h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-pretty">
                Partner with us to unlock the full potential of your technology investments and drive business success.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {benefits.map((benefit) => (
                <div key={benefit.title} className="text-center space-y-4">
                  <div className="rounded-full bg-accent/10 p-4 w-fit mx-auto">
                    <benefit.icon className="h-8 w-8 text-accent" />
                  </div>
                  <h3 className="text-xl font-semibold text-foreground">{benefit.title}</h3>
                  <p className="text-muted-foreground">{benefit.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Process Section */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="text-center space-y-4 mb-16">
              <h2 className="text-3xl font-bold text-foreground sm:text-4xl text-balance">Our Consulting Process</h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-pretty">
                A proven methodology that ensures successful project delivery and measurable business outcomes.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                { step: "01", title: "Assessment", description: "Comprehensive analysis of your current IT landscape" },
                { step: "02", title: "Strategy", description: "Develop tailored roadmap and implementation plan" },
                {
                  step: "03",
                  title: "Implementation",
                  description: "Execute solutions with minimal business disruption",
                },
                { step: "04", title: "Optimization", description: "Continuous monitoring and performance improvement" },
              ].map((phase) => (
                <div key={phase.step} className="text-center space-y-4">
                  <div className="text-4xl font-bold text-accent">{phase.step}</div>
                  <h3 className="text-xl font-semibold text-foreground">{phase.title}</h3>
                  <p className="text-muted-foreground">{phase.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-primary/5">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center space-y-8">
              <h2 className="text-3xl font-bold text-foreground sm:text-4xl text-balance">
                Ready to Transform Your Business?
              </h2>
              <p className="text-xl text-muted-foreground text-pretty">
                Let's discuss how our IT consulting services can help you achieve your digital transformation goals.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button asChild size="lg" className="bg-accent hover:bg-accent/90">
                  <Link href="/contact">
                    Schedule Consultation
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
                <Button asChild variant="outline" size="lg">
                  <Link href="/services">View All Services</Link>
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
