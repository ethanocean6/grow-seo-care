import { createFileRoute } from "@tanstack/react-router";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { CtaBanner, PageHero, PrimaryLink } from "@/components/site/Bits";

const faqs = [
  {
    q: "How long does SEO take to show results?",
    a: "Most websites begin showing measurable movement within a few months, but timelines vary by industry, competition, website condition and keyword difficulty. We focus on sustainable progress and report on it monthly.",
  },
  {
    q: "What is included in the ৳150,000 SEO package?",
    a: "Complete SEO strategy, website SEO audit, keyword research, on-page SEO, technical SEO, content optimization, monthly optimization, ranking monitoring, performance reporting, and 30 SEO content posts written every month.",
  },
  {
    q: "How many content posts are included every month?",
    a: "30 SEO content posts are written every month as part of the SEO Growth Package.",
  },
  {
    q: "Is website design included with SEO?",
    a: "Website design is a separate service. The SEO package includes on-page and technical improvements, while a full design project is quoted separately — our Website Design Package starts at ৳8,000.",
  },
  {
    q: "How much does website design cost?",
    a: "Our Website Design Package is ৳8,000 and includes professional, responsive, mobile-friendly design with a modern UI and SEO-friendly structure. Larger or custom projects are quoted based on scope.",
  },
  {
    q: "Do you provide custom web development?",
    a: "Yes. We build business websites, campaign landing pages and custom web solutions with tailored functionality and integrations.",
  },
  {
    q: "Do you guarantee Google rankings?",
    a: "No. Rankings depend on factors outside any agency's control, including competition and search engine updates. We commit to a proven process, consistent execution and transparent reporting.",
  },
  {
    q: "Can you work with an existing website?",
    a: "Yes. We start with a full audit of your current website and improve what exists wherever possible, recommending a rebuild only when the current site genuinely limits growth.",
  },
  {
    q: "Do you provide monthly SEO reports?",
    a: "Yes. Every month you receive a clear report covering rankings, traffic, work completed and the priorities for the following month.",
  },
  {
    q: "How can I start a project with Grow Seo Care?",
    a: "Send an enquiry through our contact page with your website and goals. We'll review it and get back to you with a free consultation and a recommended starting point.",
  },
];

export const Route = createFileRoute("/faq")({
  head: () => ({
    meta: [
      { title: "FAQ — SEO, Ranking & Web Development Questions | Grow Seo Care" },
      {
        name: "description",
        content:
          "Answers to common questions about SEO timelines, package inclusions, monthly content posts, website design cost and custom web development.",
      },
      { property: "og:title", content: "Frequently Asked Questions — Grow Seo Care" },
      {
        property: "og:description",
        content: "Common questions about our SEO, ranking and web development services.",
      },
      { property: "og:url", content: "/faq" },
    ],
    links: [{ rel: "canonical", href: "/faq" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: faqs.map((f) => ({
            "@type": "Question",
            name: f.q,
            acceptedAnswer: { "@type": "Answer", text: f.a },
          })),
        }),
      },
    ],
  }),
  component: Faq,
});

function Faq() {
  return (
    <>
      <PageHero
        eyebrow="FAQ"
        title="Frequently Asked Questions"
        description="Straight answers about how we work, what's included, and what to expect from an SEO or website project."
      >
        <PrimaryLink to="/contact">Get Free Consultation</PrimaryLink>
      </PageHero>

      <section className="py-20">
        <div className="container-page mx-auto max-w-3xl">
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((f, i) => (
              <AccordionItem key={f.q} value={`item-${i}`} className="border-border">
                <AccordionTrigger className="text-left text-base font-semibold text-navy">
                  {f.q}
                </AccordionTrigger>
                <AccordionContent className="text-sm leading-relaxed text-muted-foreground">
                  {f.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      <CtaBanner
        title="Question not answered here?"
        description="Send us a message and we'll get back to you with a clear, honest answer."
        ctaLabel="Talk to Our Team"
      />
    </>
  );
}
