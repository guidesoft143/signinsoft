import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ArrowRight, GraduationCap, Briefcase, Plane, RefreshCw, FileCheck, Users } from "lucide-react"
import Link from "next/link"

const visaServices = [
  {
    icon: GraduationCap,
    title: "Study Abroad Visas",
    description: "Expert guidance for student visas to top universities worldwide.",
    href: "/visa-services/study-abroad",
  },
  {
    icon: Briefcase,
    title: "Work & Business Visas",
    description: "Professional support for skilled worker and business investor visas.",
    href: "/visa-services/work-business",
  },
  {
    icon: Plane,
    title: "Travel & Tourism Visas",
    description: "Quick and reliable tourist visa services for multiple destinations.",
    href: "/visa-services/travel-tourism",
  },
  {
    icon: RefreshCw,
    title: "Visa Extension & Renewal",
    description: "Hassle-free visa extensions and renewals for continued stay.",
    href: "/visa-services/extension-renewal",
  },
  {
    icon: FileCheck,
    title: "Document Verification",
    description: "Professional document authentication and attestation services.",
    href: "/visa-services/document-verification",
  },
  {
    icon: Users,
    title: "Immigration Consultation",
    description: "Comprehensive guidance for permanent residency and citizenship.",
    href: "/visa-services/immigration-consultation",
  },
]

export function VisaServicesOverview() {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-3xl font-bold text-foreground sm:text-4xl text-balance">Professional Visa Services</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-pretty">
            Navigate the complex world of visas and immigration with our expert guidance. We make your journey to study,
            work, or travel abroad seamless and stress-free.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {visaServices.map((service) => (
            <Card key={service.title} className="group hover:shadow-lg transition-all duration-300 border-border/50">
              <CardHeader>
                <div className="rounded-lg bg-primary/10 p-3 w-fit">
                  <service.icon className="h-6 w-6 text-primary" />
                </div>
                <CardTitle className="text-xl">{service.title}</CardTitle>
                <CardDescription className="text-muted-foreground">{service.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <Button asChild variant="ghost" className="group-hover:text-primary transition-colors">
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
          <Button asChild size="lg" variant="outline">
            <Link href="/visa-services">
              View All Visa Services
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  )
}
