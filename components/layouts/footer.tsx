import {
  MapPin,
  Phone,
  Mail,
  Linkedin,
  Twitter,
  Facebook,
  Instagram,
  ArrowUpRight,
} from "lucide-react";

const quickLinks = ["Home", "About Us", "Services", "Team", "Contact"];
const services = [
  "Business Strategy",
  "Team Development",
  "Analytics",
  "Corporate Solutions",
  "Consulting",
];
const socials = [
  { icon: Linkedin, label: "LinkedIn" },
  { icon: Twitter, label: "Twitter" },
  { icon: Facebook, label: "Facebook" },
  { icon: Instagram, label: "Instagram" },
];

export function Footer() {
  return (
    <footer id="contact" className="bg-slate-900 text-white overflow-hidden">
      {/* Top accent line */}
      <div className="h-px bg-linear-to-r from-transparent via-orange-500/60 to-transparent" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 py-16 lg:py-20">
          {/* ── Brand col ── */}
          <div className="sm:col-span-2 lg:col-span-1">
            {/* Logo — matches Header */}
            <div className="flex items-center gap-3 mb-6">
              <div className="bg-orange-500 text-white px-3 py-1.5 font-bold font-mono text-sm tracking-widest">
                LCA
              </div>
              <span className="w-px h-4 bg-white/10" />
              <span className="text-white/30 font-mono text-[10px] tracking-[0.2em] uppercase">
                Consulting
              </span>
            </div>

            <p className="text-slate-500 text-xs font-mono leading-relaxed mb-8 max-w-xs">
              Empowering businesses with expert insights and tailored solutions
              for sustainable growth.
            </p>

            {/* Socials — ghost button style */}
            <div className="flex gap-2 flex-wrap">
              {socials.map(({ icon: Icon, label }) => (
                <a
                  key={label}
                  href="#"
                  aria-label={label}
                  className="flex items-center justify-center w-8 h-8 border border-white/10 hover:border-orange-500/50 hover:bg-orange-500/10 text-white/30 hover:text-orange-400 rounded-lg transition-all duration-200"
                >
                  <Icon className="w-3.5 h-3.5" />
                </a>
              ))}
            </div>
          </div>

          {/* ── Quick Links ── */}
          <div>
            <div className="flex items-center gap-2 mb-6">
              <span className="w-4 h-px bg-orange-500" />
              <span className="text-orange-500 font-mono text-[10px] tracking-[0.2em] uppercase">
                Quick Links
              </span>
            </div>
            <ul className="flex flex-col gap-2">
              {quickLinks.map((link, i) => (
                <li key={link}>
                  <a
                    href={`#${link.toLowerCase().replace(" ", "-")}`}
                    className="group flex items-center justify-between px-3 py-2 border border-transparent hover:border-white/5 hover:bg-white/3 rounded-lg transition-all duration-200"
                  >
                    <span className="text-slate-500 group-hover:text-white text-xs font-mono tracking-wide transition-colors duration-200">
                      {link}
                    </span>
                    <span className="text-white/10 group-hover:text-orange-500/60 font-mono text-[10px] transition-colors duration-200">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* ── Services ── */}
          <div>
            <div className="flex items-center gap-2 mb-6">
              <span className="w-4 h-px bg-orange-500" />
              <span className="text-orange-500 font-mono text-[10px] tracking-[0.2em] uppercase">
                Our Services
              </span>
            </div>
            <ul className="flex flex-col gap-2">
              {services.map((service, i) => (
                <li key={service}>
                  <a
                    href="#services"
                    className="group flex items-center justify-between px-3 py-2 border border-transparent hover:border-white/5 hover:bg-white/3 rounded-lg transition-all duration-200"
                  >
                    <span className="text-slate-500 group-hover:text-white text-xs font-mono tracking-wide transition-colors duration-200">
                      {service}
                    </span>
                    <span className="text-white/10 group-hover:text-orange-500/60 font-mono text-[10px] transition-colors duration-200">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* ── Contact ── */}
          <div>
            <div className="flex items-center gap-2 mb-6">
              <span className="w-4 h-px bg-orange-500" />
              <span className="text-orange-500 font-mono text-[10px] tracking-[0.2em] uppercase">
                Contact Us
              </span>
            </div>

            <div className="flex flex-col gap-3">
              {/* Address */}
              <div className="group flex items-start gap-3 px-3 py-3 border border-white/5 rounded-lg">
                <MapPin className="w-3.5 h-3.5 text-orange-500/60 shrink-0 mt-0.5" />
                <p className="text-slate-500 text-xs font-mono leading-relaxed">
                  123 Business Avenue
                  <br />
                  New York, NY 10001
                </p>
              </div>

              {/* Phone */}
              <a
                href="tel:+1234567890"
                className="group flex items-center gap-3 px-3 py-3 border border-white/5 hover:border-orange-500/30 hover:bg-orange-500/5 rounded-lg transition-all duration-200"
              >
                <Phone className="w-3.5 h-3.5 text-orange-500/60 shrink-0" />
                <span className="text-slate-500 group-hover:text-orange-400 text-xs font-mono transition-colors duration-200">
                  +1 (234) 567-890
                </span>
              </a>

              {/* Email */}
              <a
                href="mailto:info@lca.com"
                className="group flex items-center gap-3 px-3 py-3 border border-white/5 hover:border-orange-500/30 hover:bg-orange-500/5 rounded-lg transition-all duration-200"
              >
                <Mail className="w-3.5 h-3.5 text-orange-500/60 shrink-0" />
                <span className="text-slate-500 group-hover:text-orange-400 text-xs font-mono transition-colors duration-200">
                  info@lca.com
                </span>
              </a>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-white/5 py-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-slate-600 text-[11px] font-mono tracking-wide">
            © 2026 LCA Consulting. All rights reserved.
          </p>

          <div className="flex items-center gap-1">
            {["Privacy Policy", "Terms of Service"].map((item) => (
              <a
                key={item}
                href="#"
                className="flex items-center gap-1 border border-transparent hover:border-white/5 hover:bg-white/3 text-slate-600 hover:text-orange-400 px-3 py-1.5 rounded-lg text-[11px] font-mono tracking-wide transition-all duration-200"
              >
                {item}
                <ArrowUpRight className="w-2.5 h-2.5 opacity-50" />
              </a>
            ))}
          </div>

          <a
            href="https://github.com/laviedegeorge"
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center gap-2 border border-white/5 hover:border-orange-500/30 hover:bg-orange-500/5 px-3 py-1.5 rounded-lg transition-all duration-200"
          >
            <span className="text-slate-600 group-hover:text-slate-400 text-[11px] font-mono tracking-wide transition-colors duration-200">
              Built by
            </span>
            <span className="text-slate-400 group-hover:text-orange-400 text-[11px] font-mono font-semibold tracking-wide transition-colors duration-200">
              laviedegeorge
            </span>
            <ArrowUpRight className="w-2.5 h-2.5 text-white/20 group-hover:text-orange-400/60 transition-colors duration-200" />
          </a>
        </div>
      </div>
    </footer>
  );
}
