import { escapeHtml, sendEmail } from "./resend.server";

export const INQUIRY_RECIPIENT = "khairulislambasher780@gmail.com";

export type InquiryPayload = {
  name: string;
  email: string;
  phone?: string | null;
  company?: string | null;
  service?: string | null;
  budget?: string | null;
  website_url?: string | null;
  message?: string | null;
  submittedAt: string;
};

const NAVY = "#0B1F3A";
const ROYAL = "#0D47A1";
const ELECTRIC = "#2196F3";

function row(label: string, value?: string | null): string {
  if (!value) return "";
  return `
    <tr>
      <td style="padding:10px 0;border-bottom:1px solid #E4ECF7;">
        <div style="font-size:12px;font-weight:600;color:${ROYAL};text-transform:uppercase;letter-spacing:.04em;">${escapeHtml(label)}</div>
        <div style="font-size:15px;color:${NAVY};margin-top:4px;white-space:pre-wrap;">${escapeHtml(value)}</div>
      </td>
    </tr>`;
}

export async function sendInquiryToTeam(data: InquiryPayload): Promise<void> {
  const service = data.service || "General Inquiry";
  const html = `<!doctype html>
<html><body style="margin:0;padding:24px;background:#F4F8FF;font-family:Arial,Helvetica,sans-serif;">
  <table role="presentation" width="100%" style="max-width:600px;margin:0 auto;background:#ffffff;border-radius:16px;overflow:hidden;">
    <tr><td style="background:linear-gradient(135deg,${NAVY},${ROYAL} 60%,${ELECTRIC});padding:28px 28px;">
      <h1 style="margin:0;color:#ffffff;font-size:22px;">New Project Inquiry</h1>
      <p style="margin:6px 0 0;color:#C9DEFF;font-size:14px;">Grow Seo Care Website</p>
    </td></tr>
    <tr><td style="padding:8px 28px 28px;">
      <table role="presentation" width="100%">
        ${row("Name", data.name)}
        ${row("Email", data.email)}
        ${row("Phone Number", data.phone)}
        ${row("Company Name", data.company)}
        ${row("Selected Service", data.service)}
        ${row("Budget", data.budget)}
        ${row("Website URL", data.website_url)}
        ${row("Message", data.message)}
        ${row("Submitted At", data.submittedAt)}
      </table>
    </td></tr>
  </table>
</body></html>`;

  await sendEmail({
    to: [INQUIRY_RECIPIENT],
    subject: `New Grow Seo Care Inquiry — ${service}`,
    html,
    replyTo: data.email,
  });
}

export async function sendVisitorConfirmation(data: InquiryPayload): Promise<void> {
  const service = data.service || "your project";
  const html = `<!doctype html>
<html><body style="margin:0;padding:24px;background:#F4F8FF;font-family:Arial,Helvetica,sans-serif;">
  <table role="presentation" width="100%" style="max-width:600px;margin:0 auto;background:#ffffff;border-radius:16px;overflow:hidden;">
    <tr><td style="background:linear-gradient(135deg,${NAVY},${ROYAL} 60%,${ELECTRIC});padding:28px;">
      <h1 style="margin:0;color:#ffffff;font-size:20px;">We Received Your Inquiry</h1>
      <p style="margin:6px 0 0;color:#C9DEFF;font-size:14px;">Grow Seo Care</p>
    </td></tr>
    <tr><td style="padding:28px;color:${NAVY};font-size:15px;line-height:1.6;">
      <p style="margin:0 0 12px;">Hi ${escapeHtml(data.name)},</p>
      <p style="margin:0 0 12px;">Thank you for contacting Grow Seo Care.</p>
      <p style="margin:0 0 12px;">We have received your inquiry regarding:<br/><strong>${escapeHtml(service)}</strong></p>
      <p style="margin:0 0 12px;">Our team will review your requirements and contact you soon.</p>
      <p style="margin:20px 0 0;color:#5B6472;">Best regards,<br/>Grow Seo Care</p>
    </td></tr>
  </table>
</body></html>`;

  await sendEmail({
    to: [data.email],
    subject: "We Received Your Inquiry — Grow Seo Care",
    html,
  });
}
