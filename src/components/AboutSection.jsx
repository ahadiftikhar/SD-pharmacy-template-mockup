"use client"

import { CheckCircle, ArrowRight } from "lucide-react";

const stats = [
  { value: "5★", label: "Google Rating" },
  { value: "100+", label: "Happy Patients" },
  { value: "NHS", label: "& Private Services" },
  { value: "Same Day", label: "Appointments" },
];

export default function AboutSection() {
  return (
    <section className="py-20 sm:py-28 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Image */}
          <div className="relative order-2 lg:order-1">
            <img
              src="https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=700&q=80&auto=format&fit=crop"
              alt="Lyneham Pharmacy"
              className="w-full h-[420px] sm:h-[500px] object-cover rounded-3xl shadow-xl"
            />
            {/* Stats row */}
            <div className="absolute -bottom-6 left-4 right-4 grid grid-cols-4 gap-2">
              {stats.map((s) => (
                <div key={s.label} className="bg-white/95 backdrop-blur-sm rounded-2xl p-3 text-center shadow-lg border border-border/30">
                  <p className="text-base sm:text-lg font-extrabold text-primary leading-none">{s.value}</p>
                  <p className="text-[10px] text-muted-foreground mt-1 leading-tight">{s.label}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Content */}
          <div className="space-y-6 order-1 lg:order-2">
            <div>
              <p className="text-sm font-semibold text-primary uppercase tracking-wider mb-2">About Us</p>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-foreground tracking-tight leading-tight">
                Find Out About <br />
                <span className="text-primary">Lyneham Pharmacy</span>
              </h2>
            </div>
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>
                Located within Edmonds Garage, The Green, Lyneham, Wiltshire, SN15 4PD, we are dedicated to providing convenient access to quality healthcare. We provide a wide range of innovative, high quality services and products to meet the needs of our customers.
              </p>
              <p>
                We believe in supporting our customers and empowering them to make decisions about their health and wellbeing by providing expert advice and information. Our pharmacy is well equipped with a specially designed consultation room and highly trained staff.
              </p>
            </div>
            <ul className="space-y-3">
              {[
                "Full range of private and NHS services",
                "Private travel vaccines & yellow fever vaccines",
                "Expert pharmacist-led consultations",
                "Online booking available",
              ].map((item) => (
                <li key={item} className="flex items-center gap-3 text-sm text-foreground/80 font-medium">
                  <CheckCircle className="w-4 h-4 text-primary flex-shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
            <a
              href="#services"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-primary text-primary-foreground px-8 py-4 text-base font-semibold shadow-md shadow-primary/20 hover:shadow-lg hover:shadow-primary/30 hover:scale-[1.02] transition-all duration-300 mt-2"
            >
              Our Services
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}