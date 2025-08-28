"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ChevronLeft, ChevronRight, Calendar, ArrowRight } from "lucide-react"
import { useState } from "react"
import Link from "next/link"

const newsGroups = [
  {
    title: "Latest Updates",
    articles: [
      {
        title: "SigninSoft Expands AI/ML Services Portfolio",
        description: "New machine learning and artificial intelligence solutions now available for enterprise clients.",
        category: "Company News",
        date: "December 15, 2024",
        image: "/ai-technology-abstract.png",
        href: "/news/ai-ml-expansion",
      },
      {
        title: "New Dubai Office Opening",
        description: "SigninSoft opens new regional headquarters in Dubai to better serve Middle East clients.",
        category: "Expansion",
        date: "December 10, 2024",
        image: "/dubai-skyline-office-building.png",
        href: "/news/dubai-office-opening",
      },
      {
        title: "Cybersecurity Excellence Award 2024",
        description: "Recognized for outstanding cybersecurity implementations and client protection measures.",
        category: "Awards",
        date: "December 5, 2024",
        image: "/cybersecurity-award-trophy.png",
        href: "/news/cybersecurity-award",
      },
    ],
  },
  {
    title: "Industry Insights",
    articles: [
      {
        title: "The Future of Cloud Computing in 2025",
        description: "Expert insights on emerging cloud technologies and their impact on business transformation.",
        category: "Technology",
        date: "December 12, 2024",
        image: "/cloud-computing-technology.png",
        href: "/insights/cloud-computing-2025",
      },
      {
        title: "Visa Processing Trends Post-2024",
        description: "Analysis of changing visa requirements and processing times across major destinations.",
        category: "Immigration",
        date: "December 8, 2024",
        image: "/passport-visa-immigration.png",
        href: "/insights/visa-trends-2024",
      },
      {
        title: "Digital Transformation Success Stories",
        description: "How our clients achieved 300% ROI through strategic digital transformation initiatives.",
        category: "Case Study",
        date: "December 3, 2024",
        image: "/digital-transformation-success.png",
        href: "/insights/digital-transformation-roi",
      },
    ],
  },
]

export function NewsSlider() {
  const [currentIndex, setCurrentIndex] = useState(0)

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % newsGroups.length)
  }

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + newsGroups.length) % newsGroups.length)
  }

  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-3xl font-bold text-foreground sm:text-4xl text-balance">Latest News & Insights</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto text-pretty">
            Stay updated with the latest developments in technology, visa services, and industry trends.
          </p>
        </div>

        <div className="relative max-w-7xl mx-auto">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-semibold text-foreground mb-2">{newsGroups[currentIndex].title}</h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {newsGroups[currentIndex].articles.map((article) => (
              <Card key={article.title} className="group hover:shadow-lg transition-all duration-300 border-border/50">
                <div className="aspect-video overflow-hidden rounded-t-lg">
                  <img
                    src={article.image || "/placeholder.svg"}
                    alt={article.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    width={300}
                    height={200}
                  />
                </div>
                <CardHeader>
                  <div className="flex items-center justify-between mb-2">
                    <Badge variant="secondary">{article.category}</Badge>
                    <div className="flex items-center text-sm text-muted-foreground">
                      <Calendar className="h-4 w-4 mr-1" />
                      {article.date}
                    </div>
                  </div>
                  <CardTitle className="text-xl group-hover:text-accent transition-colors">{article.title}</CardTitle>
                  <CardDescription className="text-muted-foreground">{article.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <Button asChild variant="ghost" className="group-hover:text-accent transition-colors">
                    <Link href={article.href}>
                      Read More
                      <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="flex justify-center items-center space-x-4 mt-12">
            <Button variant="outline" size="icon" onClick={prevSlide}>
              <ChevronLeft className="h-4 w-4" />
            </Button>

            <div className="flex space-x-2">
              {newsGroups.map((_, index) => (
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

          <div className="text-center mt-8">
            <Button asChild size="lg" variant="outline">
              <Link href="/news">
                View All News & Insights
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
