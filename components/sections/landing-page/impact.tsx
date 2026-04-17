"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useInView } from "motion/react";
import { SectionHeader } from "@/components/ui/primitives";

const counters = [
  { target: 50000, suffix: "+", label: "Lives Reached", display: "50k" },
  { target: 120, suffix: "+", label: "Communities Served", display: "120" },
  { target: 2400, suffix: "+", label: "Workshop Graduates", display: "2,400" },
  { target: 8, suffix: "+", label: "States Active", display: "8" },
];

function Counter({
  target,
  suffix,
  display,
}: {
  target: number;
  suffix: string;
  display: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });
  const [count, setCount] = useState(0);
  const [done, setDone] = useState(false);

  useEffect(() => {
    if (!isInView || done) return;
    setDone(true);
    const duration = 1800;
    const start = performance.now();
    const tick = (now: number) => {
      const elapsed = now - start;
      const progress = Math.min(elapsed / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(Math.floor(eased * target));
      if (progress < 1) requestAnimationFrame(tick);
    };
    requestAnimationFrame(tick);
  }, [isInView, done, target]);

  const formatted =
    target >= 1000
      ? count >= 1000
        ? `${Math.floor(count / 1000)}k`
        : count.toString()
      : count.toString();

  return (
    <div ref={ref} className="text-center bg-white py-10 px-6">
      <div className="font-serif text-5xl lg:text-6xl font-bold text-forest-900 leading-none">
        {isInView ? formatted : "0"}
        <span className="text-forest-500">{suffix}</span>
      </div>
    </div>
  );
}

const ease = [0.22, 1, 0.36, 1] as const;

export default function Impact() {
  return (
    <section id="impact" className="bg-white py-24 lg:py-36">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7, ease }}
        >
          <SectionHeader
            eyebrow="Our Impact"
            title={
              <>
                Numbers that
                <br />
                <span className="text-forest-500">tell our story</span>
              </>
            }
            description="Every digit represents a real person, a family, a community that now has access to better health knowledge and support."
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease }}
          className="grid grid-cols-2 lg:grid-cols-4 gap-px bg-gray-100 rounded-3xl overflow-hidden shadow-sm"
        >
          {counters.map((c, i) => (
            <motion.div
              key={c.label}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, ease }}
              className="bg-white"
            >
              <Counter
                target={c.target}
                suffix={c.suffix}
                display={c.display}
              />
              <div className="text-center pb-8 px-6">
                <p className="font-mono text-xs tracking-[0.12em] uppercase text-gray-500">
                  {c.label}
                </p>
                <div className="w-8 h-0.5 bg-linear-to-r from-forest-500 to-amber-400 rounded-full mx-auto mt-3" />
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
