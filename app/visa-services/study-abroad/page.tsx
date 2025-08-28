import { PageLayout } from "@/components/page-layout"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { ArrowRight, CheckCircle, GraduationCap, FileText, Clock, Users, Globe, Award } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

const benefits = [
  { title: "Top Universities", description: "Access to world-renowned educational institutions" },
  { title: "Smooth Process", description: "Streamlined application and visa processing" },
  { title: "Visa Approval Support", description: "Expert guidance for successful visa approval" },
  { title: "Post-Arrival Support", description: "Assistance with accommodation and orientation" },
]

const processSteps = [
  {
    step: "01",
    title: "Application",
    description: "University application and admission guidance",
    timeline: "2-4 months",
  },
  {
    step: "02",
    title: "Admission",
    description: "Secure admission letter from chosen university",
    timeline: "1-2 months",
  },
  {
    step: "03",
    title: "Visa",
    description: "Student visa application and documentation",
    timeline: "4-8 weeks",
  },
  {
    step: "04",
    title: "Travel",
    description: "Pre-departure briefing and travel arrangements",
    timeline: "2-4 weeks",
  },
]

const requiredDocuments = [
  "Valid passport with minimum 6 months validity",
  "University admission letter or I-20 form",
  "Financial proof (bank statements, scholarship letters)",
  "Academic transcripts and certificates",
  "English proficiency test scores (IELTS/TOEFL)",
  "Statement of Purpose (SOP)",
  "Letters of Recommendation",
  "Medical examination reports",
  "Visa application form and photographs",
]

const faqs = [
  {
    question: "How long does the student visa process take?",
    answer:
      "The complete process typically takes 4-6 months, including university application, admission, and visa processing. We recommend starting at least 8-10 months before your intended start date.",
  },
  {
    question: "What are the financial requirements for a student visa?",
    answer:
      "Financial requirements vary by country and university. Generally, you need to show proof of funds covering tuition fees plus living expenses for at least one year. We help you prepare the required financial documentation.",
  },
  {
    question: "Can I work while studying on a student visa?",
    answer:
      "Most countries allow international students to work part-time (usually 20 hours per week) during studies and full-time during breaks. Specific regulations vary by country and visa type.",
  },
  {
    question: "What happens if my visa application is rejected?",
    answer:
      "If your application is rejected, we analyze the reasons and help you address any issues before reapplying. We also provide guidance on alternative options and universities.",
  },
]

const stats = [
  { number: "5,000+", label: "Students Placed", icon: Users },
  { number: "200+", label: "Partner Universities", icon: GraduationCap },
  { number: "95%", label: "Visa Success Rate", icon: Award },
  { number: "25+", label: "Countries Covered", icon: Globe },
]

export default function StudyAbroadVisasPage() {
  return (
    <PageLayout>
      {/* Hero Section */}
      <section className="relative py-20 px-4 bg-gradient-to-br from-primary/10 via-background to-secondary/10 overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/students-global-universities-graduation-study-abr.png"
            alt="Study Abroad Visas - Global Education Opportunities"
            fill
            className="object-cover opacity-20"
            priority
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-br from-background/95 via-background/90 to-primary/20" />

        <div className="max-w-7xl mx-auto text-center relative animate-fade-in">
          <Badge className="mb-4 bg-primary/20 text-primary border-primary/30 backdrop-blur-sm animate-bounce-in">
            <GraduationCap className="w-3 h-3 mr-1 flat-icon flat-icon-small" />
            Study Abroad Visas
          </Badge>
          <h1 className="text-4xl md:text-6xl font-bold mb-6 text-balance animate-slide-up">
            Achieve Your Dreams with <span className="text-primary gradient-text">Study Visa Guidance</span>
          </h1>
          <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto text-pretty animate-slide-up">
            Turn your educational aspirations into reality with our comprehensive study abroad visa services. We guide
            you through every step from university selection to visa approval.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-slide-up">
            <Button asChild size="lg" className="bg-primary hover:bg-primary/90 btn-animate hover-lift">
              <Link href="#contact-form">
                Apply for Study Visa
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button
              asChild
              variant="outline"
              size="lg"
              className="backdrop-blur-sm bg-transparent btn-animate hover-lift"
            >
              <Link href="#process">Learn About Process</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 px-4 bg-card/50">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 stagger-animation">
            {stats.map((stat, index) => (
              <div key={index} className="text-center card-animate hover-scale">
                <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-3 flat-icon flat-icon-large hover-scale">
                  <stat.icon className="h-6 w-6 text-primary" />
                </div>
                <div className="text-2xl md:text-3xl font-bold text-primary mb-1 gradient-text">{stat.number}</div>
                <div className="text-sm text-muted-foreground">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Key Benefits */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Why Choose Our Services</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              We provide end-to-end support for your study abroad journey with proven success rates.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 stagger-animation">
            {benefits.map((benefit) => (
              <Card
                key={benefit.title}
                className="text-center border-border/50 hover:shadow-lg transition-shadow card-animate"
              >
                <CardContent className="pt-6">
                  <div className="rounded-full bg-primary/20 p-4 w-fit mx-auto mb-4 flat-icon flat-icon-large hover-scale">
                    <GraduationCap className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="text-lg font-semibold text-foreground mb-2">{benefit.title}</h3>
                  <p className="text-sm text-muted-foreground">{benefit.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Process Timeline */}
      <section id="process" className="py-20 px-4 bg-card/30">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Step-by-Step Process</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Our structured approach ensures a smooth journey from application to arrival.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 stagger-animation">
            {processSteps.map((step) => (
              <div key={step.step} className="text-center space-y-4 card-animate">
                <div className="text-4xl font-bold text-primary gradient-text">{step.step}</div>
                <h3 className="text-xl font-semibold text-foreground">{step.title}</h3>
                <p className="text-muted-foreground">{step.description}</p>
                <div className="flex items-center justify-center space-x-1 text-sm text-primary hover-lift">
                  <Clock className="h-4 w-4 flat-icon flat-icon-small" />
                  <span>{step.timeline}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Required Documents */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Required Documents</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Ensure you have all necessary documents for a successful visa application.
            </p>
          </div>

          <div className="max-w-4xl mx-auto animate-slide-up">
            <Card className="border-border/50 card-animate hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="flex items-center space-x-3">
                  <FileText className="h-6 w-6 text-primary flat-icon flat-icon-large" />
                  <CardTitle>Document Checklist</CardTitle>
                </div>
                <CardDescription>Complete this checklist to ensure your application is ready</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 stagger-animation">
                  {requiredDocuments.map((document) => (
                    <div key={document} className="flex items-start space-x-3 hover-lift">
                      <CheckCircle className="h-5 w-5 text-primary mt-0.5 flex-shrink-0 flat-icon flat-icon-small" />
                      <span className="text-sm text-muted-foreground">{document}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 px-4 bg-card/30">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Frequently Asked Questions</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Get answers to common questions about study abroad visas.
            </p>
          </div>

          <div className="max-w-4xl mx-auto animate-slide-up">
            <Accordion type="single" collapsible className="space-y-4">
              {faqs.map((faq, index) => (
                <AccordionItem
                  key={index}
                  value={`item-${index}`}
                  className="border border-border/50 rounded-lg px-6 card-animate hover:shadow-lg transition-shadow"
                >
                  <AccordionTrigger className="text-left hover:text-primary transition-colors">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground">{faq.answer}</AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section id="contact-form" className="py-20 px-4 bg-gradient-to-r from-primary to-secondary animate-fade-in">
        <div className="max-w-4xl mx-auto text-center text-primary-foreground">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 animate-slide-up">Ready to Start Your Application?</h2>
          <p className="text-xl mb-8 opacity-90 animate-slide-up">
            Get in touch with our study abroad experts and take the first step towards your educational journey.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-slide-up">
            <Button size="lg" variant="secondary" className="btn-animate hover-lift">
              Apply for Study Visa
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
