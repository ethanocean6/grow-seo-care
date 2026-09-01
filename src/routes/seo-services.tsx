import { createFileRoute } from "@tanstack/react-router";
import { Check } from "lucide-react";

import {
  CtaBanner,
  GhostLink,
  PageHero,
  PrimaryLink,
  SectionHeading,
  StepGrid,
} from "@/components/site/Bits";

export const Route = createFileRoute("/seo-services")({
  head: () => ({
    meta: [
      { title: "Professional SEO Services — Grow Seo Care" },
      {
        name: "description",
        content:
          "Professional SEO services covering website audit, keyword research, on-page SEO, technical SEO, content strategy, link building and monthly optimization.",
      },
      { property: "og:title", content: "Professional SEO Services — Grow Seo Care" },
      {
        property: "og:description",
        content:
          "An SEO agency process built on audits, keyword research, technical SEO and monthly content — designed for sustainable growth.",
      },
      { property: "og:url", content: "/seo-services" },
    ],
    links: [{ rel: "canonical", href: "/seo-services" }],
  }),
  component: SeoServices,
});

const steps = [
  { title: "Website Audit", description: "A full review of technical health, structure, content and current search visibility." },
  { title: "Keyword Research", description: "Finding the search terms your customers actually use, mapped by intent and difficulty." },
  { title: "On-Page SEO", description: "Titles, meta descriptions, headings, internal links and content structure optimized page by page." },
  { title: "Technical SEO", description: "Speed, crawlability, indexation, mobile usability, structured data and error clean-up." },
  { title: "Content Strategy", description: "A monthly content plan that answers real search queries and supports target keywords." },
  { title: "Link Building", description: "Steady, quality-focused authority building — no spam tactics or shortcuts." },
  { title: "Monthly Optimization", description: "Continuous refinement of pages, content and technical elements each month." },
  { title: "Performance Tracking", description: "Rankings, traffic and engagement tracked and explained in a clear monthly report." },
];

const packageItems = [
  "Complete SEO Strategy",
  "Website SEO Audit",
  "Keyword Research",
  "On-Page SEO",
  "Technical SEO",
  "Content Optimization",
  "Monthly SEO Optimization",
  "Ranking Monitoring",
  "Performance Reporting",
  "30 SEO Content Posts Written Every Month",
];

function SeoServices() {
  return (
    <>
      <PageHero
        eyebrow="SEO Services"
        title="Professional SEO Services That Help You Rank & Grow"
        description="Search visibility comes from doing the fundamentals well, every month. Our SEO service covers the full picture — technical health, keyword strategy, on-page optimization, content and reporting."
      >
        <PrimaryLink to="/contact">Get SEO Consultation</PrimaryLink>
        <GhostLink to="/pricing">See Pricing</GhostLink>
      </PageHero>

      <section className="py-20">
        <div className="container-page">
          <SectionHeading
            eyebrow="Our process"
            title="How Our SEO Process Works"
            description="A structured, repeatable process that builds momentum month after month."
          />
          <div className="mt-12">
            <StepGrid steps={steps} />
          </div>
        </div>
      </section>

      <section className="bg-surface py-20">
        <div className="container-page">
          <SectionHeading eyebrow="SEO Package" title="SEO Growth Package" />
          <div className="mx-auto mt-12 max-w-xl">
            <div className="card-soft overflow-hidden">
              <div className="bg-navy px-8 py-8 text-center">
                <p className="text-sm font-medium text-navy-foreground/70">SEO Growth Package</p>
                <p className="mt-2 text-4xl font-bold text-navy-foreground">৳150,000</p>
                <p className="mt-1 text-sm text-navy-foreground/70">per month</p>
              </div>
              <div className="p-8">
                <ul className="space-y-3">
                  {packageItems.map((item) => (
                    <li key={item} className="flex items-start gap-3 text-sm text-muted-foreground">
                      <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-brand-soft text-primary">
                        <Check className="h-3 w-3" aria-hidden="true" />
                      </span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
                <PrimaryLink to="/contact" className="mt-8 w-full">
                  Get Started With SEO
                </PrimaryLink>
              </div>
            </div>
            <p className="mt-6 rounded-2xl border border-border bg-card p-5 text-xs leading-relaxed text-muted-foreground">
              SEO results depend on industry, competition, website condition, keywords, and other
              factors. We focus on sustainable, measurable growth rather than guaranteeing a
              specific ranking.
            </p>
          </div>
        </div>
      </section>

      <div className="py-20">
        <CtaBanner
          title="Not sure which keywords to target?"
          description="We'll review your website and share where the realistic search opportunities are for your business."
          ctaLabel="Request a Strategy"
        />
      </div>
    </>
  );
}
