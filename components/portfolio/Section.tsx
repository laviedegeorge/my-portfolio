"use client";
import { useRef } from "react";
import { motion, useInView } from "motion/react";

interface SectionProps {
  id: string;
  label: string;
  children: React.ReactNode;
}

export default function Section({ id, label, children }: SectionProps) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section
      id={id}
      ref={ref}
      aria-labelledby={`${id}-heading`}
      className="relative z-10 px-9 py-14"
      style={{ borderTop: "1px solid var(--border)" }}
    >
      <h2 id={`${id}-heading`} className="sr-only">
        {label}
      </h2>
      <p
        className="mb-6 text-[0.65rem] tracking-widest uppercase"
        style={{ color: "var(--fg3)" }}
      >
        {label}
      </p>
      <motion.div
        initial={{ opacity: 0, y: 14 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
      >
        {children}
      </motion.div>
    </section>
  );
}
