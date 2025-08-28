import { PageLayout } from "@/components/page-layout"
import { HeroSlider } from "@/components/hero-slider"
import { ServicesOverview } from "@/components/services-overview"
import { VisaServicesOverview } from "@/components/visa-services-overview"
import { StatsSection } from "@/components/stats-section"
import { TestimonialsSlider } from "@/components/testimonials-slider"
import { TechnologiesSlider } from "@/components/technologies-slider"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function HomePage() {
  return (
    <PageLayout>
      {/* Section 1: Hero Slider with 4 slides */}
      <HeroSlider />

      {/* Section 2: Stats Overview */}
      <StatsSection />

      {/* Section 3: IT Services Overview */}
      <ServicesOverview />

      {/* Section 4: Visa Services Overview */}
      <VisaServicesOverview />

      {/* Section 5: Technologies Showcase */}
      <TechnologiesSlider />

      {/* Section 6: Client Testimonials */}
      <TestimonialsSlider />

      {/* Section 7: Call to Action Section */}
      <section className="py-20 bg-gradient-to-r from-primary to-accent animate-fade-in">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center text-primary-foreground">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-balance animate-slide-up">
              Ready to Transform Your Business?
            </h2>
            <p className="text-xl mb-8 opacity-90 text-pretty animate-slide-up">
              Join hundreds of satisfied clients who have achieved their goals with SigninSoft. Get expert IT solutions
              and visa services tailored to your needs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center animate-slide-up">
              <Button asChild className="bg-background text-foreground hover:bg-background/90 px-8 py-4 btn-animate">
                <Link href="/contact">Start Your Project Today</Link>
              </Button>
              <Button
                asChild
                variant="outline"
                className="border-2 border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary px-8 py-4 btn-animate bg-transparent"
              >
                <Link href="/contact">Schedule Free Consultation</Link>
              </Button>
            </div>
            <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-6 text-sm opacity-80 animate-fade-in">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-primary-foreground rounded-full animate-pulse"></div>
                <span>Free Initial Consultation</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-primary-foreground rounded-full animate-pulse"></div>
                <span>24/7 Global Support</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-primary-foreground rounded-full animate-pulse"></div>
                <span>98% Success Rate</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </PageLayout>
  )
}
