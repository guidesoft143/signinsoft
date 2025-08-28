import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ArrowRight, CheckCircle, Palette, Users, Eye, Lightbulb, Target, Heart } from "lucide-react"
import Link from "next/link"

const services = [
  {
    icon: Eye,
    title: "User Research & Wireframing",
    description: "Deep user insights and strategic wireframing to create user-centered designs.",
    deliverables: ["User Personas", "Journey Maps", "Wireframes", "Information Architecture"],
  },
  {
    icon: Lightbulb,
    title: "Prototyping & Usability Testing",
    description: "Interactive prototypes and comprehensive usability testing for optimal user experience.",
    deliverables: ["Interactive Prototypes", "Usability Reports", "A/B Testing", "User Feedback Analysis"],
  },
  {
    icon: Palette,
    title: "Product Design & Branding",
    description: "Complete visual design and brand identity development for digital products.",
    deliverables: ["Visual Design", "Brand Guidelines", "Design Systems", "Asset Libraries"],
  },
]

const designPrinciples = [
  {
    icon: Users,
    title: "User-Centered Design",
    description: "Every design decision is based on user needs, behaviors, and feedback.",
  },
  {
    icon: Target,
    title: "Goal-Oriented Approach",
    description: "Designs that align with business objectives and drive measurable results.",
  },
  {
    icon: Heart,
    title: "Emotional Connection",
    description: "Creating designs that resonate emotionally and build lasting user relationships.",
  },
]

export default function UIUXDesignPage() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main>
        {/* Hero Section */}
        <section className="relative overflow-hidden bg-gradient-to-br from-background via-background to-primary/5 py-20 lg:py-32">
          <div className="absolute inset-0 bg-grid-white/[0.02] bg-[size:50px_50px]" />
          <div className="container relative mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center space-y-8">
              <Badge className="bg-accent/10 text-accent border-accent/20">UI/UX Design</Badge>
              <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl lg:text-6xl text-balance">
                Create <span className="text-accent">Exceptional User Experiences</span> That Convert
              </h1>
              <p className="text-xl text-muted-foreground text-pretty max-w-3xl mx-auto">
                Transform your digital products with user-centered design that combines beautiful aesthetics with
                intuitive functionality to drive engagement and business success.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button asChild size="lg" className="bg-accent hover:bg-accent/90">
                  <Link href="/contact">
                    Start Design Project
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
                <Button asChild variant="outline" size="lg">
                  <Link href="/design-portfolio">View Design Work</Link>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Services Overview */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="text-center space-y-4 mb-16">
              <h2 className="text-3xl font-bold text-foreground sm:text-4xl text-balance">Design Services</h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-pretty">
                Comprehensive UI/UX design services that put your users at the center of every design decision.
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
                    <div className="space-y-4">
                      <div>
                        <h4 className="font-semibold text-foreground mb-2">Deliverables:</h4>
                        <ul className="space-y-1">
                          {service.deliverables.map((deliverable) => (
                            <li key={deliverable} className="flex items-center space-x-2">
                              <CheckCircle className="h-4 w-4 text-accent flex-shrink-0" />
                              <span className="text-sm text-muted-foreground">{deliverable}</span>
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

        {/* Design Principles */}
        <section className="py-20 bg-card/30">
          <div className="container mx-auto px-4">
            <div className="text-center space-y-4 mb-16">
              <h2 className="text-3xl font-bold text-foreground sm:text-4xl text-balance">Our Design Philosophy</h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-pretty">
                We believe great design is more than just aesthetics—it's about creating meaningful connections between
                users and products.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {designPrinciples.map((principle) => (
                <div key={principle.title} className="text-center space-y-4">
                  <div className="rounded-full bg-accent/10 p-4 w-fit mx-auto">
                    <principle.icon className="h-8 w-8 text-accent" />
                  </div>
                  <h3 className="text-xl font-semibold text-foreground">{principle.title}</h3>
                  <p className="text-muted-foreground">{principle.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Design Process */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="text-center space-y-4 mb-16">
              <h2 className="text-3xl font-bold text-foreground sm:text-4xl text-balance">Our Design Process</h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-pretty">
                A proven methodology that ensures every design decision is backed by research and user insights.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
              {[
                { step: "01", title: "Research", description: "User research and competitive analysis" },
                { step: "02", title: "Define", description: "Problem definition and user personas" },
                { step: "03", title: "Ideate", description: "Brainstorming and concept development" },
                { step: "04", title: "Prototype", description: "Interactive prototypes and testing" },
                { step: "05", title: "Deliver", description: "Final designs and handoff" },
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

        {/* Tools & Technologies */}
        <section className="py-20 bg-card/30">
          <div className="container mx-auto px-4">
            <div className="text-center space-y-4 mb-16">
              <h2 className="text-3xl font-bold text-foreground sm:text-4xl text-balance">Design Tools We Use</h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-pretty">
                Industry-leading design tools and technologies to create exceptional user experiences.
              </p>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-8">
              {[
                { name: "Figma", category: "Design" },
                { name: "Adobe XD", category: "Prototyping" },
                { name: "Sketch", category: "UI Design" },
                { name: "InVision", category: "Collaboration" },
                { name: "Principle", category: "Animation" },
                { name: "Miro", category: "Ideation" },
              ].map((tool) => (
                <div key={tool.name} className="text-center space-y-2">
                  <div className="rounded-lg bg-background p-4 border border-border/50">
                    <div className="h-12 w-12 mx-auto bg-accent/10 rounded-lg flex items-center justify-center">
                      <Palette className="h-6 w-6 text-accent" />
                    </div>
                  </div>
                  <div>
                    <div className="font-medium text-foreground">{tool.name}</div>
                    <div className="text-xs text-muted-foreground">{tool.category}</div>
                  </div>
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
                Ready to Transform Your User Experience?
              </h2>
              <p className="text-xl text-muted-foreground text-pretty">
                Let's create designs that not only look beautiful but also drive real business results.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button asChild size="lg" className="bg-accent hover:bg-accent/90">
                  <Link href="/contact">
                    Start Design Project
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
