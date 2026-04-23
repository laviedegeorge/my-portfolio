"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { articles } from "@/lib/portfolio-data";
import Section from "./Section";
import ArticleRow from "./ArticleRow";
import TabBar from "./TabBar";

const tabs = ["Technical", "Personal"] as const;
type Tab = (typeof tabs)[number];

export default function WritingSection() {
  const [active, setActive] = useState<Tab>("Technical");

  const technical = articles.filter((a) => a.category === "technical");
  const personal = articles.filter((a) => a.category === "personal");
  const visible = active === "Technical" ? technical : personal;

  return (
    <Section id="writing" label="Writing / Articles">
      <TabBar
        tabs={tabs}
        active={active}
        onChange={(t) => setActive(t as Tab)}
        layoutId="writing-tab-pill"
      />

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
