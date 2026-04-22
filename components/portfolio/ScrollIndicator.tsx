"use client";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";

interface ScrollIndicatorProps {
  targetId: string;
}

export default function ScrollIndicator({ targetId }: ScrollIndicatorProps) {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const target = document.getElementById(targetId);
    if (!target) return;
    const observer = new IntersectionObserver(
      ([entry]) => setVisible(!entry.isIntersecting),
      { threshold: 0.1 },
    );
    observer.observe(target);
    return () => observer.disconnect();
  }, [targetId]);

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0, transition: { duration: 0.25 } }}
          transition={{ delay: 0.9, duration: 0.5 }}
          className="mt-auto flex justify-center pb-10 pt-6"
        >
          <a
            href={`#${targetId}`}
            aria-label="Scroll to next section"
            className="group flex flex-col items-center gap-2.5"
            style={{ textDecoration: "none" }}
          >
            <span
              className="text-[0.55rem] tracking-[0.22em] uppercase transition-opacity group-hover:opacity-60"
              style={{ color: "var(--fg3)" }}
            >
              scroll
            </span>

            {/* Sliding rail */}
            <div
              className="relative h-10 w-px overflow-hidden"
              style={{ background: "var(--border)" }}
            >
              <motion.div
                className="absolute left-0 w-full"
                style={{ height: "40%", background: "var(--fg2)" }}
                animate={{ y: ["-100%", "280%"] }}
                transition={{
                  duration: 1.4,
                  repeat: Infinity,
                  ease: [0.4, 0, 0.6, 1],
                  repeatDelay: 0.5,
                }}
              />
            </div>

            <svg
              width="8"
              height="5"
              viewBox="0 0 8 5"
              fill="none"
              aria-hidden
              className="transition-opacity group-hover:opacity-60"
              style={{ color: "var(--fg3)" }}
            >
              <path
                d="M1 1L4 4L7 1"
                stroke="currentColor"
                strokeWidth="1"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </a>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
