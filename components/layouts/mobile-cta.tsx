"use client";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "motion/react";

export default function MobileCtaBar() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handler = () => setVisible(window.scrollY > 400);
    window.addEventListener("scroll", handler, { passive: true });
    return () => window.removeEventListener("scroll", handler);
  }, []);

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ y: 80, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 80, opacity: 0 }}
          transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
          className="fixed bottom-0 left-0 right-0 z-40 md:hidden"
        >
          {/* Blur backdrop */}
          <div className="bg-forest-900/95 backdrop-blur-md border-t border-white/10 px-4 py-3 pb-safe flex gap-2.5">
            <a
              href="#programs"
              className="flex-1 inline-flex items-center justify-center font-mono text-[11px] tracking-wider uppercase bg-forest-500 text-white py-3 rounded-xl hover:bg-forest-400 transition-colors"
            >
              Explore Programs
            </a>
            <a
              href="https://wa.me/2348000000000"
              className="flex-1 inline-flex items-center justify-center font-mono text-[11px] tracking-wider uppercase bg-[#25D366] text-white py-3 rounded-xl hover:bg-[#20b857] transition-colors"
            >
              WhatsApp Us
            </a>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
