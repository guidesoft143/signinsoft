"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { useState } from "react"

const technologies = [
  {
    category: "Frontend Technologies",
    items: [
      { name: "React", logo: "/react-logo.png" },
      { name: "Next.js", logo: "/nextjs-logo.png" },
      { name: "Vue.js", logo: "/vuejs-logo.png" },
      { name: "Angular", logo: "/angular-logo.png" },
      { name: "TypeScript", logo: "/typescript-logo.png" },
      { name: "Tailwind CSS", logo: "/tailwind-css-logo.png" },
    ],
  },
  {
    category: "Backend Technologies",
    items: [
      { name: "Node.js", logo: "/nodejs-logo.png" },
      { name: "Python", logo: "/python-logo.png" },
      { name: "Java", logo: "/java-logo.png" },
      { name: "C#", logo: "/letter-c-typography.png" },
      { name: "PHP", logo: "/php-logo.png" },
      { name: "Go", logo: "/go-programming-language-logo.png" },
    ],
  },
  {
    category: "Cloud & DevOps",
    items: [
      { name: "AWS", logo: "/aws-logo.png" },
      { name: "Azure", logo: "/microsoft-azure-logo.png" },
      { name: "Google Cloud", logo: "/images/partners/google-cloud-logo.png" },
      { name: "Docker", logo: "/docker-logo.png" },
      { name: "Kubernetes", logo: "/kubernetes-logo.png" },
      { name: "Jenkins", logo: "/jenkins-logo.png" },
    ],
  },
  {
    category: "Databases & Analytics",
    items: [
      { name: "PostgreSQL", logo: "/postgresql-logo.png" },
      { name: "MongoDB", logo: "/mongodb-logo.png" },
      { name: "MySQL", logo: "/images/mysql.png" },
      { name: "Redis", logo: "/redis-logo.png" },
      { name: "Elasticsearch", logo: "/elasticsearch-logo.png" },
      { name: "Apache Spark", logo: "/apache-spark-logo.png" },
    ],
  },
]

export function TechnologiesSlider() {
  const [currentIndex, setCurrentIndex] = useState(0)

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % technologies.length)
  }

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + technologies.length) % technologies.length)
  }

  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-3xl font-bold text-foreground sm:text-4xl text-balance">Technologies We Master</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto text-pretty">
            We work with cutting-edge technologies to deliver robust, scalable, and future-ready solutions.
          </p>
        </div>

        <div className="relative max-w-6xl mx-auto">
          <Card className="border-border/50">
            <CardContent className="p-8">
              <div className="text-center mb-8">
                <h3 className="text-2xl font-semibold text-foreground mb-2">{technologies[currentIndex].category}</h3>
              </div>

              <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-8">
                {technologies[currentIndex].items.map((tech) => (
                  <div key={tech.name} className="flex flex-col items-center space-y-3 group">
                    <div className="rounded-lg bg-card p-4 group-hover:bg-accent/10 transition-colors">
                      <img
                        src={tech.logo || "/placeholder.svg"}
                        alt={`${tech.name} logo`}
                        className="h-12 w-12 object-contain"
                        width={48}
                        height={48}
                      />
                    </div>
                    <span className="text-sm font-medium text-foreground text-center">{tech.name}</span>
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
              {technologies.map((_, index) => (
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
