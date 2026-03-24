import { Card, CardContent } from "@/components/ui/card";
import { Target, Lightbulb } from "lucide-react";
import { motion } from "motion/react";

export function VisionMission() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {/* Vision Card */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true, margin: "-100px" }}
          >
            <Card className="group hover:shadow-2xl transition-all duration-300 border-t-4 border-t-orange-500 bg-white h-full">
              <CardContent className="p-8 lg:p-12">
                <div className="flex items-start gap-4 mb-6">
                  <div className="bg-linear-to-br from-orange-500 to-yellow-500 p-3 rounded-lg shrink-0">
                    <Lightbulb className="w-8 h-8 text-white" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-slate-900 mb-2">
                      OUR VISION
                    </h3>
                    <div className="w-16 h-1 bg-linear-to-r from-orange-500 to-yellow-500" />
                  </div>
                </div>
                <p className="text-gray-700 leading-relaxed">
                  To be the leading provider of innovative business solutions,
                  empowering organizations worldwide to achieve sustainable
                  growth and excellence through strategic insights and
                  cutting-edge methodologies.
                </p>
              </CardContent>
            </Card>
          </motion.div>

          {/* Mission Card */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true, margin: "-100px" }}
          >
            <Card className="group hover:shadow-2xl transition-all duration-300 border-t-4 border-t-orange-500 bg-white h-full">
              <CardContent className="p-8 lg:p-12">
                <div className="flex items-start gap-4 mb-6">
                  <div className="bg-linear-to-br from-orange-500 to-yellow-500 p-3 rounded-lg shrink-0">
                    <Target className="w-8 h-8 text-white" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-slate-900 mb-2">
                      OUR MISSION
                    </h3>
                    <div className="w-16 h-1 bg-linear-to-r from-orange-500 to-yellow-500" />
                  </div>
                </div>
                <p className="text-gray-700 leading-relaxed">
                  Our mission is to deliver exceptional value to our clients by
                  providing tailored solutions, fostering innovation, and
                  building long-lasting partnerships that drive measurable
                  results and transformational success.
                </p>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
