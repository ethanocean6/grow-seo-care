import { createFileRoute } from "@tanstack/react-router";
import { useServerFn } from "@tanstack/react-start";
import { Award, Mail, MapPin, MessageCircle, Phone } from "lucide-react";
import { useState, type FormEvent } from "react";
import { toast } from "sonner";

import { PageHero } from "@/components/site/Bits";
import { submitContactInquiry } from "@/lib/contact.functions";

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

const contact = {
  phone: "01979283685",
  phoneHref: "tel:01979283685",
  email: "khairulislambasher780@gmail.com",
  emailHref: "mailto:khairulislambasher780@gmail.com",
  whatsapp: "+8801979283685",
  whatsappHref: "https://wa.me/8801979283685",
  address: "Mugganjit Residential Area, Khulna",
  addressQuery: "Mugganjit Residential Area, Khulna, Bangladesh",
} as const;

const details = [
  { icon: Phone, label: "Phone", value: contact.phone, href: contact.phoneHref },
  { icon: Mail, label: "Email", value: contact.email, href: contact.emailHref },
  {
    icon: MapPin,
    label: "Office Address",
    value: contact.address,
    mapLink: `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(contact.addressQuery)}`,
  },
  { icon: MessageCircle, label: "WhatsApp", value: contact.whatsapp, href: contact.whatsappHref, external: true },
];

const fieldClass =
  "w-full rounded-xl border border-input bg-card px-4 py-2.5 text-sm text-navy outline-none transition-colors placeholder:text-muted-foreground/70 focus:border-primary focus:ring-2 focus:ring-ring/25";

function Contact() {
  const [sent, setSent] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const submit = useServerFn(submitContactInquiry);

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (sent) return;

    const form = e.currentTarget;
    const formData = new FormData(form);

    setSubmitting(true);
    let result: { ok: boolean; error?: string };
    try {
      result = await submit({
        data: {
          name: String(formData.get("name") ?? ""),
          email: String(formData.get("email") ?? ""),
          phone: String(formData.get("phone") ?? ""),
          company: String(formData.get("company") ?? ""),
          service: String(formData.get("service") ?? ""),
          budget: String(formData.get("budget") ?? ""),
          message: String(formData.get("message") ?? ""),
          website: String(formData.get("website") ?? ""),
          source_page: typeof window !== "undefined" ? window.location.pathname : null,
        },
      });
    } catch {
      result = { ok: false, error: "We couldn't send your inquiry right now. Please try again." };
    }
    setSubmitting(false);

    if (!result.ok) {
      toast.error(result.error ?? "We couldn't send your inquiry right now. Please try again.");
      return;
    }

    setSent(true);
    form.reset();
    toast.success("Thank You! Your inquiry has been sent successfully.");
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
                <input id="phone" name="phone" type="tel" required className={fieldClass} placeholder="Your phone number" />
              </div>
              <div>
                <label htmlFor="company" className="mb-1.5 block text-sm font-medium">Company Name</label>
                <input id="company" name="company" className={fieldClass} placeholder="Your company" />
              </div>
              <div>
                <label htmlFor="service" className="mb-1.5 block text-sm font-medium">Select Service</label>
                <select id="service" name="service" required className={fieldClass} defaultValue="">
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
                <textarea id="message" name="message" rows={5} required minLength={10} maxLength={4000} className={fieldClass} placeholder="Tell us about your project and goals" />
              </div>
              <div aria-hidden="true" className="hidden">
                <label htmlFor="website">Website</label>
                <input id="website" name="website" tabIndex={-1} autoComplete="off" />
              </div>
              <div className="sm:col-span-2">
                <button
                  type="submit"
                  disabled={submitting || sent}
                  className="inline-flex w-full items-center justify-center rounded-xl bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground shadow-[var(--shadow-cta)] transition-transform hover:-translate-y-0.5 disabled:opacity-60 sm:w-auto"
                >
                  {submitting ? "Sending..." : sent ? "Sent" : "Send Inquiry"}
                </button>
                {sent ? (
                  <p className="mt-4 rounded-xl bg-brand-soft px-4 py-3 text-sm text-primary">
                    <strong className="block">Thank You! Your inquiry has been sent successfully.</strong>
                    Our team has received your project details and will get back to you soon.
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
            <div className="grid gap-6 lg:grid-cols-2">
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
                        {d.href ? (
                          <a
                            href={d.href}
                            target={d.external ? "_blank" : undefined}
                            rel={d.external ? "noreferrer" : undefined}
                            className="block text-sm text-muted-foreground hover:text-primary hover:underline"
                          >
                            {d.value}
                          </a>
                        ) : (
                          <span className="block text-sm text-muted-foreground">{d.value}</span>
                        )}
                        {d.mapLink ? (
                          <a
                            href={d.mapLink}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="mt-1 inline-flex items-center gap-1 text-sm font-semibold text-primary transition-colors hover:text-primary/80 hover:underline"
                          >
                            View on Google Maps <span aria-hidden="true">→</span>
                          </a>
                        ) : null}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="card-soft overflow-hidden border-primary/20 p-0 shadow-[var(--shadow-card)]">
                <div className="relative h-[320px] w-full lg:h-[380px]">
                  <iframe
                    title="Office location map"
                    src={`https://www.google.com/maps/embed/v1/place?key=${import.meta.env['VITE_LOVABLE_CONNECTOR_GOOGLE_MAPS_BROWSER_KEY']}&q=${encodeURIComponent(contact.addressQuery)}`}
                    className="absolute inset-0 h-full w-full border-0"
                    loading="lazy"
                    allowFullScreen
                  />
                  <a
                    href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(contact.addressQuery)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="absolute bottom-3 right-3 inline-flex items-center gap-1 rounded-lg bg-white/95 px-3 py-2 text-xs font-semibold text-navy shadow-md transition-colors hover:bg-primary hover:text-primary-foreground"
                  >
                    Open in Google Maps <span aria-hidden="true">↗</span>
                  </a>
                </div>
              </div>
            </div>
          </aside>
        </div>
      </section>
    </>
  );
}
