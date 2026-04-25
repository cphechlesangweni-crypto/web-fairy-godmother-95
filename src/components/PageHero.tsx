import { ReactNode } from "react";

interface Props {
  eyebrow: string;
  title: ReactNode;
  description: ReactNode;
  children?: ReactNode;
}

export default function PageHero({ eyebrow, title, description, children }: Props) {
  return (
    <section className="relative bg-hero-gradient text-secondary-foreground overflow-hidden">
      <div className="absolute inset-0 opacity-[0.04]" style={{
        backgroundImage: 'radial-gradient(circle at 1px 1px, white 1px, transparent 0)',
        backgroundSize: '32px 32px',
      }} />
      <div className="absolute -top-40 -right-40 w-[500px] h-[500px] bg-primary/30 rounded-full blur-[120px]" />
      <div className="container relative py-24 md:py-32">
        <span className="inline-block text-xs uppercase tracking-[0.22em] text-primary-glow font-semibold mb-6">
          {eyebrow}
        </span>
        <h1 className="font-display text-4xl md:text-6xl lg:text-7xl font-medium max-w-4xl text-balance leading-[1.05]">
          {title}
        </h1>
        <p className="mt-6 max-w-2xl text-lg md:text-xl text-secondary-foreground/75 leading-relaxed">
          {description}
        </p>
        {children && <div className="mt-10">{children}</div>}
      </div>
    </section>
  );
}
