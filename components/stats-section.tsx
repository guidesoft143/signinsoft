import { Card, CardContent } from "@/components/ui/card"
import { TrendingUp, Users, Globe, Award } from "lucide-react"

const stats = [
  {
    icon: TrendingUp,
    value: "500+",
    label: "Successful Projects",
    description: "Delivered across various industries",
  },
  {
    icon: Users,
    value: "50+",
    label: "Happy Clients",
    description: "From startups to enterprises",
  },
  {
    icon: Globe,
    value: "15+",
    label: "Countries Served",
    description: "Global reach and expertise",
  },
  {
    icon: Award,
    value: "98%",
    label: "Success Rate",
    description: "In visa applications and IT projects",
  },
]

export function StatsSection() {
  return (
    <section className="py-16 bg-primary/5">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat) => (
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
  )
}
