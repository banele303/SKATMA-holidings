"use client"

import { motion } from "framer-motion"
import { Trophy, BadgeCheck, ThumbsUp, Star } from "lucide-react"
import { SectionHeader } from "@/components/ui/section-header"

const items = [
  { icon: Trophy, title: "Industry Recognition", desc: "15+ awards and acknowledgements across divisions" },
  { icon: BadgeCheck, title: "Quality Assured", desc: "Internal QA checks aligned to SA standards" },
  { icon: ThumbsUp, title: "Client Satisfaction", desc: "100+ happy clients since 2019" },
  { icon: Star, title: "Consistent Excellence", desc: "On-time delivery and lasting partnerships" },
]

export function AwardsSection() {
  return (
    <section id="awards" className="py-20">
      <div className="container mx-auto px-4">
        <SectionHeader
          eyebrow="Trust"
          title="Awards, standards, and satisfaction"
          subtitle="Social proof that backs our promise of excellence."
        />
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-5xl mx-auto">
          {items.map((it, i) => (
            <motion.div
              key={it.title}
              className="text-center border rounded-xl p-6 bg-background/70 backdrop-blur hover:shadow-xl"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.05 }}
            >
              <div className="mx-auto w-12 h-12 rounded-lg bg-[#1f2244]/15 dark:bg-[#3e3a70]/30 flex items-center justify-center mb-3">
                <it.icon className="h-6 w-6 text-[#1f2244] dark:text-[#d6d7dc]" />
              </div>
              <div className="font-semibold font-display">{it.title}</div>
              <div className="text-sm text-muted-foreground">{it.desc}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
