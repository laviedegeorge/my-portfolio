"use client";
import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { siteConfig } from "@/lib/portfolio-data";

function LinkedInIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
    </svg>
  );
}

function TwitterIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.742l7.732-8.835L1.254 2.25H8.08l4.253 5.622zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
    </svg>
  );
}

function MailIcon() {
  return (
    <svg
      width="14"
      height="14"
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
      width="12"
      height="12"
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
      width="12"
      height="12"
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

const socials = [
  siteConfig.socials.linkedin !== "#" && {
    label: "LinkedIn",
    href: siteConfig.socials.linkedin,
    icon: <LinkedInIcon />,
  },
  siteConfig.socials.x !== "#" && {
    label: "X",
    href: siteConfig.socials.x,
    icon: <TwitterIcon />,
  },
].filter(Boolean) as { label: string; href: string; icon: React.ReactNode }[];

export default function ContactPopover() {
  const [open, setOpen] = useState(false);
  const [copied, setCopied] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    const onClickOutside = (e: MouseEvent) => {
      if (
        containerRef.current &&
        !containerRef.current.contains(e.target as Node)
      ) {
        setOpen(false);
      }
    };
    document.addEventListener("keydown", onKey);
    document.addEventListener("mousedown", onClickOutside);
    return () => {
      document.removeEventListener("keydown", onKey);
      document.removeEventListener("mousedown", onClickOutside);
    };
  }, [open]);

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
    <div ref={containerRef} className="relative">
      <button
        onClick={() => setOpen((v) => !v)}
        className="text-[0.65rem] tracking-[0.12em] uppercase transition-opacity duration-200 hover:opacity-60"
        style={{
          color: "var(--fg2)",
          background: "none",
          border: "none",
          cursor: "pointer",
          padding: 0,
        }}
        aria-expanded={open}
        aria-haspopup="true"
      >
        Contact
      </button>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: 6, scale: 0.97 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 6, scale: 0.97 }}
            transition={{ duration: 0.18, ease: [0.22, 1, 0.36, 1] }}
            className="absolute right-0 top-full z-50 mt-3 min-w-52 rounded-lg border p-3"
            style={{
              background: "var(--bg)",
              borderColor: "var(--border)",
              boxShadow:
                "0 8px 32px rgba(0,0,0,0.12), 0 1px 4px rgba(0,0,0,0.08)",
            }}
          >
            {/* Social links */}
            <div className="flex flex-col gap-0.5">
              {socials.map(({ label, href, icon }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2.5 rounded-md px-2.5 py-2 text-[0.68rem] tracking-[0.06em] transition-colors duration-150"
                  style={{ color: "var(--fg2)", textDecoration: "none" }}
                  onMouseEnter={(e) =>
                    (e.currentTarget.style.background = "var(--pill)")
                  }
                  onMouseLeave={(e) =>
                    (e.currentTarget.style.background = "transparent")
                  }
                  onClick={() => setOpen(false)}
                >
                  <span style={{ color: "var(--fg3)" }}>{icon}</span>
                  {label}
                </a>
              ))}

              {/* Divider */}
              <div
                className="my-1.5 h-px"
                style={{ background: "var(--border)" }}
              />

              {/* Email row */}
              <div className="flex items-center gap-1 rounded-md px-2.5 py-2">
                <a
                  href={`mailto:${siteConfig.email}`}
                  className="flex flex-1 items-center gap-2.5 text-[0.68rem] tracking-[0.06em]"
                  style={{ color: "var(--fg2)", textDecoration: "none" }}
                  onClick={() => setOpen(false)}
                >
                  <span style={{ color: "var(--fg3)" }}>
                    <MailIcon />
                  </span>
                  <span className="truncate">{siteConfig.email}</span>
                </a>
                <button
                  onClick={handleCopy}
                  title={copied ? "Copied!" : "Copy email"}
                  className="ml-1 shrink-0 rounded p-1 transition-colors duration-150"
                  style={{
                    color: copied ? "var(--fg)" : "var(--fg3)",
                    background: "none",
                    border: "none",
                    cursor: "pointer",
                  }}
                  onMouseEnter={(e) =>
                    (e.currentTarget.style.background = "var(--pill)")
                  }
                  onMouseLeave={(e) =>
                    (e.currentTarget.style.background = "transparent")
                  }
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
    </div>
  );
}
