"use client"

import { Header } from "@/components/layout/header"
import { Footer } from "@/components/layout/footer"
import { SectionHeader } from "@/components/ui/section-header"
import { CTABanner } from "@/components/layout/cta-banner"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { services } from "@/lib/data/company-data"
import Image from "next/image"
import { Check } from "lucide-react"

export default function ServicesPage() {
  return (
    <main className="relative min-h-screen">
      <Header />

      <section className="py-20">
        <div className="container mx-auto px-4">
          <SectionHeader
            eyebrow="Our Services"
            title="Comprehensive solutions across industries"
            subtitle="We combine expertise, speed, and reliability to deliver genuine business value—end to end."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((s) => (
              <Card key={s.id} className="group overflow-hidden hover:shadow-2xl transition-all border border-border/60 bg-background/70 backdrop-blur">
                <div className="relative h-48 w-full">
                  <Image src={s.image} alt={s.name} fill className="object-cover" />
                  <div className="absolute inset-0 bg-linear-to-t from-black/50 to-transparent" />
                </div>
                <CardContent className="p-6 space-y-3">
                  <h3 className="text-xl font-bold">{s.name}</h3>
                  <p className="text-muted-foreground text-sm">{s.description}</p>
                  <ul className="text-sm mt-2 space-y-1">
                    {s.features?.slice(0, 4).map((f: string, i: number) => (
                      <li key={i} className="flex items-start gap-2"><Check className="h-4 w-4 text-[#3e3a70] mt-0.5" />{f}</li>
                    ))}
                  </ul>
                  <div className="pt-4">
                    <Button className="bg-[#1f2244] hover:bg-[#3e3a70]">Request A Quote</Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <CTABanner />
      <Footer />
    </main>
  )
}
