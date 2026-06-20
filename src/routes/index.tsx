import { createFileRoute } from "@tanstack/react-router";
import { Nav } from "@/components/site/Nav";
import { Hero } from "@/components/site/Hero";
import { MacroVision } from "@/components/site/MacroVision";
import { Masterplan } from "@/components/site/Masterplan";
import { CapitalFlow } from "@/components/site/CapitalFlow";
import { Portfolio } from "@/components/site/Portfolio";
import { Flagship } from "@/components/site/Flagship";
import { RoiSimulator } from "@/components/site/RoiSimulator";
import { Footer } from "@/components/site/Footer";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Pham Tri : Sovereign Capital — Zone 4 Can Tho Investor Relations" },
      {
        name: "description",
        content:
          "Institutional-grade sovereign capital gateway positioning Can Tho Zone 4 as Southern Vietnam's last integrated investment ecosystem.",
      },
      { property: "og:title", content: "Pham Tri : Sovereign Capital" },
      { property: "og:description", content: "The Last Sovereign Growth Corridor of Southern Vietnam." },
      {
        property: "og:image",
        content: "https://images.unsplash.com/photo-1449824913935-59a10b8d2000?auto=format&fit=crop&w=1600&q=80",
      },
    ],
  }),
  component: HomePage,
});

function HomePage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Nav />
      <main>
        <Hero />
        <MacroVision />
        <Masterplan />
        <CapitalFlow />
        <Portfolio />
        <Flagship />
        <RoiSimulator />
      </main>
      <Footer />
    </div>
  );
}
