import { Footer } from "@/components/layouts/footer";
import { Header } from "@/components/layouts/header";
import { Hero } from "@/components/sections/landing-page/hero";

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main className="min-h-screen">
        <Hero />
      </main>
      <Footer />
    </div>
  );
}
