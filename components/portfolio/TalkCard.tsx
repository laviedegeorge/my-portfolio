import Image from "next/image";
import type { Talk, TalkType, TalkRole } from "@/lib/portfolio-data";

const typeBadgeStyle = (type: TalkType): React.CSSProperties =>
  type === "conference"
    ? { background: "#E6F1FB", color: "#0C447C" }
    : type === "online"
      ? { background: "#EAF3DE", color: "#3B6D11" }
      : { background: "#EEEDFE", color: "#3C3489" };

const roleBadgeStyle = (role: TalkRole): React.CSSProperties =>
  role === "judge"
    ? { background: "#FEF3E2", color: "#7C4A0C" }
    : { background: "#F0FDF4", color: "#166534" };

export default function TalkCard({ talk }: { talk: Talk; index: number }) {
  return (
    <div
      className="gb flex items-start gap-4 rounded border p-4"
      style={{ borderColor: "var(--border)" }}
    >
      {/* Year */}
      <span
        className="mt-0.5 shrink-0 text-[0.62rem] tracking-[0.06em]"
        style={{ color: "var(--fg3)", minWidth: "2.2rem" }}
      >
        {talk.year}
      </span>

      {/* Info */}
      <div className="flex flex-1 flex-col gap-1.5">
        <span
          className="text-[0.82rem] font-medium leading-snug"
          style={{ color: "var(--fg)" }}
        >
          {talk.url ? (
            <a
              href={talk.url}
              target="_blank"
              rel="noopener noreferrer"
              className="transition-opacity hover:opacity-60"
              style={{ textDecoration: "none", color: "inherit" }}
            >
              {talk.title} ↗
            </a>
          ) : (
            talk.title
          )}
        </span>
        <span className="text-[0.7rem]" style={{ color: "var(--fg2)" }}>
          {talk.event}
        </span>
        <div className="flex flex-wrap gap-1.5">
          <span
            className="self-start rounded-full px-2 py-0.5 text-[0.58rem] tracking-[0.06em] uppercase"
            style={typeBadgeStyle(talk.type)}
          >
            {talk.type}
          </span>
          <span
            className="self-start rounded-full px-2 py-0.5 text-[0.58rem] tracking-[0.06em] uppercase"
            style={roleBadgeStyle(talk.role)}
          >
            {talk.role}
          </span>
        </div>
      </div>

      {/* Image */}
      {talk.image && (
        <div className="shrink-0 overflow-hidden rounded">
          <Image
            src={talk.image}
            alt={talk.event}
            width={80}
            height={80}
            className="h-20 w-20 object-cover transition-[filter] duration-500 dark:grayscale"
          />
        </div>
      )}
    </div>
  );
}
