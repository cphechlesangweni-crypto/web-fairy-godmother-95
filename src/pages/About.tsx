import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import PageHero from "@/components/PageHero";
import SectionHeading from "@/components/SectionHeading";
import CTABanner from "@/components/CTABanner";
import Team from "@/components/Team";
import founderImage from "@/assets/team-sphesihle.jpg";

const values = [
  { word: "Growth", description: "We help businesses grow by removing the operational drag that prevents focus on what matters." },
  { word: "Finance", description: "Structured financial processes — invoice capture, payment control and audit-ready records — embedded into every engagement." },
  { word: "Empowerment", description: "We empower leadership teams to lead, by taking the high-risk operational functions off their plate." },
  { word: "Trust", description: "Full ownership, immutable audit trails and transparent pricing. Trust is built by what we are accountable for." },
];

export default function About() {
  return (
    <>
      <PageHero
        eyebrow="About SeedCapital Group"
        title={<>Operations & compliance, <em className="italic text-primary-glow">run as a discipline.</em></>}
        description="SeedCapital Group is a South African operations and compliance partner. We take responsibility for the high-risk business functions our clients can no longer afford to manage in-house."
      />

      {/* Story */}
      <section className="container py-20 md:py-28 grid lg:grid-cols-2 gap-12 lg:gap-20 items-start">
        <div>
          <span className="text-xs uppercase tracking-[0.22em] text-primary font-semibold">Our story</span>
          <h2 className="font-display text-3xl md:text-5xl text-secondary mt-5 leading-[1.1] text-balance">
            Founded to fix the operational gap inside South African business.
          </h2>
        </div>
        <div className="space-y-5 text-muted-foreground text-base md:text-lg leading-relaxed">
          <p>
            Most South African businesses don't have an operations problem because they're badly run. They have it because the legal, compliance and process burden of running facilities, payroll and accounts payable in-house is now beyond what a single internal hire can carry.
          </p>
          <p>
            SeedCapital Group exists to take those functions over completely — using structured systems, proprietary platforms and a single point of accountability — so leadership teams can stop fire-fighting and start operating.
          </p>
          <p>
            We are <span className="text-secondary font-medium">not a cleaning company. Not a payroll bureau. Not a bookkeeper.</span> We are an operations and compliance partner — and we are accountable for the outcome.
          </p>
        </div>
      </section>

      {/* Values */}
      <section className="bg-secondary text-secondary-foreground">
        <div className="container py-20 md:py-28">
          <SectionHeading
            eyebrow="Our values"
            title={<span className="text-secondary-foreground">Growth · Finance · Empowerment · Trust</span>}
            description={<span className="text-secondary-foreground/70">The four words below our logo are not decoration — they describe what we are accountable for.</span>}
            align="center"
            className="mb-16"
          />
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((v, i) => (
              <div key={i} className="bg-secondary-foreground/5 border border-secondary-foreground/10 rounded-2xl p-7">
                <div className="font-display text-3xl text-primary-glow mb-3">{v.word}</div>
                <p className="text-sm text-secondary-foreground/75 leading-relaxed">{v.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Founder */}
      <section className="container py-20 md:py-28">
        <div className="bg-card border border-border rounded-3xl p-10 md:p-16 shadow-elegant">
          <div className="grid md:grid-cols-[auto_1fr] gap-10 items-center">
            <div className="w-32 h-32 md:w-40 md:h-40 rounded-full bg-primary-gradient text-primary-foreground flex items-center justify-center font-display text-5xl shadow-brand">
              SM
            </div>
            <div>
              <span className="text-xs uppercase tracking-[0.22em] text-primary font-semibold">Founder</span>
              <h3 className="font-display text-3xl md:text-4xl text-secondary mt-3">Sphesihle P. Makhanya</h3>
              <p className="text-muted-foreground mt-2">Founder & CEO · SeedCapital Group (Pty) Ltd</p>
              <p className="mt-5 text-base md:text-lg text-secondary/80 leading-relaxed max-w-2xl">
                "We started SeedCapital because every conversation with a business owner ended the same way: 'I shouldn't be the one dealing with this.' Our job is to make sure they never have to again."
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* What we do */}
      <section className="container pb-20 md:pb-28">
        <SectionHeading
          eyebrow="What we run"
          title="Three pillars. One operations partner."
          align="center"
          className="mb-12"
        />
        <div className="grid md:grid-cols-3 gap-5">
          {[
            { title: "Facilities & Workforce", href: "/facilities", desc: "Employer-of-record workforce management, daily operations and consumables supply." },
            { title: "Payroll Outsourcing", href: "/payroll", desc: "Full payroll function ownership — Payroll Intelligence, statutory submissions, labour-law triggers." },
            { title: "Accounts Payable", href: "/accounts-payable", desc: "AP Control — invoice capture, supplier verification, payment runs and reconciliations." },
          ].map((p) => (
            <Link key={p.href} to={p.href} className="group bg-card border border-border rounded-2xl p-7 shadow-soft hover:shadow-elegant transition-all hover:-translate-y-0.5">
              <h3 className="font-display text-xl text-secondary mb-3">{p.title}</h3>
              <p className="text-sm text-muted-foreground mb-6 leading-relaxed">{p.desc}</p>
              <span className="inline-flex items-center gap-1.5 text-sm text-primary font-medium group-hover:gap-2.5 transition-all">
                Learn more <ArrowRight size={14} />
              </span>
            </Link>
          ))}
        </div>
      </section>

      <CTABanner
        eyebrow="Let's talk"
        title="Ready to take a function off your plate?"
        description="Book a free discovery call and we'll show you exactly where you're exposed and what a structured, outsourced model looks like."
      />
    </>
  );
}
