"use client";
import { motion } from "motion/react";
import { Ban, Heart, Lightbulb } from "lucide-react";
import { SectionHeader } from "@/components/ui/primitives";

const cards = [
  {
    icon: Ban,
    title: "Tobacco & Vape Cessation",
    description:
      "Evidence-based cessation programs, group support sessions, and digital follow-up tools to help community members quit tobacco and vaping for good.",
  },
  {
    icon: Heart,
    title: "Nutrition & Fitness Education",
    description:
      "Culturally relevant nutrition guides, affordable meal planning, and community fitness programs designed for Nigerian lifestyles and food traditions.",
  },
  {
    icon: Lightbulb,
    title: "Alcohol Harm Reduction",
    description:
      "Community awareness programs on alcohol's health impact, low-risk drinking education, and referral pathways to counseling and support services.",
  },
];

const ease = [0.22, 1, 0.36, 1] as const;

export default function NCD() {
  return (
    <section className="relative bg-forest-900 py-24 lg:py-36 overflow-hidden">
      <div className="absolute inset-0 dot-grid pointer-events-none" />
      <div className="absolute inset-0 bg-radial-[ellipse_70%_50%_at_50%_100%] from-forest-500/10 to-transparent pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7, ease }}
        >
          <SectionHeader
            eyebrow="NCD Prevention"
            title={
              <>
                Fighting chronic disease
                <br />
                <span className="text-forest-300">at the source</span>
              </>
            }
            description="Non-communicable diseases account for over 29% of deaths in Nigeria. We're changing that — one community at a time."
            light
          />
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {cards.map((card, i) => (
            <motion.div
              key={card.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.1, ease }}
              className="group relative bg-white/4 hover:bg-white/8 border border-white/8 hover:border-forest-500/30 rounded-2xl p-6 transition-all duration-300"
            >
              {/* Hover accent line */}
              <div className="absolute top-0 left-4 right-4 h-px bg-linear-to-r from-transparent via-forest-500/60 to-transparent scale-x-0 group-hover:scale-x-100 transition-transform duration-400" />

              <div className="inline-flex bg-linear-to-br from-forest-500 to-amber-400 p-2.5 rounded-xl mb-4 shadow-lg">
                <card.icon className="w-5 h-5 text-white" />
              </div>
              <h3 className="text-[15px] font-semibold text-white mb-2 leading-snug">
                {card.title}
              </h3>
              <p className="font-mono text-xs text-white/45 leading-relaxed">
                {card.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
