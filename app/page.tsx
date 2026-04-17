import Header from "@/components/layouts/header";
import About from "@/components/sections/landing-page/about-us";
import Contact from "@/components/sections/landing-page/contact";
import HealthQuiz from "@/components/sections/landing-page/health-quiz";
import Hero from "@/components/sections/landing-page/hero";
import Impact from "@/components/sections/landing-page/impact";
import Involved from "@/components/sections/landing-page/involved";
import NCD from "@/components/sections/landing-page/ncd";
import Outreach from "@/components/sections/landing-page/outreach";
import Partners from "@/components/sections/landing-page/partners";
import Programs from "@/components/sections/landing-page/programs";
import Resources from "@/components/sections/landing-page/resources";
import Testimonials from "@/components/sections/landing-page/testimonials";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <About />
        <Impact />
        <Programs />
        <NCD />
        <Outreach />
        <HealthQuiz />
        <Resources />
        <Testimonials />
        <Partners />
        <Involved />
        <Contact />
      </main>
    </>
  );
}
