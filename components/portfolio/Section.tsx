interface SectionProps {
  id: string;
  label: string;
  children: React.ReactNode;
}

export default function Section({ id, label, children }: SectionProps) {
  return (
    <section
      id={id}
      aria-labelledby={`${id}-heading`}
      className="relative z-10 px-9 py-20"
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
      {children}
    </section>
  );
}
