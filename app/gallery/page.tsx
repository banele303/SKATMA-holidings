"use client"

import { Header } from "@/components/layout/header"
import { Footer } from "@/components/layout/footer"
import { SectionHeader } from "@/components/ui/section-header"
import Image from "next/image"

const images = [
  "/images/car-wash4.jpeg",
  "/images/greanpapertwo.jpeg",
  "/images/alhcol.jpeg",
  "/images/truck-delivery.jpeg",
  "/images/car-wash2.jpeg",
  "/images/msta-holdings.jpg",
  "/images/agri-nema.jpg",
  "/images/lumveleni.jpg"
]

export default function GalleryPage() {
  return (
    <main className="relative min-h-screen">
      <Header />

      <section className="py-20">
        <div className="container mx-auto px-4">
          <SectionHeader
            eyebrow="Gallery"
            title="A glimpse into our world"
            subtitle="Facilities, products, and real moments across our subsidiaries."
          />

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 md:gap-4">
            {images.map((src) => (
              <div key={src} className="relative aspect-square rounded-xl overflow-hidden border">
                <Image src={src} alt="Gallery" fill className="object-cover hover:scale-110 transition-transform duration-500" />
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
