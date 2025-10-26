"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Header } from "@/components/layout/header"
import { Footer } from "@/components/layout/footer"
import { 
  Target, 
  Lightbulb, 
  Users, 
  Leaf, 
  Award, 
  TrendingUp, 
  Globe,
  Shield,
  Heart,
  Zap,
  CheckCircle2
} from "lucide-react"

export default function AboutPage() {
  const values = [
    {
      icon: Shield,
      title: "Integrity",
      description: "We conduct business with the highest ethical standards and transparency in all our dealings."
    },
    {
      icon: Target,
      title: "Excellence",
      description: "We strive for excellence in every project, delivering quality that exceeds expectations."
    },
    {
      icon: Heart,
      title: "Customer Focus",
      description: "Our clients' success is our success. We put their needs at the center of everything we do."
    },
    {
      icon: Lightbulb,
      title: "Innovation",
      description: "We embrace innovation and continuously seek better ways to serve our clients and communities."
    },
    {
      icon: Users,
      title: "Collaboration",
      description: "We believe in the power of teamwork and building strong partnerships."
    },
    {
      icon: Leaf,
      title: "Sustainability",
      description: "We're committed to sustainable practices that benefit our environment and future generations."
    }
  ]

  const timeline = [
    {
      year: "2010",
      title: "Foundation",
      description: "SKATMA Holdings was established with a vision to create a diversified business empire."
    },
    {
      year: "2013",
      title: "First Expansion",
      description: "Launched our brick manufacturing division, MSTA Holdings, serving the construction industry."
    },
    {
      year: "2016",
      title: "Hospitality Entry",
      description: "Opened Cabal Villa, bringing premium dining and bar experiences to our community."
    },
    {
      year: "2019",
      title: "Service Diversification",
      description: "Introduced Lumveleni, our multi-service facility offering car wash and restaurant services."
    },
    {
      year: "2021",
      title: "Agricultural Innovation",
      description: "Established Agri-nema, focusing on sustainable farming practices."
    },
    {
      year: "2025",
      title: "Continued Growth",
      description: "Expanding our reach and impact across multiple industries with cutting-edge solutions."
    }
  ]

  const team = [
    {
      name: "Leadership Team",
      description: "Our experienced leadership team brings decades of combined expertise across various industries."
    },
    {
      name: "Operations",
      description: "Dedicated professionals ensuring smooth day-to-day operations across all our subsidiaries."
    },
    {
      name: "Innovation",
      description: "Forward-thinking experts driving innovation and technological advancement in our services."
    },
    {
      name: "Customer Success",
      description: "Passionate individuals committed to delivering exceptional customer experiences."
    }
  ]

  return (
    <main className="relative min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <section className="relative py-20 bg-linear-to-br from-red-900/10 via-background to-blue-900/10">
        <div className="container mx-auto px-4">
          <motion.div
            className="text-center max-w-4xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <Badge className="mb-4 bg-red-600 text-white">About SKATMA Holdings</Badge>
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Building Excellence Across <span className="text-red-600">Multiple Industries</span>
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              SKATMA Holdings is a diversified business conglomerate committed to delivering exceptional 
              value across farming, manufacturing, hospitality, and service industries.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <Card className="h-full bg-linear-to-br from-red-50 to-orange-50 dark:from-red-950/20 dark:to-orange-950/20 border-2 border-red-200 dark:border-red-900">
                <CardContent className="p-8">
                  <div className="w-16 h-16 bg-red-600 rounded-lg flex items-center justify-center mb-6">
                    <Target className="w-8 h-8 text-white" />
                  </div>
                  <h2 className="text-3xl font-bold mb-4">Our Mission</h2>
                  <p className="text-lg text-muted-foreground leading-relaxed">
                    To provide innovative, high-quality solutions that enhance the lives of our customers 
                    and communities while maintaining sustainable business practices. We strive to be the 
                    preferred partner in every industry we serve, delivering excellence through integrity, 
                    innovation, and unwavering commitment to customer satisfaction.
                  </p>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <Card className="h-full bg-linear-to-br from-blue-50 to-purple-50 dark:from-blue-950/20 dark:to-purple-950/20 border-2 border-blue-200 dark:border-blue-900">
                <CardContent className="p-8">
                  <div className="w-16 h-16 bg-blue-600 rounded-lg flex items-center justify-center mb-6">
                    <Globe className="w-8 h-8 text-white" />
                  </div>
                  <h2 className="text-3xl font-bold mb-4">Our Vision</h2>
                  <p className="text-lg text-muted-foreground leading-relaxed">
                    To be the leading diversified business conglomerate recognized for excellence, 
                    innovation, and positive impact. We envision a future where our brands are synonymous 
                    with quality, reliability, and sustainability across all sectors we operate in, creating 
                    lasting value for stakeholders and communities.
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Our Core <span className="text-red-600">Values</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              The principles that guide our decisions and shape our culture
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className="h-full hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                  <CardContent className="p-6">
                    <div className="w-14 h-14 bg-red-100 dark:bg-red-900/30 rounded-lg flex items-center justify-center mb-4">
                      <value.icon className="w-7 h-7 text-red-600" />
                    </div>
                    <h3 className="text-xl font-bold mb-3">{value.title}</h3>
                    <p className="text-muted-foreground leading-relaxed">
                      {value.description}
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Story / Timeline */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Our <span className="text-red-600">Journey</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              From humble beginnings to industry leadership
            </p>
          </motion.div>

          <div className="max-w-4xl mx-auto">
            {timeline.map((item, index) => (
              <motion.div
                key={item.year}
                className="relative pl-8 pb-12 border-l-2 border-red-200 dark:border-red-900 last:pb-0"
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <div className="absolute -left-3 top-0 w-6 h-6 bg-red-600 rounded-full border-4 border-background" />
                <div className="bg-card border rounded-lg p-6 hover:shadow-lg transition-shadow">
                  <Badge className="mb-2 bg-red-600 text-white">{item.year}</Badge>
                  <h3 className="text-2xl font-bold mb-2">{item.title}</h3>
                  <p className="text-muted-foreground">{item.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Image Section */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-8">
            <motion.div
              className="relative aspect-4/3 rounded-lg overflow-hidden shadow-xl"
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <Image
                src="/images/car-wash2.jpeg"
                alt="SKATMA Holdings Facilities"
                fill
                className="object-cover"
              />
            </motion.div>

            <motion.div
              className="relative aspect-4/3 rounded-lg overflow-hidden shadow-xl"
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <Image
                src="/images/stma-bricks.jpeg"
                alt="SKATMA Holdings Operations"
                fill
                className="object-cover"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Meet Our <span className="text-red-600">Team</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Passionate professionals dedicated to your success
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((department, index) => (
              <motion.div
                key={department.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className="h-full text-center hover:shadow-xl transition-all duration-300">
                  <CardContent className="p-6">
                    <div className="w-20 h-20 bg-red-100 dark:bg-red-900/30 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Users className="w-10 h-10 text-red-600" />
                    </div>
                    <h3 className="text-xl font-bold mb-3">{department.name}</h3>
                    <p className="text-sm text-muted-foreground">
                      {department.description}
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-linear-to-r from-blue-600 via-purple-600 to-red-600 text-white">
        <div className="container mx-auto px-4">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Why Choose SKATMA Holdings?
            </h2>
            <p className="text-xl text-white/90 max-w-3xl mx-auto">
              We bring unmatched expertise, dedication, and innovation to every project
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { icon: Award, title: "Proven Track Record", desc: "Years of excellence across industries" },
              { icon: TrendingUp, title: "Sustainable Growth", desc: "Consistent performance and expansion" },
              { icon: Zap, title: "Fast Delivery", desc: "Timely execution on all projects" },
              { icon: CheckCircle2, title: "Quality Assurance", desc: "Highest standards in every service" }
            ].map((item, index) => (
              <motion.div
                key={item.title}
                className="text-center"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-lg flex items-center justify-center mx-auto mb-4">
                  <item.icon className="w-8 h-8" />
                </div>
                <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                <p className="text-white/80">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
