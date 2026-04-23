"use client";
import { useState, useEffect } from "react";
import { motion } from "motion/react";
import { siteConfig, navLinks } from "@/lib/portfolio-data";
import ThemeToggle from "./ThemeToggle";
import MobileMenu from "./MobileMenu";
import ContactPopover from "./ContactPopover";

function GitHubIcon() {
  return (
    <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
    </svg>
  );
}

export default function NavBar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.header
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1], delay: 0.05 }}
      className="sticky top-0 z-20 flex items-center justify-between px-6 py-5 md:px-9"
      style={{ borderBottom: "1px solid var(--border)" }}
    >
      {/* Blur layer — separate child so backdropFilter never makes <header>
          a containing block for position:fixed descendants (mobile overlay) */}
      <div
        className="pointer-events-none absolute inset-0 -z-10 transition-opacity duration-300"
        style={{
          opacity: scrolled ? 1 : 0,
          background: "color-mix(in srgb, var(--bg) 72%, transparent)",
          backdropFilter: "blur(14px)",
          WebkitBackdropFilter: "blur(14px)",
        }}
      />
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
        className="hidden items-center gap-6 md:flex"
      >
        <ul className="m-0 flex list-none items-center gap-7 p-0">
          {navLinks.map(({ label, href }) => (
            <li key={label} className="gb gb-nav">
              {label === "Contact" ? (
                <ContactPopover />
              ) : (
                <a
                  href={href}
                  className="text-[0.65rem] tracking-[0.12em] uppercase transition-opacity duration-200 hover:opacity-60"
                  style={{ color: "var(--fg2)", textDecoration: "none" }}
                >
                  {label}
                </a>
              )}
            </li>
          ))}
        </ul>

        {/* GitHub always-visible icon */}
        <a
          href={siteConfig.socials.github}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="GitHub"
          className="transition-opacity hover:opacity-60"
          style={{ color: "var(--fg2)" }}
        >
          <GitHubIcon />
        </a>

        <ThemeToggle />
      </nav>

      {/* Mobile nav */}
      <div className="flex items-center gap-4 md:hidden">
        <a
          href={siteConfig.socials.github}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="GitHub"
          className="transition-opacity hover:opacity-60"
          style={{ color: "var(--fg2)" }}
        >
          <GitHubIcon />
        </a>
        <MobileMenu />
      </div>
    </motion.header>
  );
}
