"use client";
import { useEffect, useRef, useState, useCallback } from "react";
import { motion, useInView } from "motion/react";
import { useTheme } from "next-themes";

// ─── Data ────────────────────────────────────────────────────
const siteConfig = {
  name: "Your Name",
  initials: "YN.",
  location: "Port Harcourt, Nigeria",
  email: "hello@yourname.dev",
  available: true,
  socials: { twitter: "#", github: "#", linkedin: "#" },
};

const stats = [
  { value: "12+", label: "Projects shipped" },
  { value: "8", label: "Conference talks" },
  { value: "40+", label: "Articles written" },
  { value: "5yr", label: "In the craft" },
];

const projects = [
  {
    title: "Project One",
    description:
      "A brief description of what this project does and why it matters.",
    tags: ["Next.js", "TypeScript", "Postgres"],
    url: "#",
    year: 2024,
  },
  {
    title: "Project Two",
    description: "Another project that solved a real problem for real people.",
    tags: ["React", "Motion", "Tailwind"],
    url: "#",
    year: 2024,
  },
  {
    title: "Project Three",
    description: "Open source tool used by developers across West Africa.",
    tags: ["Node.js", "API", "OSS"],
    url: "#",
    year: 2023,
  },
];

const articles = [
  {
    title: "How I approach design systems at scale",
    publication: "Dev.to",
    url: "#",
    date: "Jan 2025",
  },
  {
    title: "Building accessible UIs in West Africa's ecosystem",
    publication: "Hashnode",
    url: "#",
    date: "Nov 2024",
  },
  {
    title: "Why performance is a feature, not an afterthought",
    publication: "Medium",
    url: "#",
    date: "Sep 2024",
  },
  {
    title: "The case for boring technology",
    publication: "Personal",
    url: "#",
    date: "Jul 2024",
  },
];

const talks = [
  {
    title: "Design Tokens at the Edge",
    event: "JSConf Lagos",
    year: "2024",
    type: "conference" as const,
    url: "#",
  },
  {
    title: "Motion Design for Engineers",
    event: "Frontend Nigeria",
    year: "2024",
    type: "online" as const,
    url: "#",
  },
  {
    title: "Shipping Fast Without Breaking",
    event: "DevFest Port Harcourt",
    year: "2023",
    type: "conference" as const,
  },
  {
    title: "CSS Architecture That Scales",
    event: "Naija Dev Meetup",
    year: "2023",
    type: "meetup" as const,
  },
];

// ─── Grid canvas ─────────────────────────────────────────────
const CELL = 48;
const GLOW_R = 120;

function GridCanvas({ isLight }: { isLight: boolean }) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const mouse = useRef({ x: -999, y: -999 });
  const raf = useRef(0);

  const draw = useCallback(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;
    const W = canvas.width;
    const H = canvas.height;
    const { x: mx, y: my } = mouse.current;
    ctx.clearRect(0, 0, W, H);
    const cols = Math.ceil(W / CELL) + 1;
    const rows = Math.ceil(H / CELL) + 1;
    for (let c = 0; c <= cols; c++) {
      const px = c * CELL;
      for (let r = 0; r <= rows; r++) {
        const py = r * CELL;
        const dist = Math.sqrt((px - mx) ** 2 + (py - my) ** 2);
        const base = isLight ? 0.05 : 0.03;
        const boost =
          dist < GLOW_R ? (1 - dist / GLOW_R) * (isLight ? 0.2 : 0.28) : 0;
        const a = base + boost;
        const col = isLight ? `rgba(0,0,0,${a})` : `rgba(255,255,255,${a})`;
        ctx.strokeStyle = col;
        ctx.lineWidth = 0.5;
        if (r < rows) {
          ctx.beginPath();
          ctx.moveTo(px, py);
          ctx.lineTo(px, py + CELL);
          ctx.stroke();
        }
        if (c < cols) {
          ctx.beginPath();
          ctx.moveTo(px, py);
          ctx.lineTo(px + CELL, py);
          ctx.stroke();
        }
      }
    }
    raf.current = requestAnimationFrame(draw);
  }, [isLight]);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const parent = canvas.parentElement!;
    const resize = () => {
      canvas.width = parent.offsetWidth;
      canvas.height = parent.offsetHeight;
    };
    resize();
    const ro = new ResizeObserver(resize);
    ro.observe(parent);
    const onMove = (e: MouseEvent) => {
      const rect = parent.getBoundingClientRect();
      mouse.current = { x: e.clientX - rect.left, y: e.clientY - rect.top };
    };
    const onLeave = () => {
      mouse.current = { x: -999, y: -999 };
    };
    parent.addEventListener("mousemove", onMove);
    parent.addEventListener("mouseleave", onLeave);
    raf.current = requestAnimationFrame(draw);
    return () => {
      cancelAnimationFrame(raf.current);
      ro.disconnect();
      parent.removeEventListener("mousemove", onMove);
      parent.removeEventListener("mouseleave", onLeave);
    };
  }, [draw]);

  return (
    <canvas
      ref={canvasRef}
      aria-hidden
      className="pointer-events-none absolute inset-0 h-full w-full"
    />
  );
}

// ─── Theme toggle ─────────────────────────────────────────────
function ThemeToggle() {
  const { resolvedTheme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);
  if (!mounted) return <div className="h-4.5 w-8.5" />;
  const isLight = resolvedTheme === "light";
  return (
    <button
      onClick={() => setTheme(isLight ? "dark" : "light")}
      aria-label={`Switch to ${isLight ? "dark" : "light"} mode`}
      className="relative h-4.5 w-8.5 shrink-0 rounded-full border transition-colors duration-300"
      style={{ borderColor: "var(--border)", background: "var(--pill)" }}
    >
      <span
        className="absolute top-0.5 left-0.5 h-3 w-3 rounded-full transition-transform duration-300"
        style={{
          background: "var(--fg2)",
          transform: isLight ? "translateX(16px)" : "translateX(0)",
        }}
      />
    </button>
  );
}

// ─── Scroll-triggered section wrapper ────────────────────────
function Section({
  id,
  label,
  children,
}: {
  id: string;
  label: string;
  children: React.ReactNode;
}) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  return (
    <section
      id={id}
      ref={ref}
      aria-labelledby={`${id}-heading`}
      className="relative z-10 px-9 py-14"
      style={{ borderTop: "1px solid var(--border)" }}
    >
      <h2 id={`${id}-heading`} className="sr-only">
        {label}
      </h2>
      <p
        className="mb-6 text-[0.65rem] tracking-widest uppercase"
        style={{ color: "var(--fg3)" }}
      >
        {label}
      </p>
      <motion.div
        initial={{ opacity: 0, y: 14 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
      >
        {children}
      </motion.div>
    </section>
  );
}

// ─── Page ─────────────────────────────────────────────────────
export default function Page() {
  const { resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);

  const isLight = mounted && resolvedTheme === "light";

  // All design tokens as CSS vars — cascade to every child
  const vars = {
    "--bg": isLight ? "#f4f2ed" : "#080808",
    "--fg": isLight ? "#0d0d0d" : "#edeae0",
    "--fg2": isLight ? "rgba(13,13,13,0.45)" : "rgba(237,234,224,0.45)",
    "--fg3": isLight ? "rgba(13,13,13,0.15)" : "rgba(237,234,224,0.18)",
    "--border": isLight ? "rgba(0,0,0,0.08)" : "rgba(255,255,255,0.07)",
    "--glow-color": isLight ? "rgba(0,0,0,0.8)" : "rgba(255,255,255,0.85)",
    "--pill": isLight ? "rgba(0,0,0,0.04)" : "rgba(255,255,255,0.05)",
    "--btn-bg": isLight ? "#0d0d0d" : "#edeae0",
    "--btn-fg": isLight ? "#f4f2ed" : "#080808",
  } as React.CSSProperties;

  const navLinks = [
    { label: "Work", href: "#projects" },
    { label: "Writing", href: "#writing" },
    { label: "Talks", href: "#talks" },
    { label: "Contact", href: `mailto:${siteConfig.email}` },
  ];

  const talkBadge = (type: "conference" | "online" | "meetup") =>
    type === "conference"
      ? { background: "#E6F1FB", color: "#0C447C" }
      : type === "online"
        ? { background: "#EAF3DE", color: "#3B6D11" }
        : { background: "#EEEDFE", color: "#3C3489" };

  return (
    <main
      className="relative min-h-screen overflow-hidden font-mono transition-colors duration-300"
      style={{ background: "var(--bg)", color: "var(--fg)", ...vars }}
    >
      {/* Cursor-reactive grid */}
      <GridCanvas isLight={isLight} />

      {/* Grain texture */}
      <div
        aria-hidden
        className="pointer-events-none fixed inset-0 z-1 opacity-[0.28]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='0.08'/%3E%3C/svg%3E")`,
        }}
      />

      {/* ── Keyframes + glow border ───────────────────────── */}
      <style>{`
        @keyframes pulse { 0%,100%{opacity:1;transform:scale(1)} 50%{opacity:.4;transform:scale(.75)} }
        @keyframes blink { 0%,100%{opacity:1} 50%{opacity:0} }
        .gb { position: relative; }
        .gb::after {
          content: '';
          position: absolute;
          bottom: -1px; left: 20%; right: 20%; height: 1px;
          background: linear-gradient(90deg, transparent, var(--glow-color), transparent);
          opacity: 0;
          transition: opacity 0.32s ease, left 0.32s ease, right 0.32s ease;
          pointer-events: none;
        }
        .gb:hover::after { opacity: 1; left: 5%; right: 5%; }
        .gb-nav::after   { left: 25%; right: 25%; }
        .gb-nav:hover::after { left: 0; right: 0; }
        @media (prefers-reduced-motion: reduce) {
          *, *::before, *::after { animation-duration: 0.01ms !important; transition-duration: 0.01ms !important; }
        }
      `}</style>

      {/* ── Nav ─────────────────────────────────────────────── */}
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

        <nav
          aria-label="Primary navigation"
          className="flex items-center gap-8"
        >
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

      {/* ── Hero ─────────────────────────────────────────────── */}
      <section aria-label="Introduction" className="relative z-10">
        <div className="max-w-185 px-9 pb-12 pt-16">
          {/* Availability pill */}
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.55,
              ease: [0.22, 1, 0.36, 1],
              delay: 0.18,
            }}
            className="mb-9 inline-flex items-center gap-2 rounded-full border px-3 py-1 text-[0.62rem] tracking-widest uppercase"
            style={{
              color: "var(--fg2)",
              borderColor: "var(--border)",
              background: "var(--pill)",
            }}
          >
            <span
              aria-label="Available for work"
              className="h-1.5 w-1.5 rounded-full bg-green-400"
              style={{ animation: "pulse 2s ease-in-out infinite" }}
            />
            Available for projects
          </motion.div>

          {/* Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.55,
              ease: [0.22, 1, 0.36, 1],
              delay: 0.3,
            }}
            className="mb-6 font-serif leading-[1.08] tracking-[-0.03em]"
            style={{ color: "var(--fg)", fontSize: "clamp(2.4rem, 6vw, 4rem)" }}
          >
            Building things
            <br />
            <em style={{ color: "var(--fg2)", fontStyle: "italic" }}>
              people{" "}
            </em>
            actually use
            <span
              aria-hidden
              className="ml-0.75 inline-block h-[0.8em] w-0.5 align-middle"
              style={{
                background: "var(--fg2)",
                animation: "blink 1.1s step-end infinite",
              }}
            />
          </motion.h1>

          {/* Bio */}
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.55,
              ease: [0.22, 1, 0.36, 1],
              delay: 0.42,
            }}
            className="mb-9 max-w-105 text-[0.75rem] leading-[1.95]"
            style={{ color: "var(--fg2)" }}
          >
            I&apos;m a{" "}
            <strong style={{ color: "var(--fg)", fontWeight: 500 }}>
              product engineer
            </strong>{" "}
            based in {siteConfig.location}. I write about the web, speak at
            conferences, and ship products at the intersection of{" "}
            <strong style={{ color: "var(--fg)", fontWeight: 500 }}>
              design and engineering
            </strong>
            .
          </motion.p>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.55,
              ease: [0.22, 1, 0.36, 1],
              delay: 0.54,
            }}
            className="flex flex-wrap items-center gap-3"
          >
            <span className="gb">
              <a
                href="#projects"
                className="inline-block rounded-full px-5 py-2.25 text-[0.65rem] tracking-[0.08em] uppercase transition-opacity hover:opacity-80"
                style={{
                  background: "var(--btn-bg)",
                  color: "var(--btn-fg)",
                  fontFamily: "inherit",
                  textDecoration: "none",
                }}
              >
                See my work
              </a>
            </span>
            <span className="gb">
              <a
                href="#writing"
                className="inline-block rounded-full border px-5 py-2.25 text-[0.65rem] tracking-[0.08em] uppercase transition-opacity hover:opacity-100"
                style={{
                  borderColor: "var(--border)",
                  color: "var(--fg2)",
                  fontFamily: "inherit",
                  textDecoration: "none",
                }}
              >
                Read writing
              </a>
            </span>
            <span
              className="flex items-center gap-1.5 text-[0.62rem]"
              style={{ color: "var(--fg3)" }}
            >
              <span
                className="block h-px w-4.5"
                style={{ background: "var(--fg3)" }}
              />
              or reach out
            </span>
          </motion.div>
        </div>

        {/* Stats strip */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1], delay: 0.68 }}
          className="flex flex-wrap"
          style={{ borderTop: "1px solid var(--border)" }}
        >
          {stats.map((stat) => (
            <div
              key={stat.label}
              className="gb cursor-default border-r px-9 py-5 last:border-r-0"
              style={{ borderColor: "var(--border)" }}
            >
              <p
                className="mb-0.75 font-serif text-[1.5rem] leading-none tracking-[-0.03em]"
                style={{ color: "var(--fg)" }}
              >
                {stat.value}
              </p>
              <p
                className="text-[0.58rem] tracking-widest uppercase"
                style={{ color: "var(--fg3)" }}
              >
                {stat.label}
              </p>
            </div>
          ))}
        </motion.div>
      </section>

      {/* ── Projects ─────────────────────────────────────────── */}
      <Section id="projects" label="Projects">
        <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((p, i) => (
            <motion.div
              key={p.title}
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.45,
                ease: [0.22, 1, 0.36, 1],
                delay: i * 0.1,
              }}
            >
              <div
                className="gb flex h-full flex-col rounded border p-5"
                style={{ borderColor: "var(--border)" }}
              >
                <span
                  className="mb-4 text-[0.58rem] tracking-widest uppercase"
                  style={{ color: "var(--fg3)" }}
                >
                  {p.year}
                </span>
                <h3
                  className="mb-2 text-[0.88rem] font-medium leading-snug tracking-[-0.01em]"
                  style={{ color: "var(--fg)" }}
                >
                  <a
                    href={p.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="transition-opacity hover:opacity-60"
                    style={{ textDecoration: "none", color: "inherit" }}
                  >
                    {p.title} ↗
                  </a>
                </h3>
                <p
                  className="mb-5 flex-1 text-[0.72rem] leading-relaxed"
                  style={{ color: "var(--fg2)" }}
                >
                  {p.description}
                </p>
                <div className="flex flex-wrap gap-1.5">
                  {p.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full border px-2 py-0.5 text-[0.58rem] tracking-[0.06em] uppercase"
                      style={{
                        borderColor: "var(--border)",
                        color: "var(--fg3)",
                      }}
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </Section>

      {/* ── Writing ──────────────────────────────────────────── */}
      <Section id="writing" label="Writing / Articles">
        <div className="flex flex-col">
          {articles.map((a, i) => (
            <motion.a
              key={a.title}
              href={a.url}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 8 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.4,
                ease: [0.22, 1, 0.36, 1],
                delay: i * 0.08,
              }}
              className="gb flex items-baseline justify-between gap-4 py-4 transition-opacity hover:opacity-60"
              style={{
                borderBottom: "1px solid var(--border)",
                textDecoration: "none",
              }}
            >
              <span
                className="text-[0.82rem] font-medium leading-snug"
                style={{ color: "var(--fg)" }}
              >
                {a.title}
              </span>
              <span className="flex shrink-0 items-center gap-2">
                <span
                  className="rounded-full border px-2 py-0.5 text-[0.58rem] tracking-[0.06em] uppercase"
                  style={{ borderColor: "var(--border)", color: "var(--fg3)" }}
                >
                  {a.publication}
                </span>
                <span
                  className="text-[0.65rem]"
                  style={{ color: "var(--fg3)" }}
                >
                  {a.date}
                </span>
              </span>
            </motion.a>
          ))}
        </div>
      </Section>

      {/* ── Talks ────────────────────────────────────────────── */}
      <Section id="talks" label="Talks">
        <div className="flex flex-col gap-2.5">
          {talks.map((t, i) => (
            <motion.div
              key={t.title}
              initial={{ opacity: 0, y: 8 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.4,
                ease: [0.22, 1, 0.36, 1],
                delay: i * 0.09,
              }}
              className="gb flex items-start gap-4 rounded border p-4"
              style={{ borderColor: "var(--border)" }}
            >
              <span
                className="mt-0.5 shrink-0 text-[0.62rem] tracking-[0.06em]"
                style={{ color: "var(--fg3)", minWidth: "2.2rem" }}
              >
                {t.year}
              </span>
              <div className="flex flex-col gap-1.5">
                <span
                  className="text-[0.82rem] font-medium leading-snug"
                  style={{ color: "var(--fg)" }}
                >
                  {"url" in t ? (
                    <a
                      href={(t as typeof t & { url: string }).url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="transition-opacity hover:opacity-60"
                      style={{ textDecoration: "none", color: "inherit" }}
                    >
                      {t.title} ↗
                    </a>
                  ) : (
                    t.title
                  )}
                </span>
                <span className="text-[0.7rem]" style={{ color: "var(--fg2)" }}>
                  {t.event}
                </span>
                <span
                  className="self-start rounded-full px-2 py-0.5 text-[0.58rem] tracking-[0.06em] uppercase"
                  style={talkBadge(t.type)}
                >
                  {t.type}
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </Section>

      {/* ── Footer ───────────────────────────────────────────── */}
      <footer
        className="relative z-10 flex items-center justify-between px-9 py-5"
        style={{ borderTop: "1px solid var(--border)" }}
      >
        <p
          className="text-[0.62rem] tracking-[0.06em]"
          style={{ color: "var(--fg3)" }}
        >
          &copy; {new Date().getFullYear()} {siteConfig.name}
        </p>
        <nav aria-label="Social links" className="flex items-center gap-5">
          {Object.entries(siteConfig.socials).map(([platform, url]) => (
            <span key={platform} className="gb gb-nav">
              <a
                href={url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[0.62rem] tracking-widest uppercase transition-opacity hover:opacity-100"
                style={{
                  color: "var(--fg2)",
                  textDecoration: "none",
                  opacity: 0.5,
                }}
              >
                {platform}
              </a>
            </span>
          ))}
        </nav>
      </footer>
    </main>
  );
}
