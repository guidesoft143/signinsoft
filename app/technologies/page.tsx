import { PageLayout } from "@/components/page-layout"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ArrowRight, Code, Database, Cloud, Smartphone, Globe, Shield } from "lucide-react"

export default function TechnologiesPage() {
  const techCategories = [
    {
      title: "Frontend Technologies",
      icon: Code,
      description: "Modern frameworks and libraries for exceptional user experiences",
      technologies: [
        { name: "React", level: "Expert", logo: "/react-logo.png" },
        { name: "Next.js", level: "Expert", logo: "/nextjs-logo.png" },
        { name: "Vue.js", level: "Advanced", logo: "/vue-logo.png" },
        { name: "Angular", level: "Advanced", logo: "/angular-logo.png" },
        { name: "TypeScript", level: "Expert", logo: "/typescript-logo.png" },
        { name: "Tailwind CSS", level: "Expert", logo: "/tailwind-logo.png" },
      ],
    },
    {
      title: "Backend Technologies",
      icon: Database,
      description: "Robust server-side solutions and APIs",
      technologies: [
        { name: "Node.js", level: "Expert", logo: "/nodejs-logo.png" },
        { name: "Python", level: "Expert", logo: "/python-logo.png" },
        { name: "Java", level: "Advanced", logo: "/java-logo.png" },
        { name: ".NET", level: "Advanced", logo: "/dotnet-logo.png" },
        { name: "PHP", level: "Advanced", logo: "/php-logo.png" },
        { name: "Go", level: "Intermediate", logo: "/go-logo.png" },
      ],
    },
    {
      title: "Cloud Platforms",
      icon: Cloud,
      description: "Scalable cloud infrastructure and services",
      technologies: [
        { name: "AWS", level: "Expert", logo: "/aws-logo.png" },
        { name: "Azure", level: "Advanced", logo: "/azure-logo.png" },
        { name: "Google Cloud", level: "Advanced", logo: "/gcp-logo.png" },
        { name: "Vercel", level: "Expert", logo: "/vercel-logo.png" },
        { name: "Netlify", level: "Advanced", logo: "/netlify-logo.png" },
        { name: "DigitalOcean", level: "Advanced", logo: "/digitalocean-logo.png" },
      ],
    },
    {
      title: "Mobile Development",
      icon: Smartphone,
      description: "Cross-platform and native mobile applications",
      technologies: [
        { name: "React Native", level: "Expert", logo: "/react-logo.png" },
        { name: "Flutter", level: "Advanced", logo: "/flutter-logo.png" },
        { name: "iOS (Swift)", level: "Advanced", logo: "/swift-logo.png" },
        { name: "Android (Kotlin)", level: "Advanced", logo: "/kotlin-logo.png" },
        { name: "Ionic", level: "Intermediate", logo: "/ionic-logo.png" },
        { name: "Xamarin", level: "Intermediate", logo: "/xamarin-logo.png" },
      ],
    },
    {
      title: "Databases",
      icon: Database,
      description: "Reliable data storage and management solutions",
      technologies: [
        { name: "PostgreSQL", level: "Expert", logo: "/postgresql-logo.png" },
        { name: "MongoDB", level: "Expert", logo: "/mongodb-logo.png" },
        { name: "MySQL", level: "Advanced", logo: "/mysql-logo.png" },
        { name: "Redis", level: "Advanced", logo: "/redis-logo.png" },
        { name: "Elasticsearch", level: "Advanced", logo: "/elasticsearch-logo.png" },
        { name: "Firebase", level: "Advanced", logo: "/firebase-logo.png" },
      ],
    },
    {
      title: "DevOps & Security",
      icon: Shield,
      description: "Secure deployment and infrastructure management",
      technologies: [
        { name: "Docker", level: "Expert", logo: "/docker-logo.png" },
        { name: "Kubernetes", level: "Advanced", logo: "/kubernetes-logo.png" },
        { name: "Jenkins", level: "Advanced", logo: "/jenkins-logo.png" },
        { name: "GitHub Actions", level: "Expert", logo: "/github-logo.png" },
        { name: "Terraform", level: "Advanced", logo: "/terraform-logo.png" },
        { name: "Nginx", level: "Advanced", logo: "/nginx-logo.png" },
      ],
    },
  ]

  const getLevelColor = (level: string) => {
    switch (level) {
      case "Expert":
        return "bg-green-500/20 text-green-400 border-green-500/30"
      case "Advanced":
        return "bg-blue-500/20 text-blue-400 border-blue-500/30"
      case "Intermediate":
        return "bg-yellow-500/20 text-yellow-400 border-yellow-500/30"
      default:
        return "bg-gray-500/20 text-gray-400 border-gray-500/30"
    }
  }

  return (
    <PageLayout>
      {/* Hero Section */}
      <section className="relative py-20 px-4">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `url('/cutting-edge-technology-stack-programming-code-mod.png')`,
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-br from-background/95 via-background/90 to-primary/20" />

        <div className="max-w-7xl mx-auto text-center relative">
          <div className="animate-fade-in">
            <Badge className="mb-4 bg-primary/20 text-primary border-primary/30 backdrop-blur-sm">Technologies</Badge>
            <h1 className="text-4xl md:text-6xl font-bold mb-6 text-balance">
              Cutting-Edge
              <span className="text-primary"> Technology Stack</span>
            </h1>
            <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto text-pretty">
              We leverage the latest technologies and frameworks to build scalable, secure, and high-performance
              solutions that drive your business forward.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-primary hover:bg-primary/90 btn-animate">
                View Our Work
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
              <Button size="lg" variant="outline" className="backdrop-blur-sm bg-transparent btn-animate">
                Discuss Your Project
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Technology Categories */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Technology Expertise</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              From frontend frameworks to cloud infrastructure, we master the tools that power modern digital solutions.
            </p>
          </div>

          <div className="space-y-16">
            {techCategories.map((category, index) => (
              <div key={index} className="space-y-8 animate-fade-in" style={{ animationDelay: `${index * 0.1}s` }}>
                <div className="flex items-center gap-4 mb-8">
                  <div className="w-12 h-12 bg-primary/20 rounded-lg flex items-center justify-center hover-scale">
                    <category.icon className="h-6 w-6 text-primary flat-icon" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold">{category.title}</h3>
                    <p className="text-muted-foreground">{category.description}</p>
                  </div>
                </div>

                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 stagger-animation">
                  {category.technologies.map((tech, techIndex) => (
                    <Card
                      key={techIndex}
                      className="group hover:shadow-lg transition-all duration-300 border-border/50 hover:border-primary/30 card-animate hover-lift"
                    >
                      <CardContent className="p-4 text-center">
                        <div className="w-12 h-12 bg-card rounded-lg flex items-center justify-center mx-auto mb-3">
                          <div className="w-8 h-8 bg-primary/20 rounded"></div>
                        </div>
                        <h4 className="font-semibold mb-2 group-hover:text-primary transition-colors">{tech.name}</h4>
                        <Badge className={`text-xs ${getLevelColor(tech.level)}`}>{tech.level}</Badge>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Our Tech Stack */}
      <section className="py-20 px-4 bg-card/30">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Why Our Technology Choices Matter</h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 stagger-animation">
            <Card className="border-border/50 card-animate hover-lift">
              <CardHeader>
                <div className="w-12 h-12 bg-primary/20 rounded-lg flex items-center justify-center mb-4 hover-scale">
                  <Globe className="h-6 w-6 text-primary flat-icon" />
                </div>
                <CardTitle>Scalability</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Our technology stack is designed to grow with your business, handling increased traffic and complexity
                  seamlessly.
                </p>
              </CardContent>
            </Card>

            <Card className="border-border/50 card-animate hover-lift">
              <CardHeader>
                <div className="w-12 h-12 bg-secondary/20 rounded-lg flex items-center justify-center mb-4 hover-scale">
                  <Shield className="h-6 w-6 text-secondary flat-icon" />
                </div>
                <CardTitle>Security</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  We prioritize security at every layer, implementing best practices and industry standards to protect
                  your data and users.
                </p>
              </CardContent>
            </Card>

            <Card className="border-border/50 card-animate hover-lift">
              <CardHeader>
                <div className="w-12 h-12 bg-primary/20 rounded-lg flex items-center justify-center mb-4 hover-scale">
                  <Code className="h-6 w-6 text-primary flat-icon" />
                </div>
                <CardTitle>Performance</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Optimized for speed and efficiency, our solutions deliver exceptional performance across all devices
                  and platforms.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-gradient-to-r from-primary to-secondary">
        <div className="max-w-4xl mx-auto text-center text-primary-foreground animate-fade-in">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Build with Modern Technology?</h2>
          <p className="text-xl mb-8 opacity-90">
            Let's discuss how our technology expertise can power your next project.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary" className="btn-animate">
              Start Your Project
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary bg-transparent btn-animate"
            >
              Technology Consultation
            </Button>
          </div>
        </div>
      </section>
    </PageLayout>
  )
}
