"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Menu, X, Phone, Mail, Clock, Facebook, Instagram } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Button } from "@/components/ui/button"
import { ThemeToggle } from "./theme-toggle"
import { companyInfo, navigationLinks } from "@/lib/data/company-data"

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const handleNavigation = (href: string) => {
    // If it's a hash link and we're on the home page, scroll to section
    if (href.startsWith('#') && pathname === '/') {
      const sectionId = href.replace("#", "")
      const element = document.getElementById(sectionId)
      if (element) {
        element.scrollIntoView({ behavior: "smooth" })
      }
      setIsMenuOpen(false)
    }
    // Otherwise, let the Link component handle it
  }

  const scrollToSection = (href: string) => {
    const sectionId = href.replace("#", "")
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
    setIsMenuOpen(false)
  }

  return (
    <>
      {/* Main navigation */}
      <motion.header
        className={`fixed top-0 left-0 right-0 z-50 w-full border-b transition-all duration-300 ${
          isScrolled
            ? "bg-white/95 dark:bg-background/90 backdrop-blur-md supports-backdrop-filter:bg-white/80 dark:supports-backdrop-filter:bg-background/70 shadow-lg"
            : "bg-white/80 dark:bg-background/60 backdrop-blur"
        }`}
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
  <div className="container mx-auto px-4 h-16 md:h-20 lg:h-24 flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="shrink-0">
            <div className="flex items-center space-x-2">
              <Image
                src="/images/sktm-logo.jpeg"
                alt="SKATMA Holdings Logo"
                width={160}
                height={64}
                className="h-10 sm:h-12 md:h-16 lg:h-20 w-auto object-contain rounded-lg"
                priority
              />
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-6">
            {navigationLinks.map((link, index) => (
              link.href.startsWith('#') ? (
                  <motion.button
                  key={link.name}
                  onClick={() => handleNavigation(link.href)}
                  className="text-sm font-medium text-[#1f2244] dark:text-white hover:text-[#3e3a70] dark:hover:text-[#d6d7dc] transition-colors relative group cursor-pointer font-display"
                  whileHover={{ scale: 1.05 }}
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                >
                  {link.name}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-linear-to-r from-[#1f2244] to-[#3e3a70] transition-all group-hover:w-full" />
                </motion.button>
              ) : (
                <Link key={link.name} href={link.href}>
                  <motion.div
                    className="text-sm font-medium text-[#1f2244] dark:text-white hover:text-[#3e3a70] dark:hover:text-[#d6d7dc] transition-colors relative group cursor-pointer font-display"
                    whileHover={{ scale: 1.05 }}
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3, delay: index * 0.1 }}
                  >
                    {link.name}
                    <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-linear-to-r from-[#1f2244] to-[#3e3a70] transition-all group-hover:w-full" />
                  </motion.div>
                </Link>
              )
            ))}
          </nav>

          {/* Right side actions */}
          <div className="flex items-center space-x-2">
            {/* Social Media Icons */}
              <div className="hidden md:flex items-center space-x-1 mr-2 text-[#1f2244] dark:text-muted-foreground">
              <a
                href="https://facebook.com/skatmaholdings"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 hover:bg-[#d6d7dc]/60 rounded-full transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="h-5 w-5 text-muted-foreground hover:text-[#3e3a70] transition-colors" />
              </a>
              <a
                href="https://twitter.com/skatmaholdings"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 hover:bg-[#d6d7dc]/60 rounded-full transition-colors"
                aria-label="X (Twitter)"
              >
                <svg
                  className="h-5 w-5 text-muted-foreground hover:text-[#3e3a70] transition-colors"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                </svg>
              </a>
              <a
                href="https://instagram.com/skatmaholdings"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 hover:bg-[#d6d7dc]/60 rounded-full transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="h-5 w-5 text-muted-foreground hover:text-[#3e3a70] transition-colors" />
              </a>
            </div>
            
            <ThemeToggle />
            <a
              href={`tel:${companyInfo.phone}`}
              className="hidden sm:flex items-center gap-2 px-4 py-2 rounded-lg border border-[#1f2244]/30 bg-white/80 text-[#1f2244] font-semibold shadow-sm hover:shadow transition-all"
            >
              <Phone className="h-4 w-4" />
              {companyInfo.phone}
            </a>
            
            {/* Mobile menu button */}
            <Button
              variant="ghost"
              size="icon"
              className="md:hidden cursor-pointer"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              className="md:hidden border-t bg-white/95 dark:bg-background/95 backdrop-blur"
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.3 }}
            >
              <div className="container mx-auto px-4 py-4 space-y-4">
                {navigationLinks.map((link, index) => (
                  link.href.startsWith('#') ? (
                    <motion.button
                      key={link.name}
                      onClick={() => handleNavigation(link.href)}
                      className="block w-full text-left text-sm font-medium hover:text-[#3e3a70] transition-colors py-2 cursor-pointer"
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.3, delay: index * 0.1 }}
                    >
                      {link.name}
                    </motion.button>
                  ) : (
                    <Link key={link.name} href={link.href} onClick={() => setIsMenuOpen(false)}>
                      <motion.div
                        className="block w-full text-left text-sm font-medium hover:text-[#3e3a70] transition-colors py-2 cursor-pointer"
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.3, delay: index * 0.1 }}
                      >
                        {link.name}
                      </motion.div>
                    </Link>
                  )
                ))}
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.3, delay: navigationLinks.length * 0.1 }}
                  className="pt-2"
                >
                  <a
                    href={`tel:${companyInfo.phone}`}
                    onClick={() => setIsMenuOpen(false)}
                    className="flex items-center justify-center gap-2 w-full rounded-lg border border-[#1f2244]/40 bg-white text-[#1f2244] font-semibold py-3 shadow-sm hover:shadow transition-all"
                  >
                    <Phone className="h-4 w-4" />
                    {companyInfo.phone}
                  </a>
                </motion.div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.header>
    </>
  )
}