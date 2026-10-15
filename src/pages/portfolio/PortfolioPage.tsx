import { Header } from "@/widgets/portfolio/Header";
import { Hero } from "@/widgets/portfolio/Hero";
import { About } from "@/widgets/portfolio/About";
import { Skills } from "@/widgets/portfolio/Skills";
import { Projects } from "@/widgets/portfolio/Projects";
import { Experience } from "@/widgets/portfolio/Experience";
import { GithubSection } from "@/widgets/portfolio/GithubSection";
import { Approach } from "@/widgets/portfolio/Approach";
import { Contact } from "@/widgets/portfolio/Contact";
import { Footer } from "@/widgets/portfolio/Footer";

export function PortfolioPage() {
  return (
    <div className="relative min-h-screen bg-background text-foreground">
      <div aria-hidden="true" className="pointer-events-none fixed inset-0 z-0 noise-overlay" />
      <Header />
      <main id="main" className="relative z-10">
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Experience />
        <GithubSection />
        <Approach />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
