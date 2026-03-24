import { Award, Users, Zap, Shield } from "lucide-react";
import { motion } from "motion/react";

const reasons = [
  {
    icon: Award,
    title: "Expertise & Experience",
    description:
      "Decades of combined experience delivering exceptional results across diverse industries",
  },
  {
    icon: Users,
    title: "Client-Centric Approach",
    description:
      "Your success is our priority. We work closely with you every step of the way",
  },
  {
    icon: Zap,
    title: "Innovation & Quality",
    description:
      "Cutting-edge solutions backed by rigorous quality standards and best practices",
  },
  {
    icon: Shield,
    title: "Trusted & Reliable",
    description:
      "Build lasting partnerships founded on trust, transparency, and proven results",
  },
];

export function WhyChooseUs() {
  return (
    <section className="py-20 lg:py-32 bg-linear-to-br from-slate-900 via-slate-800 to-slate-900 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              "radial-gradient(circle at 2px 2px, white 1px, transparent 0)",
            backgroundSize: "40px 40px",
          }}
        />
      </div>

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true, margin: "-100px" }}
          className="text-center mb-16"
        >
          <div className="inline-block bg-orange-500/10 border border-orange-500/20 rounded-full px-4 py-2 mb-4">
            <span className="text-orange-400 font-semibold text-sm">
              OUR ADVANTAGE
            </span>
          </div>
          <h2 className="text-3xl lg:text-5xl font-bold text-white mb-4">
            Why Choose Us
          </h2>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto">
            Discover what sets us apart in delivering excellence and value
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center max-w-6xl mx-auto">
          {/* Reasons Grid */}
          <div className="grid sm:grid-cols-2 gap-8">
            {reasons.map((reason, index) => {
              const Icon = reason.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true, margin: "-100px" }}
                  className="relative group"
                >
                  <div className="absolute inset-0 bg-linear-to-br from-orange-500/20 to-yellow-500/20 rounded-xl blur-xl group-hover:blur-2xl transition-all duration-300" />
                  <div className="relative bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-xl p-6 hover:border-orange-500/50 transition-all duration-300">
                    <div className="bg-linear-to-br from-orange-500 to-yellow-500 p-3 rounded-lg w-fit mb-4">
                      <Icon className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="text-lg font-bold text-white mb-2">
                      {reason.title}
                    </h3>
                    <p className="text-gray-400 text-sm leading-relaxed">
                      {reason.description}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </div>

          {/* Chess Image */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true, margin: "-100px" }}
            className="relative"
          >
            <div className="absolute inset-0 bg-linear-to-br from-orange-500/30 to-yellow-500/30 rounded-2xl blur-3xl" />
            <div className="relative rounded-2xl overflow-hidden border-4 border-orange-500/20 shadow-2xl">
              <img
                src="https://images.unsplash.com/photo-1634264719385-542efb5cb8f4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3aGl0ZSUyMGNoZXNzJTIwcGllY2VzfGVufDF8fHx8MTc3MzgzNjU5MHww&ixlib=rb-4.1.0&q=80&w=1080"
                alt="Strategic thinking"
                className="w-full h-full object-cover"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
