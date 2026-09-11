// Server-only Resend email service (routed through the Lovable connector gateway).
// Never import this from client components.

const GATEWAY_URL = "https://connector-gateway.lovable.dev/resend";

export function escapeHtml(value: string): string {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

export type SendEmailInput = {
  to: string[];
  subject: string;
  html: string;
  replyTo?: string;
};

export async function sendEmail({ to, subject, html, replyTo }: SendEmailInput): Promise<void> {
  const lovableApiKey = process.env["LOVABLE_API_KEY"];
  const resendApiKey = process.env["RESEND_API_KEY"];
  if (!lovableApiKey) throw new Error("LOVABLE_API_KEY is not configured");
  if (!resendApiKey) throw new Error("RESEND_API_KEY is not configured");

  const from = process.env["CONTACT_FROM_EMAIL"] || "Grow Seo Care <onboarding@resend.dev>";

  const response = await fetch(`${GATEWAY_URL}/emails`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${lovableApiKey}`,
      "X-Connection-Api-Key": resendApiKey,
    },
    body: JSON.stringify({
      from,
      to,
      subject,
      html,
      ...(replyTo ? { reply_to: replyTo } : {}),
    }),
  });

  if (!response.ok) {
    const body = await response.text();
    console.error(`Resend request failed [${response.status}]: ${body}`);
    throw new Error(`Resend request failed [${response.status}]`);
  }
}
