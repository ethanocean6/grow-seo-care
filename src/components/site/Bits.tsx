import { Link } from "@tanstack/react-router";
import { Check } from "lucide-react";
import type { ReactNode } from "react";

export function PageHero({
  eyebrow,
  title,
  description,
  children,
}: {
  eyebrow: string;
  title: string;
  description: string;
  children?: ReactNode;
}) {
  return (
    <section className="border-b border-border bg-surface">
      <div className="container-page py-16 md:py-24">
        <div className="max-w-3xl reveal">
          <span className="eyebrow">{eyebrow}</span>
          <h1 className="mt-5 text-3xl leading-tight md:text-5xl">{title}</h1>
          <p className="mt-5 text-base leading-relaxed text-muted-foreground md:text-lg">
            {description}
          </p>
          {children ? <div className="mt-8 flex flex-wrap gap-3">{children}</div> : null}
        </div>
      </div>
    </section>
  );
}

export function SectionHeading({
  eyebrow,
  title,
  description,
  center = true,
}: {
  eyebrow?: string;
  title: string;
  description?: string;
  center?: boolean;
}) {
  return (
    <div className={center ? "mx-auto max-w-2xl text-center" : "max-w-2xl"}>
      {eyebrow ? <span className="eyebrow">{eyebrow}</span> : null}
      <h2 className="mt-4 text-2xl md:text-4xl">{title}</h2>
      {description ? (
        <p className="mt-4 text-base leading-relaxed text-muted-foreground">{description}</p>
      ) : null}
    </div>
  );
}

export function PrimaryLink({
  to,
  children,
  className = "",
}: {
  to: string;
  children: ReactNode;
  className?: string;
}) {
  return (
    <Link
      to={to}
      className={`inline-flex items-center justify-center rounded-xl bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground shadow-[var(--shadow-cta)] transition-transform hover:-translate-y-0.5 ${className}`}
    >
      {children}
    </Link>
  );
}

export function GhostLink({
  to,
  children,
  className = "",
}: {
  to: string;
  children: ReactNode;
  className?: string;
}) {
  return (
    <Link
      to={to}
      className={`inline-flex items-center justify-center rounded-xl border border-border bg-card px-6 py-3 text-sm font-semibold text-navy transition-colors hover:border-primary hover:text-primary ${className}`}
    >
      {children}
    </Link>
  );
}

export function CheckList({ items }: { items: readonly string[] }) {
  return (
    <ul className="space-y-3">
      {items.map((item) => (
        <li key={item} className="flex items-start gap-3 text-sm text-muted-foreground">
          <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-brand-soft text-primary">
            <Check className="h-3 w-3" aria-hidden="true" />
          </span>
          <span>{item}</span>
        </li>
      ))}
    </ul>
  );
}

export function CtaBanner({
  title,
  description,
  ctaLabel,
  to = "/contact",
}: {
  title: string;
  description: string;
  ctaLabel: string;
  to?: string;
}) {
  return (
    <section className="container-page pb-20">
      <div className="rounded-3xl bg-navy px-6 py-14 text-center md:px-16">
        <h2 className="text-2xl text-navy-foreground md:text-3xl">{title}</h2>
        <p className="mx-auto mt-4 max-w-2xl text-sm leading-relaxed text-navy-foreground/70 md:text-base">
          {description}
        </p>
        <div className="mt-8">
          <PrimaryLink to={to}>{ctaLabel}</PrimaryLink>
        </div>
      </div>
    </section>
  );
}

export function StepGrid({
  steps,
}: {
  steps: readonly { title: string; description: string }[];
}) {
  return (
    <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
      {steps.map((step, i) => (
        <article key={step.title} className="card-soft card-soft-hover p-6">
          <span className="text-sm font-bold text-primary">
            {String(i + 1).padStart(2, "0")}
          </span>
          <h3 className="mt-3 text-base font-semibold">{step.title}</h3>
          <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{step.description}</p>
        </article>
      ))}
    </div>
  );
}
