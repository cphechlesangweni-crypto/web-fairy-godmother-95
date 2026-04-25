import { FileText, ShieldCheck, CreditCard, RefreshCw, Lock, LineChart } from "lucide-react";
import ServicePage from "@/components/ServicePage";

export default function AccountsPayable() {
  return (
    <ServicePage
      eyebrow="Accounts Payable"
      heroTitle={<>Your AP function, run end to end. <em className="italic text-primary-glow">Powered by AP Control.</em></>}
      heroDescription="From the moment a supplier invoice arrives to the moment payment hits their account — we handle everything. You focus on running your business. We focus on running your AP."
      ctaLabel="Take control of your Accounts Payable"
      ctaTagline="Let's take AP off your plate."
      problemTitle="Managing AP in-house is draining your business."
      problemIntro="Every month, businesses waste time, money and management attention on problems that should not exist."
      problems={[
        { title: "Invoices pile up", description: "Capturing, matching and chasing approvals manually consumes days of your team's time every month." },
        { title: "Fraud & duplicate payments", description: "Without controls, the same invoice gets paid twice — or worse, bank details are swapped by fraudsters." },
        { title: "No audit trail", description: "When auditors ask who approved what and when, the answer is buried in email threads and WhatsApp." },
        { title: "Late payments hurt suppliers", description: "Poor AP processes damage supplier relationships and result in penalties, price increases or cut-off." },
        { title: "SARS & compliance exposure", description: "CIPC, VAT, B-BBEE — manual processes make it impossible to maintain consistent compliance monitoring." },
        { title: "Zero cash flow visibility", description: "Without real-time AP data, the CFO cannot accurately forecast what is going out or when." },
      ]}
      scopeTitle="We take over your entire AP function."
      scopeIntro="From the moment a supplier invoice arrives to the moment payment hits their account — we handle everything."
      features={[
        { icon: FileText, title: "Invoice capture & processing", description: "We receive, verify and capture every invoice — AI-powered extraction, no manual entry." },
        { icon: ShieldCheck, title: "Supplier management", description: "Onboarding, CIPC/VAT/B-BBEE verification, master data and query resolution." },
        { icon: CreditCard, title: "Payment processing", description: "Weekly or monthly payment runs, properly scheduled, approved and executed." },
        { icon: RefreshCw, title: "Reconciliation & reporting", description: "Monthly supplier recons, aging reports, cash flow forecasting and management dashboards." },
        { icon: Lock, title: "Compliance & controls", description: "Approval workflows, segregation of duties and audit-ready documentation on every transaction." },
        { icon: LineChart, title: "Continuous optimisation", description: "We don't just run your AP — we improve it every month with structured reviews." },
      ]}
      process={[
        { label: "Week 1", title: "Handover & discovery", you: "Give us access to your supplier list, existing invoices and payment history.", us: "We map your AP workflow, configure approval rules and set up AP Control for your business." },
        { label: "Week 2", title: "Supplier onboarding", you: "Introduce us to your suppliers as your AP partner.", us: "We verify every supplier — CIPC, VAT, B-BBEE, bank details — and establish the compliance baseline." },
        { label: "Week 3", title: "Parallel run", you: "Continue your normal process as backup while we build confidence.", us: "We process all invoices through AP Control. You review and approve — building confidence in the system." },
        { label: "Week 4+", title: "We run everything", you: "You receive weekly reports and approve payment runs. That's it.", us: "We handle all invoices, exceptions, supplier queries, reconciliations and reporting going forward." },
      ]}
      youDo={[
        "Approve payment runs (one click)",
        "Review weekly exception reports",
        "Introduce new suppliers to us",
        "Ask questions — we answer same day",
        "Focus on your core business",
      ]}
      weDo={[
        "Receive and capture every invoice",
        "Verify all suppliers (CIPC, VAT, B-BBEE)",
        "Match invoices to purchase orders",
        "Flag exceptions and resolve discrepancies",
        "Prepare and schedule payment runs",
        "Process payments through your bank",
        "Reconcile supplier statements monthly",
        "Manage all supplier queries and communication",
        "Generate management reports and dashboards",
        "Maintain the full audit trail",
      ]}
      testimonial="Our invoice process used to be chaotic. SeedCapital brought control, visibility, and structure — we now have real-time insight into our cash flow."
      whyTitle="Why SeedCapital — not another outsourcing firm"
      whyPoints={[
        { title: "AI-powered, not people-dependent", description: "AP Control automates the work that traditional firms do manually. Fewer errors, faster turnaround, no single point of failure when staff are absent." },
        { title: "SA-specific from the ground up", description: "SARS, CIPC, B-BBEE — these are not add-ons we bolt on. They are embedded into every workflow, every supplier verification, every payment run." },
        { title: "Controls that banks and auditors trust", description: "Dual authorisation, MFA, bank detail cooling periods, immutable audit logs. The same controls large corporates use — applied to SME-sized businesses." },
        { title: "Your AP team — not your software vendor", description: "You don't install anything. You don't train anyone. You call us. We manage the whole function — and we are accountable for the results." },
      ]}
      faqItems={[
        {
          q: "What does AP outsourcing include?",
          a: ["Invoice capture (AI-powered extraction)", "Supplier verification (CIPC, VAT, B-BBEE)", "Payment runs and exception management", "Reconciliations, reporting and audit-ready documentation"],
        },
        {
          q: "How do you prevent fraud?",
          a: ["Duplicate invoice detection", "Bank detail change verification with 48-hour cooling period", "Dual authorisation controls", "Immutable, tamper-proof audit trail"],
        },
        { q: "Will we still control payments?", a: "Yes — you approve all payment runs. We manage everything else: capture, verification, scheduling, reconciliation and reporting. You stay in full control of cash going out." },
        { q: "Do our suppliers need to log in to anything?", a: "No. Your suppliers never log in. Your team never logs in. We run AP Control on your behalf — you simply see the results, the dashboards and the reports." },
        { q: "How long does implementation take?", a: "Four weeks: handover & discovery, supplier onboarding, parallel run, then full handover. After Week 4 we are running your AP function end to end." },
        { q: "What if our invoice volume spikes?", a: "Outsourcing scales with you at no extra cost. Where in-house teams need new hires, our service simply absorbs the volume — and our High Volume package adds dedicated specialists for businesses processing 200+ invoices monthly." },
      ]}
    />
  );
}
