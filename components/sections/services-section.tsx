"use client"

import { motion } from "framer-motion"
import { ArrowRight } from "lucide-react"
import Image from "next/image"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { services } from "@/lib/data/company-data"
import { useState } from "react"

export function ServicesSection() {
  const [hoveredCard, setHoveredCard] = useState<string | null>(null)

  // Map service images
  const serviceImages: Record<string, string> = {
    "carwash": "/images/car-wash4.jpeg",
    "farming": "/images/greanpapertwo.jpeg",
    "restaurant": "/images/alhcol.jpeg",
    "bricks": "/images/truck-delivery.jpeg"
  }

  return (
    <section id="services" className="py-20 relative">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-sm font-semibold text-red-600 uppercase tracking-wide mb-2">
            What SKATMA Holdings Offers
          </h2>
          <h3 className="text-4xl md:text-5xl font-bold mb-4">
            We Inspire and Offer
            <span className="block text-red-600">Excellent Services</span>
          </h3>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            Our diverse portfolio of services spans multiple industries, providing comprehensive 
            solutions tailored to meet the unique needs of our clients.
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {services.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card
                className={`h-full cursor-pointer transition-all duration-300 hover:shadow-xl overflow-hidden p-2 ${
                  hoveredCard === service.id ? "border-red-600 shadow-lg" : ""
                }`}
                onMouseEnter={() => setHoveredCard(service.id)}
                onMouseLeave={() => setHoveredCard(null)}
              >
                {/* Image Section */}
                <div className="relative h-48 w-full rounded-lg overflow-hidden mb-4">
                  <Image
                    src={serviceImages[service.id] || service.image}
                    alt={service.name}
                    fill
                    className="object-cover transition-transform duration-300 hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-black/20 hover:bg-black/10 transition-all" />
                </div>

                <CardContent className="space-y-4 p-0">
                  <CardTitle className="text-xl font-bold text-red-600">
                    {service.name}
                  </CardTitle>
                  
                  <CardDescription className="text-sm leading-relaxed">
                    {service.description}
                  </CardDescription>
                  
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{
                      height: hoveredCard === service.id ? "auto" : 0,
                      opacity: hoveredCard === service.id ? 1 : 0
                    }}
                    className="overflow-hidden"
                  >
                    <div className="space-y-2 pt-4 border-t">
                      <h4 className="font-semibold text-sm">Key Features:</h4>
                      <ul className="space-y-1">
                        {service.features.slice(0, 3).map((feature, idx) => (
                          <li key={idx} className="text-xs text-muted-foreground flex items-start">
                            <span className="text-red-600 mr-1">•</span>
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </motion.div>

                  <Button
                    variant="ghost"
                    className="w-full group hover:bg-red-50 hover:text-red-600"
                  >
                    See Details
                    <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </Button>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* View All Services Button */}
        <motion.div
          className="text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <Button size="lg" className="bg-red-600 hover:bg-red-700">
            See All Services
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </motion.div>
      </div>
    </section>
  )
}