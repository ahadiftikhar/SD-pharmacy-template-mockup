"use client"

import Link from "next/link";
import { ArrowRight, Award, Users, Clock, Heart } from "lucide-react";

const values = [
  {
    icon: Heart,
    title: "Compassionate Care",
    description: "Every patient is treated with empathy, dignity, and genuine warmth.",
  },
  {
    icon: Award,
    title: "Clinical Excellence",
    description: "Our team maintains the highest standards of pharmaceutical knowledge and practice.",
  },
  {
    icon: Users,
    title: "Community Focus",
    description: "We're not just a pharmacy — we're neighbours, supporters, and friends to Lyneham.",
  },
  {
    icon: Clock,
    title: "Reliability",
    description: "You can count on us for timely, accurate, and consistent healthcare services.",
  },
];

export default function About() {
  return (
    <div>
      {/* Hero */}
      <section className="bg-gradient-to-br from-secondary/30 via-background to-background py-16 sm:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-sm font-semibold text-primary uppercase tracking-wider mb-3">About Us</p>
          <h1 className="text-4xl sm:text-5xl font-extrabold text-foreground tracking-tight">
            Rooted in Care, Built on Trust
          </h1>
          <p className="mt-6 text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            For over 20 years, Lyneham Pharmacy has been the health hub of our community — 
            providing expert care with a personal touch.
          </p>
        </div>
      </section>

      {/* Story */}
      <section className="py-20 sm:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <img
                src="https://media.base44.com/images/public/69cfa15871c422a84f4ac36c/4f0ac1bbf_generated_aeca78c6.png"
                alt="Our pharmacy team"
                className="w-full h-[400px] object-cover rounded-3xl shadow-xl"
              />
            </div>
            <div className="space-y-6">
              <h2 className="text-3xl sm:text-4xl font-extrabold text-foreground tracking-tight">
                Our Story
              </h2>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  Lyneham Pharmacy was established with a simple mission: to provide the highest quality 
                  pharmaceutical care to the people of Lyneham and the surrounding Wiltshire villages.
                </p>
                <p>
                  Over two decades later, that mission hasn't changed. What has evolved is the breadth 
                  of services we offer, from NHS prescriptions and vaccinations to private health consultations 
                  and travel health advice.
                </p>
                <p>
                  Our team of qualified pharmacists and healthcare professionals are passionate about 
                  making a positive difference in the lives of our patients. We take the time to listen, 
                  advise, and support — because to us, you're never just a prescription number.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 sm:py-28 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <p className="text-sm font-semibold text-primary uppercase tracking-wider mb-3">Our Values</p>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-foreground tracking-tight">
              What We Stand For
            </h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value) => (
              <div key={value.title} className="text-center space-y-4">
                <div className="w-16 h-16 rounded-2xl bg-secondary flex items-center justify-center mx-auto">
                  <value.icon className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-lg font-bold text-foreground">{value.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 sm:py-28">
        <div className="max-w-3xl mx-auto px-4 text-center space-y-8">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-foreground tracking-tight">
            Come Say Hello
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            We'd love to meet you. Visit us at The Green in Lyneham, or give us a call 
            to find out how we can help with your healthcare needs.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center justify-center gap-2 rounded-full bg-primary text-primary-foreground px-8 py-4 text-base font-semibold shadow-lg shadow-primary/20 hover:shadow-xl hover:shadow-primary/30 hover:scale-[1.02] transition-all duration-300"
          >
            Get in Touch
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>
    </div>
  );
}