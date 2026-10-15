import { useEffect, useState } from "react";
import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion";
import { ArrowRight, Briefcase, ExternalLink, Github, Linkedin } from "lucide-react";
import { links, profile } from "@/entities/portfolio/portfolio";

const EASE = [0.22, 1, 0.36, 1] as const;

function scrollToId(id: string) {
  document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
}

function RoleLine() {
  const reduce = useReducedMotion();
  const variants = profile.roleVariants;
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (reduce || variants.length < 2) return;
    const t = setInterval(() => setIndex((i) => (i + 1) % variants.length), 3200);
    return () => clearInterval(t);
  }, [reduce, variants.length]);

  return (
    <p className="mt-5 flex min-h-8 items-center font-mono text-sm uppercase tracking-[0.2em] text-primary sm:text-base">
      <span className="mr-2 text-muted-foreground">/</span>
      <motion.span
        key={index}
        initial={reduce ? false : { opacity: 0, y: 8 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
      >
        {variants[index]}
      </motion.span>
      <motion.span
        aria-hidden="true"
        className="ml-2 inline-block h-4 w-[2px] bg-primary"
        animate={reduce ? {} : { opacity: [1, 0, 1] }}
        transition={{ duration: 1.1, repeat: Infinity }}
      />
    </p>
  );
}

const ctas = [
  { href: links.github, label: "GitHub", Icon: Github },
  { href: links.linkedin, label: "LinkedIn", Icon: Linkedin },
  { href: links.djinni, label: "Djinni", Icon: Briefcase },
];

export function Hero() {
  const reduce = useReducedMotion();
  const { scrollY } = useScroll();
  const portraitY = useTransform(scrollY, [0, 600], [0, reduce ? 0 : -50]);

  const container = {
    hidden: {},
    show: { transition: { staggerChildren: 0.08, delayChildren: 0.08 } },
  };
  const item = {
    hidden: reduce ? {} : { opacity: 0, y: 26 },
    show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: EASE } },
  };

  return (
    <section id="hero" className="relative flex min-h-svh items-center overflow-hidden pt-28">
      <div
        aria-hidden="true"
        className="grid-backdrop pointer-events-none absolute inset-0 opacity-40 [mask-image:radial-gradient(ellipse_at_50%_0%,black,transparent_72%)]"
      />
      <div aria-hidden="true" className="noise-overlay pointer-events-none absolute inset-0" />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-48 top-0 size-[34rem] rounded-full bg-accent-red/12 blur-[140px]"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-40 bottom-0 size-[30rem] rounded-full bg-accent-ember/10 blur-[150px]"
      />

      <div className="relative mx-auto grid w-full max-w-6xl gap-14 px-5 pb-24 sm:px-8 lg:grid-cols-[1.2fr_0.8fr] lg:items-center">
        <motion.div variants={container} initial="hidden" animate="show">
          <motion.div variants={item} className="flex flex-wrap items-center gap-3">
            <span className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-3 py-1.5 font-mono text-[11px] uppercase tracking-[0.2em] text-primary">
              <span className="relative flex size-2">
                <span className="absolute inline-flex size-full animate-ping rounded-full bg-primary/70" />
                <span className="relative inline-flex size-2 rounded-full bg-primary" />
              </span>
              {profile.availability}
            </span>
            <span className="font-mono text-[11px] uppercase tracking-[0.2em] text-muted-foreground">
              {profile.location}
            </span>
          </motion.div>

          <motion.h1 variants={item} className="display-xl mt-7 text-[clamp(2.6rem,10vw,6.5rem)]">
            <span className="block">Emin</span>
            <span className="block">
              Bash<span className="text-gradient">yrov</span>
            </span>
          </motion.h1>

          <motion.div variants={item}>
            <RoleLine />
          </motion.div>

          <motion.p
            variants={item}
            className="mt-7 max-w-xl border-l-2 border-primary/60 pl-5 text-base leading-relaxed text-muted-foreground sm:text-lg"
          >
            {profile.intro}
          </motion.p>

          <motion.div variants={item} className="mt-9 flex flex-wrap gap-3">
            <button
              type="button"
              onClick={() => scrollToId("projects")}
              className="group inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground transition-all duration-200 hover:-translate-y-0.5 hover:shadow-[var(--shadow-glow)] active:translate-y-0"
            >
              View projects
              <ArrowRight
                className="size-4 transition-transform group-hover:translate-x-1"
                aria-hidden="true"
              />
            </button>

            {ctas.map(({ href, label, Icon }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noreferrer noopener"
                className="inline-flex items-center gap-2 rounded-full border border-border bg-surface/40 px-5 py-3 text-sm font-semibold transition-colors hover:border-primary/60 hover:bg-surface"
              >
                <Icon className="size-4" aria-hidden="true" />
                {label}
              </a>
            ))}

            <a
              href={links.cv}
              target="_blank"
              rel="noreferrer noopener"
              className="inline-flex items-center gap-2 rounded-full border border-primary/40 bg-primary/10 px-5 py-3 text-sm font-semibold text-foreground transition-colors hover:bg-primary/20"
            >
              <ExternalLink className="size-4" aria-hidden="true" />
              View Resume
            </a>
          </motion.div>

          <motion.p variants={item} className="mt-6 text-sm text-muted-foreground/80">
            {profile.locationLine}
          </motion.p>
        </motion.div>

        <motion.div style={{ y: portraitY }}>
          <Portrait />
        </motion.div>
      </div>
    </section>
  );
}

function Portrait() {
  const reduce = useReducedMotion();

  return (
    <motion.div
      initial={reduce ? false : { opacity: 0, scale: 0.94, y: 30 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      transition={{ duration: 0.9, delay: 0.25, ease: EASE }}
      whileHover={reduce ? {} : { rotate: -1.2, scale: 1.015 }}
      className="group relative mx-auto w-full max-w-sm lg:max-w-none lg:translate-y-6"
    >
      <div
        aria-hidden="true"
        className="accent-glow absolute inset-8 rounded-[2.5rem] bg-accent-red/15"
      />

      <div
        aria-hidden="true"
        className="absolute -left-4 -top-4 size-24 border-l border-t border-primary/50"
      />

      <div
        aria-hidden="true"
        className="absolute -bottom-4 -right-4 size-24 border-b border-r border-primary/50"
      />

      <div className="relative overflow-hidden rounded-[2rem] rounded-tr-[5rem] border border-border bg-surface/50 shadow-[var(--shadow-soft)]">
        <div className="aspect-4/5 w-full overflow-hidden">
          <img
            src={profile.portrait}
            alt={profile.portraitAlt || "Emin Bashyrov"}
            loading="eager"
            decoding="async"
            className="size-full object-cover object-center transition-transform duration-700 group-hover:scale-[1.03]"
          />
        </div>

        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 bg-linear-to-t from-background/80 via-transparent to-transparent"
        />

        <div className="pointer-events-none absolute bottom-5 left-5 font-mono text-[11px] uppercase tracking-[0.22em] text-muted-foreground">
          {profile.role}
        </div>
      </div>
    </motion.div>
  );
}
