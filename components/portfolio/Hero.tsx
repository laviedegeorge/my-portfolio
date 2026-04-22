"use client";
import { motion } from "motion/react";
import { siteConfig, stats } from "@/lib/portfolio-data";
import ScrollIndicator from "./ScrollIndicator";

const ease = [0.22, 1, 0.36, 1] as const;

export default function Hero() {
  return (
    <section
      aria-label="Introduction"
      className="relative z-10 flex flex-1 flex-col"
    >
      {/* ── Content ── */}
      <div className="max-w-185 px-9 pb-10 pt-16">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, ease, delay: 0.18 }}
          className="mb-9 inline-flex items-center gap-2 rounded-full border px-3 py-1 text-[0.62rem] tracking-widest uppercase"
          style={{
            color: "var(--fg2)",
            borderColor: "var(--border)",
            background: "var(--pill)",
          }}
        >
          <span
            aria-label="Available for work"
            className="h-1.5 w-1.5 rounded-full bg-green-700"
            style={{ animation: "pulse 2s ease-in-out infinite" }}
          />
          Available to jobs
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, ease, delay: 0.3 }}
          className="mb-6 font-serif leading-[1.08] tracking-[-0.03em]"
          style={{ color: "var(--fg)", fontSize: "clamp(2.4rem, 6vw, 4rem)" }}
        >
          Building things
          <br />
          <em style={{ color: "var(--fg2)", fontStyle: "italic" }}>people </em>
          actually use
          <span
            aria-hidden
            className="ml-0.75 inline-block h-[0.8em] w-0.5 align-middle"
            style={{
              background: "var(--fg2)",
              animation: "blink 1.1s step-end infinite",
            }}
          />
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, ease, delay: 0.42 }}
          className="mb-9 max-w-105 text-[0.75rem] leading-[1.95]"
          style={{ color: "var(--fg2)" }}
        >
          I&apos;m a{" "}
          <strong style={{ color: "var(--fg)", fontWeight: 500 }}>
            Product Engineer
          </strong>{" "}
          based in {siteConfig.location}. I write about the web, speak at
          conferences, and ship products at the intersection of{" "}
          <strong style={{ color: "var(--fg)", fontWeight: 500 }}>
            design and engineering
          </strong>
          .
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, ease, delay: 0.54 }}
          className="flex flex-wrap items-center gap-3"
        >
          <span className="gb">
            <a
              href="#projects"
              className="inline-block rounded-full px-5 py-2.25 text-[0.65rem] tracking-[0.08em] uppercase transition-opacity hover:opacity-80"
              style={{
                background: "var(--btn-bg)",
                color: "var(--btn-fg)",
                fontFamily: "inherit",
                textDecoration: "none",
              }}
            >
              See my work
            </a>
          </span>
          <span className="gb">
            <a
              href="#writing"
              className="inline-block rounded-full border px-5 py-2.25 text-[0.65rem] tracking-[0.08em] uppercase transition-opacity hover:opacity-100"
              style={{
                borderColor: "var(--border)",
                color: "var(--fg2)",
                fontFamily: "inherit",
                textDecoration: "none",
              }}
            >
              Read writing
            </a>
          </span>
          <span
            className="flex items-center gap-1.5 text-[0.62rem]"
            style={{ color: "var(--fg3)" }}
          >
            <span
              className="block h-px w-4.5"
              style={{ background: "var(--fg3)" }}
            />
            or reach out
          </span>
        </motion.div>
      </div>

      {/* ── Stats strip ── */}
      <motion.div
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.55, ease, delay: 0.68 }}
        className="flex flex-wrap"
        style={{ borderTop: "1px solid var(--border)" }}
      >
        {stats.map((stat) => (
          <div
            key={stat.label}
            className="gb cursor-default border-r px-9 py-5 last:border-r-0"
            style={{ borderColor: "var(--border)" }}
          >
            <p
              className="mb-0.75 font-serif text-[1.5rem] leading-none tracking-[-0.03em]"
              style={{ color: "var(--fg)" }}
            >
              {stat.value}
            </p>
            <p
              className="text-[0.58rem] tracking-widest uppercase"
              style={{ color: "var(--fg3)" }}
            >
              {stat.label}
            </p>
          </div>
        ))}
      </motion.div>

      {/* ── Scroll indicator ── */}
      <ScrollIndicator targetId="experience" />
    </section>
  );
}
