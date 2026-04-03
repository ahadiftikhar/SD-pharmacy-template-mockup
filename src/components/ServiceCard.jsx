"use client"

import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";

export default function ServiceCard({ title, description, image, icon: Icon }) {
  return (
    <div className="group relative bg-card rounded-2xl overflow-hidden border border-border/50 hover:border-primary/20 hover:shadow-xl hover:shadow-primary/5 transition-all duration-500">
      <div className="aspect-[4/3] overflow-hidden">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
        />
      </div>
      <div className="p-6 space-y-3">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-secondary flex items-center justify-center">
              <Icon className="w-5 h-5 text-primary" />
            </div>
            <h3 className="text-lg font-bold text-foreground">{title}</h3>
          </div>
        </div>
        <p className="text-sm text-muted-foreground leading-relaxed">{description}</p>
        <Link
          to="/services"
          className="inline-flex items-center gap-1.5 text-sm font-semibold text-primary hover:gap-2.5 transition-all duration-300 pt-1"
        >
          Learn more
          <ArrowUpRight className="w-4 h-4" />
        </Link>
      </div>
    </div>
  );
}