import { experience, type EmploymentType } from "@/lib/portfolio-data";
import Section from "./Section";
import FadeIn from "./FadeIn";

const employmentStyle = (type: EmploymentType): React.CSSProperties =>
  type === "full-time"
    ? { background: "#E6F1FB", color: "#0C447C" }
    : { background: "#FEF3E2", color: "#7C4A0C" };

const employmentLabel: Record<EmploymentType, string> = {
  "full-time": "Full-time",
  contract: "Contract",
};

export default function ExperienceSection() {
  const current = experience.find((e) => e.current);
  const previous = experience.filter((e) => !e.current);

  return (
    <Section id="experience" label="Experience">
      <div className="flex flex-col gap-5">
        {/* ── Current role ── */}
        {current && (
          <FadeIn>
            <div
              className="rounded border p-6"
              style={{ borderColor: "var(--border)" }}
            >
              <div className="mb-5 flex flex-wrap items-center gap-2">
                <div
                  className="inline-flex items-center gap-2 rounded-full border px-3 py-1 text-[0.58rem] tracking-widest uppercase"
                  style={{
                    borderColor: "var(--border)",
                    color: "var(--fg2)",
                    background: "var(--pill)",
                  }}
                >
                  <span
                    className="h-1.5 w-1.5 rounded-full bg-green-700"
                    style={{ animation: "pulse 2s ease-in-out infinite" }}
                  />
                  Current
                </div>
                <span
                  className="rounded-full px-2.5 py-1 text-[0.58rem] tracking-[0.06em] uppercase"
                  style={employmentStyle(current.employment)}
                >
                  {employmentLabel[current.employment]}
                </span>
              </div>

              <div className="mb-1 flex items-baseline justify-between gap-4">
                <h3
                  className="font-serif text-[1.15rem] leading-snug tracking-[-0.02em]"
                  style={{ color: "var(--fg)" }}
                >
                  {current.company}
                </h3>
                <span
                  className="shrink-0 text-[0.62rem] tracking-[0.06em]"
                  style={{ color: "var(--fg3)" }}
                >
                  {current.period}
                </span>
              </div>

              <p
                className="mb-5 text-[0.65rem] tracking-[0.08em] uppercase"
                style={{ color: "var(--fg2)" }}
              >
                {current.title}
              </p>

              <div
                className="mb-4"
                style={{ borderTop: "1px solid var(--border)" }}
              />

              {current.achievements?.map((achievement, i) => (
                <p
                  key={i}
                  className="flex gap-3 text-[0.75rem] leading-[1.85]"
                  style={{ color: "var(--fg2)" }}
                >
                  <span aria-hidden style={{ color: "var(--fg3)" }}>
                    —
                  </span>
                  {achievement}
                </p>
              ))}
            </div>
          </FadeIn>
        )}

        {/* ── Previous roles ── */}
        {previous.length > 0 && (
          <div className="flex flex-col">
            {previous.map((exp, i) => (
              <FadeIn key={`${exp.company}-${i}`} delay={i * 0.07}>
                <div
                  className="flex items-center justify-between py-4"
                  style={{ borderBottom: "1px solid var(--border)" }}
                >
                  <span
                    className="text-[0.82rem] font-medium"
                    style={{ color: "var(--fg2)" }}
                  >
                    {exp.company}
                  </span>
                  <div className="flex items-center gap-3">
                    <span
                      className="rounded-full px-2.5 py-1 text-[0.58rem] tracking-[0.06em] uppercase"
                      style={employmentStyle(exp.employment)}
                    >
                      {employmentLabel[exp.employment]}
                    </span>
                    <span
                      className="text-[0.62rem] tracking-[0.06em]"
                      style={{ color: "var(--fg3)" }}
                    >
                      {exp.period}
                    </span>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        )}
      </div>
    </Section>
  );
}
