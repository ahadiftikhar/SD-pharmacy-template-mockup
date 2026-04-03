"use client"

import { Star, ExternalLink } from "lucide-react";

const testimonials = [
  {
    text: "Absolutely excellent service. The pharmacist was incredibly knowledgeable about my travel vaccines and gave me thorough advice for my trip to Thailand. Highly recommend!",
    name: "Sarah M.",
    role: "Verified Patient",
  },
  {
    text: "Really impressed by the care and professionalism of everyone here. Easy to contact, efficient and caring. Booked my yellow fever vaccine and was seen the same day.",
    name: "James T.",
    role: "Verified Patient",
  },
  {
    text: "Wonderful pharmacy. Great asset to the Lyneham community. Professional, friendly and personal service. Always helpful and kind. Thank you!",
    name: "Caroline B.",
    role: "Verified Patient",
  },
  {
    text: "Fantastic travel clinic. Staff went above and beyond to ensure I had everything I needed before my trip to Africa. The consultation was thorough and reassuring.",
    name: "David H.",
    role: "Verified Patient",
  },
  {
    text: "Easy online booking, quick appointment, and a very friendly and knowledgeable pharmacist. Got all my travel vaccines sorted in one visit. 5 stars!",
    name: "Emma W.",
    role: "Verified Patient",
  },
  {
    text: "Always a warm welcome here. The team really remember you and provide genuinely personalised advice. Brilliant service for travel vaccinations.",
    name: "Robert K.",
    role: "Verified Patient",
  },
];

export default function TestimonialsSection() {
  return (
    <section className="py-20 sm:py-28 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-6">
          <p className="text-sm font-semibold text-primary uppercase tracking-wider mb-3">Testimonials</p>
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground tracking-tight">What Our Patients Say</h2>
          <p className="mt-4 text-muted-foreground leading-relaxed">
            Trusted by the Lyneham community — rated 5 stars across 100+ patient reviews.
          </p>
        </div>

        <hr className="border-border/30 mb-12 max-w-2xl mx-auto" />

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {testimonials.map((t) => (
            <div
              key={t.name}
              className="relative overflow-hidden bg-white rounded-xl p-5 border border-slate-200 hover:border-primary/20 hover:shadow-lg hover:shadow-primary/5 transition-all duration-200 flex flex-col gap-4"
            >
              <span className="absolute top-2 left-4 text-6xl font-serif text-primary/10 leading-none select-none">&ldquo;</span>
              <div className="flex">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 text-yellow-400 fill-yellow-400" />
                ))}
              </div>
              <p className="text-sm text-foreground/75 leading-relaxed flex-1">&ldquo;{t.text}&rdquo;</p>
              <div className="flex items-center gap-3 pt-2 border-t border-border/50">
                <div className="w-9 h-9 rounded-full bg-primary flex items-center justify-center text-sm font-bold text-white">
                  {t.name[0]}
                </div>
                <div>
                  <p className="text-sm font-semibold text-foreground">{t.name}</p>
                  <p className="text-xs text-muted-foreground">{t.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <a
            href="https://www.google.com/maps/place/Lyneham+Pharmacy+and+Travel+Clinic"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 rounded-full border-2 border-primary text-primary px-8 py-4 text-base font-semibold hover:bg-secondary/50 hover:scale-[1.02] transition-all duration-200"
          >
            See All Google Reviews
            <ExternalLink className="w-4 h-4" />
          </a>
        </div>
      </div>
    </section>
  );
}
