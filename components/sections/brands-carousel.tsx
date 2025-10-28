"use client"

import { motion } from "framer-motion"
import { useEffect, useState } from "react"
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
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const update = () => setIsMobile(window.innerWidth < 768)
    update()
    window.addEventListener("resize", update)
    return () => window.removeEventListener("resize", update)
  }, [])

  // No autoplay marquee here; this is a manual horizontal slider with native scroll

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

  {/* Slider: manual horizontal scroll (mobile/tablet), wrapped grid on large */}
  <div className="relative container mx-auto px-4">
  {/* Gradient Overlays (hide on md+ so desktop shows full cards clearly) */}
  <div className="pointer-events-none absolute left-0 top-0 bottom-0 w-16 sm:w-24 bg-linear-to-r from-background to-transparent z-10 md:hidden" />
  <div className="pointer-events-none absolute right-0 top-0 bottom-0 w-16 sm:w-24 bg-linear-to-l from-background to-transparent z-10 md:hidden" />

        <div
          className="flex gap-4 sm:gap-6 md:gap-8 overflow-x-auto lg:overflow-x-visible -mx-4 md:mx-0 lg:mx-0 pl-16 pr-16 sm:pl-24 sm:pr-24 md:pl-6 md:pr-6 lg:pl-0 lg:pr-0 snap-x snap-mandatory lg:snap-none md:justify-center lg:justify-center lg:flex-wrap no-scrollbar touch-pan-x overscroll-x-contain"
          style={{ scrollBehavior: "smooth" }}
        >
          {brands.map((brand, index) => {
            const CardInner = (
              <Card className={`${isMobile ? "w-60" : "w-72 sm:w-80 md:w-80 lg:w-96"} ${isMobile ? "h-[150px]" : "h-40 sm:h-[170px]"} p-2 bg-background hover:shadow-xl transition-all cursor-pointer border-2 hover:border-[#3e3a70]/50 snap-start md:snap-start lg:snap-center shrink-0`}>
                <div className="flex flex-row items-center text-left gap-3 sm:gap-4 h-full">
                  {/* Logo Image */}
                  <div
                    className={`relative ${isMobile ? "w-24 h-24" : "w-24 h-24 sm:w-28 sm:h-28"} shrink-0 overflow-hidden`}
                  >
                    <Image
                      src={brand.image}
                      alt={brand.name}
                      fill
                      className="object-contain"
                    />
                  </div>

                  <div className="flex flex-col justify-center flex-1">
                    {/* Brand Name */}
                    <h3 className={`${isMobile ? "text-sm" : "text-base sm:text-lg md:text-xl"} font-bold text-[#1f2244] dark:text-gray-100 mb-1 sm:mb-2 line-clamp-1`}>
                      {brand.name}
                    </h3>

                    {/* Description */}
                    <p className={`${isMobile ? "text-[11px]" : "text-xs sm:text-sm"} text-[#1f2244]/75 dark:text-gray-400 line-clamp-2`}>
                      {brand.description}
                    </p>
                  </div>
                </div>
              </Card>
            )

            const content = (
              <motion.div
                key={`${brand.id}-${index}`}
                className="flex-none"
                whileHover={!isMobile ? { scale: 1.03, y: -4 } : undefined}
                whileTap={{ scale: 0.98, y: 1 }}
                transition={{ duration: 0.2 }}
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
                className={`block flex-none focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#3e3a70]`}
              >
                {content}
              </a>
            ) : (
              content
            )
          })}
        </div>
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
