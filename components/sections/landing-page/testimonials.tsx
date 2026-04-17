"use client";
import { motion } from "motion/react";
import { SectionHeader } from "@/components/ui/primitives";

const testimonials = [
  {
    quote:
      "Before ComHealth came to our village, we had no idea what hypertension was. Now I check my blood pressure monthly and have changed my eating habits completely.",
    author: "Fatima M.",
    role: "Farmer · Kebbi State",
    accentFrom: "#22a049",
    accentTo: "#34c45e",
  },
  {
    quote:
      "The youth program changed how I think about my health. I've quit smoking and I now lead health awareness sessions at my school every Friday.",
    author: "Chukwuemeka O.",
    role: "Student · Lagos State",
    accentFrom: "#f59e0b",
    accentTo: "#22a049",
  },
  {
    quote:
      "Their WhatsApp program sends us tips every week. As a mother of four, I've learned so much about nutrition and how to keep my family healthy affordably.",
    author: "Amina B.",
    role: "Market Trader · Kano State",
    accentFrom: "#22a049",
    accentTo: "#34c45e",
  },
];

const ease = [0.22, 1, 0.36, 1] as const;

export default function Testimonials() {
  return (
    <section className="bg-white py-24 lg:py-36">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7, ease }}
        >
          <SectionHeader
            eyebrow="Community Stories"
            title={
              <>
                Real voices,
                <br />
                <span className="text-forest-500">real change</span>
              </>
            }
            description="The most powerful measure of our work is the lives we've touched and the stories people share with us."
          />
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <motion.div
              key={t.author}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.1, ease }}
              className="group bg-forest-50 border border-forest-100 hover:border-forest-200 rounded-2xl p-7 transition-all duration-300 hover:shadow-xl hover:shadow-forest-500/6 hover:-translate-y-1"
            >
              {/* Accent bar */}
              <div
                className="w-8 h-[3px] rounded-full mb-5"
                style={{
                  background: `linear-gradient(90deg, ${t.accentFrom}, ${t.accentTo})`,
                }}
              />

              {/* Quote mark */}
              <div className="font-serif text-5xl text-forest-200 leading-none mb-2 select-none">
                "
              </div>

              <p className="font-serif text-base font-light italic text-forest-900 leading-relaxed mb-6">
                {t.quote}
              </p>

              <div>
                <p className="font-semibold text-sm text-forest-900">
                  {t.author}
                </p>
                <p className="font-mono text-[10px] tracking-widest uppercase text-forest-500 mt-0.5">
                  {t.role}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
