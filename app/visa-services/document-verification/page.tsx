import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ArrowRight, CheckCircle, FileCheck, Shield, Globe, Clock, Award, Users } from "lucide-react"
import Link from "next/link"

const services = [
  {
    icon: FileCheck,
    title: "Document Authentication",
    description: "Official verification and authentication of personal and professional documents",
    features: ["Notarization", "Apostille Services", "Embassy Legalization", "Digital Verification"],
  },
  {
    icon: Globe,
    title: "Embassy Attestation",
    description: "Embassy and consulate attestation for international document recognition",
    features: ["Embassy Legalization", "Consulate Attestation", "Ministry Verification", "Chamber of Commerce"],
  },
  {
    icon: Users,
    title: "Translation Support",
    description: "Certified translation services for documents in multiple languages",
    features: ["Certified Translation", "Legal Translation", "Technical Translation", "Sworn Translation"],
  },
]

const documentTypes = [
  {
    category: "Educational Documents",
    documents: ["Degree Certificates", "Transcripts", "Diplomas", "Professional Certificates", "Training Records"],
  },
  {
    category: "Business Documents",
    documents: ["Commercial Invoices", "Contracts", "Financial Statements", "Company Registration", "Trade Licenses"],
  },
  {
    category: "Legal Documents",
    documents: ["Birth Certificates", "Marriage Certificates", "Divorce Decrees", "Power of Attorney", "Affidavits"],
  },
  {
    category: "Identity Documents",
    documents: ["Passports", "National ID Cards", "Driving Licenses", "Police Clearance", "Medical Records"],
  },
]

const processSteps = [
  {
    step: "01",
    title: "Submission",
    description: "Submit documents for verification and attestation",
    timeline: "1 day",
  },
  {
    step: "02",
    title: "Verification",
    description: "Document authentication and verification process",
    timeline: "3-5 days",
  },
  {
    step: "03",
    title: "Attestation",
    description: "Embassy/consulate attestation and legalization",
    timeline: "5-10 days",
  },
  {
    step: "04",
    title: "Delivery",
    description: "Secure delivery of attested documents",
    timeline: "1-2 days",
  },
]

const trustBadges = [
  {
    icon: Shield,
    title: "Secure Processing",
    description: "Bank-level security for document handling",
  },
  {
    icon: Award,
    title: "Government Recognized",
    description: "Authorized by relevant government agencies",
  },
  {
    icon: Globe,
    title: "International Acceptance",
    description: "Documents accepted worldwide",
  },
]

export default function DocumentVerificationPage() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main>
        {/* Hero Section */}
        <section className="relative overflow-hidden py-20 lg:py-32">
          <div
            className="absolute inset-0 bg-cover bg-center bg-no-repeat"
            style={{
              backgroundImage: `url('/professional-documents-certificates-verification-att.png')`,
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-br from-background/95 via-background/90 to-primary/20" />
          <div className="absolute inset-0 bg-grid-white/[0.02] bg-[size:50px_50px]" />

          <div className="container relative mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center space-y-8 animate-fade-in">
              <Badge className="bg-accent/10 text-accent border-accent/20">Document Verification & Attestation</Badge>
              <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl lg:text-6xl text-balance">
                <span className="text-accent">Authenticate Your Documents</span> for Global Recognition
              </h1>
              <p className="text-xl text-muted-foreground text-pretty max-w-3xl mx-auto">
                Professional document verification, authentication, and attestation services to ensure your documents
                are legally recognized worldwide. Fast, secure, and government-approved processes.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button asChild size="lg" className="bg-accent hover:bg-accent/90">
                  <Link href="/contact">
                    Get Your Documents Verified
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
                <Button asChild variant="outline" size="lg">
                  <Link href="/document-requirements">Check Requirements</Link>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Services Overview */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="text-center space-y-4 mb-16">
              <h2 className="text-3xl font-bold text-foreground sm:text-4xl text-balance">Verification Services</h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-pretty">
                Comprehensive document verification and attestation services for all your international needs.
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

        {/* Document Types */}
        <section className="py-20 bg-card/30">
          <div className="container mx-auto px-4">
            <div className="text-center space-y-4 mb-16">
              <h2 className="text-3xl font-bold text-foreground sm:text-4xl text-balance">Supported Documents</h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-pretty">
                We handle verification and attestation for a wide range of document types across all categories.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {documentTypes.map((category) => (
                <Card key={category.category} className="border-border/50">
                  <CardHeader>
                    <CardTitle className="text-lg">{category.category}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2">
                      {category.documents.map((document) => (
                        <li key={document} className="flex items-start space-x-2">
                          <CheckCircle className="h-4 w-4 text-accent mt-0.5 flex-shrink-0" />
                          <span className="text-sm text-muted-foreground">{document}</span>
                        </li>
                      ))}
                    </ul>
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
              <h2 className="text-3xl font-bold text-foreground sm:text-4xl text-balance">Verification Process</h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-pretty">
                Our streamlined process ensures quick and secure document verification and attestation.
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

        {/* Trust Badges */}
        <section className="py-20 bg-card/30">
          <div className="container mx-auto px-4">
            <div className="text-center space-y-4 mb-16">
              <h2 className="text-3xl font-bold text-foreground sm:text-4xl text-balance">Why Trust Our Services</h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-pretty">
                Your documents are handled with the highest level of security and professionalism.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {trustBadges.map((badge) => (
                <div key={badge.title} className="text-center space-y-4">
                  <div className="rounded-full bg-accent/10 p-4 w-fit mx-auto">
                    <badge.icon className="h-8 w-8 text-accent" />
                  </div>
                  <h3 className="text-xl font-semibold text-foreground">{badge.title}</h3>
                  <p className="text-muted-foreground">{badge.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Pricing Information */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="text-center space-y-4 mb-16">
              <h2 className="text-3xl font-bold text-foreground sm:text-4xl text-balance">Transparent Pricing</h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-pretty">
                Competitive rates for all document verification and attestation services.
              </p>
            </div>

            <div className="max-w-4xl mx-auto">
              <Card className="border-border/50">
                <CardContent className="p-8">
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
                    <div className="space-y-2">
                      <h3 className="text-lg font-semibold text-foreground">Document Authentication</h3>
                      <div className="text-2xl font-bold text-accent">$25-50</div>
                      <p className="text-sm text-muted-foreground">Per document</p>
                    </div>
                    <div className="space-y-2">
                      <h3 className="text-lg font-semibold text-foreground">Embassy Attestation</h3>
                      <div className="text-2xl font-bold text-accent">$75-150</div>
                      <p className="text-sm text-muted-foreground">Per document</p>
                    </div>
                    <div className="space-y-2">
                      <h3 className="text-lg font-semibold text-foreground">Translation Services</h3>
                      <div className="text-2xl font-bold text-accent">$20-40</div>
                      <p className="text-sm text-muted-foreground">Per page</p>
                    </div>
                  </div>
                  <div className="text-center mt-6">
                    <p className="text-sm text-muted-foreground">
                      *Prices may vary based on document type, urgency, and destination country
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-primary/5">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center space-y-8">
              <h2 className="text-3xl font-bold text-foreground sm:text-4xl text-balance">
                Ready to Verify Your Documents?
              </h2>
              <p className="text-xl text-muted-foreground text-pretty">
                Get your documents authenticated and attested by our certified professionals for global recognition.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button asChild size="lg" className="bg-accent hover:bg-accent/90">
                  <Link href="/contact">
                    Get Your Documents Verified
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
                <Button asChild variant="outline" size="lg">
                  <Link href="/visa-services">View All Visa Services</Link>
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
