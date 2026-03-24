import { Linkedin, Mail } from "lucide-react";
import { motion } from "motion/react";

const teamMembers = [
  {
    name: "John Anderson",
    role: "Chief Executive Officer",
    tag: "Leadership",
    image:
      "https://images.unsplash.com/photo-1689600944138-da3b150d9cb8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjBoZWFkc2hvdCUyMGJ1c2luZXNzfGVufDF8fHx8MTc3Mzc3ODcyN3ww&ixlib=rb-4.1.0&q=80&w=1080",
  },
  {
    name: "Sarah Mitchell",
    role: "Chief Operating Officer",
    tag: "Operations",
    image:
      "https://images.unsplash.com/photo-1689600944138-da3b150d9cb8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjBoZWFkc2hvdCUyMGJ1c2luZXNzfGVufDF8fHx8MTc3Mzc3ODcyN3ww&ixlib=rb-4.1.0&q=80&w=1080",
  },
  {
    name: "Michael Chen",
    role: "Head of Strategy",
    tag: "Strategy",
    image:
      "https://images.unsplash.com/photo-1689600944138-da3b150d9cb8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjBoZWFkc2hvdCUyMGJ1c2luZXNzfGVufDF8fHx8MTc3Mzc3ODcyN3ww&ixlib=rb-4.1.0&q=80&w=1080",
  },
  {
    name: "Emily Rodriguez",
    role: "Director of Operations",
    tag: "Director",
    image:
      "https://images.unsplash.com/photo-1689600944138-da3b150d9cb8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjBoZWFkc2hvdCUyMGJ1c2luZXNzfGVufDF8fHx8MTc3Mzc3ODcyN3ww&ixlib=rb-4.1.0&q=80&w=1080",
  },
];

export function Team() {
  return (
    <section
      id="team"
      className="py-20 sm:py-28 lg:py-36 bg-gray-50 overflow-hidden relative"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
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
                Our People
              </span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-6xl font-bold text-slate-900 leading-[1.05] tracking-tight">
              The minds behind
              <br />
              <span className="text-orange-500">the mission</span>
            </h2>
          </div>
          <p className="text-slate-500 text-sm sm:text-base max-w-xs leading-relaxed lg:text-right">
            Experienced professionals dedicated to your success — each bringing
            a distinct edge.
          </p>
        </motion.div>

        {/* Team Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {teamMembers.map((member, index) => (
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
              <div className="relative h-64 sm:h-72 overflow-hidden">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                />

                {/* Subtle bottom gradient into card footer */}
                <div className="absolute inset-0 bg-linear-to-t from-slate-900/60 via-transparent to-transparent" />

                {/* Tag badge */}
                <div className="absolute top-4 left-4">
                  <span className="bg-white/90 backdrop-blur-sm border border-white/60 text-slate-600 text-[10px] font-mono tracking-widest uppercase px-2.5 py-1 rounded-full shadow-sm">
                    {member.tag}
                  </span>
                </div>

                {/* Index number */}
                <div className="absolute top-4 right-4 text-white/30 font-mono text-xs">
                  {String(index + 1).padStart(2, "0")}
                </div>
              </div>

              {/* Content */}
              <div className="p-5 bg-slate-900 relative">
                {/* Thin top accent line */}
                <div className="absolute top-0 left-5 right-5 h-px bg-linear-to-r from-transparent via-orange-500/70 to-transparent scale-x-0 group-hover:scale-x-100 transition-transform duration-500" />

                <div className="mb-4">
                  <h3 className="text-[15px] font-semibold text-white leading-snug">
                    {member.name}
                  </h3>
                  <p className="text-orange-400 text-xs mt-0.5 font-mono">
                    {member.role}
                  </p>
                </div>

                {/* Social links */}
                <div className="flex gap-2">
                  <button
                    className="flex items-center gap-1.5 border border-white/10 hover:border-orange-500/50 hover:bg-orange-500/10 text-white/40 hover:text-orange-400 px-3 py-1.5 rounded-lg text-[11px] font-mono tracking-wide transition-all duration-200 translate-y-2 opacity-0 group-hover:translate-y-0 group-hover:opacity-100"
                    style={{ transitionDelay: "0ms" }}
                  >
                    <Linkedin className="w-3 h-3" />
                    LinkedIn
                  </button>
                  <button
                    className="flex items-center gap-1.5 border border-white/10 hover:border-orange-500/50 hover:bg-orange-500/10 text-white/40 hover:text-orange-400 px-3 py-1.5 rounded-lg text-[11px] font-mono tracking-wide transition-all duration-200 translate-y-2 opacity-0 group-hover:translate-y-0 group-hover:opacity-100"
                    style={{ transitionDelay: "60ms" }}
                  >
                    <Mail className="w-3 h-3" />
                    Email
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
