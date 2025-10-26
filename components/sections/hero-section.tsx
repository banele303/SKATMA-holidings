"use client"

import { motion } from "framer-motion"
import { ArrowRight, Play, Award, Phone } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { companyInfo } from "@/lib/data/company-data"

export function HeroSection() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
        delayChildren: 0.2
      }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0
    }
  }

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background image with overlay */}
      <div className="absolute inset-0 z-0">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: "url('/images/hero-image.jpg')",
            filter: "brightness(0.6)"
          }}
        />
        <div className="absolute inset-0 bg-black/40" />
        <div className="absolute inset-0 bg-linear-to-br from-red-900/20 via-black/30 to-red-800/20" />
        
        {/* Concentric Circles/Ripples Pattern - Wave Effect */}
        <div 
          className="absolute inset-0"
          style={{
            backgroundImage: `
              repeating-radial-gradient(circle at 80% 50%, 
                transparent 0px, 
                transparent 28px, 
                rgba(59, 130, 246, 0.2) 28px, 
                rgba(59, 130, 246, 0.2) 30px,
                transparent 30px,
                transparent 60px
              )
            `,
            maskImage: 'linear-gradient(to left, rgba(0,0,0,0.4) 0%, rgba(0,0,0,0.2) 50%, transparent 100%)',
            WebkitMaskImage: 'linear-gradient(to left, rgba(0,0,0,0.4) 0%, rgba(0,0,0,0.2) 50%, transparent 100%)'
          }}
        />
      </div>

      {/* Content */}
      <motion.div
        className="container mx-auto px-4 py-20 relative z-10"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <div className="text-center max-w-4xl mx-auto text-white">
          {/* Badge */}
          <motion.div variants={itemVariants} className="mb-6">
            <Badge variant="outline" className="border-red-500 text-red-400 bg-red-950/50 px-4 py-2">
              <Award className="w-4 h-4 mr-2" />
              Leading Business Solutions Provider
            </Badge>
          </motion.div>

          {/* Main heading */}
          <motion.h1
            variants={itemVariants}
            className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight"
          >
            <span className="block text-white">Welcome to</span>
            <span className="block bg-clip-text text-transparent bg-linear-to-r from-red-400 via-red-500 to-orange-500">
              {companyInfo.name}
            </span>
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            variants={itemVariants}
            className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto leading-relaxed font-medium"
          >
            <span className="bg-clip-text text-transparent bg-linear-to-r from-gray-100 via-white to-gray-200">
              {companyInfo.tagline}
            </span>
            . We provide efficient and effective expertise that help businesses achieve their objectives through innovation and excellence.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            variants={itemVariants}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16"
          >
            <Button
              size="lg"
              onClick={() => scrollToSection("about")}
              className="relative overflow-hidden bg-linear-to-r from-red-600 via-red-500 to-orange-500 hover:from-red-700 hover:via-red-600 hover:to-orange-600 text-white border-0 px-8 py-4 text-lg group shadow-lg hover:shadow-xl transition-all duration-300"
            >
              Discover Our Services
              <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
            </Button>
            
            <Button
              size="lg"
              onClick={() => scrollToSection("contact")}
              className="relative overflow-hidden bg-linear-to-r from-gray-800 via-gray-700 to-gray-900 hover:from-gray-900 hover:via-gray-800 hover:to-black text-white border-2 border-white/30 px-8 py-4 text-lg group shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <Play className="mr-2 h-5 w-5 transition-transform group-hover:scale-110" />
              Watch Our Story
            </Button>
          </motion.div>
        </div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 2.5, duration: 0.5 }}
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          className="cursor-pointer"
          onClick={() => scrollToSection("about")}
        >
          <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center">
            <motion.div
              className="w-1 h-3 bg-white rounded-full mt-2"
              animate={{ y: [0, 6, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            />
          </div>
        </motion.div>
      </motion.div>
    </section>
  )
}