import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ArrowRight, CheckCircle, Shield, Eye, AlertTriangle, Lock, Users, Zap } from "lucide-react"
import Link from "next/link"

const services = [
  {
    icon: Eye,
    title: "Threat Detection & Prevention",
    description: "Advanced threat monitoring and prevention systems to protect your digital assets.",
    features: ["24/7 Monitoring", "Intrusion Detection", "Malware Protection", "Incident Response"],
  },
  {
    icon: AlertTriangle,
    title: "Compliance & Risk Assessment",
    description: "Comprehensive security audits and compliance management for regulatory requirements.",
    features: ["Security Audits", "Risk Analysis", "Compliance Reporting", "Vulnerability Assessment"],
  },
  {
    icon: Users,
    title: "Security Operations Center (SOC)",
    description: "Managed security services with expert monitoring and rapid incident response.",
    features: ["SOC as a Service", "Threat Intelligence", "Forensic Analysis", "Security Training"],
  },
]

const securityFrameworks = [
  { name: "ISO 27001", description: "Information Security Management" },
  { name: "NIST", description: "Cybersecurity Framework" },
  { name: "GDPR", description: "Data Protection Compliance" },
  { name: "SOC 2", description: "Service Organization Controls" },
  { name: "HIPAA", description: "Healthcare Data Protection" },
  { name: "PCI DSS", description: "Payment Card Industry Standards" },
]

export default function CybersecurityPage() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main>
        {/* Hero Section */}
        <section className="relative overflow-hidden bg-gradient-to-br from-background via-background to-primary/5 py-20 lg:py-32">
          <div className="absolute inset-0 bg-grid-white/[0.02] bg-[size:50px_50px]" />
          <div className="container relative mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center space-y-8">
              <Badge className="bg-accent/10 text-accent border-accent/20">Cybersecurity Services</Badge>
              <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl lg:text-6xl text-balance">
                Protect Your Business with <span className="text-accent">Enterprise-Grade Security</span>
              </h1>
              <p className="text-xl text-muted-foreground text-pretty max-w-3xl mx-auto">
                Comprehensive cybersecurity solutions to safeguard your digital assets, ensure compliance, and maintain
                business continuity in an increasingly complex threat landscape.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button asChild size="lg" className="bg-accent hover:bg-accent/90">
                  <Link href="/contact">
                    Get Security Assessment
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
                <Button asChild variant="outline" size="lg">
                  <Link href="/security-audit">Free Security Audit</Link>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Services Overview */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="text-center space-y-4 mb-16">
              <h2 className="text-3xl font-bold text-foreground sm:text-4xl text-balance">Security Services</h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-pretty">
                Comprehensive cybersecurity solutions designed to protect your business from evolving threats.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {services.map((service) => (
                <Card key={service.title} className="border-border/50">
                  <CardHeader>
                    <div className="rounded-lg bg-accent/10 p-3 w-fit">
                      <service.icon className="h-6 w-6 text-accent" />
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

        {/* Security Stats */}
        <section className="py-20 bg-card/30">
          <div className="container mx-auto px-4">
            <div className="text-center space-y-4 mb-16">
              <h2 className="text-3xl font-bold text-foreground sm:text-4xl text-balance">Security by the Numbers</h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-pretty">
                Our track record of protecting businesses from cyber threats and ensuring compliance.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                {
                  icon: Shield,
                  value: "99.9%",
                  label: "Threat Detection Rate",
                  description: "Advanced AI-powered detection",
                },
                { icon: Lock, value: "24/7", label: "Security Monitoring", description: "Round-the-clock protection" },
                { icon: Zap, value: "<5min", label: "Incident Response", description: "Rapid threat mitigation" },
                { icon: Users, value: "100+", label: "Security Experts", description: "Certified professionals" },
              ].map((stat) => (
                <Card key={stat.label} className="text-center border-border/50">
                  <CardContent className="pt-6">
                    <div className="rounded-full bg-accent/10 p-4 w-fit mx-auto mb-4">
                      <stat.icon className="h-8 w-8 text-accent" />
                    </div>
                    <div className="text-3xl font-bold text-foreground mb-2">{stat.value}</div>
                    <div className="text-lg font-semibold text-foreground mb-1">{stat.label}</div>
                    <div className="text-sm text-muted-foreground">{stat.description}</div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Compliance Frameworks */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="text-center space-y-4 mb-16">
              <h2 className="text-3xl font-bold text-foreground sm:text-4xl text-balance">Compliance & Standards</h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-pretty">
                We help you meet industry standards and regulatory requirements with comprehensive compliance solutions.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {securityFrameworks.map((framework) => (
                <Card key={framework.name} className="border-border/50">
                  <CardContent className="p-6">
                    <div className="flex items-center space-x-4">
                      <div className="rounded-lg bg-primary/10 p-3">
                        <Shield className="h-6 w-6 text-primary" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-foreground">{framework.name}</h3>
                        <p className="text-sm text-muted-foreground">{framework.description}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Security Process */}
        <section className="py-20 bg-card/30">
          <div className="container mx-auto px-4">
            <div className="text-center space-y-4 mb-16">
              <h2 className="text-3xl font-bold text-foreground sm:text-4xl text-balance">Our Security Approach</h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-pretty">
                A comprehensive methodology to identify, protect, detect, respond, and recover from security threats.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
              {[
                { step: "01", title: "Identify", description: "Asset inventory and risk assessment" },
                { step: "02", title: "Protect", description: "Implement security controls and safeguards" },
                { step: "03", title: "Detect", description: "Continuous monitoring and threat detection" },
                { step: "04", title: "Respond", description: "Incident response and containment" },
                { step: "05", title: "Recover", description: "Business continuity and recovery planning" },
              ].map((phase) => (
                <div key={phase.step} className="text-center space-y-4">
                  <div className="text-4xl font-bold text-accent">{phase.step}</div>
                  <h3 className="text-lg font-semibold text-foreground">{phase.title}</h3>
                  <p className="text-sm text-muted-foreground">{phase.description}</p>
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
                Secure Your Business Today
              </h2>
              <p className="text-xl text-muted-foreground text-pretty">
                Don't wait for a security breach. Protect your business with our comprehensive cybersecurity solutions.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button asChild size="lg" className="bg-accent hover:bg-accent/90">
                  <Link href="/contact">
                    Get Security Consultation
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
