import { Calculator, Shield, AlertTriangle, Calendar, FileCheck, BarChart3 } from "lucide-react";
import ServicePage from "@/components/ServicePage";

export default function Payroll() {
  return (
    <ServicePage
      eyebrow="Payroll Outsourcing"
      heroTitle={<>Payroll, owned end to end. <em className="italic text-primary-glow">Powered by Payroll Intelligence.</em></>}
      heroDescription="We take full responsibility for payroll accuracy and compliance — from timesheet collection to payslip delivery, statutory submissions and continuous compliance monitoring. So your team never has to worry about it again."
      ctaLabel="Take payroll off your plate"
      ctaTagline="Let's take payroll off your plate."
      problemTitle="Payroll is not just admin. It is your biggest compliance risk."
      problemIntro="Most South African businesses don't know how exposed they are until a labour inspector or CCMA notice arrives."
      problems={[
        { title: "Minimum wage violations", description: "Many employers are above NMW but below sectoral determination — and don't know it. Penalty: up to 3× the underpayment." },
        { title: "SARS penalties & interest", description: "Late EMP201 attracts 10% penalty plus interest. Missed ROE filings trigger COIDA penalties. They accumulate silently." },
        { title: "Payroll fraud exposure", description: "Ghost employees, duplicate bank accounts, manager-level manipulation. Without controls, your system processes it perfectly." },
        { title: "Labour law time-bombs", description: "Fixed-term contracts becoming permanent. SDL triggered. Leave liability growing. BCEA breaches. No automatic alerts." },
        { title: "Manual capture errors", description: "Timesheets via WhatsApp, handwritten sheets, Excel. Every step introduces errors that create legal exposure." },
        { title: "Key-person dependency", description: "When your payroll person resigns — payroll stops. No backup, no documentation, no compliance safety net." },
      ]}
      scopeTitle="We take full ownership of your payroll function."
      scopeIntro="From timesheet collection to payslip delivery, statutory submissions and compliance monitoring — full responsibility, every month."
      features={[
        { icon: Calculator, title: "Full function ownership", description: "We own the entire payroll cycle — collection, processing, review and approval — not just button-pressing." },
        { icon: Shield, title: "Accuracy & compliance", description: "Full monthly payroll on SimplePay with minimum wage enforcement, SARS compliance and pre-run fraud checks." },
        { icon: FileCheck, title: "Statutory submissions", description: "EMP201, UIF, ROE, EMP501 — all prepared and submitted on your behalf, on time, every time." },
        { icon: AlertTriangle, title: "Compliance monitoring", description: "Minimum wage checks, deadline tracking, labour law triggers — continuous, not just at payrun time." },
        { icon: Calendar, title: "Employee lifecycle", description: "New starters, terminations, contract changes, leave management — handled as part of the service." },
        { icon: BarChart3, title: "Dashboard & reporting", description: "Monthly payroll reports, compliance scorecards and a live dashboard showing exactly where you stand." },
      ]}
      process={[
        { label: "By the 25th", title: "You submit hours", you: "Send hours data in any format — WhatsApp photo, Excel, email or biometric export.", us: "We validate every timesheet, flag discrepancies and map to employee records via Payroll Intelligence." },
        { label: "Within 24 hrs", title: "Compliance checks", you: "You receive a pre-run exception report showing any flags requiring your input.", us: "Every employee checked for minimum wage compliance, fraud patterns, anomalies and labour-law triggers." },
        { label: "By the 28th", title: "You approve, we finalise", you: "Review the payrun summary and approve with one click, or query any line item.", us: "Payrun finalised, bank payment file generated, payslips distributed to all employees." },
        { label: "Month end", title: "Statutory submissions", you: "You receive the monthly compliance scorecard and payroll report.", us: "EMP201 submitted, UIF filed, audit trail updated, compliance score recalculated, triggers re-checked." },
      ]}
      youDo={[
        "Submit hours data by the agreed cut-off",
        "Review and approve the monthly payrun",
        "Notify us of staff changes and new starters",
        "Sign off on the compliance report",
        "Focus on running your business",
      ]}
      weDo={[
        "Full payroll function ownership month to month",
        "Check every employee against their minimum wage rate",
        "Six fraud and anomaly checks before payment",
        "Complete payroll processing on SimplePay",
        "Payslip preparation and distribution",
        "EMP201 and UIF declaration submission",
        "All statutory deadline monitoring and alerts",
        "Eight labour-law triggers tracked per employee",
        "All employee payroll query handling",
        "Immutable audit trail maintenance",
      ]}
      testimonial="We no longer worry about payroll compliance or errors. SeedCapital took full ownership, and everything runs accurately every month."
      whyTitle="Why SeedCapital — not another payroll bureau"
      whyPoints={[
        { title: "We take full responsibility", description: "We don't just process your payroll — we own it. If something is wrong, it is our responsibility to fix it. That accountability is written into our engagement." },
        { title: "Sectoral determinations enforced", description: "Every employee classified by sector, area and bargaining council. We enforce the highest applicable rate automatically — cleaning, hospitality, retail." },
        { title: "Continuous compliance monitoring", description: "Labour-law triggers, statutory deadlines, SDL thresholds, fixed-term durations — monitored every day, not just at payrun time." },
        { title: "Your payroll team — not a subscription", description: "You don't install anything. You don't train anyone. You have a dedicated account manager and a live compliance dashboard." },
      ]}
      faqItems={[
        { q: "What makes your payroll service different?", a: "We don't just process payroll — we take full ownership of the entire function. That includes accuracy, compliance, statutory submissions and continuous monitoring. If anything is wrong, it is our responsibility to fix." },
        {
          q: "What risks do you cover?",
          a: ["Minimum wage and sectoral determination compliance", "SARS penalties and EMP201/EMP501 deadlines", "Fraud detection (ghost employees, duplicate accounts, etc.)", "Labour law triggers (BCEA, fixed-term, SDL, leave liability)"],
        },
        {
          q: "What does the monthly process look like?",
          a: ["You submit hours by the 25th (any format)", "We run compliance checks within 24 hours", "You approve the payrun by the 28th", "We handle payroll, payslips and statutory submissions"],
        },
        { q: "What software do you use?", a: "We process payroll on SimplePay, layered with our proprietary Payroll Intelligence engine for compliance, fraud detection and labour-law trigger monitoring. You don't need to install or learn anything." },
        { q: "What if our payroll person leaves?", a: "That's exactly the risk we eliminate. With us there is no key-person dependency — payroll continues uninterrupted, with full documentation, audit trail and compliance history maintained on your behalf." },
        { q: "Do you handle EMP501 reconciliation and year-end?", a: "Yes — EMP501 reconciliation support is included from our Professional package upward. We prepare, validate and support submission, and resolve any SARS queries that follow." },
      ]}
    />
  );
}
