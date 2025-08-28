"use client"

import * as React from "react"
import Link from "next/link"
import Image from "next/image"
import { cn } from "@/lib/utils"
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { Phone, Mail, Menu } from "lucide-react"
import { ThemeToggle } from "@/components/theme-toggle"

const services = [
  {
    title: "IT Consulting & Strategy",
    href: "/services/it-consulting",
    description: "Digital transformation, enterprise architecture, and cloud consulting.",
  },
  {
    title: "Software Development",
    href: "/services/software-development",
    description: "Web, mobile, and custom software solutions.",
  },
  {
    title: "UI/UX Design",
    href: "/services/ui-ux-design",
    description: "User research, prototyping, and product design.",
  },
  {
    title: "Data & Analytics",
    href: "/services/data-analytics",
    description: "Data engineering, BI reporting, and AI/ML solutions.",
  },
  {
    title: "Cybersecurity Services",
    href: "/services/cybersecurity",
    description: "Threat detection, compliance, and security operations.",
  },
  {
    title: "Digital Marketing",
    href: "/services/digital-marketing",
    description: "SEO, SEM, social media, and performance marketing.",
  },
]

const visaServices = [
  {
    title: "Study Abroad Visas",
    href: "/visa-services/study-abroad",
    description: "Student visa guidance for top universities worldwide.",
  },
  {
    title: "Work & Business Visas",
    href: "/visa-services/work-business",
    description: "Skilled worker and business investor visa support.",
  },
  {
    title: "Travel & Tourism Visas",
    href: "/visa-services/travel-tourism",
    description: "Tourist and family visit visa assistance.",
  },
  {
    title: "Visa Extension & Renewal",
    href: "/visa-services/extension-renewal",
    description: "Extend your stay without stress.",
  },
  {
    title: "Document Verification",
    href: "/visa-services/document-verification",
    description: "Authentication and attestation services.",
  },
  {
    title: "Immigration Consultation",
    href: "/visa-services/immigration-consultation",
    description: "Expert guidance for permanent residency.",
  },
]

export function Navigation() {
  const [isOpen, setIsOpen] = React.useState(false)

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 animate-slide-down">
      <div className="container flex h-16 max-w-screen-2xl items-center">
        <Link href="/" className="mr-6 flex items-center space-x-2 hover-scale">
          <Image
            src="/signin-soft-logo-new.png"
            alt="SigninSoft - Get into your Future"
            width={200}
            height={45}
            className="h-10 w-auto"
            priority
          />
        </Link>

        {/* Desktop Navigation */}
        <NavigationMenu className="hidden lg:flex">
          <NavigationMenuList>
            <NavigationMenuItem>
              <Link href="/" legacyBehavior passHref>
                <NavigationMenuLink className={cn(navigationMenuTriggerStyle(), "hover-lift")}>Home</NavigationMenuLink>
              </Link>
            </NavigationMenuItem>

            <NavigationMenuItem>
              <Link href="/about" legacyBehavior passHref>
                <NavigationMenuLink className={cn(navigationMenuTriggerStyle(), "hover-lift")}>
                  About
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>

            <NavigationMenuItem>
              <Link href="/technologies" legacyBehavior passHref>
                <NavigationMenuLink className={cn(navigationMenuTriggerStyle(), "hover-lift")}>
                  Technologies
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>

            <NavigationMenuItem>
              <NavigationMenuTrigger className="hover-lift">Services</NavigationMenuTrigger>
              <NavigationMenuContent>
                <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px] stagger-animation">
                  {services.map((service) => (
                    <ListItem key={service.title} title={service.title} href={service.href}>
                      {service.description}
                    </ListItem>
                  ))}
                </ul>
              </NavigationMenuContent>
            </NavigationMenuItem>

            <NavigationMenuItem>
              <NavigationMenuTrigger className="hover-lift">Visa Services</NavigationMenuTrigger>
              <NavigationMenuContent>
                <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px] stagger-animation">
                  {visaServices.map((service) => (
                    <ListItem key={service.title} title={service.title} href={service.href}>
                      {service.description}
                    </ListItem>
                  ))}
                </ul>
              </NavigationMenuContent>
            </NavigationMenuItem>

            <NavigationMenuItem>
              <Link href="/career" legacyBehavior passHref>
                <NavigationMenuLink className={cn(navigationMenuTriggerStyle(), "hover-lift")}>
                  Career
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>

            <NavigationMenuItem>
              <Link href="/contact" legacyBehavior passHref>
                <NavigationMenuLink className={cn(navigationMenuTriggerStyle(), "hover-lift")}>
                  Contact
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>

        <div className="ml-auto flex items-center space-x-4">
          <div className="hidden md:flex items-center space-x-4 text-sm">
            <div className="flex items-center space-x-1 animate-fade-in">
              <Phone className="h-4 w-4 text-accent flat-icon flat-icon-small" />
              <span>+1(302) 703-1113</span>
            </div>
            <div className="flex items-center space-x-1 animate-fade-in">
              <Mail className="h-4 w-4 text-accent flat-icon flat-icon-small" />
              <span>info@signinsoft.net</span>
            </div>
          </div>
          <ThemeToggle />
          <Button asChild className="bg-accent hover:bg-accent/90 btn-animate hidden sm:flex">
            <Link href="/contact">Get Started</Link>
          </Button>

          {/* Mobile Navigation */}
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild className="lg:hidden">
              <Button variant="ghost" size="icon" className="hover-scale">
                <Menu className="h-5 w-5" />
                <span className="sr-only">Toggle menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[300px] sm:w-[400px]">
              <nav className="flex flex-col space-y-4">
                <Link
                  href="/"
                  className="text-lg font-medium hover:text-accent transition-colors"
                  onClick={() => setIsOpen(false)}
                >
                  Home
                </Link>
                <Link
                  href="/about"
                  className="text-lg font-medium hover:text-accent transition-colors"
                  onClick={() => setIsOpen(false)}
                >
                  About
                </Link>
                <Link
                  href="/technologies"
                  className="text-lg font-medium hover:text-accent transition-colors"
                  onClick={() => setIsOpen(false)}
                >
                  Technologies
                </Link>

                <div className="space-y-2">
                  <h3 className="text-lg font-medium text-accent">Services</h3>
                  {services.map((service) => (
                    <Link
                      key={service.title}
                      href={service.href}
                      className="block pl-4 text-sm hover:text-accent transition-colors"
                      onClick={() => setIsOpen(false)}
                    >
                      {service.title}
                    </Link>
                  ))}
                </div>

                <div className="space-y-2">
                  <h3 className="text-lg font-medium text-accent">Visa Services</h3>
                  {visaServices.map((service) => (
                    <Link
                      key={service.title}
                      href={service.href}
                      className="block pl-4 text-sm hover:text-accent transition-colors"
                      onClick={() => setIsOpen(false)}
                    >
                      {service.title}
                    </Link>
                  ))}
                </div>

                <Link
                  href="/career"
                  className="text-lg font-medium hover:text-accent transition-colors"
                  onClick={() => setIsOpen(false)}
                >
                  Career
                </Link>
                <Link
                  href="/contact"
                  className="text-lg font-medium hover:text-accent transition-colors"
                  onClick={() => setIsOpen(false)}
                >
                  Contact
                </Link>

                <Button asChild className="bg-accent hover:bg-accent/90 btn-animate mt-4">
                  <Link href="/contact" onClick={() => setIsOpen(false)}>
                    Get Started
                  </Link>
                </Button>
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  )
}

const ListItem = React.forwardRef<React.ElementRef<"a">, React.ComponentPropsWithoutRef<"a">>(
  ({ className, title, children, ...props }, ref) => {
    return (
      <li>
        <NavigationMenuLink asChild>
          <a
            ref={ref}
            className={cn(
              "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground card-animate",
              className,
            )}
            {...props}
          >
            <div className="text-sm font-medium leading-none">{title}</div>
            <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">{children}</p>
          </a>
        </NavigationMenuLink>
      </li>
    )
  },
)
ListItem.displayName = "ListItem"
