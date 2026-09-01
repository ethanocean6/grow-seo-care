import { createFileRoute } from "@tanstack/react-router";
import { Gauge, Lock, MousePointerClick, Search, Smartphone, Target } from "lucide-react";

import {
  CheckList,
  CtaBanner,
  GhostLink,
  PageHero,
  PrimaryLink,
  SectionHeading,
} from "@/components/site/Bits";

export const Route = createFileRoute("/web-development")({
  head: () => ({
    meta: [
      { title: "Web Development Services — Modern Business Websites" },
      {
        name: "description",
        content:
          "Web development for business websites, landing pages and custom solutions — fast, responsive, secure and SEO-friendly websites built for growth.",
      },
      { property: "og:title", content: "Web Development — Grow Seo Care" },
      {
        property: "og:description",
        content:
          "Modern websites built for business growth: fast, responsive, secure, SEO-friendly and conversion-focused.",
      },
      { property: "og:url", content: "/web-development" },
    ],
    links: [{ rel: "canonical", href: "/web-development" }],
  }),
  component: WebDevelopment,
});

const qualities = [
  { icon: Gauge, title: "Fast", text: "Optimized assets and clean code for quick load times." },
  { icon: Smartphone, title: "Responsive", text: "Consistent experience on mobile, tablet and desktop." },
  { icon: Lock, title: "Secure", text: "Modern standards and safe, maintainable foundations." },
  { icon: Search, title: "SEO-Friendly", text: "Semantic structure and metadata search engines can read." },
  { icon: MousePointerClick, title: "Easy to Navigate", text: "Clear structure that helps visitors find what they need." },
  { icon: Target, title: "Conversion-Focused", text: "Calls-to-action placed where they naturally belong." },
];

const offerings = [
  {
    title: "Business Website",
    description: "Professional websites for companies and service providers.",
    items: ["Multi-page business structure", "Service and about pages", "Contact and enquiry forms", "SEO-ready foundation"],
  },
  {
    title: "Landing Pages",
    description: "Conversion-focused landing pages for campaigns and lead generation.",
    items: ["Single-goal page structure", "Lead capture forms", "Fast-loading layout", "Campaign-ready design"],
  },
  {
    title: "Custom Web Development",
    description: "Custom functionality and business-focused web solutions.",
    items: ["Custom features and workflows", "Third-party integrations", "Scalable architecture", "Ongoing support options"],
  },
];

function WebDevelopment() {
  return (
    <>
      <PageHero
        eyebrow="Web Development"
        title="Modern Websites Built for Business Growth"
        description="A website should do more than exist. We build sites that load quickly, work on every device, stay secure, read well to search engines and guide visitors toward taking action."
      >
        <PrimaryLink to="/contact">Start Your Website Project</PrimaryLink>
        <GhostLink to="/pricing">View Pricing</GhostLink>
      </PageHero>

      <section className="py-20">
        <div className="container-page">
          <SectionHeading
            eyebrow="Standards"
            title="What Every Website We Build Must Be"
          />
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {qualities.map((q) => (
              <article key={q.title} className="card-soft card-soft-hover p-6">
                <q.icon className="h-5 w-5 text-primary" aria-hidden="true" />
                <h3 className="mt-4 text-base font-semibold">{q.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{q.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-surface py-20">
        <div className="container-page">
          <SectionHeading eyebrow="Services" title="Web Development Solutions" />
          <div className="mt-12 grid gap-6 lg:grid-cols-3">
            {offerings.map((o) => (
              <article key={o.title} className="card-soft card-soft-hover p-7">
                <h3 className="text-xl">{o.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  {o.description}
                </p>
                <div className="mt-5">
                  <CheckList items={o.items} />
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <div className="py-20">
        <CtaBanner
          title="Have a website project in mind?"
          description="Share your goals and we'll recommend the right structure, scope and timeline."
          ctaLabel="Build My Website"
        />
      </div>
    </>
  );
}
