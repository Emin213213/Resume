import { approach } from "@/data/portfolio";
import { Reveal, Section, SectionHeading } from "./primitives";

export function Approach() {
  return (
    <Section id="approach">
      <SectionHeading eyebrow="06 — Process" title="How I work" />

      <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {approach.map((step, i) => (
          <Reveal key={step.title} delay={i * 0.07}>
            <article className="h-full rounded-2xl border border-border bg-surface/40 p-6 transition-all duration-300 hover:-translate-y-1 hover:border-primary/40">
              <span className="font-mono text-sm text-primary">{step.step}</span>
              <h3 className="mt-3 text-lg font-semibold">{step.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{step.text}</p>
            </article>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
