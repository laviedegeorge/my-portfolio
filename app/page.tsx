"use client";
import { useThemeVars } from "@/lib/use-theme-vars";
import GridCanvas from "@/components/portfolio/GridCanvas";
import NavBar from "@/components/portfolio/NavBar";
import Hero from "@/components/portfolio/Hero";
import ExperienceSection from "@/components/portfolio/ExperienceSection";
import ProjectsSection from "@/components/portfolio/ProjectsSection";
import WritingSection from "@/components/portfolio/WritingSection";
import TalksSection from "@/components/portfolio/TalksSection";
import Footer from "@/components/portfolio/Footer";
import PageLoader from "@/components/portfolio/PageLoader";

export default function Page() {
  const { isLight, vars } = useThemeVars();

  return (
    <main
      className="relative min-h-screen font-mono transition-colors duration-300"
      style={{ background: "var(--bg)", color: "var(--fg)", ...vars }}
    >
      <PageLoader />
      <GridCanvas isLight={isLight} />

      <div
        aria-hidden
        className="pointer-events-none fixed inset-0 z-1 opacity-[0.28]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='0.08'/%3E%3C/svg%3E")`,
        }}
      />

      <style>{`
        @keyframes pulse { 0%,100%{opacity:1;transform:scale(1)} 50%{opacity:.4;transform:scale(.75)} }
        @keyframes blink { 0%,100%{opacity:1} 50%{opacity:0} }
        .gb { position: relative; }
        .gb::after {
          content: ''; position: absolute;
          bottom: -1px; left: 20%; right: 20%; height: 1px;
          background: linear-gradient(90deg, transparent, var(--glow-color), transparent);
          opacity: 0; transition: opacity 0.32s ease, left 0.32s ease, right 0.32s ease;
          pointer-events: none;
        }
        .gb:hover::after { opacity: 1; left: 5%; right: 5%; }
        .gb-nav::after   { left: 25%; right: 25%; }
        .gb-nav:hover::after { left: 0; right: 0; }
        @media (prefers-reduced-motion: reduce) {
          *, *::before, *::after { animation-duration: 0.01ms !important; transition-duration: 0.01ms !important; }
        }
      `}</style>

      <NavBar />
      <div className="flex min-h-screen flex-col">
        <Hero />
      </div>
      <ExperienceSection />
      <ProjectsSection />
      <WritingSection />
      <TalksSection />
      <Footer />
    </main>
  );
}
