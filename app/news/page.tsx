"use client"

import { Header } from "@/components/layout/header"
import { Footer } from "@/components/layout/footer"
import { SectionHeader } from "@/components/ui/section-header"
import { Card, CardContent } from "@/components/ui/card"
import Image from "next/image"
import Link from "next/link"
import { blogPosts } from "@/lib/data/company-data"

export default function NewsPage() {
  return (
    <main className="relative min-h-screen">
      <Header />

      <section className="py-20">
        <div className="container mx-auto px-4">
          <SectionHeader
            eyebrow="News & Insights"
            title="Latest from SKATMA HOLDINGS"
            subtitle="Stories, updates, and ideas across agriculture, hospitality, and construction."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {blogPosts.map((post) => (
              <Card key={post.id} className="overflow-hidden hover:shadow-2xl transition-all border border-border/60 bg-background/70 backdrop-blur">
                <div className="relative h-44 w-full">
                  <Image src={post.image} alt={post.title} fill className="object-cover" />
                </div>
                <CardContent className="p-6 space-y-2">
                  <div className="text-xs uppercase tracking-wide text-[#3e3a70]">{post.category}</div>
                  <h3 className="text-lg font-bold">{post.title}</h3>
                  <p className="text-sm text-muted-foreground">{post.excerpt}</p>
                  <div className="text-xs text-muted-foreground">{post.date} • {post.readTime}</div>
                  <Link href={`/news/${post.id}`} className="text-[#1f2244] font-medium inline-block mt-2 hover:text-[#3e3a70] transition-colors">Read More →</Link>
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
