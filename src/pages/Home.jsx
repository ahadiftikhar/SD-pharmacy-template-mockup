"use client"

import HeroSection from "../components/HeroSection";
import AboutSection from "../components/AboutSection";
import ServicesSection from "../components/ServicesSection";
import TravelSection from "../components/TravelSection";
import WhyUsSection from "../components/WhyUsSection";
import TestimonialsSection from "../components/TestimonialsSection";
import ContactSection from "../components/ContactSection";
import PharmacyFirstSection from "../components/PharmacyFirstSection";

export default function Home() {
  return (
    <div>
      <HeroSection />
      <AboutSection />
      <ServicesSection />
      <TravelSection />
      <PharmacyFirstSection />
      <WhyUsSection />
      <TestimonialsSection />
      <ContactSection />
    </div>
  );
}