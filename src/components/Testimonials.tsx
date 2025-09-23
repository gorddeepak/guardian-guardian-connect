import { Card } from "@/components/ui/card";
import { Star } from "lucide-react";

const Testimonials = () => {
  const testimonials = [
    {
      name: "Sarah Chen",
      role: "Mother of 3",
      avatar: "https://images.unsplash.com/photo-1494790108755-2616b3e7019c?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80",
      content: "CareSync gives me incredible peace of mind. I can check on my elderly parents and my teenage kids all from one dashboard. The emergency alerts saved us when my mom fell and couldn't reach her phone.",
      rating: 5
    },
    {
      name: "Dr. Michael Rodriguez",
      role: "Family Physician",
      avatar: "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80",
      content: "I recommend CareSync to my patients with elderly family members. The health monitoring features and medication reminders have significantly improved compliance and early intervention.",
      rating: 5
    },
    {
      name: "Jennifer Park",
      role: "Caregiver",
      avatar: "https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80",
      content: "As a professional caregiver, CareSync helps me monitor multiple clients efficiently. The geofencing alerts and activity tracking make my job so much easier and more effective.",
      rating: 5
    }
  ];

  return (
    <section className="py-24 bg-muted/20">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Trusted by Thousands of
            <span className="block text-primary">Families Worldwide</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Real stories from families who trust CareSync to keep their loved ones safe and connected.
          </p>
        </div>
        
        <div className="grid lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="p-8 border-0 shadow-large hover:shadow-glow transition-smooth bg-card">
              <div className="space-y-6">
                {/* Star Rating */}
                <div className="flex gap-1">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-warning text-warning" />
                  ))}
                </div>
                
                {/* Testimonial Content */}
                <blockquote className="text-muted-foreground leading-relaxed">
                  "{testimonial.content}"
                </blockquote>
                
                {/* Author */}
                <div className="flex items-center gap-4 pt-4 border-t border-border">
                  <img 
                    src={testimonial.avatar} 
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full object-cover shadow-medium"
                  />
                  <div>
                    <div className="font-semibold text-foreground">{testimonial.name}</div>
                    <div className="text-sm text-muted-foreground">{testimonial.role}</div>
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;