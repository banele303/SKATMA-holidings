"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { SectionHeader } from "@/components/ui/section-header"
import { Card, CardContent } from "@/components/ui/card"

const cases = [
  {
    title: "Brick Supply for Regional Housing",
    image: "/images/truck-delivery.jpeg",
    result: "-18% build time",
    metric: "250k+ bricks delivered",
    blurb: "Coordinated manufacturing and logistics to keep a multi-site housing project on schedule and under budget."
  },
  {
    title: "Farm-to-Table Restaurant Program",
    image: "/images/greanpapertwo.jpeg",
    result: "+32% freshness rating",
    metric: "Weekly farm deliveries",
    blurb: "Linked Agri-nema produce directly to hospitality, improving freshness, consistency, and cost control."
  },
  {
    title: "Premium Detailing Throughput",
    image: "/images/car-wash4.jpeg",
    result: "+45% cars/day",
    metric: "Service time optimized",
    blurb: "Standardized detailing process and staffing model to serve more customers with higher satisfaction."
  }
]

export function CaseStudiesSection() {
  return (
    <section id="case-studies" className="py-20">
      <div className="container mx-auto px-4">
        <SectionHeader
          eyebrow="Case Studies"
          title="Real outcomes across sectors"
          subtitle="A snapshot of how we deliver measurable results for clients and communities."
        />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {cases.map((c) => (
            <Card key={c.title} className="overflow-hidden hover:shadow-2xl transition-all border border-border/60 bg-background/70 backdrop-blur">
              <div className="relative h-48 w-full">
                <Image src={c.image} alt={c.title} fill className="object-cover" />
                <div className="absolute inset-0 bg-linear-to-t from-black/50 to-transparent" />
              </div>
              <CardContent className="p-6 space-y-2">
                <h3 className="text-xl font-bold font-display">{c.title}</h3>
                <div className="text-sm text-muted-foreground">{c.blurb}</div>
                <div className="pt-2 flex items-center gap-4 text-sm">
                  <span className="px-2 py-1 rounded-md bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-300 border border-green-200/50">{c.result}</span>
                  <span className="px-2 py-1 rounded-md bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-300 border border-blue-200/50">{c.metric}</span>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
