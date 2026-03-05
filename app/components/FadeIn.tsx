"use client"

import { useEffect, useRef, useState } from "react"

interface FadeInProps {
  children: React.ReactNode
  direction?: "up" | "fade"
}

export default function FadeIn({ children, direction = "fade" }: FadeInProps) {
  const [visible, setVisible] = useState(false)
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true) },
      { threshold: 0.1 }
    )
    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [])

  const base = "transition-all duration-700"
  const styles = {
    fade: visible ? "opacity-100" : "opacity-0",
    up: visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10",
  }

  return (
    <div ref={ref} className={`${base} ${styles[direction]}`}>
      {children}
    </div>
  )
}