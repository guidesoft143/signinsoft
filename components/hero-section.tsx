import { Button } from "@/components/ui/button"
import { ArrowRight, CheckCircle, Globe, Users, Award, Zap } from "lucide-react"
import Link from "next/link"

export function HeroSection() {
  return (
    <section className="relative overflow-hidden py-20 lg:py-32">
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url('/modern-office-technology-team-collaboration-digita.png')`,
        }}
      />
      <div className="absolute inset-0 bg-gradient-to-br from-background/95 via-background/90 to-primary/20" />
      <div className="absolute inset-0 bg-grid-white/[0.02] bg-[size:50px_50px]" />

      <div className="container relative mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8 animate-fade-in">
            <div className="space-y-4">
              <div className="inline-flex items-center rounded-full border border-accent/20 bg-accent/10 px-4 py-2 text-sm text-accent backdrop-blur-sm">
                <Zap className="mr-2 h-4 w-4" />
                Get into your Future
              </div>
              <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl lg:text-6xl text-balance">
                Transform Your Business with <span className="text-accent">Expert IT Solutions</span> & Visa Services
              </h1>
              <p className="text-xl text-muted-foreground text-pretty max-w-2xl">
                Professional IT consulting, software development, and comprehensive visa services. With offices in USA,
                India, and Dubai, we help businesses and individuals achieve their goals globally.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button asChild size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground">
                <Link href="/contact">
                  Start Your Project
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="backdrop-blur-sm bg-transparent">
                <Link href="/services">Explore Services</Link>
              </Button>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 pt-8">
              <div className="text-center">
                <div className="text-2xl font-bold text-accent">500+</div>
                <div className="text-sm text-muted-foreground">Projects Delivered</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-accent">50+</div>
                <div className="text-sm text-muted-foreground">Global Clients</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-accent">10+</div>
                <div className="text-sm text-muted-foreground">Years Experience</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-accent">3</div>
                <div className="text-sm text-muted-foreground">Global Offices</div>
              </div>
            </div>
          </div>

          <div className="relative animate-slide-in">
            <div className="relative rounded-2xl bg-gradient-to-br from-primary/20 to-accent/20 p-8 backdrop-blur-sm border border-white/10">
              <div className="space-y-6">
                <div className="flex items-center space-x-4 rounded-lg bg-card/50 p-4 backdrop-blur">
                  <div className="rounded-full bg-accent/20 p-3">
                    <Globe className="h-6 w-6 text-accent" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground">Global Presence</h3>
                    <p className="text-sm text-muted-foreground">USA • India • Dubai</p>
                  </div>
                </div>

                <div className="flex items-center space-x-4 rounded-lg bg-card/50 p-4 backdrop-blur">
                  <div className="rounded-full bg-accent/20 p-3">
                    <Users className="h-6 w-6 text-accent" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground">Expert Team</h3>
                    <p className="text-sm text-muted-foreground">Certified professionals</p>
                  </div>
                </div>

                <div className="flex items-center space-x-4 rounded-lg bg-card/50 p-4 backdrop-blur">
                  <div className="rounded-full bg-accent/20 p-3">
                    <Award className="h-6 w-6 text-accent" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground">Quality Assured</h3>
                    <p className="text-sm text-muted-foreground">ISO certified processes</p>
                  </div>
                </div>

                <div className="flex items-center space-x-4 rounded-lg bg-card/50 p-4 backdrop-blur">
                  <div className="rounded-full bg-accent/20 p-3">
                    <CheckCircle className="h-6 w-6 text-accent" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground">Proven Results</h3>
                    <p className="text-sm text-muted-foreground">98% success rate</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
