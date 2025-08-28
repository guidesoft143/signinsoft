import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ArrowRight, CheckCircle, Search, Share2, Target, TrendingUp, Users, Zap } from "lucide-react"
import Link from "next/link"

const services = [
  {
    icon: Search,
    title: "SEO & SEM",
    description: "Improve your search visibility and drive qualified traffic with strategic SEO and paid search.",
    strategies: ["Keyword Research", "On-Page Optimization", "Google Ads", "Technical SEO"],
  },
  {
    icon: Share2,
    title: "Social Media Marketing",
    description: "Build brand awareness and engage your audience across all major social platforms.",
    strategies: ["Content Strategy", "Community Management", "Influencer Marketing", "Social Advertising"],
  },
  {
    icon: Target,
    title: "Performance Marketing & Campaigns",
    description: "Data-driven marketing campaigns that deliver measurable results and ROI.",
    strategies: ["Conversion Optimization", "A/B Testing", "Attribution Modeling", "Campaign Analytics"],
  },
]

const marketingChannels = [
  { name: "Google Ads", category: "Search Marketing" },
  { name: "Facebook Ads", category: "Social Media" },
  { name: "LinkedIn Ads", category: "B2B Marketing" },
  { name: "Instagram", category: "Visual Marketing" },
  { name: "YouTube", category: "Video Marketing" },
  { name: "Email Marketing", category: "Direct Marketing" },
]

export default function DigitalMarketingPage() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main>
        {/* Hero Section */}
        <section className="relative overflow-hidden bg-gradient-to-br from-background via-background to-primary/5 py-20 lg:py-32">
          <div className="absolute inset-0 bg-grid-white/[0.02] bg-[size:50px_50px]" />
          <div className="container relative mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center space-y-8">
              <Badge className="bg-accent/10 text-accent border-accent/20">Digital Marketing</Badge>
              <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl lg:text-6xl text-balance">
                Grow Your Business with <span className="text-accent">Data-Driven Marketing</span>
              </h1>
              <p className="text-xl text-muted-foreground text-pretty max-w-3xl mx-auto">
                Comprehensive digital marketing solutions that drive traffic, generate leads, and increase conversions
                through strategic SEO, social media, and performance marketing campaigns.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button asChild size="lg" className="bg-accent hover:bg-accent/90">
                  <Link href="/contact">
                    Start Marketing Campaign
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
                <Button asChild variant="outline" size="lg">
                  <Link href="/marketing-audit">Free Marketing Audit</Link>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Services Overview */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="text-center space-y-4 mb-16">
              <h2 className="text-3xl font-bold text-foreground sm:text-4xl text-balance">Marketing Services</h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-pretty">
                Comprehensive digital marketing solutions designed to maximize your online presence and ROI.
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
                        <h4 className="font-semibold text-foreground mb-2">Key Strategies:</h4>
                        <ul className="space-y-1">
                          {service.strategies.map((strategy) => (
                            <li key={strategy} className="flex items-center space-x-2">
                              <CheckCircle className="h-4 w-4 text-accent flex-shrink-0" />
                              <span className="text-sm text-muted-foreground">{strategy}</span>
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

        {/* Marketing Results */}
        <section className="py-20 bg-card/30">
          <div className="container mx-auto px-4">
            <div className="text-center space-y-4 mb-16">
              <h2 className="text-3xl font-bold text-foreground sm:text-4xl text-balance">Proven Results</h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-pretty">
                Our data-driven approach delivers measurable results that impact your bottom line.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                { icon: TrendingUp, value: "300%", label: "Average ROI Increase", description: "Across all campaigns" },
                { icon: Users, value: "2M+", label: "Leads Generated", description: "For our clients" },
                {
                  icon: Target,
                  value: "85%",
                  label: "Conversion Rate Improvement",
                  description: "Through optimization",
                },
                { icon: Zap, value: "50%", label: "Cost Per Acquisition Reduction", description: "Average savings" },
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

        {/* Marketing Channels */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="text-center space-y-4 mb-16">
              <h2 className="text-3xl font-bold text-foreground sm:text-4xl text-balance">Marketing Channels</h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-pretty">
                We leverage the most effective marketing channels to reach your target audience where they are.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {marketingChannels.map((channel) => (
                <Card key={channel.name} className="border-border/50">
                  <CardContent className="p-6">
                    <div className="flex items-center space-x-4">
                      <div className="rounded-lg bg-primary/10 p-3">
                        <Share2 className="h-6 w-6 text-primary" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-foreground">{channel.name}</h3>
                        <p className="text-sm text-muted-foreground">{channel.category}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Marketing Process */}
        <section className="py-20 bg-card/30">
          <div className="container mx-auto px-4">
            <div className="text-center space-y-4 mb-16">
              <h2 className="text-3xl font-bold text-foreground sm:text-4xl text-balance">Our Marketing Process</h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-pretty">
                A systematic approach to creating and executing marketing campaigns that deliver results.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
              {[
                { step: "01", title: "Research", description: "Market and competitor analysis" },
                { step: "02", title: "Strategy", description: "Campaign planning and targeting" },
                { step: "03", title: "Create", description: "Content and creative development" },
                { step: "04", title: "Launch", description: "Campaign execution and monitoring" },
                { step: "05", title: "Optimize", description: "Performance analysis and improvement" },
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
                Ready to Accelerate Your Growth?
              </h2>
              <p className="text-xl text-muted-foreground text-pretty">
                Let's create a digital marketing strategy that drives real business results and sustainable growth.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button asChild size="lg" className="bg-accent hover:bg-accent/90">
                  <Link href="/contact">
                    Start Marketing Campaign
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
