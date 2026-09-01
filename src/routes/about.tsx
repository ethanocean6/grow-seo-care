import { createFileRoute } from "@tanstack/react-router";
import { Compass, Target } from "lucide-react";

import { CtaBanner, GhostLink, PageHero, PrimaryLink, SectionHeading } from "@/components/site/Bits";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About Grow Seo Care — 10+ Years of SEO & Web Experience" },
      {
        name: "description",
        content:
          "Grow Seo Care combines SEO, ranking strategy, web development and modern website design into complete digital growth solutions, backed by 10+ years of experience.",
      },
      { property: "og:title", content: "About Grow Seo Care" },
      {
        property: "og:description",
        content:
          "A digital growth agency with 10+ years of experience in SEO, website ranking and web development.",
      },
      { property: "og:url", content: "/about" },
    ],
    links: [{ rel: "canonical", href: "/about" }],
  }),
  component: About,
});

const timeline = [
  { year: "Early years", title: "Foundations in search", text: "Started with hands-on SEO work — audits, on-page optimization and keyword research for small business websites." },
  { year: "Growth phase", title: "Ranking strategy", text: "Expanded into competitor analysis, technical SEO and authority building to move competitive keywords forward." },
  { year: "Expansion", title: "Web development added", text: "Added modern website development and design so clients could fix the root causes limiting their rankings." },
  { year: "Today", title: "Complete digital growth", text: "A combined SEO, ranking and web team delivering monthly optimization, content and performance reporting." },
];

function About() {
  return (
    <>
      <PageHero
        eyebrow="About us"
        title="10+ Years of Experience Helping Businesses Grow Online"
        description="Grow Seo Care is a digital growth agency built around one idea: visibility and website quality work together. We combine SEO, ranking strategy, web development and modern website design into a single, coordinated growth plan."
      >
        <PrimaryLink to="/contact">Get Free Consultation</PrimaryLink>
        <GhostLink to="/portfolio">View Our Work</GhostLink>
      </PageHero>

      <section className="py-20">
        <div className="container-page grid gap-10 lg:grid-cols-2">
          <div>
            <h2 className="text-2xl md:text-3xl">A practical approach to digital growth</h2>
            <p className="mt-5 text-sm leading-relaxed text-muted-foreground">
              Most businesses do not need more tools — they need a clear plan and consistent
              execution. We start by understanding your business, your customers and the search
              terms that actually lead to enquiries. From there we fix technical issues, improve
              on-page structure, publish quality content every month and strengthen the website
              experience so more visitors turn into customers.
            </p>
            <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
              Because our team also builds and designs websites, we can solve problems that a
              SEO-only agency has to hand off: slow pages, weak structure, poor mobile experience
              or outdated design. That combination is what makes our growth work compound over
              time.
            </p>
          </div>
          <div className="grid gap-5 sm:grid-cols-2">
            <div className="card-soft p-6">
              <Target className="h-5 w-5 text-primary" aria-hidden="true" />
              <h3 className="mt-4 text-lg">Our Mission</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                To help businesses build stronger online visibility through smart SEO strategies,
                high-quality websites, and long-term digital growth.
              </p>
            </div>
            <div className="card-soft p-6">
              <Compass className="h-5 w-5 text-primary" aria-hidden="true" />
              <h3 className="mt-4 text-lg">Our Vision</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                To become a trusted digital growth partner for businesses looking to build a
                stronger and more profitable online presence.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-surface py-20">
        <div className="container-page">
          <SectionHeading
            eyebrow="Our journey"
            title="10+ Years of Industry Experience"
            description="How our capabilities grew alongside the needs of the businesses we serve."
          />
          <ol className="mx-auto mt-12 max-w-3xl space-y-6 border-l border-border pl-6">
            {timeline.map((t) => (
              <li key={t.title} className="relative">
                <span className="absolute -left-[31px] top-1.5 h-3 w-3 rounded-full bg-primary ring-4 ring-surface" />
                <p className="text-xs font-semibold uppercase tracking-wide text-primary">
                  {t.year}
                </p>
                <h3 className="mt-1 text-lg">{t.title}</h3>
                <p className="mt-1 text-sm leading-relaxed text-muted-foreground">{t.text}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <div className="py-20">
        <CtaBanner
          title="Let's build your long-term growth plan"
          description="Share your goals and current website — we'll outline where the biggest opportunities are."
          ctaLabel="Talk to Our Team"
        />
      </div>
    </>
  );
}
