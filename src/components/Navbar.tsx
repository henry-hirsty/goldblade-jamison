import { useState } from "react";
import { Menu, X, Phone } from "lucide-react";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  const links = [
    { label: "Home", href: "#home" },
    
    { label: "Hours", href: "#hours" },
    { label: "Reviews", href: "#reviews" },
    { label: "Contact", href: "#contact" },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/90 backdrop-blur-md border-b border-border">
      <div className="container mx-auto flex items-center justify-between py-4 px-4">
        <a href="#home" className="font-heading text-2xl font-bold text-gold-gradient">
          Gold Blade
        </a>

        {/* Desktop */}
        <div className="hidden md:flex items-center gap-8">
          {links.map((l) => (
            <a key={l.href} href={l.href} className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors tracking-wide uppercase">
              {l.label}
            </a>
          ))}
          <a href="tel:0451953125" className="flex items-center gap-2 text-sm font-semibold text-primary">
            <Phone className="w-4 h-4" /> 0451 953 125
          </a>
        </div>

        {/* Mobile toggle */}
        <button onClick={() => setOpen(!open)} className="md:hidden text-foreground">
          {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden bg-background border-t border-border px-4 pb-6 space-y-4">
          {links.map((l) => (
            <a key={l.href} href={l.href} onClick={() => setOpen(false)} className="block text-sm font-medium text-muted-foreground hover:text-primary transition-colors tracking-wide uppercase py-2">
              {l.label}
            </a>
          ))}
          <a href="tel:0451953125" className="flex items-center gap-2 text-sm font-semibold text-primary">
            <Phone className="w-4 h-4" /> 0451 953 125
          </a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
