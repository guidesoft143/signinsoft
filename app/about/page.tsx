import { PageLayout } from "@/components/page-layout"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ArrowRight, Users, Globe, Award, Target, Eye, Heart, MapPin, Phone, Mail } from "lucide-react"
import Image from "next/image"

export default function AboutPage() {
  const stats = [
    { number: "15+", label: "Years Experience" },
    { number: "500+", label: "Projects Delivered" },
    { number: "50+", label: "Global Clients" },
    { number: "3", label: "Office Locations" },
  ]

  const values = [
    {
      icon: Target,
      title: "Innovation",
      description: "We embrace cutting-edge technologies and innovative solutions to drive digital transformation.",
    },
    {
      icon: Users,
      title: "Client-Centric",
      description: "Our clients' success is our priority. We build lasting partnerships through exceptional service.",
    },
    {
      icon: Award,
      title: "Excellence",
      description: "We maintain the highest standards of quality in every project we undertake.",
    },
    {
      icon: Heart,
      title: "Integrity",
      description: "We operate with transparency, honesty, and ethical business practices in all our dealings.",
    },
  ]

  const offices = [
    {
      country: "USA",
      address: "1553 Route 27, Room 1000-2, Suite 1000, Somerset, NJ 08873",
      phone: "+1(302) 703-1113",
      email: "info@signinsoft.net",
    },
    {
      country: "India",
      address: "Flat no.202, Sri Sai Goverdhan Kunj, SR Nagar, Hyderabad-500038",
      phone: "040 – 40023456",
      email: "info@signinsoft.co.in",
    },
    {
      country: "Dubai, UAE",
      address: "HNS Business Center, Office 12, Emitech Building, AL Garhood",
      phone: "+971 554881986",
      email: "info@signinsoft.net",
    },
  ]

  return (
    <PageLayout>
      {/* Hero Section */}
      <section className="relative py-20 px-4 bg-gradient-to-br from-primary/10 via-background to-secondary/10 overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/diverse-professional-team-global-offices-modern-wo.png"
            alt="About SigninSoft - Global Team"
            fill
            className="object-cover opacity-20"
            priority
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-br from-background/95 via-background/90 to-primary/20" />

        <div className="max-w-7xl mx-auto relative">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-in">
              <Badge className="mb-4 bg-primary/20 text-primary border-primary/30 backdrop-blur-sm animate-bounce-in">
                <Users className="w-3 h-3 mr-1 flat-icon flat-icon-small" />
                About SigninSoft
              </Badge>
              <h1 className="text-4xl md:text-6xl font-bold mb-6 text-balance animate-slide-up">
                Empowering Your
                <span className="text-primary gradient-text"> Digital Future</span>
              </h1>
              <p className="text-xl text-muted-foreground mb-8 text-pretty animate-slide-up">
                For over 15 years, SigninSoft has been at the forefront of digital innovation, helping businesses
                transform and individuals achieve their global aspirations through cutting-edge technology solutions and
                comprehensive visa services.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 animate-slide-up">
                <Button size="lg" className="bg-primary hover:bg-primary/90 btn-animate hover-lift">
                  Our Services
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
                <Button size="lg" variant="outline" className="backdrop-blur-sm bg-transparent btn-animate hover-lift">
                  Contact Us
                </Button>
              </div>
            </div>
            <div className="relative animate-slide-in">
              <div className="aspect-square bg-gradient-to-br from-primary/20 to-secondary/20 rounded-2xl flex items-center justify-center backdrop-blur-sm border border-white/10 card-animate hover-scale">
                <div className="text-center">
                  <Globe className="h-24 w-24 text-primary mx-auto mb-4 flat-icon flat-icon-large" />
                  <h3 className="text-2xl font-bold mb-2">Global Presence</h3>
                  <p className="text-muted-foreground">Serving clients across 3 continents</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 px-4 bg-card/50">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 stagger-animation">
            {stats.map((stat, index) => (
              <div key={index} className="text-center card-animate hover-scale">
                <div className="text-3xl md:text-4xl font-bold text-primary mb-2 gradient-text">{stat.number}</div>
                <div className="text-muted-foreground">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 stagger-animation">
            <Card className="border-primary/20 card-animate hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-12 h-12 bg-primary/20 rounded-lg flex items-center justify-center mb-4 flat-icon flat-icon-large hover-scale">
                  <Target className="h-6 w-6 text-primary" />
                </div>
                <CardTitle className="text-2xl">Our Mission</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground text-lg leading-relaxed">
                  To empower businesses and individuals through innovative technology solutions and comprehensive visa
                  services, enabling them to achieve their goals and expand their horizons in an increasingly connected
                  world.
                </p>
              </CardContent>
            </Card>

            <Card className="border-secondary/20 card-animate hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-12 h-12 bg-secondary/20 rounded-lg flex items-center justify-center mb-4 flat-icon flat-icon-large hover-scale">
                  <Eye className="h-6 w-6 text-secondary" />
                </div>
                <CardTitle className="text-2xl">Our Vision</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground text-lg leading-relaxed">
                  To be the global leader in digital transformation and immigration services, recognized for our
                  innovation, integrity, and commitment to helping our clients succeed in the digital age and achieve
                  their international aspirations.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 px-4 bg-card/30">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Core Values</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              The principles that guide everything we do and shape our company culture.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 stagger-animation">
            {values.map((value, index) => (
              <Card
                key={index}
                className="text-center border-border/50 hover:border-primary/30 transition-colors card-animate"
              >
                <CardHeader>
                  <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-4 flat-icon flat-icon-large hover-scale">
                    <value.icon className="h-8 w-8 text-primary" />
                  </div>
                  <CardTitle className="text-xl">{value.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Global Offices */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Global Presence</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              With offices across three continents, we provide local expertise with global reach.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 stagger-animation">
            {offices.map((office, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow card-animate">
                <CardHeader>
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-12 h-12 bg-primary/20 rounded-lg flex items-center justify-center flat-icon flat-icon-large hover-scale">
                      <MapPin className="h-6 w-6 text-primary" />
                    </div>
                    <CardTitle className="text-xl">{office.country}</CardTitle>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <h4 className="font-semibold mb-2">Address</h4>
                    <p className="text-muted-foreground text-sm">{office.address}</p>
                  </div>
                  <div className="flex items-center gap-2 hover-lift">
                    <Phone className="h-4 w-4 text-primary flat-icon flat-icon-small" />
                    <span className="text-sm">{office.phone}</span>
                  </div>
                  <div className="flex items-center gap-2 hover-lift">
                    <Mail className="h-4 w-4 text-primary flat-icon flat-icon-small" />
                    <span className="text-sm">{office.email}</span>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-gradient-to-r from-primary to-secondary animate-fade-in">
        <div className="max-w-4xl mx-auto text-center text-primary-foreground">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 animate-slide-up">Ready to Transform Your Business?</h2>
          <p className="text-xl mb-8 opacity-90 animate-slide-up">
            Join hundreds of satisfied clients who have achieved success with SigninSoft.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-slide-up">
            <Button size="lg" variant="secondary" className="btn-animate hover-lift">
              Start Your Project
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary bg-transparent btn-animate hover-lift"
            >
              Schedule Consultation
            </Button>
          </div>
        </div>
      </section>
    </PageLayout>
  )
}
