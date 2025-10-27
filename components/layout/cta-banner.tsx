"use client"

import { motion } from "framer-motion"
import Link from "next/link"

export function CTABanner() {
  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <motion.div
          className="relative overflow-hidden rounded-2xl p-8 md:p-12 bg-linear-to-r from-[#1f2244] via-[#3e3a70] to-[#8a8c91] text-white"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="relative z-10">
            <h3 className="text-2xl md:text-4xl font-bold mb-2">Ready to work with SKATMA HOLDINGS?</h3>
            <p className="text-white/90 mb-6 max-w-2xl">Let’s accelerate your next project with a reliable, modern, and results-driven partner across agriculture, hospitality, and construction.</p>
            <div className="flex flex-col sm:flex-row gap-3">
              <Link href="/contact" className="inline-flex items-center justify-center px-6 py-3 rounded-lg bg-white text-[#1f2244] font-semibold hover:bg-white/90">
                Contact Us
              </Link>
              <Link href="/services" className="inline-flex items-center justify-center px-6 py-3 rounded-lg bg-white/15 border border-white/25 hover:bg-white/20">
                Explore Services
              </Link>
            </div>
          </div>
          <div className="absolute -right-10 -bottom-10 w-56 h-56 rounded-full bg-white/10 blur-2xl" />
          <div className="absolute -left-10 -top-10 w-40 h-40 rounded-full bg-white/10 blur-2xl" />
        </motion.div>
      </div>
    </section>
  )
}
