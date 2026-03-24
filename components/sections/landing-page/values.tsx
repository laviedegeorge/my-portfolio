import { Heart, Users, Lightbulb, Shield, Target } from "lucide-react";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";

const values = [
  {
    icon: Heart,
    label: "Integrity",
    letter: "I",
    color: "from-red-500 to-pink-500",
    description:
      "Operating with honesty and strong moral principles in all our actions",
    bgColor: "bg-linear-to-br from-red-500 to-pink-500",
  },
  {
    icon: Users,
    label: "Collaboration",
    letter: "C",
    color: "from-blue-500 to-cyan-500",
    description:
      "Working together to achieve shared goals and create lasting partnerships",
    bgColor: "bg-linear-to-br from-blue-500 to-cyan-500",
  },
  {
    icon: Lightbulb,
    label: "Innovation",
    letter: "I",
    color: "from-yellow-500 to-orange-500",
    description:
      "Embracing creative thinking and cutting-edge solutions for our clients",
    bgColor: "bg-linear-to-br from-yellow-500 to-orange-500",
  },
  {
    icon: Shield,
    label: "Excellence",
    letter: "E",
    color: "from-purple-500 to-indigo-500",
    description: "Maintaining the highest standards in everything we deliver",
    bgColor: "bg-linear-to-br from-purple-500 to-indigo-500",
  },
  {
    icon: Target,
    label: "Results",
    letter: "R",
    color: "from-green-500 to-emerald-500",
    description:
      "Focusing on measurable outcomes that drive real business impact",
    bgColor: "bg-linear-to-br from-green-500 to-emerald-500",
  },
];

export function Values() {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % values.length);
    }, 4000); // Change every 4 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="py-20 lg:py-32 bg-white overflow-hidden">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center max-w-6xl mx-auto">
          {/* Left Side - Animated Letters */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true, margin: "-100px" }}
            className="relative flex items-center justify-center py-12"
          >
            <div className="relative w-full max-w-md mx-auto">
              {/* Background decorative elements */}
              <div className="absolute inset-0 bg-linear-to-br from-orange-100 to-yellow-100 rounded-3xl transform -rotate-6 opacity-50" />
              <div className="absolute inset-0 bg-linear-to-br from-orange-50 to-yellow-50 rounded-3xl transform rotate-3 opacity-50" />

              {/* Main content */}
              <div className="relative bg-white rounded-3xl shadow-2xl p-8 lg:p-12 border-2 border-orange-100">
                {/* Large animated letter */}
                <AnimatePresence mode="wait">
                  <motion.div
                    key={activeIndex}
                    initial={{ opacity: 0, scale: 0.5, rotateY: -180 }}
                    animate={{ opacity: 1, scale: 1, rotateY: 0 }}
                    exit={{ opacity: 0, scale: 0.5, rotateY: 180 }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-6"
                  >
                    <div
                      className={`inline-flex items-center justify-center w-32 h-32 lg:w-40 lg:h-40 rounded-3xl ${values[activeIndex].bgColor} shadow-2xl mb-4`}
                    >
                      <span className="text-6xl lg:text-8xl font-bold text-white">
                        {values[activeIndex].letter}
                      </span>
                    </div>
                  </motion.div>
                </AnimatePresence>

                {/* Small letter indicators */}
                <div className="flex justify-center gap-3 flex-wrap">
                  {values.map((value, index) => {
                    const Icon = value.icon;
                    return (
                      <button
                        key={index}
                        onClick={() => setActiveIndex(index)}
                        className={`relative transition-all duration-300 ${
                          index === activeIndex
                            ? "scale-110"
                            : "scale-100 opacity-60 hover:opacity-100"
                        }`}
                      >
                        <div
                          className={`w-12 h-12 lg:w-14 lg:h-14 rounded-xl ${value.bgColor} flex items-center justify-center shadow-lg ${
                            index === activeIndex
                              ? "ring-4 ring-offset-2 ring-orange-300"
                              : ""
                          }`}
                        >
                          <Icon className="w-6 h-6 text-white" />
                        </div>
                      </button>
                    );
                  })}
                </div>

                {/* Animated value name */}
                <AnimatePresence mode="wait">
                  <motion.div
                    key={activeIndex}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.4 }}
                    className="text-center mt-6"
                  >
                    <h3
                      className={`text-2xl lg:text-3xl font-bold text-transparent bg-clip-text bg-linear-to-r ${values[activeIndex].color}`}
                    >
                      {values[activeIndex].label}
                    </h3>
                  </motion.div>
                </AnimatePresence>
              </div>
            </div>
          </motion.div>

          {/* Right Side - Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true, margin: "-100px" }}
          >
            <div className="inline-block bg-orange-500/10 border border-orange-500/20 rounded-full px-4 py-2 mb-6">
              <span className="text-orange-600 font-semibold text-sm">
                WHAT DRIVES US
              </span>
            </div>

            <h2 className="text-3xl lg:text-5xl font-bold text-slate-900 mb-6">
              Our Core Values
            </h2>

            <p className="text-gray-700 text-lg mb-8 leading-relaxed">
              Our values are the foundation of everything we do. They guide our
              decisions, shape our culture, and define how we serve our clients.
            </p>

            {/* Active Value Display */}
            <AnimatePresence mode="wait">
              <motion.div
                key={activeIndex}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.5 }}
                className="bg-linear-to-br from-slate-50 to-gray-100 rounded-2xl p-6 lg:p-8 border-2 border-orange-200"
              >
                <div className="flex items-start gap-4 mb-4">
                  <div
                    className={`${values[activeIndex].bgColor} p-4 rounded-lg shrink-0`}
                  >
                    {(() => {
                      const Icon = values[activeIndex].icon;
                      return <Icon className="w-8 h-8 text-white" />;
                    })()}
                  </div>
                  <div className="flex-1">
                    <h4 className="text-xl lg:text-2xl font-bold text-slate-900 mb-2">
                      {values[activeIndex].label}
                    </h4>
                    <p className="text-gray-700 leading-relaxed">
                      {values[activeIndex].description}
                    </p>
                  </div>
                </div>

                {/* Progress Indicator */}
                <div className="flex gap-2 mt-6">
                  {values.map((value, index) => (
                    <button
                      key={index}
                      onClick={() => setActiveIndex(index)}
                      className="relative h-1.5 flex-1 bg-gray-300 rounded-full overflow-hidden"
                      aria-label={`Select ${value.label}`}
                    >
                      <motion.div
                        className={`absolute inset-0 bg-linear-to-r ${value.color}`}
                        initial={{ width: 0 }}
                        animate={{ width: index === activeIndex ? "100%" : 0 }}
                        transition={{
                          duration: index === activeIndex ? 4 : 0.3,
                        }}
                      />
                    </button>
                  ))}
                </div>
              </motion.div>
            </AnimatePresence>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
