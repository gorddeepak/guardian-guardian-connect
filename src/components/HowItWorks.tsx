import { Button } from "@/components/ui/button";
import { UserPlus, Settings, Shield, ArrowRight } from "lucide-react";

const HowItWorks = () => {
  const steps = [
    {
      icon: UserPlus,
      number: "01",
      title: "Sign Up & Invite Family",
      description: "Create your account and invite family members. Set up roles and permissions for caregivers, viewers, and emergency responders.",
      color: "text-primary"
    },
    {
      icon: Settings,
      number: "02", 
      title: "Connect Devices & Set Preferences",
      description: "Pair smartphones, wearables, and health devices. Configure geofences, alert preferences, and emergency contacts.",
      color: "text-secondary"
    },
    {
      icon: Shield,
      number: "03",
      title: "Monitor & Stay Protected",
      description: "Real-time monitoring begins immediately. Receive alerts, track locations, and access emergency features 24/7.",
      color: "text-success"
    }
  ];

  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Get Started in
            <span className="block text-primary">3 Simple Steps</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Set up family safety monitoring in minutes. No technical expertise required.
          </p>
        </div>
        
        <div className="max-w-5xl mx-auto">
          <div className="grid lg:grid-cols-3 gap-8 lg:gap-12">
            {steps.map((step, index) => (
              <div key={index} className="relative">
                <div className="text-center space-y-6">
                  {/* Step Number */}
                  <div className="relative">
                    <div className="w-20 h-20 mx-auto rounded-full bg-gradient-card border-2 border-primary/20 flex items-center justify-center shadow-medium">
                      <span className="text-2xl font-bold text-primary">{step.number}</span>
                    </div>
                    
                    {/* Icon */}
                    <div className={`absolute -bottom-2 -right-2 w-10 h-10 rounded-full bg-gradient-hero flex items-center justify-center shadow-glow`}>
                      <step.icon className="w-5 h-5 text-white" />
                    </div>
                  </div>
                  
                  <div className="space-y-4">
                    <h3 className="text-2xl font-bold text-foreground">{step.title}</h3>
                    <p className="text-muted-foreground leading-relaxed">{step.description}</p>
                  </div>
                </div>
                
                {/* Arrow for larger screens */}
                {index < steps.length - 1 && (
                  <div className="hidden lg:block absolute top-10 -right-6 xl:-right-8">
                    <ArrowRight className="w-8 h-8 text-primary/30" />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
        
        <div className="text-center mt-16">
          <Button variant="hero" size="xl" asChild>
            <a href="/signup">Start Free Trial</a>
          </Button>
          <p className="text-sm text-muted-foreground mt-4">
            No credit card required • 14-day free trial • Cancel anytime
          </p>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;