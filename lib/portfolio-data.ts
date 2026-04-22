export const siteConfig = {
  name: "Your Name",
  initials: "YN.",
  location: "Port Harcourt, Nigeria",
  email: "hello@yourname.dev",
  available: true,
  socials: { twitter: "#", github: "#", linkedin: "#" },
};

export const stats = [
  { value: "12+", label: "Projects shipped" },
  { value: "8", label: "Conference talks" },
  { value: "40+", label: "Articles written" },
  { value: "5yr", label: "In the craft" },
];

export const projects = [
  {
    title: "Project One",
    description:
      "A brief description of what this project does and why it matters.",
    tags: ["Next.js", "TypeScript", "Postgres"],
    url: "#",
    year: 2024,
  },
  {
    title: "Project Two",
    description: "Another project that solved a real problem for real people.",
    tags: ["React", "Motion", "Tailwind"],
    url: "#",
    year: 2024,
  },
  {
    title: "Project Three",
    description: "Open source tool used by developers across West Africa.",
    tags: ["Node.js", "API", "OSS"],
    url: "#",
    year: 2023,
  },
];

export const articles = [
  {
    title: "How I approach design systems at scale",
    publication: "Dev.to",
    url: "#",
    date: "Jan 2025",
  },
  {
    title: "Building accessible UIs in West Africa's ecosystem",
    publication: "Hashnode",
    url: "#",
    date: "Nov 2024",
  },
  {
    title: "Why performance is a feature, not an afterthought",
    publication: "Medium",
    url: "#",
    date: "Sep 2024",
  },
  {
    title: "The case for boring technology",
    publication: "Personal",
    url: "#",
    date: "Jul 2024",
  },
];

export type TalkType = "conference" | "online" | "meetup";

export interface Talk {
  title: string;
  event: string;
  year: string;
  type: TalkType;
  url?: string;
}

export const talks: Talk[] = [
  {
    title: "Design Tokens at the Edge",
    event: "JSConf Lagos",
    year: "2024",
    type: "conference",
    url: "#",
  },
  {
    title: "Motion Design for Engineers",
    event: "Frontend Nigeria",
    year: "2024",
    type: "online",
    url: "#",
  },
  {
    title: "Shipping Fast Without Breaking",
    event: "DevFest Port Harcourt",
    year: "2023",
    type: "conference",
  },
  {
    title: "CSS Architecture That Scales",
    event: "Naija Dev Meetup",
    year: "2023",
    type: "meetup",
  },
];

export type Project = (typeof projects)[number];
export type Article = (typeof articles)[number];
