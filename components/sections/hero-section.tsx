"use client"

import { motion, AnimatePresence } from "framer-motion"
import { ArrowRight, Play, Award, ShieldCheck, Sparkles, CheckCircle2 } from "lucide-react"
import { Button } from "@/components/ui/button"
import { companyInfo } from "@/lib/data/company-data"
import { useEffect, useState } from "react"

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

  // Rotating words animation for a modern headline accent
  const words = ["Farming", "Hospitality", "Construction", "Automotive Care"]
  const [wordIndex, setWordIndex] = useState(0)

  useEffect(() => {
    const id = setInterval(() => setWordIndex(i => (i + 1) % words.length), 2200)
    return () => clearInterval(id)
  }, [])

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <section id="home" className="relative flex items-center overflow-hidden py-20 md:py-24 lg:py-28">
      {/* Background image with overlay */}
      <div className="absolute inset-0 z-0">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: "url('/images/hero-image.jpg')",
            filter: "brightness(0.55)"
          }}
        />
        <div className="absolute inset-0 bg-black/45" />
        <div className="absolute inset-0 bg-linear-to-br from-[#0b0d1d]/75 via-[#141735]/55 to-[#2a2f5e]/60" />
        {/* Subtle dotted overlay */}
        <div
          className="absolute inset-0 opacity-50"
          style={{
            backgroundImage: `radial-gradient(var(--dot-color) 1px, transparent 1px)`,
            backgroundSize: "18px 18px",
            backgroundPosition: "0 0",
          }}
        />
        
        {/* Concentric Circles/Ripples Pattern - Wave Effect */}
        <div 
          className="absolute inset-0"
          style={{
            backgroundImage: `
              repeating-radial-gradient(circle at 80% 50%, 
                transparent 0px, 
                transparent 28px, 
                rgba(62, 58, 112, 0.22) 28px, 
                rgba(62, 58, 112, 0.22) 30px,
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
        className="container mx-auto px-4 relative z-10"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <div className="grid lg:grid-cols-[minmax(0,1.05fr)_minmax(0,0.9fr)] gap-12 lg:gap-16 items-center">
          {/* Copy column */}
          <div className="text-center lg:text-left mx-auto lg:mx-0 max-w-xl space-y-7">
            <motion.div
              variants={itemVariants}
              className="inline-flex items-center gap-3 rounded-full px-4 py-2 border border-[#f4b860]/50 bg-[#f4b860]/25 text-[#f4b860] shadow-sm backdrop-blur-sm"
            >
              <div
                className="flex h-8 w-8 items-center justify-center rounded-full bg-[#f4b860] text-[#1f2244]"
              >
                <Award className="h-3.5 w-3.5" />
              </div>
              <span className="text-xs font-semibold tracking-wide uppercase text-[#f4b860]/90">Strategic holding partner</span>
            </motion.div>

            <motion.h1
              variants={itemVariants}
              className="text-4xl md:text-[3.25rem] font-display font-bold tracking-tight text-white drop-shadow-[0_12px_36px_rgba(8,9,23,0.55)]"
            >
              Growth partners for Africa’s leading sectors
            </motion.h1>

            <motion.p
              variants={itemVariants}
              className="text-sm font-semibold uppercase tracking-[0.35em] text-[#f4b860]/70"
            >
              {companyInfo.name}
            </motion.p>

            <motion.div
              variants={itemVariants}
              className="flex flex-col items-center justify-center gap-2 text-base md:text-lg font-medium text-[#d6d7dc] lg:flex-row lg:justify-start"
            >
              <span>Operational excellence across</span>
              <span className="relative inline-flex items-center font-semibold">
                <AnimatePresence mode="popLayout" initial={false}>
                  <motion.span
                    key={words[wordIndex]}
                    className="bg-clip-text text-transparent bg-linear-to-r from-[#f4b860] via-[#ffe7c2] to-[#d6d7dc]"
                    initial={{ y: 18, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    exit={{ y: -18, opacity: 0 }}
                    transition={{ duration: 0.4 }}
                  >
                    &nbsp;{words[wordIndex]}
                  </motion.span>
                </AnimatePresence>
              </span>
            </motion.div>

            <motion.p
              variants={itemVariants}
              className="text-sm md:text-base leading-relaxed text-[#e6e7ec]/80"
            >
              We build resilient subsidiaries by pairing data-led strategy with on-the-ground execution, so every venture scales with clarity and delivers on investor expectations.
            </motion.p>

            <motion.div
              variants={itemVariants}
              className="flex flex-col items-center justify-center gap-3 sm:flex-row sm:gap-4 lg:justify-start"
            >
              <Button
                size="lg"
                onClick={() => scrollToSection("services")}
                className="group flex w-full sm:w-auto items-center justify-center gap-2 bg-[#2a2f5e] px-6 py-3 text-sm md:text-base font-semibold text-white shadow-xl transition-all duration-300 hover:bg-[#434880]"
              >
                Explore capabilities
                <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
              </Button>
              <Button
                size="lg"
                onClick={() => scrollToSection("contact")}
                className="flex w-full sm:w-auto items-center justify-center gap-2 px-6 py-3 text-sm md:text-base font-semibold shadow-lg transition-all duration-300"
                style={{ backgroundColor: "rgba(244, 184, 96, 0.92)", color: "#1a1d39" }}
              >
                <Play className="h-5 w-5" />
                Speak with us
              </Button>
            </motion.div>

            <motion.div
              variants={itemVariants}
              className="grid grid-cols-3 gap-3 rounded-2xl border border-[#f4b860]/25 bg-[#0f1125]/60 px-5 py-4 text-[#f4f5f8]/85 backdrop-blur-sm"
            >
              <div>
                <div className="text-[1.75rem] font-bold text-[#f4b860]">6+</div>
                <p className="mt-1 text-[0.65rem] uppercase tracking-wide text-[#d6d7dc]/75">Years guiding subsidiaries</p>
              </div>
              <div>
                <div className="text-[1.75rem] font-bold text-[#f4b860]">100+</div>
                <p className="mt-1 text-[0.65rem] uppercase tracking-wide text-[#d6d7dc]/75">Programs delivered</p>
              </div>
              <div>
                <div className="text-[1.75rem] font-bold text-[#f4b860]">4</div>
                <p className="mt-1 text-[0.65rem] uppercase tracking-wide text-[#d6d7dc]/75">Core industries</p>
              </div>
            </motion.div>

            <motion.div
              variants={itemVariants}
              className="hidden md:flex items-center gap-5 text-xs uppercase tracking-[0.25em] text-white/70"
            >
              <div className="flex items-center gap-2 text-white">
                <ShieldCheck className="h-4 w-4 text-white/75" />
                Since 2019
              </div>
              <div className="flex gap-3">
                <span>Agri-nema</span>
                <span>Cabal Villa</span>
                <span>Lumveleni</span>
                <span>MSTA</span>
              </div>
            </motion.div>
          </div>

          {/* Visual column */}
          <motion.div
            variants={itemVariants}
            className="relative hidden lg:flex justify-end"
          >
            <div className="absolute -top-20 -left-10 h-44 w-44 rounded-full bg-[rgba(244,184,96,0.18)] blur-3xl" />
            <div className="absolute -bottom-20 -right-8 h-56 w-56 rounded-full bg-[rgba(42,47,94,0.35)] blur-3xl" />

            <div className="relative grid w-[380px] gap-5">
              <motion.div
                className="rounded-3xl border border-white/15 bg-white/12 p-5 text-white shadow-[0_24px_60px_-30px_rgba(15,17,37,0.65)] backdrop-blur"
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, duration: 0.5 }}
              >
                <div className="flex items-center gap-2 text-white/85 text-xs uppercase tracking-[0.3em]">
                  <Sparkles className="h-4 w-4" />
                  Hands-on execution
                </div>
                <p className="mt-3 text-sm font-semibold text-white">
                  Playbooks tailored to each subsidiary keep teams aligned and accountable from week one.
                </p>
              </motion.div>

              <motion.div
                className="relative overflow-hidden rounded-3xl p-5 text-[#1f2244] shadow-[0_28px_70px_-40px_rgba(244,184,96,0.75)]"
                style={{ background: "linear-gradient(135deg, rgba(244,184,96,0.95), rgba(214,215,220,0.9))" }}
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 6.5, repeat: Infinity, ease: "easeInOut" }}
              >
                <div className="text-4xl font-bold">92%</div>
                <p className="mt-2 text-[0.7rem] uppercase tracking-wide text-[#1f2244]/80">Client retention YoY</p>
                <p className="mt-3 text-sm text-[#1f2244]/85">
                  Investors stay because reporting is transparent and milestones are delivered.
                </p>
              </motion.div>

              <motion.div
                className="rounded-3xl border border-white/15 bg-white/10 p-5 text-white/85 backdrop-blur"
                animate={{ y: [-6, 6, -6] }}
                transition={{ duration: 7.5, repeat: Infinity, ease: "easeInOut" }}
              >
                <div className="flex items-center gap-2 text-xs uppercase tracking-[0.24em]">
                  <CheckCircle2 className="h-4 w-4 text-white" />
                  Outcomes we prioritise
                </div>
                <ul className="mt-3 space-y-2 text-xs">
                  <li className="flex items-start gap-2">
                    <span className="mt-1 h-1.5 w-1.5 rounded-full bg-white/70" />
                    Board dashboards that surface risk and progress in real time
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="mt-1 h-1.5 w-1.5 rounded-full bg-white/70" />
                    Mobilisation squads ready to launch new ventures
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="mt-1 h-1.5 w-1.5 rounded-full bg-white/70" />
                    People-first leadership cultivating resilient teams
                  </li>
                </ul>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </motion.div>

      {/* Decorative blobs */}
      <div className="pointer-events-none absolute -top-10 -right-10 w-72 h-72 rounded-full bg-[#1F2244]/30 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-10 -left-10 w-64 h-64 rounded-full bg-[#3E3A70]/35 blur-3xl" />

    </section>
  )
}