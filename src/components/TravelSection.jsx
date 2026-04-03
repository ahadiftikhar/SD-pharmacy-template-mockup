"use client"

import { CheckCircle, Calendar, Phone } from "lucide-react";

const vaccines = [
  "Yellow Fever", "Typhoid", "Hepatitis A", "Hepatitis B",
  "Malaria / Antimalarials", "Meningitis ACWY", "Rabies", "Japanese Encephalitis",
  "Cholera", "Tick-borne Encephalitis", "Tetanus / Diphtheria / Polio", "COVID-19 (Private)",
];

export default function TravelSection() {
  return (
    <section id="travel" className="relative py-20 sm:py-28 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1530521954074-e64f6810b32d?w=1600&q=60&auto=format"
          alt="Travel health"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-foreground/85" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Left */}
          <div className="space-y-8">
            <div>
              <p className="text-sm font-semibold text-secondary uppercase tracking-wider mb-3">Travel Health</p>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-tight">
                Every Vaccine <br />
                <span className="text-secondary">For Every Trip</span>
              </h2>
            </div>
            <p className="text-lg text-white/70 leading-relaxed">
              Stocked to the brim with every vaccine available — we ensure you are never left empty-handed. Are you planning to travel abroad? Protect yourself and your family with the right vaccines before you go.
            </p>
            <p className="text-white/60 leading-relaxed">
              Our expert pharmacists will advise you on the best vaccines for your destination and ensure you travel safely.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="https://my.scripter.digital/appointment/organization/12?location_id=5"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-primary text-primary-foreground px-8 py-4 text-base font-semibold shadow-lg shadow-primary/40 hover:shadow-xl hover:shadow-primary/50 hover:scale-[1.02] transition-all duration-300"
              >
                <Calendar className="w-4 h-4" />
                Book Vaccine Appointment
              </a>
              <a
                href="https://lynehampharmacy.co.uk/travel-clinic/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-full border-2 border-white/30 text-white px-8 py-4 text-base font-semibold hover:bg-white/10 hover:border-white/50 transition-all duration-300"
              >
                More Details
              </a>
            </div>
          </div>

          {/* Right — vaccine list */}
          <div className="space-y-6">
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {vaccines.map((v) => (
                  <div key={v} className="flex items-center gap-2.5 text-sm text-white/85 font-medium">
                    <CheckCircle className="w-4 h-4 text-secondary flex-shrink-0" />
                    {v}
                  </div>
                ))}
              </div>
            </div>

            {/* Sub CTA */}
            <div className="bg-primary/20 backdrop-blur-sm rounded-2xl p-6 border border-primary/30">
              <h3 className="text-lg font-bold text-white mb-2">Antimalarials For Every Traveller</h3>
              <p className="text-sm text-white/70 mb-5 leading-relaxed">No matter where you go, we have you covered. Keeping you safe before, during, and after your trip.</p>
              <div className="flex flex-col sm:flex-row gap-3">
                <a
                  href="https://my.scripter.digital/appointment/organization/12?location_id=5"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center rounded-full bg-primary text-primary-foreground px-6 py-3 text-sm font-semibold shadow-md hover:scale-[1.02] transition-all duration-300"
                >
                  Book Now
                </a>
                <a
                  href="tel:01249892813"
                  className="inline-flex items-center justify-center gap-2 rounded-full border border-white/30 text-white px-6 py-3 text-sm font-semibold hover:bg-white/10 transition-all duration-300"
                >
                  <Phone className="w-3.5 h-3.5" />
                  Speak to Pharmacist
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}