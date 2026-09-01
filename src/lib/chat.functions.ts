import { createServerFn } from "@tanstack/react-start";
import { z } from "zod";

import { systemInstructions } from "@/data/growSeoKnowledge";

const chatSchema = z.object({
  messages: z
    .array(
      z.object({
        role: z.enum(["user", "assistant"]),
        content: z.string().min(1).max(4000),
      }),
    )
    .min(1)
    .max(40),
});

export const askGrowAssistant = createServerFn({ method: "POST" })
  .inputValidator((data: unknown) => chatSchema.parse(data))
  .handler(async ({ data }) => {
    const apiKey = process.env["LOVABLE_API_KEY"];
    if (!apiKey) {
      return { ok: false as const, error: "AI is not configured yet." };
    }

    const response = await fetch("https://ai.gateway.lovable.dev/v1/chat/completions", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${apiKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        model: "google/gemini-3.5-flash",
        messages: [
          { role: "system", content: systemInstructions },
          ...data.messages,
        ],
      }),
    });

    if (response.status === 429) {
      return {
        ok: false as const,
        error: "Too many requests right now. Please try again in a moment.",
      };
    }
    if (!response.ok) {
      console.error("AI gateway error", response.status, await response.text());
      return {
        ok: false as const,
        error: "I couldn't reach the assistant right now. Please try again.",
      };
    }

    const json = (await response.json()) as {
      choices?: { message?: { content?: string } }[];
    };
    const content = json.choices?.[0]?.message?.content?.trim();

    if (!content) {
      return { ok: false as const, error: "Empty response. Please try again." };
    }

    return { ok: true as const, content };
  });
