"use client"

import { MapPin, Phone, Mail, Clock, Calendar } from "lucide-react";

export default function ContactSection() {
  return (
    <section id="contact" className="py-20 sm:py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <p className="text-sm font-semibold text-primary uppercase tracking-wider mb-3">Get In Touch</p>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-foreground tracking-tight">Contact Us</h2>
          <p className="mt-4 text-muted-foreground leading-relaxed">
            We'd love to hear from you. Visit us in store or get in touch online.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          <div className="bg-card rounded-2xl p-6 border border-border/50 text-center space-y-3 hover:border-primary/20 hover:shadow-lg transition-all duration-300">
            <div className="w-12 h-12 rounded-xl bg-secondary mx-auto flex items-center justify-center">
              <MapPin className="w-5 h-5 text-primary" />
            </div>
            <h3 className="text-sm font-semibold text-foreground/60 uppercase tracking-wider">Address</h3>
            <p className="text-sm text-foreground leading-relaxed">Edmonds Garage, The Green, Lyneham, Wiltshire, SN15 4PD</p>
          </div>

          <div className="bg-card rounded-2xl p-6 border border-border/50 text-center space-y-3 hover:border-primary/20 hover:shadow-lg transition-all duration-300">
            <div className="w-12 h-12 rounded-xl bg-secondary mx-auto flex items-center justify-center">
              <Phone className="w-5 h-5 text-primary" />
            </div>
            <h3 className="text-sm font-semibold text-foreground/60 uppercase tracking-wider">Phone</h3>
            <a href="tel:01249892813" className="text-sm text-foreground hover:text-primary transition-colors font-medium">
              0124 9892 813
            </a>
          </div>

          <div className="bg-card rounded-2xl p-6 border border-border/50 text-center space-y-3 hover:border-primary/20 hover:shadow-lg transition-all duration-300">
            <div className="w-12 h-12 rounded-xl bg-secondary mx-auto flex items-center justify-center">
              <Mail className="w-5 h-5 text-primary" />
            </div>
            <h3 className="text-sm font-semibold text-foreground/60 uppercase tracking-wider">Email</h3>
            <a href="mailto:info@lynehampharmacy.co.uk" className="text-sm text-foreground hover:text-primary transition-colors font-medium break-all">
              info@lynehampharmacy.co.uk
            </a>
          </div>

          <div className="bg-card rounded-2xl p-6 border border-border/50 text-center space-y-3 hover:border-primary/20 hover:shadow-lg transition-all duration-300">
            <div className="w-12 h-12 rounded-xl bg-secondary mx-auto flex items-center justify-center">
              <Clock className="w-5 h-5 text-primary" />
            </div>
            <h3 className="text-sm font-semibold text-foreground/60 uppercase tracking-wider">Opening Hours</h3>
            <div className="text-sm text-foreground leading-relaxed">
              <p>Mon–Fri: 9am–6pm</p>
              <p>Sat: 9am–1:30pm</p>
              <p>Sun: Closed</p>
            </div>
          </div>
        </div>

        <div className="text-center">
          <a
            href="https://my.scripter.digital/appointment/organization/12?location_id=5"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 rounded-full bg-primary text-primary-foreground px-10 py-4 text-base font-semibold shadow-lg shadow-primary/20 hover:shadow-xl hover:shadow-primary/30 hover:scale-[1.02] transition-all duration-300"
          >
            <Calendar className="w-4 h-4" />
            Book an Appointment Online
          </a>
        </div>
      </div>
    </section>
  );
}