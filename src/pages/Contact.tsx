import { useState } from "react";
import { Phone, Mail, MapPin, Search, Calculator, FileCheck, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { toast } from "sonner";
import PageHero from "@/components/PageHero";
import SectionHeading from "@/components/SectionHeading";
import useScrollReveal from "@/hooks/useScrollReveal";

const benefits = [
  {
    icon: Search,
    title: "A full business assessment",
    items: ["Payroll compliance review", "Facilities audit", "Accounts payable process review"],
  },
  {
    icon: Calculator,
    title: "Cost & risk analysis",
    items: ["Where you're losing money", "Where you're exposed to compliance risk", "Honest comparison vs in-house cost"],
  },
  {
    icon: FileCheck,
    title: "A tailored proposal",
    items: ["Clear, transparent pricing", "Defined scope of work", "4-week implementation plan"],
  },
];

export default function Contact() {
  const [submitting, setSubmitting] = useState(false);
  const benefitsRef = useScrollReveal<HTMLElement>();
  const formRef = useScrollReveal<HTMLElement>();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitting(true);
    setTimeout(() => {
      setSubmitting(false);
      (e.target as HTMLFormElement).reset();
      toast.success("Thank you — we'll be in touch within one business day.");
    }, 800);
  };

  return (
    <>
      <PageHero
        eyebrow="Contact"
        title={<>Let's build a smarter, <em className="italic text-primary-glow">more compliant operation.</em></>}
        description="Whether you're struggling with workforce management, payroll compliance or financial processes — SeedCapital Group provides structured, fully managed solutions that reduce risk and improve efficiency."
      />

      {/* What you get */}
      <section ref={benefitsRef} className="container py-20 md:py-28">
        <div data-reveal="fade-up">
          <SectionHeading
            eyebrow="What you get when you contact us"
            title="A free, no-obligation discovery call."
            description="No hard sell. Just a structured conversation, an honest assessment and a clear written proposal."
            align="center"
            className="mb-16"
          />
        </div>
        <div className="grid md:grid-cols-3 gap-6">
          {benefits.map((b, i) => {
            const Icon = b.icon;
            return (
              <div key={i} data-reveal="fade-up" data-reveal-delay={String(i * 150)} className="bg-card border border-border rounded-2xl p-8 shadow-soft">
                <div className="w-12 h-12 rounded-xl bg-primary/10 text-primary flex items-center justify-center mb-5">
                  <Icon size={22} />
                </div>
                <h3 className="font-display text-xl text-secondary mb-4">{b.title}</h3>
                <ul className="space-y-2.5">
                  {b.items.map((it, j) => (
                    <li key={j} className="flex gap-2.5 text-sm text-muted-foreground">
                      <span className="text-primary mt-1.5 shrink-0">▸</span>
                      <span>{it}</span>
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>
      </section>

      {/* Form */}
      <section ref={formRef} className="container pb-24">
        <div className="grid lg:grid-cols-[1.2fr_1fr] gap-10 items-start">
          <div data-reveal="fade-right" className="bg-card border border-border rounded-3xl p-8 md:p-12 shadow-elegant">
            <h2 className="font-display text-3xl text-secondary mb-2">Book a discovery call</h2>
            <p className="text-muted-foreground mb-8">Send us a message and we'll respond within one business day.</p>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid sm:grid-cols-2 gap-5">
                <div className="space-y-2">
                  <Label htmlFor="name">Full name</Label>
                  <Input id="name" name="name" required placeholder="Your full name" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="company">Company</Label>
                  <Input id="company" name="company" required placeholder="Company name" />
                </div>
              </div>
              <div className="grid sm:grid-cols-2 gap-5">
                <div className="space-y-2">
                  <Label htmlFor="email">Email</Label>
                  <Input id="email" name="email" type="email" required placeholder="you@company.co.za" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="phone">Phone</Label>
                  <Input id="phone" name="phone" type="tel" placeholder="+27 ..." />
                </div>
              </div>

              <div className="space-y-3">
                <Label>Which solution interests you?</Label>
                <RadioGroup defaultValue="all" name="interest" className="grid sm:grid-cols-2 gap-2">
                  {[
                    { v: "facilities", l: "Facilities & Workforce" },
                    { v: "payroll", l: "Payroll Outsourcing" },
                    { v: "ap", l: "Accounts Payable" },
                    { v: "all", l: "All / not sure yet" },
                  ].map((o) => (
                    <Label
                      key={o.v}
                      htmlFor={`r-${o.v}`}
                      className="flex items-center gap-3 border border-border rounded-lg px-4 py-3 cursor-pointer hover:border-primary/50 hover:bg-muted/30 transition-colors [&:has([data-state=checked])]:border-primary [&:has([data-state=checked])]:bg-primary/5"
                    >
                      <RadioGroupItem value={o.v} id={`r-${o.v}`} />
                      <span className="text-sm font-normal">{o.l}</span>
                    </Label>
                  ))}
                </RadioGroup>
              </div>

              <div className="space-y-2">
                <Label htmlFor="message">Tell us briefly about your situation</Label>
                <Textarea id="message" name="message" required rows={5} placeholder="How many staff? What's working? What's not?" className="resize-none" />
              </div>

              <Button
                type="submit"
                size="lg"
                disabled={submitting}
                className="w-full bg-primary hover:bg-primary-dark rounded-full h-13 text-base"
              >
                {submitting ? "Sending..." : (
                  <span className="inline-flex items-center gap-2">
                    Request my discovery call <Send size={16} />
                  </span>
                )}
              </Button>

              <p className="text-xs text-muted-foreground text-center">
                No obligation. No hard sell. Just a conversation.
              </p>
            </form>
          </div>

          <div data-reveal="fade-left" data-reveal-delay="200" className="space-y-5 lg:sticky lg:top-28">
            <div className="bg-secondary text-secondary-foreground rounded-3xl p-8 shadow-elegant">
              <h3 className="font-display text-2xl mb-6">Reach us directly</h3>
              <ul className="space-y-5">
                <li className="flex gap-4">
                  <div className="w-10 h-10 rounded-lg bg-primary/20 text-primary-glow flex items-center justify-center shrink-0">
                    <Phone size={18} />
                  </div>
                  <div>
                    <div className="text-xs uppercase tracking-wider text-secondary-foreground/60 mb-0.5">Phone</div>
                    <a href="tel:+27766861638" className="font-medium hover:text-primary-glow">+27 76 686 1638</a>
                  </div>
                </li>
                <li className="flex gap-4">
                  <div className="w-10 h-10 rounded-lg bg-primary/20 text-primary-glow flex items-center justify-center shrink-0">
                    <Mail size={18} />
                  </div>
                  <div>
                    <div className="text-xs uppercase tracking-wider text-secondary-foreground/60 mb-0.5">Email</div>
                    <a href="mailto:info@seedcapitalgroup.co.za" className="font-medium hover:text-primary-glow break-all">info@seedcapitalgroup.co.za</a>
                    <div className="text-sm text-secondary-foreground/70 break-all">sphesihle.makhanya@seedcapitalgroup.co.za</div>
                  </div>
                </li>
                <li className="flex gap-4">
                  <div className="w-10 h-10 rounded-lg bg-primary/20 text-primary-glow flex items-center justify-center shrink-0">
                    <MapPin size={18} />
                  </div>
                  <div>
                    <div className="text-xs uppercase tracking-wider text-secondary-foreground/60 mb-0.5">Office</div>
                    <div className="font-medium">Westville, South Africa</div>
                  </div>
                </li>
              </ul>
            </div>

            <div className="bg-card border border-border rounded-3xl p-8 shadow-soft">
              <div className="text-xs uppercase tracking-[0.18em] text-primary font-bold mb-3">Founder</div>
              <div className="font-display text-xl text-secondary">Sphesihle P. Makhanya</div>
              <div className="text-sm text-muted-foreground">Founder | CEO · SeedCapital Group (Pty) Ltd</div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
