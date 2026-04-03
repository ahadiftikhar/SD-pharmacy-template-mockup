"use client"

import { ArrowRight, Wind, Mic, Volume2, Bug, Bandage, Zap, Droplets, Baby } from "lucide-react";

const conditions = [
  { icon: Wind, label: "Sinusitis" },
  { icon: Mic, label: "Sore Throat" },
  { icon: Volume2, label: "Earache" },
  { icon: Bug, label: "Infected Insect Bite" },
  { icon: Bandage, label: "Impetigo" },
  { icon: Zap, label: "Shingles" },
  { icon: Droplets, label: "Uncomplicated UTI" },
  { icon: Baby, label: "Acute Otitis Media" },
];

export default function PharmacyFirstSection() {
  return (
    <section id="pharmacy-first" className="py-16 sm:py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-14 items-center">
          {/* Content */}
          <div className="space-y-5">
            <div>
              <p className="text-xs font-semibold text-primary uppercase tracking-wider mb-2">NHS Service</p>
              <h2 className="text-3xl sm:text-4xl font-bold text-foreground tracking-tight leading-snug">
                Pharmacy First —<br />
                <span className="text-primary">No GP Needed</span>
              </h2>
            </div>
            <p className="text-muted-foreground leading-relaxed">
              Those aged 5 years and above can access advice and NHS-funded treatment for 7 common conditions without the need to see their GP. Quick, easy, and free on the NHS.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Our trained pharmacists are on hand to assess your condition and provide the appropriate treatment or advice.
            </p>
            <a
              href="https://lynehampharmacy.co.uk/pharmacy-first-sore-throat-wiltshire/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-primary text-primary-foreground px-7 py-3.5 text-sm font-semibold hover:opacity-90 transition-all duration-200"
            >
              Learn More
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>

          {/* Conditions grid */}
          <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-2 xl:grid-cols-4 gap-3">
            {conditions.map((c) => {
              const Icon = c.icon;
              return (
                <div
                  key={c.label}
                  className="bg-white rounded-xl p-4 text-center border border-slate-100 hover:border-primary/30 hover:shadow-sm transition-all duration-200"
                >
                  <Icon className="w-5 h-5 text-primary mx-auto mb-2.5" />
                  <p className="text-xs font-semibold text-foreground leading-tight">{c.label}</p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
