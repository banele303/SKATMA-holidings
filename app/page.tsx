import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { AnimatedBackground } from "@/components/layout/animated-background";
import { HeroSection } from "@/components/sections/hero-section";
import { ServicesSection } from "@/components/sections/services-section";
import { SubsidiariesSection } from "@/components/sections/subsidiaries-section";
import { AboutSection } from "@/components/sections/about-section";
import { NewsSection } from "@/components/sections/news-section";
import { BrandsCarousel } from "@/components/sections/brands-carousel";
import { RFQSection } from "@/components/sections/rfq-section";
import { TestimonialsSection } from "@/components/sections/testimonials-section";
import { CTABanner } from "@/components/layout/cta-banner";
import { CaseStudiesSection } from "@/components/sections/case-studies-section";
import { FAQSection } from "@/components/sections/faq-section";
import { AwardsSection } from "@/components/sections/awards-section";

export default function Home() {
  return (
    <main className="relative min-h-screen">
      <AnimatedBackground />
      <Header />
      <HeroSection />
      <BrandsCarousel />
      <AboutSection />
      <ServicesSection />
  <CaseStudiesSection />
  <TestimonialsSection />
      <SubsidiariesSection />
      <NewsSection />
  <FAQSection />
      <RFQSection />
  <CTABanner />
  <AwardsSection />
      <Footer />
    </main>
  );
}
