import { useState } from "react";
import { Menu, X } from "lucide-react";

const exhibits = [
  { label: "Home", href: "#home" },
  { label: "Exhibit 1: Origins", href: "#exhibit-1" },
  { label: "Exhibit 2: Timeline", href: "#exhibit-2" },
  { label: "Exhibit 3: The Surge", href: "#exhibit-3" },
  { label: "Exhibit 4: Gallery", href: "#exhibit-4" },
  { label: "Exhibit 5: Legacy", href: "#exhibit-5" },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);

  const handleClick = (href: string) => {
    setOpen(false);
    const el = document.querySelector(href);
    el?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-primary/95 backdrop-blur-sm">
      <div className="container mx-auto flex items-center justify-between py-4 px-6 lg:px-12">
        <a
          href="#home"
          onClick={(e) => { e.preventDefault(); handleClick("#home"); }}
          className="font-display text-xl tracking-wide text-primary-foreground"
        >
          Courts of Time
        </a>

        {/* Desktop */}
        <ul className="hidden lg:flex items-center gap-6">
          {exhibits.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                onClick={(e) => { e.preventDefault(); handleClick(l.href); }}
                className="font-body text-[11px] tracking-widest uppercase text-primary-foreground/70 hover:text-secondary transition-colors"
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>

        {/* Mobile toggle */}
        <button
          className="lg:hidden text-primary-foreground"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="lg:hidden bg-primary border-t border-primary-foreground/10">
          <ul className="flex flex-col items-center gap-6 py-8">
            {exhibits.map((l) => (
              <li key={l.href}>
                <a
                  href={l.href}
                  onClick={(e) => { e.preventDefault(); handleClick(l.href); }}
                  className="font-body text-sm tracking-widest uppercase text-primary-foreground/80 hover:text-secondary transition-colors"
                >
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
