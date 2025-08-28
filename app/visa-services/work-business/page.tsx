import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ContactForm } from "@/components/contact-form"
import { ArrowRight, CheckCircle, Briefcase, TrendingUp, Users, Clock, Award, Globe } from "lucide-react"
import Link from "next/link"

const visaTypes = [
  {
    icon: Users,
    title: "Skilled Worker Visas",
    description: "For professionals with job offers from approved employers",
    features: ["H-1B (USA)", "Skilled Worker (UK)", "Express Entry (Canada)", "Subclass 482 (Australia)"],
  },
  {
    icon: TrendingUp,
    title: "Business/Investor Visas",
    description: "For entrepreneurs and investors looking to establish businesses",
    features: ["E-2 Investor (USA)", "Innovator (UK)", "Start-up (Canada)", "Business Innovation (Australia)"],
  },
]

const processSteps = [
  {
    step: "01",
    title: "Job Offer / Business Plan",
    description: "Secure employment or develop comprehensive business plan",
    timeline: "2-6 months",
  },
  {
    step: "02",
    title: "Documentation",
    description: "Prepare and verify all required documents",
    timeline: "4-6 weeks",
  },
  {
    step: "03",
    title: "Visa Approval",
    description: "Submit application and await approval",
    timeline: "3-12 months",
  },
]

const requiredDocuments = {
  skilled: [
    "Valid passport with minimum 6 months validity",
    "Job offer letter from approved employer",
    "Educational qualifications and certificates",
    "Professional experience letters",
    "English language proficiency test results",
    "Medical examination reports",
    "Police clearance certificates",
    "Proof of funds for initial settlement",
  ],
  business: [
    "Valid passport with minimum 6 months validity",
    "Comprehensive business plan",
    "Proof of investment funds",
    "Business registration documents",
    "Financial statements and tax returns",
    "Educational and professional qualifications",
    "English language proficiency (if required)",
    "Medical examination and police clearance",
  ],
}

const successStories = [
  {
    name: "Rajesh Kumar",
    role: "Software Engineer",
    country: "USA",
    story: "Successfully obtained H-1B visa and now working at a Fortune 500 company in Silicon Valley.",
  },
  {
    name: "Priya Sharma",
    role: "Business Owner",
    country: "Canada",
    story: "Established a successful tech startup in Toronto through the Start-up Visa Program.",
  },
  {
    name: "Ahmed Hassan",
    role: "Investment Manager",
    country: "UK",
    story: "Secured Innovator visa and launched a fintech company in London's financial district.",
  },
]

const stats = [
  { number: "3,500+", label: "Work Visas Processed", icon: Briefcase },
  { number: "500+", label: "Business Visas Approved", icon: TrendingUp },
  { number: "92%", label: "Success Rate", icon: Award },
  { number: "15+", label: "Countries Covered", icon: Globe },
]

export default function WorkBusinessVisasPage() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main>
        {/* Hero Section */}
        <section className="relative overflow-hidden py-20 lg:py-32">
          <div
            className="absolute inset-0 bg-cover bg-center bg-no-repeat"
            style={{
              backgroundImage: `url('/professionals-business-meeting-office-work-visa-.png')`,
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-br from-background/95 via-background/90 to-primary/20" />
          <div className="absolute inset-0 bg-grid-white/[0.02] bg-[size:50px_50px]" />

          <div className="container relative mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center space-y-8 animate-fade-in">
              <Badge className="bg-accent/10 text-accent border-accent/20 backdrop-blur-sm">
                Work & Business Visas
              </Badge>
              <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl lg:text-6xl text-balance">
                Advance Your Career with <span className="text-accent">Professional Visa Support</span>
              </h1>
              <p className="text-xl text-muted-foreground text-pretty max-w-3xl mx-auto">
                Whether you're a skilled professional seeking employment opportunities or an entrepreneur ready to
                establish your business abroad, we provide expert guidance for work and business visas.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button asChild size="lg" className="bg-accent hover:bg-accent/90">
                  <Link href="#contact-form">
                    Start Your Work Visa Application
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
                <Button asChild variant="outline" size="lg" className="backdrop-blur-sm bg-transparent">
                  <Link href="#process">Learn About Process</Link>
                </Button>
              </div>
            </div>
          </div>
        </section>

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

        {/* Visa Types */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="text-center space-y-4 mb-16">
              <h2 className="text-3xl font-bold text-foreground sm:text-4xl text-balance">Visa Categories</h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-pretty">
                We specialize in both skilled worker and business investor visa categories.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {visaTypes.map((visa) => (
                <Card key={visa.title} className="border-border/50 hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <div className="rounded-lg bg-accent/10 p-3 w-fit">
                      <visa.icon className="h-6 w-6 text-accent" />
                    </div>
                    <CardTitle className="text-xl">{visa.title}</CardTitle>
                    <CardDescription className="text-muted-foreground">{visa.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div>
                        <h4 className="font-semibold text-foreground mb-2">Popular Visa Types:</h4>
                        <ul className="space-y-1">
                          {visa.features.map((feature) => (
                            <li key={feature} className="flex items-center space-x-2">
                              <CheckCircle className="h-4 w-4 text-accent flex-shrink-0" />
                              <span className="text-sm text-muted-foreground">{feature}</span>
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

        {/* Process Timeline */}
        <section id="process" className="py-20 bg-card/30">
          <div className="container mx-auto px-4">
            <div className="text-center space-y-4 mb-16">
              <h2 className="text-3xl font-bold text-foreground sm:text-4xl text-balance">Application Process</h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-pretty">
                Our streamlined process ensures efficient handling of your work or business visa application.
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
                Document requirements vary by visa type and destination country.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <Card className="border-border/50">
                <CardHeader>
                  <div className="flex items-center space-x-3">
                    <Users className="h-6 w-6 text-accent" />
                    <CardTitle>Skilled Worker Visas</CardTitle>
                  </div>
                  <CardDescription>Documents required for employment-based visas</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {requiredDocuments.skilled.map((document) => (
                      <li key={document} className="flex items-start space-x-3">
                        <CheckCircle className="h-4 w-4 text-accent mt-0.5 flex-shrink-0" />
                        <span className="text-sm text-muted-foreground">{document}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>

              <Card className="border-border/50">
                <CardHeader>
                  <div className="flex items-center space-x-3">
                    <TrendingUp className="h-6 w-6 text-accent" />
                    <CardTitle>Business/Investor Visas</CardTitle>
                  </div>
                  <CardDescription>Documents required for business and investment visas</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {requiredDocuments.business.map((document) => (
                      <li key={document} className="flex items-start space-x-3">
                        <CheckCircle className="h-4 w-4 text-accent mt-0.5 flex-shrink-0" />
                        <span className="text-sm text-muted-foreground">{document}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Success Stories */}
        <section className="py-20 bg-card/30">
          <div className="container mx-auto px-4">
            <div className="text-center space-y-4 mb-16">
              <h2 className="text-3xl font-bold text-foreground sm:text-4xl text-balance">Success Stories</h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-pretty">
                Real stories from professionals who achieved their career goals with our assistance.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {successStories.map((story) => (
                <Card key={story.name} className="border-border/50">
                  <CardContent className="pt-6">
                    <div className="space-y-4">
                      <div className="text-center">
                        <div className="rounded-full bg-accent/10 p-4 w-fit mx-auto mb-4">
                          <Briefcase className="h-8 w-8 text-accent" />
                        </div>
                        <h3 className="font-semibold text-foreground">{story.name}</h3>
                        <p className="text-sm text-muted-foreground">{story.role}</p>
                        <Badge variant="secondary" className="mt-2">
                          {story.country}
                        </Badge>
                      </div>
                      <p className="text-sm text-muted-foreground text-center">{story.story}</p>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <section id="contact-form" className="py-20">
          <div className="container mx-auto px-4">
            <div className="text-center space-y-4 mb-16">
              <h2 className="text-3xl font-bold text-foreground sm:text-4xl text-balance">
                Ready to Start Your Work Visa Application?
              </h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-pretty">
                Connect with our work visa specialists and take the next step in your professional journey.
              </p>
            </div>
            <ContactForm
              title="Start Your Work Visa Application"
              description="Fill out the form below and our work visa consultants will contact you within 24 hours."
            />
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
