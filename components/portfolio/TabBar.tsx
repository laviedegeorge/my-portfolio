"use client";
import { useState } from "react";
import { motion } from "motion/react";

function WheelText({
  children,
  hovered,
}: {
  children: string;
  hovered: boolean;
}) {
  return (
    <span
      className="relative z-10 inline-block overflow-hidden leading-none"
      style={{ height: "1em" }}
    >
      <motion.span
        className="block leading-none"
        animate={{ y: hovered ? "-100%" : "0%" }}
        transition={{ duration: 0.48, ease: [0.22, 1, 0.36, 1] }}
      >
        {children}
      </motion.span>
      <motion.span
        className="absolute inset-x-0 top-0 block leading-none"
        animate={{ y: hovered ? "0%" : "100%" }}
        transition={{ duration: 0.48, ease: [0.22, 1, 0.36, 1] }}
      >
        {children}
      </motion.span>
    </span>
  );
}

interface TabBarProps {
  tabs: readonly string[];
  active: string;
  onChange: (tab: string) => void;
  layoutId: string;
  label?: string;
}

export function tabButtonId(layoutId: string, tab: string) {
  return `${layoutId}-tab-${tab.toLowerCase().replace(/[^a-z0-9]+/g, "-")}`;
}

export function tabPanelId(layoutId: string, tab: string) {
  return `${layoutId}-panel-${tab.toLowerCase().replace(/[^a-z0-9]+/g, "-")}`;
}

export default function TabBar({
  tabs,
  active,
  onChange,
  layoutId,
  label,
}: TabBarProps) {
  const [hoveredTab, setHoveredTab] = useState<string | null>(null);

  return (
    <div
      role="tablist"
      aria-label={label}
      className="mb-8 flex w-fit gap-1 rounded-full border p-1"
      style={{ borderColor: "var(--border)", background: "var(--pill)" }}
    >
      {tabs.map((tab) => {
        const isActive = active === tab;
        return (
          <button
            key={tab}
            role="tab"
            id={tabButtonId(layoutId, tab)}
            aria-selected={isActive}
            aria-controls={tabPanelId(layoutId, tab)}
            onClick={() => onChange(tab)}
            onMouseEnter={() => setHoveredTab(tab)}
            onMouseLeave={() => setHoveredTab(null)}
            className="relative rounded-full px-5 py-1.5 text-[0.62rem] tracking-[0.1em] uppercase"
            style={{
              color: isActive ? "var(--btn-fg)" : "var(--fg2)",
              background: "transparent",
              border: "none",
              cursor: "pointer",
            }}
          >
            {isActive && (
              <motion.span
                layoutId={layoutId}
                className="absolute inset-0 rounded-full"
                style={{ background: "var(--btn-bg)" }}
                transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
              />
            )}
            {isActive ? (
              <span className="relative z-10">{tab}</span>
            ) : (
              <WheelText hovered={hoveredTab === tab}>{tab}</WheelText>
            )}
          </button>
        );
      })}
    </div>
  );
}
