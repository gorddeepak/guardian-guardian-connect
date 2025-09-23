import { Button } from "@/components/ui/button";
import { Shield, Menu } from "lucide-react";
import { useState } from "react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-md border-b border-border shadow-soft">
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-gradient-hero rounded-xl flex items-center justify-center shadow-medium">
              <Shield className="w-6 h-6 text-white" />
            </div>
            <span className="text-2xl font-bold text-foreground">CareSync</span>
          </div>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            <a href="#features" className="text-foreground hover:text-primary transition-smooth font-medium">
              Features
            </a>
            <a href="#how-it-works" className="text-foreground hover:text-primary transition-smooth font-medium">
              How It Works
            </a>
            <a href="#testimonials" className="text-foreground hover:text-primary transition-smooth font-medium">
              Testimonials
            </a>
            <a href="/help" className="text-foreground hover:text-primary transition-smooth font-medium">
              Help
            </a>
          </nav>
          
          {/* CTA Buttons */}
          <div className="hidden md:flex items-center gap-4">
            <Button variant="ghost" size="default">
              Sign In
            </Button>
            <Button variant="hero" size="default" asChild>
              <a href="/signup">Get Started</a>
            </Button>
          </div>
          
          {/* Mobile Menu Button */}
          <button 
            className="md:hidden p-2 rounded-lg hover:bg-accent transition-smooth"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <Menu className="w-6 h-6 text-foreground" />
          </button>
        </div>
        
        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden py-6 border-t border-border bg-white">
            <nav className="space-y-4">
              <a href="#features" className="block py-2 text-foreground hover:text-primary transition-smooth font-medium">
                Features
              </a>
              <a href="#how-it-works" className="block py-2 text-foreground hover:text-primary transition-smooth font-medium">
                How It Works
              </a>
              <a href="#testimonials" className="block py-2 text-foreground hover:text-primary transition-smooth font-medium">
                Testimonials
              </a>
              <a href="/help" className="block py-2 text-foreground hover:text-primary transition-smooth font-medium">
                Help
              </a>
            </nav>
            
            <div className="flex flex-col gap-3 mt-6 pt-6 border-t border-border">
              <Button variant="ghost" size="default" className="justify-start">
                Sign In
              </Button>
              <Button variant="hero" size="default" asChild>
                <a href="/signup">Get Started</a>
              </Button>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;