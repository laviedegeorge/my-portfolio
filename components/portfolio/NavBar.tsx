"use client";
import { motion } from "motion/react";
import { siteConfig } from "@/lib/portfolio-data";
import ThemeToggle from "./ThemeToggle";

const navLinks = [
  { label: "Work", href: "#projects" },
  { label: "Writing", href: "#writing" },
  { label: "Talks", href: "#talks" },
  { label: "Contact", href: `mailto:${siteConfig.email}` },
];

export default function NavBar() {
  return (
    <motion.header
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1], delay: 0.05 }}
      className="relative z-10 flex items-center justify-between px-9 py-5"
      style={{ borderBottom: "1px solid var(--border)" }}
    >
      <a
        href="/"
        aria-label={`${siteConfig.name} — home`}
        className="gb font-serif text-[1.05rem] tracking-[-0.02em] transition-opacity hover:opacity-60"
        style={{ color: "var(--fg)", textDecoration: "none" }}
      >
        {siteConfig.initials}
      </a>

      <nav aria-label="Primary navigation" className="flex items-center gap-8">
        <ul className="m-0 flex list-none items-center gap-7 p-0">
          {navLinks.map(({ label, href }) => (
            <li key={label} className="gb gb-nav">
              <a
                href={href}
                className="text-[0.65rem] tracking-[0.12em] uppercase transition-opacity duration-200 hover:opacity-100"
                style={{
                  color: "var(--fg)",
                  opacity: 0.45,
                  textDecoration: "none",
                }}
              >
                {label}
              </a>
            </li>
          ))}
        </ul>
        <ThemeToggle />
      </nav>
    </motion.header>
  );
}
