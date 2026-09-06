import { createServerFn } from "@tanstack/react-start";
import { z } from "zod";

import { supabaseAdmin } from "@/integrations/supabase/client.server";

const contactSchema = z.object({
  name: z.string().min(1).max(200),
  email: z.string().email().max(200),
  phone: z.string().max(50).optional(),
  company: z.string().max(200).optional(),
  service: z.string().max(100).optional(),
  budget: z.string().max(100).optional(),
  message: z.string().max(4000).optional(),
  source_page: z.string().max(500).optional(),
});

export const submitContactInquiry = createServerFn({ method: "POST" })
  .inputValidator((data: unknown) => contactSchema.parse(data))
  .handler(async ({ data }) => {
    const { error } = await supabaseAdmin.from("contact_inquiries").insert({
      name: data.name.trim(),
      email: data.email.trim().toLowerCase(),
      phone: data.phone?.trim() || null,
      company: data.company?.trim() || null,
      service: data.service?.trim() || null,
      budget: data.budget?.trim() || null,
      message: data.message?.trim() || null,
      source_page: data.source_page || null,
    });

    if (error) {
      console.error("contact inquiry insert error", error);
      return { ok: false as const, error: "We couldn't save your inquiry. Please try again." };
    }

    return { ok: true as const };
  });
