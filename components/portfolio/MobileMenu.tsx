"use client";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { siteConfig, navLinks } from "@/lib/portfolio-data";
import ThemeToggle from "./ThemeToggle";

function MenuButton({ open, onClick }: { open: boolean; onClick: () => void }) {
  return (
    <button
      onClick={onClick}
      aria-expanded={open}
      aria-label={open ? "Close navigation" : "Open navigation"}
      className="flex h-8 w-8 flex-col items-center justify-center gap-[5px] rounded border"
      style={{ borderColor: "var(--border)", background: "var(--pill)" }}
    >
      <motion.span
        className="block h-px w-[14px] origin-center"
        style={{ background: "var(--fg2)" }}
        animate={open ? { rotate: 45, y: 4.5 } : { rotate: 0, y: 0 }}
        transition={{ duration: 0.22, ease: [0.22, 1, 0.36, 1] }}
      />
      <motion.span
        className="block h-px w-[14px] origin-center"
        style={{ background: "var(--fg2)" }}
        animate={open ? { rotate: -45, y: -4.5 } : { rotate: 0, y: 0 }}
        transition={{ duration: 0.22, ease: [0.22, 1, 0.36, 1] }}
      />
    </button>
  );
}

function MenuOverlay({ onClose }: { onClose: () => void }) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.2 }}
      className="fixed inset-0 z-50 flex flex-col"
      style={{ background: "var(--bg)" }}
    >
      {/* Header */}
      <div
        className="flex items-center justify-between px-6 py-5"
        style={{ borderBottom: "1px solid var(--border)" }}
      >
        <a
          href="/"
          onClick={onClose}
          className="font-serif text-[1.05rem] tracking-[-0.02em]"
          style={{ color: "var(--fg)", textDecoration: "none" }}
        >
          {siteConfig.initials}
        </a>
        <button
          onClick={onClose}
          aria-label="Close navigation"
          className="flex h-8 w-8 items-center justify-center rounded border"
          style={{
            borderColor: "var(--border)",
            background: "var(--pill)",
            color: "var(--fg2)",
          }}
        >
          <svg width="10" height="10" viewBox="0 0 10 10" fill="none">
            <path
              d="M1 1L9 9M9 1L1 9"
              stroke="currentColor"
              strokeWidth="1.2"
              strokeLinecap="round"
            />
          </svg>
        </button>
      </div>

      {/* Links */}
      <nav
        aria-label="Mobile navigation"
        className="flex flex-1 flex-col justify-center px-6"
      >
        {navLinks.map(({ label, href }, i) => (
          <motion.a
            key={label}
            href={href}
            onClick={onClose}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{
              delay: 0.05 + i * 0.07,
              duration: 0.35,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="group flex items-baseline gap-5 py-4"
            style={{
              borderBottom: "1px solid var(--border)",
              textDecoration: "none",
            }}
          >
            <span
              className="w-5 shrink-0 text-[0.52rem] tracking-[0.1em]"
              style={{ color: "var(--fg3)" }}
            >
              0{i + 1}
            </span>
            <span
              className="font-serif text-[1.9rem] leading-none tracking-[-0.02em] transition-opacity group-hover:opacity-50"
              style={{ color: "var(--fg)" }}
            >
              {label}
            </span>
          </motion.a>
        ))}
      </nav>

      {/* Footer */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.42, duration: 0.3 }}
        className="flex items-center justify-between px-6 py-5"
        style={{ borderTop: "1px solid var(--border)" }}
      >
        <span
          className="text-[0.58rem] tracking-[0.1em] uppercase"
          style={{ color: "var(--fg3)" }}
        >
          {siteConfig.initials} · {new Date().getFullYear()}
        </span>
        <ThemeToggle />
      </motion.div>
    </motion.div>
  );
}

export default function MobileMenu() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  return (
    <>
      <MenuButton open={open} onClick={() => setOpen((v) => !v)} />
      <AnimatePresence>
        {open && <MenuOverlay onClose={() => setOpen(false)} />}
      </AnimatePresence>
    </>
  );
}
