import { Link } from "@tanstack/react-router";
import { Menu, Search, X } from "lucide-react";
import { useState } from "react";

const navItems = [
  { label: "Home", to: "/" },
  { label: "About", to: "/about" },
  { label: "Services", to: "/seo-services" },
  { label: "Pricing", to: "/pricing" },
  { label: "Portfolio", to: "/portfolio" },
  { label: "FAQ", to: "/faq" },
  { label: "Contact", to: "/contact" },
] as const;

export function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-border/70 bg-background/90 backdrop-blur-md">
      <div className="container-page flex h-18 items-center justify-between gap-4 py-3">
        <Link to="/" className="flex items-center gap-2.5" aria-label="Grow Seo Care home">
          <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-primary text-primary-foreground">
            <Search className="h-4.5 w-4.5" aria-hidden="true" />
          </span>
          <span className="text-lg font-bold tracking-tight text-navy">
            Grow <span className="text-primary">Seo</span> Care
          </span>
        </Link>

        <nav className="hidden items-center gap-1 lg:flex" aria-label="Main navigation">
          {navItems.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              activeOptions={{ exact: item.to === "/" }}
              activeProps={{ className: "text-primary bg-brand-soft" }}
              className="rounded-lg px-3 py-2 text-sm font-medium text-muted-foreground transition-colors hover:bg-brand-soft hover:text-primary"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="hidden lg:block">
          <Link
            to="/contact"
            className="inline-flex items-center rounded-xl bg-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground shadow-[var(--shadow-cta)] transition-transform hover:-translate-y-0.5"
          >
            Get Free Consultation
          </Link>
        </div>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          className="inline-flex h-10 w-10 items-center justify-center rounded-lg border border-border text-navy lg:hidden"
        >
          {open ? <Menu className="hidden" /> : null}
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {open ? (
        <div className="border-t border-border bg-background lg:hidden">
          <nav className="container-page flex flex-col gap-1 py-4" aria-label="Mobile navigation">
            {navItems.map((item) => (
              <Link
                key={item.to}
                to={item.to}
                onClick={() => setOpen(false)}
                activeOptions={{ exact: item.to === "/" }}
                activeProps={{ className: "text-primary bg-brand-soft" }}
                className="rounded-lg px-3 py-2.5 text-base font-medium text-muted-foreground"
              >
                {item.label}
              </Link>
            ))}
            <Link
              to="/contact"
              onClick={() => setOpen(false)}
              className="mt-2 inline-flex items-center justify-center rounded-xl bg-primary px-5 py-3 text-sm font-semibold text-primary-foreground"
            >
              Get Free Consultation
            </Link>
          </nav>
        </div>
      ) : null}
    </header>
  );
}
