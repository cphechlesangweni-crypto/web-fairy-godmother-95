import { Link } from "react-router-dom";
import { Mail, Phone, MapPin } from "lucide-react";
import logo from "@/assets/scg-logo.png";

export default function Footer() {
  return (
    <footer className="bg-secondary text-secondary-foreground mt-24">
      <div className="container py-16 grid md:grid-cols-2 lg:grid-cols-4 gap-12">
        <div className="lg:col-span-1">
          <div className="bg-background/95 inline-block p-3 rounded-lg">
            <img src={logo} alt="SeedCapital Group" className="h-14 w-auto" />
          </div>
          <p className="mt-5 text-sm text-secondary-foreground/70 leading-relaxed max-w-xs">
            An operations and compliance partner taking full responsibility for your most critical business functions.
          </p>
        </div>

        <div>
          <h4 className="font-display text-lg mb-5">Solutions</h4>
          <ul className="space-y-3 text-sm text-secondary-foreground/75">
            <li><Link to="/facilities" className="hover:text-primary-glow transition-colors">Facilities & Workforce</Link></li>
            <li><Link to="/payroll" className="hover:text-primary-glow transition-colors">Payroll Outsourcing</Link></li>
            <li><Link to="/accounts-payable" className="hover:text-primary-glow transition-colors">Accounts Payable</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="font-display text-lg mb-5">Company</h4>
          <ul className="space-y-3 text-sm text-secondary-foreground/75">
            <li><Link to="/about" className="hover:text-primary-glow transition-colors">About</Link></li>
            <li><Link to="/contact" className="hover:text-primary-glow transition-colors">Contact</Link></li>
            <li><Link to="/contact" className="hover:text-primary-glow transition-colors">Book a Discovery Call</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="font-display text-lg mb-5">Get in touch</h4>
          <ul className="space-y-3 text-sm text-secondary-foreground/75">
            <li className="flex items-start gap-2.5">
              <Phone size={16} className="mt-0.5 shrink-0 text-primary-glow" />
              <a href="tel:+27766861638" className="hover:text-primary-glow">+27 76 686 1638</a>
            </li>
            <li className="flex items-start gap-2.5">
              <Mail size={16} className="mt-0.5 shrink-0 text-primary-glow" />
              <a href="mailto:info@seedcapitalgroup.co.za" className="hover:text-primary-glow break-all">info@seedcapitalgroup.co.za</a>
            </li>
            <li className="flex items-start gap-2.5">
              <MapPin size={16} className="mt-0.5 shrink-0 text-primary-glow" />
              <span>Westville, South Africa</span>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-secondary-foreground/10">
        <div className="container py-6 flex flex-col md:flex-row items-center justify-between gap-3 text-xs text-secondary-foreground/60">
          <p>© {new Date().getFullYear()} SeedCapital Group (Pty) Ltd. All rights reserved.</p>
          <p>Growth · Finance · Empowerment · Trust</p>
        </div>
      </div>
    </footer>
  );
}
