import type { LucideIcon } from "lucide-react"

interface FlatIconProps {
  icon: LucideIcon
  size?: "small" | "medium" | "large"
  className?: string
  gradient?: "primary" | "accent" | "success" | "warning"
}

export function FlatIcon({ icon: Icon, size = "medium", className = "", gradient = "primary" }: FlatIconProps) {
  const sizeClasses = {
    small: "flat-icon-small",
    medium: "flat-icon",
    large: "flat-icon-large",
  }

  const gradientClasses = {
    primary: "bg-gradient-to-br from-primary to-accent",
    accent: "bg-gradient-to-br from-accent to-secondary",
    success: "bg-gradient-to-br from-green-500 to-emerald-600",
    warning: "bg-gradient-to-br from-yellow-500 to-orange-600",
  }

  return (
    <div className={`${sizeClasses[size]} ${gradientClasses[gradient]} ${className}`}>
      <Icon className="w-1/2 h-1/2" />
    </div>
  )
}

export function AnimatedIcon({
  icon: Icon,
  animation = "float",
  className = "",
}: {
  icon: LucideIcon
  animation?: "float" | "pulse-glow" | "rotate-in" | "bounce-in"
  className?: string
}) {
  const animationClasses = {
    float: "animate-float",
    "pulse-glow": "animate-pulse-glow",
    "rotate-in": "animate-rotate-in",
    "bounce-in": "animate-bounce-in",
  }

  return (
    <div className={`${animationClasses[animation]} ${className}`}>
      <Icon />
    </div>
  )
}
