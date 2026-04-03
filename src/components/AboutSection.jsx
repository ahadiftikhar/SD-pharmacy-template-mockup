"use client"

import { ArrowRight } from "lucide-react";

export default function AboutSection() {
  return (
    <section className="py-16 sm:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-14 items-center">
          {/* Image */}
          <div className="order-2 lg:order-1">
            <img
              src="https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=700&q=80&auto=format&fit=crop"
              alt="Lyneham Pharmacy"
              className="w-full h-[380px] sm:h-[460px] object-cover rounded-2xl"
            />
          </div>

          {/* Content */}
          <div className="space-y-5 order-1 lg:order-2">
            <div>
              <p className="text-xs font-semibold text-primary uppercase tracking-wider mb-2">About Us</p>
              <h2 className="text-3xl sm:text-4xl font-bold text-foreground tracking-tight leading-snug">
                Find Out About<br />
                <span className="text-primary">Lyneham Pharmacy</span>
              </h2>
            </div>
            <div className="space-y-4 text-muted-foreground leading-relaxed text-sm sm:text-base">
              <p>
                Located within Edmonds Garage, The Green, Lyneham, Wiltshire, SN15 4PD, we are dedicated to providing convenient access to quality healthcare.
              </p>
              <p>
                We provide a wide range of innovative, high quality services and products to meet the needs of our customers. We believe in supporting our customers and empowering them to make decisions about their health and wellbeing by providing expert advice and information.
              </p>
              <p>
                Our pharmacy is well equipped to provide health care services with a specially designed consultation room and highly trained staff.
              </p>
            </div>
            {/* <a
              href="#services"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-primary text-primary-foreground px-7 py-3.5 text-sm font-semibold hover:opacity-90 transition-all duration-200 mt-2"
            >
              Our Services
              <ArrowRight className="w-4 h-4" />
            </a> */}
          </div>
        </div>
      </div>
    </section>
  );
}
