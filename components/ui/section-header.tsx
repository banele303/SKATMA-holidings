"use client"

import { motion } from "framer-motion"

interface SectionHeaderProps {
  eyebrow?: string
  title: string
  subtitle?: string
  align?: "left" | "center"
}

export function SectionHeader({ eyebrow, title, subtitle, align = "center" }: SectionHeaderProps) {
  return (
    <motion.div
      className={align === "center" ? "text-center max-w-3xl mx-auto mb-12" : "mb-8"}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
    >
      {eyebrow && (
        <div className="text-xs font-semibold tracking-wide uppercase text-[#3e3a70] mb-2">
          {eyebrow}
        </div>
      )}
      <h2 className="text-3xl md:text-5xl font-bold font-display tracking-tight">
        {title}
      </h2>
      {subtitle && (
        <p className="text-muted-foreground mt-3 text-lg">
          {subtitle}
        </p>
      )}
    </motion.div>
  )
}
