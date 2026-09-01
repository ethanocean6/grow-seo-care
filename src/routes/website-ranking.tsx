import { createFileRoute } from "@tanstack/react-router";

import {
  CtaBanner,
  GhostLink,
  PageHero,
  PrimaryLink,
  SectionHeading,
  StepGrid,
} from "@/components/site/Bits";

export const Route = createFileRoute("/website-ranking")({
  head: () => ({
    meta: [
      { title: "Website Ranking Service — Improve Your Google Ranking" },
      {
        name: "description",
        content:
          "A Google ranking service built on keyword research, competitor analysis, technical and on-page optimization, authority building and monthly reporting.",
      },
      { property: "og:title", content: "Website Ranking Service — Grow Seo Care" },
      {
        property: "og:description",
        content:
          "Climb higher on Google search with a data-driven website ranking process and monthly performance reporting.",
      },
      { property: "og:url", content: "/website-ranking" },
    ],
    links: [{ rel: "canonical", href: "/website-ranking" }],
  }),
  component: WebsiteRanking,
});

const pillars = [
  { title: "Keyword Research", description: "Identify high-intent search terms your ideal customers actually use." },
  { title: "Competitor Analysis", description: "Understand who ranks today, why they rank, and where the realistic gaps are." },
  { title: "Technical Optimization", description: "Fix speed, crawl, index and mobile issues that hold pages back." },
  { title: "On-Page Optimization", description: "Improve titles, headings, internal links and page structure for target keywords." },
  { title: "Content Optimization", description: "Strengthen existing pages and add content that answers real search queries." },
  { title: "Authority Building", description: "Build relevant, quality references to your site over time — never spam." },
  { title: "Ranking Monitoring", description: "Track keyword positions continuously so changes are caught early." },
  { title: "Monthly Reporting", description: "Clear reports on rankings, traffic and next month's priorities." },
];

const timeline = [
  { month: "Month 1", title: "Audit & strategy", text: "Full technical audit, keyword mapping and competitor benchmarking." },
  { month: "Month 2", title: "Fix & optimize", text: "Technical fixes, on-page optimization and content improvements roll out." },
  { month: "Month 3", title: "Content & authority", text: "Consistent content publishing and authority building begin compounding." },
  { month: "Ongoing", title: "Measure & refine", text: "Monthly reporting, refinement and expansion into new keyword clusters." },
];

function WebsiteRanking() {
  return (
    <>
      <PageHero
        eyebrow="Website Ranking"
        title="Climb Higher on Google Search"
        description="Grow Seo Care helps websites improve their search visibility with a data-driven ranking process: understand the competition, fix what's holding the site back, optimize the pages that matter, and keep improving month after month."
      >
        <PrimaryLink to="/contact">Request a Ranking Strategy</PrimaryLink>
        <GhostLink to="/seo-services">Explore SEO Services</GhostLink>
      </PageHero>

      <section className="py-20">
        <div className="container-page">
          <SectionHeading
            eyebrow="What we optimize"
            title="The Building Blocks of Better Rankings"
            description="Ranking is not one action — it is a set of connected improvements applied consistently."
          />
          <div className="mt-12">
            <StepGrid steps={pillars} />
          </div>
        </div>
      </section>

      <section className="bg-surface py-20">
        <div className="container-page">
          <SectionHeading eyebrow="Timeline" title="SEO Growth Process" />
          <ol className="mx-auto mt-12 max-w-3xl space-y-6 border-l border-border pl-6">
            {timeline.map((t) => (
              <li key={t.month} className="relative">
                <span className="absolute -left-[31px] top-1.5 h-3 w-3 rounded-full bg-primary ring-4 ring-surface" />
                <p className="text-xs font-semibold uppercase tracking-wide text-primary">
                  {t.month}
                </p>
                <h3 className="mt-1 text-lg">{t.title}</h3>
                <p className="mt-1 text-sm leading-relaxed text-muted-foreground">{t.text}</p>
              </li>
            ))}
          </ol>
          <p className="mx-auto mt-8 max-w-3xl text-center text-xs leading-relaxed text-muted-foreground">
            Timelines vary by industry, competition and website condition. We focus on sustainable,
            measurable progress rather than guaranteed positions.
          </p>
        </div>
      </section>

      <div className="py-20">
        <CtaBanner
          title="Want to know why you're not ranking?"
          description="We'll review your site and current keyword positions, then outline a realistic ranking plan."
          ctaLabel="Improve My Ranking"
        />
      </div>
    </>
  );
}
