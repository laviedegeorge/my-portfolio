"use client";
import { motion } from "motion/react";
import type { Article } from "@/lib/portfolio-data";

export default function ArticleRow({
  article,
  index,
}: {
  article: Article;
  index: number;
}) {
  return (
    <motion.a
      href={article.url}
      target="_blank"
      rel="noopener noreferrer"
      initial={{ opacity: 0, y: 8 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{
        duration: 0.4,
        ease: [0.22, 1, 0.36, 1],
        delay: index * 0.08,
      }}
      className="gb flex items-baseline justify-between gap-4 py-4 transition-opacity hover:opacity-60"
      style={{
        borderBottom: "1px solid var(--border)",
        textDecoration: "none",
      }}
    >
      <span
        className="text-[0.82rem] font-medium leading-snug"
        style={{ color: "var(--fg)" }}
      >
        {article.title}
      </span>
      <span className="flex shrink-0 items-center gap-2">
        <span
          className="rounded-full border px-2 py-0.5 text-[0.58rem] tracking-[0.06em] uppercase"
          style={{ borderColor: "var(--border)", color: "var(--fg3)" }}
        >
          {article.publication}
        </span>
        <span className="text-[0.65rem]" style={{ color: "var(--fg3)" }}>
          {article.date}
        </span>
      </span>
    </motion.a>
  );
}
