import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ArrowRight, Code, Palette, Shield, BarChart3, Cloud, Megaphone } from "lucide-react"
import Link from "next/link"

const services = [
  {
    icon: Cloud,
    title: "IT Consulting & Strategy",
    description: "Digital transformation, enterprise architecture, and cloud consulting solutions.",
    href: "/services/it-consulting",
  },
  {
    icon: Code,
    title: "Software Development",
    description: "Custom web, mobile, and enterprise software solutions built to scale.",
    href: "/services/software-development",
  },
  {
    icon: Palette,
    title: "UI/UX Design",
    description: "User-centered design, prototyping, and brand identity development.",
    href: "/services/ui-ux-design",
  },
  {
    icon: BarChart3,
    title: "Data & Analytics",
    description: "Business intelligence, data engineering, and AI/ML solutions.",
    href: "/services/data-analytics",
  },
  {
    icon: Shield,
    title: "Cybersecurity Services",
    description: "Comprehensive security solutions and compliance management.",
    href: "/services/cybersecurity",
  },
  {
    icon: Megaphone,
    title: "Digital Marketing",
    description: "SEO, SEM, social media marketing, and performance campaigns.",
    href: "/services/digital-marketing",
  },
]

export function ServicesOverview() {
  return (
    <section className="py-20 bg-card/30">
      <div className="container mx-auto px-4">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-3xl font-bold text-foreground sm:text-4xl text-balance">Comprehensive IT Solutions</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-pretty">
            From strategy to implementation, we provide end-to-end technology solutions that drive business growth and
            digital transformation.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service) => (
            <Card key={service.title} className="group hover:shadow-lg transition-all duration-300 border-border/50">
              <CardHeader>
                <div className="rounded-lg bg-accent/10 p-3 w-fit">
                  <service.icon className="h-6 w-6 text-accent" />
                </div>
                <CardTitle className="text-xl">{service.title}</CardTitle>
                <CardDescription className="text-muted-foreground">{service.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <Button asChild variant="ghost" className="group-hover:text-accent transition-colors">
                  <Link href={service.href}>
                    Learn More
                    <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button asChild size="lg" className="bg-accent hover:bg-accent/90">
            <Link href="/services">
              View All Services
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  )
}
