import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { AnimatedBackground } from "@/components/layout/animated-background";
import { WhatsAppFloat } from "@/components/layout/whatsapp-float";
import { HeroSection } from "@/components/sections/hero-section";
import { ServicesSection } from "@/components/sections/services-section";
import { SubsidiariesSection } from "@/components/sections/subsidiaries-section";
import { AboutSection } from "@/components/sections/about-section";
import { NewsSection } from "@/components/sections/news-section";
import { BrandsCarousel } from "@/components/sections/brands-carousel";
import { RFQSection } from "@/components/sections/rfq-section";

export default function Home() {
  return (
    <main className="relative min-h-screen">
      <AnimatedBackground />
      <WhatsAppFloat />
      <Header />
      <HeroSection />
      <BrandsCarousel />
      <AboutSection />
      <ServicesSection />
      <SubsidiariesSection />
      <NewsSection />
      <RFQSection />
      <Footer />
    </main>
  );
}
