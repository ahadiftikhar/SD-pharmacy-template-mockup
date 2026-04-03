"use client"

import { ArrowRight } from "lucide-react";

const conditions = [
  { emoji: "🤧", label: "Sinusitis" },
  { emoji: "😮‍💨", label: "Sore Throat" },
  { emoji: "👂", label: "Earache" },
  { emoji: "🦟", label: "Infected Insect Bite" },
  { emoji: "🩹", label: "Impetigo" },
  { emoji: "⚡", label: "Shingles" },
  { emoji: "💊", label: "Uncomplicated UTI" },
  { emoji: "👶", label: "Acute Otitis Media" },
];

export default function PharmacyFirstSection() {
  return (
    <section id="pharmacy-first" className="py-20 sm:py-28 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <div className="space-y-6">
            <div>
              <p className="text-sm font-semibold text-primary uppercase tracking-wider mb-3">NHS Service</p>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-foreground tracking-tight leading-tight">
                Pharmacy First — <br />
                <span className="text-primary">No GP Needed</span>
              </h2>
            </div>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Those aged 5 years and above can access advice and NHS-funded treatment for 7 common conditions without the need to see their GP. Quick, easy, and free on the NHS.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Our trained pharmacists are on hand to assess your condition and provide the appropriate treatment or advice.
            </p>
            <a
              href="https://lynehampharmacy.co.uk/pharmacy-first-sore-throat-wiltshire/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-primary text-primary-foreground px-8 py-4 text-base font-semibold shadow-md shadow-primary/20 hover:shadow-lg hover:shadow-primary/30 hover:scale-[1.02] transition-all duration-300"
            >
              Learn More About Pharmacy First
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>

          {/* Conditions grid */}
          <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-2 xl:grid-cols-4 gap-4">
            {conditions.map((c) => (
              <div
                key={c.label}
                className="bg-card rounded-2xl p-4 text-center border border-border/50 hover:border-primary/20 hover:shadow-lg hover:shadow-primary/5 transition-all duration-300 hover:-translate-y-0.5"
              >
                <div className="text-3xl mb-2">{c.emoji}</div>
                <p className="text-xs font-semibold text-foreground leading-tight">{c.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}