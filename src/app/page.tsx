import type { Metadata } from "next";

import { BackToTop } from "@/components/floating/BackToTop";
import { FloatingWhatsApp } from "@/components/floating/FloatingWhatsApp";

import {
  Coverage,
  FaqAccordion,
  FinalCta,
  Footer,
  Header,
  Hero,
  HowItWorks,
  ZeroFeeBand,
  ServicesGrid,
  Team,
  TestimonialCarousel,
  Bio,
  WhyChoose,
} from "@/components/sections";

export const metadata: Metadata = {
  title: "Veterinário a domicílio | Brasília-DF",
  description:
    "Saúde e bem-estar para o seu pet onde ele se sente melhor: em casa 💚",
};

export default function HomePage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <FloatingWhatsApp />
      <BackToTop />
      <main>
        <Hero />
        <ZeroFeeBand />
        <WhyChoose />
        <HowItWorks />
        <ServicesGrid />
        <Coverage />
        <Bio />
        <Team />
        <TestimonialCarousel />
        <FaqAccordion />
        <FinalCta />
      </main>
      <Footer />
    </div>
  );
}
