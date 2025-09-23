import { Button } from "@/components/ui/button";
import { Play } from "lucide-react";
import heroImage from "@/assets/hero-image.jpg";

const Hero = () => {
  return (
    <section className="relative min-h-screen bg-gradient-hero overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(255,255,255,0.1),transparent_70%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(255,255,255,0.05),transparent_70%)]" />
      
      <div className="container mx-auto px-6 pt-20 pb-16 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center min-h-[80vh]">
          {/* Left Column - Content */}
          <div className="text-white space-y-8">
            <div className="space-y-6">
              <h1 className="text-5xl lg:text-7xl font-bold leading-tight">
                Keep Your
                <span className="block text-primary-glow">Loved Ones</span>
                Safe & Connected
              </h1>
              <p className="text-xl lg:text-2xl text-white/90 leading-relaxed max-w-2xl">
                Advanced health monitoring, real-time location tracking, and instant emergency alerts. 
                Peace of mind for the whole family.
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Button variant="hero" size="xl" asChild>
                <a href="/signup">Get Started Free</a>
              </Button>
              <Button 
                variant="outline" 
                size="xl"
                className="border-white/30 text-white hover:bg-white/10 hover:border-white/50"
              >
                <Play className="w-5 h-5" />
                Watch Demo
              </Button>
            </div>
            
            <div className="flex items-center gap-8 pt-8">
              <div className="text-center">
                <div className="text-3xl font-bold text-white">50K+</div>
                <div className="text-white/80">Families Protected</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-white">99.9%</div>
                <div className="text-white/80">Uptime</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-white">24/7</div>
                <div className="text-white/80">Monitoring</div>
              </div>
            </div>
          </div>
          
          {/* Right Column - Hero Image */}
          <div className="relative">
            <div className="relative z-10">
              <img 
                src={heroImage} 
                alt="CareSync family safety monitoring dashboard" 
                className="w-full h-auto rounded-2xl shadow-large"
              />
            </div>
            
            {/* Floating Elements */}
            <div className="absolute -top-4 -right-4 w-24 h-24 bg-success rounded-full flex items-center justify-center shadow-glow">
              <div className="text-white font-bold text-sm text-center">
                <div>LIVE</div>
                <div>24/7</div>
              </div>
            </div>
            
            <div className="absolute -bottom-6 -left-6 bg-white p-4 rounded-xl shadow-large">
              <div className="flex items-center gap-3">
                <div className="w-3 h-3 bg-success rounded-full animate-pulse"></div>
                <div className="text-sm font-semibold text-foreground">All Family Members Safe</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;