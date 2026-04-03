"use client"

import { CalendarDays, ShieldCheck, Syringe, Star, Stethoscope, Building2 } from "lucide-react";

const features = [
  {
    icon: CalendarDays,
    title: "Appointments Six Days a Week",
    description: "Monday to Saturday, we have the appointment time you need.",
  },
  {
    icon: ShieldCheck,
    title: "Approved Yellow Fever Centre",
    description: "Proud to be an accredited Yellow Fever vaccination centre.",
  },
  {
    icon: Syringe,
    title: "All Vaccines, All the Time",
    description: "We pride ourselves on keeping every vaccine in stock at all times.",
  },
  {
    icon: Star,
    title: "5-Star Reviews",
    description: "Our patients love the quality of care and service we provide.",
  },
  {
    icon: Stethoscope,
    title: "Expert Pharmacist-Led Clinic",
    description: "Highly trained pharmacists with years of travel health expertise.",
  },
  {
    icon: Building2,
    title: "NHS & Private Services",
    description: "Full range of NHS and private services under one roof.",
  },
];

export default function WhyUsSection() {
  return (
    <section className="py-10 sm:py-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <p className="text-sm font-semibold text-primary uppercase tracking-wider mb-3">Our Strengths</p>
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground tracking-tight">
            Why We Lead in Wiltshire for Travel Vaccines
          </h2>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {features.map((f) => {
            const Icon = f.icon;
            return (
              <div
                key={f.title}
                className="group bg-white rounded-2xl rounded-l-none p-8 border border-slate-200 border-l-[3px] border-l-primary hover:border-slate-300 hover:shadow-xl hover:shadow-primary/5 transition-all duration-200 hover:-translate-y-1"
              >
                <Icon className="w-7 h-7 text-primary mb-5" />
                <h3 className="text-lg font-bold text-foreground mb-2">{f.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{f.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
