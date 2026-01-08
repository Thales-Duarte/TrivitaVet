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
  SectionDivider,
  WhyChoose,
} from "@/components/sections";

export const metadata: Metadata = {
  title: {
    absolute: "Trivita Vet",
  },
  description:
    "Saúde e bem-estar para o seu pet onde ele se sente melhor: em casa 💚",
};

export default function HomePage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <BackToTop />
      <FloatingWhatsApp />
      <Hero />
      <SectionDivider />
      <ZeroFeeBand />
      <SectionDivider />
  <WhyChoose />
  <SectionDivider />
      <HowItWorks />
  <SectionDivider />
      <ServicesGrid />
      <SectionDivider />
      <Coverage />
      <SectionDivider />
      <Bio />
      <SectionDivider />
      <Team />
      <SectionDivider />
      <TestimonialCarousel />
      <SectionDivider />
      <FaqAccordion />
      <SectionDivider />
      <FinalCta />
      <Footer />
    </div>
  );
}
