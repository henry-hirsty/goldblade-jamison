import { Scissors } from "lucide-react";

const Footer = () => (
  <footer className="py-8 bg-card border-t border-border">
    <div className="container mx-auto px-4 flex flex-col sm:flex-row items-center justify-between gap-4">
      <div className="flex items-center gap-2">
        <Scissors className="w-4 h-4 text-primary" />
        <span className="font-heading text-lg font-bold text-gold-gradient">Gold Blade Barbers</span>
      </div>
      <p className="text-muted-foreground text-xs">
        © {new Date().getFullYear()} Gold Blade Barbers Jamison. All rights reserved.
      </p>
    </div>
  </footer>
);

export default Footer;
