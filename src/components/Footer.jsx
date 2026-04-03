"use client"

import { Link } from "react-router-dom";
import { MapPin, Phone, Clock, Mail, Facebook, Instagram, Youtube } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-foreground text-white/90">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="lg:col-span-1">
            <img
              src="https://lynehampharmacy.co.uk/wp-content/uploads/2022/08/lynehampharmacy-768x249.png"
              alt="Lyneham Pharmacy"
              className="h-12 w-auto brightness-0 invert mb-4"
            />
            <p className="text-white/60 text-sm leading-relaxed mb-5">
              Expert pharmacist-led travel clinic and full-service pharmacy in the heart of Lyneham, Wiltshire.
            </p>
            <div className="flex gap-3">
              {[Facebook, Instagram, Youtube].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  className="w-9 h-9 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors"
                >
                  <Icon className="w-4 h-4 text-white/70" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider text-white/40 mb-5">Quick Links</h4>
            <ul className="space-y-3">
              {[
                { label: "Home", href: "/" },
                { label: "Services", href: "#services" },
                { label: "Vaccinations", href: "#travel" },
                { label: "Pharmacy First", href: "#pharmacy-first" },
                { label: "Contact Us", href: "#contact" },
              ].map((item) => (
                <li key={item.label}>
                  {item.href.startsWith("#") ? (
                    <a href={item.href} className="text-sm text-white/60 hover:text-white transition-colors duration-200">{item.label}</a>
                  ) : (
                    <Link to={item.href} className="text-sm text-white/60 hover:text-white transition-colors duration-200">{item.label}</Link>
                  )}
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider text-white/40 mb-5">Our Services</h4>
            <ul className="space-y-3">
              {["Vitamin B12 Injection", "Travel Vaccines", "Yellow Fever", "Antimalarials", "Hajj & Umrah Vaccine", "Covid Vaccination"].map((item) => (
                <li key={item}>
                  <a href="#services" className="text-sm text-white/60 hover:text-white transition-colors duration-200">{item}</a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider text-white/40 mb-5">Get in Touch</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="w-4 h-4 mt-0.5 text-white/40 flex-shrink-0" />
                <span className="text-sm text-white/60">Edmonds Garage, The Green, Lyneham, Wiltshire SN15 4PD</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-white/40 flex-shrink-0" />
                <a href="tel:01249892813" className="text-sm text-white/60 hover:text-white transition-colors">0124 9892 813</a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-4 h-4 text-white/40 flex-shrink-0" />
                <a href="mailto:info@lynehampharmacy.co.uk" className="text-sm text-white/60 hover:text-white transition-colors break-all">
                  info@lynehampharmacy.co.uk
                </a>
              </li>
              <li className="flex items-start gap-3">
                <Clock className="w-4 h-4 mt-0.5 text-white/40 flex-shrink-0" />
                <div className="text-sm text-white/60">
                  <p>Mon–Fri: 9am–6pm</p>
                  <p>Sat: 9am–1:30pm</p>
                  <p>Sun: Closed</p>
                </div>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-white/40">© {new Date().getFullYear()} Lyneham Pharmacy & Travel Clinic. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="#" className="text-xs text-white/40 hover:text-white/70 transition-colors">Privacy Policy</a>
            <a href="#" className="text-xs text-white/40 hover:text-white/70 transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}