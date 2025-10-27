"use client"

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Star, StarHalf } from "lucide-react"

const testimonials = [
  {
    name: "Khensani M.",
    role: "Restaurant Partner",
    quote:
      "SKATMA Holdings elevated our operations beyond expectations. Their professionalism and speed changed our business.",
    avatar: null,
    rating: 5,
  },
  {
    name: "Thabo R.",
    role: "Construction Client",
    quote:
      "Reliable delivery and quality materials every time. Their brick yard keeps our projects on schedule.",
    avatar: null,
    rating: 4.8,
  },
  {
    name: "Zanele D.",
    role: "Agriculture Supplier",
    quote:
      "From planning to execution, the team is hands-on and insightful. True partners in growth.",
    avatar: null,
    rating: 5,
  },
]

export function TestimonialsSection() {
  return (
    <section id="testimonials" className="py-20">
      <div className="container mx-auto px-4">
        <motion.div
          className="text-center mb-14"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-sm font-semibold text-[#3e3a70] dark:text-white/80 uppercase tracking-wide mb-2">
            What Clients Say
          </h2>
          <h3 className="text-4xl md:text-5xl font-bold text-[#1f2244] dark:text-white">
            Trusted by Partners and Clients
          </h3>
          <p className="text-muted-foreground max-w-2xl mx-auto mt-4 dark:text-white/70">
            Real stories from people who experienced our service across hospitality, agriculture, and construction.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((t, i) => {
            const ratingValue = t.rating ?? 5
            const filledStars = Math.floor(ratingValue)
            const hasHalfStar = ratingValue - filledStars >= 0.5

            return (
              <motion.div
                key={t.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
              >
                <Card className="h-full bg-background/70 dark:bg-white/5 backdrop-blur border border-border/60 dark:border-white/10 hover:shadow-xl transition-shadow">
                  <CardContent className="p-6">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="h-12 w-12 rounded-full border bg-linear-to-br from-[#1f2244]/20 to-[#3e3a70]/20 flex items-center justify-center font-semibold text-[#1f2244]">
                        {t.name.split(" ").map(p=>p[0]).slice(0,2).join("")}
                      </div>
                      <div>
                        <div className="font-semibold dark:text-white">{t.name}</div>
                        <div className="text-xs text-muted-foreground dark:text-white/60">{t.role}</div>
                      </div>
                    </div>
                    <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-yellow-400/10 border border-yellow-500/30 px-3 py-1 text-xs font-semibold text-yellow-500 drop-shadow-sm">
                      <div className="flex items-center gap-1">
                        {Array.from({ length: 5 }).map((_, idx) => {
                          const isFilled = idx < filledStars
                          const isHalf = !isFilled && hasHalfStar && idx === filledStars

                          if (isHalf) {
                            return (
                              <StarHalf
                                key={`${t.name}-star-${idx}`}
                                className="h-4 w-4 text-yellow-400 drop-shadow"
                                fill="currentColor"
                              />
                            )
                          }

                          return (
                            <Star
                              key={`${t.name}-star-${idx}`}
                              className={`h-4 w-4 ${isFilled ? "text-yellow-400 drop-shadow" : "text-yellow-400/40"}`}
                              fill={isFilled ? "currentColor" : "none"}
                              strokeWidth={isFilled ? 0 : 1.5}
                            />
                          )
                        })}
                      </div>
                      <span>{ratingValue.toFixed(1)} / 5</span>
                    </div>
                    <p className="text-sm leading-relaxed dark:text-white/80">“{t.quote}”</p>
                  </CardContent>
                </Card>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
