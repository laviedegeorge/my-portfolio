import { siteConfig } from "@/lib/portfolio-data";

export default function Footer() {
  return (
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
  );
}
