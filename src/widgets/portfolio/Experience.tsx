import { experience } from "@/entities/portfolio/portfolio";
import { Chip, Reveal, Section, SectionHeading } from "@/shared/ui/primitives";

export function Experience() {
  return (
    <Section id="experience">
      <SectionHeading
        eyebrow="02 — Track record"
        title="Experience"
        description="Selected project experience, from responsive storefronts to full-stack applications."
      />

      <ol className="relative mt-12 border-l border-border pl-6 sm:pl-10">
        {experience.map((item, i) => (
          <Reveal
            as="li"
            key={`${item.role}-${i}`}
            delay={i * 0.08}
            className="relative pb-10 last:pb-0"
          >
            <span
              aria-hidden="true"
              className="absolute -left-[31px] top-2 size-3 rounded-full border border-primary/60 bg-background sm:-left-[47px]"
            >
              <span className="absolute inset-[3px] rounded-full bg-primary" />
            </span>

            <div className="rounded-2xl border border-border bg-surface/40 p-6 transition-colors hover:border-primary/40">
              <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
                <div>
                  <h3 className="text-2xl font-semibold tracking-tight">{item.company || item.role}</h3>
                  {item.company ? <p className="mt-1 text-sm font-medium text-primary">{item.role}</p> : null}
                </div>
                <div className="flex flex-wrap gap-2">
                  {item.period ? <Chip>{item.period}</Chip> : null}
                  {item.location ? <Chip>{item.location}</Chip> : null}
                </div>
              </div>

              <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
                {item.description}
              </p>

              {item.stack?.length ? (
                <div className="mt-4 flex flex-wrap gap-2" aria-label="Technology stack">
                  {item.stack.map((technology) => <Chip key={technology}>{technology}</Chip>)}
                </div>
              ) : null}

              {item.highlights?.length ? (
                <ul className="mt-5 grid gap-3 border-t border-border pt-5">
                  {item.highlights.map((h) => (
                    <li key={h} className="flex gap-2 text-sm text-muted-foreground">
                      <span
                        aria-hidden="true"
                        className="mt-2 size-1.5 shrink-0 rounded-full bg-primary"
                      />
                      {h}
                    </li>
                  ))}
                </ul>
              ) : null}
            </div>
          </Reveal>
        ))}
      </ol>

    </Section>
  );
}
