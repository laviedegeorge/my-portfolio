import { Award, Users, Zap, Shield } from "lucide-react";
import { motion } from "motion/react";

const reasons = [
  {
    icon: Award,
    tag: "Edge",
    index: "01",
    title: "Expertise & Experience",
    description:
      "Decades of combined experience delivering exceptional results across diverse industries.",
  },
  {
    icon: Users,
    tag: "People",
    index: "02",
    title: "Client-Centric Approach",
    description:
      "Your success is our priority. We work closely with you every step of the way.",
  },
  {
    icon: Zap,
    tag: "Quality",
    index: "03",
    title: "Innovation & Quality",
    description:
      "Cutting-edge solutions backed by rigorous quality standards and best practices.",
  },
  {
    icon: Shield,
    tag: "Trust",
    index: "04",
    title: "Trusted & Reliable",
    description:
      "Lasting partnerships founded on trust, transparency, and proven results.",
  },
];

export function WhyChooseUs() {
  return (
    <section className="py-20 sm:py-28 lg:py-36 bg-slate-900 overflow-hidden relative">
      {/* Dot grid background — kept from original */}
      <div className="absolute inset-0 opacity-[0.04] pointer-events-none">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              "radial-gradient(circle at 2px 2px, white 1px, transparent 0)",
            backgroundSize: "40px 40px",
          }}
        />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
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
                Our Advantage
              </span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-6xl font-bold text-white leading-[1.05] tracking-tight">
              Why choose
              <br />
              <span className="text-orange-500">us over the rest</span>
            </h2>
          </div>
          <p className="text-slate-500 text-sm sm:text-base max-w-xs leading-relaxed lg:text-right">
            Discover what sets us apart in delivering excellence and lasting
            value to every client.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center">
          {/* Reasons grid */}
          <div className="grid sm:grid-cols-2 gap-6">
            {reasons.map((reason, index) => {
              const Icon = reason.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{
                    duration: 0.6,
                    delay: index * 0.08,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                  viewport={{ once: true }}
                  className="group relative bg-white/3 hover:bg-white/6 border border-white/5 hover:border-orange-500/30 rounded-2xl overflow-hidden transition-all duration-300 cursor-default"
                >
                  {/* Accent line — identical to all other cards */}
                  <div className="absolute top-0 left-5 right-5 h-px bg-linear-to-r from-transparent via-orange-500/70 to-transparent scale-x-0 group-hover:scale-x-100 transition-transform duration-500" />

                  <div className="p-5">
                    {/* Tag + index row */}
                    <div className="flex items-center justify-between mb-4">
                      <span className="bg-white/10 border border-white/10 text-slate-400 text-[10px] font-mono tracking-widest uppercase px-2.5 py-1 rounded-full">
                        {reason.tag}
                      </span>
                      <span className="text-white/20 font-mono text-xs">
                        {reason.index}
                      </span>
                    </div>

                    {/* Icon */}
                    <div className="bg-linear-to-br from-orange-500 to-yellow-500 p-2.5 rounded-lg w-fit mb-4 shadow-md">
                      <Icon className="w-4 h-4 text-white" />
                    </div>

                    <h3 className="text-[14px] font-semibold text-white leading-snug mb-2">
                      {reason.title}
                    </h3>
                    <p className="text-slate-500 text-[11px] font-mono leading-relaxed">
                      {reason.description}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </div>

          {/* Image — animated skewed border matching AboutUs */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{
              duration: 0.7,
              delay: 0.15,
              ease: [0.22, 1, 0.36, 1],
            }}
            viewport={{ once: true, margin: "-80px" }}
            className="relative"
          >
            {/* Animated rotating border */}
            <motion.div
              animate={{ rotate: [3, 5, 3] }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
              className="absolute inset-0 rounded-2xl bg-linear-to-br from-orange-500/30 to-yellow-500/10 border border-orange-500/20"
            />

            {/* Secondary depth layer */}
            <div className="absolute inset-0 rounded-2xl border border-white/5 -rotate-1 scale-[1.01]" />

            {/* Image */}
            <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-white/10">
              {/* Tag + index overlay */}
              <div className="absolute top-4 left-4 z-10">
                <span className="bg-white/10 backdrop-blur-sm border border-white/10 text-slate-300 text-[10px] font-mono tracking-widest uppercase px-2.5 py-1 rounded-full">
                  Strategy
                </span>
              </div>
              <div className="absolute top-4 right-4 z-10 text-white/20 font-mono text-xs">
                05
              </div>

              <img
                src="https://images.unsplash.com/photo-1634264719385-542efb5cb8f4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3aGl0ZSUyMGNoZXNzJTIwcGllY2VzfGVufDF8fHx8MTc3MzgzNjU5MHww&ixlib=rb-4.1.0&q=80&w=1080"
                alt="Strategic thinking"
                className="w-full h-72 sm:h-80 lg:h-[460px] object-cover"
              />

              <div className="absolute inset-0 bg-linear-to-t from-slate-900/60 via-transparent to-transparent" />

              {/* Footer bar */}
              <div className="absolute bottom-0 left-0 right-0 px-5 py-4 bg-slate-900/90 backdrop-blur-sm border-t border-white/5">
                <div className="absolute top-0 left-5 right-5 h-px bg-linear-to-r from-transparent via-orange-500/60 to-transparent" />
                <p className="text-white text-[13px] font-semibold leading-snug">
                  Think ahead. Move decisively.
                </p>
                <p className="text-orange-400 text-[11px] font-mono mt-0.5">
                  Strategic advantage · Every engagement
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
