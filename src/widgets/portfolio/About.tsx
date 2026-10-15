import { Sparkles, Layers, Compass } from "lucide-react";
import { aboutBlocks } from "@/entities/portfolio/portfolio";
import { Reveal, Section, SectionHeading } from "@/shared/ui/primitives";


const icons = { sparkles: Sparkles, layers: Layers, compass: Compass };

export function About() {
  return (
    <Section id="about">
      <SectionHeading
        eyebrow="01 — Profile"
        title="About me"
        description="A short read on how I work and where I'm heading."
      />

      <div className="mt-12 grid gap-5 md:grid-cols-3">
        {aboutBlocks.map((block, i) => {
          const Icon = icons[block.icon];
          return (
            <Reveal key={block.title} delay={i * 0.08}>
              <article className="group h-full rounded-2xl border border-border bg-[image:var(--gradient-surface)] p-6 transition-colors hover:border-primary/40">
                <span className="inline-flex size-11 items-center justify-center rounded-xl border border-primary/25 bg-primary/10 text-primary">
                  <Icon className="size-5" aria-hidden="true" />
                </span>
                <h3 className="mt-5 text-lg font-semibold">{block.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{block.text}</p>
              </article>
            </Reveal>
          );
        })}
      </div>
    </Section>
  );
}
