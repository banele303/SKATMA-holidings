"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { companyInfo } from "@/lib/data/company-data"
import { Mail, Phone, MapPin, Facebook, Twitter, Linkedin, Instagram } from "lucide-react"

export function Footer() {
  const currentYear = new Date().getFullYear()

  const footerLinks = {
    company: [
      { name: "About Us", href: "#about" },
      { name: "Our Services", href: "#services" },
      { name: "Subsidiaries", href: "#subsidiaries" },
      { name: "Careers", href: "#careers" }
    ],
    services: [
      { name: "Farming", href: "#services" },
      { name: "Car Wash", href: "#services" },
      { name: "Restaurant & Bar", href: "#services" },
      { name: "Brick Yards", href: "#services" }
    ],
    legal: [
      { name: "Privacy Policy", href: "#" },
      { name: "Terms of Service", href: "#" },
      { name: "Cookie Policy", href: "#" },
      { name: "Compliance", href: "#" }
    ]
  }

  const socialLinks = [
    { icon: Facebook, href: "#", label: "Facebook" },
    { icon: Twitter, href: "#", label: "Twitter" },
    { icon: Linkedin, href: "#", label: "LinkedIn" },
    { icon: Instagram, href: "#", label: "Instagram" }
  ]

  return (
    <footer id="contact" className="bg-background border-t">
      {/* Main Footer */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Company Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="space-y-4"
          >
            <Image
              src="/images/sktm-logo.jpeg"
              alt="SKATMA Holdings Logo"
              width={150}
              height={60}
              className="h-16 w-auto object-contain"
            />
            <p className="text-sm text-gray-700 dark:text-gray-300">
              {companyInfo.description}
            </p>
            <div className="flex space-x-2">
              {socialLinks.map((social) => (
                <Button
                  key={social.label}
                  variant="outline"
                  size="icon"
                  className="h-8 w-8 hover:bg-red-600 hover:text-white hover:border-red-600"
                  aria-label={social.label}
                >
                  <social.icon className="h-4 w-4" />
                </Button>
              ))}
            </div>
          </motion.div>

          {/* Company Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <h3 className="font-bold text-lg mb-4 text-gray-900 dark:text-gray-100">Company</h3>
            <ul className="space-y-2">
              {footerLinks.company.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-sm text-gray-700 dark:text-gray-300 hover:text-red-600 transition-colors"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Services Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h3 className="font-bold text-lg mb-4 text-gray-900 dark:text-gray-100">Our Services</h3>
            <ul className="space-y-2">
              {footerLinks.services.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-sm text-gray-700 dark:text-gray-300 hover:text-red-600 transition-colors"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <h3 className="font-bold text-lg mb-4 text-gray-900 dark:text-gray-100">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-2">
                <MapPin className="h-4 w-4 text-red-600 mt-0.5 shrink-0" />
                <span className="text-sm text-gray-700 dark:text-gray-300">
                  {companyInfo.address}
                </span>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="h-4 w-4 text-red-600 shrink-0" />
                <a
                  href={`tel:${companyInfo.phone}`}
                  className="text-sm text-gray-700 dark:text-gray-300 hover:text-red-600 transition-colors"
                >
                  {companyInfo.phone}
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="h-4 w-4 text-red-600 shrink-0" />
                <a
                  href={`mailto:${companyInfo.email}`}
                  className="text-sm text-gray-700 dark:text-gray-300 hover:text-red-600 transition-colors"
                >
                  {companyInfo.email}
                </a>
              </li>
            </ul>
            <div className="mt-4">
              <Button className="w-full bg-red-600 hover:bg-red-700">
                Get in Touch
              </Button>
            </div>
          </motion.div>
        </div>

        {/* Newsletter Section */}
        <motion.div
          className="border-t pt-8 mb-8"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <div className="max-w-2xl mx-auto text-center">
            <h3 className="font-bold text-xl mb-2 text-gray-900 dark:text-gray-100">Stay Updated</h3>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              Subscribe to our newsletter for the latest news and updates
            </p>
            <div className="flex gap-2 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-2 rounded-md border bg-background text-foreground"
              />
              <Button className="bg-red-600 hover:bg-red-700">Subscribe</Button>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t bg-muted/30">
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-700 dark:text-gray-300">
            <p>
              Copyright © {currentYear} skatmaholdings | {companyInfo.regNumber}
            </p>
            <div className="flex gap-4">
              {footerLinks.legal.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="hover:text-red-600 transition-colors text-gray-700 dark:text-gray-300"
                >
                  {link.name}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}