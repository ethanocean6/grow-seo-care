import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Award, Check, Sparkles, Target, X } from "lucide-react";
import { useEffect, useMemo, useState } from "react";

import { ProjectThumbnail } from "@/components/portfolio/ProjectThumbnail";
import { PageHero, PrimaryLink, SectionHeading } from "@/components/site/Bits";
import {
  portfolioFilters,
  portfolioProjects,
  sampleDisclaimer,
  type PortfolioProject,
} from "@/data/portfolioProjects";

export const Route = createFileRoute("/portfolio")({
  head: () => ({
    meta: [
      { title: "Portfolio & Case Studies — Grow Seo Care" },
      {
        name: "description",
        content:
          "Sample SEO, website ranking, web development and website design projects showing how Grow Seo Care approaches digital growth work.",
      },
      { property: "og:title", content: "Portfolio & Case Studies — Grow Seo Care" },
      {
        property: "og:description",
        content:
          "Sample projects across SEO, ranking, web development and website design.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
      { property: "og:url", content: "/portfolio" },
    ],
    links: [{ rel: "canonical", href: "/portfolio" }],
  }),
  component: Portfolio,
});

function ProjectCard({
  project,
  onOpen,
}: {
  project: PortfolioProject;
  onOpen: (p: PortfolioProject) => void;
}) {
  const featured = Boolean(project.featured);
  return (
    <article
      className={`group reveal flex h-full flex-col overflow-hidden card-soft card-soft-hover ${
        featured ? "ring-1 ring-primary/40" : ""
      }`}
    >
      <div className="relative">
        <ProjectThumbnail variant={project.thumbnail} featured={featured} />
        <span className="absolute left-4 top-4 rounded-full bg-card/90 px-3 py-1 text-xs font-semibold text-primary shadow-[var(--shadow-card)] backdrop-blur">
          {project.badge}
        </span>
        {featured ? (
          <span className="absolute right-4 top-4 inline-flex items-center gap-1 rounded-full bg-navy px-3 py-1 text-[10px] font-bold uppercase tracking-wide text-navy-foreground">
            <Award className="h-3 w-3" aria-hidden="true" /> Featured Project
          </span>
        ) : null}
      </div>

      <div className="flex flex-1 flex-col p-6">
        <h3 className="text-lg">{project.title}</h3>
        <p className="mt-1 text-xs font-semibold uppercase tracking-wide text-primary">
          {project.category}
        </p>
        <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
          {project.description}
        </p>

        <ul className="mt-4 flex flex-wrap gap-2">
          {project.services.map((s) => (
            <li
              key={s}
              className="rounded-full border border-border bg-surface px-2.5 py-1 text-[11px] font-medium text-navy"
            >
              {s}
            </li>
          ))}
        </ul>

        <p className="mt-4 flex items-start gap-2 rounded-xl bg-brand-soft px-3 py-2 text-xs font-semibold text-accent-foreground">
          <Target className="mt-0.5 h-3.5 w-3.5 shrink-0" aria-hidden="true" />
          <span>{project.goal}</span>
        </p>

        <button
          type="button"
          onClick={() => onOpen(project)}
          className="mt-5 inline-flex items-center gap-1.5 self-start text-sm font-semibold text-primary transition-colors hover:text-navy"
        >
          View Project <ArrowRight className="h-4 w-4" aria-hidden="true" />
        </button>
      </div>
    </article>
  );
}

function ProjectModal({
  project,
  onClose,
}: {
  project: PortfolioProject;
  onClose: () => void;
}) {
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [onClose]);

  return (
    <div
      className="fixed inset-0 z-[80] flex items-end justify-center bg-navy/60 p-0 backdrop-blur-sm sm:items-center sm:p-6"
      role="dialog"
      aria-modal="true"
      aria-label={project.title}
      onClick={onClose}
    >
      <div
        className="reveal max-h-[90vh] w-full max-w-2xl overflow-y-auto rounded-t-3xl bg-card shadow-[var(--shadow-lift)] sm:rounded-3xl"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="relative">
          <ProjectThumbnail variant={project.thumbnail} featured={Boolean(project.featured)} />
          <button
            type="button"
            onClick={onClose}
            aria-label="Close project details"
            className="absolute right-4 top-4 inline-flex h-9 w-9 items-center justify-center rounded-full bg-card/90 text-navy shadow-[var(--shadow-card)] transition-colors hover:text-primary"
          >
            <X className="h-4 w-4" aria-hidden="true" />
          </button>
        </div>

        <div className="p-6 md:p-8">
          <span className="eyebrow">{project.badge}</span>
          <h2 className="mt-4 text-2xl md:text-3xl">{project.title}</h2>

          <div className="mt-4 grid gap-3 sm:grid-cols-2">
            <div className="rounded-xl border border-border bg-surface px-4 py-3">
              <p className="text-[11px] font-semibold uppercase tracking-wide text-muted-foreground">
                Industry
              </p>
              <p className="mt-1 text-sm font-semibold text-navy">{project.industry}</p>
            </div>
            <div className="rounded-xl border border-border bg-surface px-4 py-3">
              <p className="text-[11px] font-semibold uppercase tracking-wide text-muted-foreground">
                Project Type
              </p>
              <p className="mt-1 text-sm font-semibold text-navy">{project.projectType}</p>
            </div>
          </div>

          <p className="mt-3 text-xs text-muted-foreground">{sampleDisclaimer}</p>

          <div className="mt-6 space-y-5">
            <div>
              <h3 className="text-sm font-bold uppercase tracking-wide text-primary">Challenge</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                {project.challenge}
              </p>
            </div>
            <div>
              <h3 className="text-sm font-bold uppercase tracking-wide text-primary">Strategy</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                {project.strategy}
              </p>
            </div>
            <div>
              <h3 className="text-sm font-bold uppercase tracking-wide text-primary">
                Services Delivered
              </h3>
              <ul className="mt-2 flex flex-wrap gap-2">
                {project.services.map((s) => (
                  <li
                    key={s}
                    className="rounded-full border border-border bg-surface px-3 py-1 text-xs font-medium text-navy"
                  >
                    {s}
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="text-sm font-bold uppercase tracking-wide text-primary">
                Key Focus Areas
              </h3>
              <ul className="mt-2 grid gap-2 sm:grid-cols-2">
                {project.focusAreas.map((f) => (
                  <li key={f} className="flex items-start gap-2 text-sm text-muted-foreground">
                    <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-brand-soft text-primary">
                      <Check className="h-3 w-3" aria-hidden="true" />
                    </span>
                    {f}
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="text-sm font-bold uppercase tracking-wide text-primary">
                Project Outcome
              </h3>
              <ul className="mt-2 space-y-2">
                {project.outcome.map((o) => (
                  <li key={o} className="flex items-start gap-2 text-sm text-muted-foreground">
                    <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-brand-soft text-primary">
                      <Sparkles className="h-3 w-3" aria-hidden="true" />
                    </span>
                    {o}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="mt-8 flex flex-wrap gap-3">
            <PrimaryLink to="/contact">Get Free Consultation</PrimaryLink>
            <Link
              to="/seo-services"
              className="inline-flex items-center justify-center rounded-xl border border-border bg-card px-6 py-3 text-sm font-semibold text-navy transition-colors hover:border-primary hover:text-primary"
            >
              View Our Services
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

function Portfolio() {
  const [filter, setFilter] = useState<string>("All");
  const [active, setActive] = useState<PortfolioProject | null>(null);

  const visible = useMemo(
    () =>
      filter === "All"
        ? portfolioProjects
        : portfolioProjects.filter((p) => p.filters.includes(filter as never)),
    [filter],
  );

  return (
    <>
      <PageHero
        eyebrow="Portfolio"
        title="Selected Projects & Case Studies"
        description="A look at the type of work we do across SEO, ranking, web development and design. The projects below are illustrative samples of our process and scope."
      >
        <PrimaryLink to="/contact">Start My Project</PrimaryLink>
      </PageHero>

      <section className="py-20">
        <div className="container-page">
          <SectionHeading
            eyebrow="Our Work"
            title="How We Approach Client Projects"
            description="Every engagement starts with the same question: what is holding this business back online?"
          />

          <div className="mt-10 -mx-5 overflow-x-auto px-5 md:mx-0 md:px-0">
            <div className="flex min-w-max justify-start gap-2 md:min-w-0 md:justify-center">
              {portfolioFilters.map((f) => {
                const isActive = filter === f;
                return (
                  <button
                    key={f}
                    type="button"
                    onClick={() => setFilter(f)}
                    aria-pressed={isActive}
                    className={`whitespace-nowrap rounded-full px-4 py-2 text-sm font-semibold transition-all duration-300 ${
                      isActive
                        ? "bg-gradient-to-r from-navy via-primary to-[color-mix(in_oklab,var(--color-primary)_70%,white)] text-primary-foreground shadow-[var(--shadow-cta)]"
                        : "border border-border bg-card text-navy hover:border-primary hover:text-primary"
                    }`}
                  >
                    {f}
                  </button>
                );
              })}
            </div>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {visible.map((p) => (
              <ProjectCard key={p.id} project={p} onOpen={setActive} />
            ))}
          </div>

          <p className="mt-10 text-center text-xs text-muted-foreground">
            Sample and concept projects are shown for illustration. We do not publish client
            names or performance figures without permission.
          </p>
          <p className="mt-2 text-center text-sm font-semibold text-navy">
            10+ Years of Experience in SEO, Website Ranking & Web Development
          </p>
        </div>
      </section>

      <section className="container-page pb-20">
        <div className="rounded-3xl bg-gradient-to-br from-navy via-primary to-[color-mix(in_oklab,var(--color-primary)_70%,white)] px-6 py-14 text-center md:px-16">
          <span className="inline-flex items-center rounded-full bg-navy-foreground/15 px-3 py-1 text-xs font-semibold text-navy-foreground">
            Have a project in mind?
          </span>
          <h2 className="mt-4 text-2xl text-navy-foreground md:text-3xl">
            Let's Build Something That Grows
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-sm leading-relaxed text-navy-foreground/80 md:text-base">
            Whether you need a new website, stronger search visibility or a complete SEO
            strategy, Grow Seo Care can help you build a stronger digital foundation.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <Link
              to="/contact"
              className="inline-flex items-center justify-center rounded-xl bg-card px-6 py-3 text-sm font-semibold text-primary shadow-[var(--shadow-cta)] transition-transform hover:-translate-y-0.5"
            >
              Get Free Consultation
            </Link>
            <Link
              to="/seo-services"
              className="inline-flex items-center justify-center rounded-xl border border-navy-foreground/40 px-6 py-3 text-sm font-semibold text-navy-foreground transition-colors hover:bg-navy-foreground/10"
            >
              View Our Services
            </Link>
          </div>
        </div>
      </section>

      {active ? <ProjectModal project={active} onClose={() => setActive(null)} /> : null}
    </>
  );
}
