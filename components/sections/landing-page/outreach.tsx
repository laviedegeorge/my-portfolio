"use client";
import { motion } from "motion/react";
import { SectionHeader } from "@/components/ui/primitives";

const outreachItems = [
  { name: "Rural Community Visits", tag: "Ongoing", color: "#22a049" },
  { name: "Urban Slum Initiatives", tag: "Active", color: "#f59e0b" },
  { name: "Youth Engagement Programs", tag: "Expanding", color: "#22a049" },
  { name: "School Health Campaigns", tag: "Seasonal", color: "#f59e0b" },
  { name: "Market & Public Space Events", tag: "Monthly", color: "#22a049" },
  { name: "Women's Health Programs", tag: "Weekly", color: "#f59e0b" },
];

const reachBars = [
  { label: "Health Literacy Coverage", pct: 78 },
  { label: "NCD Screening Reach", pct: 61 },
  { label: "Youth Program Enrollment", pct: 85 },
  { label: "Rural Outreach Visits", pct: 54 },
];

const ease = [0.22, 1, 0.36, 1] as const;

export default function Outreach() {
  return (
    <section className="bg-forest-50 py-24 lg:py-36">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7, ease }}
        >
          <SectionHeader
            eyebrow="Where We Work"
            title={
              <>
                Reaching every
                <br />
                <span className="text-forest-500">corner of Nigeria</span>
              </>
            }
            description="From coastal fishing communities to northern rural settlements — our boots-on-ground outreach leaves no one behind."
          />
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Outreach list */}
          <div className="flex flex-col gap-2">
            {outreachItems.map((item, i) => (
              <motion.div
                key={item.name}
                initial={{ opacity: 0, x: -12 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.07, ease }}
                className="group flex items-center justify-between px-4 py-3.5 border border-transparent hover:border-forest-200 hover:bg-white hover:shadow-sm rounded-xl transition-all duration-200 cursor-pointer"
              >
                <div className="flex items-center gap-3">
                  <div
                    className="w-2 h-2 rounded-full shrink-0"
                    style={{ background: item.color }}
                  />
                  <span className="text-sm font-medium text-gray-800">
                    {item.name}
                  </span>
                </div>
                <span className="font-mono text-[10px] tracking-[0.12em] uppercase text-forest-500">
                  {item.tag}
                </span>
              </motion.div>
            ))}
          </div>

          {/* Reach visual */}
          <motion.div
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2, ease }}
            className="relative bg-forest-900 rounded-3xl p-8 overflow-hidden"
          >
            <div className="absolute -top-12 -right-12 w-48 h-48 rounded-full bg-radial from-forest-500/20 to-transparent pointer-events-none" />

            <h3 className="font-serif text-2xl font-semibold text-white leading-snug mb-3 relative z-10">
              Reaching the unreached —{" "}
              <span className="text-forest-400">
                8 states, 120+ communities
              </span>
            </h3>
            <p className="font-mono text-xs text-white/45 leading-relaxed mb-8">
              Our field teams travel to where healthcare systems have
              historically failed — bringing trust, knowledge, and connection.
            </p>

            <div className="flex flex-col gap-5">
              {reachBars.map((bar, i) => (
                <motion.div
                  key={bar.label}
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3 + i * 0.1, ease }}
                >
                  <div className="flex justify-between font-mono text-[10px] text-white/35 mb-1.5">
                    <span>{bar.label}</span>
                    <span>{bar.pct}%</span>
                  </div>
                  <div className="h-1.5 bg-white/5 rounded-full overflow-hidden">
                    <motion.div
                      className="h-full rounded-full bg-linear-to-r from-forest-500 to-amber-400"
                      initial={{ width: 0 }}
                      whileInView={{ width: `${bar.pct}%` }}
                      viewport={{ once: true }}
                      transition={{
                        duration: 1.2,
                        delay: 0.4 + i * 0.1,
                        ease: [0.22, 1, 0.36, 1],
                      }}
                    />
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
