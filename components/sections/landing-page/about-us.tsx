import { CheckCircle } from "lucide-react";
import { motion } from "motion/react";

export function AboutUs() {
  return (
    <section id="about" className="py-20 lg:py-32 bg-slate-900 overflow-hidden">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true, margin: "-100px" }}
          >
            <div className="inline-block bg-orange-500/10 border border-orange-500/20 rounded-full px-4 py-2 mb-6">
              <span className="text-orange-400 font-semibold text-sm">
                ABOUT US
              </span>
            </div>

            <h2 className="text-3xl lg:text-5xl font-bold text-white mb-6">
              Driving Success Through Strategic Excellence
            </h2>

            <p className="text-gray-300 text-lg mb-8 leading-relaxed">
              With a team of seasoned professionals and proven expertise, we
              provide tailored solutions designed to drive success. Our
              strategic approach combines deep industry knowledge with
              innovative thinking to deliver measurable results for our clients.
            </p>

            <div className="space-y-4">
              {[
                "Proven track record of successful partnerships",
                "Customized solutions for your unique needs",
                "Expert team with diverse industry experience",
                "Commitment to excellence and innovation",
              ].map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true, margin: "-100px" }}
                  className="flex items-start gap-3"
                >
                  <CheckCircle className="w-6 h-6 text-orange-400 shrink-0 mt-0.5" />
                  <span className="text-gray-300">{item}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true, margin: "-100px" }}
            className="relative"
          >
            <div className="absolute inset-0 bg-linear-to-br from-orange-500/20 to-yellow-500/20 rounded-2xl transform rotate-3" />
            <div className="relative rounded-2xl overflow-hidden shadow-2xl border-4 border-orange-500/20">
              <img
                src="https://images.unsplash.com/photo-1769740333462-9a63bfa914bc?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb3Jwb3JhdGUlMjB0ZWFtJTIwY29sbGFib3JhdGlvbnxlbnwxfHx8fDE3NzM3OTc3Njh8MA&ixlib=rb-4.1.0&q=80&w=1080"
                alt="Team collaboration"
                className="w-full h-full object-cover"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
