"use client";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { siteConfig, navLinks } from "@/lib/portfolio-data";
import ThemeToggle from "./ThemeToggle";

function XIcon() {
  return (
    <svg width="13" height="13" viewBox="0 0 24 24" fill="currentColor">
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.742l7.732-8.835L1.254 2.25H8.08l4.253 5.622zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
    </svg>
  );
}

function GitHubIcon() {
  return (
    <svg width="13" height="13" viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
    </svg>
  );
}

function LinkedInIcon() {
  return (
    <svg width="13" height="13" viewBox="0 0 24 24" fill="currentColor">
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
    </svg>
  );
}

function MailIcon() {
  return (
    <svg
      width="13"
      height="13"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect x="2" y="4" width="20" height="16" rx="2" />
      <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
    </svg>
  );
}

function CopyIcon() {
  return (
    <svg
      width="11"
      height="11"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect x="9" y="9" width="13" height="13" rx="2" />
      <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1" />
    </svg>
  );
}

function CheckIcon() {
  return (
    <svg
      width="11"
      height="11"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M20 6 9 17l-5-5" />
    </svg>
  );
}

const contactLinks = [
  {
    label: "LinkedIn",
    href: siteConfig.socials.linkedin,
    icon: <LinkedInIcon />,
  },
  { label: "X", href: siteConfig.socials.x, icon: <XIcon /> },
].filter(({ href }) => href !== "#");

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
  const [contactOpen, setContactOpen] = useState(false);
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(siteConfig.email);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      // fallback silently
    }
  };

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
        {navLinks.map(({ label, href }, i) => {
          if (label === "Contact") {
            return (
              <motion.div
                key={label}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{
                  delay: 0.05 + i * 0.07,
                  duration: 0.35,
                  ease: [0.22, 1, 0.36, 1],
                }}
                style={{ borderBottom: "1px solid var(--border)" }}
              >
                {/* Contact toggle row */}
                <button
                  onClick={() => setContactOpen((v) => !v)}
                  className="group flex w-full items-baseline gap-5 py-4"
                  style={{
                    background: "none",
                    border: "none",
                    cursor: "pointer",
                    padding: "1rem 0",
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
                  <motion.span
                    animate={{ rotate: contactOpen ? 180 : 0 }}
                    transition={{ duration: 0.22, ease: [0.22, 1, 0.36, 1] }}
                    className="ml-auto"
                    style={{ color: "var(--fg3)" }}
                  >
                    <svg
                      width="12"
                      height="12"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.8"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="m6 9 6 6 6-6" />
                    </svg>
                  </motion.span>
                </button>

                {/* Expanded contact panel */}
                <AnimatePresence initial={false}>
                  {contactOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
                      style={{ overflow: "hidden" }}
                    >
                      <div className="flex flex-col gap-1 pb-4 pl-10">
                        {contactLinks.map(({ label: cLabel, href, icon }) => (
                          <a
                            key={cLabel}
                            href={href}
                            target="_blank"
                            rel="noopener noreferrer"
                            onClick={onClose}
                            className="flex items-center gap-3 rounded-md px-3 py-2.5 text-[0.75rem] tracking-[0.05em] transition-opacity hover:opacity-60"
                            style={{
                              color: "var(--fg2)",
                              textDecoration: "none",
                            }}
                          >
                            <span style={{ color: "var(--fg3)" }}>{icon}</span>
                            {cLabel}
                          </a>
                        ))}

                        {/* Email row */}
                        <div className="flex items-center gap-1 rounded-md px-3 py-2.5">
                          <a
                            href={`mailto:${siteConfig.email}`}
                            onClick={onClose}
                            className="flex flex-1 items-center gap-3 text-[0.75rem] tracking-[0.05em] transition-opacity hover:opacity-60"
                            style={{
                              color: "var(--fg2)",
                              textDecoration: "none",
                            }}
                          >
                            <span style={{ color: "var(--fg3)" }}>
                              <MailIcon />
                            </span>
                            <span className="truncate">{siteConfig.email}</span>
                          </a>
                          <button
                            onClick={handleCopy}
                            title={copied ? "Copied!" : "Copy email"}
                            className="shrink-0 rounded p-1.5 transition-opacity hover:opacity-60"
                            style={{
                              color: copied ? "var(--fg)" : "var(--fg3)",
                              background: "var(--pill)",
                              border: "none",
                              cursor: "pointer",
                            }}
                          >
                            <AnimatePresence mode="wait" initial={false}>
                              {copied ? (
                                <motion.span
                                  key="check"
                                  initial={{ scale: 0.6, opacity: 0 }}
                                  animate={{ scale: 1, opacity: 1 }}
                                  exit={{ scale: 0.6, opacity: 0 }}
                                  transition={{ duration: 0.15 }}
                                  style={{ display: "block" }}
                                >
                                  <CheckIcon />
                                </motion.span>
                              ) : (
                                <motion.span
                                  key="copy"
                                  initial={{ scale: 0.6, opacity: 0 }}
                                  animate={{ scale: 1, opacity: 1 }}
                                  exit={{ scale: 0.6, opacity: 0 }}
                                  transition={{ duration: 0.15 }}
                                  style={{ display: "block" }}
                                >
                                  <CopyIcon />
                                </motion.span>
                              )}
                            </AnimatePresence>
                          </button>
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          }

          return (
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
          );
        })}
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
          className="text-[0.58rem] tracking-widest uppercase"
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
