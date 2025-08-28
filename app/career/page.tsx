"use client"

import { useState } from "react"
import { PageLayout } from "@/components/page-layout"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ArrowRight, MapPin, Clock, Users, Heart, Trophy, Zap, Globe, BookOpen, Coffee } from "lucide-react"
import { JobModal } from "@/components/job-modal"
import Image from "next/image"

export default function CareerPage() {
  const [selectedJob, setSelectedJob] = useState<any>(null)
  const [isModalOpen, setIsModalOpen] = useState(false)

  const jobOpenings = [
    {
      id: "senior-fullstack-dev",
      title: "Senior Full Stack Developer",
      department: "Engineering",
      location: "Remote / USA",
      type: "Full-time",
      salary: "$120,000 - $150,000",
      experience: "5+ years",
      skills: ["React", "Node.js", "TypeScript", "AWS"],
      description:
        "We are seeking a highly skilled Senior Full Stack Developer to join our dynamic engineering team. You will be responsible for developing and maintaining scalable web applications, working with cutting-edge technologies, and mentoring junior developers. This role offers the opportunity to work on challenging projects that impact thousands of users globally.",
      requirements: [
        "Bachelor's degree in Computer Science or related field",
        "5+ years of experience in full-stack development",
        "Proficiency in React, Node.js, and TypeScript",
        "Experience with cloud platforms (AWS, Azure, or GCP)",
        "Strong understanding of database design and optimization",
        "Experience with CI/CD pipelines and DevOps practices",
        "Excellent problem-solving and communication skills",
      ],
      responsibilities: [
        "Design and develop scalable web applications using modern technologies",
        "Collaborate with cross-functional teams to define and implement new features",
        "Write clean, maintainable, and well-documented code",
        "Mentor junior developers and conduct code reviews",
        "Optimize application performance and ensure security best practices",
        "Participate in architectural decisions and technical planning",
        "Stay updated with emerging technologies and industry trends",
      ],
      benefits: [
        "Competitive salary with performance bonuses",
        "Comprehensive health, dental, and vision insurance",
        "401(k) with company matching",
        "Flexible work arrangements and remote work options",
        "Professional development budget for courses and conferences",
        "Generous PTO and paid holidays",
        "Modern equipment and home office setup allowance",
      ],
    },
    {
      id: "ui-ux-designer",
      title: "UI/UX Designer",
      department: "Design",
      location: "Hyderabad, India",
      type: "Full-time",
      salary: "₹8,00,000 - ₹12,00,000",
      experience: "3+ years",
      skills: ["Figma", "Adobe Creative Suite", "Prototyping", "User Research"],
      description:
        "Join our creative design team as a UI/UX Designer where you'll craft intuitive and engaging user experiences. You'll work closely with product managers and developers to create designs that not only look great but also solve real user problems. This role is perfect for someone passionate about user-centered design and emerging design trends.",
      requirements: [
        "Bachelor's degree in Design, HCI, or related field",
        "3+ years of experience in UI/UX design",
        "Proficiency in Figma, Sketch, and Adobe Creative Suite",
        "Strong portfolio demonstrating design thinking and problem-solving",
        "Experience with user research and usability testing",
        "Knowledge of design systems and component libraries",
        "Understanding of front-end development principles",
      ],
      responsibilities: [
        "Create wireframes, prototypes, and high-fidelity designs",
        "Conduct user research and usability testing",
        "Collaborate with product and engineering teams",
        "Maintain and evolve design systems",
        "Present design concepts to stakeholders",
        "Ensure designs are accessible and inclusive",
        "Stay current with design trends and best practices",
      ],
      benefits: [
        "Competitive salary with annual increments",
        "Health insurance for employee and family",
        "Flexible working hours and hybrid work model",
        "Learning and development opportunities",
        "Creative workspace with latest design tools",
        "Team outings and cultural events",
        "Performance-based bonuses and recognition",
      ],
    },
    {
      id: "devops-engineer",
      title: "DevOps Engineer",
      department: "Infrastructure",
      location: "Remote / Dubai",
      type: "Full-time",
      salary: "AED 180,000 - AED 220,000",
      experience: "4+ years",
      skills: ["Docker", "Kubernetes", "AWS", "Terraform"],
      description:
        "We're looking for an experienced DevOps Engineer to help us scale our infrastructure and improve our deployment processes. You'll work with cutting-edge cloud technologies and help build robust, scalable systems that support our growing user base. This role offers the opportunity to work with a global team and make a significant impact on our technical infrastructure.",
      requirements: [
        "Bachelor's degree in Computer Science or related field",
        "4+ years of experience in DevOps or Site Reliability Engineering",
        "Strong experience with containerization (Docker, Kubernetes)",
        "Proficiency with cloud platforms (AWS, Azure, GCP)",
        "Experience with Infrastructure as Code (Terraform, CloudFormation)",
        "Knowledge of CI/CD pipelines and automation tools",
        "Strong scripting skills (Python, Bash, PowerShell)",
      ],
      responsibilities: [
        "Design and maintain scalable cloud infrastructure",
        "Implement and manage CI/CD pipelines",
        "Monitor system performance and ensure high availability",
        "Automate deployment and operational processes",
        "Collaborate with development teams on infrastructure needs",
        "Implement security best practices and compliance measures",
        "Troubleshoot and resolve infrastructure issues",
      ],
      benefits: [
        "Tax-free salary in Dubai",
        "Comprehensive health insurance",
        "Annual flight tickets to home country",
        "Housing allowance or company accommodation",
        "Professional certification support",
        "Flexible work arrangements",
        "End-of-service gratuity as per UAE law",
      ],
    },
    {
      id: "immigration-consultant",
      title: "Immigration Consultant",
      department: "Visa Services",
      location: "Somerset, NJ",
      type: "Full-time",
      salary: "$65,000 - $85,000",
      experience: "2+ years",
      skills: ["Immigration Law", "Client Relations", "Documentation", "Compliance"],
      description:
        "Join our visa services team as an Immigration Consultant where you'll help individuals and families achieve their dreams of studying, working, or living abroad. You'll provide expert guidance on visa applications, immigration processes, and compliance requirements while delivering exceptional client service.",
      requirements: [
        "Bachelor's degree in Law, International Relations, or related field",
        "2+ years of experience in immigration consulting or related field",
        "Knowledge of US, Canadian, and international immigration laws",
        "Strong attention to detail and organizational skills",
        "Excellent communication and interpersonal skills",
        "Experience with case management systems",
        "Multilingual abilities preferred",
      ],
      responsibilities: [
        "Assess client eligibility for various visa categories",
        "Prepare and review visa applications and supporting documents",
        "Provide guidance on immigration processes and requirements",
        "Maintain up-to-date knowledge of immigration laws and policies",
        "Communicate with government agencies and legal representatives",
        "Manage client relationships and provide ongoing support",
        "Ensure compliance with all regulatory requirements",
      ],
      benefits: [
        "Competitive salary with commission opportunities",
        "Comprehensive health and dental insurance",
        "401(k) retirement plan with matching",
        "Paid time off and holidays",
        "Professional development and training",
        "Multicultural work environment",
        "Career advancement opportunities",
      ],
    },
    {
      id: "digital-marketing-specialist",
      title: "Digital Marketing Specialist",
      department: "Marketing",
      location: "Remote",
      type: "Full-time",
      salary: "$55,000 - $75,000",
      experience: "3+ years",
      skills: ["SEO", "Google Ads", "Social Media", "Analytics"],
      description:
        "We're seeking a creative and data-driven Digital Marketing Specialist to join our marketing team. You'll be responsible for developing and executing digital marketing campaigns that drive brand awareness, lead generation, and customer engagement across multiple channels and markets.",
      requirements: [
        "Bachelor's degree in Marketing, Communications, or related field",
        "3+ years of experience in digital marketing",
        "Proficiency in Google Ads, Facebook Ads, and other advertising platforms",
        "Strong knowledge of SEO and content marketing",
        "Experience with marketing automation tools",
        "Analytical skills with experience in Google Analytics",
        "Creative thinking and excellent writing skills",
      ],
      responsibilities: [
        "Develop and execute digital marketing campaigns",
        "Manage SEO strategy and content optimization",
        "Create and manage paid advertising campaigns",
        "Analyze campaign performance and provide insights",
        "Manage social media presence and engagement",
        "Collaborate with content creators and designers",
        "Stay updated with digital marketing trends and best practices",
      ],
      benefits: [
        "Competitive salary with performance bonuses",
        "Remote work flexibility",
        "Health and wellness benefits",
        "Professional development budget",
        "Access to premium marketing tools and platforms",
        "Collaborative and creative work environment",
        "Opportunities for career growth",
      ],
    },
    {
      id: "business-analyst",
      title: "Business Analyst",
      department: "Strategy",
      location: "Hyderabad, India",
      type: "Full-time",
      salary: "₹10,00,000 - ₹15,00,000",
      experience: "4+ years",
      skills: ["Requirements Analysis", "Process Improvement", "Stakeholder Management", "Documentation"],
      description:
        "Join our strategy team as a Business Analyst where you'll bridge the gap between business needs and technical solutions. You'll work with stakeholders across the organization to identify opportunities for improvement, analyze business processes, and drive strategic initiatives that enhance our operations and customer experience.",
      requirements: [
        "Bachelor's degree in Business Administration, Engineering, or related field",
        "4+ years of experience in business analysis or consulting",
        "Strong analytical and problem-solving skills",
        "Experience with process mapping and improvement methodologies",
        "Proficiency in data analysis tools and techniques",
        "Excellent communication and presentation skills",
        "Experience with project management principles",
      ],
      responsibilities: [
        "Analyze business processes and identify improvement opportunities",
        "Gather and document business requirements",
        "Facilitate stakeholder meetings and workshops",
        "Create process maps, workflows, and documentation",
        "Support project implementation and change management",
        "Conduct data analysis and provide insights",
        "Collaborate with cross-functional teams on strategic initiatives",
      ],
      benefits: [
        "Competitive salary with performance incentives",
        "Comprehensive health insurance",
        "Flexible work arrangements",
        "Professional certification support",
        "Learning and development opportunities",
        "Modern office facilities",
        "Team building activities and events",
      ],
    },
  ]

  const handleLearnMore = (job: any) => {
    setSelectedJob(job)
    setIsModalOpen(true)
  }

  const handleCloseModal = () => {
    setIsModalOpen(false)
    setSelectedJob(null)
  }

  const benefits = [
    {
      icon: Heart,
      title: "Health & Wellness",
      description: "Comprehensive health insurance, mental health support, and wellness programs.",
    },
    {
      icon: BookOpen,
      title: "Learning & Development",
      description: "Continuous learning opportunities, certifications, and conference attendance.",
    },
    {
      icon: Globe,
      title: "Global Opportunities",
      description: "Work with international teams and opportunities for global assignments.",
    },
    {
      icon: Coffee,
      title: "Work-Life Balance",
      description: "Flexible working hours, remote work options, and generous PTO policy.",
    },
    {
      icon: Trophy,
      title: "Performance Rewards",
      description: "Competitive salary, performance bonuses, and recognition programs.",
    },
    {
      icon: Users,
      title: "Collaborative Culture",
      description: "Inclusive environment with team building activities and open communication.",
    },
  ]

  const values = [
    {
      icon: Zap,
      title: "Innovation",
      description: "We encourage creative thinking and embrace new technologies.",
    },
    {
      icon: Users,
      title: "Collaboration",
      description: "We believe in the power of teamwork and diverse perspectives.",
    },
    {
      icon: Trophy,
      title: "Excellence",
      description: "We strive for the highest quality in everything we do.",
    },
    {
      icon: Heart,
      title: "Integrity",
      description: "We operate with honesty, transparency, and ethical practices.",
    },
  ]

  return (
    <PageLayout>
      {/* Hero Section */}
      <section className="relative py-20 px-4 bg-gradient-to-br from-primary/10 via-background to-secondary/10 overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/career-team-collaboration-office-modern-workspace.png"
            alt="Career opportunities at SigninSoft"
            fill
            className="object-cover opacity-20"
            priority
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-br from-background/90 via-background/80 to-primary/10" />

        <div className="max-w-7xl mx-auto text-center relative animate-fade-in">
          <Badge className="mb-4 bg-primary/20 text-primary border-primary/30 animate-bounce-in">
            <Users className="w-3 h-3 mr-1 flat-icon flat-icon-small" />
            Careers
          </Badge>
          <h1 className="text-4xl md:text-6xl font-bold mb-6 text-balance animate-slide-up">
            Build Your Future
            <span className="text-primary gradient-text"> With SigninSoft</span>
          </h1>
          <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto text-pretty animate-slide-up">
            Join our global team of innovators, creators, and problem-solvers. We're looking for passionate individuals
            who want to make a difference in the world of technology and immigration services.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-slide-up">
            <Button size="lg" className="bg-primary hover:bg-primary/90 btn-animate hover-lift">
              View Open Positions
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
            <Button size="lg" variant="outline" className="btn-animate hover-lift bg-transparent">
              Learn About Our Culture
            </Button>
          </div>
        </div>
      </section>

      {/* Why Join Us */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Why Choose SigninSoft?</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              We're more than just a workplace – we're a community of innovators building the future together.
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

      {/* Benefits */}
      <section className="py-20 px-4 bg-card/30">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Benefits & Perks</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              We invest in our people because they are our greatest asset.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 stagger-animation">
            {benefits.map((benefit, index) => (
              <Card key={index} className="border-border/50 hover:shadow-lg transition-shadow card-animate">
                <CardHeader>
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 bg-primary/20 rounded-lg flex items-center justify-center flat-icon flat-icon-large hover-scale">
                      <benefit.icon className="h-6 w-6 text-primary" />
                    </div>
                    <CardTitle className="text-xl">{benefit.title}</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{benefit.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Job Openings */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Current Openings</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Find your perfect role and join our growing team of professionals.
            </p>
          </div>

          <div className="grid gap-6 stagger-animation">
            {jobOpenings.map((job, index) => (
              <Card
                key={index}
                className="hover:shadow-lg transition-shadow border-border/50 hover:border-primary/30 card-animate"
              >
                <CardContent className="p-6">
                  <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4">
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-2">
                        <h3 className="text-xl font-semibold">{job.title}</h3>
                        <Badge variant="secondary">{job.department}</Badge>
                      </div>
                      <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground mb-3">
                        <div className="flex items-center gap-1">
                          <MapPin className="h-4 w-4 flat-icon flat-icon-small" />
                          {job.location}
                        </div>
                        <div className="flex items-center gap-1">
                          <Clock className="h-4 w-4 flat-icon flat-icon-small" />
                          {job.type}
                        </div>
                        <div className="flex items-center gap-1">
                          <Users className="h-4 w-4 flat-icon flat-icon-small" />
                          {job.experience}
                        </div>
                      </div>
                      <div className="flex flex-wrap gap-2">
                        {job.skills.map((skill, skillIndex) => (
                          <Badge key={skillIndex} variant="outline" className="text-xs hover-scale">
                            {skill}
                          </Badge>
                        ))}
                      </div>
                    </div>
                    <div className="flex gap-2">
                      <Button variant="outline" onClick={() => handleLearnMore(job)} className="btn-animate hover-lift">
                        Learn More
                      </Button>
                      <Button
                        className="bg-primary hover:bg-primary/90 btn-animate hover-lift"
                        onClick={() => handleLearnMore(job)}
                      >
                        Apply Now
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12 animate-fade-in">
            <p className="text-muted-foreground mb-4">
              Don't see a role that fits? We're always looking for talented individuals.
            </p>
            <Button variant="outline" size="lg" className="btn-animate hover-lift bg-transparent">
              Send Us Your Resume
            </Button>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-gradient-to-r from-primary to-secondary animate-fade-in">
        <div className="max-w-4xl mx-auto text-center text-primary-foreground">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 animate-slide-up">Ready to Join Our Team?</h2>
          <p className="text-xl mb-8 opacity-90 animate-slide-up">
            Take the next step in your career and become part of our innovative team.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-slide-up">
            <Button size="lg" variant="secondary" className="btn-animate hover-lift">
              Apply Today
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary bg-transparent btn-animate hover-lift"
            >
              Contact HR Team
            </Button>
          </div>
        </div>
      </section>

      {selectedJob && <JobModal job={selectedJob} isOpen={isModalOpen} onClose={handleCloseModal} />}
    </PageLayout>
  )
}
