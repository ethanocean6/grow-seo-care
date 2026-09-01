import { useState } from "react";
import { toast } from "sonner";

import { leadFormFields } from "@/data/growSeoKnowledge";
import { supabase } from "@/integrations/supabase/client";

export function LeadCaptureForm({
  conversationSummary,
  onDone,
  onCancel,
}: {
  conversationSummary: string;
  onDone: () => void;
  onCancel: () => void;
}) {
  const [values, setValues] = useState<Record<string, string>>({});
  const [submitting, setSubmitting] = useState(false);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!values["name"]?.trim()) {
      toast.error("Please enter your name.");
      return;
    }
    if (!values["email"]?.trim() && !values["phone"]?.trim()) {
      toast.error("Please add an email or a phone number so we can reach you.");
      return;
    }

    setSubmitting(true);
    const { error } = await supabase.from("chat_leads").insert({
      name: values["name"].trim(),
      email: values["email"]?.trim() || null,
      phone: values["phone"]?.trim() || null,
      company: values["company"]?.trim() || null,
      service: values["service"]?.trim() || null,
      website_url: values["website_url"]?.trim() || null,
      message: values["message"]?.trim() || null,
      conversation_summary: conversationSummary.slice(0, 4000),
      source_page: typeof window !== "undefined" ? window.location.pathname : null,
    });
    setSubmitting(false);

    if (error) {
      toast.error("Something went wrong. Please try again.");
      return;
    }

    toast.success("Thank you! The Grow Seo Care team will get back to you soon.");
    onDone();
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-3 rounded-2xl border border-border bg-card p-4">
      <div>
        <p className="text-sm font-bold text-navy">Request a consultation</p>
        <p className="mt-1 text-xs text-muted-foreground">
          Share your details and the Grow Seo Care team will contact you.
        </p>
      </div>

      {leadFormFields.map((field) => (
        <label key={field.name} className="block">
          <span className="text-xs font-semibold text-navy">
            {field.label}
            {field.required ? " *" : ""}
          </span>
          {field.type === "textarea" ? (
            <textarea
              rows={3}
              value={values[field.name] ?? ""}
              onChange={(e) => setValues((v) => ({ ...v, [field.name]: e.target.value }))}
              className="mt-1 w-full rounded-xl border border-border bg-background px-3 py-2 text-sm outline-none focus:border-primary"
            />
          ) : (
            <input
              type={field.type}
              value={values[field.name] ?? ""}
              onChange={(e) => setValues((v) => ({ ...v, [field.name]: e.target.value }))}
              className="mt-1 h-10 w-full rounded-xl border border-border bg-background px-3 text-sm outline-none focus:border-primary"
            />
          )}
        </label>
      ))}

      <div className="flex gap-2 pt-1">
        <button
          type="submit"
          disabled={submitting}
          className="inline-flex flex-1 items-center justify-center rounded-xl bg-primary px-4 py-2.5 text-sm font-semibold text-primary-foreground disabled:opacity-60"
        >
          {submitting ? "Sending..." : "Send request"}
        </button>
        <button
          type="button"
          onClick={onCancel}
          className="inline-flex items-center justify-center rounded-xl border border-border px-4 py-2.5 text-sm font-semibold text-navy"
        >
          Cancel
        </button>
      </div>
    </form>
  );
}
