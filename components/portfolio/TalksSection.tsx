import { talks } from "@/lib/portfolio-data";
import Section from "./Section";
import TalkCard from "./TalkCard";

export default function TalksSection() {
  return (
    <Section id="talks" label="Talks">
      <div className="flex flex-col gap-2.5">
        {talks.map((talk, i) => (
          <TalkCard key={talk.title} talk={talk} index={i} />
        ))}
      </div>
    </Section>
  );
}
