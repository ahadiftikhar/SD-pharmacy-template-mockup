"use client"

import { Link } from "react-router-dom";
import { Phone, Clock, MapPin } from "lucide-react";

export default function CTASection() {
  return (
    <section className="py-20 sm:py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative bg-primary rounded-3xl overflow-hidden">
          {/* Decorative elements */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-white/5 rounded-full -translate-y-1/2 translate-x-1/2" />
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-white/5 rounded-full translate-y-1/2 -translate-x-1/2" />

          <div className="relative px-8 py-16 sm:px-16 sm:py-20">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="space-y-6">
                <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">
                  Ready to Put Your Health First?
                </h2>
                <p className="text-lg text-white/70 leading-relaxed">
                  Whether you need a prescription filled, a health check, or expert advice — 
                  we're here and ready to help. Pop in or give us a call.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 pt-2">
                  <Link
                    to="/contact"
                    className="inline-flex items-center justify-center gap-2 rounded-full bg-white text-primary px-8 py-4 text-base font-semibold hover:bg-white/90 hover:scale-[1.02] transition-all duration-300 shadow-lg"
                  >
                    Book a Consultation
                  </Link>
                  <a
                    href="tel:01249462850"
                    className="inline-flex items-center justify-center gap-2 rounded-full border-2 border-white/30 text-white px-8 py-4 text-base font-semibold hover:bg-white/10 hover:border-white/50 transition-all duration-300"
                  >
                    <Phone className="w-4 h-4" />
                    Call Us
                  </a>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/10">
                  <Clock className="w-8 h-8 text-white/60 mb-4" />
                  <h3 className="text-sm font-semibold text-white/50 uppercase tracking-wider mb-2">Opening Hours</h3>
                  <div className="space-y-1 text-sm text-white/80">
                    <p>Mon–Fri: 9:00–6:00 PM</p>
                    <p>Saturday: 9:00–1:00 PM</p>
                    <p>Sunday: Closed</p>
                  </div>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/10">
                  <MapPin className="w-8 h-8 text-white/60 mb-4" />
                  <h3 className="text-sm font-semibold text-white/50 uppercase tracking-wider mb-2">Find Us</h3>
                  <p className="text-sm text-white/80 leading-relaxed">
                    The Green, Lyneham,<br />
                    Chippenham, Wiltshire<br />
                    SN15 4PJ
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}