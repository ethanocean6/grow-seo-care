/**
 * SEO package definitions. Base prices are in BDT (internal base currency).
 */

export type SeoPackage = {
  id: string;
  name: string;
  target: string;
  basePriceBdt: number;
  positioning: string;
  badge?: string;
  description: string;
  bestFor: readonly string[];
  highlight: string;
  microCopy: string;
  cta: string;
  features: readonly string[];
  tier: "starter" | "growth" | "professional" | "premium";
};

export const seoPackages: readonly SeoPackage[] = [
  {
    id: "starter",
    tier: "starter",
    name: "Starter SEO",
    target: "For Small Businesses & New Websites",
    basePriceBdt: 25000,
    positioning: "SEO FOUNDATION 🌱",
    description:
      "Build a strong SEO foundation and start improving your website's search visibility with essential technical, on-page and content optimization.",
    bestFor: [
      "Small businesses",
      "New websites",
      "Local businesses",
      "Businesses starting SEO for the first time",
      "Websites with basic SEO problems",
    ],
    highlight: "SEO Foundation",
    microCopy: "Build the foundation for long-term organic growth.",
    cta: "Start SEO",
    features: [
      "Website Audit",
      "Technical SEO",
      "Keyword Research",
      "Basic On-Page SEO",
      "Meta Optimization",
      "Internal Linking",
      "Image SEO",
      "Basic Local SEO",
      "Basic Content Strategy",
      "Basic Link Strategy",
      "4 SEO Content Posts / Month",
      "Search Console Monitoring",
      "Basic Ranking Monitoring",
      "Monthly SEO Report",
    ],
  },
  {
    id: "growth",
    tier: "growth",
    name: "Growth SEO",
    target: "For Growing Businesses",
    basePriceBdt: 50000,
    positioning: "GROWTH ACCELERATOR 🚀",
    badge: "MOST POPULAR",
    description:
      "Expand your search visibility with a broader keyword strategy, content growth, competitor research, local SEO and ongoing optimization.",
    bestFor: [
      "Growing businesses",
      "Existing websites",
      "Businesses already getting some organic traffic",
      "Businesses targeting multiple keywords",
      "Businesses looking for consistent monthly growth",
    ],
    highlight: "Expanded SEO Growth",
    microCopy:
      "Turn your existing online presence into a stronger organic growth channel.",
    cta: "Grow My Website",
    features: [
      "Complete Website Audit",
      "Technical SEO",
      "Up to 50 Target Keywords",
      "Competitor Analysis",
      "On-Page SEO",
      "Meta Optimization",
      "Header & Content Optimization",
      "Internal Linking",
      "Image SEO",
      "Core Web Vitals Review",
      "Schema Optimization",
      "Content Strategy",
      "8 SEO Content Posts / Month",
      "Content Optimization",
      "Keyword Mapping",
      "Link Building",
      "Backlink Profile Analysis",
      "Toxic Link Review",
      "Local SEO",
      "Google Business Profile Optimization",
      "Local Citation Strategy",
      "Search Console Monitoring",
      "Google Analytics Review",
      "Ranking Monitoring",
      "Monthly SEO Report",
      "Monthly Strategy Call",
    ],
  },
  {
    id: "professional",
    tier: "professional",
    name: "Professional SEO",
    target: "For Competitive Businesses",
    basePriceBdt: 90000,
    positioning: "ADVANCED GROWTH 📈",
    description:
      "Designed for businesses competing in more competitive search markets with advanced technical SEO, content strategy, authority building and broader keyword targeting.",
    bestFor: [
      "Established businesses",
      "Competitive industries",
      "Medium-sized businesses",
      "High-value keyword targeting",
      "Advanced SEO requirements",
      "Growing ecommerce businesses",
    ],
    highlight: "Advanced SEO Strategy",
    microCopy:
      "Go beyond basic optimization with a deeper, more competitive SEO strategy.",
    cta: "Scale My SEO",
    features: [
      "Advanced Website Audit",
      "Advanced Technical SEO",
      "Up to 100 Target Keywords",
      "Advanced Competitor Analysis",
      "Advanced On-Page SEO",
      "Meta & Content Optimization",
      "Advanced Internal Linking",
      "Image SEO",
      "Core Web Vitals Review",
      "Advanced Schema Optimization",
      "Advanced Content Strategy",
      "15 SEO Content Posts / Month",
      "Content Optimization",
      "Advanced Keyword Mapping",
      "Advanced Link Building",
      "Backlink Profile Analysis",
      "Toxic Link Review",
      "Digital Outreach",
      "Local SEO",
      "Google Business Profile Optimization",
      "Local Citation Strategy",
      "Ecommerce SEO",
      "Product Page SEO",
      "Category Page SEO",
      "Search Console Monitoring",
      "Google Analytics Review",
      "Advanced Ranking Monitoring",
      "Detailed Monthly SEO Report",
      "2 Strategy Calls / Month",
    ],
  },
  {
    id: "premium",
    tier: "premium",
    name: "Premium SEO",
    target: "Complete SEO Growth System",
    basePriceBdt: 150000,
    positioning: "PREMIUM GROWTH 👑",
    description:
      "A comprehensive SEO growth solution covering technical SEO, on-page optimization, content, local SEO, ecommerce SEO, authority building, ranking monitoring and ongoing strategy.",
    bestFor: [
      "High-growth businesses",
      "Large websites",
      "Highly competitive industries",
      "Ecommerce businesses",
      "Businesses serious about long-term organic growth",
      "Companies requiring a complete SEO strategy",
    ],
    highlight: "Complete SEO Growth System",
    microCopy:
      "Everything your business needs for a comprehensive, long-term SEO growth strategy.",
    cta: "Get Premium SEO",
    features: [
      "Complete Website Audit",
      "Advanced Technical SEO",
      "Extensive Keyword Research",
      "Advanced Keyword Strategy",
      "Extensive Keyword Mapping",
      "Advanced Competitor Research",
      "Advanced On-Page SEO",
      "Technical Optimization",
      "Core Web Vitals Review",
      "Advanced Schema Optimization",
      "Extensive Internal Linking",
      "Image SEO",
      "Full Content Strategy",
      "30 SEO Content Posts / Month",
      "Content Optimization",
      "Content Planning",
      "Advanced Link Building Strategy",
      "Backlink Profile Analysis",
      "Toxic Link Review",
      "Digital Outreach",
      "Authority Building",
      "Local SEO",
      "Google Business Profile Optimization",
      "Local Citation Strategy",
      "Ecommerce SEO",
      "Product Page SEO",
      "Category Page SEO",
      "Technical Ecommerce SEO",
      "Search Console Monitoring",
      "Google Analytics Review",
      "Advanced Ranking Monitoring",
      "Detailed Monthly Reporting",
      "Dedicated SEO Growth Strategy",
      "Priority Support",
    ],
  },
];

/** Features rendered in bold inside the card feature list. */
export const emphasisedFeatures = ["30 SEO Content Posts / Month"];

export const packageProgression = [
  { name: "STARTER", detail: "Build the SEO Foundation" },
  { name: "GROWTH", detail: "Expand Visibility & Content" },
  { name: "PROFESSIONAL", detail: "Compete & Scale" },
  { name: "PREMIUM", detail: "Complete SEO Growth System" },
] as const;

type Cell = string | boolean;

export const comparisonGroups: readonly {
  category: string;
  rows: readonly { label: string; values: readonly [Cell, Cell, Cell, Cell] }[];
}[] = [
  {
    category: "SEO FOUNDATION",
    rows: [
      { label: "Website Audit", values: [true, "Complete", "Advanced", "Complete"] },
      { label: "Technical SEO", values: [true, true, "Advanced", "Advanced"] },
      { label: "Keyword Research", values: [true, "Up to 50", "Up to 100", "Extensive"] },
      { label: "Competitor Analysis", values: [false, true, "Advanced", "Advanced"] },
    ],
  },
  {
    category: "ON-PAGE SEO",
    rows: [
      { label: "Meta Optimization", values: [true, true, true, true] },
      { label: "Content Optimization", values: [true, true, "Advanced", "Advanced"] },
      { label: "Header Optimization", values: [false, true, true, true] },
      { label: "Internal Linking", values: [true, true, "Advanced", "Extensive"] },
      { label: "Image SEO", values: [true, true, true, true] },
      { label: "Schema", values: [false, true, "Advanced", "Advanced"] },
    ],
  },
  {
    category: "CONTENT SEO",
    rows: [
      { label: "Content Strategy", values: ["Basic", true, "Advanced", "Full"] },
      { label: "Keyword Mapping", values: [false, true, "Advanced", "Extensive"] },
      { label: "SEO Content Posts", values: ["4 / month", "8 / month", "15 / month", "30 / month"] },
      { label: "Content Optimization", values: [true, true, true, true] },
    ],
  },
  {
    category: "OFF-PAGE SEO",
    rows: [
      { label: "Link Building", values: ["Basic", true, "Advanced", "Advanced"] },
      { label: "Backlink Analysis", values: [false, true, true, true] },
      { label: "Toxic Link Review", values: [false, true, true, true] },
      { label: "Outreach", values: [false, false, true, true] },
      { label: "Authority Building", values: [false, false, false, true] },
    ],
  },
  {
    category: "LOCAL SEO",
    rows: [
      { label: "Local SEO", values: ["Basic", true, true, true] },
      { label: "Google Business Profile", values: [false, true, true, true] },
      { label: "Local Citation Strategy", values: [false, true, true, true] },
    ],
  },
  {
    category: "ECOMMERCE SEO",
    rows: [
      { label: "Product Page SEO", values: [false, false, true, true] },
      { label: "Category Page SEO", values: [false, false, true, true] },
      { label: "Technical Ecommerce SEO", values: [false, false, false, true] },
    ],
  },
  {
    category: "PERFORMANCE & REPORTING",
    rows: [
      { label: "Search Console", values: [true, true, true, true] },
      { label: "Google Analytics", values: [false, true, true, true] },
      { label: "Ranking Monitoring", values: ["Basic", true, "Advanced", "Advanced"] },
      { label: "Monthly Reporting", values: [true, true, "Detailed", "Detailed"] },
      { label: "Strategy Calls", values: [false, "1 / month", "2 / month", "Dedicated"] },
    ],
  },
];
