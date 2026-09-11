import { createServerFn } from "@tanstack/react-start";
import { z } from "zod";

const contactSchema = z.object({
  name: z.string().trim().min(2).max(200),
  email: z.string().trim().email().max(200),
  phone: z.string().trim().min(6).max(50),
  company: z.string().trim().max(200).optional(),
  service: z.string().trim().min(1).max(100),
  budget: z.string().trim().max(100).optional(),
  message: z.string().trim().min(10).max(4000),
  source_page: z.string().max(500).nullable().optional(),
  // Honeypot: must stay empty for real visitors.
  website: z.string().max(200).optional(),
});

const GENERIC_ERROR = "We couldn't send your inquiry right now. Please try again.";

export const submitContactInquiry = createServerFn({ method: "POST" })
  .inputValidator((data: unknown) => contactSchema.parse(data))
  .handler(async ({ data }) => {
    // Silently accept spam bots without sending or storing anything.
    if (data.website && data.website.trim().length > 0) {
      return { ok: true as const };
    }

    const email = data.email.toLowerCase();
    const { supabaseAdmin } = await import("@/integrations/supabase/client.server");

    // Basic rate limiting / duplicate protection: max 3 inquiries per email per 10 minutes.
    const since = new Date(Date.now() - 10 * 60 * 1000).toISOString();
    const { count } = await supabaseAdmin
      .from("contact_inquiries")
      .select("id", { count: "exact", head: true })
      .eq("email", email)
      .gte("created_at", since);

    if ((count ?? 0) >= 3) {
      return { ok: false as const, error: GENERIC_ERROR };
    }

    const record = {
      name: data.name,
      email,
      phone: data.phone || null,
      company: data.company || null,
      service: data.service || null,
      budget: data.budget || null,
      message: data.message || null,
      source_page: data.source_page || null,
    };

    const { error } = await supabaseAdmin.from("contact_inquiries").insert(record);
    if (error) {
      console.error("contact inquiry insert error", error);
    }

    try {
      const { sendInquiryToTeam, sendVisitorConfirmation } = await import("./contact-email.server");
      const payload = {
        ...record,
        submittedAt: new Date().toUTCString(),
      };
      await sendInquiryToTeam(payload);
      try {
        await sendVisitorConfirmation(payload);
      } catch (confirmError) {
        console.error("visitor confirmation email failed", confirmError);
      }
    } catch (sendError) {
      console.error("inquiry email failed", sendError);
      return { ok: false as const, error: GENERIC_ERROR };
    }

    return { ok: true as const };
  });
