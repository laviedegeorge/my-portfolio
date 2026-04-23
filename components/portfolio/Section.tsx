"use client";
import { useRef } from "react";
import { useInView } from "motion/react";

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
      className="relative z-10 px-9 py-20"
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
      <div
        style={{
          opacity: inView ? 1 : 0,
          transition: "opacity 0.5s linear",
        }}
      >
        {children}
      </div>
    </section>
  );
}
