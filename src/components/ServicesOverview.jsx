"use client"

import { Pill, Syringe, Stethoscope } from "lucide-react";
import ServiceCard from "./ServiceCard";

const services = [
  {
    title: "NHS Prescriptions",
    description: "Fast, reliable prescription dispensing with expert advice. We ensure your medications are ready when you need them.",
    image: "https://media.base44.com/images/public/69cfa15871c422a84f4ac36c/20d19f637_generated_0aa8a20a.png",
    icon: Pill,
  },
  {
    title: "Flu Vaccinations",
    description: "Protect yourself and your loved ones with our NHS and private flu vaccination service. Walk-ins welcome.",
    image: "https://media.base44.com/images/public/69cfa15871c422a84f4ac36c/447283598_generated_ee6f7fe3.png",
    icon: Syringe,
  },
  {
    title: "Health Consultations",
    description: "Private, one-to-one consultations with our qualified pharmacists for personalised health advice and support.",
    image: "https://media.base44.com/images/public/69cfa15871c422a84f4ac36c/0b16a021d_generated_99cff5b7.png",
    icon: Stethoscope,
  },
];

export default function ServicesOverview() {
  return (
    <section className="py-20 sm:py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <p className="text-sm font-semibold text-primary uppercase tracking-wider mb-3">What We Offer</p>
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground tracking-tight">
            Comprehensive Pharmacy Services
          </h2>
          <p className="mt-4 text-muted-foreground text-lg leading-relaxed">
            From everyday prescriptions to specialised health services, our team is dedicated to keeping your community healthy.
          </p>
        </div>

        {/* Service cards grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service) => (
            <ServiceCard key={service.title} {...service} />
          ))}
        </div>
      </div>
    </section>
  );
}