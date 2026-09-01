import { Link } from "@tanstack/react-router";
import { Facebook, Instagram, Linkedin, Search, Twitter } from "lucide-react";

const pages = [
  { label: "Home", to: "/" },
  { label: "About", to: "/about" },
  { label: "Services", to: "/seo-services" },
  { label: "Pricing", to: "/pricing" },
  { label: "Portfolio", to: "/portfolio" },
  { label: "FAQ", to: "/faq" },
  { label: "Contact", to: "/contact" },
] as const;

const services = [
  { label: "SEO Services", to: "/seo-services" },
  { label: "Website Ranking", to: "/website-ranking" },
  { label: "Web Development", to: "/web-development" },
  { label: "Website Design", to: "/pricing" },
] as const;

export function Footer() {
  return (
    <footer className="bg-navy text-navy-foreground">
      <div className="container-page grid gap-10 py-16 md:grid-cols-2 lg:grid-cols-4">
        <div>
          <div className="flex items-center gap-2.5">
            <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-primary text-primary-foreground">
              <Search className="h-4.5 w-4.5" aria-hidden="true" />
            </span>
            <span className="text-lg font-bold">Grow Seo Care</span>
          </div>
          <p className="mt-4 max-w-xs text-sm leading-relaxed text-navy-foreground/70">
            Helping businesses grow through SEO, website ranking, and professional web solutions.
          </p>
          <div className="mt-5 flex gap-2">
            {[Facebook, Twitter, Linkedin, Instagram].map((Icon, i) => (
              <a
                key={i}
                href="#"
                aria-label="Social profile placeholder"
                className="flex h-9 w-9 items-center justify-center rounded-lg border border-navy-foreground/15 text-navy-foreground/70 transition-colors hover:bg-primary hover:text-primary-foreground"
              >
                <Icon className="h-4 w-4" aria-hidden="true" />
              </a>
            ))}
          </div>
        </div>

        <div>
          <h3 className="text-sm font-semibold text-navy-foreground">Company</h3>
          <ul className="mt-4 space-y-2.5 text-sm">
            {pages.map((p) => (
              <li key={p.label}>
                <Link
                  to={p.to}
                  className="text-navy-foreground/70 transition-colors hover:text-primary-foreground"
                >
                  {p.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="text-sm font-semibold text-navy-foreground">Services</h3>
          <ul className="mt-4 space-y-2.5 text-sm">
            {services.map((s) => (
              <li key={s.label}>
                <Link
                  to={s.to}
                  className="text-navy-foreground/70 transition-colors hover:text-primary-foreground"
                >
                  {s.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="text-sm font-semibold text-navy-foreground">Get in touch</h3>
          <ul className="mt-4 space-y-2.5 text-sm text-navy-foreground/70">
            <li>Phone: [Add phone number]</li>
            <li>Email: [Add email address]</li>
            <li>WhatsApp: [Add WhatsApp number]</li>
            <li>Office: [Add office address]</li>
          </ul>
          <Link
            to="/contact"
            className="mt-5 inline-flex rounded-xl bg-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground"
          >
            Get Free Consultation
          </Link>
        </div>
      </div>

      <div className="border-t border-navy-foreground/10">
        <div className="container-page flex flex-col items-center justify-between gap-2 py-5 text-xs text-navy-foreground/60 sm:flex-row">
          <p>© 2026 Grow Seo Care. All Rights Reserved.</p>
          <p>SEO • Website Ranking • Web Development • Website Design</p>
        </div>
      </div>
    </footer>
  );
}
