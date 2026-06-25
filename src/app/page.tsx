import { Hero } from "@/components/coming-soon/Hero";
import { Showcase } from "@/components/coming-soon/Showcase";
import { SiteFooter } from "@/components/SiteFooter";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col">
      <Hero />
      <Showcase />
      <SiteFooter />
    </main>
  );
}
