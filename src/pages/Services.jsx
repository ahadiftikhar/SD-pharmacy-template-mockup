"use client"

import Link from "next/link";
import { Pill, Syringe, Stethoscope, Heart, Thermometer, Plane, ArrowRight, CheckCircle } from "lucide-react";

const services = [
  {
    icon: Pill,
    title: "NHS Prescriptions",
    description: "Fast, accurate dispensing of your NHS prescriptions with expert pharmaceutical advice. We offer a free delivery service for those who can't visit us in person.",
    features: ["Same-day dispensing", "Free local delivery", "Medication reviews", "Repeat prescription service"],
  },
  {
    icon: Syringe,
    title: "Flu Vaccinations",
    description: "Protect yourself and your family with our annual flu vaccination service. Available for NHS-eligible patients and private bookings.",
    features: ["NHS eligible patients free", "Walk-ins welcome", "Private vaccinations available", "All ages covered"],
  },
  {
    icon: Stethoscope,
    title: "Health Consultations",
    description: "Private, confidential consultations with our experienced pharmacists. Get advice on minor ailments, chronic conditions, and wellness.",
    features: ["Private consultation room", "No appointment needed", "Minor illness service", "Chronic disease support"],
  },
  {
    icon: Heart,
    title: "Blood Pressure Checks",
    description: "Regular blood pressure monitoring is essential for cardiovascular health. Walk in any time for a free blood pressure check.",
    features: ["Free of charge", "No appointment required", "Results explained clearly", "Follow-up advice provided"],
  },
  {
    icon: Thermometer,
    title: "Health Screening",
    description: "Comprehensive health screening services including diabetes checks, cholesterol monitoring, and BMI assessments.",
    features: ["Diabetes screening", "Cholesterol checks", "BMI assessments", "Personalised health plans"],
  },
  {
    icon: Plane,
    title: "Travel Health",
    description: "Planning a trip? Our travel health service provides vaccinations, antimalarials, and advice tailored to your destination.",
    features: ["Destination-specific advice", "Travel vaccinations", "Antimalarial prescriptions", "Travel health kits"],
  },
];

export default function Services() {
  return (
    <div>
      {/* Hero */}
      <section className="bg-gradient-to-br from-secondary/30 via-background to-background py-16 sm:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-sm font-semibold text-primary uppercase tracking-wider mb-3">Our Services</p>
          <h1 className="text-4xl sm:text-5xl font-extrabold text-foreground tracking-tight">
            Healthcare Tailored to You
          </h1>
          <p className="mt-6 text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            We offer a comprehensive range of pharmacy and health services, all delivered with the personal touch you'd expect from your local community pharmacy.
          </p>
        </div>
      </section>

      {/* Services grid */}
      <section className="py-20 sm:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service) => (
              <div
                key={service.title}
                className="group bg-card rounded-2xl p-8 border border-border/50 hover:border-primary/20 hover:shadow-xl hover:shadow-primary/5 transition-all duration-500"
              >
                <div className="w-14 h-14 rounded-2xl bg-secondary flex items-center justify-center mb-6 group-hover:bg-primary/10 transition-colors duration-300">
                  <service.icon className="w-7 h-7 text-primary" />
                </div>
                <h3 className="text-xl font-bold text-foreground mb-3">{service.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed mb-6">{service.description}</p>
                <ul className="space-y-2.5">
                  {service.features.map((feature) => (
                    <li key={feature} className="flex items-center gap-2.5 text-sm text-foreground/70">
                      <CheckCircle className="w-4 h-4 text-primary flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* CTA */}
          <div className="text-center mt-16">
            <p className="text-muted-foreground mb-6">Can't find what you're looking for? Get in touch — we may be able to help.</p>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-primary text-primary-foreground px-8 py-4 text-base font-semibold shadow-lg shadow-primary/20 hover:shadow-xl hover:shadow-primary/30 hover:scale-[1.02] transition-all duration-300"
            >
              Contact Us
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}