"use client"

import { Header } from "@/components/layout/header"
import { Footer } from "@/components/layout/footer"
import { SectionHeader } from "@/components/ui/section-header"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { subsidiaries } from "@/lib/data/company-data"
import Image from "next/image"
import Link from "next/link"

export default function SubsidiariesPage() {
  return (
    <main className="relative min-h-screen">
      <Header />

      <section className="py-20">
        <div className="container mx-auto px-4">
          <SectionHeader
            eyebrow="Our Group"
            title="Subsidiaries that power SKATMA HOLDINGS"
            subtitle="Each unit excels in its domain, delivering consistent quality and customer satisfaction."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {subsidiaries.map((sub) => (
              <Card key={sub.id} className="overflow-hidden hover:shadow-2xl transition-all border border-border/60 bg-background/70 backdrop-blur">
                <div className="relative h-48 w-full">
                  <Image src={sub.image} alt={sub.name} fill className="object-cover" />
                  <div className="absolute inset-0 bg-linear-to-t from-black/50 to-transparent" />
                </div>
                <CardContent className="p-6 space-y-3">
                  <h3 className="text-xl font-bold">{sub.name}</h3>
                  <p className="text-muted-foreground text-sm">{sub.description}</p>
                  <div className="flex flex-wrap gap-2 pt-1">
                    {sub.services?.slice(0, 4).map((svc: string) => (
                      <span key={svc} className="text-xs px-2 py-1 rounded-full bg-[#d6d7dc]/60 text-[#1f2244] dark:bg-[#1f2244]/30 dark:text-[#d6d7dc] border border-[#d6d7dc]/70 dark:border-[#3e3a70]">
                        {svc}
                      </span>
                    ))}
                  </div>
                  <div className="pt-4 flex gap-2">
                    {sub.website ? (
                      <Link href={sub.website} target="_blank" className="cursor-pointer">
                        <Button variant="outline">Visit Website</Button>
                      </Link>
                    ) : null}
                    <Link href="/contact" className="cursor-pointer">
                      <Button className="bg-[#1f2244] hover:bg-[#3e3a70]">Enquire</Button>
                    </Link>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
