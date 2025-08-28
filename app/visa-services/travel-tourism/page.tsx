import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ArrowRight, CheckCircle, Plane, MapPin, Clock, Globe, Heart } from "lucide-react"
import Link from "next/link"

const visaTypes = [
  {
    title: "Tourist Visas",
    description: "Short-term visas for leisure travel and sightseeing",
    duration: "Up to 90 days",
    features: ["Single/Multiple Entry", "Quick Processing", "Tourism Activities", "Flexible Itinerary"],
  },
  {
    title: "Family Visit Visas",
    description: "Visit family members and relatives abroad",
    duration: "Up to 180 days",
    features: ["Family Reunification", "Extended Stay", "Multiple Visits", "Invitation Letter Support"],
  },
  {
    title: "Transit Visas",
    description: "For travelers passing through a country",
    duration: "24-72 hours",
    features: ["Airport Transit", "Short Layovers", "Quick Approval", "Minimal Documentation"],
  },
]

const benefits = [
  {
    icon: Clock,
    title: "Quick Approval",
    description: "Fast-track processing for urgent travel needs",
  },
  {
    icon: Globe,
    title: "Multiple Destinations",
    description: "Support for visas to over 50 countries worldwide",
  },
  {
    icon: Heart,
    title: "Family-Friendly Support",
    description: "Special assistance for family and group applications",
  },
]

const processSteps = [
  {
    step: "01",
    title: "Application",
    description: "Complete visa application with required details",
    timeline: "1-2 days",
  },
  {
    step: "02",
    title: "Documents",
    description: "Submit supporting documents and photographs",
    timeline: "2-3 days",
  },
  {
    step: "03",
    title: "Travel",
    description: "Receive visa approval and travel confirmation",
    timeline: "5-15 days",
  },
]

const popularDestinations = [
  { name: "United States", processing: "5-15 days", validity: "10 years" },
  { name: "United Kingdom", processing: "15-20 days", validity: "2-10 years" },
  { name: "Canada", processing: "20-30 days", validity: "10 years" },
  { name: "Australia", processing: "15-25 days", validity: "1-3 years" },
  { name: "Schengen Europe", processing: "10-15 days", validity: "5 years" },
  { name: "Japan", processing: "5-10 days", validity: "5 years" },
  { name: "Singapore", processing: "3-5 days", validity: "2 years" },
  { name: "Dubai/UAE", processing: "3-7 days", validity: "5 years" },
]

export default function TravelTourismVisasPage() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main>
        {/* Hero Section */}
        <section className="relative overflow-hidden py-20 lg:py-32">
          <div
            className="absolute inset-0 bg-cover bg-center bg-no-repeat"
            style={{
              backgroundImage: `url('/travel-destinations-passport-stamps-tourist-attract.png')`,
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-br from-background/95 via-background/90 to-primary/20" />
          <div className="absolute inset-0 bg-grid-white/[0.02] bg-[size:50px_50px]" />

          <div className="container relative mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center space-y-8 animate-fade-in">
              <Badge className="bg-accent/10 text-accent border-accent/20">Travel & Tourism Visas</Badge>
              <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl lg:text-6xl text-balance">
                Explore the World with <span className="text-accent">Hassle-Free Travel Visas</span>
              </h1>
              <p className="text-xl text-muted-foreground text-pretty max-w-3xl mx-auto">
                Make your travel dreams come true with our comprehensive tourist visa services. From leisure trips to
                family visits, we handle all your travel visa needs with quick processing and expert guidance.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button asChild size="lg" className="bg-accent hover:bg-accent/90">
                  <Link href="/contact">
                    Apply for Tourist Visa
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
                <Button asChild variant="outline" size="lg">
                  <Link href="/travel-packages">View Travel Packages</Link>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Visa Types */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="text-center space-y-4 mb-16">
              <h2 className="text-3xl font-bold text-foreground sm:text-4xl text-balance">Travel Visa Types</h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-pretty">
                Choose the right visa type for your travel purpose and duration.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {visaTypes.map((visa) => (
                <Card key={visa.title} className="border-border/50">
                  <CardHeader>
                    <div className="rounded-lg bg-accent/10 p-3 w-fit">
                      <Plane className="h-6 w-6 text-accent" />
                    </div>
                    <CardTitle className="text-xl">{visa.title}</CardTitle>
                    <CardDescription className="text-muted-foreground">{visa.description}</CardDescription>
                    <Badge variant="secondary" className="w-fit">
                      {visa.duration}
                    </Badge>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2">
                      {visa.features.map((feature) => (
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

        {/* Benefits */}
        <section className="py-20 bg-card/30">
          <div className="container mx-auto px-4">
            <div className="text-center space-y-4 mb-16">
              <h2 className="text-3xl font-bold text-foreground sm:text-4xl text-balance">Why Choose Our Services</h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-pretty">
                Experience seamless travel visa processing with our dedicated support team.
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

        {/* Process Steps */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="text-center space-y-4 mb-16">
              <h2 className="text-3xl font-bold text-foreground sm:text-4xl text-balance">
                Simple Application Process
              </h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-pretty">
                Get your travel visa in just three easy steps with our streamlined process.
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

        {/* Popular Destinations */}
        <section className="py-20 bg-card/30">
          <div className="container mx-auto px-4">
            <div className="text-center space-y-4 mb-16">
              <h2 className="text-3xl font-bold text-foreground sm:text-4xl text-balance">Popular Destinations</h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-pretty">
                Explore visa information for the world's most popular travel destinations.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {popularDestinations.map((destination) => (
                <Card key={destination.name} className="border-border/50">
                  <CardContent className="p-6">
                    <div className="space-y-3">
                      <div className="flex items-center space-x-2">
                        <MapPin className="h-5 w-5 text-accent" />
                        <h3 className="font-semibold text-foreground">{destination.name}</h3>
                      </div>
                      <div className="space-y-1 text-sm text-muted-foreground">
                        <div>Processing: {destination.processing}</div>
                        <div>Validity: {destination.validity}</div>
                      </div>
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
                Ready to Plan Your Next Adventure?
              </h2>
              <p className="text-xl text-muted-foreground text-pretty">
                Let us handle your travel visa requirements so you can focus on planning the perfect trip.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button asChild size="lg" className="bg-accent hover:bg-accent/90">
                  <Link href="/contact">
                    Apply for Tourist Visa
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
