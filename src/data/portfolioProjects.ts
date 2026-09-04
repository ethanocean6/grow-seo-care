export type ProjectFilter =
  | "SEO"
  | "Web Development"
  | "Website Ranking"
  | "Local SEO"
  | "Ecommerce";

export type PortfolioProject = {
  id: string;
  badge: "Sample Project" | "Concept Project";
  title: string;
  category: string;
  industry: string;
  projectType: string;
  description: string;
  services: readonly string[];
  goal: string;
  challenge: string;
  strategy: string;
  focusAreas: readonly string[];
  outcome: readonly string[];
  filters: readonly ProjectFilter[];
  thumbnail:
    | "service"
    | "manufacturing"
    | "corporate"
    | "ecommerce"
    | "restaurant"
    | "saas"
    | "realestate"
    | "healthcare"
    | "transformation";
  featured?: boolean;
};

export const portfolioFilters = [
  "All",
  "SEO",
  "Web Development",
  "Website Ranking",
  "Local SEO",
  "Ecommerce",
] as const;

export const sampleDisclaimer =
  "This is a demonstration project created to illustrate our approach.";

export const portfolioProjects: readonly PortfolioProject[] = [
  {
    id: "local-service",
    badge: "Sample Project",
    title: "Local Service Company Website",
    category: "HOME SERVICES • WEB DEVELOPMENT + ON-PAGE SEO",
    industry: "Home Services",
    projectType: "Sample / Concept",
    description:
      "A conversion-focused website concept designed for a local service business, combining clear service pages, mobile-first design and foundational on-page SEO.",
    services: ["Web Development", "On-Page SEO", "Local SEO", "Mobile Optimization"],
    goal: "Build a stronger local online presence",
    challenge:
      "A slow, hard-to-navigate website that made it difficult for nearby customers to understand the services on offer or get in touch.",
    strategy:
      "Rebuild the site around a clear service structure, mobile-first layouts and on-page SEO fundamentals, with location context on every service page.",
    focusAreas: [
      "Service page structure",
      "Mobile usability",
      "Local search signals",
      "Enquiry flow",
    ],
    outcome: [
      "Improved website structure",
      "Improved mobile experience",
      "Created a stronger local SEO foundation",
    ],
    filters: ["Web Development", "Local SEO", "SEO"],
    thumbnail: "service",
  },
  {
    id: "b2b-manufacturer",
    badge: "Sample Project",
    title: "B2B Manufacturer SEO Program",
    category: "MANUFACTURING • SEO SERVICES",
    industry: "Manufacturing",
    projectType: "Sample / Concept",
    description:
      "An SEO strategy concept focused on improving website structure, keyword targeting, technical foundations and content opportunities for a B2B manufacturing business.",
    services: ["Technical SEO", "Keyword Research", "Content Strategy", "On-Page SEO"],
    goal: "Build sustainable organic search visibility",
    challenge:
      "Product and capability pages competed with each other and buyer-intent queries had no dedicated landing pages.",
    strategy:
      "Map keywords to product categories, clean up technical issues and plan a monthly content programme around buyer-intent topics.",
    focusAreas: [
      "Keyword mapping",
      "Technical clean-up",
      "Content planning",
      "Internal linking",
    ],
    outcome: [
      "Built a clearer content architecture",
      "Created a stronger SEO foundation",
      "Improved keyword targeting clarity",
    ],
    filters: ["SEO"],
    thumbnail: "manufacturing",
  },
  {
    id: "professional-firm",
    badge: "Sample Project",
    title: "Professional Firm Ranking Project",
    category: "PROFESSIONAL SERVICES • WEBSITE RANKING",
    industry: "Professional Services",
    projectType: "Sample / Concept",
    description:
      "A structured SEO campaign concept focused on improving keyword targeting, content relevance, technical optimization and overall search visibility.",
    services: ["Website Ranking", "Keyword Strategy", "Content Optimization", "Technical SEO"],
    goal: "Compete more effectively in search",
    challenge:
      "Core service pages were thin and under-optimised compared to established competitors in the same market.",
    strategy:
      "Benchmark competitors, rewrite and optimise core service pages, and apply consistent technical and authority-building work.",
    focusAreas: [
      "Competitor benchmarking",
      "On-page optimization",
      "Content depth",
      "Authority building",
    ],
    outcome: [
      "Improved website structure",
      "Improved content relevance",
      "Created a stronger SEO foundation",
    ],
    filters: ["Website Ranking", "SEO"],
    thumbnail: "corporate",
  },
  {
    id: "ecommerce-store",
    badge: "Sample Project",
    title: "Ecommerce Store SEO & Redesign",
    category: "ECOMMERCE • SEO + WEB DEVELOPMENT",
    industry: "Ecommerce",
    projectType: "Sample / Concept",
    description:
      "A modern ecommerce website concept combining improved user experience, search-friendly architecture, product page optimization and technical SEO.",
    services: ["Ecommerce SEO", "Web Development", "Product SEO", "Technical SEO"],
    goal: "Create a stronger foundation for ecommerce growth",
    challenge:
      "Category and product pages were duplicated, slow to load and difficult for search engines to crawl consistently.",
    strategy:
      "Restructure category architecture, optimise product templates, and pair the redesign with technical SEO fixes for crawlability and speed.",
    focusAreas: [
      "Category architecture",
      "Product page templates",
      "Crawlability & indexation",
      "Page performance",
    ],
    outcome: [
      "Built a clearer content architecture",
      "Improved mobile experience",
      "Created a stronger technical SEO foundation",
    ],
    filters: ["Ecommerce", "SEO", "Web Development"],
    thumbnail: "ecommerce",
    featured: true,
  },
  {
    id: "restaurant",
    badge: "Sample Project",
    title: "Local Restaurant Growth Website",
    category: "RESTAURANT • LOCAL SEO + WEB DEVELOPMENT",
    industry: "Restaurant",
    projectType: "Sample / Concept",
    description:
      "A mobile-first restaurant website concept designed around local discovery, clear menus, location information, service pages and conversion-focused user experience.",
    services: [
      "Local SEO",
      "Web Development",
      "Google Business Profile Strategy",
      "On-Page SEO",
    ],
    goal: "Improve local search visibility and customer discovery",
    challenge:
      "Menus, opening hours and location details were hard to find on mobile, and local listings were inconsistent.",
    strategy:
      "Design a mobile-first layout around menu and location content, and align on-site information with local profile data.",
    focusAreas: [
      "Menu & location content",
      "Local profile consistency",
      "Mobile-first layout",
      "Booking prompts",
    ],
    outcome: [
      "Improved mobile experience",
      "Created a stronger local SEO foundation",
      "Improved website structure",
    ],
    filters: ["Local SEO", "Web Development", "SEO"],
    thumbnail: "restaurant",
  },
  {
    id: "saas",
    badge: "Sample Project",
    title: "SaaS Website SEO Strategy",
    category: "SAAS • TECHNICAL SEO + CONTENT",
    industry: "SaaS",
    projectType: "Sample / Concept",
    description:
      "A SaaS website concept built around scalable information architecture, keyword mapping, technical SEO and content opportunities for competitive search markets.",
    services: ["Technical SEO", "Keyword Mapping", "Content Strategy", "Website Optimization"],
    goal: "Build a scalable organic search strategy",
    challenge:
      "Feature, use-case and comparison content had no consistent structure, making it hard to scale new pages.",
    strategy:
      "Define a repeatable page architecture per intent type and map keywords to templates before scaling content production.",
    focusAreas: [
      "Information architecture",
      "Intent-based templates",
      "Technical SEO",
      "Content scaling plan",
    ],
    outcome: [
      "Built a clearer content architecture",
      "Created a stronger SEO foundation",
      "Improved website structure",
    ],
    filters: ["SEO"],
    thumbnail: "saas",
  },
  {
    id: "real-estate",
    badge: "Sample Project",
    title: "Real Estate Website Optimization",
    category: "REAL ESTATE • SEO + WEB DEVELOPMENT",
    industry: "Real Estate",
    projectType: "Sample / Concept",
    description:
      "A real estate website concept focused on usability, location-based content, property structure, technical SEO and a smoother mobile browsing experience.",
    services: ["Web Development", "Local SEO", "Technical SEO", "Content Optimization"],
    goal: "Create a search-friendly property discovery experience",
    challenge:
      "Property listings and location pages were generated without a consistent structure or useful local context.",
    strategy:
      "Introduce structured property and location templates, improve filtering and browsing, and tighten technical SEO around listings.",
    focusAreas: [
      "Property templates",
      "Location content",
      "Filtering & browsing",
      "Mobile performance",
    ],
    outcome: [
      "Improved website structure",
      "Improved mobile experience",
      "Built a clearer content architecture",
    ],
    filters: ["Web Development", "Local SEO", "SEO"],
    thumbnail: "realestate",
  },
  {
    id: "healthcare",
    badge: "Sample Project",
    title: "Healthcare Website SEO Foundation",
    category: "HEALTHCARE • TECHNICAL + ON-PAGE SEO",
    industry: "Healthcare",
    projectType: "Sample / Concept",
    description:
      "A professional healthcare website concept with structured service pages, improved information architecture, technical SEO foundations and user-focused content organization.",
    services: ["Technical SEO", "On-Page SEO", "Website Structure", "Content Optimization"],
    goal: "Create a clearer and more search-friendly website structure",
    challenge:
      "Treatment and department information was scattered across pages with overlapping topics and unclear navigation.",
    strategy:
      "Reorganise services into a clear hierarchy, standardise page templates and resolve technical SEO issues.",
    focusAreas: [
      "Service hierarchy",
      "Page templates",
      "Technical SEO",
      "Readable content",
    ],
    outcome: [
      "Improved website structure",
      "Built a clearer content architecture",
      "Created a stronger SEO foundation",
    ],
    filters: ["SEO"],
    thumbnail: "healthcare",
  },
  {
    id: "transformation",
    badge: "Concept Project",
    title: "Business Website Transformation",
    category: "BUSINESS • WEB DEVELOPMENT + SEO",
    industry: "Business",
    projectType: "Sample / Concept",
    description:
      "A complete website transformation concept combining modern UI, responsive development, conversion-focused page structure and SEO-ready architecture.",
    services: ["Web Development", "UI/UX", "Technical SEO", "Conversion Optimization"],
    goal: "Turn an outdated website into a modern digital experience",
    challenge:
      "An ageing website with dated visuals, poor responsiveness and a structure that was never planned for search.",
    strategy:
      "Rebuild the interface around a modern design system with responsive layouts and an SEO-ready page architecture.",
    focusAreas: [
      "Modern UI system",
      "Responsive rebuild",
      "Conversion paths",
      "SEO-ready architecture",
    ],
    outcome: [
      "Improved website structure",
      "Improved mobile experience",
      "Created a stronger SEO foundation",
    ],
    filters: ["Web Development", "SEO"],
    thumbnail: "transformation",
  },
];
