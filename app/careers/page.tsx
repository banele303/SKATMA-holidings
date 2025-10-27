"use client"

import { Header } from "@/components/layout/header"
import { Footer } from "@/components/layout/footer"
import { SectionHeader } from "@/components/ui/section-header"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

const jobs = [
  { id: 1, title: "Operations Coordinator", location: "Thohoyandou", type: "Full-time", dept: "Operations" },
  { id: 2, title: "Restaurant Manager", location: "Thohoyandou", type: "Full-time", dept: "Hospitality" },
  { id: 3, title: "Logistics Supervisor", location: "Thohoyandou", type: "Full-time", dept: "Manufacturing" },
]

export default function CareersPage() {
  return (
    <main className="relative min-h-screen">
      <Header />

      <section className="py-20">
        <div className="container mx-auto px-4">
          <SectionHeader
            eyebrow="Careers"
            title="Build your career with SKATMA HOLDINGS"
            subtitle="Join a fast-growing, multi-industry group with real impact and room to grow."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {jobs.map((job) => (
              <Card key={job.id} className="hover:shadow-xl transition-shadow">
                <CardContent className="p-6 space-y-2">
                  <h3 className="text-lg font-bold">{job.title}</h3>
                  <div className="text-sm text-muted-foreground">{job.dept} • {job.location} • {job.type}</div>
                  <p className="text-sm text-muted-foreground">We’re looking for motivated people who bring energy, ownership, and a passion for service.</p>
                  <div className="pt-3">
                    <Button className="bg-[#1f2244] hover:bg-[#3e3a70]">Apply Now</Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
