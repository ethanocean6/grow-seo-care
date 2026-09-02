import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowDown, Check, Minus } from "lucide-react";

import { CheckList, CtaBanner, GhostLink, PageHero, PrimaryLink, SectionHeading } from "@/components/site/Bits";
import { CurrencySelector } from "@/components/pricing/CurrencySelector";
import { useCurrency } from "@/hooks/useCurrency";
import { formatPrice } from "@/lib/currency";
import {
  comparisonGroups,
  emphasisedFeatures,
  packageProgression,
  seoPackages,
  type SeoPackage,
} from "@/data/seoPackages";

export const Route = createFileRoute("/pricing")({
  head: () => ({
    meta: [
      { title: "SEO Pricing — Starter to Premium Packages | Grow Seo Care" },
      {
        name: "description",
        content:
          "Compare Grow Seo Care SEO packages from ≈ $210/month Starter to ≈ $1,250/month Premium, with multi-currency pricing and full feature comparison.",
      },
      { property: "og:title", content: "SEO Pricing & Package Comparison — Grow Seo Care" },
      {
        property: "og:description",
        content:
          "Start, Grow, Scale or go Complete: four transparent SEO packages with clear monthly deliverables.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
      { property: "og:url", content: "/pricing" },
    ],
    links: [{ rel: "canonical", href: "/pricing" }],
  }),
  component: Pricing,
});

const designItems = [
  "Professional Website Design",
  "Responsive Design",
  "Mobile-Friendly Layout",
  "Modern UI",
  "Business-Focused Structure",
  "Basic SEO-Friendly Structure",
];

const tierStyles: Record<
  SeoPackage["tier"],
  { card: string; heading: string; body: string; muted: string; badge: string; feature: string }
> = {
  starter: {
    card: "card-soft card-soft-hover bg-card",
    heading: "text-navy",
    body: "text-muted-foreground",
    muted: "text-muted-foreground",
    badge: "bg-brand-soft text-primary",
    feature: "bg-brand-soft text-primary",
  },
  growth: {
    card: "card-soft card-soft-hover bg-card ring-2 ring-primary shadow-[var(--shadow-lift)]",
    heading: "text-navy",
    body: "text-muted-foreground",
    muted: "text-muted-foreground",
    badge: "bg-gradient-to-r from-navy via-primary to-[oklch(0.68_0.15_248)] text-primary-foreground shadow-[var(--shadow-cta)]",
    feature: "bg-brand-soft text-primary",
  },
  professional: {
    card: "card-soft card-soft-hover bg-card ring-1 ring-primary/40 shadow-[var(--shadow-lift)]",
    heading: "text-navy",
    body: "text-muted-foreground",
    muted: "text-muted-foreground",
    badge: "bg-gradient-to-r from-primary to-[oklch(0.68_0.15_248)] text-primary-foreground shadow-[var(--shadow-cta)]",
    feature: "bg-brand-soft text-primary",
  },
  premium: {
    card: "rounded-3xl border border-primary/40 bg-gradient-to-br from-navy via-[oklch(0.36_0.15_262)] to-primary shadow-[var(--shadow-cta)] transition-transform duration-300 hover:-translate-y-1",
    heading: "text-navy-foreground",
    body: "text-navy-foreground/75",
    muted: "text-navy-foreground/60",
    badge: "bg-navy-foreground/15 text-navy-foreground ring-1 ring-navy-foreground/30 backdrop-blur",
    feature: "bg-navy-foreground/15 text-navy-foreground",
  },
};

function PackageCard({
  pkg,
  price,
}: {
  pkg: SeoPackage;
  price: string;
}) {
  const s = tierStyles[pkg.tier];
  const isPremium = pkg.tier === "premium";

  return (
    <article className={`relative flex h-full flex-col overflow-hidden p-7 ${s.card}`}>
      {/* 1. Price badge */}
      <div className="flex flex-wrap items-center gap-2">
        <span
          className={`inline-flex items-center rounded-full px-4 py-1.5 text-sm font-bold ${s.badge}`}
        >
          {price} / Month
        </span>
        {pkg.badge ? (
          <span className="inline-flex items-center rounded-full bg-brand-soft px-3 py-1 text-[0.7rem] font-bold uppercase tracking-wide text-primary">
            {pkg.badge}
          </span>
        ) : null}
      </div>

      {/* 2-4. Name, target, positioning */}
      <h3 className={`mt-5 text-xl ${s.heading}`}>{pkg.name}</h3>
      <p className={`mt-1 text-sm ${s.muted}`}>{pkg.target}</p>
      <span
        className={`mt-3 inline-flex w-fit items-center rounded-full px-3 py-1 text-[0.7rem] font-bold uppercase tracking-wide ${s.feature}`}
      >
        {pkg.positioning}
      </span>

      {/* 5. Description */}
      <p className={`mt-4 text-sm leading-relaxed ${s.body}`}>{pkg.description}</p>

      {/* 6-7. Prices */}
      <p className={`mt-6 text-4xl font-bold ${s.heading}`}>{price}</p>
      <p className={`text-sm ${s.muted}`}>per month</p>
      <p className={`mt-1 text-xs ${s.muted}`}>
        Base: ৳{pkg.basePriceBdt.toLocaleString("en-US")} / Month
      </p>

      {/* 8. Highlight */}
      <div
        className={`mt-6 rounded-2xl px-4 py-3 ${isPremium ? "bg-navy-foreground/10" : "bg-surface"}`}
      >
        <p className={`text-sm font-semibold ${s.heading}`}>{pkg.highlight}</p>
        <p className={`mt-1 text-xs leading-relaxed ${s.body}`}>{pkg.microCopy}</p>
      </div>

      {/* Best for */}
      <p className={`mt-6 text-xs font-bold uppercase tracking-wide ${s.muted}`}>Best for</p>
      <ul className={`mt-2 space-y-1 text-sm ${s.body}`}>
        {pkg.bestFor.map((item) => (
          <li key={item}>• {item}</li>
        ))}
      </ul>

      {/* 9. Features */}
      <p className={`mt-6 text-xs font-bold uppercase tracking-wide ${s.muted}`}>What's included</p>
      <ul className="mt-3 space-y-2.5">
        {pkg.features.map((feature) => (
          <li key={feature} className={`flex items-start gap-3 text-sm ${s.body}`}>
            <span
              className={`mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full ${s.feature}`}
            >
              <Check className="h-3 w-3" aria-hidden="true" />
            </span>
            <span
              className={
                emphasisedFeatures.includes(feature) ? `font-bold ${s.heading}` : undefined
              }
            >
              {feature}
            </span>
          </li>
        ))}
      </ul>

      {/* 10. CTA */}
      <div className="mt-8 pt-2">
        {isPremium ? (
          <Link
            to="/contact"
            className="inline-flex w-full items-center justify-center rounded-xl bg-navy-foreground px-6 py-3 text-sm font-semibold text-navy transition-transform hover:-translate-y-0.5"
          >
            {pkg.cta}
          </Link>
        ) : pkg.tier === "starter" ? (
          <GhostLink to="/contact" className="w-full">
            {pkg.cta}
          </GhostLink>
        ) : (
          <PrimaryLink to="/contact" className="w-full">
            {pkg.cta}
          </PrimaryLink>
        )}
      </div>
    </article>
  );
}

function ComparisonCell({ value }: { value: string | boolean }) {
  if (value === true)
    return (
      <span className="mx-auto flex h-6 w-6 items-center justify-center rounded-full bg-brand-soft text-primary">
        <Check className="h-3.5 w-3.5" aria-hidden="true" />
        <span className="sr-only">Included</span>
      </span>
    );
  if (value === false)
    return (
      <span className="mx-auto flex h-6 w-6 items-center justify-center rounded-full bg-surface text-muted-foreground/60">
        <Minus className="h-3.5 w-3.5" aria-hidden="true" />
        <span className="sr-only">Not included</span>
      </span>
    );
  return <span className="text-xs font-semibold text-navy">{value}</span>;
}

function Pricing() {
  const { currency, setCurrency } = useCurrency();

  return (
    <>
      <PageHero
        eyebrow="Pricing"
        title="Transparent SEO Pricing for Growing Businesses"
        description="Four packages built around a clear monthly scope — start with the foundation, expand visibility, compete at scale, or run a complete SEO growth system with our team."
      >
        <PrimaryLink to="/contact">Get Free Consultation</PrimaryLink>
        <GhostLink to="/faq">Read FAQ</GhostLink>
      </PageHero>

      {/* Compare packages */}
      <section className="py-20">
        <div className="container-page">
          <SectionHeading
            eyebrow="Compare Packages"
            title="Start → Grow → Scale → Complete SEO"
            description="Prices are shown in your selected currency and billed monthly. Every package has a defined, documented scope."
          />

          <div className="mt-8 flex justify-center">
            <CurrencySelector value={currency} onChange={setCurrency} />
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
            {seoPackages.map((pkg) => (
              <PackageCard
                key={pkg.id}
                pkg={pkg}
                price={formatPrice(pkg.basePriceBdt, currency)}
              />
            ))}
          </div>

          <p className="mx-auto mt-8 max-w-3xl text-center text-xs leading-relaxed text-muted-foreground">
            USD prices are approximate conversions for reference. Final billing may be processed in
            BDT.
          </p>
          <p className="mx-auto mt-3 max-w-3xl text-center text-xs leading-relaxed text-muted-foreground">
            SEO results depend on industry, competition, website condition, keywords, and other
            factors. We focus on sustainable, measurable growth rather than guaranteeing a specific
            ranking.
          </p>
        </div>
      </section>

      {/* Progression */}
      <section className="bg-surface py-20">
        <div className="container-page">
          <SectionHeading
            eyebrow="Package Progression"
            title="A Clear Path as Your SEO Matures"
          />
          <div className="mx-auto mt-12 max-w-5xl">
            <div className="grid gap-4 lg:grid-cols-[1fr_auto_1fr_auto_1fr_auto_1fr] lg:items-center">
              {packageProgression.map((step, i) => (
                <div key={step.name} className="contents">
                  <article className="card-soft p-6 text-center">
                    <p className="text-sm font-bold uppercase tracking-wide text-primary">
                      {step.name}
                    </p>
                    <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                      {step.detail}
                    </p>
                  </article>
                  {i < packageProgression.length - 1 ? (
                    <ArrowDown
                      className="mx-auto h-5 w-5 text-primary lg:-rotate-90"
                      aria-hidden="true"
                    />
                  ) : null}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Comparison table */}
      <section className="py-20">
        <div className="container-page">
          <SectionHeading
            eyebrow="Feature Comparison"
            title="What's Included in Each SEO Package"
            description="A category-by-category breakdown so you can compare scope before you decide."
          />

          <div className="mt-12 overflow-x-auto rounded-3xl border border-border bg-card shadow-[var(--shadow-card)]">
            <table className="w-full min-w-[720px] border-collapse text-left">
              <thead>
                <tr className="bg-surface">
                  <th className="sticky left-0 z-10 bg-surface px-5 py-4 text-xs font-bold uppercase tracking-wide text-muted-foreground">
                    Feature
                  </th>
                  {seoPackages.map((pkg) => (
                    <th key={pkg.id} className="px-4 py-4 text-center">
                      <span className="block text-sm font-bold text-navy">{pkg.name}</span>
                      <span className="mt-1 block text-xs font-medium text-muted-foreground">
                        {formatPrice(pkg.basePriceBdt, currency)} / Month
                      </span>
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {comparisonGroups.map((group) => (
                  <>
                    <tr key={group.category}>
                      <td
                        colSpan={5}
                        className="border-t border-border bg-brand-soft/60 px-5 py-2.5 text-xs font-bold uppercase tracking-wide text-primary"
                      >
                        {group.category}
                      </td>
                    </tr>
                    {group.rows.map((row) => (
                      <tr key={`${group.category}-${row.label}`} className="border-t border-border">
                        <td className="sticky left-0 z-10 bg-card px-5 py-3 text-sm text-muted-foreground">
                          {row.label}
                        </td>
                        {row.values.map((value, i) => (
                          <td key={i} className="px-4 py-3 text-center">
                            <ComparisonCell value={value} />
                          </td>
                        ))}
                      </tr>
                    ))}
                  </>
                ))}
              </tbody>
            </table>
          </div>

          {/* Not sure section */}
          <div className="mt-12 rounded-3xl bg-gradient-to-r from-navy via-[oklch(0.36_0.15_262)] to-primary px-6 py-10 text-center shadow-[var(--shadow-cta)] md:px-12">
            <h2 className="text-2xl text-navy-foreground md:text-3xl">
              Not Sure Which SEO Package Is Right for You?
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-sm leading-relaxed text-navy-foreground/75">
              Every business is different. Tell us about your website, industry, goals and
              competition, and our team can recommend the most suitable SEO strategy for your
              business.
            </p>
            <div className="mt-7">
              <Link
                to="/contact"
                className="inline-flex items-center justify-center rounded-xl bg-navy-foreground px-6 py-3 text-sm font-semibold text-navy transition-transform hover:-translate-y-0.5"
              >
                Get Free Consultation
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Website design package */}
      <section className="bg-surface py-20">
        <div className="container-page">
          <SectionHeading
            eyebrow="Website Design"
            title="Need a Website First?"
            description="A professional, responsive website built on an SEO-friendly structure."
          />
          <div className="mx-auto mt-12 grid max-w-4xl gap-7 md:grid-cols-2">
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

            <article className="rounded-3xl border border-border bg-card p-8">
              <h3 className="text-xl">Need a Custom Solution?</h3>
              <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
                Larger website, multiple locations, e-commerce or a mix of SEO and development work?
                We'll scope a package around your actual requirements and budget.
              </p>
              <PrimaryLink to="/contact" className="mt-8 w-full">
                Talk to Our Team
              </PrimaryLink>
            </article>
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
