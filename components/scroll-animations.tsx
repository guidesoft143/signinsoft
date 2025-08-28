"use client"

import type React from "react"

import { useEffect, useRef } from "react"

export function useScrollAnimation() {
  const ref = useRef<HTMLElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate")
          }
        })
      },
      {
        threshold: 0.1,
        rootMargin: "0px 0px -50px 0px",
      },
    )

    const elements = document.querySelectorAll(".fade-in-up, .fade-in-left, .fade-in-right, .scroll-animate")
    elements.forEach((el) => observer.observe(el))

    return () => observer.disconnect()
  }, [])

  return ref
}

export function ScrollAnimationProvider({ children }: { children: React.ReactNode }) {
  useScrollAnimation()
  return <>{children}</>
}
