import {
  TrendingUp,
  Users,
  BarChart3,
  Briefcase,
  Cog,
  Target,
  ArrowUpRight,
} from "lucide-react";
import { motion } from "motion/react";

const services = [
  {
    icon: TrendingUp,
    title: "Business Strategy",
    tag: "Strategy",
    description:
      "Develop comprehensive strategies that align with your business goals and drive sustainable growth in competitive markets.",
    image:
      "https://images.unsplash.com/photo-1765438869297-6fa4b627906a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxidXNpbmVzcyUyMHN0cmF0ZWd5JTIwcGxhbm5pbmd8ZW58MXx8fHwxNzczNzE1OTI5fDA&ixlib=rb-4.1.0&q=80&w=1080",
  },
  {
    icon: Users,
    title: "Team Development",
    tag: "People",
    description:
      "Build high-performing teams through strategic talent management, training programs, and leadership development initiatives.",
    image:
      "https://images.unsplash.com/photo-1769740333462-9a63bfa914bc?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb3Jwb3JhdGUlMjB0ZWFtJTIwY29sbGFib3JhdGlvbnxlbnwxfHx8fDE3NzM3OTc3Njh8MA&ixlib=rb-4.1.0&q=80&w=1080",
  },
  {
    icon: BarChart3,
    title: "Business Analytics",
    tag: "Analytics",
    description:
      "Leverage data-driven insights to make informed decisions and optimize your business performance across all key metrics.",
    image:
      "https://images.unsplash.com/photo-1718220216044-006f43e3a9b1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBvZmZpY2UlMjB3b3Jrc3BhY2V8ZW58MXx8fHwxNzczNzgwMzM4fDA&ixlib=rb-4.1.0&q=80&w=1080",
  },
  {
    icon: Briefcase,
    title: "Corporate Solutions",
    tag: "Corporate",
    description:
      "Comprehensive corporate services tailored to your organization's unique needs and industry requirements.",
    image:
      "https://images.unsplash.com/photo-1758518731457-5ef826b75b3b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxidXNpbmVzcyUyMG1lZXRpbmclMjBwcm9mZXNzaW9uYWxzfGVufDF8fHx8MTc3Mzc3NzQ0Nnww&ixlib=rb-4.1.0&q=80&w=1080",
  },
  {
    icon: Cog,
    title: "Process Optimization",
    tag: "Operations",
    description:
      "Streamline operations and enhance efficiency through innovative process improvements and automation strategies.",
    image:
      "https://images.unsplash.com/photo-1718220216044-006f43e3a9b1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBvZmZpY2UlMjB3b3Jrc3BhY2V8ZW58MXx8fHwxNzczNzgwMzM4fDA&ixlib=rb-4.1.0&q=80&w=1080",
  },
  {
    icon: Target,
    title: "Strategic Planning",
    tag: "Planning",
    description:
      "Create actionable roadmaps that align your vision with execution, ensuring long-term success and growth.",
    image:
      "https://images.unsplash.com/photo-1765438869297-6fa4b627906a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxidXNpbmVzcyUyMHN0cmF0ZWd5JTIwcGxhbm5pbmd8ZW58MXx8fHwxNzczNzE1OTI5fDA&ixlib=rb-4.1.0&q=80&w=1080",
  },
];

export function Services() {
  return (
    <section
      id="services"
      className="py-20 sm:py-28 lg:py-36 bg-gray-50 overflow-hidden relative"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header — mirrors Team layout */}
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
                What We Offer
              </span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-6xl font-bold text-slate-900 leading-[1.05] tracking-tight">
              Solutions built
              <br />
              <span className="text-orange-500">for impact</span>
            </h2>
          </div>
          <p className="text-slate-500 text-sm sm:text-base max-w-xs leading-relaxed lg:text-right">
            Comprehensive services designed to transform your business and drive
            exceptional, lasting results.
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => {
            const Icon = service.icon;
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
                className="group relative bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-shadow duration-500 cursor-pointer"
              >
                {/* Image container */}
                <div className="relative h-52 sm:h-56 overflow-hidden">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                  />

                  {/* Bottom gradient into dark footer */}
                  <div className="absolute inset-0 bg-linear-to-t from-slate-900/60 via-transparent to-transparent" />

                  {/* Tag badge — top left, same as Team */}
                  <div className="absolute top-4 left-4">
                    <span className="bg-white/90 backdrop-blur-sm border border-white/60 text-slate-600 text-[10px] font-mono tracking-widest uppercase px-2.5 py-1 rounded-full shadow-sm">
                      {service.tag}
                    </span>
                  </div>

                  {/* Index number — top right, same as Team */}
                  <div className="absolute top-4 right-4 text-white/30 font-mono text-xs">
                    {String(index + 1).padStart(2, "0")}
                  </div>

                  {/* Icon — bottom left, over the gradient */}
                  <div className="absolute bottom-4 left-4">
                    <div className="bg-linear-to-br from-orange-500 to-yellow-500 p-2.5 rounded-lg shadow-md">
                      <Icon className="w-4 h-4 text-white" />
                    </div>
                  </div>
                </div>

                {/* Card footer — dark slate, same as Team */}
                <div className="p-5 bg-slate-900 relative">
                  {/* Hover accent line — identical to Team */}
                  <div className="absolute top-0 left-5 right-5 h-px bg-linear-to-r from-transparent via-orange-500/70 to-transparent scale-x-0 group-hover:scale-x-100 transition-transform duration-500" />

                  <div className="mb-4">
                    <h3 className="text-[15px] font-semibold text-white leading-snug">
                      {service.title}
                    </h3>
                    <p className="text-slate-400 text-xs mt-1.5 leading-relaxed font-mono">
                      {service.description}
                    </p>
                  </div>

                  {/* CTA — same reveal animation as Team's social buttons */}
                  {/* <button
                    className="flex items-center gap-1.5 border border-white/10 hover:border-orange-500/50 hover:bg-orange-500/10 text-white/40 hover:text-orange-400 px-3 py-1.5 rounded-lg text-[11px] font-mono tracking-wide transition-all duration-200 translate-y-2 opacity-0 group-hover:translate-y-0 group-hover:opacity-100"
                    style={{ transitionDelay: "0ms" }}
                  >
                    <ArrowUpRight className="w-3 h-3" />
                    Learn More
                  </button> */}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
