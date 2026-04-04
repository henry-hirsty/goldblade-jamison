import { Clock } from "lucide-react";

const hours = [
  { day: "Monday", time: "9:00 AM – 5:30 PM" },
  { day: "Tuesday", time: "9:00 AM – 5:30 PM" },
  { day: "Wednesday", time: "9:00 AM – 5:30 PM" },
  { day: "Thursday", time: "9:00 AM – 5:30 PM" },
  { day: "Friday", time: "9:00 AM – 7:00 PM" },
  { day: "Saturday", time: "9:00 AM – 5:00 PM" },
  { day: "Sunday", time: "9:00 AM – 4:00 PM" },
];

const Hours = () => (
  <section id="hours" className="py-24 bg-background">
    <div className="container mx-auto px-4 text-center">
      <h2 className="font-heading text-4xl font-bold text-gold-gradient mb-4">Trading Hours</h2>
      <p className="text-muted-foreground mb-12">Walk-ins welcome. No appointment needed.</p>

      <div className="max-w-lg mx-auto">
        {hours.map((h) => (
          <div key={h.day} className="flex items-center justify-between py-3 border-b border-border last:border-0">
            <span className="font-medium text-foreground flex items-center gap-2">
              <Clock className="w-4 h-4 text-primary" />
              {h.day}
            </span>
            <span className="text-muted-foreground">{h.time}</span>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default Hours;
