import { ReactNode } from "react";
import { Link } from "react-router-dom";
import { Check, ArrowRight, type LucideIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import PageHero from "@/components/PageHero";
import SectionHeading from "@/components/SectionHeading";
import FAQ, { FAQItem } from "@/components/FAQ";
import Testimonial from "@/components/Testimonial";
import CTABanner from "@/components/CTABanner";
import useScrollReveal from "@/hooks/useScrollReveal";

export interface ServiceFeature {
  icon: LucideIcon;
  title: string;
  description: string;
}

export interface ProcessStep {
  label: string;
  title: string;
  you: string;
  us: string;
}

export interface ServicePageProps {
  eyebrow: string;
  heroTitle: ReactNode;
  heroDescription: string;
  heroImage?: string;
  heroImageAlt?: string;
  ctaLabel: string;
  ctaTagline: string;
  problemTitle: string;
  problemIntro: string;
  problems: { title: string; description: string }[];
  scopeTitle: string;
  scopeIntro: string;
  features: ServiceFeature[];
  process?: ProcessStep[];
  youDo: string[];
  weDo: string[];
  testimonial: string;
  faqItems: FAQItem[];
  whyTitle: string;
  whyPoints: { title: string; description: string }[];
}

export default function ServicePage(p: ServicePageProps) {
  const problemRef = useScrollReveal<HTMLElement>();
  const scopeRef = useScrollReveal<HTMLElement>();
  const processRef = useScrollReveal<HTMLElement>();
  const divisionRef = useScrollReveal<HTMLElement>();
  const whyRef = useScrollReveal<HTMLElement>();

  return (
    <>
      <PageHero
        eyebrow={p.eyebrow}
        title={p.heroTitle}
        description={p.heroDescription}
        image={p.heroImage}
        imageAlt={p.heroImageAlt}
      >
        <div className="flex flex-wrap gap-4">
          <Button asChild size="lg" className="bg-primary hover:bg-primary-glow text-primary-foreground rounded-full px-8 h-14 text-base">
            <Link to="/contact" className="inline-flex items-center gap-2">
              {p.ctaLabel} <ArrowRight size={18} />
            </Link>
          </Button>
          <Button asChild size="lg" variant="outline" className="bg-transparent border-secondary-foreground/30 text-secondary-foreground hover:bg-secondary-foreground/10 rounded-full px-8 h-14 text-base">
            <a href="#how-it-works">See how it works</a>
          </Button>
        </div>
      </PageHero>

      {/* Problem */}
      <section ref={problemRef} className="container py-20 md:py-28">
        <div data-reveal="fade-up">
          <SectionHeading
            eyebrow="The risk you're carrying"
            title={p.problemTitle}
            description={p.problemIntro}
          />
        </div>
        <div className="mt-12 grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {p.problems.map((prob, i) => (
            <div key={i} data-reveal="fade-up" data-reveal-delay={String(i * 120)} className="bg-card border border-border rounded-2xl p-7 shadow-soft hover:shadow-elegant transition-shadow">
              <div className="w-10 h-10 rounded-full bg-destructive/10 text-destructive flex items-center justify-center font-display font-semibold mb-4">
                {String(i + 1).padStart(2, "0")}
              </div>
              <h3 className="font-display text-xl text-secondary mb-2">{prob.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{prob.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Scope / what we do */}
      <section ref={scopeRef} id="how-it-works" className="bg-muted/40 border-y border-border">
        <div className="container py-20 md:py-28">
          <div data-reveal="fade-up">
            <SectionHeading
              eyebrow="Our solution"
              title={p.scopeTitle}
              description={p.scopeIntro}
            />
          </div>
          <div className="mt-12 grid md:grid-cols-2 lg:grid-cols-3 gap-5">
            {p.features.map((f, i) => (
              <div key={i} data-reveal="fade-up" data-reveal-delay={String(i * 100)} className="bg-card rounded-2xl p-7 border border-border shadow-soft">
                <div className="w-12 h-12 rounded-xl bg-primary/10 text-primary flex items-center justify-center mb-5">
                  <f.icon size={22} />
                </div>
                <h3 className="font-display text-xl text-secondary mb-2">{f.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{f.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      {p.process && (
        <section ref={processRef} className="container py-20 md:py-28">
          <div data-reveal="fade-up">
            <SectionHeading
              eyebrow="The monthly rhythm"
              title="What working with us looks like"
              description="A simple, predictable cycle. You give us minimal input — we run the function end to end."
            />
          </div>
          <div className="mt-12 space-y-5">
            {p.process.map((s, i) => (
              <div key={i} data-reveal="fade-up" data-reveal-delay={String(i * 120)} className="grid lg:grid-cols-[180px_1fr] gap-6 lg:gap-10 bg-card border border-border rounded-2xl p-7 shadow-soft">
                <div>
                  <div className="text-xs uppercase tracking-[0.18em] text-primary font-semibold">{s.label}</div>
                  <div className="font-display text-2xl text-secondary mt-2 leading-tight">{s.title}</div>
                </div>
                <div className="grid md:grid-cols-2 gap-6 lg:border-l border-border lg:pl-10">
                  <div>
                    <div className="text-[11px] uppercase tracking-[0.18em] text-muted-foreground font-semibold mb-2">You</div>
                    <p className="text-sm text-secondary/80 leading-relaxed">{s.you}</p>
                  </div>
                  <div>
                    <div className="text-[11px] uppercase tracking-[0.18em] text-primary font-semibold mb-2">SeedCapital</div>
                    <p className="text-sm text-secondary/80 leading-relaxed">{s.us}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* You vs Us */}
      <section ref={divisionRef} className="bg-secondary text-secondary-foreground">
        <div className="container py-20 md:py-28">
          <div data-reveal="fade-up">
            <SectionHeading
              eyebrow="Division of responsibility"
              title={<span className="text-secondary-foreground">Your role is minimal — ours is full ownership</span>}
              description={<span className="text-secondary-foreground/70">No grey areas. No half-measures. We are accountable for the outcome.</span>}
            />
          </div>
          <div className="grid md:grid-cols-2 gap-6 mt-12">
            <div data-reveal="fade-right" data-reveal-delay="100" className="bg-secondary-foreground/5 border border-secondary-foreground/10 rounded-2xl p-8">
              <h3 className="font-display text-2xl mb-6">What YOU do</h3>
              <ul className="space-y-3">
                {p.youDo.map((item, i) => (
                  <li key={i} className="flex gap-3 text-secondary-foreground/85">
                    <Check className="text-primary-glow shrink-0 mt-0.5" size={18} />
                    <span className="text-sm">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div data-reveal="fade-left" data-reveal-delay="200" className="bg-primary/15 border border-primary-glow/30 rounded-2xl p-8">
              <h3 className="font-display text-2xl mb-6">What WE take responsibility for</h3>
              <ul className="space-y-3">
                {p.weDo.map((item, i) => (
                  <li key={i} className="flex gap-3 text-secondary-foreground/85">
                    <Check className="text-primary-glow shrink-0 mt-0.5" size={18} />
                    <span className="text-sm">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Why */}
      <section ref={whyRef} className="container py-20 md:py-28">
        <div data-reveal="fade-up">
          <SectionHeading
            eyebrow="Why SeedCapital"
            title={p.whyTitle}
            align="center"
          />
        </div>
        <div className="grid md:grid-cols-2 gap-5 mt-12 max-w-5xl mx-auto">
          {p.whyPoints.map((w, i) => (
            <div key={i} data-reveal="fade-up" data-reveal-delay={String(i * 100)} className="bg-card border border-border rounded-2xl p-8 shadow-soft">
              <div className="font-display text-2xl text-primary mb-1">0{i + 1}</div>
              <h3 className="font-display text-xl text-secondary mb-2">{w.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{w.description}</p>
            </div>
          ))}
        </div>
      </section>

      <Testimonial quote={p.testimonial} />

      <FAQ title="Frequently asked questions" items={p.faqItems} />

      <CTABanner
        eyebrow="Ready when you are"
        title={p.ctaTagline}
        description="Book a free, no-obligation discovery call. We'll review your current setup, identify your exposure, and show you what a structured outsourced model looks like."
        ctaLabel={p.ctaLabel}
      />
    </>
  );
}
