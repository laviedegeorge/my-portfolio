"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { talks, volunteers } from "@/lib/portfolio-data";
import Section from "./Section";
import TalkCard from "./TalkCard";
import TabBar from "./TabBar";

const tabs = ["Talks & Judging", "Volunteering"] as const;
type Tab = (typeof tabs)[number];

export default function TalksSection() {
  const [active, setActive] = useState<Tab>("Talks & Judging");

  return (
    <Section id="talks" label="Talks">
      <TabBar
        tabs={tabs}
        active={active}
        onChange={(t) => setActive(t as Tab)}
        layoutId="talks-tab-pill"
      />

      {/* Content */}
      <AnimatePresence mode="wait">
        <motion.div
          key={active}
          initial={{ opacity: 0, y: 6 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -6 }}
          transition={{ duration: 0.22, ease: [0.22, 1, 0.36, 1] }}
        >
          {active === "Talks & Judging" ? (
            <div className="flex flex-col gap-2.5">
              {talks.map((talk, i) => (
                <TalkCard key={talk.title} talk={talk} index={i} />
              ))}
            </div>
          ) : volunteers.length > 0 ? (
            <div className="flex flex-col gap-2.5">
              {volunteers.map((v, i) => (
                <motion.div
                  key={v.title}
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{
                    duration: 0.4,
                    ease: [0.22, 1, 0.36, 1],
                    delay: i * 0.09,
                  }}
                  className="gb flex items-start gap-4 rounded border p-4"
                  style={{ borderColor: "var(--border)" }}
                >
                  <span
                    className="mt-0.5 shrink-0 text-[0.62rem] tracking-[0.06em]"
                    style={{ color: "var(--fg3)", minWidth: "2.2rem" }}
                  >
                    {v.year}
                  </span>
                  <div className="flex flex-col gap-1">
                    <span
                      className="text-[0.82rem] font-medium leading-snug"
                      style={{ color: "var(--fg)" }}
                    >
                      {v.title}
                    </span>
                    <span
                      className="text-[0.7rem]"
                      style={{ color: "var(--fg2)" }}
                    >
                      {v.organisation}
                    </span>
                    {v.description && (
                      <span
                        className="mt-0.5 text-[0.68rem] leading-relaxed"
                        style={{ color: "var(--fg3)" }}
                      >
                        {v.description}
                      </span>
                    )}
                  </div>
                </motion.div>
              ))}
            </div>
          ) : (
            <p className="text-[0.72rem]" style={{ color: "var(--fg3)" }}>
              Volunteering details coming soon.
            </p>
          )}
        </motion.div>
      </AnimatePresence>
    </Section>
  );
}
