"use client"

import { Star, Calendar, Phone, CheckCircle, Clock, MapPin, ArrowRight } from "lucide-react";

export default function HeroSection() {
  return (
    <section className="relative min-h-[92vh] flex flex-col justify-center overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=1600&q=85&auto=format&fit=crop"
          alt="Travel destination background"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-foreground/85 via-foreground/60 to-foreground/20" />
      </div>

      {/* Content */}
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 lg:py-32 w-full">
        <div className="max-w-2xl space-y-7">
          {/* Stars */}
          <div className="flex items-center gap-2">
            <div className="flex">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-4 h-4 text-yellow-400 fill-yellow-400" />
              ))}
            </div>
            <span className="text-sm text-white/80 font-medium">100+ Positive Patient Traveller Reviews</span>
          </div>

          {/* Heading */}
          <div>
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-extrabold text-white leading-[1.05] tracking-tight">
              Lyneham<br />
              <span className="text-secondary">Travel Clinic+</span>
            </h1>
            <p className="mt-3 text-xs sm:text-sm font-semibold text-white/50 uppercase tracking-widest">
              Lyneham Pharmacy & Travel Clinic
            </p>
          </div>

          {/* Description */}
          <p className="text-lg sm:text-xl text-white/80 leading-relaxed">
            Expert Pharmacist Travel Clinic in Wiltshire. Instantly book online for appointments. Providing the best healthcare services in the locality.
          </p>

          {/* Checklist */}
          <ul className="space-y-3">
            {[
              "Pharmacist Expert Travel Clinic",
              "Online Booking for Same-Day Appointments",
              "Full Range of Travel Vaccines & Antimalarials",
            ].map((item) => (
              <li key={item} className="flex items-center gap-3 text-white/90 text-sm font-medium">
                <CheckCircle className="w-4 h-4 text-secondary flex-shrink-0" />
                {item}
              </li>
            ))}
          </ul>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 pt-2">
            <a
              href="https://my.scripter.digital/appointment/organization/12?location_id=5"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-primary text-primary-foreground px-8 py-4 text-base font-semibold shadow-lg shadow-primary/40 hover:shadow-xl hover:shadow-primary/50 hover:scale-[1.02] transition-all duration-300"
            >
              <Calendar className="w-4 h-4" />
              Book My Vaccine
            </a>
            <a
              href="tel:01249892813"
              className="inline-flex items-center justify-center gap-2 rounded-full border-2 border-white/40 text-white px-8 py-4 text-base font-semibold hover:bg-white/10 hover:border-white/60 transition-all duration-300 backdrop-blur-sm"
            >
              <Phone className="w-4 h-4" />
              Call us
            </a>
          </div>

          <p className="text-xs text-white/50 italic">Same Day Appointments Available</p>
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
              <Calendar className="w-8 h-8 text-secondary flex-shrink-0" />
              <div>
                <p className="text-xs font-semibold text-white/50 uppercase tracking-wider">Online Booking</p>
                <p className="text-sm font-semibold text-white">Book Travel Clinic appointments online</p>
                <span className="text-xs text-secondary font-medium group-hover:underline">Book Now →</span>
              </div>
            </a>
            <div className="flex items-center gap-4 px-6 py-5">
              <Clock className="w-8 h-8 text-secondary flex-shrink-0" />
              <div>
                <p className="text-xs font-semibold text-white/50 uppercase tracking-wider">Opening Hours</p>
                <p className="text-sm font-semibold text-white">Mon–Fri: 9am–6pm · Sat: 9am–1:30pm · Sun: Closed</p>
              </div>
            </div>
            <a
              href="https://maps.google.com/?q=Lyneham+Pharmacy+Wiltshire"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-4 px-6 py-5 hover:bg-white/5 transition-colors"
            >
              <MapPin className="w-8 h-8 text-secondary flex-shrink-0" />
              <div>
                <p className="text-xs font-semibold text-white/50 uppercase tracking-wider">Find Us</p>
                <p className="text-sm font-semibold text-white">Edmonds Garage, The Green, Lyneham, Wiltshire</p>
                <span className="text-xs text-secondary font-medium group-hover:underline">Get Directions →</span>
              </div>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}