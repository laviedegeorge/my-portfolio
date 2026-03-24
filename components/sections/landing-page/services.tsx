import { Card, CardContent } from "@/components/ui/card";
import {
  TrendingUp,
  Users,
  BarChart3,
  Briefcase,
  Cog,
  Target,
} from "lucide-react";
import { motion } from "motion/react";

const services = [
  {
    icon: TrendingUp,
    title: "Business Strategy",
    description:
      "Develop comprehensive strategies that align with your business goals and drive sustainable growth in competitive markets.",
    image:
      "https://images.unsplash.com/photo-1765438869297-6fa4b627906a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxidXNpbmVzcyUyMHN0cmF0ZWd5JTIwcGxhbm5pbmd8ZW58MXx8fHwxNzczNzE1OTI5fDA&ixlib=rb-4.1.0&q=80&w=1080",
  },
  {
    icon: Users,
    title: "Team Development",
    description:
      "Build high-performing teams through strategic talent management, training programs, and leadership development initiatives.",
    image:
      "https://images.unsplash.com/photo-1769740333462-9a63bfa914bc?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb3Jwb3JhdGUlMjB0ZWFtJTIwY29sbGFib3JhdGlvbnxlbnwxfHx8fDE3NzM3OTc3Njh8MA&ixlib=rb-4.1.0&q=80&w=1080",
  },
  {
    icon: BarChart3,
    title: "Business Analytics",
    description:
      "Leverage data-driven insights to make informed decisions and optimize your business performance across all key metrics.",
    image:
      "https://images.unsplash.com/photo-1718220216044-006f43e3a9b1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBvZmZpY2UlMjB3b3Jrc3BhY2V8ZW58MXx8fHwxNzczNzgwMzM4fDA&ixlib=rb-4.1.0&q=80&w=1080",
  },
  {
    icon: Briefcase,
    title: "Corporate Solutions",
    description:
      "Comprehensive corporate services tailored to your organization's unique needs and industry requirements.",
    image:
      "https://images.unsplash.com/photo-1758518731457-5ef826b75b3b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxidXNpbmVzcyUyMG1lZXRpbmclMjBwcm9mZXNzaW9uYWxzfGVufDF8fHx8MTc3Mzc3NzQ0Nnww&ixlib=rb-4.1.0&q=80&w=1080",
  },
  {
    icon: Cog,
    title: "Process Optimization",
    description:
      "Streamline operations and enhance efficiency through innovative process improvements and automation strategies.",
    image:
      "https://images.unsplash.com/photo-1718220216044-006f43e3a9b1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBvZmZpY2UlMjB3b3Jrc3BhY2V8ZW58MXx8fHwxNzczNzgwMzM4fDA&ixlib=rb-4.1.0&q=80&w=1080",
  },
  {
    icon: Target,
    title: "Strategic Planning",
    description:
      "Create actionable roadmaps that align your vision with execution, ensuring long-term success and growth.",
    image:
      "https://images.unsplash.com/photo-1765438869297-6fa4b627906a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxidXNpbmVzcyUyMHN0cmF0ZWd5JTIwcGxhbm5pbmd8ZW58MXx8fHwxNzczNzE1OTI5fDA&ixlib=rb-4.1.0&q=80&w=1080",
  },
];

export function Services() {
  return (
    <section id="services" className="py-20 lg:py-32 bg-white overflow-hidden">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true, margin: "-100px" }}
          className="text-center mb-16"
        >
          <div className="inline-block bg-orange-500/10 border border-orange-500/20 rounded-full px-4 py-2 mb-4">
            <span className="text-orange-600 font-semibold text-sm">
              WHAT WE OFFER
            </span>
          </div>
          <h2 className="text-3xl lg:text-5xl font-bold text-slate-900 mb-4">
            Our Services
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Comprehensive solutions designed to transform your business and
            drive exceptional results
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="group hover:shadow-2xl transition-all duration-300 border-0 overflow-hidden bg-white h-full">
                  {/* Image */}
                  <div className="relative h-48 overflow-hidden">
                    <img
                      src={service.image}
                      alt={service.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-linear-to-t from-slate-900/80 to-transparent" />
                    <div className="absolute bottom-4 left-4">
                      <div className="bg-linear-to-br from-orange-500 to-yellow-500 p-3 rounded-lg">
                        <Icon className="w-6 h-6 text-white" />
                      </div>
                    </div>
                  </div>

                  <CardContent className="p-6">
                    <h3 className="text-xl font-bold text-slate-900 mb-3">
                      {service.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                      {service.description}
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
