import { createFileRoute } from "@tanstack/react-router";

import { Header } from "@/components/portfolio/Header";
import { Hero } from "@/components/portfolio/Hero";
import { About } from "@/components/portfolio/About";
import { Skills } from "@/components/portfolio/Skills";
import { Projects } from "@/components/portfolio/Projects";
import { Experience } from "@/components/portfolio/Experience";
import { GithubSection } from "@/components/portfolio/GithubSection";
import { Approach } from "@/components/portfolio/Approach";
import { Contact } from "@/components/portfolio/Contact";
import { Footer } from "@/components/portfolio/Footer";
import { links, profile } from "@/data/portfolio";

const title = "Emin Bashyrov — Front-End & Full-Stack Developer";
const description =
  "Portfolio of Emin Bashyrov, Front-End / Full-Stack developer in Kharkiv, Ukraine. React, Next.js, TypeScript, NestJS, Prisma and PostgreSQL projects.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { name: "author", content: profile.name },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Person",
          name: profile.name,
          jobTitle: "Front-End / Full-Stack Developer",
          address: {
            "@type": "PostalAddress",
            addressLocality: "Kharkiv",
            addressCountry: "UA",
          },
          sameAs: [links.github, links.linkedin, links.djinni],
        }),
      },
    ],
  }),
  component: Index,
});

function Index() {
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
