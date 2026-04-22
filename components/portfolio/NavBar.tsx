"use client";
import { motion } from "motion/react";
import { siteConfig, navLinks } from "@/lib/portfolio-data";
import ThemeToggle from "./ThemeToggle";
import MobileMenu from "./MobileMenu";

export default function NavBar() {
  return (
    <motion.header
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1], delay: 0.05 }}
      className="sticky top-0 z-20 flex items-center justify-between px-6 py-5 md:px-9"
      style={{
        borderBottom: "1px solid var(--border)",
        background: "var(--bg)",
      }}
    >
      <a
        href="/"
        aria-label={`${siteConfig.name} — home`}
        className="gb font-serif text-[1.05rem] tracking-[-0.02em] transition-opacity hover:opacity-60"
        style={{ color: "var(--fg)", textDecoration: "none" }}
      >
        {siteConfig.initials}
      </a>

      {/* Desktop nav */}
      <nav
        aria-label="Primary navigation"
        className="hidden items-center gap-8 md:flex"
      >
        <ul className="m-0 flex list-none items-center gap-7 p-0">
          {navLinks.map(({ label, href }) => (
            <li key={label} className="gb gb-nav">
              <a
                href={href}
                className="text-[0.65rem] tracking-[0.12em] uppercase transition-opacity duration-200 hover:opacity-60"
                style={{ color: "var(--fg2)", textDecoration: "none" }}
              >
                {label}
              </a>
            </li>
          ))}
        </ul>
        <ThemeToggle />
      </nav>

      {/* Mobile nav */}
      <div className="md:hidden">
        <MobileMenu />
      </div>
    </motion.header>
  );
}
