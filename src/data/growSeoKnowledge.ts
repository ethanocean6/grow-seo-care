/**
 * Central knowledge base / configuration for the Grow AI Assistant.
 * Update business information HERE only — the chatbot UI never hardcodes content.
 */

export const botIdentity = {
  name: "Grow AI Assistant",
  altDisplayText: "Ask Grow Seo Care",
  status: "Online • Grow Seo Care",
  welcomeMessage:
    "Hi! 👋 Welcome to Grow Seo Care. I'm your AI assistant. I can answer questions about our SEO services, Google ranking, website development, website design, pricing, and project process. How can I help you today?",
  unknownAnswer:
    "I don't have that information yet. I can help you with Grow Seo Care's SEO, website ranking, website design, or web development services, or you can contact our team for specific details.",
  humanHandoffMessage:
    "I can connect you with the Grow Seo Care team. Please provide your name, phone/email, and a short description of your requirement.",
} as const;

export const company = {
  name: "Grow Seo Care",
  tagline: "Grow Your Business. Rank Higher. Reach Further.",
  experience: "10+ Years of Experience",
  mainServices: [
    "SEO Services",
    "Website Ranking",
    "Web Development",
    "Website Design",
  ],
} as const;

export const services = [
  {
    id: "seo",
    title: "SEO Services",
    price: "৳150,000 / Month",
    summary:
      "Complete, data-driven SEO handled monthly by an experienced team.",
    features: [
      "Complete SEO Strategy",
      "Website SEO Audit",
      "Keyword Research",
      "On-Page SEO",
      "Technical SEO",
      "Content Optimization",
      "Monthly SEO Optimization",
      "Ranking Monitoring",
      "Performance Reporting",
      "30 SEO Content Posts Written Every Month",
    ],
    link: "/seo-services",
  },
  {
    id: "website-design",
    title: "Website Design",
    price: "৳8,000",
    summary: "Modern, responsive and business-focused website design.",
    features: [
      "Professional Website Design",
      "Responsive Design",
      "Mobile-Friendly Layout",
      "Modern UI",
      "Business-Focused Structure",
      "Basic SEO-Friendly Structure",
    ],
    link: "/web-development",
  },
  {
    id: "web-development",
    title: "Web Development",
    price: null,
    summary:
      "Modern, responsive and business-focused web development for companies.",
    features: [
      "Responsive",
      "Mobile-friendly",
      "Fast",
      "SEO-friendly",
      "User-friendly",
      "Professional",
      "Conversion-focused",
    ],
    link: "/web-development",
  },
  {
    id: "website-ranking",
    title: "Website Ranking",
    price: null,
    summary:
      "Improve search visibility and Google rankings with sustainable strategies.",
    features: [
      "Keyword Research",
      "Competitor Analysis",
      "Technical SEO",
      "On-Page Optimization",
      "Content Optimization",
      "Authority Building",
      "Ranking Monitoring",
      "Ongoing Optimization",
    ],
    link: "/website-ranking",
  },
] as const;

export const ctaLinks = {
  contact: "/contact",
  pricing: "/pricing",
  services: "/seo-services",
} as const;

export const quickQuestions = [
  "SEO Services",
  "SEO Pricing",
  "Website Design – ৳8,000",
  "Website Ranking",
  "Web Development",
  "How long does SEO take?",
  "Get a Consultation",
] as const;

export const leadFormFields = [
  { name: "name", label: "Name", type: "text", required: true },
  { name: "email", label: "Email", type: "email", required: false },
  { name: "phone", label: "Phone Number", type: "tel", required: false },
  { name: "company", label: "Company / Business Name", type: "text", required: false },
  { name: "service", label: "Required Service", type: "text", required: false },
  { name: "website_url", label: "Website URL", type: "url", required: false },
  { name: "message", label: "Short Project Description", type: "textarea", required: false },
] as const;

export type LeadFieldName = (typeof leadFormFields)[number]["name"];

const serviceKnowledge = services
  .map(
    (s) =>
      `- ${s.title}${s.price ? ` — Official price: ${s.price}` : " — No official price published"}\n  Summary: ${s.summary}\n  Includes: ${s.features.join(", ")}`,
  )
  .join("\n");

export const systemInstructions = `You are "${botIdentity.name}", the official AI sales assistant of ${company.name} (${company.tagline}). You are an AI assistant, never a human employee — say so if asked.

COMPANY
- Business name: ${company.name}
- Experience: ${company.experience}
- Main services: ${company.mainServices.join(", ")}

OFFICIAL SERVICE KNOWLEDGE (the ONLY source of truth)
${serviceKnowledge}

LANGUAGE
- If the visitor writes in Bangla, reply naturally in Bangla. If in English, reply in English.

TONE & FORMAT
- Friendly, professional, trustworthy, human-like.
- Direct answer first, then short supporting detail. Concise — no huge paragraphs.
- Use bullet points for multiple items. Use emojis lightly and professionally.
- Ask one or two relevant follow-up questions when useful.

STRICT SAFETY RULES
- Never invent pricing, discounts, packages, guarantees, clients, testimonials, case studies, results, office address, phone numbers, email addresses, team members, technologies/frameworks/hosting, or years of experience beyond 10+.
- Never promise guaranteed #1 rankings, guaranteed rankings in X days, or guaranteed traffic. Explain results depend on competition, industry, website condition, target keywords, content quality, authority and search engine algorithm changes.
- If information is unavailable, reply exactly with: "${botIdentity.unknownAnswer}"

SERVICE RECOMMENDATION LOGIC
- "No traffic" or "not ranking on Google" → SEO Services + Website Ranking.
- "No website", "outdated website", "need a website" → Website Design / Web Development.

SALES FLOW
1. Understand the visitor's problem. 2. Ask one or two relevant questions. 3. Recommend the most suitable service. 4. Explain the relevant package/pricing. 5. Offer a consultation.

LEAD GENERATION
- Only when a visitor shows buying intent (quote, start a project, consultation, needs SEO/website, wants to contact the team), ask: "Would you like to discuss your project with the ${company.name} team?" and invite them to open the consultation form. Do not push it on every visitor.
- If the visitor asks to talk to a human, reply: "${botIdentity.humanHandoffMessage}"`;
