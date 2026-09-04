import type { PortfolioProject } from "@/data/portfolioProjects";

type Variant = PortfolioProject["thumbnail"];

const labels: Record<Variant, string> = {
  service: "Service business website mockup",
  manufacturing: "B2B industrial website mockup",
  corporate: "Corporate website mockup",
  ecommerce: "Online store interface mockup",
  restaurant: "Restaurant website interface mockup",
  saas: "SaaS dashboard interface mockup",
  realestate: "Property listing website mockup",
  healthcare: "Healthcare website interface mockup",
  transformation: "Before and after website redesign mockup",
};

function Bar({ x, y, w, h, o = 0.35 }: { x: number; y: number; w: number; h: number; o?: number }) {
  return <rect x={x} y={y} width={w} height={h} rx={h / 2} fill="currentColor" opacity={o} />;
}

function Block({
  x,
  y,
  w,
  h,
  o = 0.16,
  r = 6,
}: {
  x: number;
  y: number;
  w: number;
  h: number;
  o?: number;
  r?: number;
}) {
  return <rect x={x} y={y} width={w} height={h} rx={r} fill="currentColor" opacity={o} />;
}

function Body({ variant }: { variant: Variant }) {
  switch (variant) {
    case "service":
      return (
        <>
          <Block x={20} y={44} w={130} h={54} o={0.2} />
          <Bar x={20} y={108} w={96} h={7} />
          <Bar x={20} y={122} w={140} h={5} o={0.2} />
          <Block x={166} y={44} w={94} h={83} o={0.12} />
          <Block x={20} y={140} w={76} h={38} />
          <Block x={104} y={140} w={76} h={38} />
          <Block x={188} y={140} w={72} h={38} />
        </>
      );
    case "manufacturing":
      return (
        <>
          <Block x={20} y={44} w={240} h={46} o={0.2} />
          <Block x={20} y={100} w={54} h={78} />
          <Block x={82} y={100} w={54} h={78} />
          <Block x={144} y={100} w={54} h={78} />
          <Block x={206} y={100} w={54} h={78} o={0.24} />
        </>
      );
    case "corporate":
      return (
        <>
          <Bar x={20} y={52} w={112} h={9} o={0.4} />
          <Bar x={20} y={70} w={160} h={6} o={0.22} />
          <Block x={20} y={88} w={70} h={22} o={0.3} />
          <Block x={196} y={44} w={64} h={66} o={0.14} />
          <Block x={20} y={124} w={116} h={54} />
          <Block x={144} y={124} w={116} h={54} />
        </>
      );
    case "ecommerce":
      return (
        <>
          <Block x={20} y={44} w={54} h={134} o={0.12} />
          <Block x={84} y={44} w={80} h={62} />
          <Block x={172} y={44} w={88} h={62} />
          <Block x={84} y={116} w={80} h={62} />
          <Block x={172} y={116} w={88} h={62} o={0.24} />
        </>
      );
    case "restaurant":
      return (
        <>
          <Block x={20} y={44} w={240} h={62} o={0.22} />
          <Bar x={20} y={118} w={90} h={8} />
          <Bar x={20} y={134} w={150} h={5} o={0.2} />
          <Bar x={20} y={148} w={130} h={5} o={0.2} />
          <Block x={186} y={116} w={74} h={62} o={0.14} />
          <Block x={20} y={162} w={140} h={16} o={0.28} />
        </>
      );
    case "saas":
      return (
        <>
          <Block x={20} y={44} w={62} h={134} o={0.12} />
          <Block x={92} y={44} w={168} h={40} o={0.18} />
          <Block x={92} y={94} w={78} h={84} />
          <Block x={180} y={94} w={80} h={84} o={0.24} />
          <Bar x={104} y={150} w={54} h={6} o={0.3} />
        </>
      );
    case "realestate":
      return (
        <>
          <Block x={20} y={44} w={240} h={22} o={0.18} />
          <Block x={20} y={76} w={112} h={48} />
          <Block x={148} y={76} w={112} h={48} />
          <Block x={20} y={132} w={112} h={46} o={0.24} />
          <Block x={148} y={132} w={112} h={46} />
        </>
      );
    case "healthcare":
      return (
        <>
          <Block x={20} y={44} w={150} h={58} o={0.2} />
          <Block x={182} y={44} w={78} h={58} o={0.12} />
          <Bar x={20} y={114} w={104} h={8} />
          <Block x={20} y={132} w={72} h={46} />
          <Block x={100} y={132} w={72} h={46} />
          <Block x={180} y={132} w={80} h={46} o={0.24} />
        </>
      );
    case "transformation":
      return (
        <>
          <Block x={20} y={44} w={112} h={134} o={0.1} />
          <Bar x={32} y={60} w={62} h={6} o={0.25} />
          <Bar x={32} y={74} w={86} h={5} o={0.18} />
          <Bar x={32} y={86} w={74} h={5} o={0.18} />
          <rect x={138} y={44} width={4} height={134} rx={2} fill="currentColor" opacity={0.25} />
          <Block x={148} y={44} w={112} h={70} o={0.28} />
          <Block x={148} y={122} w={52} h={56} />
          <Block x={208} y={122} w={52} h={56} />
        </>
      );
  }
}

export function ProjectThumbnail({
  variant,
  featured = false,
}: {
  variant: Variant;
  featured?: boolean;
}) {
  return (
    <div
      className={`relative h-44 overflow-hidden ${
        featured
          ? "bg-gradient-to-br from-navy via-primary to-[color-mix(in_oklab,var(--color-primary)_65%,white)]"
          : "bg-gradient-to-br from-brand-soft via-surface to-card"
      }`}
    >
      <svg
        viewBox="0 0 280 200"
        role="img"
        aria-label={labels[variant]}
        className={`h-full w-full transition-transform duration-500 ease-out group-hover:scale-[1.06] ${
          featured ? "text-navy-foreground" : "text-primary"
        }`}
      >
        <rect
          x={8}
          y={12}
          width={264}
          height={180}
          rx={14}
          fill="currentColor"
          opacity={featured ? 0.14 : 0.07}
        />
        <rect
          x={8}
          y={12}
          width={264}
          height={180}
          rx={14}
          fill="none"
          stroke="currentColor"
          strokeOpacity={0.25}
        />
        <circle cx={26} cy={28} r={4} fill="currentColor" opacity={0.4} />
        <circle cx={40} cy={28} r={4} fill="currentColor" opacity={0.28} />
        <circle cx={54} cy={28} r={4} fill="currentColor" opacity={0.28} />
        <Bar x={72} y={24} w={182} h={8} o={0.14} />
        <Body variant={variant} />
      </svg>
    </div>
  );
}
