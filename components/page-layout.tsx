import type React from "react"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"

interface PageLayoutProps {
  children: React.ReactNode
  className?: string
}

export function PageLayout({ children, className = "" }: PageLayoutProps) {
  return (
    <div className={`min-h-screen bg-background flex flex-col ${className}`}>
      <Navigation />
      <main className="flex-1">{children}</main>
      <Footer />
    </div>
  )
}
