import type { PortfolioProject } from "@/data/portfolioProjects";

import localService from "@/assets/portfolio/local-service.png.asset.json";
import manufacturing from "@/assets/portfolio/manufacturing.png.asset.json";
import professional from "@/assets/portfolio/professional.png.asset.json";
import ecommerce from "@/assets/portfolio/ecommerce.png.asset.json";
import restaurant from "@/assets/portfolio/restaurant.jpg.asset.json";
import saas from "@/assets/portfolio/saas.png.asset.json";
import realestate from "@/assets/portfolio/realestate.png.asset.json";
import healthcare from "@/assets/portfolio/healthcare.png.asset.json";
import transformation from "@/assets/portfolio/transformation.png.asset.json";

type Variant = PortfolioProject["thumbnail"];

const images: Record<Variant, { src: string; alt: string }> = {
  service: { src: localService.url, alt: "Local Service Company Website sample project preview" },
  manufacturing: {
    src: manufacturing.url,
    alt: "B2B Manufacturer SEO Program sample project preview",
  },
  corporate: {
    src: professional.url,
    alt: "Professional Firm Ranking Project sample project preview",
  },
  ecommerce: { src: ecommerce.url, alt: "Ecommerce Store SEO & Redesign sample project preview" },
  restaurant: {
    src: restaurant.url,
    alt: "Local Restaurant Growth Website sample project preview",
  },
  saas: { src: saas.url, alt: "SaaS Website SEO Strategy sample project preview" },
  realestate: {
    src: realestate.url,
    alt: "Real Estate Website Optimization sample project preview",
  },
  healthcare: {
    src: healthcare.url,
    alt: "Healthcare Website SEO Foundation sample project preview",
  },
  transformation: {
    src: transformation.url,
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
