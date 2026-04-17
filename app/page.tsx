import Header from "@/components/layouts/header";
import About from "@/components/sections/landing-page/about-us";
import Hero from "@/components/sections/landing-page/hero";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <About />
      </main>
    </>
  );
}
