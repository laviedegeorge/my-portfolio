import { Heart, Users, Lightbulb, Shield, Target } from "lucide-react";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";

const values = [
  {
    icon: Heart,
    label: "Integrity",
    letter: "I",
    tag: "Principle",
    index: "01",
    color: "from-red-500 to-pink-500",
    bgColor: "bg-gradient-to-br from-red-500 to-pink-500",
    description:
      "Operating with honesty and strong moral principles in all our actions.",
  },
  {
    icon: Users,
    label: "Collaboration",
    letter: "C",
    tag: "Culture",
    index: "02",
    color: "from-blue-500 to-cyan-500",
    bgColor: "bg-gradient-to-br from-blue-500 to-cyan-500",
    description:
      "Working together to achieve shared goals and create lasting partnerships.",
  },
  {
    icon: Lightbulb,
    label: "Innovation",
    letter: "I",
    tag: "Thinking",
    index: "03",
    color: "from-yellow-500 to-orange-500",
    bgColor: "bg-gradient-to-br from-yellow-500 to-orange-500",
    description:
      "Embracing creative thinking and cutting-edge solutions for our clients.",
  },
  {
    icon: Shield,
    label: "Excellence",
    letter: "E",
    tag: "Standard",
    index: "04",
    color: "from-purple-500 to-indigo-500",
    bgColor: "bg-gradient-to-br from-purple-500 to-indigo-500",
    description: "Maintaining the highest standards in everything we deliver.",
  },
  {
    icon: Target,
    label: "Results",
    letter: "R",
    tag: "Impact",
    index: "05",
    color: "from-green-500 to-emerald-500",
    bgColor: "bg-gradient-to-br from-green-500 to-emerald-500",
    description:
      "Focusing on measurable outcomes that drive real business impact.",
  },
];

export function Values() {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % values.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  const active = values[activeIndex];

  return (
    <section className="py-20 sm:py-28 lg:py-36 bg-white overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          viewport={{ once: true, margin: "-80px" }}
          className="mb-12 sm:mb-16 lg:mb-20 flex flex-col lg:flex-row lg:items-end lg:justify-between gap-4 lg:gap-8"
        >
          <div>
            <div className="flex items-center gap-2 mb-4 sm:mb-5">
              <span className="w-6 h-px bg-orange-500" />
              <span className="text-orange-500 font-mono text-xs tracking-[0.2em] uppercase">
                What Drives Us
              </span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-6xl font-bold text-slate-900 leading-[1.05] tracking-tight">
              Our core
              <br />
              <span className="text-orange-500">values</span>
            </h2>
          </div>
          <p className="text-slate-500 text-sm sm:text-base max-w-xs leading-relaxed lg:text-right">
            The principles that guide our decisions, shape our culture, and
            define how we serve every client.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          {/* ── Left: Animated letter card ── */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            viewport={{ once: true, margin: "-80px" }}
            className="relative"
          >
            {/* Animated skewed border — matches AboutUs / WhyChooseUs */}
            <motion.div
              animate={{ rotate: [3, 5, 3] }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
              className="absolute inset-0 rounded-2xl bg-linear-to-br from-orange-500/20 to-yellow-500/10 border border-orange-500/20"
            />
            <div className="absolute inset-0 rounded-2xl border border-slate-100 -rotate-1 scale-[1.01]" />

            {/* Card */}
            <div className="relative bg-white rounded-2xl overflow-hidden shadow-sm border border-slate-100">
              {/* Dark top band — same as VisionMission */}
              <div className="relative h-48 sm:h-56 bg-slate-900 flex items-center justify-center overflow-hidden">
                {/* Grid texture */}
                <div
                  className="absolute inset-0 opacity-[0.04]"
                  style={{
                    backgroundImage:
                      "repeating-linear-gradient(0deg,#fff 0px,#fff 1px,transparent 1px,transparent 40px),repeating-linear-gradient(90deg,#fff 0px,#fff 1px,transparent 1px,transparent 40px)",
                  }}
                />

                {/* Glow */}
                <AnimatePresence mode="wait">
                  <motion.div
                    key={activeIndex}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.4 }}
                    className={`absolute inset-0 opacity-10 ${active.bgColor}`}
                  />
                </AnimatePresence>

                {/* Tag badge */}
                <div className="absolute top-4 left-4">
                  <AnimatePresence mode="wait">
                    <motion.span
                      key={activeIndex}
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="bg-white/10 backdrop-blur-sm border border-white/10 text-slate-300 text-[10px] font-mono tracking-widest uppercase px-2.5 py-1 rounded-full"
                    >
                      {active.tag}
                    </motion.span>
                  </AnimatePresence>
                </div>

                {/* Index */}
                <div className="absolute top-4 right-4 text-white/20 font-mono text-xs">
                  {active.index}
                </div>

                {/* Big letter */}
                <AnimatePresence mode="wait">
                  <motion.div
                    key={activeIndex}
                    initial={{ opacity: 0, scale: 0.6, rotateY: -90 }}
                    animate={{ opacity: 1, scale: 1, rotateY: 0 }}
                    exit={{ opacity: 0, scale: 0.6, rotateY: 90 }}
                    transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                    className={`w-24 h-24 sm:w-28 sm:h-28 rounded-2xl ${active.bgColor} flex items-center justify-center shadow-2xl`}
                  >
                    <span className="text-6xl sm:text-7xl font-bold text-white leading-none">
                      {active.letter}
                    </span>
                  </motion.div>
                </AnimatePresence>
              </div>

              {/* Dark footer — identical to all other cards */}
              <div className="p-5 bg-slate-900 relative">
                {/* Hover accent line */}
                <div className="absolute top-0 left-5 right-5 h-px bg-linear-to-r from-transparent via-orange-500/70 to-transparent" />

                {/* Icon selector row */}
                <div className="flex items-center gap-2 mb-4 flex-wrap">
                  {values.map((v, i) => {
                    const Icon = v.icon;
                    return (
                      <button
                        key={i}
                        onClick={() => setActiveIndex(i)}
                        className={`w-8 h-8 rounded-lg flex items-center justify-center transition-all duration-200 ${
                          i === activeIndex
                            ? `${v.bgColor} shadow-md scale-110`
                            : "bg-white/5 border border-white/10 hover:border-orange-500/30"
                        }`}
                      >
                        <Icon
                          className={`w-3.5 h-3.5 ${i === activeIndex ? "text-white" : "text-white/30"}`}
                        />
                      </button>
                    );
                  })}
                </div>

                <AnimatePresence mode="wait">
                  <motion.div
                    key={activeIndex}
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -8 }}
                    transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                  >
                    <h3 className="text-[15px] font-semibold text-white leading-snug">
                      {active.label}
                    </h3>
                    <p className="text-orange-400 text-xs mt-0.5 font-mono">
                      Core value
                    </p>
                  </motion.div>
                </AnimatePresence>
              </div>
            </div>
          </motion.div>

          {/* ── Right: Active value detail ── */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{
              duration: 0.7,
              delay: 0.15,
              ease: [0.22, 1, 0.36, 1],
            }}
            viewport={{ once: true, margin: "-80px" }}
            className="flex flex-col gap-4"
          >
            {/* Stacked value rows */}
            {values.map((value, i) => {
              const Icon = value.icon;
              const isActive = i === activeIndex;
              return (
                <motion.button
                  key={i}
                  onClick={() => setActiveIndex(i)}
                  className={`group w-full text-left relative rounded-2xl overflow-hidden border transition-all duration-300 ${
                    isActive
                      ? "bg-slate-900 border-orange-500/30 shadow-lg"
                      : "bg-white border-slate-100 hover:border-slate-200 hover:shadow-sm"
                  }`}
                >
                  {/* Active accent line */}
                  {isActive && (
                    <div className="absolute top-0 left-5 right-5 h-px bg-linear-to-r from-transparent via-orange-500/70 to-transparent" />
                  )}

                  <div className="flex items-start gap-4 p-4 sm:p-5">
                    {/* Index */}
                    <span
                      className={`font-mono text-[10px] mt-0.5 shrink-0 ${isActive ? "text-orange-500/60" : "text-slate-300"}`}
                    >
                      {value.index}
                    </span>

                    {/* Icon */}
                    <div
                      className={`p-2 rounded-lg shrink-0 transition-all duration-300 ${isActive ? value.bgColor : "bg-slate-100"}`}
                    >
                      <Icon
                        className={`w-3.5 h-3.5 ${isActive ? "text-white" : "text-slate-400"}`}
                      />
                    </div>

                    <div className="flex-1 min-w-0">
                      <p
                        className={`text-[13px] font-semibold leading-snug ${isActive ? "text-white" : "text-slate-700"}`}
                      >
                        {value.label}
                      </p>

                      <AnimatePresence>
                        {isActive && (
                          <motion.p
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: "auto" }}
                            exit={{ opacity: 0, height: 0 }}
                            transition={{
                              duration: 0.3,
                              ease: [0.22, 1, 0.36, 1],
                            }}
                            className="text-slate-400 text-xs font-mono leading-relaxed mt-1 overflow-hidden"
                          >
                            {value.description}
                          </motion.p>
                        )}
                      </AnimatePresence>
                    </div>

                    {/* Tag badge — right side */}
                    <span
                      className={`text-[10px] font-mono tracking-widest uppercase shrink-0 px-2 py-0.5 rounded-full border ${
                        isActive
                          ? "border-white/10 text-slate-400 bg-white/5"
                          : "border-slate-200 text-slate-400"
                      }`}
                    >
                      {value.tag}
                    </span>
                  </div>

                  {/* Progress bar */}
                  {isActive && (
                    <div className="h-px bg-white/5 mx-5">
                      <motion.div
                        className={`h-full bg-linear-to-r ${value.color}`}
                        initial={{ width: 0 }}
                        animate={{ width: "100%" }}
                        transition={{ duration: 4, ease: "linear" }}
                      />
                    </div>
                  )}
                </motion.button>
              );
            })}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
