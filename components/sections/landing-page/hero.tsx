"use client";

import { ArrowRight } from "lucide-react";
import { motion } from "motion/react";

export function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center bg-slate-900 overflow-hidden pt-16 lg:pt-20"
    >
      {/* Background Image */}
      <div
        className="absolute inset-0 opacity-20"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1758518731457-5ef826b75b3b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxidXNpbmVzcyUyMG1lZXRpbmclMjBwcm9mZXNzaW9uYWxzfGVufDF8fHx8MTc3Mzc3NzQ0Nnww&ixlib=rb-4.1.0&q=80&w=1080')`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />

      {/* Directional gradient */}
      <div className="absolute inset-0 bg-linear-to-r from-slate-900/95 via-slate-900/80 to-slate-800/60" />

      {/* Content */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-3xl">
          {/* Label row — mirrors Team's "Our People" eyebrow */}
          <motion.div
            initial={{ opacity: 0, x: -16 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            className="flex items-center gap-2 mb-5"
          >
            <span className="w-6 h-px bg-orange-500" />
            <span className="text-orange-500 font-mono text-xs tracking-[0.2em] uppercase">
              Business Consulting
            </span>
          </motion.div>

          {/* Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.8,
              delay: 0.35,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold text-white leading-[1.05] tracking-tight mb-6"
          >
            Empowering your
            <br />
            business with{" "}
            <span className="text-orange-500">expert insights</span>
          </motion.h1>

          {/* Body */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.5, ease: [0.22, 1, 0.36, 1] }}
            className="text-slate-400 text-sm sm:text-base max-w-sm leading-relaxed mb-10 font-mono"
          >
            Innovative strategies and customised solutions to help your business
            thrive in today's competitive landscape.
          </motion.p>

          {/* CTAs — styled to match the card button system */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.7,
              delay: 0.65,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="flex flex-col sm:flex-row gap-3"
          >
            {/* Primary — orange filled */}
            <button className="flex items-center justify-center gap-2 bg-orange-500 hover:bg-orange-400 text-white px-6 py-3 rounded-lg text-[13px] font-mono tracking-wide transition-all duration-200">
              Get Started
              <ArrowRight className="w-3.5 h-3.5" />
            </button>

            {/* Secondary — card ghost style */}
            <button className="flex items-center justify-center gap-2 border border-white/10 hover:border-orange-500/50 hover:bg-orange-500/10 text-white/60 hover:text-orange-400 px-6 py-3 rounded-lg text-[13px] font-mono tracking-wide transition-all duration-200">
              Learn More
            </button>
          </motion.div>

          {/* Stats row */}
          {/* <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.7,
              delay: 0.85,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="flex gap-8 mt-16"
          >
            {[
              { value: "12+", label: "Years Experience" },
              { value: "340+", label: "Clients Served" },
              { value: "98%", label: "Satisfaction Rate" },
            ].map((stat, i) => (
              <div key={i} className="flex flex-col gap-1">
                <span className="text-2xl font-bold text-white tracking-tight">
                  {stat.value}
                </span>
                <span className="text-[10px] font-mono text-slate-500 tracking-[0.15em] uppercase">
                  {stat.label}
                </span>
              </div>
            ))}
          </motion.div> */}
        </div>
      </div>

      {/* Index watermark — decorative, mirrors card numbering aesthetic */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.2, delay: 1 }}
        className="absolute bottom-12 right-8 lg:right-16 text-white/5 font-mono text-[120px] lg:text-[180px] font-bold leading-none select-none pointer-events-none"
      >
        01
      </motion.div>

      {/* Bottom fade into next section */}
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-linear-to-t from-gray-50 to-transparent" />
    </section>
  );
}
