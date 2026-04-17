import Header from "@/components/layouts/header";
import About from "@/components/sections/landing-page/about-us";
import HealthQuiz from "@/components/sections/landing-page/health-quiz";
import Hero from "@/components/sections/landing-page/hero";
import Impact from "@/components/sections/landing-page/impact";
import NCD from "@/components/sections/landing-page/ncd";
import Outreach from "@/components/sections/landing-page/outreach";
import Programs from "@/components/sections/landing-page/programs";

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
      </main>
    </>
  );
}
