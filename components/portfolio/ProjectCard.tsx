"use client";
import { motion } from "motion/react";
import type { Project } from "@/lib/portfolio-data";

export default function ProjectCard({
  project,
  index,
}: {
  project: Project;
  index: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 14 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{
        duration: 0.45,
        ease: [0.22, 1, 0.36, 1],
        delay: index * 0.1,
      }}
    >
      <div
        className="gb flex h-full flex-col rounded border p-5"
        style={{ borderColor: "var(--border)" }}
      >
        <span
          className="mb-4 text-[0.58rem] tracking-widest uppercase"
          style={{ color: "var(--fg3)" }}
        >
          {project.year}
        </span>
        <h3
          className="mb-2 text-[0.88rem] font-medium leading-snug tracking-[-0.01em]"
          style={{ color: "var(--fg)" }}
        >
          <a
            href={project.url}
            target="_blank"
            rel="noopener noreferrer"
            className="transition-opacity hover:opacity-60"
            style={{ textDecoration: "none", color: "inherit" }}
          >
            {project.title} ↗
          </a>
        </h3>
        <p
          className="mb-5 flex-1 text-[0.72rem] leading-relaxed"
          style={{ color: "var(--fg2)" }}
        >
          {project.description}
        </p>
        <div className="flex flex-wrap gap-1.5">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="rounded-full border px-2 py-0.5 text-[0.58rem] tracking-[0.06em] uppercase"
              style={{ borderColor: "var(--border)", color: "var(--fg3)" }}
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  );
}
