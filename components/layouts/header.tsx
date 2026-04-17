"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Heart, ArrowRight, Menu, Phone } from "lucide-react";
import Link from "next/link";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
  SheetClose,
} from "@/components/ui/sheet";
import { Separator } from "@/components/ui/separator";
import {
  TooltipProvider,
  Tooltip,
  TooltipTrigger,
  TooltipContent,
} from "@/components/ui/tooltip";

/* ── Data ───────────────────────────────────────────────────────── */
const programs = [
  {
    label: "Health Literacy & Education",
    desc: "Workshops, school outreach & WhatsApp campaigns",
    href: "#programs",
    tag: "Education",
  },
  {
    label: "NCD Risk Reduction",
    desc: "Tobacco cessation, nutrition & alcohol awareness",
    href: "#ncd",
    tag: "Prevention",
  },
  {
    label: "Community Outreach",
    desc: "Rural & urban field programs, youth engagement",
    href: "#outreach",
    tag: "Outreach",
  },
  {
    label: "Advocacy & Systems Change",
    desc: "Policy campaigns & partnership initiatives",
    href: "#involved",
    tag: "Advocacy",
  },
  {
    label: "Digital Health Delivery",
    desc: "Telehealth, online modules & mobile-first tools",
    href: "#programs",
    tag: "Digital",
  },
];

const simpleLinks = [
  { label: "About", href: "#about" },
  { label: "Resources", href: "#resources" },
  { label: "Impact", href: "#impact" },
];

const mobileLinks = [
  { label: "About", href: "#about" },
  { label: "Programs", href: "#programs" },
  { label: "NCD Prevention", href: "#ncd" },
  { label: "Outreach", href: "#outreach" },
  { label: "Resources", href: "#resources" },
  { label: "Impact", href: "#impact" },
  { label: "Health Quiz", href: "#quiz" },
  { label: "Contact", href: "#contact" },
];

const ease = [0.22, 1, 0.36, 1] as const;

/* ── Dropdown program item ──────────────────────────────────────── */
function ProgramItem({
  label,
  desc,
  href,
  tag,
}: {
  label: string;
  desc: string;
  href: string;
  tag: string;
}) {
  return (
    <NavigationMenuLink asChild>
      <a
        href={href}
        className="group flex items-start gap-3 p-3 rounded-xl border border-transparent hover:border-white/8 hover:bg-white/4 transition-all duration-200"
      >
        {/* Coloured icon dot */}
        <div className="mt-0.5 shrink-0 w-6 h-6 bg-linear-to-br from-forest-500 to-amber-400 rounded-md flex items-center justify-center shadow-sm">
          <div className="w-1.5 h-1.5 bg-white rounded-full" />
        </div>

        <div className="min-w-0">
          <div className="flex items-center gap-2 mb-0.5">
            <span className="text-[13px] font-medium text-white/90 group-hover:text-white transition-colors leading-none">
              {label}
            </span>
            <Badge variant="dark" className="text-[9px] py-0.5 shrink-0">
              {tag}
            </Badge>
          </div>
          <p className="font-mono text-[11px] text-white/35 leading-snug group-hover:text-white/55 transition-colors">
            {desc}
          </p>
        </div>
      </a>
    </NavigationMenuLink>
  );
}

/* ── Header ─────────────────────────────────────────────────────── */
export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 24);
    window.addEventListener("scroll", handler, { passive: true });
    return () => window.removeEventListener("scroll", handler);
  }, []);

  return (
    <TooltipProvider delayDuration={200}>
      <motion.header
        initial={{ opacity: 0, y: -16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease }}
        className={cn(
          "fixed top-0 left-0 right-0 z-50 transition-all duration-500",
          scrolled
            ? "bg-forest-900/97 backdrop-blur-md border-b border-white/5 shadow-xl shadow-black/25"
            : "bg-transparent",
        )}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-[68px]">
          {/* ── Logo ─────────────────────────────────────────────── */}
          <Link href="/" className="flex items-center gap-2.5 shrink-0">
            <motion.div
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.2 }}
              className="w-9 h-9 bg-linear-to-br from-forest-500 to-forest-400 rounded-[10px] flex items-center justify-center shadow-lg shadow-forest-500/25"
            >
              <Heart className="w-[18px] h-[18px] text-white fill-white" />
            </motion.div>
            <span className="font-serif text-[17px] font-bold text-white tracking-tight">
              Com<span className="text-forest-300">Health</span>
              <span className="text-white/70 ml-1">Nigeria</span>
            </span>
          </Link>

          {/* ── Desktop nav ──────────────────────────────────────── */}
          <div className="hidden md:flex items-center gap-1">
            <NavigationMenu>
              <NavigationMenuList>
                {/* Plain anchor links */}
                {simpleLinks.map((link) => (
                  <NavigationMenuItem key={link.label}>
                    <NavigationMenuLink asChild>
                      <a
                        href={link.href}
                        className="relative group/link font-mono text-[11px] tracking-[0.12em] uppercase text-white/50 hover:text-white hover:bg-transparent transition-colors duration-200 px-3 py-2 rounded-lg inline-flex items-center"
                      >
                        {link.label}
                        {/* Animated underline rule */}
                        <span className="absolute bottom-1 left-3 right-3 h-px bg-linear-to-r from-transparent via-forest-400/70 to-transparent scale-x-0 group-hover/link:scale-x-100 transition-transform duration-300" />
                      </a>
                    </NavigationMenuLink>
                  </NavigationMenuItem>
                ))}

                {/* Programs mega-dropdown */}
                <NavigationMenuItem>
                  <NavigationMenuTrigger>Programs</NavigationMenuTrigger>

                  {/*
                    Content must be bg-transparent so the Viewport's own
                    bg-[#0d2e1a] (set in navigation-menu.tsx) shows through.
                    Never set a light bg here — white would bleed over the text.
                  */}
                  <NavigationMenuContent /* className="group-data-[viewport=false]/navigation-menu:bg-transparent!" */
                  >
                    <div className="w-[520px] p-3">
                      {/* Eyebrow header */}
                      <div className="px-3 py-2 mb-1">
                        <div className="flex items-center gap-2 mb-1.5">
                          <span className="w-4 h-px bg-forest-500 shrink-0" />
                          <span className="font-mono text-[10px] tracking-[0.2em] uppercase text-forest-400">
                            Our Programs
                          </span>
                        </div>
                        <p className="font-mono text-[11px] text-white/30 leading-relaxed">
                          Five service streams built for real community impact.
                        </p>
                      </div>

                      {/* Program items */}
                      <div className="flex flex-col gap-px">
                        {programs.map((p) => (
                          <ProgramItem key={p.label} {...p} />
                        ))}
                      </div>

                      {/* Footer strip */}
                      <div className="mt-3 pt-3 border-t border-white/8 px-3 flex items-center justify-between">
                        <span className="font-mono text-[10px] text-white/25">
                          All programs are free & community-focused
                        </span>
                        <a
                          href="#programs"
                          className="font-mono text-[10px] tracking-wider uppercase text-forest-400 hover:text-forest-300 flex items-center gap-1 transition-colors duration-200"
                        >
                          View All <ArrowRight className="w-3 h-3" />
                        </a>
                      </div>
                    </div>
                  </NavigationMenuContent>
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>

            {/* WhatsApp icon + tooltip */}
            <Tooltip>
              <TooltipTrigger asChild>
                <a
                  href="https://wa.me/2348000000000"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="ml-1 w-8 h-8 rounded-lg border border-white/10 hover:border-[#25D366]/50 hover:bg-[#25D366]/10 flex items-center justify-center text-white/30 hover:text-[#25D366] transition-all duration-200"
                >
                  <Phone className="w-3.5 h-3.5" />
                </a>
              </TooltipTrigger>
              <TooltipContent side="bottom">
                WhatsApp Health Line
              </TooltipContent>
            </Tooltip>

            {/* Primary CTA */}
            <Button
              variant="nav-cta"
              size="sm"
              className="ml-2 gap-1.5"
              onClick={() =>
                document
                  .querySelector("#involved")
                  ?.scrollIntoView({ behavior: "smooth" })
              }
            >
              Get Involved
              <ArrowRight className="w-3 h-3" />
            </Button>
          </div>

          {/* ── Mobile ───────────────────────────────────────────── */}
          <div className="md:hidden flex items-center gap-2">
            {/* Inline WhatsApp pill */}
            <a
              href="https://wa.me/2348000000000"
              className="flex items-center gap-1.5 font-mono text-[10px] tracking-wider uppercase bg-[#25D366]/15 border border-[#25D366]/30 text-[#25D366] px-2.5 py-1.5 rounded-full"
            >
              <Phone className="w-3 h-3" /> Chat
            </a>

            {/* Hamburger → Sheet drawer */}
            <Sheet open={mobileOpen} onOpenChange={setMobileOpen}>
              <SheetTrigger asChild>
                <Button
                  variant="outline"
                  size="icon"
                  className="border-white/15 text-white/60 hover:text-white w-9 h-9"
                  aria-label="Open menu"
                >
                  <Menu className="w-4 h-4" />
                </Button>
              </SheetTrigger>

              <SheetContent side="right" className="w-80 px-0 py-0">
                {/* Sheet header */}
                <SheetHeader className="px-6 pt-8 pb-4">
                  <div className="flex items-center gap-2.5">
                    <div className="w-8 h-8 bg-linear-to-br from-forest-500 to-forest-400 rounded-[8px] flex items-center justify-center">
                      <Heart className="w-4 h-4 text-white fill-white" />
                    </div>
                    <SheetTitle>
                      Com<span className="text-forest-300">Health</span> Nigeria
                    </SheetTitle>
                  </div>
                  <p className="font-mono text-[10px] tracking-[0.15em] uppercase text-white/30 mt-1">
                    Health for every community
                  </p>
                </SheetHeader>

                <Separator className="bg-white/8" />

                {/* Nav links */}
                <nav className="flex flex-col gap-0.5 px-3 py-4 overflow-y-auto">
                  {mobileLinks.map((link, i) => (
                    <SheetClose asChild key={link.label}>
                      <motion.a
                        href={link.href}
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: i * 0.04, ease }}
                        className="group flex items-center justify-between px-3 py-3 rounded-xl border border-transparent hover:border-white/8 hover:bg-white/4 transition-all duration-200 cursor-pointer"
                      >
                        <span className="font-mono text-xs tracking-[0.14em] uppercase text-white/50 group-hover:text-white transition-colors duration-200">
                          {link.label}
                        </span>
                        <span className="font-mono text-[10px] text-white/15 group-hover:text-forest-500/60 transition-colors duration-200">
                          {String(i + 1).padStart(2, "0")}
                        </span>
                      </motion.a>
                    </SheetClose>
                  ))}
                </nav>

                <Separator className="bg-white/8 mx-6" />

                {/* Sheet footer CTAs */}
                <div className="px-4 py-5 flex flex-col gap-2.5">
                  <Button
                    variant="default"
                    size="lg"
                    className="w-full justify-center"
                    onClick={() => {
                      setMobileOpen(false);
                      setTimeout(
                        () =>
                          document
                            .querySelector("#involved")
                            ?.scrollIntoView({ behavior: "smooth" }),
                        300,
                      );
                    }}
                  >
                    Get Involved <ArrowRight className="w-4 h-4" />
                  </Button>
                  <Button
                    variant="whatsapp"
                    size="lg"
                    className="w-full justify-center"
                    asChild
                  >
                    <a
                      href="https://wa.me/2348000000000"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Phone className="w-4 h-4" /> WhatsApp Us
                    </a>
                  </Button>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>

        {/* Scroll accent line */}
        <AnimatePresence>
          {scrolled && (
            <motion.div
              initial={{ scaleX: 0, opacity: 0 }}
              animate={{ scaleX: 1, opacity: 1 }}
              exit={{ scaleX: 0, opacity: 0 }}
              transition={{ duration: 0.5, ease }}
              className="absolute bottom-0 left-0 right-0 h-px bg-linear-to-r from-transparent via-forest-500/40 to-transparent origin-left"
            />
          )}
        </AnimatePresence>
      </motion.header>
    </TooltipProvider>
  );
}
