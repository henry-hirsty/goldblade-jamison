import { Phone, Mail, MapPin } from "lucide-react";

const Contact = () => (
  <section id="contact" className="py-24 bg-background">
    <div className="container mx-auto px-4 text-center">
      <h2 className="font-heading text-4xl font-bold text-gold-gradient mb-4">Get In Touch</h2>
      <p className="text-muted-foreground mb-12">Drop by or give us a call. Walk-ins always welcome.</p>

      <div className="grid sm:grid-cols-3 gap-8 max-w-3xl mx-auto">
        <a href="tel:0451953125" className="flex flex-col items-center gap-3 bg-surface-elevated border border-border rounded-lg p-8 hover:gold-glow transition-shadow">
          <Phone className="w-8 h-8 text-primary" />
          <span className="text-sm font-semibold text-foreground">Call Us</span>
          <span className="text-muted-foreground text-sm">0451 953 125</span>
        </a>

        <a href="mailto:goldbladebarbers1@gmail.com" className="flex flex-col items-center gap-3 bg-surface-elevated border border-border rounded-lg p-8 hover:gold-glow transition-shadow">
          <Mail className="w-8 h-8 text-primary" />
          <span className="text-sm font-semibold text-foreground">Email</span>
          <span className="text-muted-foreground text-sm break-all">goldbladebarbers1@gmail.com</span>
        </a>

        <div className="flex flex-col items-center gap-3 bg-surface-elevated border border-border rounded-lg p-8 hover:gold-glow transition-shadow">
          <MapPin className="w-8 h-8 text-primary" />
          <span className="text-sm font-semibold text-foreground">Location</span>
          <span className="text-muted-foreground text-sm">Jamison Centre, Canberra</span>
        </div>
      </div>
    </div>
  </section>
);

export default Contact;
