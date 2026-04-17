"use client";
import { motion } from "motion/react";
import { SectionHeader } from "@/components/ui/primitives";

const resources = [
  {
    tag: "Article",
    title: "5 Ways to Prevent Diabetes Through Daily Diet",
    description:
      "Simple, affordable food swaps that can dramatically reduce your risk of Type 2 diabetes.",
  },
  {
    tag: "Infographic",
    title: "Know Your Blood Pressure Numbers",
    description:
      "A visual guide to understanding hypertension and what your readings really mean for your health.",
  },
  {
    tag: "Video",
    title: "Quit Tobacco: A 30-Day Action Plan",
    description:
      "Step-by-step video guide with daily tips, breathing exercises, and community accountability tools.",
  },
  {
    tag: "Guide",
    title: "Healthy Eating on a Nigerian Budget",
    description:
      "Downloadable meal plan using common Nigerian foods to build a balanced, affordable weekly diet.",
  },
  {
    tag: "Health Tips",
    title: "Signs of Stroke: Act FAST",
    description:
      "Learn the warning signs and what to do in the first critical minutes of a stroke emergency.",
  },
  {
    tag: "Article",
    title: "Mental Health in Your Community",
    description:
      "Breaking the stigma around mental wellness in Nigerian communities, with practical first steps.",
  },
  {
    tag: "Quiz",
    title: "Take Our Health Awareness Quiz",
    description:
      "Test your knowledge on chronic disease prevention and get a personalised health tip report.",
  },
  {
    tag: "Library",
    title: "Browse the full resource library →",
    description:
      "Over 200 articles, videos, infographics, and downloadable guides in our growing health library.",
    featured: true,
  },
];

const ease = [0.22, 1, 0.36, 1] as const;

export default function Resources() {
  return (
    <section id="resources" className="bg-forest-50 py-24 lg:py-36">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7, ease }}
        >
          <SectionHeader
            eyebrow="Learn"
            title={
              <>
                Health resources
                <br />
                <span className="text-forest-500">for everyone</span>
              </>
            }
            description="Plain-language articles, infographics, videos, and downloadable guides — designed for accessibility at all literacy levels."
          />
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {resources.map((r, i) => (
            <motion.div
              key={r.title}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: (i % 4) * 0.08, ease }}
              className={`group rounded-2xl p-5 border cursor-pointer transition-all duration-300 hover:-translate-y-1 ${
                r.featured
                  ? "bg-forest-900 border-forest-700 hover:border-forest-500"
                  : "bg-white border-gray-100 hover:border-forest-200 hover:shadow-lg hover:shadow-forest-500/5"
              }`}
            >
              <span
                className={`inline-block font-mono text-[10px] tracking-[0.14em] uppercase rounded-full px-2.5 py-1 mb-3 ${
                  r.featured
                    ? "bg-forest-500/15 border border-forest-500/30 text-forest-300"
                    : "bg-forest-500/10 border border-forest-500/20 text-forest-500"
                }`}
              >
                {r.tag}
              </span>
              <h3
                className={`text-sm font-semibold leading-snug mb-2 ${
                  r.featured ? "text-white" : "text-forest-900"
                }`}
              >
                {r.title}
              </h3>
              <p
                className={`font-mono text-[11px] leading-relaxed ${
                  r.featured ? "text-white/40" : "text-gray-500"
                }`}
              >
                {r.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
