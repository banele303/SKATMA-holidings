"use client"

import { useMemo } from "react"
import { useRouter } from "next/navigation"
import { Header } from "@/components/layout/header"
import { Footer } from "@/components/layout/footer"
import { blogPosts } from "@/lib/data/company-data"
import Image from "next/image"

export default function NewsDetailPage({ params }: { params: { id: string } }) {
  const router = useRouter()
  const post = useMemo(() => blogPosts.find(p => String(p.id) === params.id), [params.id])

  if (!post) {
    if (typeof window !== 'undefined') router.replace('/news')
    return null
  }

  return (
    <main className="relative min-h-screen">
      <Header />
      <article className="py-16">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="mb-6 text-xs uppercase tracking-wide text-[#3e3a70]">{post.category}</div>
          <h1 className="text-3xl md:text-5xl font-bold mb-4">{post.title}</h1>
          <div className="text-sm text-muted-foreground mb-8">{post.date} • {post.readTime} • {post.author}</div>
          <div className="relative w-full h-72 rounded-xl overflow-hidden mb-8">
            <Image src={post.image} alt={post.title} fill className="object-cover" />
          </div>
          <div className="prose prose-neutral dark:prose-invert max-w-none">
            <p>{post.content}</p>
          </div>
        </div>
      </article>
      <Footer />
    </main>
  )
}
