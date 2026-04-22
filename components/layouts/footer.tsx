"use client";
import { motion } from "motion/react";
import { Heart, Share2, Camera, Play, ArrowUpRight } from "lucide-react";
import Link from "next/link";

const navCols = [
  {
    label: "Programs",
    links: [
      "Health Literacy",
      "NCD Prevention",
      "Community Outreach",
      "Advocacy",
      "Digital Health",
    ],
  },
  {
    label: "Organisation",
    links: [
      "About Us",
      "Our Team",
      "Impact Reports",
      "Get Involved",
      "Contact",
    ],
  },
];

const socials = [
  { icon: Share2, label: "Twitter" },
  { icon: Camera, label: "Instagram" },
  { icon: Play, label: "YouTube" },
];

const ease = [0.22, 1, 0.36, 1] as const;

export default function Footer() {
  return (
    <footer className="bg-forest-900">
      {/* Top accent line */}
      <div className="h-px bg-linear-to-r from-transparent via-forest-500/60 to-transparent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10 py-16">
          {/* About col */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease }}
          >
            <div className="flex items-center gap-1.5 mb-4">
              <div className="w-4 h-px bg-forest-500" />
              <span className="font-mono text-[10px] tracking-[0.2em] uppercase text-forest-400">
                About
              </span>
            </div>

            <Link href="/" className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 bg-linear-to-br from-forest-500 to-forest-400 rounded-[8px] flex items-center justify-center">
                <Heart className="w-4 h-4 text-white fill-white" />
              </div>
              <span className="font-serif text-base font-bold text-white">
                Com<span className="text-forest-300">Health</span>
              </span>
            </Link>

            <p className="font-mono text-xs text-gray-500 leading-[1.8] mb-4">
              A community-driven health organisation working to make preventive
              healthcare accessible to every Nigerian, regardless of geography
              or income.
            </p>

            <div className="flex gap-2 mt-4">
              {socials.map(({ icon: Icon, label }) => (
                <a
                  key={label}
                  href="#"
                  aria-label={label}
                  className="w-8 h-8 rounded-lg border border-white/10 flex items-center justify-center text-white/30 hover:border-forest-500/50 hover:bg-forest-500/10 hover:text-forest-400 transition-all duration-200"
                >
                  <Icon className="w-3.5 h-3.5" />
                </a>
              ))}
              {/* WhatsApp */}
              <a
                href="#"
                aria-label="WhatsApp"
                className="w-8 h-8 rounded-lg bg-[#25D366] flex items-center justify-center text-white hover:bg-[#20b857] transition-colors duration-200"
              >
                <svg
                  className="w-3.5 h-3.5"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                </svg>
              </a>
            </div>
          </motion.div>

          {/* Nav cols */}
          {navCols.map((col, ci) => (
            <motion.div
              key={col.label}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: (ci + 1) * 0.08, ease }}
            >
              <div className="flex items-center gap-1.5 mb-5">
                <div className="w-4 h-px bg-forest-500" />
                <span className="font-mono text-[10px] tracking-[0.2em] uppercase text-forest-400">
                  {col.label}
                </span>
              </div>
              <div className="flex flex-col gap-0.5">
                {col.links.map((link, li) => (
                  <a
                    key={link}
                    href="#"
                    className="group flex items-center justify-between px-3 py-2 border border-transparent hover:border-white/5 hover:bg-white/3 rounded-lg transition-all duration-200"
                  >
                    <span className="font-mono text-xs tracking-wide text-gray-500 group-hover:text-white transition-colors duration-200">
                      {link}
                    </span>
                    <span className="font-mono text-[10px] text-white/10 group-hover:text-forest-500/60 transition-colors duration-200">
                      {String(li + 1).padStart(2, "0")}
                    </span>
                  </a>
                ))}
              </div>
            </motion.div>
          ))}

          {/* Contact col */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.3, ease }}
          >
            <div className="flex items-center gap-1.5 mb-5">
              <div className="w-4 h-px bg-forest-500" />
              <span className="font-mono text-[10px] tracking-[0.2em] uppercase text-forest-400">
                Contact
              </span>
            </div>
            <div className="flex flex-col gap-2.5">
              {[
                { label: "Email", value: "hello@comhealthng.org" },
                { label: "WhatsApp", value: "+234 800 COMHEALTH" },
                { label: "Location", value: "Lagos · Abuja · Port Harcourt" },
              ].map((c) => (
                <div
                  key={c.label}
                  className="border border-white/7 hover:border-forest-500/30 hover:bg-forest-500/5 rounded-xl px-3 py-3 transition-all duration-200 cursor-pointer group"
                >
                  <div className="font-mono text-[10px] tracking-widest uppercase text-forest-500/60 mb-0.5">
                    {c.label}
                  </div>
                  <div className="font-mono text-xs text-gray-500 group-hover:text-forest-400 transition-colors">
                    {c.value}
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-white/5 py-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <span className="font-mono text-[11px] tracking-wide text-gray-600">
            © 2025 ComHealth Nigeria. All rights reserved.
          </span>
          <div className="flex gap-2 flex-wrap justify-center">
            {["Privacy Policy", "Terms of Use", "Accessibility"].map(
              (label) => (
                <a
                  key={label}
                  href="#"
                  className="inline-flex items-center gap-1 font-mono text-[10px] tracking-[0.08em] uppercase border border-white/8 rounded-full px-3 py-1 text-gray-500 hover:border-forest-500/30 hover:text-forest-400 transition-all duration-200"
                >
                  {label}
                  <ArrowUpRight className="w-2.5 h-2.5" />
                </a>
              ),
            )}
          </div>
        </div>
      </div>
    </footer>
  );
}
