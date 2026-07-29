"use client"

import { motion } from "framer-motion"
import { type LucideIcon } from "lucide-react"

interface InfoCardProps {
  icon?: LucideIcon
  title: string
  children: React.ReactNode
  variant?: "default" | "warning" | "success" | "info"
}

const variantStyles = {
  default: "border-border bg-card",
  warning: "border-yellow-500/30 bg-yellow-500/5",
  success: "border-green-500/30 bg-green-500/5",
  info: "border-primary/30 bg-primary/5",
}

const iconVariantStyles = {
  default: "bg-secondary text-muted-foreground",
  warning: "bg-yellow-500/10 text-yellow-500",
  success: "bg-green-500/10 text-green-500",
  info: "bg-primary/10 text-primary",
}

export function InfoCard({ icon: Icon, title, children, variant = "default" }: InfoCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className={`rounded-lg border p-6 ${variantStyles[variant]}`}
    >
      <div className="flex items-start gap-4">
        {Icon && (
          <div className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-lg ${iconVariantStyles[variant]}`}>
            <Icon className="h-5 w-5" />
          </div>
        )}
        <div className="flex-1">
          <h3 className="font-semibold mb-2">{title}</h3>
          <div className="text-sm text-muted-foreground leading-relaxed">
            {children}
          </div>
        </div>
      </div>
    </motion.div>
  )
}
