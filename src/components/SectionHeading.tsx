import { ReactNode } from "react";

interface Props {
  eyebrow?: string;
  title: ReactNode;
  description?: ReactNode;
  align?: "left" | "center";
  className?: string;
}

export default function SectionHeading({ eyebrow, title, description, align = "left", className = "" }: Props) {
  const alignCls = align === "center" ? "text-center mx-auto" : "text-left";
  return (
    <div className={`max-w-3xl ${alignCls} ${className}`}>
      {eyebrow && (
        <span className="inline-block text-xs uppercase tracking-[0.22em] text-primary font-semibold mb-4">
          {eyebrow}
        </span>
      )}
      <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-medium text-secondary text-balance leading-[1.1]">
        {title}
      </h2>
      {description && (
        <p className="mt-5 text-base md:text-lg text-muted-foreground leading-relaxed text-balance">
          {description}
        </p>
      )}
    </div>
  );
}
