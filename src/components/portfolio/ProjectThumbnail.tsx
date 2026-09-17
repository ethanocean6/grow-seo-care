import type { PortfolioProject } from "@/data/portfolioProjects";

type Variant = PortfolioProject["thumbnail"];

const images: Record<Variant, { src: string; alt: string }> = {
  service: { src: "/portfolio/local-service-company.png", alt: "Local Service Company Website sample project preview" },
  manufacturing: {
    src: "/portfolio/b2b-manufacturer.png",
    alt: "B2B Manufacturer SEO Program sample project preview",
  },
  corporate: {
    src: "/portfolio/professional-firm.png",
    alt: "Professional Firm Ranking Project sample project preview",
  },
  ecommerce: { src: "/portfolio/ecommerce-redesign.png", alt: "Ecommerce Store SEO & Redesign sample project preview" },
  restaurant: {
    src: "/portfolio/restaurant-growth.png",
    alt: "Local Restaurant Growth Website sample project preview",
  },
  saas: { src: "/portfolio/saas-seo-strategy.png", alt: "SaaS Website SEO Strategy sample project preview" },
  realestate: {
    src: "/portfolio/real-estate-optimization.png",
    alt: "Real Estate Website Optimization sample project preview",
  },
  healthcare: {
    src: "/portfolio/healthcare-seo.png",
    alt: "Healthcare Website SEO Foundation sample project preview",
  },
  transformation: {
    src: "/portfolio/business-website-transformation.png",
    alt: "Business Website Transformation concept project preview",
  },
};

export function ProjectThumbnail({
  variant,
  featured = false,
}: {
  variant: Variant;
  featured?: boolean;
}) {
  const image = images[variant];

  return (
    <div
      className={`relative overflow-hidden ${featured ? "h-56 md:h-64" : "h-44"} ${
        featured
          ? "bg-gradient-to-br from-navy via-primary to-[color-mix(in_oklab,var(--color-primary)_65%,white)]"
          : "bg-brand-soft"
      }`}
    >
      <img
        src={image.src}
        alt={image.alt}
        loading="lazy"
        decoding="async"
        className="h-full w-full object-cover object-center transition-transform duration-500 ease-out group-hover:scale-[1.06]"
      />
    </div>
  );
}
