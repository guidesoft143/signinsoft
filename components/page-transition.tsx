"use client"

import type React from "react"

import { useEffect, useState } from "react"
import { usePathname } from "next/navigation"

export function PageTransition({ children }: { children: React.ReactNode }) {
  const [isLoading, setIsLoading] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    setIsLoading(true)
    const timer = setTimeout(() => {
      setIsLoading(false)
    }, 300)

    return () => clearTimeout(timer)
  }, [pathname])

  return (
    <>
      {isLoading && (
        <div className="fixed inset-0 z-50 bg-background flex items-center justify-center">
          <div className="loading-dots">
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>
      )}
      <div className={`transition-opacity duration-300 ${isLoading ? "opacity-0" : "opacity-100"}`}>{children}</div>
    </>
  )
}
