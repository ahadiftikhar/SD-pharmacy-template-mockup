"use client"

import { Link } from "react-router-dom";
import { Heart, ArrowRight } from "lucide-react";

export default function CommunitySection() {
  return (
    <section className="relative py-20 sm:py-28 overflow-hidden">
      {/* Background image with overlay */}
      <div className="absolute inset-0">
        <img
          src="https://media.base44.com/images/public/69cfa15871c422a84f4ac36c/5b5420e2b_generated_cca42720.png"
          alt="Lyneham village community"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-foreground/80 backdrop-blur-sm" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center space-y-8">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 border border-white/10">
            <Heart className="w-4 h-4 text-secondary" />
            <span className="text-xs font-semibold text-white/80 uppercase tracking-wider">Our Community</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white leading-tight tracking-tight">
            More Than a Pharmacy — We're Part of Your Family
          </h2>

          <p className="text-lg text-white/70 leading-relaxed max-w-2xl mx-auto">
            Rooted in the heart of Lyneham for over two decades, we know our patients by name, 
            not by number. Our commitment to personalised care means you'll always receive 
            the attention and expertise you deserve.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
            <Link
              to="/about"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-white text-foreground px-8 py-4 text-base font-semibold hover:bg-white/90 hover:scale-[1.02] transition-all duration-300 shadow-lg"
            >
              Our Story
              <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              to="/contact"
              className="inline-flex items-center justify-center gap-2 rounded-full border-2 border-white/30 text-white px-8 py-4 text-base font-semibold hover:bg-white/10 hover:border-white/50 transition-all duration-300"
            >
              Visit Us Today
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}