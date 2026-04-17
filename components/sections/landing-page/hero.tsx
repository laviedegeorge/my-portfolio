"use client";
import { motion } from "motion/react";
import { ArrowRight, ChevronDown } from "lucide-react";
import { Eyebrow } from "@/components/ui/primitives";
import Link from "next/link";

const stats = [
  { num: "50k+", label: "Lives Reached" },
  { num: "120+", label: "Communities" },
  { num: "8+", label: "States Active" },
];

const activePrograms = [
  { label: "NCD Prevention Clinics", color: "#22a049" },
  { label: "Youth Wellness Workshops", color: "#f59e0b" },
  { label: "Rural Outreach Visits", color: "#22a049" },
  { label: "Digital Health Modules", color: "#f59e0b" },
];

const ease = [0.22, 1, 0.36, 1] as const;

export default function Hero() {
  return (
    <section className="relative min-h-screen bg-forest-900 flex items-center overflow-hidden pt-[68px]">
      {/* Background radial gradients */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0 bg-radial-[ellipse_80%_60%_at_70%_40%] from-forest-500/18 via-transparent to-transparent" />
        <div className="absolute inset-0 bg-radial-[ellipse_40%_40%_at_10%_80%] from-amber-500/12 via-transparent to-transparent" />
      </div>
      {/* Dot grid */}
      <div className="absolute inset-0 dot-grid pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left content */}
          <div>
            <motion.div
              initial={{ opacity: 0, x: -16 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, ease }}
            >
              <Eyebrow label="Community Health Nigeria" light />
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.25, ease }}
              className="font-serif text-5xl sm:text-6xl lg:text-7xl font-bold leading-[1.02] tracking-tight text-white mt-2 mb-6"
            >
              Health for <span className="text-forest-400">Every</span>
              <br />
              Nigerian <em className="text-amber-300 not-italic">Community</em>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.45, ease }}
              className="text-white/65 text-lg leading-relaxed max-w-lg mb-8"
            >
              Empowering underserved communities through preventive healthcare,
              education, and access to life-changing wellness programs. Building
              healthier futures, together.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.6, ease }}
              className="flex flex-wrap gap-3"
            >
              <Link
                href="#programs"
                className="inline-flex items-center gap-2 font-mono text-[13px] tracking-wider uppercase bg-forest-500 text-white px-6 py-3.5 rounded-xl hover:bg-forest-400 transition-all duration-200 shadow-lg shadow-forest-500/25 hover:shadow-forest-400/35 hover:-translate-y-0.5"
              >
                Explore Programs
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                href="#about"
                className="inline-flex items-center gap-2 font-mono text-[13px] tracking-wider uppercase border border-white/15 text-white/60 px-6 py-3.5 rounded-xl hover:border-forest-500/50 hover:bg-forest-500/10 hover:text-forest-300 transition-all duration-200"
              >
                Our Mission
              </Link>
            </motion.div>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.8, ease }}
              className="grid grid-cols-3 gap-4 mt-12 max-w-sm"
            >
              {stats.map((s) => (
                <div
                  key={s.label}
                  className="border-l-2 border-forest-500/35 pl-3"
                >
                  <div className="font-serif text-2xl font-bold text-white leading-none">
                    {s.num}
                  </div>
                  <div className="font-mono text-[10px] tracking-[0.1em] uppercase text-white/40 mt-1">
                    {s.label}
                  </div>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Right — animated panel */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.15, ease }}
            className="hidden lg:flex justify-center"
          >
            <div className="relative w-[420px]">
              {/* Animated skewed border behind */}
              <div className="absolute inset-0 border border-forest-500/25 rounded-3xl bg-gradient-to-br from-forest-500/8 to-amber-400/5 animate-skew-rotate" />
              <div className="absolute inset-0 -rotate-1 scale-[1.01] border border-white/5 rounded-3xl" />

              {/* Main card */}
              <div className="relative bg-gradient-to-br from-forest-800 to-forest-900 rounded-3xl border border-white/8 overflow-hidden p-6 shadow-2xl">
                {/* Top badge */}
                <div className="bg-white/6 border border-white/10 rounded-2xl p-5 mb-4 text-center">
                  <div className="text-5xl mb-1">🌿</div>
                  <div className="font-mono text-[10px] tracking-[0.2em] uppercase text-white/40 mt-1">
                    Health · Community · Hope
                  </div>
                </div>

                {/* Waveform */}
                <div className="flex items-center justify-center gap-0.5 h-12 mb-4 px-4">
                  {Array.from({ length: 20 }).map((_, i) => (
                    <div
                      key={i}
                      className="w-1.5 rounded-sm bg-forest-400/60 animate-waveform"
                      style={{
                        animationDelay: `${(i % 5) * 0.18}s`,
                        height: `${8 + Math.sin(i * 0.8) * 12}px`,
                      }}
                    />
                  ))}
                </div>

                {/* Active Programs */}
                <div className="bg-white/5 border border-white/8 rounded-xl p-4">
                  <div className="font-mono text-[10px] tracking-[0.15em] uppercase text-white/30 mb-3">
                    Active Programs
                  </div>
                  <div className="flex flex-col gap-2.5">
                    {activePrograms.map((p, i) => (
                      <motion.div
                        key={p.label}
                        initial={{ opacity: 0, x: -8 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.5 + i * 0.1, ease }}
                        className="flex items-center gap-2.5"
                      >
                        <div
                          className="w-1.5 h-1.5 rounded-full flex-shrink-0"
                          style={{ background: p.color }}
                        />
                        <span className="font-mono text-xs text-white/50">
                          {p.label}
                        </span>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Scroll hint */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 text-white/25"
        >
          <span className="font-mono text-[10px] tracking-widest uppercase">
            Scroll
          </span>
          <ChevronDown className="w-4 h-4 animate-bounce" />
        </motion.div>
      </div>
    </section>
  );
}
