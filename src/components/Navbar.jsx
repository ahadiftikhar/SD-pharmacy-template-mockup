"use client"

import { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X, Phone, MapPin, ChevronDown, Facebook, Instagram, Youtube } from "lucide-react";

const navItems = [
  { label: "Home", href: "/" },
  {
    label: "Services",
    href: "#services",
    dropdown: [
      { label: "Vitamin B12 Injection", href: "https://lynehampharmacy.co.uk/vitamin-b12-injection-swindon/" },
      { label: "Speciality Vaccine", href: "https://lynehampharmacy.co.uk/speciality-vaccine-wiltshire/" },
      { label: "Hajj & Umrah Vaccine", href: "https://lynehampharmacy.co.uk/hajj-umrah-vaccine-wiltshire/" },
      { label: "Covid Vaccination Centre", href: "https://lynehampharmacy.co.uk/covid-vaccination-centre/" },
      { label: "Antimalarials", href: "https://lynehampharmacy.co.uk/antimalarials-wiltshire/" },
    ],
  },
  {
    label: "Vaccinations",
    href: "#travel",
    dropdown: [
      { label: "Travel Vaccines", href: "https://lynehampharmacy.co.uk/travel-clinic/" },
      { label: "Yellow Fever", href: "https://lynehampharmacy.co.uk/yellow-fever-vaccine/" },
      { label: "Flu Vaccination", href: "#" },
    ],
  },
  {
    label: "Pharmacy First",
    href: "#pharmacy-first",
    dropdown: [
      { label: "Sore Throat", href: "https://lynehampharmacy.co.uk/pharmacy-first-sore-throat-wiltshire/" },
      { label: "Sinusitis", href: "#" },
      { label: "Earache", href: "#" },
    ],
  },
  { label: "Contact Us", href: "#contact" },
];

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(null);

  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      {/* Top bar */}
      <div className="bg-primary text-primary-foreground text-xs">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-9 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <a
              href="https://maps.google.com/?q=Edmonds+Garage+The+Green+Lyneham+Wiltshire+SN15+4PD"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 text-white/80 hover:text-white transition-colors"
            >
              <MapPin className="w-3 h-3" />
              Edmonds Garage, The Green, Lyneham, Wiltshire, SN15 4PD
            </a>
          </div>
          <div className="flex items-center gap-4">
            <a href="tel:01249892813" className="flex items-center gap-1.5 text-white/80 hover:text-white transition-colors">
              <Phone className="w-3 h-3" />
              0124 9892 813
            </a>
            <div className="hidden sm:flex items-center gap-3 pl-3 border-l border-white/20">
              <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer" className="text-white/70 hover:text-white transition-colors">
                <Facebook className="w-3.5 h-3.5" />
              </a>
              <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer" className="text-white/70 hover:text-white transition-colors">
                <Instagram className="w-3.5 h-3.5" />
              </a>
              <a href="https://www.youtube.com" target="_blank" rel="noopener noreferrer" className="text-white/70 hover:text-white transition-colors">
                <Youtube className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Main nav */}
      <nav className="bg-white/95 backdrop-blur-xl border-b border-border/50 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 lg:h-20">
            {/* Logo */}
            <Link to="/" className="flex-shrink-0">
              <img
                src="https://lynehampharmacy.co.uk/wp-content/uploads/2022/08/lynehampharmacy-768x249.png"
                alt="Lyneham Pharmacy"
                className="h-10 sm:h-12 lg:h-14 w-auto"
              />
            </Link>

            {/* Desktop nav */}
            <div className="hidden lg:flex items-center gap-1">
              {navItems.map((item) => (
                <div
                  key={item.label}
                  className="relative group"
                  onMouseEnter={() => item.dropdown && setOpenDropdown(item.label)}
                  onMouseLeave={() => setOpenDropdown(null)}
                >
                  {item.href.startsWith("#") ? (
                    <a
                      href={item.href}
                      className="flex items-center gap-1 px-3 py-2 text-sm font-medium text-foreground/70 hover:text-primary transition-colors duration-200 rounded-lg hover:bg-secondary/40"
                    >
                      {item.label}
                      {item.dropdown && <ChevronDown className="w-3.5 h-3.5 opacity-60" />}
                    </a>
                  ) : (
                    <Link
                      to={item.href}
                      className="flex items-center gap-1 px-3 py-2 text-sm font-medium text-foreground/70 hover:text-primary transition-colors duration-200 rounded-lg hover:bg-secondary/40"
                    >
                      {item.label}
                    </Link>
                  )}
                  {item.dropdown && openDropdown === item.label && (
                    <div className="absolute top-full left-0 mt-1 w-52 bg-white rounded-xl border border-border shadow-xl py-1 z-50">
                      {item.dropdown.map((sub) => (
                        <a
                          key={sub.label}
                          href={sub.href}
                          target={sub.href.startsWith("http") ? "_blank" : undefined}
                          rel="noopener noreferrer"
                          className="block px-4 py-2.5 text-sm text-foreground/70 hover:text-primary hover:bg-secondary/40 transition-colors"
                        >
                          {sub.label}
                        </a>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>

            {/* Desktop CTAs */}
            <div className="hidden lg:flex items-center gap-3">
              <a
                href="tel:01249892813"
                className="inline-flex items-center justify-center gap-2 rounded-full border-2 border-primary/30 text-primary px-5 py-2 text-sm font-semibold hover:bg-secondary/50 hover:border-primary/50 transition-all duration-300"
              >
                <Phone className="w-3.5 h-3.5" />
                Call Us
              </a>
              <a
                href="https://my.scripter.digital/appointment/organization/12?location_id=5"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center rounded-full bg-primary text-primary-foreground px-5 py-2 text-sm font-semibold shadow-md shadow-primary/25 hover:shadow-lg hover:shadow-primary/35 hover:scale-[1.02] transition-all duration-300"
              >
                Book Now
              </a>
            </div>

            {/* Mobile toggle */}
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="lg:hidden p-2 rounded-lg hover:bg-muted transition-colors"
            >
              {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        {mobileOpen && (
          <div className="lg:hidden border-t border-border/50 bg-white animate-in slide-in-from-top-2">
            <div className="px-4 py-4 space-y-1 max-h-[75vh] overflow-y-auto">
              {navItems.map((item) => (
                <div key={item.label}>
                  {item.href.startsWith("#") ? (
                    <a
                      href={item.href}
                      onClick={() => setMobileOpen(false)}
                      className="block px-4 py-3 text-base font-medium text-foreground/80 hover:text-primary hover:bg-secondary/40 rounded-xl transition-all"
                    >
                      {item.label}
                    </a>
                  ) : (
                    <Link
                      to={item.href}
                      onClick={() => setMobileOpen(false)}
                      className="block px-4 py-3 text-base font-medium text-foreground/80 hover:text-primary hover:bg-secondary/40 rounded-xl transition-all"
                    >
                      {item.label}
                    </Link>
                  )}
                  {item.dropdown && (
                    <div className="ml-4 mt-1 space-y-1">
                      {item.dropdown.map((sub) => (
                        <a
                          key={sub.label}
                          href={sub.href}
                          target={sub.href.startsWith("http") ? "_blank" : undefined}
                          rel="noopener noreferrer"
                          className="block px-4 py-2 text-sm text-muted-foreground hover:text-primary hover:bg-secondary/40 rounded-lg transition-all"
                        >
                          {sub.label}
                        </a>
                      ))}
                    </div>
                  )}
                </div>
              ))}
              <div className="pt-4 border-t border-border/50 space-y-3">
                <a
                  href="tel:01249892813"
                  className="flex items-center justify-center gap-2 rounded-full border-2 border-primary/30 text-primary px-6 py-3 text-base font-semibold w-full"
                >
                  <Phone className="w-4 h-4" />
                  Call Us
                </a>
                <a
                  href="https://my.scripter.digital/appointment/organization/12?location_id=5"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center rounded-full bg-primary text-primary-foreground px-6 py-3 text-base font-semibold w-full shadow-md"
                >
                  Book Now
                </a>
              </div>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}