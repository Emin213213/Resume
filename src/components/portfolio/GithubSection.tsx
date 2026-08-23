import { Github, ArrowUpRight } from "lucide-react";
import { links } from "@/data/portfolio";
import { Reveal, Section } from "./primitives";

export function GithubSection() {
  const hasUsername = links.githubUsername.trim().length > 0;

  return (
    <Section id="github">
      <Reveal>
        <div className="relative overflow-hidden rounded-3xl border border-border bg-[image:var(--gradient-surface)] p-8 sm:p-10">
          <div
            aria-hidden="true"
            className="grid-backdrop pointer-events-none absolute inset-0 opacity-30"
          />
          <div className="relative grid gap-8 lg:grid-cols-[1fr_auto] lg:items-center">
            <div className="max-w-xl">
              <p className="font-mono text-xs uppercase tracking-[0.28em] text-primary">
                05 — Code
              </p>
              <h2 className="mt-4 text-3xl font-semibold sm:text-4xl">Beyond the interface</h2>
              <p className="mt-4 text-base leading-relaxed text-muted-foreground">
                I work with complete application flows — data models, API layers, validation and
                deployment — not only isolated UI components. The repositories show how I structure
                a project from the first commit.
              </p>

              <a
                href={links.github}
                target={links.github.startsWith("http") ? "_blank" : undefined}
                rel="noreferrer noopener"
                className="mt-7 inline-flex items-center gap-2 rounded-full border border-primary/40 bg-primary/10 px-5 py-2.5 text-sm font-medium transition-colors hover:bg-primary/20"
              >
                <Github className="size-4" aria-hidden="true" />
                View GitHub profile
                <ArrowUpRight className="size-4" aria-hidden="true" />
              </a>
            </div>

            {hasUsername ? (
              <img
                src={`https://ghchart.rshah.org/22d3ee/${links.githubUsername}`}
                alt={`GitHub contribution graph for ${links.githubUsername}`}
                loading="lazy"
                decoding="async"
                className="w-full max-w-md rounded-xl border border-border bg-surface/50 p-4"
              />
            ) : (
              /* TODO: set links.githubUsername in src/data/portfolio.ts to show the real contribution graph */
              <div className="grid min-h-32 w-full max-w-md place-items-center rounded-xl border border-dashed border-border bg-surface/40 p-6 text-center font-mono text-[11px] uppercase tracking-widest text-muted-foreground">
                Contribution graph appears once a GitHub username is set
              </div>
            )}
          </div>
        </div>
      </Reveal>
    </Section>
  );
}
