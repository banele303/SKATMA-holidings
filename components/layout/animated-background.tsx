"use client"

import { motion } from "framer-motion"
import { useEffect, useState } from "react"

interface Particle {
  id: number
  x: number
  y: number
  size: number
  speedX: number
  speedY: number
  opacity: number
}

export function AnimatedBackground() {
  const [particles, setParticles] = useState<Particle[]>([])
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 })

  useEffect(() => {
    setDimensions({
      width: window.innerWidth,
      height: window.innerHeight
    })

    const initialParticles: Particle[] = Array.from({ length: 50 }, (_, i) => ({
      id: i,
      x: Math.random() * window.innerWidth,
      y: Math.random() * window.innerHeight,
      size: Math.random() * 4 + 1,
      speedX: (Math.random() - 0.5) * 0.5,
      speedY: (Math.random() - 0.5) * 0.5,
      opacity: Math.random() * 0.5 + 0.1
    }))

    setParticles(initialParticles)

    const handleResize = () => {
      setDimensions({
        width: window.innerWidth,
        height: window.innerHeight
      })
    }

    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  useEffect(() => {
    if (particles.length === 0) return

    const interval = setInterval(() => {
      setParticles(prev => prev.map(particle => {
        const newX = particle.x + particle.speedX
        const newY = particle.y + particle.speedY
        
        return {
          ...particle,
          x: newX > dimensions.width ? 0 : newX < 0 ? dimensions.width : newX,
          y: newY > dimensions.height ? 0 : newY < 0 ? dimensions.height : newY
        }
      }))
    }, 50)

    return () => clearInterval(interval)
  }, [particles.length, dimensions])

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden">
      {/* Dotted grid background */}
      <div
        className="absolute inset-0 opacity-50 dark:opacity-30"
        style={{
          backgroundImage: `radial-gradient(var(--dot-color) 1px, transparent 1px)`,
          backgroundSize: "18px 18px",
          backgroundPosition: "0 0",
        }}
      />
      {/* Geometric shapes */}
      <motion.div
        className="absolute top-10 left-10 w-20 h-20 border border-[#1f2244]/20 rotate-45"
        animate={{ rotate: [45, 405] }}
        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
      />
      <motion.div
        className="absolute top-1/4 right-20 w-16 h-16 bg-[#3e3a70]/15 rounded-full"
        animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.6, 0.3] }}
        transition={{ duration: 4, repeat: Infinity }}
      />
      <motion.div
        className="absolute bottom-20 left-1/4 w-12 h-12 border-2 border-[#8a8c91]/30"
        animate={{ rotate: [0, 360] }}
        transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
      />
      
      {/* Floating particles */}
      {particles.map((particle) => (
        <motion.div
          key={particle.id}
          className="absolute w-1 h-1 bg-[#1f2244] rounded-full"
          style={{
            left: particle.x,
            top: particle.y,
            width: particle.size,
            height: particle.size,
            opacity: particle.opacity
          }}
          animate={{
            scale: [1, 1.5, 1],
            opacity: [particle.opacity, particle.opacity * 1.5, particle.opacity]
          }}
          transition={{
            duration: Math.random() * 3 + 2,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
      ))}

      {/* Connecting lines */}
      <svg className="absolute inset-0 w-full h-full">
        {particles.slice(0, 20).map((particle, index) => {
          const nextParticle = particles[(index + 1) % 20]
          if (!nextParticle) return null
          
          const distance = Math.sqrt(
            Math.pow(particle.x - nextParticle.x, 2) + 
            Math.pow(particle.y - nextParticle.y, 2)
          )
          
          if (distance < 150) {
            return (
              <motion.line
                key={`line-${particle.id}-${nextParticle.id}`}
                x1={particle.x}
                y1={particle.y}
                x2={nextParticle.x}
                y2={nextParticle.y}
                stroke="rgba(31, 34, 68, 0.2)"
                strokeWidth="1"
                initial={{ opacity: 0 }}
                animate={{ opacity: [0, 0.3, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
              />
            )
          }
          return null
        })}
      </svg>

      {/* Gradient overlay - reduced opacity so dots remain visible */}
      <div className="absolute inset-0 bg-linear-to-br from-background/80 via-background/40 to-background/80" />
    </div>
  )
}