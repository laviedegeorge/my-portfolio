"use client";

import { Menu, X, ArrowRight } from "lucide-react";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const navItems = [
    { label: "Home", href: "#home" },
    { label: "About", href: "#about" },
    { label: "Services", href: "#services" },
    { label: "Team", href: "#team" },
    { label: "Contact", href: "#contact" },
  ];

  return (
    <motion.header
      initial={{ opacity: 0, y: -16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-slate-900/95 backdrop-blur-md border-b border-white/5 shadow-xl shadow-black/20"
          : "bg-transparent border-b border-transparent"
      }`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <div className="flex items-center gap-3">
            <div className="bg-orange-500 text-white px-3 py-1.5 font-bold font-mono text-sm tracking-widest">
              LCA
            </div>
            <span className="hidden sm:block w-px h-4 bg-white/10" />
            <span className="hidden sm:block text-white/30 font-mono text-[10px] tracking-[0.2em] uppercase">
              Consulting
            </span>
          </div>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-1">
            {navItems.map((item, i) => (
              <motion.a
                key={item.label}
                href={item.href}
                initial={{ opacity: 0, y: -8 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.5,
                  delay: 0.1 + i * 0.06,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="relative px-4 py-2 text-white/50 hover:text-white font-mono text-xs tracking-widest uppercase transition-colors duration-200 group"
              >
                {item.label}
                {/* Underline accent — mirrors card's via-orange-500 line */}
                <span className="absolute bottom-1 left-4 right-4 h-px bg-linear-to-r from-transparent via-orange-500/70 to-transparent scale-x-0 group-hover:scale-x-100 transition-transform duration-300" />
              </motion.a>
            ))}
          </nav>

          {/* Desktop CTA */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="hidden lg:block"
          >
            <button className="flex items-center gap-2 border border-white/10 hover:border-orange-500/50 hover:bg-orange-500/10 text-white/40 hover:text-orange-400 px-4 py-2 rounded-lg text-[11px] font-mono tracking-wide transition-all duration-200">
              Get Started
              <ArrowRight className="w-3 h-3" />
            </button>
          </motion.div>

          {/* Mobile Toggle */}
          <button
            className="lg:hidden p-2 text-white/50 hover:text-white transition-colors"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? (
              <X className="w-5 h-5" />
            ) : (
              <Menu className="w-5 h-5" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
            className="lg:hidden overflow-hidden bg-slate-900/98 backdrop-blur-md border-t border-white/5"
          >
            <nav className="container mx-auto px-4 sm:px-6 py-4 flex flex-col gap-1">
              {navItems.map((item, i) => (
                <motion.a
                  key={item.label}
                  href={item.href}
                  initial={{ opacity: 0, x: -12 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{
                    duration: 0.3,
                    delay: i * 0.05,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                  onClick={() => setIsMenuOpen(false)}
                  className="flex items-center justify-between px-3 py-3 text-white/50 hover:text-white font-mono text-xs tracking-[0.15em] uppercase border border-transparent hover:border-white/5 hover:bg-white/5 rounded-lg transition-all duration-200"
                >
                  {item.label}
                  <span className="text-white/20 font-mono text-[10px]">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                </motion.a>
              ))}

              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.3, delay: 0.3 }}
                className="mt-3 pt-3 border-t border-white/5"
              >
                <button className="w-full flex items-center justify-center gap-2 bg-orange-500 hover:bg-orange-400 text-white px-4 py-3 rounded-lg text-[11px] font-mono tracking-wide transition-all duration-200">
                  Get Started
                  <ArrowRight className="w-3 h-3" />
                </button>
              </motion.div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
