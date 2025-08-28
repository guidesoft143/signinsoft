"use client"

import { Code, Database, Cloud, Smartphone, Globe, Shield, Zap, Layers, Server } from "lucide-react"

interface TechStackProps {
  className?: string
}

export function TechStackIcons({ className = "" }: TechStackProps) {
  const technologies = [
    { name: "React", icon: Code, color: "text-blue-500" },
    { name: "Next.js", icon: Globe, color: "text-gray-800" },
    { name: "TypeScript", icon: Code, color: "text-blue-600" },
    { name: "Node.js", icon: Server, color: "text-green-600" },
    { name: "Python", icon: Code, color: "text-yellow-500" },
    { name: "AWS", icon: Cloud, color: "text-orange-500" },
    { name: "Docker", icon: Layers, color: "text-blue-400" },
    { name: "MongoDB", icon: Database, color: "text-green-500" },
    { name: "PostgreSQL", icon: Database, color: "text-blue-700" },
    { name: "React Native", icon: Smartphone, color: "text-purple-500" },
    { name: "GraphQL", icon: Zap, color: "text-pink-500" },
    { name: "Kubernetes", icon: Shield, color: "text-indigo-500" },
  ]

  return (
    <div className={`grid grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6 ${className}`}>
      {technologies.map((tech, index) => (
        <div
          key={tech.name}
          className="flex flex-col items-center p-4 rounded-lg bg-card hover:bg-card/80 transition-all duration-300 hover:scale-105 hover:shadow-lg group"
          style={{ animationDelay: `${index * 0.1}s` }}
        >
          <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-3 group-hover:bg-primary/20 transition-colors">
            <tech.icon className={`h-6 w-6 ${tech.color} group-hover:scale-110 transition-transform`} />
          </div>
          <span className="text-sm font-medium text-center text-muted-foreground group-hover:text-foreground transition-colors">
            {tech.name}
          </span>
        </div>
      ))}
    </div>
  )
}
