"use client"

import { motion, useInView } from "framer-motion"
import { useRef, useEffect, useState } from "react"
import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { companyOverview, stats } from "@/lib/data/company-data"
import { CheckCircle2, Target, Lightbulb, Users, Leaf } from "lucide-react"

function AnimatedCounter({ end, duration = 2 }: { end: number; duration?: number }) {
  const [count, setCount] = useState(0)
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })

  useEffect(() => {
    if (isInView) {
      let startTime: number
      let animationFrame: number

      const animate = (timestamp: number) => {
        if (!startTime) startTime = timestamp
        const progress = (timestamp - startTime) / (duration * 1000)

        if (progress < 1) {
          setCount(Math.floor(end * progress))
          animationFrame = requestAnimationFrame(animate)
        } else {
          setCount(end)
        }
      }

      animationFrame = requestAnimationFrame(animate)
      return () => cancelAnimationFrame(animationFrame)
    }
  }, [isInView, end, duration])

  return <span ref={ref}>{count}</span>
}

export function AboutSection() {
  const principles = [
    {
      icon: Target,
      title: "Financial Growth & Sustainability",
      description: "Maintain financial stability and profitability while reinvesting in our business to ensure long-term success"
    },
    {
      icon: Lightbulb,
      title: "Innovation & Excellence",
      description: "Continuously seek innovative solutions and maintain the highest standards of excellence in all our operations"
    },
    {
      icon: Users,
      title: "Customer-Centric Approach",
      description: "Place our clients' needs at the center of everything we do, ensuring their success drives our success"
    },
    {
      icon: Leaf,
      title: "Sustainable Practices",
      description: "Implement environmentally responsible practices across all our business operations"
    }
  ]

  return (
    <section id="about" className="py-20 relative">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-sm font-semibold text-[#3e3a70] dark:text-white/80 uppercase tracking-wide mb-2">
            SKATMA Holdings Overview
          </h2>
          <h3 className="text-4xl md:text-5xl font-bold mb-4 font-display tracking-tight">
            {companyOverview.title}
          </h3>
        </motion.div>

        {/* Main Content Grid */}
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
          {/* Left Column - Image/Video */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="relative aspect-video rounded-lg overflow-hidden bg-muted shadow-lg">
              <Image
                src="/images/car-wash2.jpeg"
                alt="SKATMA Holdings - Car Wash Service"
                fill
                className="object-cover"
              />
            </div>
            
            {/* Floating stats card */}
            <motion.div
              className="absolute -bottom-8 left-1/2 -translate-x-1/2 md:left-auto md:translate-x-0 md:-right-8 bg-background border rounded-lg shadow-xl p-4 md:p-6 w-[90%] max-w-[280px] md:w-auto"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <div className="flex items-center gap-3 md:gap-4">
                <div className="w-10 h-10 md:w-12 md:h-12 bg-[#1f2244]/15 dark:bg-white/15 rounded-full flex items-center justify-center shrink-0">
                  <CheckCircle2 className="w-5 h-5 md:w-6 md:h-6 text-[#1f2244] dark:text-white" />
                </div>
                <div>
                  <div className="text-xl md:text-2xl font-bold">
                    <AnimatedCounter end={100} />+
                  </div>
                  <div className="text-xs md:text-sm text-muted-foreground">Projects Completed</div>
                </div>
              </div>
            </motion.div>
          </motion.div>

          {/* Right Column - Content */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <p className="text-lg text-muted-foreground leading-relaxed">
              {companyOverview.description}
            </p>

            <div className="space-y-4">
              <h4 className="font-bold text-xl font-display tracking-tight">Our Comprehensive Approach:</h4>
              <p className="text-muted-foreground leading-relaxed">
                At SKATMA Holdings, we understand that successful business partnerships require more than 
                just surface-level collaboration. Our approach involves deep integration with our clients' 
                organizational culture, strategic objectives, and operational frameworks.
              </p>
              
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-[#3e3a70] dark:text-white mt-0.5 shrink-0" />
                  <span className="text-muted-foreground">
                    Deep integration with client vision and objectives
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-[#3e3a70] dark:text-white mt-0.5 shrink-0" />
                  <span className="text-muted-foreground">
                    Cross-industry expertise and insights
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-[#3e3a70] dark:text-white mt-0.5 shrink-0" />
                  <span className="text-muted-foreground">
                    Sustainable growth and long-term partnerships
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-[#3e3a70] dark:text-white mt-0.5 shrink-0" />
                  <span className="text-muted-foreground">
                    Innovative solutions tailored to your needs
                  </span>
                </li>
              </ul>
            </div>

            <Button size="lg" className="bg-[#1f2244] hover:bg-[#3e3a70]">
              Learn More About Us
            </Button>
          </motion.div>
        </div>

        {/* Key Principles */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <h3 className="text-3xl font-bold text-center mb-12 font-display tracking-tight">
            Our Core Principles
          </h3>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {principles.map((principle, index) => (
              <motion.div
                key={principle.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className="h-full hover:shadow-lg transition-shadow duration-300">
                  <CardContent className="p-6 space-y-4">
                    <div className="w-12 h-12 bg-[#1f2244]/15 dark:bg-white/10 rounded-lg flex items-center justify-center">
                      <principle.icon className="w-6 h-6 text-[#1f2244] dark:text-white" />
                    </div>
                    <h4 className="font-bold text-lg">{principle.title}</h4>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {principle.description}
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Stats Section */}
        <motion.div
          className="bg-linear-to-r from-[#1f2244] via-[#3e3a70] to-[#8a8c91] text-white rounded-2xl p-12 shadow-2xl"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="text-center mb-8">
            <h3 className="text-3xl font-bold mb-2">
              With SKATMA HOLDING you Always Get the Best services
            </h3>
            <p className="text-white/90">
              Our commitment to excellence is reflected in our achievements
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                className="text-center"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <div className="text-4xl md:text-5xl font-bold mb-2">
                  {stat.number}
                </div>
                <div className="text-lg font-semibold mb-1">{stat.label}</div>
                <div className="text-sm text-white/80">{stat.description}</div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}