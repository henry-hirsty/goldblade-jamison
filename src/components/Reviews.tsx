import { Star } from "lucide-react";

const reviews = [
  { name: "William Bullock", text: "By far the best value for money cut in the Macquarie area. The owner is very skilled and quick — no nonsense. $28 for top, back and sides and has never disappointed." },
  { name: "Jeff Addinsall", text: "This a late review for a great barber! Good conversation and excellent trim and cut. Felt like a million dollars after my last visit!" },
  { name: "Tim Briggs", text: "Great barber! Best haircut ever. Did exactly what I asked for. I will be a long term customer. Shukran!" },
  { name: "Dustin Mifflin", text: "I've had monthly haircuts from Wasim for over seven years. Other barbers would be free but customers would wait for Wasim. That says it all." },
  { name: "Jack D", text: "Been here 5+ times, every time the haircut is great and the staff are really friendly, plus it's priced great. I've been recommending all my mates." },
  { name: "Zachary Felding", text: "Best barber in Canberra. The fastest & best priced." },
  { name: "Chris Cates", text: "Great service, professional. Will get a haircut and beard trim here from now on!" },
  { name: "Ibrahem MAK", text: "Very quick and affordable trims, he can give a fade in as quick as 15 minutes. Amazing hair cuts and a friendly barber, it's now my go to place." },
  { name: "Dave Scribs", text: "Very good barber. I've followed from when he was at Gungahlin and travel from Gungahlin to Jamison just to see him now." },
  { name: "Dave Murray", text: "Best barber in Belco. Always had a great haircut there." },
  { name: "Thien Vuong", text: "Got a good cut here. Recommend this barber as they are better than all the ones inside the Westfield shopping centre." },
  { name: "Renga Rajan", text: "A barber that understands your grooming needs and yet charges a reasonable price. Highly recommended." },
];

const Reviews = () => (
  <section id="reviews" className="py-24 bg-card">
    <div className="container mx-auto px-4">
      <h2 className="font-heading text-4xl font-bold text-gold-gradient mb-4 text-center">What Our Clients Say</h2>
      <p className="text-muted-foreground mb-12 text-center">Real reviews from real customers.</p>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
        {reviews.map((r) => (
          <div key={r.name} className="bg-surface-elevated border border-border rounded-lg p-6 hover:gold-glow transition-shadow">
            <div className="flex gap-1 mb-3">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-4 h-4 fill-primary text-primary" />
              ))}
            </div>
            <p className="text-muted-foreground text-sm mb-4 leading-relaxed">"{r.text}"</p>
            <p className="font-semibold text-foreground text-sm">— {r.name}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default Reviews;
