import Header from "@/components/layouts/header";
import About from "@/components/sections/landing-page/about-us";
import Hero from "@/components/sections/landing-page/hero";
import Impact from "@/components/sections/landing-page/impact";
import NCD from "@/components/sections/landing-page/ncd";
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
      </main>
    </>
  );
}
