"use client"

import { Calendar, Phone, Clock, MapPin } from "lucide-react";

export default function HeroSection() {
  return (
    <section className="relative flex flex-col overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=1600&q=85&auto=format&fit=crop"
          alt="Lyneham Pharmacy"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-foreground/70" />
      </div>

      {/* Content */}
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 lg:py-30 w-full">
        <div className="max-w-xl space-y-6">
          <p className="text-xs font-semibold text-secondary uppercase tracking-widest">
            Lyneham, Wiltshire
          </p>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight tracking-tight">
            Welcome to<br />Lyneham Pharmacy
          </h1>
          <p className="text-base sm:text-lg text-white/75 leading-relaxed">
            Providing the best healthcare services in the locality. Expert pharmacist-led care, travel vaccinations, and NHS services — all in one place.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 pt-2">
            <a
              href="https://my.scripter.digital/appointment/organization/12?location_id=5"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-primary text-primary-foreground px-7 py-3.5 text-sm font-semibold hover:opacity-90 transition-all duration-200"
            >
              <Calendar className="w-4 h-4" />
              Book Online
            </a>
            <a
              href="tel:01249892813"
              className="inline-flex items-center justify-center gap-2 rounded-full border border-white/30 text-white px-7 py-3.5 text-sm font-semibold hover:bg-white/10 transition-all duration-200"
            >
              <Phone className="w-4 h-4" />
              0124 9892 813
            </a>
          </div>
        </div>
      </div>

      {/* Info strip */}
      <div className="relative bg-white/10 backdrop-blur-lg border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-3 divide-y sm:divide-y-0 sm:divide-x divide-white/10">
            <a
              href="https://my.scripter.digital/appointment/organization/12?location_id=5"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-4 px-6 py-5 hover:bg-white/5 transition-colors"
            >
              <Calendar className="w-5 h-5 text-secondary flex-shrink-0" />
              <div>
                <p className="text-xs font-medium text-white/50 uppercase tracking-wider">Online Booking</p>
                <p className="text-sm font-semibold text-white group-hover:text-secondary transition-colors">Book an appointment</p>
              </div>
            </a>
            <div className="flex items-center gap-4 px-6 py-5">
              <Clock className="w-5 h-5 text-secondary flex-shrink-0" />
              <div>
                <p className="text-xs font-medium text-white/50 uppercase tracking-wider">Opening Hours</p>
                <p className="text-sm font-semibold text-white">Mon–Fri 9am–6pm · Sat 9am–1:30pm</p>
              </div>
            </div>
            <a
              href="https://maps.google.com/?q=Lyneham+Pharmacy+Wiltshire"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-4 px-6 py-5 hover:bg-white/5 transition-colors"
            >
              <MapPin className="w-5 h-5 text-secondary flex-shrink-0" />
              <div>
                <p className="text-xs font-medium text-white/50 uppercase tracking-wider">Find Us</p>
                <p className="text-sm font-semibold text-white group-hover:text-secondary transition-colors">Edmonds Garage, Lyneham, SN15 4PD</p>
              </div>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
