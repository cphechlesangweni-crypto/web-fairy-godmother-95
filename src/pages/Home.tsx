import { Link } from "react-router-dom";
import { ArrowRight, Sparkles, Shield, Eye, RefreshCw, Cog, Building2, Users, Wallet, Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import SectionHeading from "@/components/SectionHeading";
import Testimonial from "@/components/Testimonial";
import CTABanner from "@/components/CTABanner";
import FAQ from "@/components/FAQ";
import Team from "@/components/Team";
import heroImage from "@/assets/hero-operations.jpg";

const pillars = [
  {
    icon: Building2,
    tag: "Pillar 01",
    title: "Facilities & Workforce",
    tagline: "Clean, compliant, fully managed operations.",
    description:
      "We become your employer of record — recruiting, supervising and managing facilities staff while running daily operations and consumables supply.",
    href: "/facilities",
    cta: "Clean up your operations",
  },
  {
    icon: Users,
    tag: "Pillar 02",
    title: "Payroll Outsourcing",
    tagline: "Accuracy, compliance, zero risk.",
    description:
      "Powered by our Payroll Intelligence engine — minimum wage enforcement, fraud detection, statutory submissions and labour-law triggers continuously monitored.",
    href: "/payroll",
    cta: "Take payroll off your plate",
  },
  {
    icon: Wallet,
    tag: "Pillar 03",
    title: "Accounts Payable",
    tagline: "Control, visibility, automation.",
    description:
      "AP Control — our AI-powered platform — handles invoice capture, supplier verification, fraud checks, payment runs, reconciliations and audit-ready reporting.",
    href: "/accounts-payable",
    cta: "Take control of your AP",
  },
];

const whySeed = [
  { icon: Shield, title: "We take full ownership", description: "Not a software vendor, not a labour broker. We own the function and we are accountable for the outcome." },
  { icon: Cog, title: "We reduce compliance risk", description: "SARS, CIPC, B-BBEE, BCEA, COIDA, sectoral determinations — embedded in every workflow, not bolted on." },
  { icon: Eye, title: "We provide real-time visibility", description: "Live dashboards, monthly compliance scorecards and operational reports. You always know exactly where you stand." },
  { icon: RefreshCw, title: "We ensure business continuity", description: "No key-person dependency. No interruption when staff are sick, resign or are unavailable. Ever." },
  { icon: Sparkles, title: "We operate with structured systems", description: "Proprietary platforms — Payroll Intelligence and AP Control — combined with audit-ready process design." },
  { icon: Check, title: "We are an operations partner", description: "Not a cleaning company. Not a payroll bureau. Not a bookkeeper. A complete operations and compliance partner." },
];

const homeTestimonials = [
  { quote: "SeedCapital transformed how we manage our facilities. From staff to compliance and daily operations — everything is structured, monitored, and professionally managed.", role: "Operations Director, Hospitality" },
  { quote: "We no longer worry about payroll compliance or errors. SeedCapital took full ownership, and everything runs accurately every month.", role: "Finance Manager, Retail Group" },
  { quote: "Our invoice process used to be chaotic. SeedCapital brought control, visibility, and structure — we now have real-time insight into our cash flow.", role: "CFO, NPO" },
];

const generalFAQ = [
  {
    q: "What does SeedCapital Group do?",
    a: [
      "Facilities & Workforce Management — staff, supervision, compliance and supply",
      "Payroll & Compliance — full payroll function ownership and statutory submissions",
      "Accounts Payable — invoice processing, supplier verification, payment runs and reconciliations",
      "We take full responsibility for critical business functions — so you don't have to.",
    ],
  },
  { q: "How is SeedCapital different from a cleaning company, payroll bureau or bookkeeper?", a: "Those providers each handle a single transactional task. SeedCapital is an operations and compliance partner — we take ownership of complete business functions, manage the people, the systems and the compliance risk, and we are accountable for the outcome." },
  { q: "How quickly can you take over a function?", a: "Our standard implementation is four weeks: discovery, supplier or staff onboarding, parallel run, then full handover. We move faster where the urgency calls for it." },
  { q: "Do we lose control of payments?", a: "No. You always approve payment runs and sign off on monthly reports. We handle every other step — capture, verification, compliance, scheduling, reconciliation, audit trail." },
  { q: "Where are you based and who do you serve?", a: "We are based in Westville, South Africa, and serve businesses nationwide across hospitality, retail, corporate offices, NPOs, government suppliers and growing SMEs." },
];

export default function Home() {
  return (
    <>
      {/* HERO */}
      <section className="relative bg-background text-foreground overflow-hidden border-b border-border">
        <div className="absolute inset-0 opacity-[0.5]" style={{
          backgroundImage: 'radial-gradient(circle at 1px 1px, hsl(var(--border)) 1px, transparent 0)',
          backgroundSize: '32px 32px',
        }} />
        <div className="absolute -top-40 -right-40 w-[600px] h-[600px] bg-primary/10 rounded-full blur-[140px]" />
        <div className="absolute -bottom-40 -left-40 w-[500px] h-[500px] bg-primary-glow/10 rounded-full blur-[120px]" />

        <div className="container relative pt-20 pb-24 md:pt-28 md:pb-32 grid lg:grid-cols-[1.15fr_1fr] gap-12 lg:gap-16 items-center">
          <div>
            <div className="inline-flex items-center gap-2 bg-muted border border-border rounded-full pl-2 pr-4 py-1.5 mb-8">
              <span className="bg-primary text-primary-foreground text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-full">New</span>
              <span className="text-xs text-muted-foreground">Operations & compliance partner — not a vendor</span>
            </div>

            <h1 className="font-display text-5xl md:text-6xl lg:text-7xl font-medium text-balance leading-[1.0] text-secondary">
              We take responsibility for your operations <em className="italic text-primary">— end to end.</em>
            </h1>

            <p className="mt-8 max-w-xl text-lg md:text-xl text-muted-foreground leading-relaxed">
              Facilities. Payroll. Accounts Payable. <br className="hidden sm:block" />
              <span className="text-secondary font-medium">Fully managed. Fully compliant.</span>
            </p>

            <div className="mt-10 flex flex-wrap gap-4">
              <Button asChild size="lg" className="bg-primary hover:bg-primary-glow text-primary-foreground rounded-full px-8 h-14 text-base">
                <Link to="/contact" className="inline-flex items-center gap-2">
                  Book a Discovery Call <ArrowRight size={18} />
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="bg-transparent border-border text-secondary hover:bg-muted rounded-full px-8 h-14 text-base">
                <a href="#solutions">Explore our solutions</a>
              </Button>
            </div>

            {/* Stats */}
            <div className="mt-14 grid grid-cols-2 md:grid-cols-4 gap-x-6 gap-y-8 border-t border-border pt-8">
              {[
                { v: "3", l: "Core operational pillars" },
                { v: "4 wk", l: "Standard implementation" },
                { v: "100%", l: "Compliance ownership" },
                { v: "0", l: "Key-person dependency" },
              ].map((s, i) => (
                <div key={i}>
                  <div className="font-display text-3xl md:text-4xl text-primary font-medium">{s.v}</div>
                  <div className="text-xs text-muted-foreground mt-2 leading-snug">{s.l}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Hero image */}
          <div className="relative lg:block">
            <div className="absolute -inset-6 bg-primary/10 rounded-[2rem] blur-2xl" />
            <div className="relative rounded-[1.75rem] overflow-hidden shadow-elegant border border-border aspect-[4/5] lg:aspect-[5/6]">
              <img
                src={heroImage}
                alt="SeedCapital Group consultants reviewing operations strategy"
                width={1600}
                height={1200}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-secondary/40 via-transparent to-transparent" />
              {/* Floating card */}
              <div className="absolute bottom-5 left-5 right-5 bg-background/95 backdrop-blur-md rounded-2xl p-4 border border-border shadow-soft">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-primary text-primary-foreground flex items-center justify-center shrink-0">
                    <Check size={18} />
                  </div>
                  <div>
                    <div className="text-xs text-muted-foreground">Live engagement</div>
                    <div className="text-sm font-medium text-secondary leading-tight">Compliance score 98% · Payroll on schedule</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* THREE PILLARS */}
      <section id="solutions" className="container py-24 md:py-32">
        <SectionHeading
          eyebrow="Your 3 Core Solutions"
          title="Three high-risk functions. One operations partner."
          description="Each pillar solves a distinct business risk — we run them with structure, compliance and full accountability."
          align="center"
          className="mb-16"
        />

        <div className="grid lg:grid-cols-3 gap-6">
          {pillars.map((p) => {
            const Icon = p.icon;
            return (
              <Link
                key={p.href}
                to={p.href}
                className="group relative bg-card border border-border rounded-3xl p-8 md:p-10 shadow-soft hover:shadow-elegant transition-all duration-300 hover:-translate-y-1 flex flex-col"
              >
                <div className="flex items-center justify-between mb-8">
                  <span className="text-[10px] uppercase tracking-[0.22em] text-primary font-bold">{p.tag}</span>
                  <Icon className="text-primary/40 group-hover:text-primary transition-colors" size={28} />
                </div>
                <h3 className="font-display text-3xl text-secondary mb-3 leading-tight">{p.title}</h3>
                <p className="text-primary font-medium text-sm mb-4">{p.tagline}</p>
                <p className="text-muted-foreground text-sm leading-relaxed mb-8 flex-1">{p.description}</p>
                <div className="inline-flex items-center gap-2 text-secondary font-medium text-sm group-hover:text-primary transition-colors">
                  {p.cta} <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                </div>
              </Link>
            );
          })}
        </div>
      </section>

      {/* POSITIONING */}
      <section className="bg-secondary text-secondary-foreground">
        <div className="container py-24 md:py-32 grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <span className="text-xs uppercase tracking-[0.22em] text-primary-glow font-semibold">Positioning</span>
            <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-medium mt-5 leading-[1.05] text-balance">
              We are not a cleaning company. <br />
              Not a payroll bureau. <br />
              Not a bookkeeper.
            </h2>
            <p className="mt-6 text-lg text-secondary-foreground/75 leading-relaxed max-w-lg">
              We are an <span className="text-primary-glow font-medium">operations and compliance partner</span> — taking over complex, high-risk business functions and running them properly.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 gap-4">
            {[
              { v: "Full", l: "Function ownership", d: "Not piecemeal. We own the outcome." },
              { v: "Live", l: "Compliance dashboards", d: "Real-time visibility, every month." },
              { v: "Audit", l: "Ready by design", d: "Immutable trails and structured documentation." },
              { v: "One", l: "Point of accountability", d: "One account manager. One escalation path." },
            ].map((c, i) => (
              <div key={i} className="bg-secondary-foreground/5 border border-secondary-foreground/10 rounded-2xl p-6">
                <div className="font-display text-3xl text-primary-glow">{c.v}</div>
                <div className="font-medium text-secondary-foreground mt-1">{c.l}</div>
                <div className="text-xs text-secondary-foreground/60 mt-2 leading-relaxed">{c.d}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WHY SEEDCAPITAL */}
      <section className="container py-24 md:py-32">
        <SectionHeading
          eyebrow="Why SeedCapital"
          title="Built like an operations team. Run like a discipline."
          description="Six principles that make us different from any single-service vendor."
          align="center"
          className="mb-16"
        />
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {whySeed.map((w, i) => {
            const Icon = w.icon;
            return (
              <div key={i} className="bg-card border border-border rounded-2xl p-7 shadow-soft hover:shadow-elegant transition-shadow">
                <div className="w-12 h-12 rounded-xl bg-primary/10 text-primary flex items-center justify-center mb-5">
                  <Icon size={22} />
                </div>
                <h3 className="font-display text-xl text-secondary mb-2">{w.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{w.description}</p>
              </div>
            );
          })}
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="bg-muted/40 border-y border-border">
        <div className="container py-24 md:py-32">
          <SectionHeading
            eyebrow="In their words"
            title="Trusted across operations, finance and compliance."
            align="center"
            className="mb-16"
          />
          <div className="grid md:grid-cols-3 gap-6">
            {homeTestimonials.map((t, i) => (
              <Testimonial key={i} variant="compact" quote={t.quote} role={t.role} />
            ))}
          </div>
        </div>
      </section>

      <Team />

      <FAQ eyebrow="General FAQ" title="What people ask before getting started" items={generalFAQ} />

      <CTABanner
        eyebrow="Let's begin"
        title="Let's build a smarter, more compliant operation."
        description="A free discovery call: full business assessment, cost & risk analysis, and a tailored 4-week implementation plan."
      />
    </>
  );
}
