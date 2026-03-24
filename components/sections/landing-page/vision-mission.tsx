import { Target, Lightbulb } from "lucide-react";
import { motion } from "motion/react";

const cards = [
  {
    icon: Lightbulb,
    tag: "Vision",
    index: "01",
    title: "Our Vision",
    body: "To be the leading provider of innovative business solutions, empowering organisations worldwide to achieve sustainable growth and excellence through strategic insights and cutting-edge methodologies.",
  },
  {
    icon: Target,
    tag: "Mission",
    index: "02",
    title: "Our Mission",
    body: "To deliver exceptional value to our clients by providing tailored solutions, fostering innovation, and building long-lasting partnerships that drive measurable results and transformational success.",
  },
];

export function VisionMission() {
  return (
    <section className="py-20 sm:py-28 lg:py-36 bg-gray-50 overflow-hidden">
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
                Who We Are
              </span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-6xl font-bold text-slate-900 leading-[1.05] tracking-tight">
              Purpose that
              <br />
              <span className="text-orange-500">drives us forward</span>
            </h2>
          </div>
          <p className="text-slate-500 text-sm sm:text-base max-w-xs leading-relaxed lg:text-right">
            Two principles at the heart of everything we do — a clear vision and
            an unwavering mission.
          </p>
        </motion.div>

        {/* Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {cards.map((card, index) => {
            const Icon = card.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.6,
                  delay: index * 0.1,
                  ease: [0.22, 1, 0.36, 1],
                }}
                viewport={{ once: true }}
                className="group relative bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-shadow duration-500 cursor-default"
              >
                {/* Top image-style band — solid slate with icon, tag, index */}
                <div className="relative h-36 sm:h-40 bg-slate-900 flex items-end px-6 pb-5 overflow-hidden">
                  {/* Subtle grid texture */}
                  <div
                    className="absolute inset-0 opacity-[0.04]"
                    style={{
                      backgroundImage:
                        "repeating-linear-gradient(0deg,#fff 0px,#fff 1px,transparent 1px,transparent 40px),repeating-linear-gradient(90deg,#fff 0px,#fff 1px,transparent 1px,transparent 40px)",
                    }}
                  />

                  {/* Orange glow blob */}
                  <div className="absolute -top-8 -right-8 w-40 h-40 bg-orange-500/10 rounded-full blur-2xl group-hover:bg-orange-500/20 transition-colors duration-500" />

                  {/* Tag badge — top left */}
                  <div className="absolute top-4 left-4">
                    <span className="bg-white/10 backdrop-blur-sm border border-white/10 text-slate-300 text-[10px] font-mono tracking-widest uppercase px-2.5 py-1 rounded-full">
                      {card.tag}
                    </span>
                  </div>

                  {/* Index number — top right */}
                  <div className="absolute top-4 right-4 text-white/20 font-mono text-xs">
                    {card.index}
                  </div>

                  {/* Icon */}
                  <div className="bg-linear-to-br from-orange-500 to-yellow-500 p-2.5 rounded-lg shadow-md">
                    <Icon className="w-5 h-5 text-white" />
                  </div>
                </div>

                {/* Footer — dark slate, identical to Team/Services cards */}
                <div className="p-6 bg-slate-900 relative">
                  {/* Hover accent line */}
                  <div className="absolute top-0 left-6 right-6 h-px bg-linear-to-r from-transparent via-orange-500/70 to-transparent scale-x-0 group-hover:scale-x-100 transition-transform duration-500" />

                  <h3 className="text-[15px] font-semibold text-white mb-3 leading-snug">
                    {card.title}
                  </h3>
                  <p className="text-slate-400 text-xs font-mono leading-relaxed">
                    {card.body}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
