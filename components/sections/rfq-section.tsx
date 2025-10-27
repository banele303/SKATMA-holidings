"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { FileText, Send, CheckCircle2, Clock } from "lucide-react"
import Link from "next/link"

export function RFQSection() {
  const features = [
    {
      icon: FileText,
      title: "Detailed Quotes",
      description: "Comprehensive pricing breakdown"
    },
    {
      icon: Clock,
      title: "Quick Response",
      description: "Reply within 24-48 hours"
    },
    {
      icon: CheckCircle2,
      title: "Custom Solutions",
      description: "Tailored to your needs"
    }
  ]

  return (
    <section className="py-20 relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-linear-to-br from-[#1f2244]/12 via-[#3e3a70]/10 to-[#8a8c91]/12" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Content */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-block px-4 py-1 bg-[#1f2244]/10 dark:bg-[#3e3a70]/30 rounded-full mb-4">
              <span className="text-[#1f2244] dark:text-[#d6d7dc] font-semibold text-sm">Request for Quote</span>
            </div>
            
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Need a <span className="text-[#3e3a70]">Custom Quote?</span>
            </h2>
            
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              Get a detailed, transparent quote for any of our services. Whether you need farming solutions, 
              construction materials, hospitality services, or car wash facilities, we provide competitive 
              pricing with no hidden costs.
            </p>

            {/* Features */}
            <div className="grid sm:grid-cols-3 gap-6 mb-8">
              {features.map((feature, index) => (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="text-center"
                >
                  <div className="w-12 h-12 bg-[#1f2244]/10 dark:bg-[#3e3a70]/30 rounded-lg flex items-center justify-center mx-auto mb-3">
                    <feature.icon className="w-6 h-6 text-[#1f2244] dark:text-[#d6d7dc]" />
                  </div>
                  <h3 className="font-semibold text-sm mb-1">{feature.title}</h3>
                  <p className="text-xs text-muted-foreground">{feature.description}</p>
                </motion.div>
              ))}
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-wrap gap-4">
              <Link href="/contact">
                <Button 
                  size="lg" 
                  className="bg-[#1f2244] hover:bg-[#3e3a70] text-white shadow-lg hover:shadow-xl transition-all"
                >
                  <Send className="w-5 h-5 mr-2" />
                  Request a Quote
                </Button>
              </Link>
              
              <a href="tel:0676254207">
                <Button 
                  size="lg" 
                  variant="outline"
                  className="border-2 border-[#1f2244] text-[#1f2244] hover:bg-[#d6d7dc]/30 dark:border-[#d6d7dc] dark:text-[#d6d7dc] dark:hover:bg-[#3e3a70]/30"
                >
                  Call Us: 067 625 4207
                </Button>
              </a>
            </div>
          </motion.div>

          {/* Right Column - Visual Card */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <Card className="bg-linear-to-br from-[#d6d7dc]/40 to-[#f5f6fa] dark:from-[#1f2244]/40 dark:to-[#3e3a70]/40 border-2 border-[#d6d7dc] dark:border-[#3e3a70] shadow-2xl">
              <CardContent className="p-8">
                <div className="text-center mb-6">
                  <div className="w-20 h-20 bg-[#1f2244] rounded-full flex items-center justify-center mx-auto mb-4">
                    <FileText className="w-10 h-10 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold mb-2">Get Your Free Quote</h3>
                  <p className="text-muted-foreground">
                    Fill out our simple form and receive a detailed quote
                  </p>
                </div>

                {/* Steps */}
                <div className="space-y-4">
                  {[
                    { step: "1", title: "Submit Your Request", desc: "Tell us about your project" },
                    { step: "2", title: "We Review & Analyze", desc: "Our team evaluates your needs" },
                    { step: "3", title: "Receive Your Quote", desc: "Get detailed pricing within 48hrs" }
                  ].map((item, index) => (
                    <motion.div
                      key={item.step}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
                      className="flex items-start gap-4 p-4 bg-white/60 dark:bg-black/20 rounded-lg"
                    >
                      <div className="w-10 h-10 bg-[#1f2244] rounded-full flex items-center justify-center shrink-0">
                        <span className="text-white font-bold">{item.step}</span>
                      </div>
                      <div>
                        <h4 className="font-semibold mb-1">{item.title}</h4>
                        <p className="text-sm text-muted-foreground">{item.desc}</p>
                      </div>
                    </motion.div>
                  ))}
                </div>

                {/* Trust Badge */}
                <div className="mt-6 pt-6 border-t text-center">
                  <p className="text-sm text-muted-foreground">
                    <CheckCircle2 className="w-4 h-4 inline mr-1 text-[#3e3a70]" />
                    Trusted by <span className="font-semibold text-[#1f2244]">100+</span> satisfied clients
                  </p>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
