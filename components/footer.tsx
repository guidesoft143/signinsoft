import Link from "next/link"
import Image from "next/image"
import { Phone, Mail, MapPin, Facebook, Twitter, Linkedin, Instagram } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-card border-t border-border animate-fade-in">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 stagger-animation">
          {/* Company Info */}
          <div className="space-y-4">
            <Link href="/" className="flex items-center space-x-2 hover-scale">
              <Image
                src="/signin-soft-logo-new.png"
                alt="SigninSoft - Get into your Future"
                width={180}
                height={40}
                className="h-8 w-auto"
              />
            </Link>
            <p className="text-muted-foreground text-sm text-pretty">
              Professional IT consulting and visa services with offices in USA, India, and Dubai. Get into your future
              with our expert solutions.
            </p>
            <div className="flex space-x-3">
              <Link href="#" className="flat-icon hover-scale">
                <Facebook className="h-4 w-4" />
              </Link>
              <Link href="#" className="flat-icon hover-scale">
                <Twitter className="h-4 w-4" />
              </Link>
              <Link href="#" className="flat-icon hover-scale">
                <Linkedin className="h-4 w-4" />
              </Link>
              <Link href="#" className="flat-icon hover-scale">
                <Instagram className="h-4 w-4" />
              </Link>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-foreground">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/about" className="text-muted-foreground hover:text-accent transition-colors hover-lift">
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  href="/technologies"
                  className="text-muted-foreground hover:text-accent transition-colors hover-lift"
                >
                  Technologies
                </Link>
              </li>
              <li>
                <Link href="/career" className="text-muted-foreground hover:text-accent transition-colors hover-lift">
                  Career
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-muted-foreground hover:text-accent transition-colors hover-lift">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-foreground">Services</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/services/it-consulting"
                  className="text-muted-foreground hover:text-accent transition-colors hover-lift"
                >
                  IT Consulting
                </Link>
              </li>
              <li>
                <Link
                  href="/services/software-development"
                  className="text-muted-foreground hover:text-accent transition-colors hover-lift"
                >
                  Software Development
                </Link>
              </li>
              <li>
                <Link
                  href="/services/ui-ux-design"
                  className="text-muted-foreground hover:text-accent transition-colors hover-lift"
                >
                  UI/UX Design
                </Link>
              </li>
              <li>
                <Link
                  href="/visa-services/study-abroad"
                  className="text-muted-foreground hover:text-accent transition-colors hover-lift"
                >
                  Visa Services
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-foreground">Contact Info</h3>
            <div className="space-y-3">
              <div className="flex items-start space-x-2">
                <MapPin className="h-4 w-4 text-accent mt-1 flex-shrink-0 flat-icon flat-icon-small" />
                <div className="text-sm text-muted-foreground">
                  <p className="font-medium">USA:</p>
                  <p className="text-pretty">1553 Route 27, Room 1000-2, Suite 1000, Somerset, NJ 08873</p>
                </div>
              </div>
              <div className="flex items-center space-x-2">
                <Phone className="h-4 w-4 text-accent flat-icon flat-icon-small" />
                <span className="text-sm text-muted-foreground">+1(302) 703-1113</span>
              </div>
              <div className="flex items-center space-x-2">
                <Mail className="h-4 w-4 text-accent flat-icon flat-icon-small" />
                <span className="text-sm text-muted-foreground">hr@signinsoft.net</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-border mt-8 pt-8 animate-fade-in">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-sm text-muted-foreground">© 2024 SigninSoft. All rights reserved.</p>
            <div className="flex space-x-4 mt-4 md:mt-0">
              <Link
                href="/privacy"
                className="text-sm text-muted-foreground hover:text-accent transition-colors hover-lift"
              >
                Privacy Policy
              </Link>
              <Link
                href="/terms"
                className="text-sm text-muted-foreground hover:text-accent transition-colors hover-lift"
              >
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
