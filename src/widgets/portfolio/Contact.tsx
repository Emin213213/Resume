import { useState, type FormEvent } from "react";
import { Briefcase, Github, Mail } from "lucide-react";
import { links } from "@/entities/portfolio/portfolio";
import { Reveal, Section } from "@/shared/ui/primitives";

/**
 * The site has no backend. The form opens the visitor's mail client with a
 * prefilled message (mailto).
 * TODO (optional): to use EmailJS/Formspree instead, set FORM_ENDPOINT to your
 * Formspree URL — the form will POST there and no mail client will open.
 */
const FORM_ENDPOINT = "" as string;

export function Contact() {
  const [status, setStatus] = useState<null | "opened" | "sent" | "error">(null);
  const [sending, setSending] = useState(false);

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);
    const name = String(data.get("name") ?? "");
    const email = String(data.get("email") ?? "");
    const message = String(data.get("message") ?? "");

    if (FORM_ENDPOINT) {
      try {
        setSending(true);
        const res = await fetch(FORM_ENDPOINT, {
          method: "POST",
          headers: { Accept: "application/json" },
          body: data,
        });
        setStatus(res.ok ? "sent" : "error");
        if (res.ok) form.reset();
      } catch {
        setStatus("error");
      } finally {
        setSending(false);
      }
      return;
    }

    const subject = encodeURIComponent(`Portfolio message from ${name || "a visitor"}`);
    const body = encodeURIComponent(`${message}\n\n—\n${name}\n${email}`);
    window.location.href = `mailto:${links.email}?subject=${subject}&body=${body}`;
    setStatus("opened");
  }

  const inputClass =
    "w-full rounded-xl border border-border bg-surface/50 px-4 py-3 text-sm outline-none transition-colors placeholder:text-muted-foreground/60 focus:border-primary/60";

  return (
    <Section id="contact">
      <div className="grid gap-10 lg:grid-cols-2 lg:gap-16">
        <Reveal>
          <p className="font-mono text-xs uppercase tracking-[0.28em] text-primary">07 — Contact</p>
          <h2 className="mt-4 text-3xl font-semibold sm:text-4xl md:text-5xl">
            Let&apos;s build something useful.
          </h2>
          <p className="mt-5 max-w-lg text-base leading-relaxed text-muted-foreground">
            I&apos;m open to Front-End and Full-Stack opportunities, freelance projects and
            collaboration.
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href={`mailto:${links.email}`}
              className="inline-flex items-center gap-2 rounded-full bg-primary px-5 py-3 text-sm font-semibold text-primary-foreground transition-transform hover:-translate-y-0.5"
            >
              <Mail className="size-4" aria-hidden="true" />
              Send an email
            </a>
            <a
              href={links.github}
              target={links.github.startsWith("http") ? "_blank" : undefined}
              rel="noreferrer noopener"
              className="inline-flex items-center gap-2 rounded-full border border-border bg-surface/50 px-5 py-3 text-sm font-semibold transition-colors hover:border-primary/50"
            >
              <Github className="size-4" aria-hidden="true" />
              View GitHub
            </a>
            <a
              href={links.djinni}
              target={links.djinni.startsWith("http") ? "_blank" : undefined}
              rel="noreferrer noopener"
              className="inline-flex items-center gap-2 rounded-full border border-border bg-surface/50 px-5 py-3 text-sm font-semibold transition-colors hover:border-primary/50"
            >
              <Briefcase className="size-4" aria-hidden="true" />
              Open Djinni profile
            </a>
          </div>
        </Reveal>

        <Reveal delay={0.1}>
          <form
            onSubmit={handleSubmit}
            className="rounded-3xl border border-border bg-[image:var(--gradient-surface)] p-6 sm:p-8"
          >
            <div className="grid gap-4">
              <div>
                <label htmlFor="name" className="mb-2 block text-sm font-medium">
                  Name
                </label>
                <input
                  id="name"
                  name="name"
                  required
                  autoComplete="name"
                  className={inputClass}
                  placeholder="Your name"
                />
              </div>
              <div>
                <label htmlFor="email" className="mb-2 block text-sm font-medium">
                  Email
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  autoComplete="email"
                  className={inputClass}
                  placeholder="you@company.com"
                />
              </div>
              <div>
                <label htmlFor="message" className="mb-2 block text-sm font-medium">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={5}
                  className={inputClass}
                  placeholder="What would you like to build?"
                />
              </div>
            </div>

            <button
              type="submit"
              disabled={sending}
              className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-full bg-primary px-5 py-3 text-sm font-semibold text-primary-foreground transition-transform hover:-translate-y-0.5 disabled:opacity-60"
            >
              {sending ? "Sending…" : "Send message"}
            </button>

            <p aria-live="polite" className="mt-4 text-xs leading-relaxed text-muted-foreground">
              {status === "opened" &&
                "Your email client should now be open with the message prefilled — press send there to deliver it."}
              {status === "sent" && "Thanks — your message was delivered."}
              {status === "error" && "Sending failed. Please email me directly instead."}
              {status === null &&
                (FORM_ENDPOINT
                  ? "Your message is sent directly to my inbox."
                  : "This site has no backend: submitting opens your email client with the message prefilled.")}
            </p>
          </form>
        </Reveal>
      </div>
    </Section>
  );
}
