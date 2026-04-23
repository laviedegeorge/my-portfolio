"use client";
import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "motion/react";

const FIRST = "KELECHI";
const SECOND = "APUGO";
const ROLE = "Software Engineer";
const FIRST_INTERVAL = 145; // ms per letter
const SECOND_INTERVAL = 160;

// Phases — sequential state machine
// typing-first → waiting-dom → waiting-load → typing-second → show-role → done
type Phase =
  | "typing-first"
  | "waiting-dom"
  | "waiting-load"
  | "typing-second"
  | "show-role"
  | "done";

const PHASE_PROGRESS: Record<Phase, number> = {
  "typing-first": 20,
  "waiting-dom": 45,
  "waiting-load": 85,
  "typing-second": 100,
  "show-role": 100,
  done: 100,
};

function Cursor({ color, size }: { color: string; size: string }) {
  return (
    <motion.span
      animate={{ opacity: [1, 1, 0, 0] }}
      transition={{
        duration: 1.1,
        repeat: Infinity,
        times: [0, 0.45, 0.5, 1],
        ease: "linear",
      }}
      className="select-none font-serif"
      style={{ fontSize: size, color, lineHeight: 1, marginLeft: "1px" }}
    >
      |
    </motion.span>
  );
}

export default function PageLoader() {
  const [phase, setPhase] = useState<Phase>("typing-first");
  const [firstCount, setFirstCount] = useState(0);
  const [secondCount, setSecondCount] = useState(0);
  const [progress, setProgress] = useState(0);
  const [loading, setLoading] = useState(true);

  // Refs so event callbacks always see current values without stale closures
  const domReadyRef = useRef(
    typeof document !== "undefined" &&
      (document.readyState === "interactive" ||
        document.readyState === "complete"),
  );
  const loadReadyRef = useRef(
    typeof document !== "undefined" && document.readyState === "complete",
  );
  const firstDoneRef = useRef(false);
  const progressRef = useRef(0);

  // ── Smooth progress animation toward phase target ─────────────────────
  useEffect(() => {
    const target = PHASE_PROGRESS[phase];
    let raf: number;
    const tick = () => {
      const diff = target - progressRef.current;
      if (Math.abs(diff) < 0.4) {
        progressRef.current = target;
        setProgress(target);
      } else {
        progressRef.current += diff * 0.06;
        setProgress(Math.round(progressRef.current));
        raf = requestAnimationFrame(tick);
      }
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [phase]);

  // ── Real browser event listeners ──────────────────────────────────────
  useEffect(() => {
    const advance = (newPhase: Phase) => {
      setPhase((p) => {
        const order: Phase[] = [
          "typing-first",
          "waiting-dom",
          "waiting-load",
          "typing-second",
          "show-role",
          "done",
        ];
        return order.indexOf(newPhase) > order.indexOf(p) ? newPhase : p;
      });
    };

    const onInteractive = () => {
      domReadyRef.current = true;
      if (firstDoneRef.current) advance("waiting-load");
    };

    const onLoad = () => {
      loadReadyRef.current = true;
      if (firstDoneRef.current) advance("typing-second");
    };

    if (loadReadyRef.current) {
      // already complete — handled when typing-first finishes
    } else if (domReadyRef.current) {
      window.addEventListener("load", onLoad, { once: true });
    } else {
      document.addEventListener("readystatechange", () => {
        if (document.readyState === "interactive") onInteractive();
        if (document.readyState === "complete") onLoad();
      });
      window.addEventListener("load", onLoad, { once: true });
    }

    return () => window.removeEventListener("load", onLoad);
  }, []);

  // ── Type FIRST name immediately on mount ──────────────────────────────
  useEffect(() => {
    const timers: ReturnType<typeof setTimeout>[] = [];
    for (let i = 1; i <= FIRST.length; i++) {
      timers.push(
        setTimeout(() => {
          setFirstCount(i);
          if (i === FIRST.length) {
            firstDoneRef.current = true;
            // Transition based on current browser state
            if (loadReadyRef.current) {
              setPhase("typing-second");
            } else if (domReadyRef.current) {
              setPhase("waiting-load");
            } else {
              setPhase("waiting-dom");
            }
          }
        }, i * FIRST_INTERVAL),
      );
    }
    return () => timers.forEach(clearTimeout);
  }, []);

  // ── Type SECOND name once phase reaches typing-second ─────────────────
  useEffect(() => {
    if (phase !== "typing-second") return;
    const timers: ReturnType<typeof setTimeout>[] = [];
    for (let i = 1; i <= SECOND.length; i++) {
      timers.push(setTimeout(() => setSecondCount(i), i * SECOND_INTERVAL));
    }
    timers.push(
      setTimeout(
        () => setPhase("show-role"),
        SECOND.length * SECOND_INTERVAL + 300,
      ),
    );
    return () => timers.forEach(clearTimeout);
  }, [phase]);

  // ── Dismiss after role is shown ────────────────────────────────────────
  useEffect(() => {
    if (phase !== "show-role") return;
    const t = setTimeout(() => setLoading(false), 1100);
    return () => clearTimeout(t);
  }, [phase]);

  const firstDone = firstCount >= FIRST.length;
  const secondDone = secondCount >= SECOND.length;

  const showCursor =
    phase === "typing-first" ||
    phase === "waiting-dom" ||
    phase === "waiting-load" ||
    (phase === "typing-second" && !secondDone);

  const cursorColor = secondCount > 0 ? "var(--fg2)" : "var(--fg)";
  const NAME_SIZE = "clamp(2.8rem, 8vw, 6rem)";

  return (
    <AnimatePresence>
      {loading && (
        <motion.div
          exit={{
            y: "-100%",
            transition: { duration: 0.9, ease: [0.76, 0, 0.24, 1] },
          }}
          className="fixed inset-0 z-100 flex flex-col items-center justify-center"
          style={{ background: "var(--bg)" }}
        >
          <div className="flex flex-col items-center">
            {/* Name — single line */}
            <div className="flex items-baseline" style={{ lineHeight: 1 }}>
              <span
                className="select-none font-serif"
                style={{
                  fontSize: NAME_SIZE,
                  letterSpacing: "-0.03em",
                  color: "var(--fg)",
                }}
              >
                {FIRST.slice(0, firstCount)}
              </span>

              {secondCount > 0 && (
                <span
                  className="select-none font-serif"
                  style={{
                    fontSize: NAME_SIZE,
                    letterSpacing: "-0.03em",
                    color: "var(--fg2)",
                  }}
                >
                  &nbsp;{SECOND.slice(0, secondCount)}
                </span>
              )}

              {showCursor && <Cursor color={cursorColor} size={NAME_SIZE} />}
            </div>

            {/* Role — centered, larger */}
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{
                opacity: phase === "show-role" ? 1 : 0,
                y: phase === "show-role" ? 0 : 10,
              }}
              transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
              className="mt-5 text-center text-[0.85rem] tracking-[0.2em] uppercase"
              style={{ color: "var(--fg2)" }}
            >
              {ROLE}
            </motion.p>
          </div>

          {/* Progress bar */}
          <div className="absolute bottom-9 left-10 right-10">
            <div className="mb-2.5 flex items-baseline justify-between">
              <span
                className="text-[0.54rem] tracking-[0.18em] uppercase"
                style={{ color: "var(--fg3)" }}
              >
                {phase === "waiting-dom" || phase === "waiting-load"
                  ? "Preparing…"
                  : "Loading"}
              </span>
              <span
                className="font-serif text-[0.6rem] tabular-nums"
                style={{ color: "var(--fg2)" }}
              >
                {progress}%
              </span>
            </div>
            <div
              className="relative h-px w-full"
              style={{ background: "var(--border)" }}
            >
              <motion.div
                className="absolute inset-y-0 left-0 h-full"
                style={{ background: "var(--fg)" }}
                animate={{ width: `${progress}%` }}
                transition={{ duration: 0.4, ease: "linear" }}
              />
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
