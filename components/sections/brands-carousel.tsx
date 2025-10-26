"use client"

import { motion, useAnimationControls } from "framer-motion"
import { useEffect } from "react"
import Image from "next/image"
import { Card } from "@/components/ui/card"

const brands = [
  {
    id: 1,
    name: "Cabal Villa",
    description: "Providing exquisite Dining and Bar tendering experience.",
    image: "/images/logo.jpeg"
  },
  {
    id: 2,
    name: "MSTA holdings",
    description: "We specialize in producing and supplying durable, high-quality bricks for all types of construction.",
    image: "/images/stma-bricks.jpeg"
  },
  {
    id: 3,
    name: "Lumveleni",
    description: "A multi-facade Bar, Restuarant and Car washing company.",
    image: "/images/anotherlogo.jpeg"
  },
  {
    id: 4,
    name: "Agri-nema",
    description: "The farming engine with expertise in crop and animal farming.",
    image: "/images/fresh-logo.jpeg"
  }
]

export function BrandsCarousel() {
  const controls = useAnimationControls()

  // Triple the array for seamless loop
  const duplicatedBrands = [...brands, ...brands, ...brands]

  useEffect(() => {
    const animateCarousel = async () => {
      await controls.start({
        x: [0, -100 * brands.length],
        transition: {
          x: {
            repeat: Infinity,
            repeatType: "loop",
            duration: 25,
            ease: "linear"
          }
        }
      })
    }

    animateCarousel()
  }, [controls, brands.length])

  return (
    <section className="py-10 bg-muted/30 overflow-hidden">
      <div className="container mx-auto px-4 mb-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Our <span className="text-red-600">Brand Portfolio</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Discover our diverse range of brands, each excelling in their respective industries
          </p>
        </motion.div>
      </div>

      {/* Scrolling Brands Container */}
      <div className="relative">
        {/* Gradient Overlays */}
        <div className="absolute left-0 top-0 bottom-0 w-32 bg-linear-to-r from-background to-transparent z-10" />
        <div className="absolute right-0 top-0 bottom-0 w-32 bg-linear-to-l from-background to-transparent z-10" />

        <motion.div
          className="flex gap-6"
          animate={controls}
          style={{ width: "fit-content" }}
        >
          {duplicatedBrands.map((brand, index) => (
            <motion.div
              key={`${brand.id}-${index}`}
              whileHover={{ scale: 1.05, y: -5 }}
              transition={{ duration: 0.3 }}
            >
              <Card className="w-[320px] sm:w-[320px] h-[200px] sm:h-auto p-2 sm:p-2 bg-background hover:shadow-xl transition-all cursor-pointer border-2 hover:border-red-600/50">
                <div className="flex sm:flex-col items-center sm:items-center text-center space-x-4 sm:space-x-0 sm:space-y-4 h-full">
                  {/* Logo Image */}
                  <div className="relative w-32 h-32 sm:w-40 sm:h-40 shrink-0 overflow-hidden ">
                    <Image
                      src={brand.image}
                      alt={brand.name}
                      fill
                      className="object-contain"
                    />
                  </div>

                  <div className="flex flex-col justify-center text-left sm:text-center flex-1">
                    {/* Brand Name */}
                    <h3 className="text-lg sm:text-xl font-bold text-gray-900 dark:text-gray-100 mb-2">
                      {brand.name}
                    </h3>

                    {/* Description */}
                    <p className="text-xs sm:text-sm text-gray-600 dark:text-gray-400 line-clamp-2 sm:line-clamp-3">
                      {brand.description}
                    </p>
                  </div>

                  {/* Decorative Line - Hidden on mobile */}
                  <div className="hidden sm:block w-16 h-1 bg-linear-to-r from-red-600 to-orange-500 rounded-full" />
                </div>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Bottom indicator dots */}
      <div className="flex justify-center gap-2 mt-8">
        {brands.map((brand) => (
          <div
            key={brand.id}
            className="w-2 h-2 rounded-full bg-red-600/30 hover:bg-red-600 transition-all cursor-pointer"
          />
        ))}
      </div>
    </section>
  )
}
