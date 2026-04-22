import { projects } from "@/lib/portfolio-data";
import Section from "./Section";
import ProjectCard from "./ProjectCard";

export default function ProjectsSection() {
  return (
    <Section id="projects" label="Projects">
      <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3">
        {projects.map((project, i) => (
          <ProjectCard key={project.title} project={project} index={i} />
        ))}
      </div>
    </Section>
  );
}
