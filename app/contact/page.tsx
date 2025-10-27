"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Header } from "@/components/layout/header"
import { Footer } from "@/components/layout/footer"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { companyInfo } from "@/lib/data/company-data"
import { 
  Mail, 
  Phone, 
  MapPin, 
  Clock,
  Send,
  CheckCircle2,
  MessageSquare,
  Building2
} from "lucide-react"

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    subject: "",
    message: "",
    service: "general"
  })

  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitSuccess, setSubmitSuccess] = useState(false)

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false)
      setSubmitSuccess(true)
      setFormData({
        name: "",
        email: "",
        phone: "",
        company: "",
        subject: "",
        message: "",
        service: "general"
      })
      
      // Reset success message after 5 seconds
      setTimeout(() => setSubmitSuccess(false), 5000)
    }, 2000)
  }

  const contactMethods = [
    {
      icon: Phone,
      title: "Call Us",
      details: companyInfo.phone,
      link: `tel:${companyInfo.phone}`,
      description: "Mon-Fri from 8am to 5pm"
    },
    {
      icon: Mail,
      title: "Email Us",
      details: companyInfo.email,
      link: `mailto:${companyInfo.email}`,
      description: "We'll respond within 24 hours"
    },
    {
      icon: MapPin,
      title: "Visit Us",
      details: companyInfo.address,
      link: "#",
      description: "Our main office location"
    },
    {
      icon: Clock,
      title: "Working Hours",
      details: companyInfo.workingHours,
      link: "#",
      description: "Monday to Friday"
    }
  ]

  const services = [
    { value: "general", label: "General Inquiry" },
    { value: "farming", label: "Farming Services" },
    { value: "bricks", label: "Brick Manufacturing" },
    { value: "restaurant", label: "Restaurant & Bar" },
    { value: "carwash", label: "Car Wash Services" },
    { value: "partnership", label: "Partnership Opportunity" },
    { value: "other", label: "Other" }
  ]

  return (
    <main className="relative min-h-screen">
      <Header />
      
      {/* Hero Section */}
  <section className="relative py-20 bg-linear-to-br from-[#1f2244]/12 via-background to-[#3e3a70]/12">
        <div className="container mx-auto px-4">
          <motion.div
            className="text-center max-w-4xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <Badge className="mb-4 bg-[#1f2244] text-white">Get in Touch</Badge>
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Let's Start a <span className="text-[#3e3a70]">Conversation</span>
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              Have a question or want to work together? We'd love to hear from you. 
              Fill out the form below or use one of our contact methods.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Methods */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
            {contactMethods.map((method, index) => (
              <motion.a
                key={method.title}
                href={method.link}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="block"
              >
                <Card className="h-full hover:shadow-xl transition-all duration-300 hover:-translate-y-1 cursor-pointer border-2 hover:border-[#3e3a70]/50">
                  <CardContent className="p-6 text-center">
                    <div className="w-14 h-14 bg-[#1f2244]/15 dark:bg-[#3e3a70]/30 rounded-lg flex items-center justify-center mx-auto mb-4">
                      <method.icon className="w-7 h-7 text-[#1f2244] dark:text-[#d6d7dc]" />
                    </div>
                    <h3 className="font-bold text-lg mb-2">{method.title}</h3>
                    <p className="text-sm font-semibold text-[#3e3a70] mb-1">{method.details}</p>
                    <p className="text-xs text-muted-foreground">{method.description}</p>
                  </CardContent>
                </Card>
              </motion.a>
            ))}
          </div>

          {/* Main Contact Section */}
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <Card className="shadow-xl">
                <CardContent className="p-8">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-12 h-12 bg-[#1f2244]/15 dark:bg-[#3e3a70]/30 rounded-lg flex items-center justify-center">
                      <MessageSquare className="w-6 h-6 text-[#1f2244] dark:text-[#d6d7dc]" />
                    </div>
                    <div>
                      <h2 className="text-2xl font-bold">Send us a Message</h2>
                      <p className="text-sm text-muted-foreground">We'll get back to you shortly</p>
                    </div>
                  </div>

                  {submitSuccess && (
                    <motion.div
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="mb-6 p-4 bg-green-100 dark:bg-green-900/30 border border-green-500 rounded-lg flex items-center gap-3"
                    >
                      <CheckCircle2 className="w-5 h-5 text-green-600" />
                      <p className="text-sm font-medium text-green-800 dark:text-green-200">
                        Message sent successfully! We'll contact you soon.
                      </p>
                    </motion.div>
                  )}

                  <form onSubmit={handleSubmit} className="space-y-6">
                    {/* Name */}
                    <div>
                      <label className="block text-sm font-medium mb-2">
                        Full Name <span className="text-[#3e3a70]">*</span>
                      </label>
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 rounded-lg border bg-background focus:ring-2 focus:ring-[#3e3a70] focus:border-[#3e3a70]/60 transition-all"
                        placeholder="John Doe"
                      />
                    </div>

                    {/* Email & Phone */}
                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium mb-2">
                          Email Address <span className="text-[#3e3a70]">*</span>
                        </label>
                        <input
                          type="email"
                          name="email"
                          value={formData.email}
                          onChange={handleInputChange}
                          required
                          className="w-full px-4 py-3 rounded-lg border bg-background focus:ring-2 focus:ring-[#3e3a70] focus:border-[#3e3a70]/60 transition-all"
                          placeholder="john@example.com"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium mb-2">
                          Phone Number
                        </label>
                        <input
                          type="tel"
                          name="phone"
                          value={formData.phone}
                          onChange={handleInputChange}
                          className="w-full px-4 py-3 rounded-lg border bg-background focus:ring-2 focus:ring-[#3e3a70] focus:border-[#3e3a70]/60 transition-all"
                          placeholder="+27 123 456 7890"
                        />
                      </div>
                    </div>

                    {/* Company */}
                    <div>
                      <label className="block text-sm font-medium mb-2">
                        Company Name
                      </label>
                      <input
                        type="text"
                        name="company"
                        value={formData.company}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 rounded-lg border bg-background focus:ring-2 focus:ring-[#3e3a70] focus:border-[#3e3a70]/60 transition-all"
                        placeholder="Your Company"
                      />
                    </div>

                    {/* Service Selection */}
                    <div>
                      <label className="block text-sm font-medium mb-2">
                        Service Interested In <span className="text-[#3e3a70]">*</span>
                      </label>
                      <select
                        name="service"
                        value={formData.service}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 rounded-lg border bg-background focus:ring-2 focus:ring-[#3e3a70] focus:border-[#3e3a70]/60 transition-all"
                      >
                        {services.map(service => (
                          <option key={service.value} value={service.value}>
                            {service.label}
                          </option>
                        ))}
                      </select>
                    </div>

                    {/* Subject */}
                    <div>
                      <label className="block text-sm font-medium mb-2">
                        Subject <span className="text-[#3e3a70]">*</span>
                      </label>
                      <input
                        type="text"
                        name="subject"
                        value={formData.subject}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 rounded-lg border bg-background focus:ring-2 focus:ring-[#3e3a70] focus:border-[#3e3a70]/60 transition-all"
                        placeholder="How can we help you?"
                      />
                    </div>

                    {/* Message */}
                    <div>
                      <label className="block text-sm font-medium mb-2">
                        Message <span className="text-[#3e3a70]">*</span>
                      </label>
                      <textarea
                        name="message"
                        value={formData.message}
                        onChange={handleInputChange}
                        required
                        rows={6}
                        className="w-full px-4 py-3 rounded-lg border bg-background focus:ring-2 focus:ring-[#3e3a70] focus:border-[#3e3a70]/60 transition-all resize-none"
                        placeholder="Tell us more about your inquiry..."
                      />
                    </div>

                    {/* Submit Button */}
                    <Button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full bg-[#1f2244] hover:bg-[#3e3a70] text-white py-6 text-lg font-semibold shadow-lg hover:shadow-xl transition-all"
                    >
                      {isSubmitting ? (
                        <span className="flex items-center gap-2">
                          <motion.div
                            className="w-5 h-5 border-2 border-white border-t-transparent rounded-full"
                            animate={{ rotate: 360 }}
                            transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                          />
                          Sending...
                        </span>
                      ) : (
                        <span className="flex items-center gap-2">
                          <Send className="w-5 h-5" />
                          Send Message
                        </span>
                      )}
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </motion.div>

            {/* Right Column - Additional Info */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="space-y-6"
            >
              {/* Request for Quote */}
              <Card className="bg-linear-to-br from-[#d6d7dc]/40 to-white dark:from-[#1f2244]/30 dark:to-[#3e3a70]/30 border-2 border-[#d6d7dc] dark:border-[#3e3a70]">
                <CardContent className="p-8">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-12 h-12 bg-[#1f2244] rounded-lg flex items-center justify-center">
                      <Building2 className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="text-2xl font-bold">Request for Quote (RFQ)</h3>
                  </div>
                  <p className="text-muted-foreground mb-4">
                    Looking for a detailed quote for our services? We provide comprehensive, 
                    transparent pricing for all our offerings.
                  </p>
                  <ul className="space-y-3 mb-6">
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-5 h-5 text-[#3e3a70] mt-0.5 shrink-0" />
                      <span className="text-sm">Detailed cost breakdown</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-5 h-5 text-[#3e3a70] mt-0.5 shrink-0" />
                      <span className="text-sm">Project timeline estimates</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-5 h-5 text-[#3e3a70] mt-0.5 shrink-0" />
                      <span className="text-sm">Custom solutions for your needs</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-5 h-5 text-[#3e3a70] mt-0.5 shrink-0" />
                      <span className="text-sm">Response within 24-48 hours</span>
                    </li>
                  </ul>
                  <p className="text-sm text-muted-foreground">
                    Simply fill out the contact form with your requirements, select the service 
                    you're interested in, and we'll prepare a detailed quote tailored to your needs.
                  </p>
                </CardContent>
              </Card>

              {/* Office Locations */}
              <Card>
                <CardContent className="p-8">
                  <h3 className="text-2xl font-bold mb-4">Visit Our Offices</h3>
                  <div className="space-y-4">
                    <div>
                      <h4 className="font-semibold mb-2 flex items-center gap-2">
                        <MapPin className="w-4 h-4 text-[#3e3a70]" />
                        Head Office
                      </h4>
                      <p className="text-sm text-muted-foreground ml-6">
                        {companyInfo.address}
                      </p>
                    </div>
                    <div>
                      <h4 className="font-semibold mb-2 flex items-center gap-2">
                        <Clock className="w-4 h-4 text-[#3e3a70]" />
                        Business Hours
                      </h4>
                      <p className="text-sm text-muted-foreground ml-6">
                        {companyInfo.workingHours}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* FAQ */}
              <Card className="bg-linear-to-br from-[#f1f1f5] to-[#d6d7dc]/60 dark:from-[#1f2244]/30 dark:to-[#3e3a70]/30">
                <CardContent className="p-8">
                  <h3 className="text-2xl font-bold mb-4">Frequently Asked Questions</h3>
                  <div className="space-y-4">
                    <div>
                      <h4 className="font-semibold mb-1 text-sm">How quickly will you respond?</h4>
                      <p className="text-sm text-muted-foreground">
                        We typically respond to all inquiries within 24 hours during business days.
                      </p>
                    </div>
                    <div>
                      <h4 className="font-semibold mb-1 text-sm">Do you offer on-site consultations?</h4>
                      <p className="text-sm text-muted-foreground">
                        Yes! We offer free consultations for most services. Contact us to schedule.
                      </p>
                    </div>
                    <div>
                      <h4 className="font-semibold mb-1 text-sm">What payment methods do you accept?</h4>
                      <p className="text-sm text-muted-foreground">
                        We accept various payment methods including bank transfers, cash, and credit cards.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
  <section className="py-20 bg-linear-to-r from-[#1f2244] via-[#3e3a70] to-[#8a8c91] text-white">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Ready to Get Started?
            </h2>
            <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
              Join hundreds of satisfied clients who trust SKATMA Holdings for their business needs
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Button
                size="lg"
                className="bg-white text-[#1f2244] hover:bg-white/90 font-semibold px-8"
              >
                <Phone className="w-5 h-5 mr-2" />
                Call Us Now
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-2 border-white text-white hover:bg-white/10 font-semibold px-8"
              >
                <Mail className="w-5 h-5 mr-2" />
                Email Us
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
