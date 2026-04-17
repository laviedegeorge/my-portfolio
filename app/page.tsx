import Header from "@/components/layouts/header";
import About from "@/components/sections/landing-page/about-us";
import Hero from "@/components/sections/landing-page/hero";
import Impact from "@/components/sections/landing-page/impact";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <About />
        <Impact />
      </main>
    </>
  );
}
