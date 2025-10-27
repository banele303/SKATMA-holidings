"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { blogPosts } from "@/lib/data/company-data"
import { Calendar, User, Clock, ArrowRight } from "lucide-react"

export function NewsSection() {
  return (
    <section id="news" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-sm font-bold text-[#3e3a70] uppercase tracking-wide mb-3">
            SKATMA Holdings Blog & News
          </h2>
          <h3 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="text-foreground">Get Update</span>
            <span className="block text-[#3e3a70] mt-2">Blog & News</span>
          </h3>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            Stay informed with the latest insights, industry trends, and company updates 
            from SKATMA Holdings and our subsidiaries.
          </p>
        </motion.div>

        {/* Blog Posts Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {blogPosts.map((post, index) => (
            <motion.div
              key={post.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="h-full hover:shadow-xl transition-all duration-300 group cursor-pointer overflow-hidden p-2">
                {/* Image */}
                <div className="relative h-48 bg-muted overflow-hidden rounded-lg mb-4">
                  <Image
                    src={post.image}
                    alt={post.title}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-all" />
                  <div className="absolute top-4 left-4">
                    <Badge className="bg-[#1f2244] text-white">{post.category}</Badge>
                  </div>
                </div>

                <CardHeader className="p-0 mb-4">
                  {/* Meta Info */}
                  <div className="flex items-center gap-4 text-xs text-foreground/70 mb-3">
                    <div className="flex items-center gap-1">
                      <Calendar className="h-3 w-3" />
                      <span>{new Date(post.date).toLocaleDateString('en-US', { 
                        month: 'short', 
                        day: 'numeric', 
                        year: 'numeric' 
                      })}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Clock className="h-3 w-3" />
                      <span>{post.readTime}</span>
                    </div>
                  </div>

                  <CardTitle className="text-xl group-hover:text-[#3e3a70] transition-colors line-clamp-2">
                    {post.title}
                  </CardTitle>
                  <CardDescription className="line-clamp-3 text-foreground/80">
                    {post.excerpt}
                  </CardDescription>
                </CardHeader>

                <CardContent className="p-0">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2 text-sm text-foreground/70">
                      <User className="h-4 w-4" />
                      <span>{post.author}</span>
                    </div>
                    <Button 
                      variant="ghost" 
                      size="sm"
                      className="group-hover:text-[#3e3a70] transition-colors"
                    >
                      Read More
                      <ArrowRight className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* View All Button */}
        <motion.div
          className="text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <Button size="lg" variant="outline" className="border-[#1f2244] text-[#1f2244] hover:bg-[#1f2244] hover:text-white">
            View All Articles
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </motion.div>
      </div>
    </section>
  )
}