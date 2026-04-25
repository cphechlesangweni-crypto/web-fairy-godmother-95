import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

interface Props {
  eyebrow?: string;
  title: string;
  description?: string;
  ctaLabel?: string;
}

export default function CTABanner({
  eyebrow = "Next step",
  title,
  description,
  ctaLabel = "Book a Discovery Call",
}: Props) {
  return (
    <section className="container py-20 md:py-28">
      <div className="relative overflow-hidden rounded-3xl bg-hero-gradient text-secondary-foreground p-10 md:p-16 shadow-elegant">
        <div className="absolute -bottom-32 -right-32 w-[400px] h-[400px] bg-primary/40 rounded-full blur-[100px]" />
        <div className="relative grid lg:grid-cols-[1fr_auto] gap-8 items-center">
          <div>
            <span className="text-xs uppercase tracking-[0.22em] text-primary-glow font-semibold">{eyebrow}</span>
            <h2 className="font-display text-3xl md:text-5xl font-medium mt-3 max-w-2xl text-balance leading-[1.1]">
              {title}
            </h2>
            {description && (
              <p className="mt-4 text-secondary-foreground/75 max-w-xl text-base md:text-lg">{description}</p>
            )}
          </div>
          <Button asChild size="lg" className="bg-background text-secondary hover:bg-background/90 rounded-full px-8 h-14 text-base font-medium shrink-0">
            <Link to="/contact" className="inline-flex items-center gap-2">
              {ctaLabel} <ArrowRight size={18} />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
