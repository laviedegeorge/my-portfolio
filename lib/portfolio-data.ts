export const siteConfig = {
  name: "Kelechi Apugo",
  initials: "KA.",
  location: "Nigeria",
  email: "laviedegeorge1292@gmail.com",
  available: true,
  socials: {
    twitter: "#",
    github: "https://github.com/laviedegeorge",
    linkedin: "https://www.linkedin.com/in/kelechi-apugo-16729846",
  },
};

export const navLinks = [
  { label: "Work", href: "#projects" },
  { label: "Experience", href: "#experience" },
  { label: "Writing", href: "#writing" },
  { label: "Talks", href: "#talks" },
  { label: "Contact", href: `mailto:${siteConfig.email}` },
];

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
  // ── Technical ─────────────────────────────────────────────────────────
  {
    title:
      "How to Debug React State Updates Like a Pro (Without Polluting Production)",
    publication: "freeCodeCamp",
    url: "https://www.freecodecamp.org/news/how-to-debug-react-state-updates-like-a-pro-without-polluting-production",
    date: "Feb 2026",
    category: "technical" as const,
  },
  {
    title:
      "From Tutorials to Real Skills: How to Apply What You Learn in Any Tech Role",
    publication: "Hashnode",
    url: "https://laviedegeorge.hashnode.dev/from-tutorials-to-real-skills-how-to-apply-what-you-learn-in-any-tech-role",
    date: "Mar 2026",
    category: "technical" as const,
  },
  {
    title: "Leveraging Ideas to Become a Better Developer",
    publication: "Hashnode",
    url: "https://laviedegeorge.hashnode.dev/leveraging-ideas-to-become-a-better-developer",
    date: "Jul 2021",
    category: "technical" as const,
  },
  {
    title: "Changing the State of a Child Component from its Parent Component",
    publication: "Hashnode",
    url: "https://laviedegeorge.hashnode.dev/changing-the-state-of-a-child-component-from-its-parent-component",
    date: "Sep 2020",
    category: "technical" as const,
  },
  {
    title: "Understanding CSS Positioning",
    publication: "Hashnode",
    url: "https://laviedegeorge.hashnode.dev/understanding-css-positioning",
    date: "May 2020",
    category: "technical" as const,
  },
  {
    title: "The Theory of the Box Model — Margin and Padding Explained",
    publication: "Hashnode",
    url: "https://laviedegeorge.hashnode.dev/the-theory-of-the-box-model-margin-and-padding-explained",
    date: "Mar 2020",
    category: "technical" as const,
  },
  // ── Personal ──────────────────────────────────────────────────────────
  {
    title: "TORN IN TWO (The Unfinished Story)",
    publication: "Medium",
    url: "https://laviedegeorge.medium.com/torn-in-two-she-lays-on-the-altar-in-her-floral-gown-the-same-she-wore-walking-down-the-altar-1ad4f293bd61",
    date: "Jun 2021",
    category: "personal" as const,
  },
  {
    title: "2020",
    publication: "Medium",
    url: "https://laviedegeorge.medium.com/2020-39ab77997b46",
    date: "Jan 2021",
    category: "personal" as const,
  },
  {
    title: "Valar Morghulis — All Men Must Die (A Tribute to my Mum)",
    publication: "Medium",
    url: "https://laviedegeorge.medium.com/valar-morghulis-all-men-must-die-a-tribute-to-my-mum-5aec198d96d4",
    date: "Jul 2020",
    category: "personal" as const,
  },
  {
    title: "Covid-19 — The War Against Microbes",
    publication: "Medium",
    url: "https://laviedegeorge.medium.com/covid-19-the-war-against-microbes-4e92da347808",
    date: "Apr 2020",
    category: "personal" as const,
  },
  {
    title: "Twenty-Nineteen",
    publication: "Blogger",
    url: "https://laviedegeorge.blogspot.com/2019/12/twenty-nineteenthe-journey.html",
    date: "Dec 2019",
    category: "personal" as const,
  },
  {
    title: "The Journey — A Job Trip That Turned Me Into a Tourist (Part 1)",
    publication: "Blogger",
    url: "https://laviedegeorge.blogspot.com/2019/08/the-journey-job-trip-that-turned-me-to.html",
    date: "Aug 2019",
    category: "personal" as const,
  },
];

export type EmploymentType = "full-time" | "contract";

export interface Experience {
  company: string;
  title?: string;
  period: string;
  employment: EmploymentType;
  achievements?: string[];
  current?: boolean;
}

export const experience: Experience[] = [
  {
    company: "Heala Tech",
    title: "Lead Frontend Engineer",
    period: "Apr 2022 — Present",
    employment: "full-time",
    current: true,
    achievements: [
      "Built and maintains a telemedicine platform processing 10,000+ consultations monthly.",
      "Architected a multi-tenant white-label SDK adopted by 5+ healthcare partners.",
      "Reduced average page load time by 40% through code-splitting and asset optimisation.",
      "Led a team of 3 engineers, establishing code review standards and CI/CD workflows.",
    ],
  },
  {
    company: "Synergy",
    title: "Lead Frontend Engineer",
    period: "Sep 2024 — Oct 2024",
    employment: "contract",
  },
  {
    company: "Nestcoin",
    title: "Frontend Engineer",
    period: "Oct 2021 — Dec 2021",
    employment: "full-time",
  },
  {
    company: "Crevatal",
    title: "Frontend Engineer",
    period: "Sep 2021 — Feb 2022",
    employment: "contract",
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
