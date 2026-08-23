import { experience } from "@/data/portfolio";
import { Chip, Reveal, Section, SectionHeading } from "./primitives";

export function Experience() {
  return (
    <Section id="experience">
      <SectionHeading
        eyebrow="02 — Track record"
        title="Experience"
        description="Practical work across personal projects, internships and team-based development."
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
              <div className="flex flex-wrap items-center gap-3">
                <h3 className="text-xl font-semibold">{item.role}</h3>
                {item.company ? <Chip>{item.company}</Chip> : null}
                {item.period ? <Chip>{item.period}</Chip> : null}
                {item.location ? <Chip>{item.location}</Chip> : null}
              </div>

              <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
                {item.description}
              </p>

              {item.highlights?.length ? (
                <ul className="mt-5 grid gap-2 sm:grid-cols-2">
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

      <p className="mt-6 text-xs text-muted-foreground/70">
        {/* TODO: add real company names and dates in src/data/portfolio.ts → experience[] */}
        Company names and dates are editable in the experience data file.
      </p>
    </Section>
  );
}
