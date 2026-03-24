import { motion } from "motion/react";

const bullets = [
  "Proven track record of successful partnerships",
  "Customised solutions for your unique needs",
  "Expert team with diverse industry experience",
  "Commitment to excellence and innovation",
];

export function AboutUs() {
  return (
    <section
      id="about"
      className="py-20 sm:py-28 lg:py-36 bg-slate-900 overflow-hidden"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* ── Left: Content ── */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            viewport={{ once: true, margin: "-80px" }}
          >
            {/* Eyebrow — design-system label */}
            <div className="flex items-center gap-2 mb-5">
              <span className="w-6 h-px bg-orange-500" />
              <span className="text-orange-500 font-mono text-xs tracking-[0.2em] uppercase">
                About Us
              </span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold text-white leading-[1.05] tracking-tight mb-6">
              Driving success through
              <br />
              <span className="text-orange-500">strategic excellence</span>
            </h2>

            <p className="text-slate-400 text-sm sm:text-base font-mono leading-relaxed max-w-md mb-10">
              With a team of seasoned professionals and proven expertise, we
              provide tailored solutions designed to drive success. Our
              strategic approach combines deep industry knowledge with
              innovative thinking to deliver measurable results.
            </p>

            {/* Bullet list */}
            <div className="flex flex-col gap-3">
              {bullets.map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -16 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{
                    duration: 0.5,
                    delay: i * 0.08,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                  viewport={{ once: true }}
                  className="group flex items-start gap-3 border border-white/5 hover:border-orange-500/30 hover:bg-orange-500/5 rounded-lg px-4 py-3 transition-all duration-200"
                >
                  {/* Index pip */}
                  <span className="text-orange-500/60 font-mono text-[10px] mt-0.5 shrink-0">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span className="text-slate-400 group-hover:text-slate-200 text-xs font-mono leading-relaxed transition-colors duration-200">
                    {item}
                  </span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* ── Right: Image with animated skewed border ── */}
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
            {/* Animated rotating border layer */}
            <motion.div
              animate={{ rotate: [3, 5, 3] }}
              transition={{
                duration: 6,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="absolute inset-0 rounded-2xl bg-linear-to-br from-orange-500/30 to-yellow-500/10 border border-orange-500/20"
            />

            {/* Secondary static layer for depth */}
            <div className="absolute inset-0 rounded-2xl border border-white/5 -rotate-1 scale-[1.01]" />

            {/* Image */}
            <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-white/10">
              {/* Tag + index overlay — mirrors card anatomy */}
              <div className="absolute top-4 left-4 z-10">
                <span className="bg-white/10 backdrop-blur-sm border border-white/10 text-slate-300 text-[10px] font-mono tracking-widest uppercase px-2.5 py-1 rounded-full">
                  Our Team
                </span>
              </div>
              <div className="absolute top-4 right-4 z-10 text-white/20 font-mono text-xs">
                03
              </div>

              <img
                src="https://images.unsplash.com/photo-1769740333462-9a63bfa914bc?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb3Jwb3JhdGUlMjB0ZWFtJTIwY29sbGFib3JhdGlvbnxlbnwxfHx8fDE3NzM3OTc3Njh8MA&ixlib=rb-4.1.0&q=80&w=1080"
                alt="Team collaboration"
                className="w-full h-72 sm:h-80 lg:h-[460px] object-cover"
              />

              {/* Bottom gradient — card footer feel */}
              <div className="absolute inset-0 bg-linear-to-t from-slate-900/60 via-transparent to-transparent" />

              {/* Footer bar — dark slate strip at bottom */}
              <div className="absolute bottom-0 left-0 right-0 px-5 py-4 bg-slate-900/90 backdrop-blur-sm border-t border-white/5">
                {/* Hover accent line reused as static decorative bar */}
                <div className="absolute top-0 left-5 right-5 h-px bg-linear-to-r from-transparent via-orange-500/60 to-transparent" />
                <p className="text-white text-[13px] font-semibold leading-snug">
                  A team built for results
                </p>
                <p className="text-orange-400 text-[11px] font-mono mt-0.5">
                  12+ years · 340+ clients
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
