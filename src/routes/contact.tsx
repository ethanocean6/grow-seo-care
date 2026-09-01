import { createFileRoute } from "@tanstack/react-router";
import { Award, Mail, MapPin, MessageCircle, Phone } from "lucide-react";
import { useState, type FormEvent } from "react";

import { PageHero } from "@/components/site/Bits";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact Grow Seo Care — Free SEO & Website Consultation" },
      {
        name: "description",
        content:
          "Contact Grow Seo Care for SEO services, website ranking, web development or website design. Send an inquiry and get a free consultation.",
      },
      { property: "og:title", content: "Contact Grow Seo Care" },
      {
        property: "og:description",
        content:
          "Let's grow your business together — send an inquiry for SEO, ranking or web development.",
      },
      { property: "og:url", content: "/contact" },
    ],
    links: [{ rel: "canonical", href: "/contact" }],
  }),
  component: Contact,
});

const details = [
  { icon: Phone, label: "Phone", value: "[Add phone number]" },
  { icon: Mail, label: "Email", value: "[Add email address]" },
  { icon: MapPin, label: "Office Address", value: "[Add office address]" },
  { icon: MessageCircle, label: "WhatsApp", value: "[Add WhatsApp number]" },
];

const fieldClass =
  "w-full rounded-xl border border-input bg-card px-4 py-2.5 text-sm text-navy outline-none transition-colors placeholder:text-muted-foreground/70 focus:border-primary focus:ring-2 focus:ring-ring/25";

function Contact() {
  const [sent, setSent] = useState(false);

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSent(true);
  }

  return (
    <>
      <PageHero
        eyebrow="Contact"
        title="Let's Grow Your Business Together"
        description="Tell us about your business, your website and what you want to achieve. We'll reply with a free consultation and a practical recommendation."
      />

      <section className="py-20">
        <div className="container-page grid gap-10 lg:grid-cols-[1.4fr_1fr]">
          <div className="card-soft p-7 md:p-9">
            <h2 className="text-xl">Send Inquiry</h2>
            <form className="mt-6 grid gap-5 sm:grid-cols-2" onSubmit={handleSubmit}>
              <div>
                <label htmlFor="name" className="mb-1.5 block text-sm font-medium">Name</label>
                <input id="name" name="name" required className={fieldClass} placeholder="Your full name" />
              </div>
              <div>
                <label htmlFor="email" className="mb-1.5 block text-sm font-medium">Email</label>
                <input id="email" name="email" type="email" required className={fieldClass} placeholder="you@company.com" />
              </div>
              <div>
                <label htmlFor="phone" className="mb-1.5 block text-sm font-medium">Phone Number</label>
                <input id="phone" name="phone" type="tel" className={fieldClass} placeholder="Your phone number" />
              </div>
              <div>
                <label htmlFor="company" className="mb-1.5 block text-sm font-medium">Company Name</label>
                <input id="company" name="company" className={fieldClass} placeholder="Your company" />
              </div>
              <div>
                <label htmlFor="service" className="mb-1.5 block text-sm font-medium">Select Service</label>
                <select id="service" name="service" className={fieldClass} defaultValue="">
                  <option value="" disabled>Choose a service</option>
                  <option>SEO Services</option>
                  <option>Website Ranking</option>
                  <option>Web Development</option>
                  <option>Website Design</option>
                  <option>Other</option>
                </select>
              </div>
              <div>
                <label htmlFor="budget" className="mb-1.5 block text-sm font-medium">Budget</label>
                <input id="budget" name="budget" className={fieldClass} placeholder="Approximate budget" />
              </div>
              <div className="sm:col-span-2">
                <label htmlFor="message" className="mb-1.5 block text-sm font-medium">Message</label>
                <textarea id="message" name="message" rows={5} className={fieldClass} placeholder="Tell us about your project and goals" />
              </div>
              <div className="sm:col-span-2">
                <button
                  type="submit"
                  className="inline-flex w-full items-center justify-center rounded-xl bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground shadow-[var(--shadow-cta)] transition-transform hover:-translate-y-0.5 sm:w-auto"
                >
                  Send Inquiry
                </button>
                {sent ? (
                  <p className="mt-4 rounded-xl bg-brand-soft px-4 py-3 text-sm text-primary">
                    Thank you — your inquiry has been recorded. We'll be in touch shortly.
                  </p>
                ) : null}
              </div>
            </form>
          </div>

          <aside className="space-y-6">
            <div className="card-soft p-7">
              <span className="eyebrow">
                <Award className="h-3.5 w-3.5" aria-hidden="true" /> 10+ Years of Experience
              </span>
              <p className="mt-4 text-sm font-medium text-navy">
                SEO • Ranking • Web Development
              </p>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                One team for search visibility, ranking strategy and the website behind it.
              </p>
            </div>
            <div className="card-soft p-7">
              <h2 className="text-lg">Contact Details</h2>
              <ul className="mt-5 space-y-4">
                {details.map((d) => (
                  <li key={d.label} className="flex items-start gap-3">
                    <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-brand-soft text-primary">
                      <d.icon className="h-4 w-4" aria-hidden="true" />
                    </span>
                    <span>
                      <span className="block text-sm font-semibold text-navy">{d.label}</span>
                      <span className="block text-sm text-muted-foreground">{d.value}</span>
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </aside>
        </div>
      </section>
    </>
  );
}
