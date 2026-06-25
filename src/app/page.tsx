import { Hero } from "@/components/coming-soon/Hero";
import { Showcase } from "@/components/coming-soon/Showcase";
import { FloatingBrand } from "@/components/FloatingBrand";
import { SiteFooter } from "@/components/SiteFooter";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col">
      <FloatingBrand />
      <Hero />
      <Showcase />
      <SiteFooter />
    </main>
  );
}
