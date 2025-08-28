import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ArrowRight, CheckCircle, RefreshCw, Clock, FileText, AlertCircle } from "lucide-react"
import Link from "next/link"

const extensionTypes = [
  {
    title: "Student Visa Extension",
    description: "Extend your student visa for continued education",
    timeline: "4-8 weeks",
    requirements: ["Valid I-20 or enrollment letter", "Financial proof", "Academic transcripts", "Passport validity"],
  },
  {
    title: "Work Visa Renewal",
    description: "Renew your work authorization and employment visa",
    timeline: "3-6 months",
    requirements: ["Employment letter", "Updated contract", "Tax documents", "Employer sponsorship"],
  },
  {
    title: "Tourist Visa Extension",
    description: "Extend your stay for tourism or family visits",
    timeline: "2-4 weeks",
    requirements: ["Valid passport", "Extension application", "Financial support", "Travel itinerary"],
  },
]

const processSteps = [
  {
    step: "01",
    title: "Current Visa Check",
    description: "Review current visa status and eligibility for extension",
    timeline: "1-2 days",
  },
  {
    step: "02",
    title: "Renewal Application",
    description: "Prepare and submit extension/renewal application",
    timeline: "1-2 weeks",
  },
  {
    step: "03",
    title: "Approval",
    description: "Receive approval and updated visa documentation",
    timeline: "2-12 weeks",
  },
]

const requiredDocuments = [
  "Current valid passport",
  "Existing visa documentation",
  "Extension/renewal application form",
  "Updated photographs (as per specifications)",
  "Financial proof and bank statements",
  "Supporting documents (employment/enrollment letters)",
  "Medical examination (if required)",
  "Application fees and processing charges",
]

const importantNotes = [
  {
    icon: AlertCircle,
    title: "Apply Early",
    description: "Submit your extension application at least 45-60 days before visa expiry to avoid complications.",
  },
  {
    icon: Clock,
    title: "Processing Times",
    description: "Processing times vary by country and visa type. Plan accordingly for potential delays.",
  },
  {
    icon: FileText,
    title: "Complete Documentation",
    description: "Ensure all documents are current, complete, and meet the specific requirements for your visa type.",
  },
]

export default function ExtensionRenewalPage() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main>
        {/* Hero Section */}
        <section className="relative overflow-hidden py-20 lg:py-32">
          <div
            className="absolute inset-0 bg-cover bg-center bg-no-repeat"
            style={{
              backgroundImage: `url('/calendar-visa-renewal-extension-documents-stamp.png')`,
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-br from-background/95 via-background/90 to-primary/20" />
          <div className="absolute inset-0 bg-grid-white/[0.02] bg-[size:50px_50px]" />

          <div className="container relative mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center space-y-8 animate-fade-in">
              <Badge className="bg-accent/10 text-accent border-accent/20">Visa Extension & Renewal</Badge>
              <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl lg:text-6xl text-balance">
                Extend Your Stay <span className="text-accent">Without Stress</span>
              </h1>
              <p className="text-xl text-muted-foreground text-pretty max-w-3xl mx-auto">
                Need to extend your current visa or renew your expired one? Our expert team handles all types of visa
                extensions and renewals with precision and care, ensuring you can continue your journey abroad.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button asChild size="lg" className="bg-accent hover:bg-accent/90">
                  <Link href="/contact">
                    Request Extension/Renewal
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
                <Button asChild variant="outline" size="lg">
                  <Link href="/visa-check">Check Visa Status</Link>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Extension Types */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="text-center space-y-4 mb-16">
              <h2 className="text-3xl font-bold text-foreground sm:text-4xl text-balance">
                Extension & Renewal Options
              </h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-pretty">
                We handle extensions and renewals for all major visa categories with expert guidance.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {extensionTypes.map((extension) => (
                <Card key={extension.title} className="border-border/50">
                  <CardHeader>
                    <div className="rounded-lg bg-accent/10 p-3 w-fit">
                      <RefreshCw className="h-6 w-6 text-accent" />
                    </div>
                    <CardTitle className="text-xl">{extension.title}</CardTitle>
                    <CardDescription className="text-muted-foreground">{extension.description}</CardDescription>
                    <Badge variant="secondary" className="w-fit">
                      Processing: {extension.timeline}
                    </Badge>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div>
                        <h4 className="font-semibold text-foreground mb-2">Key Requirements:</h4>
                        <ul className="space-y-1">
                          {extension.requirements.map((requirement) => (
                            <li key={requirement} className="flex items-start space-x-2">
                              <CheckCircle className="h-4 w-4 text-accent mt-0.5 flex-shrink-0" />
                              <span className="text-sm text-muted-foreground">{requirement}</span>
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

        {/* Process Steps */}
        <section className="py-20 bg-card/30">
          <div className="container mx-auto px-4">
            <div className="text-center space-y-4 mb-16">
              <h2 className="text-3xl font-bold text-foreground sm:text-4xl text-balance">Extension Process</h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-pretty">
                Our streamlined process ensures your visa extension is handled efficiently and accurately.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
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

        {/* Required Documents */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="text-center space-y-4 mb-16">
              <h2 className="text-3xl font-bold text-foreground sm:text-4xl text-balance">Required Documents</h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-pretty">
                Ensure you have all necessary documents for a successful extension or renewal application.
              </p>
            </div>

            <div className="max-w-4xl mx-auto">
              <Card className="border-border/50">
                <CardHeader>
                  <div className="flex items-center space-x-3">
                    <FileText className="h-6 w-6 text-accent" />
                    <CardTitle>Document Checklist</CardTitle>
                  </div>
                  <CardDescription>General documents required for most extension/renewal applications</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {requiredDocuments.map((document) => (
                      <div key={document} className="flex items-start space-x-3">
                        <CheckCircle className="h-5 w-5 text-accent mt-0.5 flex-shrink-0" />
                        <span className="text-sm text-muted-foreground">{document}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Important Notes */}
        <section className="py-20 bg-card/30">
          <div className="container mx-auto px-4">
            <div className="text-center space-y-4 mb-16">
              <h2 className="text-3xl font-bold text-foreground sm:text-4xl text-balance">Important Considerations</h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-pretty">
                Key points to remember when applying for visa extensions or renewals.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {importantNotes.map((note) => (
                <Card key={note.title} className="border-border/50">
                  <CardContent className="pt-6">
                    <div className="text-center space-y-4">
                      <div className="rounded-full bg-accent/10 p-4 w-fit mx-auto">
                        <note.icon className="h-8 w-8 text-accent" />
                      </div>
                      <h3 className="text-lg font-semibold text-foreground">{note.title}</h3>
                      <p className="text-sm text-muted-foreground">{note.description}</p>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-primary/5">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center space-y-8">
              <h2 className="text-3xl font-bold text-foreground sm:text-4xl text-balance">
                Don't Let Your Visa Expire
              </h2>
              <p className="text-xl text-muted-foreground text-pretty">
                Start your extension or renewal process today and continue your journey abroad without interruption.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button asChild size="lg" className="bg-accent hover:bg-accent/90">
                  <Link href="/contact">
                    Request Extension/Renewal
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
