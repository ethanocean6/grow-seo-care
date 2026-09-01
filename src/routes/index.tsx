import { createFileRoute, Link } from "@tanstack/react-router";
import {
  BarChart3,
  Code2,
  LayoutPanelTop,
  Search,
  ShieldCheck,
  Smartphone,
  Sparkles,
  TrendingUp,
  Wallet,
  Award,
} from "lucide-react";

import heroImage from "@/assets/hero-seo.jpg";
import { GhostLink, PrimaryLink, SectionHeading, CtaBanner } from "@/components/site/Bits";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Grow Seo Care — SEO Agency, Google Ranking & Web Development" },
      {
        name: "description",
        content:
          "Grow your business with smarter SEO and powerful websites. 10+ years of experience in SEO services, website ranking, web development and website design.",
      },
      { property: "og:title", content: "Grow Seo Care — SEO Agency & Web Development" },
      {
        property: "og:description",
        content:
          "Professional SEO services, Google ranking strategy, web development and modern website design for growing businesses.",
      },
      { property: "og:url", content: "/" },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
  component: Home,
});

const stats = [
  { value: "10+", label: "Years Experience", icon: Award },
  { value: "SEO", label: "Growth-Focused Strategies", icon: TrendingUp },
  { value: "30", label: "Monthly SEO Content Posts", icon: LayoutPanelTop },
  { value: "100%", label: "Business-Focused Approach", icon: ShieldCheck },
];

const services = [
  {
    icon: Search,
    title: "SEO Services",
    description:
      "Strategic SEO solutions designed to improve your search visibility, attract targeted organic traffic, and build long-term online growth.",
    cta: "Explore SEO Services",
    to: "/seo-services",
  },
  {
    icon: BarChart3,
    title: "Website Ranking",
    description:
      "Improve your website's Google ranking with data-driven optimization, keyword strategy, technical SEO, and ongoing performance improvements.",
    cta: "Improve My Ranking",
    to: "/website-ranking",
  },
  {
    icon: Code2,
    title: "Web Development",
    description:
      "Fast, responsive, modern websites built to provide an excellent user experience and support your business goals.",
    cta: "Build My Website",
    to: "/web-development",
  },
  {
    icon: Sparkles,
    title: "Website Design",
    description:
      "Clean, modern, mobile-friendly website designs created to make your brand look professional and convert visitors into customers.",
    cta: "View Design Service",
    to: "/pricing",
  },
];

const benefits = [
  { icon: Award, title: "10+ Years of Experience", text: "A decade of hands-on work across SEO, ranking and web projects." },
  { icon: TrendingUp, title: "Result-Oriented SEO Strategy", text: "Every action is tied to visibility, traffic and business outcomes." },
  { icon: Code2, title: "Professional Website Development", text: "Fast, secure and SEO-friendly websites built on modern standards." },
  { icon: Smartphone, title: "Mobile-Responsive Design", text: "Layouts that stay clean and usable on every screen size." },
  { icon: Wallet, title: "Transparent Pricing", text: "Clear packages and scope — no hidden costs or surprise add-ons." },
  { icon: ShieldCheck, title: "Long-Term Growth Approach", text: "Sustainable optimization instead of short-lived tactics." },
];

function Home() {
  return (
    <>
      <section className="bg-surface">
        <div className="container-page grid items-center gap-12 py-16 md:py-24 lg:grid-cols-2">
          <div className="reveal">
            <span className="eyebrow">
              <Award className="h-3.5 w-3.5" aria-hidden="true" /> 10+ Years of Experience
            </span>
            <h1 className="mt-5 text-3xl leading-tight md:text-5xl">
              Grow Your Business with Smarter SEO &amp; Powerful Websites
            </h1>
            <p className="mt-5 max-w-xl text-base leading-relaxed text-muted-foreground md:text-lg">
              Grow Seo Care helps businesses improve their Google visibility, increase organic
              traffic, build high-performing websites, and turn online visitors into customers.
            </p>
            <p className="mt-3 text-sm font-medium text-primary">
              Grow Your Business. Rank Higher. Reach Further.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <PrimaryLink to="/contact">Get Free Consultation</PrimaryLink>
              <GhostLink to="/seo-services">View Our Services</GhostLink>
            </div>
          </div>
          <div className="relative">
            <div className="overflow-hidden rounded-3xl border border-border bg-card shadow-[var(--shadow-lift)]">
              <img
                src={heroImage}
                alt="SEO analytics dashboard showing organic traffic growth, keyword rankings and backlink performance"
                width={1280}
                height={1024}
                className="h-auto w-full"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="container-page -mt-8 pb-16 md:pb-20">
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {stats.map((s) => (
            <div key={s.label} className="card-soft card-soft-hover p-6 text-center">
              <s.icon className="mx-auto h-6 w-6 text-primary" aria-hidden="true" />
              <p className="mt-3 text-3xl font-bold text-navy">{s.value}</p>
              <p className="mt-1 text-sm text-muted-foreground">{s.label}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-surface py-20">
        <div className="container-page">
          <SectionHeading
            eyebrow="What we do"
            title="Our Digital Growth Services"
            description="Everything you need to build visibility, improve rankings, and grow your online business."
          />
          <div className="mt-12 grid gap-6 md:grid-cols-2">
            {services.map((s) => (
              <article key={s.title} className="card-soft card-soft-hover p-7">
                <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-brand-soft text-primary">
                  <s.icon className="h-5 w-5" aria-hidden="true" />
                </span>
                <h3 className="mt-5 text-xl">{s.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                  {s.description}
                </p>
                <Link
                  to={s.to}
                  className="mt-5 inline-flex text-sm font-semibold text-primary hover:underline"
                >
                  {s.cta} →
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="container-page">
          <SectionHeading
            eyebrow="Why us"
            title="Why Businesses Choose Grow Seo Care"
            description="A practical, experienced team focused on visibility, credibility and measurable business growth."
          />
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {benefits.map((b) => (
              <article key={b.title} className="card-soft card-soft-hover p-6">
                <b.icon className="h-5 w-5 text-primary" aria-hidden="true" />
                <h3 className="mt-4 text-base font-semibold">{b.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{b.text}</p>
              </article>
            ))}
          </div>

          <div className="mt-14 grid items-center gap-8 rounded-3xl border border-border bg-brand-soft/60 p-8 md:grid-cols-2 md:p-12">
            <div>
              <h3 className="text-2xl">Built for sustainable growth, not shortcuts</h3>
              <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
                Search engines reward websites that are technically sound, genuinely useful and
                consistently maintained. Instead of chasing short-term tactics that lose value
                quickly, we build a foundation: a healthy website, a clear keyword strategy,
                quality content published every month, and continuous optimization based on
                performance data.
              </p>
            </div>
            <div className="flex flex-wrap gap-3 md:justify-end">
              <PrimaryLink to="/contact">Get Free Consultation</PrimaryLink>
              <GhostLink to="/pricing">See Pricing</GhostLink>
            </div>
          </div>
        </div>
      </section>

      <CtaBanner
        title="Ready to rank higher and grow further?"
        description="Tell us about your business and we'll suggest the right mix of SEO, ranking strategy and web development."
        ctaLabel="Get Free Consultation"
      />
    </>
  );
}
