"use client";
import { motion } from "motion/react";
import { SectionHeader } from "@/components/ui/primitives";

const partners = [
  { name: "Federal Ministry of Health", abbr: "FMoH", type: "Government" },
  { name: "WHO Nigeria", abbr: "WHO", type: "UN Agency" },
  { name: "UNICEF Nigeria", abbr: "UNICEF", type: "UN Agency" },
  { name: "Gates Foundation", abbr: "BMGF", type: "Philanthropy" },
  { name: "Nigeria CDC", abbr: "NCDC", type: "Government" },
  { name: "USAID Nigeria", abbr: "USAID", type: "Development" },
];

const trustStats = [
  { value: "100%", label: "Free Programs" },
  { value: "A+", label: "Transparency Rating" },
  { value: "12+", label: "Partner Organisations" },
  { value: "2019", label: "Founded" },
];

const ease = [0.22, 1, 0.36, 1] as const;

export default function Partners() {
  return (
    <section className="bg-white py-24 lg:py-36">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7, ease }}
        >
          <SectionHeader
            eyebrow="Trust & Credibility"
            title={
              <>
                Partners who believe
                <br />
                in <span className="text-forest-500">our mission</span>
              </>
            }
            description="We work alongside government agencies, global health bodies, and philanthropic organisations to scale our impact."
          />
        </motion.div>

        {/* Partner logos grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4 mb-16">
          {partners.map((p, i) => (
            <motion.div
              key={p.name}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.07, ease }}
              className="group flex flex-col items-center justify-center gap-2 p-5 border border-gray-100 hover:border-forest-200 hover:bg-forest-50 rounded-2xl transition-all duration-300 cursor-pointer hover:-translate-y-1 hover:shadow-lg hover:shadow-forest-500/5"
            >
              <div className="w-12 h-12 bg-linear-to-br from-forest-900 to-forest-700 rounded-xl flex items-center justify-center shadow-md group-hover:from-forest-700 group-hover:to-forest-500 transition-all duration-300">
                <span className="font-mono text-[10px] font-bold text-forest-300 tracking-wider">
                  {p.abbr}
                </span>
              </div>
              <span className="font-mono text-[10px] text-gray-500 text-center leading-tight tracking-wide">
                {p.name}
              </span>
              <span className="font-mono text-[9px] uppercase tracking-[0.12em] text-forest-500/70 bg-forest-50 border border-forest-100 rounded-full px-2 py-0.5">
                {p.type}
              </span>
            </motion.div>
          ))}
        </div>

        {/* Trust stats strip */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.3, ease }}
          className="grid grid-cols-2 lg:grid-cols-4 gap-px bg-forest-100 rounded-2xl overflow-hidden"
        >
          {trustStats.map((s) => (
            <div
              key={s.label}
              className="bg-white flex flex-col items-center justify-center py-8 px-4 text-center"
            >
              <div className="font-serif text-3xl font-bold text-forest-900 leading-none">
                {s.value}
              </div>
              <div className="font-mono text-[10px] tracking-[0.12em] uppercase text-gray-500 mt-2">
                {s.label}
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
