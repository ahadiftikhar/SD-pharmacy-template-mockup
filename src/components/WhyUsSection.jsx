"use client"

const features = [
  {
    emoji: "📅",
    title: "Appointments Six Days a Week",
    description: "Monday to Saturday, we have the appointment time you need.",
  },
  {
    emoji: "✅",
    title: "Approved Yellow Fever Centre",
    description: "Proud to be an accredited Yellow Fever vaccination centre.",
  },
  {
    emoji: "💉",
    title: "All Vaccines, All the Time",
    description: "We pride ourselves on keeping every vaccine in stock at all times.",
  },
  {
    emoji: "⭐",
    title: "5-Star Reviews",
    description: "Our patients love the quality of care and service we provide.",
  },
  {
    emoji: "🩺",
    title: "Expert Pharmacist-Led Clinic",
    description: "Highly trained pharmacists with years of travel health expertise.",
  },
  {
    emoji: "🏥",
    title: "NHS & Private Services",
    description: "Full range of NHS and private services under one roof.",
  },
];

export default function WhyUsSection() {
  return (
    <section className="py-20 sm:py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <p className="text-sm font-semibold text-primary uppercase tracking-wider mb-3">Our Strengths</p>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-foreground tracking-tight">
            Why We Lead in Wiltshire for Travel Vaccines
          </h2>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {features.map((f) => (
            <div
              key={f.title}
              className="group bg-card rounded-2xl p-8 border border-border/50 hover:border-primary/20 hover:shadow-xl hover:shadow-primary/5 transition-all duration-500 hover:-translate-y-1"
            >
              <div className="text-4xl mb-5">{f.emoji}</div>
              <h3 className="text-lg font-bold text-foreground mb-2">{f.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{f.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}