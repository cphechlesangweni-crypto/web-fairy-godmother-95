import { Users, Shield, ClipboardCheck, Package, Eye, TrendingUp } from "lucide-react";
import ServicePage from "@/components/ServicePage";
import facilitiesImage from "@/assets/facilities.jpg";

export default function Facilities() {
  return (
    <ServicePage
      eyebrow="Facilities & Workforce"
      heroImage={facilitiesImage}
      heroImageAlt="SeedCapital facilities team supervising operations in a hotel lobby"
      heroTitle={<>Fully managed facilities. <em className="italic text-primary-glow">Workforce, compliance, supply.</em></>}
      heroDescription="We become your employer of record — recruiting, supervising and managing facilities staff, while running daily operations and consumables supply. So you can focus on running your business."
      ctaLabel="Clean up your operations"
      ctaTagline="Let's clean up your operations."
      problemTitle="Managing facilities in-house is costing you more than you think."
      problemIntro="Most businesses don't realise how much time, money and legal risk is buried in their facilities operations."
      problems={[
        { title: "Labour law exposure", description: "Non-compliant contracts, missed UIF/COIDA contributions and incorrect deductions create serious legal risk." },
        { title: "High staff turnover", description: "Without proper workforce management, recruitment cycles are constant — costing time and leaving sites understaffed." },
        { title: "Compliance burden", description: "Payroll, statutory deductions, contracts, annual bonuses — the admin is enormous and the penalties are severe." },
        { title: "No oversight or reporting", description: "No visibility into attendance, performance or service quality — problems only surface when something goes wrong." },
        { title: "Hidden cost escalation", description: "Salary increases, overtime, equipment replacement and ad-hoc purchases make it impossible to budget accurately." },
        { title: "Consumables chaos", description: "Inconsistent procurement leads to stock-outs, over-spending and staff using the wrong products for the job." },
      ]}
      scopeTitle="We manage your entire facilities operation."
      scopeIntro="From workforce outsourcing and compliance to daily operations and supply management — we handle everything. You set the standard. We make sure it is met every day."
      features={[
        { icon: Users, title: "Workforce outsourcing", description: "Recruitment, placement, onboarding and daily supervision of facilities staff — fully managed." },
        { icon: Shield, title: "Payroll & HR compliance", description: "Full payroll, employment contracts, UIF, COIDA, statutory compliance — all handled by us." },
        { icon: ClipboardCheck, title: "Operations management", description: "Cleaning schedules, site planning, quality inspections and performance reporting." },
        { icon: Package, title: "Consumables & equipment", description: "Cleaning products, materials and equipment — supplied, tracked and restocked on schedule." },
        { icon: Eye, title: "Governance & compliance", description: "Labour law adherence, segregation of duties and audit-ready documentation." },
        { icon: TrendingUp, title: "Continuous optimisation", description: "Monthly performance reviews, cost optimisation and service enhancement." },
      ]}
      youDo={[
        "Set the cleaning standard and schedule",
        "Approve payment runs and monthly reports",
        "Notify us of site changes or requirements",
        "Provide site access to our team",
        "Focus on running your business",
      ]}
      weDo={[
        "Recruit, vet and place facilities staff",
        "Issue employment contracts and onboard staff",
        "Process full monthly payroll",
        "Submit UIF, COIDA and statutory deductions",
        "Manage daily attendance and performance",
        "Conduct quality inspections and site audits",
        "Source, supply and restock all consumables",
        "Handle all HR queries and disciplinary matters",
        "Provide weekly and monthly operational reports",
        "Maintain full compliance documentation",
      ]}
      testimonial="SeedCapital transformed how we manage our facilities. From staff to compliance and daily operations — everything is structured, monitored, and professionally managed."
      whyTitle="Why SeedCapital — not a traditional cleaning company"
      whyPoints={[
        { title: "Employer of record — not a labour broker", description: "SeedCapital acts as the employer. All employment risk, compliance obligations and labour-law exposure sits with us — not you. No CCMA liability, no employment disputes landing on your desk." },
        { title: "Workforce outsourcing — not just cleaning", description: "Every site has a defined schedule, quality inspection regime and reporting framework. We manage the operation like a business — not like a headcount." },
        { title: "Real-time visibility into your operations", description: "Monthly operational reports, attendance records, consumables usage and service quality data. You always know exactly what is happening on your site." },
        { title: "One point of contact — full accountability", description: "No chasing suppliers, no HR disputes, no compliance paperwork. One account manager owns the entire function on your behalf." },
      ]}
      faqItems={[
        {
          q: "What does your Facilities service include?",
          a: [
            "Workforce — recruitment, onboarding, supervision",
            "Payroll & compliance — UIF, COIDA, contracts",
            "Daily operations & quality control",
            "Consumables & equipment supply",
          ],
        },
        {
          q: "Do you become the employer?",
          a: [
            "Yes — SeedCapital acts as the employer of record, taking on:",
            "Labour law compliance",
            "Payroll obligations",
            "Employee risk and disputes",
          ],
        },
        {
          q: "What industries do you work with?",
          a: ["Hospitality (hotels, guesthouses, B&Bs)", "Corporate offices", "Retail & malls", "NPOs, schools, clinics & institutions"],
        },
        {
          q: "How does pricing work?",
          a: "We separate direct staff costs (salaries, UIF, COIDA, provident fund, bonuses — charged at cost, fully transparent) from our Management & Operations Fee. You see exactly what you're paying for, with no hidden margins on staff costs.",
        },
        {
          q: "How long does implementation take?",
          a: "Four weeks is standard: site assessment & compliance audit, staff transfer & contract reissuing, payroll configuration, then full handover with first-run validation and sign-off.",
        },
        {
          q: "What if we already have facilities staff?",
          a: "Our Essential package is designed exactly for this — we take on workforce management, payroll, compliance and reporting for your existing team without disruption.",
        },
      ]}
    />
  );
}
