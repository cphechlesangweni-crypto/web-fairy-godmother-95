import { Linkedin, Mail } from "lucide-react";
import sphesihle from "@/assets/team-sphesihle.jpg";
import nomvula from "@/assets/team-nomvula.jpg";
import thandi from "@/assets/team-thandi.jpg";
import sipho from "@/assets/team-sipho.jpg";
import SectionHeading from "./SectionHeading";

const team = [
  {
    name: "Sphesihle P. Makhanya",
    role: "Founder & CEO",
    division: "Group leadership",
    bio: "Founded SeedCapital to take the high-risk operational functions off business owners' plates. Sets the strategy, owns client relationships at executive level.",
    image: sphesihle,
    email: "sphesihle.makhanya@seedcapitalgroup.co.za",
  },
  {
    name: "Nomvula Dlamini",
    role: "Head of Operations",
    division: "Facilities & Workforce",
    bio: "Runs the facilities and workforce division. Recruitment, supervision, quality inspections and labour-law compliance across every site we manage.",
    image: nomvula,
    email: "ops@seedcapitalgroup.co.za",
  },
  {
    name: "Thandi Naicker",
    role: "Head of Payroll & Compliance",
    division: "Payroll Outsourcing",
    bio: "Owns the payroll function end to end. SARS submissions, sectoral determination enforcement and the Payroll Intelligence engine sit on her desk.",
    image: thandi,
    email: "payroll@seedcapitalgroup.co.za",
  },
  {
    name: "Sipho Mthembu",
    role: "Head of Finance & AP",
    division: "Accounts Payable",
    bio: "Runs the AP Control platform and supplier verification programme. Designs the financial controls our clients pass through their auditors.",
    image: sipho,
    email: "ap@seedcapitalgroup.co.za",
  },
];

interface Props {
  variant?: "full" | "compact";
}

export default function Team({ variant = "full" }: Props) {
  return (
    <section className="container py-20 md:py-28">
      <SectionHeading
        eyebrow="Meet the team"
        title="The people accountable for your operations."
        description="One account manager for every engagement. Backed by division leads who own the function — not a faceless service desk."
        align="center"
        className="mb-16"
      />

      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {team.map((m) => (
          <article
            key={m.name}
            className="group bg-card border border-border rounded-3xl overflow-hidden shadow-soft hover:shadow-elegant transition-all duration-300"
          >
            <div className="aspect-[4/5] overflow-hidden bg-muted">
              <img
                src={m.image}
                alt={`${m.name}, ${m.role} at SeedCapital Group`}
                width={800}
                height={1000}
                loading="lazy"
                className="w-full h-full object-cover group-hover:scale-[1.03] transition-transform duration-500"
              />
            </div>
            <div className="p-6">
              <div className="text-[10px] uppercase tracking-[0.2em] text-primary font-bold mb-2">
                {m.division}
              </div>
              <h3 className="font-display text-xl text-secondary leading-tight">{m.name}</h3>
              <div className="text-sm text-muted-foreground mt-1">{m.role}</div>
              {variant === "full" && (
                <p className="text-sm text-secondary/75 mt-4 leading-relaxed">{m.bio}</p>
              )}
              <div className="mt-5 flex items-center gap-3 pt-4 border-t border-border">
                <a
                  href={`mailto:${m.email}`}
                  className="w-8 h-8 rounded-lg bg-muted hover:bg-primary hover:text-primary-foreground text-secondary flex items-center justify-center transition-colors"
                  aria-label={`Email ${m.name}`}
                >
                  <Mail size={14} />
                </a>
                <a
                  href="#"
                  className="w-8 h-8 rounded-lg bg-muted hover:bg-primary hover:text-primary-foreground text-secondary flex items-center justify-center transition-colors"
                  aria-label={`${m.name} on LinkedIn`}
                >
                  <Linkedin size={14} />
                </a>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
