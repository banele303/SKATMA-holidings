"use client"

import { motion, useAnimationControls } from "framer-motion"
import { useEffect } from "react"
import Image from "next/image"
import { Card } from "@/components/ui/card"
import { subsidiaries } from "@/lib/data/company-data"

// Build the brands list from subsidiaries so we use real names, images, and external links
const brands = subsidiaries.map((s) => ({
  id: s.id,
  name: s.name,
  description: s.description,
  image: s.image,
  website: s.website,
}))

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
            Our <span className="text-[#3e3a70]">Brand Portfolio</span>
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
          {duplicatedBrands.map((brand, index) => {
            const CardInner = (
              <Card className="w-[320px] md:w-[360px] h-[200px] md:h-[200px] p-2 bg-background hover:shadow-xl transition-all cursor-pointer border-2 hover:border-[#3e3a70]/50">
                <div className="flex flex-row items-center text-left space-x-4 h-full">
                  {/* Logo Image */}
                  <div className="relative w-32 h-32 shrink-0 overflow-hidden">
                    <Image
                      src={brand.image}
                      alt={brand.name}
                      fill
                      className="object-contain"
                    />
                  </div>

                  <div className="flex flex-col justify-center flex-1">
                    {/* Brand Name */}
                    <h3 className="text-lg md:text-xl font-bold text-[#1f2244] dark:text-gray-100 mb-2 line-clamp-1">
                      {brand.name}
                    </h3>

                    {/* Description */}
                    <p className="text-xs md:text-sm text-[#1f2244]/75 dark:text-gray-400 line-clamp-2">
                      {brand.description}
                    </p>
                  </div>
                </div>
              </Card>
            )

            const content = (
              <motion.div
                key={`${brand.id}-${index}`}
                whileHover={{ scale: 1.05, y: -5 }}
                transition={{ duration: 0.3 }}
              >
                {CardInner}
              </motion.div>
            )

            // Wrap with external link if available
            return brand.website ? (
              <a
                key={`${brand.id}-${index}`}
                href={brand.website}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`Visit ${brand.name} website`}
                className="block focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#3e3a70]"
              >
                {content}
              </a>
            ) : (
              content
            )
          })}
        </motion.div>
      </div>

      {/* Bottom indicator dots */}
      <div className="flex justify-center gap-2 mt-8">
        {brands.map((brand) => (
          <div
            key={brand.id}
            className="w-2 h-2 rounded-full bg-[#1f2244]/30 hover:bg-[#3e3a70] transition-all cursor-pointer"
          />
        ))}
      </div>
    </section>
  )
}
