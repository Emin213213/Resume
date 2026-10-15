import { skillCategories } from "@/entities/portfolio/portfolio";
import { Reveal, Section, SectionHeading } from "@/shared/ui/primitives";

export function Skills() {
  return (
    <Section id="skills">
      <SectionHeading
        eyebrow="02 — Toolbox"
        title="Tech stack"
        description="The technologies I reach for across the frontend, the backend and everything between."
      />

      <div className="mt-14 grid gap-px overflow-hidden rounded-3xl border border-border bg-border sm:grid-cols-2 lg:grid-cols-4">
        {skillCategories.map((cat, i) => (
          <Reveal key={cat.title} delay={i * 0.05} className="h-full">
            <article className="group relative h-full bg-background p-6 transition-colors duration-300 hover:bg-surface/60">
              <span
                aria-hidden="true"
                className="absolute inset-x-0 top-0 h-px origin-left scale-x-0 bg-[image:var(--gradient-accent)] transition-transform duration-500 group-hover:scale-x-100"
              />
              <p className="font-mono text-[10px] uppercase tracking-[0.24em] text-primary">
                {String(i + 1).padStart(2, "0")}
              </p>
              <h3 className="mt-3 text-lg font-semibold">{cat.title}</h3>
              <p className="mt-1 text-xs text-muted-foreground">{cat.hint}</p>

              <ul className="mt-5 flex flex-wrap gap-1.5">
                {cat.skills.map((s) => (
                  <li key={s.name}>
                    <span className="inline-flex items-center gap-1.5 rounded-md border border-border bg-surface/50 px-2 py-1 text-[12px] text-foreground/85 transition-all duration-200 hover:-translate-y-0.5 hover:border-primary/60 hover:text-foreground">
                      {s.name}
                      {s.duration ? (
                        <span className="font-mono text-[10px] text-primary">{s.duration}</span>
                      ) : null}
                    </span>
                  </li>
                ))}
              </ul>
            </article>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
