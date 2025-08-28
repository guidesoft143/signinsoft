"use client"

import type React from "react"

import { useEffect, useRef, useState } from "react"

interface ScrollAnimateProps {
  children: React.ReactNode
  className?: string
  animation?: "fade-up" | "fade-left" | "fade-right" | "scale" | "slide-up"
  delay?: number
  threshold?: number
}

export function ScrollAnimate({
  children,
  className = "",
  animation = "fade-up",
  delay = 0,
  threshold = 0.1,
}: ScrollAnimateProps) {
  const [isVisible, setIsVisible] = useState(false)
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => {
            setIsVisible(true)
          }, delay)
        }
      },
      {
        threshold,
        rootMargin: "50px",
      },
    )

    if (ref.current) {
      observer.observe(ref.current)
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current)
      }
    }
  }, [delay, threshold])

  const getAnimationClass = () => {
    const baseClass = `transition-all duration-700 ease-out ${className}`

    if (!isVisible) {
      switch (animation) {
        case "fade-up":
          return `${baseClass} opacity-0 translate-y-8`
        case "fade-left":
          return `${baseClass} opacity-0 -translate-x-8`
        case "fade-right":
          return `${baseClass} opacity-0 translate-x-8`
        case "scale":
          return `${baseClass} opacity-0 scale-95`
        case "slide-up":
          return `${baseClass} opacity-0 translate-y-12`
        default:
          return `${baseClass} opacity-0 translate-y-8`
      }
    }

    return `${baseClass} opacity-100 translate-y-0 translate-x-0 scale-100`
  }

  return (
    <div ref={ref} className={getAnimationClass()}>
      {children}
    </div>
  )
}
