import { Quote } from "lucide-react";
import useScrollReveal from "@/hooks/useScrollReveal";

interface Props {
  quote: string;
  author?: string;
  role?: string;
  variant?: "default" | "compact";
}

export default function Testimonial({ quote, author, role, variant = "default" }: Props) {
  if (variant === "compact") {
    return (
      <figure className="relative bg-card border border-border rounded-2xl p-8 shadow-soft h-full">
        <Quote className="text-primary/20 absolute top-6 right-6" size={40} />
        <blockquote className="font-display text-lg md:text-xl text-secondary leading-snug relative z-10">
          &ldquo;{quote}&rdquo;
        </blockquote>
        {(author || role) && (
          <figcaption className="mt-5 text-sm text-muted-foreground">
            {author && <span className="font-medium text-secondary">{author}</span>}
            {role && <span> · {role}</span>}
          </figcaption>
        )}
      </figure>
    );
  }

  const ref = useScrollReveal<HTMLElement>();

  return (
    <section ref={ref} className="container py-20 md:py-28">
      <figure data-reveal="blur" className="max-w-4xl mx-auto text-center">
        <Quote className="mx-auto text-primary mb-6" size={48} />
        <blockquote className="font-display text-2xl md:text-4xl text-secondary leading-tight text-balance">
          &ldquo;{quote}&rdquo;
        </blockquote>
        {(author || role) && (
          <figcaption className="mt-8 text-sm text-muted-foreground">
            {author && <span className="font-medium text-secondary">{author}</span>}
            {role && <span> · {role}</span>}
          </figcaption>
        )}
      </figure>
    </section>
  );
}
