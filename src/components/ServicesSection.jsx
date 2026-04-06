"use client"

import { ArrowRight } from "lucide-react";

const services = [
  {
    title: "Vitamin B12 Injection",
    description: "Private vitamin B12 injection service. Book online to get the injection at the pharmacy.",
    image: "/images/B12-injection-Home-.jpg",
    href: "https://lynehampharmacy.co.uk/vitamin-b12-injection-swindon/",
  },
  {
    title: "Speciality Vaccine",
    description: "Book your appointment online for private speciality vaccines at our pharmacy.",
    image: "/images/travel-clinic-1.jpeg",
    href: "https://lynehampharmacy.co.uk/speciality-vaccine-wiltshire/",
  },
  {
    title: "Sore Throat",
    description: "Those aged 5 years and above can access advice and NHS-funded treatment for sore throat without the need to see their GP.",
    image: "/images/treatlocal-sorethroat-pagebody-1-1920x1080-1.jpg",
    href: "https://lynehampharmacy.co.uk/pharmacy-first-sore-throat-wiltshire/",
  },
  {
    title: "Hajj & Umrah Vaccine",
    description: "We offer the meningitis ACWY vaccine for Hajj and Umrah travellers. Book online.",
    image: "/images/Untitled-design-1.jpg",
    href: "https://lynehampharmacy.co.uk/hajj-umrah-vaccine-wiltshire/",
  },
  {
    title: "Covid Vaccination Centre",
    description: "We offer Covid Vaccination Service in Lyneham. No appointment is needed.",
    image: "/images/covid-vaccination-center.jpg",
    href: "https://lynehampharmacy.co.uk/covid-vaccination-centre/",
  },
  {
    title: "Antimalarials",
    description: "If you are planning to travel, speak to one of our pharmacists to find the right antimalarials for your trip.",
    image: "/images/antimalarials.jpg",
    href: "https://lynehampharmacy.co.uk/antimalarials-wiltshire/",
  },
];

export default function ServicesSection() {
  return (
    <section id="services" className="py-16 sm:py-24 bg-slate-50 scroll-mt-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-12">
          <p className="text-xs font-semibold text-primary uppercase tracking-wider mb-2">What We Offer</p>
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground tracking-tight">Our Services</h2>
          <p className="mt-3 text-muted-foreground max-w-xl">
            Comprehensive pharmacy and travel clinic services for individuals and families across Lyneham and Wiltshire.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {services.map((service) => (
            <a
              key={service.title}
              href={service.href}
              target="_blank"
              rel="noopener noreferrer"
              className="group bg-white rounded-xl overflow-hidden border border-slate-100 hover:shadow-md transition-all duration-200"
            >
              <div className="aspect-[16/9] overflow-hidden bg-slate-100">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
                />
              </div>
              <div className="p-5">
                <h3 className="text-base font-bold text-foreground mb-1.5">{service.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed mb-4">{service.description}</p>
                <span className="inline-flex items-center gap-1 text-sm font-semibold text-primary group-hover:gap-2 transition-all duration-200">
                  Learn more <ArrowRight className="w-3.5 h-3.5" />
                </span>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
