import { Card } from "@/components/ui/card";
import { AlertTriangle, MapPin, Smartphone } from "lucide-react";

const Features = () => {
  const features = [
    {
      icon: AlertTriangle,
      title: "Real-time Alerts",
      description: "Instant notifications for emergencies, unusual activity, and health events. Multi-channel alerts via SMS, push, and calls.",
      gradient: "bg-gradient-warning"
    },
    {
      icon: MapPin,
      title: "Live Location & Geofence",
      description: "Track family members in real-time with precise GPS. Set safe zones and get alerts when they enter or leave designated areas.",
      gradient: "bg-gradient-success"
    },
    {
      icon: Smartphone,
      title: "Easy Device Pairing",
      description: "Quick setup with QR codes or pairing codes. Compatible with smartphones, wearables, and IoT health devices.",
      gradient: "bg-gradient-hero"
    }
  ];

  return (
    <section className="py-24 bg-muted/30">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Everything You Need to
            <span className="block text-primary">Keep Family Safe</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Comprehensive monitoring and safety features designed for peace of mind. 
            Advanced technology made simple for every family.
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Card key={index} className="p-8 border-0 shadow-large hover:shadow-glow transition-smooth bg-card">
              <div className="space-y-6">
                <div className={`w-16 h-16 rounded-2xl ${feature.gradient} flex items-center justify-center shadow-medium`}>
                  <feature.icon className="w-8 h-8 text-white" />
                </div>
                
                <div className="space-y-3">
                  <h3 className="text-2xl font-bold text-foreground">{feature.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{feature.description}</p>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;