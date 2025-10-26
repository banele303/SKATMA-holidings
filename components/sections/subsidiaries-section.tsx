"use client"

import { motion, useAnimation } from "framer-motion"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { subsidiaries } from "@/lib/data/company-data"
import { ExternalLink } from "lucide-react"
import { useEffect } from "react"

export function SubsidiariesSection() {
  const controls = useAnimation()

  useEffect(() => {
    controls.start({
      x: [0, -1920],
      transition: {
        x: {
          repeat: Infinity,
          repeatType: "loop",
          duration: 40,
          ease: "linear",
        },
      },
    })
  }, [controls])

  return (
    <section id="subsidiaries" className="py-20 bg-muted/30 overflow-hidden">
      <div className="container mx-auto px-4 mb-12">
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-sm font-semibold text-red-600 uppercase tracking-wide mb-2">
            Our Business Portfolio
          </h2>
          <h3 className="text-4xl md:text-5xl font-bold mb-4">
            Diverse Subsidiaries
            <span className="block text-red-600">Driving Excellence</span>
          </h3>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            Explore our dynamic portfolio of subsidiary companies, each specializing 
            in delivering exceptional services across different sectors.
          </p>
        </motion.div>
      </div>

      {/* Scrolling Cards Container */}
      <div className="relative">
        <div className="flex gap-6 py-8">
          <motion.div
            className="flex gap-6"
            animate={controls}
          >
            {/* Duplicate the array for seamless loop */}
            {[...subsidiaries, ...subsidiaries, ...subsidiaries].map((subsidiary, index) => (
              <Card
                key={`${subsidiary.id}-${index}`}
                className="min-w-[400px] max-w-[400px] hover:shadow-xl transition-all duration-300 cursor-pointer group"
              >
                <CardHeader>
                  <div className="flex items-start justify-between mb-2">
                    <Badge variant="outline" className="border-red-600 text-red-600">
                      {subsidiary.id}/{subsidiaries.length}
                    </Badge>
                    {subsidiary.website && (
                      <ExternalLink className="h-4 w-4 text-muted-foreground group-hover:text-red-600 transition-colors" />
                    )}
                  </div>
                  <CardTitle className="text-2xl font-bold group-hover:text-red-600 transition-colors">
                    {subsidiary.name}
                  </CardTitle>
                  <CardDescription className="text-base">
                    {subsidiary.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground mb-4 line-clamp-3">
                    {subsidiary.details}
                  </p>
                  
                  <div className="space-y-2">
                    <h4 className="font-semibold text-sm">Services:</h4>
                    <div className="flex flex-wrap gap-2">
                      {subsidiary.services.map((service, idx) => (
                        <Badge key={idx} variant="secondary" className="text-xs">
                          {service}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </motion.div>
        </div>

        {/* Gradient overlays for fade effect */}
        <div className="absolute inset-y-0 left-0 w-32 bg-linear-to-r from-background to-transparent pointer-events-none" />
        <div className="absolute inset-y-0 right-0 w-32 bg-linear-to-l from-background to-transparent pointer-events-none" />
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
            <div className="text-3xl font-bold text-red-600">{subsidiaries.length}</div>
            <div className="text-sm text-muted-foreground">Active Subsidiaries</div>
          </div>
          <div className="space-y-2">
            <div className="text-3xl font-bold text-red-600">10+</div>
            <div className="text-sm text-muted-foreground">Years Combined Experience</div>
          </div>
          <div className="space-y-2">
            <div className="text-3xl font-bold text-red-600">500+</div>
            <div className="text-sm text-muted-foreground">Employees</div>
          </div>
          <div className="space-y-2">
            <div className="text-3xl font-bold text-red-600">24/7</div>
            <div className="text-sm text-muted-foreground">Customer Support</div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}