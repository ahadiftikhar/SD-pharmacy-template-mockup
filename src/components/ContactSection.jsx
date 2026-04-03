"use client"

import { MapPin, Phone, Mail, Clock, Calendar } from "lucide-react";

export default function ContactSection() {
  return (
    <section id="contact" className="py-10 sm:py-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <p className="text-sm font-semibold text-primary uppercase tracking-wider mb-3">Get In Touch</p>
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground tracking-tight">Contact Us</h2>
          <p className="mt-4 text-muted-foreground leading-relaxed">
            We&apos;d love to hear from you. Visit us in store or get in touch online.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          <div className="bg-white rounded-xl p-5 border border-slate-200 border-l-[3px] border-l-primary space-y-3 hover:border-primary hover:bg-primary/5 transition-all duration-200">
            <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
              <MapPin className="w-5 h-5 text-primary" />
            </div>
            <h3 className="text-xs font-semibold text-foreground/60 uppercase tracking-wider">Address</h3>
            <p className="text-sm font-semibold text-foreground leading-relaxed">Edmonds Garage, The Green, Lyneham, Wiltshire, SN15 4PD</p>
          </div>

          <div className="bg-white rounded-xl p-5 border border-slate-200 border-l-[3px] border-l-primary space-y-3 hover:border-primary hover:bg-primary/5 transition-all duration-200">
            <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
              <Phone className="w-5 h-5 text-primary" />
            </div>
            <h3 className="text-xs font-semibold text-foreground/60 uppercase tracking-wider">Phone</h3>
            <a href="tel:01249892813" className="block text-sm font-semibold text-foreground hover:text-primary transition-colors">
              0124 9892 813
            </a>
          </div>

          <div className="bg-white rounded-xl p-5 border border-slate-200 border-l-[3px] border-l-primary space-y-3 hover:border-primary hover:bg-primary/5 transition-all duration-200">
            <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
              <Mail className="w-5 h-5 text-primary" />
            </div>
            <h3 className="text-xs font-semibold text-foreground/60 uppercase tracking-wider">Email</h3>
            <a href="mailto:info@lynehampharmacy.co.uk" className="block text-sm font-semibold text-foreground hover:text-primary transition-colors break-all">
              info@lynehampharmacy.co.uk
            </a>
          </div>

          <div className="bg-white rounded-xl p-5 border border-slate-200 border-l-[3px] border-l-primary space-y-3 hover:border-primary hover:bg-primary/5 transition-all duration-200">
            <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
              <Clock className="w-5 h-5 text-primary" />
            </div>
            <h3 className="text-xs font-semibold text-foreground/60 uppercase tracking-wider">Opening Hours</h3>
            <div className="text-sm font-semibold text-foreground leading-relaxed">
              <p>Mon&ndash;Fri: 9am&ndash;6pm</p>
              <p>Sat: 9am&ndash;1:30pm</p>
              <p>Sun: Closed</p>
            </div>
          </div>
        </div>

        <div className="text-center">
          <a
            href="https://my.scripter.digital/appointment/organization/12?location_id=5"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 rounded-full bg-primary text-primary-foreground px-10 py-4 text-base font-semibold shadow-lg shadow-primary/20 hover:shadow-xl hover:shadow-primary/30 hover:scale-[1.02] transition-all duration-200"
          >
            <Calendar className="w-4 h-4" />
            Book an Appointment Online
          </a>
        </div>
      </div>
    </section>
  );
}
