"use client";

import { useState, useEffect, useRef, useCallback } from "react";
import { motion, AnimatePresence } from "motion/react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { cn } from "@/lib/utils";

const partners = [
  { name: "JCF Group", tagline: "Finance", color: "#3b82f6", initials: "JG" },
  {
    name: "Partner Co",
    tagline: "Consulting",
    color: "#8b5cf6",
    initials: "PC",
  },
  {
    name: "Solutions Ltd",
    tagline: "Technology",
    color: "#10b981",
    initials: "SL",
  },
  {
    name: "Tech Corp",
    tagline: "Innovation",
    color: "#f97316",
    initials: "TC",
  },
  {
    name: "Global Inc",
    tagline: "Enterprise",
    color: "#ef4444",
    initials: "GI",
  },
  { name: "Enterprise", tagline: "Strategy", color: "#06b6d4", initials: "EN" },
  { name: "Innovate", tagline: "R&D", color: "#ec4899", initials: "IN" },
  { name: "Digital Co", tagline: "Digital", color: "#f59e0b", initials: "DC" },
];

const VISIBLE = 5;

function useCarousel(total: number, autoplayDelay = 3500) {
  const [active, setActive] = useState(0);
  const [direction, setDirection] = useState<1 | -1>(1);
  const [paused, setPaused] = useState(false);
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);

  const next = useCallback(() => {
    setDirection(1);
    setActive((a) => (a + 1) % total);
  }, [total]);
  const prev = useCallback(() => {
    setDirection(-1);
    setActive((a) => (a - 1 + total) % total);
  }, [total]);
  const goto = useCallback((i: number, cur: number) => {
    setDirection(i > cur ? 1 : -1);
    setActive(i);
  }, []);

  useEffect(() => {
    if (paused) return;
    timerRef.current = setInterval(next, autoplayDelay);
    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [paused, next, autoplayDelay]);

  return { active, direction, next, prev, goto, setPaused };
}

function getVisible(active: number, total: number, count: number) {
  const half = Math.floor(count / 2);
  return Array.from({ length: count }, (_, i) => ({
    partnerIdx: (active + (i - half) + total) % total,
    dist: i - half,
  }));
}

function PartnerLogo({
  color,
  initials,
  size = 48,
}: {
  color: string;
  initials: string;
  size?: number;
}) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 48 48"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect width="48" height="48" rx="12" fill={color} fillOpacity="0.12" />
      <rect
        x="1"
        y="1"
        width="46"
        height="46"
        rx="11"
        stroke={color}
        strokeOpacity="0.3"
        strokeWidth="1.5"
      />
      <circle cx="24" cy="16" r="5" fill={color} fillOpacity="0.7" />
      <rect
        x="14"
        y="24"
        width="20"
        height="3"
        rx="1.5"
        fill={color}
        fillOpacity="0.5"
      />
      <rect
        x="17"
        y="30"
        width="14"
        height="3"
        rx="1.5"
        fill={color}
        fillOpacity="0.35"
      />
    </svg>
  );
}

export function ClientsPartners() {
  const { active, direction, next, prev, goto, setPaused } = useCarousel(
    partners.length,
  );
  const visibleSlots = getVisible(active, partners.length, VISIBLE);

  const dragStart = useRef<number | null>(null);
  const handleDragStart = (e: React.MouseEvent | React.TouchEvent) => {
    dragStart.current = "touches" in e ? e.touches[0].clientX : e.clientX;
  };
  const handleDragEnd = (e: React.MouseEvent | React.TouchEvent) => {
    if (dragStart.current === null) return;
    const end = "changedTouches" in e ? e.changedTouches[0].clientX : e.clientX;
    const diff = dragStart.current - end;
    if (Math.abs(diff) > 40) diff > 0 ? next() : prev();
    dragStart.current = null;
  };

  return (
    <section className="relative overflow-hidden bg-gray-50 py-20 sm:py-28 lg:py-36">
      {/* Warm background glow */}
      <div className="pointer-events-none absolute left-1/2 top-1/2 h-[500px] w-[800px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-orange-100/80 blur-3xl" />

      <div className="relative mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        {/* ── Header — design system ── */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          viewport={{ once: true, margin: "-80px" }}
          className="mb-12 sm:mb-16 lg:mb-20 flex flex-col lg:flex-row lg:items-end lg:justify-between gap-4 lg:gap-8"
        >
          <div>
            <div className="flex items-center gap-2 mb-4 sm:mb-5">
              <span className="w-6 h-px bg-orange-500" />
              <span className="text-orange-500 font-mono text-xs tracking-[0.2em] uppercase">
                Our Network
              </span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-6xl font-bold text-slate-900 leading-[1.05] tracking-tight">
              Clients &amp;
              <br />
              <span className="text-orange-500">partners</span>
            </h2>
          </div>
          <p className="text-slate-500 text-sm sm:text-base max-w-xs leading-relaxed lg:text-right">
            Trusted by leading organisations worldwide — built on results,
            sustained by relationships.
          </p>
        </motion.div>

        {/* ── Carousel — unchanged ── */}
        <motion.div
          initial={{ opacity: 0, y: 36 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.28, ease: [0.22, 1, 0.36, 1] }}
          viewport={{ once: true, margin: "-60px" }}
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
          className="select-none"
        >
          <div className="flex items-center justify-center gap-3 sm:gap-5">
            {/* Prev */}
            <motion.button
              whileHover={{ scale: 1.12 }}
              whileTap={{ scale: 0.9 }}
              onClick={prev}
              aria-label="Previous"
              className="flex size-10 shrink-0 items-center justify-center rounded-full border border-orange-200 bg-white text-orange-400 shadow-sm transition-colors hover:border-orange-400 hover:text-orange-500 hover:shadow-[0_0_14px_rgba(249,115,22,0.22)]"
            >
              <ChevronLeft className="size-5" />
            </motion.button>

            {/* Track */}
            <div
              className="relative flex flex-1 items-center justify-center gap-3 overflow-hidden"
              onMouseDown={handleDragStart}
              onMouseUp={handleDragEnd}
              onTouchStart={handleDragStart}
              onTouchEnd={handleDragEnd}
            >
              {visibleSlots.map(({ partnerIdx, dist }) => {
                const abs = Math.abs(dist);
                const isCenter = abs === 0;
                const isSide = abs === 1;
                const isFar = abs === 2;

                const scale = isCenter ? 1 : isSide ? 0.88 : 0.76;
                const opacity = isCenter ? 1 : isSide ? 0.6 : 0.3;
                const blur = isCenter ? 0 : isSide ? 1.5 : 3;
                const zIndex = isCenter ? 10 : isSide ? 5 : 1;

                const partner = partners[partnerIdx];

                return (
                  <motion.div
                    key={partnerIdx}
                    layout
                    animate={{
                      scale,
                      opacity,
                      filter: `blur(${blur}px)`,
                      zIndex,
                    }}
                    transition={{
                      layout: { duration: 0.5, ease: [0.22, 1, 0.36, 1] },
                      scale: { duration: 0.45, ease: [0.22, 1, 0.36, 1] },
                      opacity: { duration: 0.4, ease: "easeInOut" },
                      filter: { duration: 0.4, ease: "easeInOut" },
                    }}
                    onClick={() => goto(partnerIdx, active)}
                    className={cn(
                      "relative shrink-0 cursor-pointer overflow-hidden rounded-2xl border bg-white",
                      isCenter
                        ? "h-36 w-56 border-orange-400 shadow-[0_0_0_1px_var(--color-orange-400),0_12px_40px_rgba(249,115,22,0.22)]"
                        : isSide
                          ? "h-28 w-44 border-gray-200 shadow-sm"
                          : "hidden h-24 w-36 border-gray-200 shadow-sm xl:block",
                    )}
                  >
                    {isCenter && (
                      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_50%_0%,rgba(249,115,22,0.1),transparent_65%)]" />
                    )}

                    <div className="relative z-10 flex h-full flex-col items-center justify-center gap-2 px-4">
                      <motion.div
                        animate={{ scale: isCenter ? 1 : 0.85 }}
                        transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                      >
                        <PartnerLogo
                          color={partner.color}
                          initials={partner.initials}
                          size={isCenter ? 44 : 34}
                        />
                      </motion.div>

                      <span
                        className={cn(
                          "text-center font-bold leading-tight tracking-tight",
                          isCenter
                            ? "text-sm text-slate-800"
                            : "text-xs text-slate-400",
                        )}
                      >
                        {partner.name}
                      </span>

                      <AnimatePresence mode="wait">
                        {isCenter && (
                          <motion.span
                            key={`tag-${partnerIdx}`}
                            initial={{ opacity: 0, y: 6 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -5 }}
                            transition={{ duration: 0.25, ease: "easeOut" }}
                            className="text-[10px] font-semibold uppercase tracking-widest text-orange-400"
                          >
                            {partner.tagline}
                          </motion.span>
                        )}
                      </AnimatePresence>
                    </div>
                  </motion.div>
                );
              })}
            </div>

            {/* Next */}
            <motion.button
              whileHover={{ scale: 1.12 }}
              whileTap={{ scale: 0.9 }}
              onClick={next}
              aria-label="Next"
              className="flex size-10 shrink-0 items-center justify-center rounded-full border border-orange-200 bg-white text-orange-400 shadow-sm transition-colors hover:border-orange-400 hover:text-orange-500 hover:shadow-[0_0_14px_rgba(249,115,22,0.22)]"
            >
              <ChevronRight className="size-5" />
            </motion.button>
          </div>

          {/* Dots */}
          <motion.div
            initial={{ opacity: 0, y: 8 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.42, duration: 0.5 }}
            viewport={{ once: true }}
            className="mt-8 flex items-center justify-center gap-2"
          >
            {partners.map((_, i) => (
              <motion.button
                key={i}
                onClick={() => goto(i, active)}
                animate={{
                  width: active === i ? 20 : 8,
                  backgroundColor: active === i ? "#f97316" : "#fed7aa",
                }}
                transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                aria-label={`Go to slide ${i + 1}`}
                className="h-2 rounded-full border-none p-0 outline-none"
              />
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
