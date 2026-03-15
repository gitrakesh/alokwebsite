import { SectionHeading } from "@/components/ui/section-heading";
import { PortfolioFilter } from "@/components/sections/portfolio-filter";

export default function PortfolioPage() {
  return (
    <div className="mx-auto max-w-7xl px-4 py-12 md:px-8">
      <SectionHeading eyebrow="Our Works" title="A portfolio of music, film, and digital storytelling projects." />
      <PortfolioFilter />
    </div>
  );
}
