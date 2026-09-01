import { createFileRoute } from "@tanstack/react-router";

import { CheckList, CtaBanner, GhostLink, PageHero, PrimaryLink, SectionHeading } from "@/components/site/Bits";

export const Route = createFileRoute("/pricing")({
  head: () => ({
    meta: [
      { title: "Pricing — SEO Packages & Website Design Cost | Grow Seo Care" },
      {
        name: "description",
        content:
          "Transparent pricing: SEO Growth Package at ৳150,000/month with 30 monthly content posts, and a Website Design Package at ৳8,000.",
      },
      { property: "og:title", content: "Pricing — Grow Seo Care" },
      {
        property: "og:description",
        content:
          "Clear, transparent packages for SEO growth and professional website design.",
      },
      { property: "og:url", content: "/pricing" },
    ],
    links: [{ rel: "canonical", href: "/pricing" }],
  }),
  component: Pricing,
});

const seoItems = [
  "SEO Strategy",
  "Website Audit",
  "Keyword Research",
  "On-Page SEO",
  "Technical SEO",
  "Content Optimization",
  "Ranking Monitoring",
  "Monthly Reporting",
  "30 Written Content Posts Every Month",
];

const designItems = [
  "Professional Website Design",
  "Responsive Design",
  "Mobile-Friendly Layout",
  "Modern UI",
  "Business-Focused Structure",
  "Basic SEO-Friendly Structure",
];

function Pricing() {
  return (
    <>
      <PageHero
        eyebrow="Pricing"
        title="Transparent Pricing for SEO & Website Design"
        description="Clear packages with defined scope, so you know exactly what is delivered each month. Need something different? We build custom solutions too."
      >
        <PrimaryLink to="/contact">Get Free Consultation</PrimaryLink>
        <GhostLink to="/faq">Read FAQ</GhostLink>
      </PageHero>

      <section className="py-20">
        <div className="container-page">
          <SectionHeading eyebrow="Packages" title="Choose the Package That Fits Your Goals" />
          <div className="mx-auto mt-12 grid max-w-4xl gap-7 md:grid-cols-2">
            <article className="card-soft relative overflow-hidden ring-2 ring-primary">
              <span className="absolute right-5 top-5 rounded-full bg-brand-soft px-3 py-1 text-xs font-semibold text-primary">
                Most Complete
              </span>
              <div className="p-8">
                <h3 className="text-xl">SEO Growth Package</h3>
                <p className="mt-4 text-4xl font-bold text-navy">৳150,000</p>
                <p className="mt-1 text-sm text-muted-foreground">per month</p>
                <div className="mt-6">
                  <CheckList items={seoItems} />
                </div>
                <PrimaryLink to="/contact" className="mt-8 w-full">
                  Get SEO Consultation
                </PrimaryLink>
              </div>
            </article>

            <article className="card-soft card-soft-hover">
              <div className="p-8">
                <h3 className="text-xl">Website Design Package</h3>
                <p className="mt-4 text-4xl font-bold text-navy">৳8,000</p>
                <p className="mt-1 text-sm text-muted-foreground">one-time project</p>
                <div className="mt-6">
                  <CheckList items={designItems} />
                </div>
                <GhostLink to="/contact" className="mt-8 w-full">
                  Order Website Design
                </GhostLink>
              </div>
            </article>
          </div>

          <p className="mx-auto mt-8 max-w-3xl text-center text-xs leading-relaxed text-muted-foreground">
            SEO results depend on industry, competition, website condition, keywords, and other
            factors. We focus on sustainable, measurable growth rather than guaranteeing a specific
            ranking.
          </p>
        </div>
      </section>

      <section className="bg-surface py-20">
        <div className="container-page">
          <div className="mx-auto max-w-3xl rounded-3xl border border-border bg-card p-8 text-center md:p-12">
            <h2 className="text-2xl md:text-3xl">Need a Custom Solution?</h2>
            <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
              Larger website, multiple locations, e-commerce or a mix of SEO and development work?
              We'll scope a package around your actual requirements and budget.
            </p>
            <div className="mt-8">
              <PrimaryLink to="/contact">Talk to Our Team</PrimaryLink>
            </div>
          </div>
        </div>
      </section>

      <div className="py-20">
        <CtaBanner
          title="Still comparing options?"
          description="Book a free consultation and we'll tell you honestly which package fits your stage."
          ctaLabel="Get Free Consultation"
        />
      </div>
    </>
  );
}
