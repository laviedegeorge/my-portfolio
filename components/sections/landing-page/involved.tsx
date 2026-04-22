"use client";
import { motion } from "motion/react";
import { Users, Briefcase, Heart, Calendar, ArrowRight } from "lucide-react";
import { SectionHeader } from "@/components/ui/primitives";

const involvements = [
  {
    icon: Users,
    title: "Volunteer",
    description:
      "Join our field teams, help with workshops, or contribute your professional skills to community health programs across Nigeria.",
    cta: "Apply Now",
  },
  {
    icon: Briefcase,
    title: "Partner With Us",
    description:
      "NGOs, government agencies, and corporate partners — let's collaborate to expand our reach and deepen our community impact.",
    cta: "Explore Partnership",
  },
  {
    icon: Heart,
    title: "Donate",
    description:
      "Every contribution funds health workshops, outreach visits, and digital health tools that directly reach underserved Nigerians.",
    cta: "Give Today",
  },
  {
    icon: Calendar,
    title: "Attend Programs",
    description:
      "Join workshops, health screenings, webinars, and community events happening near you. All are free and open to the public.",
    cta: "Find Events",
  },
];

const ease = [0.22, 1, 0.36, 1] as const;

export default function Involved() {
  return (
    <section
      id="involved"
      className="relative bg-forest-900 py-24 lg:py-36 overflow-hidden"
    >
      {/* Background */}
      <div className="absolute inset-0 dot-grid pointer-events-none" />
      <div className="absolute inset-0 bg-radial-[ellipse_60%_50%_at_50%_100%] from-forest-500/15 to-transparent pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7, ease }}
        >
          <SectionHeader
            eyebrow="Join The Movement"
            title={
              <>
                There are many ways
                <br />
                to <span className="text-forest-300">make a difference</span>
              </>
            }
            description="Whether you have time, skills, resources, or a network — there is a place for you in the ComHealth Nigeria family."
            light
          />
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-10">
          {involvements.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.08, ease }}
              className="group relative bg-white/4 hover:bg-white/8 border border-white/7 hover:border-forest-500/35 rounded-2xl p-6 transition-all duration-300 cursor-pointer"
            >
              <span className="absolute top-4 right-5 font-mono text-[10px] text-white/20">
                {String(i + 1).padStart(2, "0")}
              </span>

              <div className="inline-flex bg-linear-to-br from-forest-500 to-amber-400 p-2.5 rounded-xl mb-4 shadow-lg">
                <item.icon className="w-4.5 h-4.5 text-white" />
              </div>

              <h3 className="text-[15px] font-semibold text-white mb-2">
                {item.title}
              </h3>
              <p className="font-mono text-xs text-white/40 leading-relaxed mb-4">
                {item.description}
              </p>

              <button className="flex items-center gap-1.5 font-mono text-[11px] tracking-wider uppercase text-forest-400 hover:text-forest-300 transition-colors group-hover:gap-3 duration-200">
                {item.cta}
                <ArrowRight className="w-3 h-3" />
              </button>
            </motion.div>
          ))}
        </div>

        {/* CTA Banner */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.3, ease }}
          className="bg-forest-500/12 border border-forest-500/25 rounded-3xl p-8 lg:p-10 flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6"
        >
          <div>
            <p className="font-mono text-[10px] tracking-[0.18em] uppercase text-forest-400 mb-2">
              Get In Touch
            </p>
            <h3 className="font-serif text-2xl lg:text-3xl font-semibold text-white leading-tight">
              Ready to bring ComHealth
              <br />
              to your community?
            </h3>
          </div>
          <div className="flex flex-wrap gap-3 shrink-0">
            <a
              href="#contact"
              className="inline-flex items-center gap-2 font-mono text-[12px] tracking-wider uppercase bg-forest-500 text-white px-6 py-3 rounded-xl hover:bg-forest-400 transition-all duration-200 hover:-translate-y-0.5 shadow-lg shadow-forest-500/20"
            >
              Contact Us
              <ArrowRight className="w-3.5 h-3.5" />
            </a>
            <a
              href="https://wa.me/2348000000000"
              className="inline-flex items-center gap-2 font-mono text-[12px] tracking-wider uppercase border border-white/15 text-white/60 px-6 py-3 rounded-xl hover:border-forest-500/50 hover:bg-forest-500/10 hover:text-forest-300 transition-all duration-200"
            >
              WhatsApp Us
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
