
"use client"
import { ArrowRight } from "lucide-react";

const services = [
  {
    title: "Vitamin B12 Injection",
    description: "Private vitamin B12 injection service. Book online to get the injection at the pharmacy.",
    image: "https://lynehampharmacy.co.uk/wp-content/uploads/2023/02/B12-injection-Home-.jpg",
    href: "https://lynehampharmacy.co.uk/vitamin-b12-injection-swindon/",
  },
  {
    title: "Speciality Vaccine",
    description: "Book your appointment online for private speciality vaccines at our pharmacy.",
    image: "https://lynehampharmacy.co.uk/wp-content/uploads/2022/07/travel-clinic-1.jpeg",
    href: "https://lynehampharmacy.co.uk/speciality-vaccine-wiltshire/",
  },
  {
    title: "Sore Throat",
    description: "Those aged 5+ can access advice and NHS-funded treatment for sore throat without needing to see their GP.",
    image: "https://lynehampharmacy.co.uk/wp-content/uploads/2024/02/treatlocal-sorethroat-pagebody-1-1920x1080-1.jpg",
    href: "https://lynehampharmacy.co.uk/pharmacy-first-sore-throat-wiltshire/",
  },
  {
    title: "Hajj & Umrah Vaccine",
    description: "We offer the meningitis ACWY vaccine for Hajj and Umrah travellers. Book online.",
    image: "https://lynehampharmacy.co.uk/wp-content/uploads/2023/04/Untitled-design-1.jpg",
    href: "https://lynehampharmacy.co.uk/hajj-umrah-vaccine-wiltshire/",
  },
  {
    title: "Covid Vaccination Centre",
    description: "We offer Covid Vaccination Service in Lyneham. NO appointment is needed.",
    image: "https://lynehampharmacy.co.uk/wp-content/uploads/2022/07/covid-vaccination-center.jpg",
    href: "https://lynehampharmacy.co.uk/covid-vaccination-centre/",
  },
  {
    title: "Antimalarials",
    description: "If you are planning to travel, speak to one of our pharmacists to find the right antimalarials for your trip.",
    image: "https://lynehampharmacy.co.uk/wp-content/uploads/2022/07/antimalarials.jpg",
    href: "https://lynehampharmacy.co.uk/antimalarials-wiltshire/",
  },
];

export default function ServicesSection() {
  return (
    <section id="services" className="py-20 sm:py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <p className="text-sm font-semibold text-primary uppercase tracking-wider mb-3">What We Offer</p>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-foreground tracking-tight">Our Services</h2>
          <p className="mt-4 text-muted-foreground text-lg leading-relaxed">
            Comprehensive pharmacy and travel clinic services for individuals and families in Lyneham and surrounding areas.
          </p>
        </div>

        {/* Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {services.map((service) => (
            <a
              key={service.title}
              href={service.href}
              target="_blank"
              rel="noopener noreferrer"
              className="group bg-card rounded-2xl overflow-hidden border border-border/50 hover:border-primary/20 hover:shadow-xl hover:shadow-primary/5 transition-all duration-500"
            >
              <div className="aspect-[16/9] overflow-hidden">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                />
              </div>
              <div className="p-6">
                <h3 className="text-lg font-bold text-foreground mb-2">{service.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed mb-4">{service.description}</p>
                <span className="inline-flex items-center gap-1.5 text-sm font-semibold text-primary group-hover:gap-2.5 transition-all duration-300">
                  More Details
                  <ArrowRight className="w-4 h-4" />
                </span>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}