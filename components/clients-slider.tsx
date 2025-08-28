"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { useState } from "react"

const clientGroups = [
  {
    title: "Fortune 500 Companies",
    clients: [
      { name: "Microsoft", logo: "/microsoft-logo.png" },
      { name: "Amazon", logo: "/amazon-logo.png" },
      { name: "Google", logo: "/google-logo.png" },
      { name: "IBM", logo: "/ibm-logo.png" },
      { name: "Oracle", logo: "/oracle-logo.png" },
      { name: "Salesforce", logo: "/salesforce-logo.png" },
    ],
  },
  {
    title: "Financial Services",
    clients: [
      { name: "JPMorgan Chase", logo: "/jpmorgan-chase-logo.png" },
      { name: "Bank of America", logo: "/bank-of-america-logo.png" },
      { name: "Wells Fargo", logo: "/wells-fargo-logo.png" },
      { name: "Goldman Sachs", logo: "/goldman-sachs-logo.png" },
      { name: "Morgan Stanley", logo: "/morgan-stanley-logo.png" },
      { name: "Citigroup", logo: "/citigroup-logo.png" },
    ],
  },
  {
    title: "Healthcare & Pharma",
    clients: [
      { name: "Johnson & Johnson", logo: "/johnson-and-johnson-logo.png" },
      { name: "Pfizer", logo: "/generic-pharmaceutical-logo.png" },
      { name: "Merck", logo: "/merck-logo.png" },
      { name: "Abbott", logo: "/abbott-logo.png" },
      { name: "Novartis", logo: "/novartis-logo.png" },
      { name: "Roche", logo: "/roche-logo.png" },
    ],
  },
  {
    title: "Startups & Scale-ups",
    clients: [
      { name: "Stripe", logo: "/stripe-logo.png" },
      { name: "Airbnb", logo: "/airbnb-logo-inspired-abstract.png" },
      { name: "Uber", logo: "/provider-logos/uber.png" },
      { name: "Spotify", logo: "/spotify-logo.png" },
      { name: "Slack", logo: "/slack-logo.png" },
      { name: "Zoom", logo: "/zoom-logo.png" },
    ],
  },
]

export function ClientsSlider() {
  const [currentIndex, setCurrentIndex] = useState(0)

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % clientGroups.length)
  }

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + clientGroups.length) % clientGroups.length)
  }

  return (
    <section className="py-20 bg-card/30">
      <div className="container mx-auto px-4">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-3xl font-bold text-foreground sm:text-4xl text-balance">Trusted by Industry Leaders</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto text-pretty">
            We're proud to work with companies of all sizes, from innovative startups to Fortune 500 enterprises.
          </p>
        </div>

        <div className="relative max-w-6xl mx-auto">
          <Card className="border-border/50">
            <CardContent className="p-8">
              <div className="text-center mb-8">
                <h3 className="text-2xl font-semibold text-foreground mb-2">{clientGroups[currentIndex].title}</h3>
              </div>

              <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-8">
                {clientGroups[currentIndex].clients.map((client) => (
                  <div key={client.name} className="flex flex-col items-center space-y-3 group">
                    <div className="rounded-lg bg-background p-4 group-hover:bg-accent/5 transition-colors border border-border/50">
                      <img
                        src={client.logo || "/placeholder.svg"}
                        alt={`${client.name} logo`}
                        className="h-12 w-20 object-contain opacity-70 group-hover:opacity-100 transition-opacity"
                        width={80}
                        height={48}
                      />
                    </div>
                    <span className="text-xs font-medium text-muted-foreground text-center">{client.name}</span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          <div className="flex justify-center items-center space-x-4 mt-8">
            <Button variant="outline" size="icon" onClick={prevSlide}>
              <ChevronLeft className="h-4 w-4" />
            </Button>

            <div className="flex space-x-2">
              {clientGroups.map((_, index) => (
                <button
                  key={index}
                  className={`w-3 h-3 rounded-full transition-colors ${
                    index === currentIndex ? "bg-accent" : "bg-muted"
                  }`}
                  onClick={() => setCurrentIndex(index)}
                />
              ))}
            </div>

            <Button variant="outline" size="icon" onClick={nextSlide}>
              <ChevronRight className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
