"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { SectionHeader } from "@/components/ui/section-header"
import { ChevronDown } from "lucide-react"

const faqs = [
  {
    q: "What industries does SKATMA HOLDINGS serve?",
    a: "We operate across agriculture (Agri-nema), hospitality (Cabal Villa & Lumveleni), and construction materials (MSTA Holdings), plus automotive care services."
  },
  {
    q: "Do you provide end-to-end project support?",
    a: "Yes. From consultation and planning to execution and aftercare, with clear timelines and performance metrics."
  },
  {
    q: "How quickly can you start a new engagement?",
    a: "Most projects kick off within 5–10 business days after scope confirmation. Rush options are available."
  },
  {
    q: "Where are you based?",
    a: "We’re based in Thohoyandou, serving clients regionally with on-site and remote coordination."
  },
  {
    q: "Are your materials and processes compliant?",
    a: "Yes. We follow relevant South African standards and apply internal QA checks across our operations."
  },
  {
    q: "How do I get a quote?",
    a: "Use the Request for Quote section on the home page or visit the Services page to submit your requirements."
  }
]

function Item({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false)
  return (
    <div className="border rounded-lg bg-background/70 backdrop-blur">
      <button
        onClick={() => setOpen(v => !v)}
        className="w-full flex items-center justify-between text-left p-4"
      >
        <span className="font-semibold">{q}</span>
        <ChevronDown className={`h-5 w-5 transition-transform ${open ? 'rotate-180' : ''}`} />
      </button>
      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="px-4 pb-4 text-muted-foreground"
          >
            {a}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

export function FAQSection() {
  return (
    <section id="faq" className="py-20">
      <div className="container mx-auto px-4">
        <SectionHeader
          eyebrow="FAQ"
          title="Answers to common questions"
          subtitle="Everything you need to know about our services, timelines, quality, and support."
        />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 max-w-5xl mx-auto">
          {faqs.map((f, i) => (
            <Item key={i} q={f.q} a={f.a} />
          ))}
        </div>
      </div>
    </section>
  )
}
