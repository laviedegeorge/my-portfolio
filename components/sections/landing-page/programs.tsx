"use client";
import { motion } from "motion/react";
import {
  BookOpen,
  ShieldCheck,
  MapPin,
  Megaphone,
  Monitor,
  MessageCircle,
} from "lucide-react";
import { SectionHeader } from "@/components/ui/primitives";
import { ServiceCard } from "@/components/ui/service-card";

const programs = [
  {
    tag: "Education",
    icon: BookOpen,
    title: "Health Literacy & Education",
    role: "Workshops · Schools · Digital",
    description:
      "Community workshops, school outreach, WhatsApp/SMS campaigns, and visual storytelling for plain-language health education.",
    gradient: "from-forest-900 to-forest-700",
    primaryAction: "Learn More",
    secondaryAction: "Register",
  },
  {
    tag: "Prevention",
    icon: ShieldCheck,
    title: "NCD Risk Reduction",
    role: "Tobacco · Nutrition · Alcohol",
    description:
      "Tobacco cessation support, nutrition & fitness education, and alcohol awareness programs targeting chronic disease prevention.",
    gradient: "from-forest-950 to-forest-800",
    primaryAction: "Learn More",
    secondaryAction: "Register",
  },
  {
    tag: "Outreach",
    icon: MapPin,
    title: "Community Outreach",
    role: "Rural · Urban · Youth",
    description:
      "Field programs in rural communities, urban slums, and youth engagement initiatives that bring health services to doorsteps.",
    gradient: "from-forest-800 to-forest-900",
    primaryAction: "Learn More",
    secondaryAction: "Volunteer",
  },
  {
    tag: "Advocacy",
    icon: Megaphone,
    title: "Advocacy & Systems Change",
    role: "Policy · Partnerships · Voice",
    description:
      "Policy campaigns, strategic partnerships, and amplifying community voices to drive sustainable healthcare system improvements.",
    gradient: "from-forest-900 to-forest-700",
    primaryAction: "Learn More",
    secondaryAction: "Partner",
  },
  {
    tag: "Digital",
    icon: Monitor,
    title: "Digital Health Delivery",
    role: "Telehealth · Modules · Mobile",
    description:
      "Telehealth sessions, interactive online modules, and mobile-first education tools designed for low-bandwidth environments.",
    gradient: "from-forest-950 to-forest-800",
    primaryAction: "Access Now",
    secondaryAction: "Learn More",
  },
  {
    tag: "WhatsApp",
    icon: MessageCircle,
    title: "WhatsApp Health Line",
    role: "Chat · Reminders · Programs",
    description:
      "Get health tips, program updates, and direct support via WhatsApp. Chat with a health advisor today.",
    gradient: "from-[#075e54] to-[#128c7e]",
    primaryAction: "Chat Now",
  },
];

const ease = [0.22, 1, 0.36, 1] as const;

export default function Programs() {
  return (
    <section id="programs" className="bg-white py-24 lg:py-36">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7, ease }}
        >
          <SectionHeader
            eyebrow="What We Do"
            title={
              <>
                Programs built
                <br />
                for <span className="text-forest-500">real impact</span>
              </>
            }
            description="Five interconnected service streams designed to address the full health journey — from awareness to systems change."
          />
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {programs.map((p, i) => (
            <ServiceCard
              key={p.title}
              index={i + 1}
              tag={p.tag}
              icon={p.icon}
              title={p.title}
              role={p.role}
              description={p.description}
              gradient={p.gradient}
              primaryAction={p.primaryAction}
              secondaryAction={p.secondaryAction}
              delay={i * 0.08}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
