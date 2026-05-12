import { ReactNode } from "react";
import BlueprintGrid from "./BlueprintGrid";
import useScrollReveal from "@/hooks/useScrollReveal";

interface Props {
  eyebrow: string;
  title: ReactNode;
  description: ReactNode;
  children?: ReactNode;
  image?: string;
  imageAlt?: string;
}

export default function PageHero({ eyebrow, title, description, children, image, imageAlt }: Props) {
  const ref = useScrollReveal<HTMLElement>();
  const hasImage = Boolean(image);
  return (
    <section ref={ref} className="relative bg-background text-foreground overflow-hidden border-b border-border">
      <BlueprintGrid />
      <div className={`container relative py-20 md:py-28 ${hasImage ? "grid lg:grid-cols-[1.2fr_1fr] gap-12 items-center" : ""}`}>
        <div>
          <span data-reveal="fade-down" className="inline-block text-xs uppercase tracking-[0.22em] text-primary font-semibold mb-6">
            {eyebrow}
          </span>
          <h1 data-reveal="fade-up" data-reveal-delay="100" className={`font-display text-4xl md:text-5xl ${hasImage ? "lg:text-6xl" : "lg:text-7xl"} font-medium max-w-4xl text-balance leading-[1.05] text-secondary`}>
            {title}
          </h1>
          <p data-reveal="fade-up" data-reveal-delay="200" className="mt-6 max-w-2xl text-lg md:text-xl text-muted-foreground leading-relaxed">
            {description}
          </p>
          {children && <div data-reveal="fade-up" data-reveal-delay="350" className="mt-10">{children}</div>}
        </div>
        {hasImage && (
          <div className="relative" data-reveal="fade-left" data-reveal-delay="250">
            <div className="absolute -inset-4 bg-primary/10 rounded-[2rem] blur-2xl" />
            <div className="relative rounded-[1.5rem] overflow-hidden shadow-elegant border border-border aspect-square lg:aspect-[4/5]">
              <img
                src={image}
                alt={imageAlt || ""}
                width={1400}
                height={1000}
                loading="lazy"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-secondary/30 via-transparent to-transparent" />
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
