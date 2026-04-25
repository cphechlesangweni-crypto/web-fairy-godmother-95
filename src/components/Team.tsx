import { Linkedin, Mail } from "lucide-react";
import sphesihle from "@/assets/team-sphesihle.jpg";
import SectionHeading from "./SectionHeading";

const ceo = {
  name: "Sphesihle P. Makhanya",
  role: "Founder & CEO",
  division: "Group leadership",
  bio: "Founded SeedCapital to take the high-risk operational functions off business owners' plates. Sets the strategy, owns client relationships at executive level, and is personally accountable for every engagement we sign.",
  image: sphesihle,
  email: "sphesihle.makhanya@seedcapitalgroup.co.za",
};

interface Props {
  variant?: "full" | "compact";
}

export default function Team({ variant = "full" }: Props) {
  return (
    <section className="container py-20 md:py-28">
      <SectionHeading
        eyebrow="Leadership"
        title="One name on every engagement."
        description="Every client relationship is owned at executive level. No faceless service desk — direct line to the founder."
        align="center"
        className="mb-16"
      />

      <div className="max-w-3xl mx-auto">
        <article className="group bg-card border border-border rounded-3xl overflow-hidden shadow-soft hover:shadow-elegant transition-all duration-300 grid md:grid-cols-[minmax(0,2fr)_minmax(0,3fr)]">
          <div className="aspect-[4/5] md:aspect-auto overflow-hidden bg-muted">
            <img
              src={ceo.image}
              alt={`${ceo.name}, ${ceo.role} at SeedCapital Group`}
              width={800}
              height={1000}
              loading="lazy"
              className="w-full h-full object-cover group-hover:scale-[1.02] transition-transform duration-500"
            />
          </div>
          <div className="p-8 md:p-10 flex flex-col justify-center">
            <div className="text-[10px] uppercase tracking-[0.2em] text-primary font-bold mb-2">
              {ceo.division}
            </div>
            <h3 className="font-display text-2xl md:text-3xl text-secondary leading-tight">{ceo.name}</h3>
            <div className="text-sm text-muted-foreground mt-1">{ceo.role}</div>
            {variant === "full" && (
              <p className="text-sm md:text-base text-secondary/75 mt-5 leading-relaxed">{ceo.bio}</p>
            )}
            <div className="mt-6 flex items-center gap-3 pt-5 border-t border-border">
              <a
                href={`mailto:${ceo.email}`}
                className="w-9 h-9 rounded-lg bg-muted hover:bg-primary hover:text-primary-foreground text-secondary flex items-center justify-center transition-colors"
                aria-label={`Email ${ceo.name}`}
              >
                <Mail size={15} />
              </a>
              <a
                href="#"
                className="w-9 h-9 rounded-lg bg-muted hover:bg-primary hover:text-primary-foreground text-secondary flex items-center justify-center transition-colors"
                aria-label={`${ceo.name} on LinkedIn`}
              >
                <Linkedin size={15} />
              </a>
            </div>
          </div>
        </article>
      </div>
    </section>
  );
}
