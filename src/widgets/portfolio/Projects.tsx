import { ArrowUpRight, Github, ImageIcon } from "lucide-react";
import { projects, type Project } from "@/entities/portfolio/portfolio";
import { Reveal, Section, SectionHeading } from "@/shared/ui/primitives";
import { cn } from "@/shared/lib/utils";

function LinkButton({
  href,
  children,
  primary,
  label,
}: {
  href: string;
  children: React.ReactNode;
  primary?: boolean;
  label: string;
}) {
  const disabled = href === "#";
  const className = cn(
    "inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm font-medium transition-all",
    primary
      ? "bg-primary text-primary-foreground hover:-translate-y-0.5"
      : "border border-border bg-surface/50 hover:border-primary/50",
    disabled && "cursor-not-allowed opacity-50",
  );

  if (disabled) {
    return (
      <button
        type="button"
        disabled
        aria-label={`${label} — link not added yet`}
        className={className}
      >
        {children}
      </button>
    );
  }

  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer noopener"
      aria-label={label}
      className={className}
    >
      {children}
    </a>
  );
}

function ProjectCard({ project, index }: { project: Project; index: number }) {
  return (
    <Reveal delay={index * 0.07}>
      <article
        className={cn(
          "group grid h-full overflow-hidden rounded-3xl border border-border bg-[image:var(--gradient-surface)] transition-all duration-300 hover:-translate-y-1 hover:border-primary/40 md:grid-cols-2",
          project.placeholder && "border-dashed",
        )}
      >
        <div className="relative aspect-video w-full overflow-hidden border-b border-border bg-surface/40 md:aspect-auto md:min-h-full md:border-b-0 md:border-r">
          {project.image ? (
            <img
              src={project.image}
              alt={`${project.title} screenshot`}
              loading="lazy"
              decoding="async"
              className="absolute inset-0 size-full object-contain object-center"
            />
          ) : (
            /* TODO: add a real screenshot in src/entities/portfolio/portfolio.ts → projects[].image */
            <div className="grid size-full place-items-center bg-surface/40">
              <div className="text-center text-muted-foreground">
                <ImageIcon className="mx-auto size-7" aria-hidden="true" />
                <p className="mt-2 font-mono text-[11px] uppercase tracking-widest">
                  Screenshot placeholder
                </p>
              </div>
            </div>
          )}
        </div>

        <div className="flex flex-col p-6 sm:p-8">
          <h3 className="text-xl font-semibold sm:text-2xl">{project.title}</h3>
          <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
            {project.description}
          </p>

          <ul className="mt-5 space-y-2">
            {project.features.map((f) => (
              <li key={f} className="flex gap-2 text-sm text-muted-foreground">
                <span
                  aria-hidden="true"
                  className="mt-2 size-1.5 shrink-0 rounded-full bg-primary"
                />
                {f}
              </li>
            ))}
          </ul>

          <ul className="mt-6 flex flex-wrap gap-2">
            {project.tech.map((t) => (
              <li
                key={t}
                className="rounded-md border border-border bg-surface/60 px-2 py-1 font-mono text-[11px] text-muted-foreground"
              >
                {t}
              </li>
            ))}
          </ul>

          <div className="mt-7 flex flex-wrap gap-3 pt-1">
            <LinkButton href={project.repo} label={`${project.title} repository`}>
              <Github className="size-4" aria-hidden="true" />
              Repository
            </LinkButton>
            <LinkButton href={project.demo} primary label={`${project.title} live demo`}>
              Live demo
              <ArrowUpRight className="size-4" aria-hidden="true" />
            </LinkButton>
          </div>
        </div>
      </article>
    </Reveal>
  );
}

export function Projects() {
  return (
    <Section id="projects">
      <SectionHeading
        eyebrow="04 — Selected work"
        title="Featured projects"
        description="Applications built end to end — interface, logic, API and data."
      />

      <div className="mt-12 grid gap-6">
        {projects.map((p, i) => (
          <ProjectCard key={p.title} project={p} index={i} />
        ))}
      </div>
    </Section>
  );
}
