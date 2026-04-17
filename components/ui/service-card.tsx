"use client";
import { motion } from "motion/react";
import { cn } from "@/lib/utils";
import { Badge } from "@/components/ui/primitives";
import type { LucideIcon } from "lucide-react";

interface ServiceCardProps {
  index: number;
  tag: string;
  icon: LucideIcon;
  title: string;
  role: string;
  description: string;
  gradient?: string;
  primaryAction?: string;
  secondaryAction?: string;
  delay?: number;
}

export function ServiceCard({
  index,
  tag,
  icon: Icon,
  title,
  role,
  description,
  gradient = "from-forest-900 to-forest-700",
  primaryAction = "Learn More",
  secondaryAction,
  delay = 0,
}: ServiceCardProps) {
  const padded = String(index).padStart(2, "0");

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.6, delay, ease: [0.22, 1, 0.36, 1] }}
      className="group relative rounded-2xl overflow-hidden bg-white shadow-sm hover:shadow-xl transition-shadow duration-500 cursor-pointer"
    >
      {/* Zone 1 — Image / Band */}
      <div
        className={cn(
          "relative h-52 overflow-hidden bg-gradient-to-br",
          gradient,
        )}
      >
        {/* Abstract blobs */}
        <div className="absolute inset-0">
          <div className="absolute -top-10 -right-10 w-44 h-44 rounded-full bg-gradient-to-br from-forest-400/20 to-transparent" />
          <div className="absolute bottom-4 -left-6 w-24 h-24 rounded-full bg-gradient-to-br from-amber-400/15 to-transparent" />
        </div>

        {/* Bottom gradient into footer */}
        <div className="absolute inset-0 bg-gradient-to-t from-forest-900/70 via-transparent to-transparent" />

        {/* Badge */}
        <div className="absolute top-4 left-4">
          <Badge variant="light">{tag}</Badge>
        </div>

        {/* Index */}
        <span className="absolute top-4 right-4 font-mono text-xs text-white/35">
          {padded}
        </span>

        {/* Icon badge */}
        <div className="absolute bottom-4 left-4 bg-gradient-to-br from-forest-500 to-amber-400 p-2.5 rounded-xl shadow-lg">
          <Icon className="w-4 h-4 text-white" />
        </div>
      </div>

      {/* Zone 2 — Accent Line */}
      <div className="absolute top-52 left-5 right-5 h-px bg-gradient-to-r from-transparent via-forest-500/70 to-transparent scale-x-0 group-hover:scale-x-100 transition-transform duration-500" />

      {/* Zone 3 — Dark Footer */}
      <div className="bg-forest-900 p-5 relative">
        <h3 className="text-[15px] font-semibold text-white leading-snug">
          {title}
        </h3>
        <p className="font-mono text-xs text-forest-400 mt-0.5">{role}</p>
        <p className="font-mono text-xs text-white/40 leading-relaxed mt-2">
          {description}
        </p>
        <div className="flex gap-2 mt-3 translate-y-2 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-200">
          <button className="font-mono text-[11px] uppercase tracking-wider border border-forest-500 bg-forest-500 text-white rounded-lg px-3 py-1.5 hover:bg-forest-400 transition-colors duration-200">
            {primaryAction}
          </button>
          {secondaryAction && (
            <button
              className="font-mono text-[11px] uppercase tracking-wider border border-white/15 text-white/50 rounded-lg px-3 py-1.5 hover:border-forest-500/50 hover:bg-forest-500/10 hover:text-forest-300 transition-all duration-200"
              style={{ transitionDelay: "60ms" }}
            >
              {secondaryAction}
            </button>
          )}
        </div>
      </div>
    </motion.div>
  );
}
