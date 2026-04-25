import { useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import logo from "@/assets/scg-logo.png";

const links = [
  { to: "/", label: "Home" },
  { to: "/facilities", label: "Facilities" },
  { to: "/payroll", label: "Payroll" },
  { to: "/accounts-payable", label: "Accounts Payable" },
  { to: "/about", label: "About" },
  { to: "/contact", label: "Contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const location = useLocation();
  const isHome = location.pathname === "/";

  return (
    <header className="sticky top-0 z-50 w-full bg-background/85 backdrop-blur-md border-b border-border/60">
      <div className="container flex items-center justify-between h-20">
        <Link to="/" className="flex items-center gap-3" onClick={() => setOpen(false)}>
          <img src={logo} alt="SeedCapital Group" className="h-11 w-auto" />
          <div className="hidden sm:flex flex-col leading-tight">
            <span className="font-display font-bold text-secondary text-base tracking-tight">SeedCapital Group</span>
            <span className="text-[10px] uppercase tracking-[0.18em] text-muted-foreground">Operations · Compliance · Trust</span>
          </div>
        </Link>

        <nav className="hidden lg:flex items-center gap-8">
          {links.map((l) => (
            <NavLink
              key={l.to}
              to={l.to}
              end={l.to === "/"}
              className={({ isActive }) =>
                `text-sm font-medium transition-colors ${
                  isActive ? "text-primary" : "text-secondary/80 hover:text-primary"
                }`
              }
            >
              {l.label}
            </NavLink>
          ))}
        </nav>

        <div className="hidden lg:block">
          <Button asChild className="bg-primary hover:bg-primary-dark text-primary-foreground rounded-full px-6">
            <Link to="/contact">Book a Discovery Call</Link>
          </Button>
        </div>

        <button
          className="lg:hidden p-2 -mr-2 text-secondary"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {open && (
        <div className="lg:hidden border-t border-border bg-background">
          <nav className="container py-6 flex flex-col gap-4">
            {links.map((l) => (
              <NavLink
                key={l.to}
                to={l.to}
                end={l.to === "/"}
                onClick={() => setOpen(false)}
                className={({ isActive }) =>
                  `text-base font-medium py-2 ${isActive ? "text-primary" : "text-secondary"}`
                }
              >
                {l.label}
              </NavLink>
            ))}
            <Button asChild className="mt-2 bg-primary hover:bg-primary-dark rounded-full">
              <Link to="/contact" onClick={() => setOpen(false)}>Book a Discovery Call</Link>
            </Button>
          </nav>
        </div>
      )}
    </header>
  );
}
