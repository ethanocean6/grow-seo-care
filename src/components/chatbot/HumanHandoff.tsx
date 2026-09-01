import { Headset, PhoneCall } from "lucide-react";

import { botIdentity, ctaLinks } from "@/data/growSeoKnowledge";
import { Link } from "@tanstack/react-router";

export function HumanHandoff({ onRequestForm }: { onRequestForm: () => void }) {
  return (
    <div className="rounded-2xl border border-border bg-brand-soft/60 p-3">
      <p className="flex items-start gap-2 text-xs leading-relaxed text-navy">
        <Headset className="mt-0.5 h-3.5 w-3.5 shrink-0 text-primary" aria-hidden="true" />
        <span>{botIdentity.humanHandoffMessage}</span>
      </p>
      <div className="mt-3 flex flex-wrap gap-2">
        <button
          type="button"
          onClick={onRequestForm}
          className="inline-flex items-center gap-1.5 rounded-full bg-primary px-3 py-1.5 text-xs font-semibold text-primary-foreground"
        >
          <PhoneCall className="h-3 w-3" aria-hidden="true" />
          Share my details
        </button>
        <Link
          to={ctaLinks.contact}
          className="inline-flex items-center rounded-full border border-border bg-card px-3 py-1.5 text-xs font-semibold text-navy hover:border-primary hover:text-primary"
        >
          Contact page
        </Link>
      </div>
    </div>
  );
}
