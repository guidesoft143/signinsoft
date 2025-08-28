import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ArrowRight, Code, Smartphone, Globe, Database, Zap, Users } from "lucide-react"
import Link from "next/link"

const services = [
  {
    icon: Globe,
    title: "Web Application Development",
    description: "Modern, responsive web applications built with cutting-edge technologies.",
    technologies: ["React", "Next.js", "Vue.js", "Angular", "Node.js", "Python"],
  },
  {
    icon: Smartphone,
    title: "Mobile App Development",
    description: "Native and cross-platform mobile applications for iOS and Android.",
    technologies: ["React Native", "Flutter", "Swift", "Kotlin", "Xamarin", "Ionic"],
  },
  {
    icon: Database,
    title: "Custom Software Solutions",
    description: "Tailored enterprise software solutions to meet your specific business needs.",
    technologies: ["Java", "C#", ".NET", "Python", "Microservices", "API Development"],
  },
]

const features = [
  {
    icon: Code,
    title: "Clean Code Architecture",
    description: "Maintainable, scalable code following industry best practices and design patterns.",
  },
  {
    icon: Zap,
    title: "Agile Development",
    description: "Iterative development process with regular feedback and continuous improvement.",
  },
  {
    icon: Users,
    title: "Dedicated Teams",
    description: "Experienced developers dedicated to your project's success and timeline.",
  },
]

export default function SoftwareDevelopmentPage() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main>
        {/* Hero Section */}
        <section className="relative overflow-hidden bg-gradient-to-br from-background via-background to-primary/5 py-20 lg:py-32">
          <div className="absolute inset-0 bg-grid-white/[0.02] bg-[size:50px_50px]" />
          <div className="container relative mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center space-y-8">
              <Badge className="bg-accent/10 text-accent border-accent/20">Software Development</Badge>
              <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl lg:text-6xl text-balance">
                Build Powerful <span className="text-accent">Software Solutions</span> That Scale
              </h1>
              <p className="text-xl text-muted-foreground text-pretty max-w-3xl mx-auto">
                From web applications to mobile apps and enterprise software, we deliver custom solutions that drive
                business growth and enhance user experiences.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button asChild size="lg" className="bg-accent hover:bg-accent/90">
                  <Link href="/contact">
                    Start Your Project
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
                <Button asChild variant="outline" size="lg">
                  <Link href="/portfolio">View Portfolio</Link>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Services Overview */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="text-center space-y-4 mb-16">
              <h2 className="text-3xl font-bold text-foreground sm:text-4xl text-balance">Development Services</h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-pretty">
                Comprehensive software development services using the latest technologies and frameworks.
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
                        <h4 className="font-semibold text-foreground mb-2">Technologies:</h4>
                        <div className="flex flex-wrap gap-2">
                          {service.technologies.map((tech) => (
                            <Badge key={tech} variant="secondary" className="text-xs">
                              {tech}
                            </Badge>
                          ))}
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20 bg-card/30">
          <div className="container mx-auto px-4">
            <div className="text-center space-y-4 mb-16">
              <h2 className="text-3xl font-bold text-foreground sm:text-4xl text-balance">
                Why Choose Our Development
              </h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-pretty">
                We combine technical expertise with business understanding to deliver exceptional software solutions.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {features.map((feature) => (
                <div key={feature.title} className="text-center space-y-4">
                  <div className="rounded-full bg-accent/10 p-4 w-fit mx-auto">
                    <feature.icon className="h-8 w-8 text-accent" />
                  </div>
                  <h3 className="text-xl font-semibold text-foreground">{feature.title}</h3>
                  <p className="text-muted-foreground">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Development Process */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="text-center space-y-4 mb-16">
              <h2 className="text-3xl font-bold text-foreground sm:text-4xl text-balance">Our Development Process</h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-pretty">
                A structured approach that ensures quality, timely delivery, and client satisfaction.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
              {[
                { step: "01", title: "Discovery", description: "Requirements gathering and project planning" },
                { step: "02", title: "Design", description: "UI/UX design and system architecture" },
                { step: "03", title: "Development", description: "Agile development with regular updates" },
                { step: "04", title: "Testing", description: "Comprehensive testing and quality assurance" },
                { step: "05", title: "Deployment", description: "Launch and ongoing support" },
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
                Ready to Build Your Next Software Solution?
              </h2>
              <p className="text-xl text-muted-foreground text-pretty">
                Let's discuss your project requirements and create a custom solution that meets your business needs.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button asChild size="lg" className="bg-accent hover:bg-accent/90">
                  <Link href="/contact">
                    Get Project Quote
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
                <Button asChild variant="outline" size="lg">
                  <Link href="/technologies">View Technologies</Link>
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
