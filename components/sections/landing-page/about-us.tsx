"use client";

import { motion } from "motion/react";
import { SectionHeader } from "@/components/ui/primitives";

const values = [
  "Community-First Approach",
  "Evidence-Based Education",
  "Inclusive & Accessible",
  "Systems-Level Advocacy",
  "Digital Health Innovation",
];

const ease = [0.22, 1, 0.36, 1] as const;

export default function About() {
  return (
    <section id="about" className="bg-forest-50 py-24 lg:py-36">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7, ease }}
        >
          <SectionHeader
            eyebrow="Who We Are"
            title={
              <>
                A community-driven
                <br />
                <span className="text-forest-500">health movement</span>
              </>
            }
            description="ComHealth Nigeria bridges the gap between quality healthcare and underserved communities — through education, outreach, and advocacy."
          />
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left — text + values */}
          <div>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, ease }}
              className="text-gray-500 text-base leading-relaxed mb-4"
            >
              Founded to combat the rising tide of preventable diseases,
              ComHealth Nigeria delivers grassroots health literacy, NCD
              prevention, and digital health tools to communities that need them
              most.
            </motion.p>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.1, ease }}
              className="text-gray-500 text-base leading-relaxed mb-8"
            >
              From rural villages to urban slums, we meet people where they are
              — with warmth, trust, and evidence-based care.
            </motion.p>

            <div className="flex flex-col gap-2">
              {values.map((v, i) => (
                <motion.div
                  key={v}
                  initial={{ opacity: 0, x: -12 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: i * 0.08, ease }}
                  className="group flex items-center justify-between px-4 py-3 border border-transparent hover:border-forest-200 hover:bg-white rounded-xl transition-all duration-200 cursor-pointer"
                >
                  <span className="text-sm font-medium text-gray-800">{v}</span>
                  <span className="font-mono text-[11px] text-forest-500/60 group-hover:text-forest-500 transition-colors">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Right — dark quote card */}
          <motion.div
            initial={{ opacity: 0, x: 32 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2, ease }}
          >
            <div className="relative bg-forest-900 rounded-3xl overflow-hidden p-8 shadow-2xl">
              {/* Blob */}
              <div className="absolute -top-10 -right-10 w-48 h-48 rounded-full bg-radial from-forest-500/25 to-transparent pointer-events-none" />

              <p className="font-serif text-xl font-light italic text-white/90 leading-relaxed mb-6 relative z-10">
                "Good health is not a privilege — it is the foundation of every
                thriving community."
              </p>
              <p className="font-mono text-xs tracking-[0.15em] uppercase text-forest-400">
                — ComHealth Nigeria Mission Statement
              </p>

              {/* Impact badges */}
              <div className="grid grid-cols-3 gap-3 mt-8">
                {[
                  { num: "50k+", label: "Lives Reached" },
                  { num: "120+", label: "Communities" },
                  { num: "8+", label: "States" },
                ].map((s) => (
                  <div
                    key={s.label}
                    className="bg-forest-500/12 border border-forest-500/25 rounded-xl p-3"
                  >
                    <div className="font-serif text-2xl font-bold text-white leading-none">
                      {s.num}
                    </div>
                    <div className="font-mono text-[10px] tracking-widest uppercase text-white/40 mt-1">
                      {s.label}
                    </div>
                  </div>
                ))}
              </div>

              {/* Bottom accent bar */}
              <div className="absolute bottom-0 left-0 right-0 h-[3px] bg-linear-to-r from-forest-500 to-amber-400" />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
