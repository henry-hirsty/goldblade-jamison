import { Scissors } from "lucide-react";

const Services = () => (
  <section id="services" className="py-24 bg-card">
    <div className="container mx-auto px-4 text-center">
      <h2 className="font-heading text-4xl font-bold text-gold-gradient mb-4">Services</h2>
      <p className="text-muted-foreground mb-12 max-w-md mx-auto">Quality grooming, straight to the point.</p>

      <div className="max-w-md mx-auto bg-surface-elevated border border-border rounded-lg p-8 gold-glow">
        <Scissors className="w-10 h-10 text-primary mx-auto mb-4" />
        <h3 className="font-heading text-2xl font-semibold text-foreground mb-2">Standard Haircut</h3>
        <p className="text-muted-foreground mb-6">Top, back & sides — precision cut with clippers or scissors.</p>
        <span className="text-5xl font-heading font-bold text-gold-gradient">$28</span>
      </div>
    </div>
  </section>
);

export default Services;
