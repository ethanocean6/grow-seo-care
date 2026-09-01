import { createFileRoute, Link } from "@tanstack/react-router";

import { CtaBanner, PageHero, PrimaryLink, SectionHeading } from "@/components/site/Bits";

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
      { property: "og:url", content: "/portfolio" },
    ],
    links: [{ rel: "canonical", href: "/portfolio" }],
  }),
  component: Portfolio,
});

const projects = [
  {
    name: "Local Service Company Website",
    industry: "Home Services",
    service: "Web Development + On-Page SEO",
    overview:
      "Rebuilt a slow multi-page site into a fast, mobile-first website with a clear service structure and SEO-ready page templates.",
    tint: "from-primary/15 to-primary/5",
  },
  {
    name: "B2B Manufacturer SEO Program",
    industry: "Manufacturing",
    service: "SEO Services",
    overview:
      "Technical clean-up, keyword mapping by product category and a monthly content plan focused on buyer-intent queries.",
    tint: "from-navy/15 to-navy/5",
  },
  {
    name: "Professional Firm Ranking Project",
    industry: "Professional Services",
    service: "Website Ranking",
    overview:
      "Competitor benchmarking, on-page optimization and consistent authority building applied across core service pages.",
    tint: "from-primary/20 to-brand-soft",
  },
  {
    name: "Campaign Landing Page",
    industry: "Education",
    service: "Landing Page Development",
    overview:
      "A single-goal, conversion-focused landing page with fast load performance and a simplified enquiry form.",
    tint: "from-brand-soft to-primary/10",
  },
  {
    name: "Brand Website Redesign",
    industry: "Retail",
    service: "Website Design",
    overview:
      "A modern, clean UI refresh with improved navigation, stronger hierarchy and a mobile-first layout system.",
    tint: "from-navy/10 to-primary/10",
  },
  {
    name: "Content-Led SEO Growth",
    industry: "Healthcare",
    service: "SEO + Content Strategy",
    overview:
      "A structured monthly content programme built around question-based search intent and internal link planning.",
    tint: "from-primary/15 to-surface",
  },
];

function Portfolio() {
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
            eyebrow="Our work"
            title="How We Approach Client Projects"
            description="Every engagement starts with the same question: what is holding this business back online?"
          />
          <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {projects.map((p) => (
              <article key={p.name} className="card-soft card-soft-hover overflow-hidden">
                <div
                  className={`flex h-40 items-center justify-center bg-gradient-to-br ${p.tint}`}
                  role="img"
                  aria-label={`Sample project visual for ${p.name}`}
                >
                  <span className="rounded-full bg-card px-3 py-1 text-xs font-semibold text-primary">
                    Sample Project
                  </span>
                </div>
                <div className="p-6">
                  <h3 className="text-lg">{p.name}</h3>
                  <p className="mt-1 text-xs font-medium uppercase tracking-wide text-primary">
                    {p.industry} • {p.service}
                  </p>
                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                    {p.overview}
                  </p>
                  <Link
                    to="/contact"
                    className="mt-5 inline-flex text-sm font-semibold text-primary hover:underline"
                  >
                    View Case Study →
                  </Link>
                </div>
              </article>
            ))}
          </div>
          <p className="mt-10 text-center text-xs text-muted-foreground">
            Sample projects are shown for illustration. We do not publish client names or
            performance figures without permission.
          </p>
        </div>
      </section>

      <CtaBanner
        title="Want results like these for your business?"
        description="Tell us about your website and goals — we'll suggest a practical starting point."
        ctaLabel="Talk to Our Team"
      />
    </>
  );
}
