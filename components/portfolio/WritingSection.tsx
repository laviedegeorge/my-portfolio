"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { articles } from "@/lib/portfolio-data";
import Section from "./Section";
import ArticleRow from "./ArticleRow";

const tabs = ["Technical", "Personal"] as const;
type Tab = (typeof tabs)[number];

export default function WritingSection() {
  const [active, setActive] = useState<Tab>("Technical");

  const technical = articles.filter((a) => a.category === "technical");
  const personal = articles.filter((a) => a.category === "personal");
  const visible = active === "Technical" ? technical : personal;

  return (
    <Section id="writing" label="Writing / Articles">
      {/* Tab bar */}
      <div
        className="mb-8 flex gap-1 rounded-full border p-1 w-fit"
        style={{ borderColor: "var(--border)", background: "var(--pill)" }}
      >
        {tabs.map((tab) => (
          <button
            key={tab}
            onClick={() => setActive(tab)}
            className="relative rounded-full px-5 py-1.5 text-[0.62rem] tracking-[0.1em] uppercase transition-colors duration-200"
            style={{
              color: active === tab ? "var(--btn-fg)" : "var(--fg3)",
              background: "transparent",
              border: "none",
              cursor: "pointer",
            }}
          >
            {active === tab && (
              <motion.span
                layoutId="tab-pill"
                className="absolute inset-0 rounded-full"
                style={{ background: "var(--btn-bg)" }}
                transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
              />
            )}
            <span className="relative z-10">{tab}</span>
          </button>
        ))}
      </div>

      {/* Article list */}
      <AnimatePresence mode="wait">
        <motion.div
          key={active}
          initial={{ opacity: 0, y: 6 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -6 }}
          transition={{ duration: 0.22, ease: [0.22, 1, 0.36, 1] }}
          className="flex flex-col"
        >
          {visible.map((article, i) => (
            <ArticleRow key={article.title} article={article} index={i} />
          ))}
        </motion.div>
      </AnimatePresence>
    </Section>
  );
}
