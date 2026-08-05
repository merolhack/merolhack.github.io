import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/sections/Hero";
import { ExecutiveSummary } from "@/components/sections/ExecutiveSummary";
import { ImpactMetrics } from "@/components/sections/ImpactMetrics";
import { SkillsMatrix } from "@/components/sections/SkillsMatrix";
import { ArchitectureDiagram } from "@/components/sections/ArchitectureDiagram";
import { Timeline } from "@/components/sections/Timeline";
import { DigitalFootprint } from "@/components/sections/DigitalFootprint";
import { FeaturedProject } from "@/components/sections/FeaturedProject";
import { PortfolioDetails } from "@/components/sections/PortfolioDetails";
import { Footer } from "@/components/sections/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-zinc-950 text-zinc-50 selection:bg-indigo-500/30">
      <Navbar />
      <Hero />
      <ExecutiveSummary />
      <ImpactMetrics />
      <SkillsMatrix />
      <ArchitectureDiagram />
      <Timeline />
      <DigitalFootprint />
      <FeaturedProject />
      <PortfolioDetails />
      <Footer />
    </main>
  );
}
