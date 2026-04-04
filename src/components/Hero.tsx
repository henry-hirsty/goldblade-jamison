import heroImg from "@/assets/hero-barber.jpg";
import { Scissors } from "lucide-react";

const Hero = () => (
  <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
    {/* Background image */}
    <img src={heroImg} alt="Gold Blade Barbers interior" width={1920} height={1080} className="absolute inset-0 w-full h-full object-cover" />
    {/* Overlay */}
    <div className="absolute inset-0 bg-background/75" />

    <div className="relative z-10 text-center px-4 max-w-3xl mx-auto">
      <div className="flex items-center justify-center gap-3 mb-6">
        <div className="h-px w-12 bg-primary" />
        <Scissors className="w-5 h-5 text-primary" />
        <div className="h-px w-12 bg-primary" />
      </div>

      <h1 className="font-heading text-5xl sm:text-7xl font-bold tracking-tight mb-4">
        <span className="text-gold-gradient">Gold Blade</span>
        <br />
        <span className="text-foreground">Barbers</span>
      </h1>

      <p className="text-lg text-muted-foreground mb-2 tracking-widest uppercase font-body">
        Jamison Centre, Canberra
      </p>

      <p className="text-muted-foreground mb-8 max-w-md mx-auto">
        Precision cuts, sharp fades, and no-nonsense grooming at a fair price.
      </p>

      <div className="flex flex-col sm:flex-row gap-4 justify-center">
        <a href="tel:0451953125" className="inline-flex items-center justify-center gap-2 bg-primary text-primary-foreground font-semibold px-8 py-3 rounded hover:bg-gold-light transition-colors">
          Call Now
        </a>
        <a href="#services" className="inline-flex items-center justify-center gap-2 border border-primary text-primary font-semibold px-8 py-3 rounded hover:bg-primary hover:text-primary-foreground transition-colors">
          Our Services
        </a>
      </div>
    </div>
  </section>
);

export default Hero;
