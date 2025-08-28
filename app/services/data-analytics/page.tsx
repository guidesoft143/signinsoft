import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ArrowRight, CheckCircle, BarChart3, Database, Brain, TrendingUp, Zap, Target } from "lucide-react"
import Link from "next/link"

const services = [
  {
    icon: Database,
    title: "Data Engineering",
    description: "Build robust data pipelines and infrastructure for scalable data processing.",
    capabilities: ["ETL/ELT Pipelines", "Data Warehousing", "Real-time Processing", "Data Quality Management"],
  },
  {
    icon: BarChart3,
    title: "Business Intelligence & Reporting",
    description: "Transform raw data into actionable insights with comprehensive BI solutions.",
    capabilities: ["Interactive Dashboards", "Automated Reporting", "KPI Monitoring", "Self-Service Analytics"],
  },
  {
    icon: Brain,
    title: "AI/ML & Generative AI Solutions",
    description: "Leverage artificial intelligence and machine learning for predictive analytics and automation.",
    capabilities: ["Predictive Modeling", "Natural Language Processing", "Computer Vision", "Generative AI"],
  },
]

const benefits = [
  {
    icon: TrendingUp,
    title: "Data-Driven Decisions",
    description: "Make informed business decisions based on accurate data insights and analytics.",
  },
  {
    icon: Zap,
    title: "Automated Insights",
    description: "Automate data processing and reporting to save time and reduce manual errors.",
  },
  {
    icon: Target,
    title: "Competitive Advantage",
    description: "Gain competitive edge through advanced analytics and AI-powered solutions.",
  },
]

export default function DataAnalyticsPage() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main>
        {/* Hero Section */}
        <section className="relative overflow-hidden bg-gradient-to-br from-background via-background to-primary/5 py-20 lg:py-32">
          <div className="absolute inset-0 bg-grid-white/[0.02] bg-[size:50px_50px]" />
          <div className="container relative mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center space-y-8">
              <Badge className="bg-accent/10 text-accent border-accent/20">Data & Analytics</Badge>
              <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl lg:text-6xl text-balance">
                Unlock the Power of <span className="text-accent">Data-Driven Intelligence</span>
              </h1>
              <p className="text-xl text-muted-foreground text-pretty max-w-3xl mx-auto">
                Transform your business with advanced data analytics, machine learning, and AI solutions that turn raw
                data into actionable insights and competitive advantages.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button asChild size="lg" className="bg-accent hover:bg-accent/90">
                  <Link href="/contact">
                    Start Analytics Project
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
                <Button asChild variant="outline" size="lg">
                  <Link href="/case-studies">View Success Stories</Link>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Services Overview */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="text-center space-y-4 mb-16">
              <h2 className="text-3xl font-bold text-foreground sm:text-4xl text-balance">Analytics Services</h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-pretty">
                Comprehensive data and analytics solutions to help you make smarter business decisions.
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
                        <h4 className="font-semibold text-foreground mb-2">Key Capabilities:</h4>
                        <ul className="space-y-1">
                          {service.capabilities.map((capability) => (
                            <li key={capability} className="flex items-center space-x-2">
                              <CheckCircle className="h-4 w-4 text-accent flex-shrink-0" />
                              <span className="text-sm text-muted-foreground">{capability}</span>
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

        {/* Benefits Section */}
        <section className="py-20 bg-card/30">
          <div className="container mx-auto px-4">
            <div className="text-center space-y-4 mb-16">
              <h2 className="text-3xl font-bold text-foreground sm:text-4xl text-balance">Why Choose Our Analytics</h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-pretty">
                Transform your business operations with data-driven insights and intelligent automation.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
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

        {/* Technologies */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="text-center space-y-4 mb-16">
              <h2 className="text-3xl font-bold text-foreground sm:text-4xl text-balance">Technologies We Use</h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-pretty">
                Industry-leading tools and platforms for data processing, analytics, and machine learning.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <Card className="border-border/50">
                <CardHeader>
                  <CardTitle className="text-lg">Data Processing</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {["Apache Spark", "Kafka", "Airflow", "Databricks", "Snowflake", "BigQuery"].map((tech) => (
                      <Badge key={tech} variant="secondary" className="text-xs">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>

              <Card className="border-border/50">
                <CardHeader>
                  <CardTitle className="text-lg">Analytics & BI</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {["Tableau", "Power BI", "Looker", "Grafana", "Metabase", "Superset"].map((tech) => (
                      <Badge key={tech} variant="secondary" className="text-xs">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>

              <Card className="border-border/50">
                <CardHeader>
                  <CardTitle className="text-lg">AI/ML Platforms</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {["TensorFlow", "PyTorch", "Scikit-learn", "OpenAI", "Hugging Face", "MLflow"].map((tech) => (
                      <Badge key={tech} variant="secondary" className="text-xs">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Process Section */}
        <section className="py-20 bg-card/30">
          <div className="container mx-auto px-4">
            <div className="text-center space-y-4 mb-16">
              <h2 className="text-3xl font-bold text-foreground sm:text-4xl text-balance">Our Analytics Process</h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-pretty">
                A systematic approach to extracting maximum value from your data assets.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
              {[
                { step: "01", title: "Assess", description: "Data audit and requirements analysis" },
                { step: "02", title: "Design", description: "Architecture and solution design" },
                { step: "03", title: "Build", description: "Data pipelines and analytics development" },
                { step: "04", title: "Deploy", description: "Implementation and integration" },
                { step: "05", title: "Optimize", description: "Monitoring and continuous improvement" },
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
                Ready to Harness Your Data's Potential?
              </h2>
              <p className="text-xl text-muted-foreground text-pretty">
                Let's transform your data into a strategic asset that drives growth and innovation.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button asChild size="lg" className="bg-accent hover:bg-accent/90">
                  <Link href="/contact">
                    Start Analytics Journey
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
                <Button asChild variant="outline" size="lg">
                  <Link href="/services">Explore All Services</Link>
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
