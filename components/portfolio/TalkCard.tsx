"use client";
import { motion } from "motion/react";
import type { Talk, TalkType } from "@/lib/portfolio-data";

const badgeStyle = (type: TalkType): React.CSSProperties =>
  type === "conference"
    ? { background: "#E6F1FB", color: "#0C447C" }
    : type === "online"
      ? { background: "#EAF3DE", color: "#3B6D11" }
      : { background: "#EEEDFE", color: "#3C3489" };

export default function TalkCard({
  talk,
  index,
}: {
  talk: Talk;
  index: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 8 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{
        duration: 0.4,
        ease: [0.22, 1, 0.36, 1],
        delay: index * 0.09,
      }}
      className="gb flex items-start gap-4 rounded border p-4"
      style={{ borderColor: "var(--border)" }}
    >
      <span
        className="mt-0.5 shrink-0 text-[0.62rem] tracking-[0.06em]"
        style={{ color: "var(--fg3)", minWidth: "2.2rem" }}
      >
        {talk.year}
      </span>
      <div className="flex flex-col gap-1.5">
        <span
          className="text-[0.82rem] font-medium leading-snug"
          style={{ color: "var(--fg)" }}
        >
          {talk.url ? (
            <a
              href={talk.url}
              target="_blank"
              rel="noopener noreferrer"
              className="transition-opacity hover:opacity-60"
              style={{ textDecoration: "none", color: "inherit" }}
            >
              {talk.title} ↗
            </a>
          ) : (
            talk.title
          )}
        </span>
        <span className="text-[0.7rem]" style={{ color: "var(--fg2)" }}>
          {talk.event}
        </span>
        <span
          className="self-start rounded-full px-2 py-0.5 text-[0.58rem] tracking-[0.06em] uppercase"
          style={badgeStyle(talk.type)}
        >
          {talk.type}
        </span>
      </div>
    </motion.div>
  );
}
