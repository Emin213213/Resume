import { createFileRoute } from "@tanstack/react-router";

import { PortfolioPage } from "@/pages/portfolio/PortfolioPage";
import { links, profile } from "@/entities/portfolio/portfolio";

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
  component: PortfolioPage,
});
