"use client"

import { motion, useAnimation, useReducedMotion } from "framer-motion"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { subsidiaries } from "@/lib/data/company-data"
import { ExternalLink } from "lucide-react"
import { useEffect, useState } from "react"

export function SubsidiariesSection() {
  const controls = useAnimation()
  const prefersReduced = useReducedMotion()
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const update = () => setIsMobile(window.innerWidth < 768)
    update()
    window.addEventListener("resize", update)
    return () => window.removeEventListener("resize", update)
  }, [])

  useEffect(() => {
    // Animate marquee on all devices unless user prefers reduced motion
    if (!prefersReduced) {
      const distance = isMobile ? -1400 : -2400
      const duration = isMobile ? 35 : 45
      controls.start({
        x: [0, distance],
        transition: {
          x: {
            repeat: Infinity,
            repeatType: "loop",
            duration,
            ease: "linear",
          },
        },
      })
    } else {
      controls.stop()
    }
  }, [controls, isMobile, prefersReduced])

  return (
    <section
      id="subsidiaries"
      className="py-24 overflow-hidden bg-linear-to-br from-[#060918] via-[#111832] to-[#1c214a] text-white"
    >
      <div className="container mx-auto px-4 mb-12">
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-sm font-semibold tracking-[0.4em] text-[#8aa2ff] uppercase mb-3">
            Our Brand Portfolio
          </h2>
          <h3 className="text-4xl md:text-5xl font-bold mb-4">
            Discover our diverse range of brands, each excelling in their respective industries
          </h3>
          <p className="max-w-2xl mx-auto text-lg text-white/70">
            Explore our subsidiaries to learn how every brand brings a unique edge to the SKATMA Holdings ecosystem.
          </p>
        </motion.div>
      </div>

      {/* Scrolling Cards Container */}
      <div className="relative">
        <div className="flex gap-6 py-8 overflow-hidden">
          <motion.div
            className="flex gap-6"
            animate={!prefersReduced ? controls : undefined}
            style={{ willChange: "transform" }}
          >
            {/* Duplicate the array for seamless loop on all devices */}
            {[...subsidiaries, ...subsidiaries, ...subsidiaries].map((subsidiary, index) => {
              const cardWidth = {
                width: isMobile ? "min(220px, 68vw)" : "min(360px, calc(100vw / 3 - 1rem))",
              }

              const cardContent = (
                <Card
                  className={`h-full min-h-40 sm:min-h-[180px] cursor-pointer rounded-3xl border border-white/10 bg-white/10 backdrop-blur-sm hover:border-white/30 hover:bg-white/15 transition-all duration-300 flex flex-col ${isMobile ? "shrink-0" : ""}`}
                >
                  <CardHeader className="pb-4">
                    <div className="flex items-start justify-between mb-3">
                      <Badge variant="outline" className="border-white/50 text-white/80">
                        {subsidiary.id}/{subsidiaries.length}
                      </Badge>
                      {subsidiary.website && (
                        <ExternalLink className="h-4 w-4 text-white/50 group-hover:text-white transition-colors" />
                      )}
                    </div>
                    <CardTitle className="text-2xl font-bold text-white group-hover:text-white">
                      {subsidiary.name}
                    </CardTitle>
                    <CardDescription className="text-base text-white/70">
                      {subsidiary.description}
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="pt-0 pb-5 flex-1 flex flex-col justify-between">
                    <p className="text-sm text-white/70 mb-4 line-clamp-3">
                      {subsidiary.details}
                    </p>
                    
                    <div className="space-y-2">
                      <h4 className="font-semibold text-sm text-white/80">Services:</h4>
                      <div className="flex flex-wrap gap-2">
                        {subsidiary.services.map((service, idx) => (
                          <Badge key={idx} variant="secondary" className="text-xs bg-white/15 text-white border border-white/10">
                            {service}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              )

              if (subsidiary.website) {
                return (
                  <motion.a
                    key={`${subsidiary.id}-${index}`}
                    href={subsidiary.website}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-none block group focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white/80"
                    style={cardWidth}
                    aria-label={`Visit ${subsidiary.name} website`}
                    initial={isMobile ? { y: 16, opacity: 0 } : undefined}
                    whileInView={isMobile ? { y: 0, opacity: 1 } : undefined}
                    viewport={{ once: true, amount: 0.3 }}
                    whileTap={{ scale: 0.98, y: 1 }}
                    transition={{ type: "spring", stiffness: 260, damping: 24, delay: isMobile ? (index % subsidiaries.length) * 0.03 : 0 }}
                  >
                    {cardContent}
                  </motion.a>
                )
              }

              return (
                <motion.div
                  key={`${subsidiary.id}-${index}`}
                  className="flex-none block group"
                  style={cardWidth}
                  initial={isMobile ? { y: 16, opacity: 0 } : undefined}
                  whileInView={isMobile ? { y: 0, opacity: 1 } : undefined}
                  viewport={{ once: true, amount: 0.3 }}
                  whileTap={{ scale: 0.98, y: 1 }}
                  transition={{ type: "spring", stiffness: 260, damping: 24, delay: isMobile ? (index % subsidiaries.length) * 0.03 : 0 }}
                >
                  {cardContent}
                </motion.div>
              )
            })}
          </motion.div>
        </div>

    {/* Gradient overlays for fade effect */}
    <div className="absolute inset-y-0 left-0 w-16 sm:w-32 bg-linear-to-r from-[#060918] to-transparent pointer-events-none" />
    <div className="absolute inset-y-0 right-0 w-16 sm:w-32 bg-linear-to-l from-[#1c214a] to-transparent pointer-events-none" />
      </div>

      {/* Stats or Additional Info */}
      <div className="container mx-auto px-4 mt-12">
        <motion.div
          className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="space-y-2">
            <div className="text-3xl font-bold text-white">{subsidiaries.length}</div>
            <div className="text-sm text-white/70">Active Subsidiaries</div>
          </div>
          <div className="space-y-2">
            <div className="text-3xl font-bold text-white">10+</div>
            <div className="text-sm text-white/70">Years Combined Experience</div>
          </div>
          <div className="space-y-2">
            <div className="text-3xl font-bold text-white">500+</div>
            <div className="text-sm text-white/70">Employees</div>
          </div>
          <div className="space-y-2">
            <div className="text-3xl font-bold text-white">24/7</div>
            <div className="text-sm text-white/70">Customer Support</div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}