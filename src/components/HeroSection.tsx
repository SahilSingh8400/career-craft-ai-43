import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles, TrendingUp } from "lucide-react";
import heroImage from "@/assets/hero-career.jpg";

interface HeroSectionProps {
  onStartAssessment: () => void;
}

export const HeroSection = ({ onStartAssessment }: HeroSectionProps) => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background with gradient overlay */}
      <div className="absolute inset-0 bg-gradient-hero opacity-90" />
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-20"
        style={{ backgroundImage: `url(${heroImage})` }}
      />
      
      {/* Floating elements */}
      <div className="absolute top-20 left-10 w-20 h-20 bg-primary/20 rounded-full blur-xl animate-pulse" />
      <div className="absolute bottom-32 right-16 w-32 h-32 bg-success/20 rounded-full blur-xl animate-pulse delay-1000" />
      
      <div className="relative z-10 text-center max-w-5xl mx-auto px-6">
        <div className="inline-flex items-center gap-2 bg-card/10 backdrop-blur-sm border border-white/10 rounded-full px-4 py-2 mb-8">
          <Sparkles className="w-4 h-4 text-primary-glow" />
          <span className="text-sm font-medium">AI-Powered Career Intelligence</span>
        </div>
        
        <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-white via-primary-glow to-success bg-clip-text text-transparent leading-tight">
          Discover Your Perfect
          <br />
          <span className="relative">
            Career Path
            <div className="absolute -bottom-2 left-0 right-0 h-1 bg-gradient-primary rounded-full" />
          </span>
        </h1>
        
        <p className="text-xl md:text-2xl text-foreground/80 mb-12 max-w-3xl mx-auto leading-relaxed">
          Get personalized career recommendations, skill gap analysis, and learning pathways 
          powered by advanced AI. Transform your education and interests into your dream career.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-16">
          <Button 
            onClick={onStartAssessment}
            size="lg"
            className="bg-gradient-primary hover:shadow-glow transition-all duration-500 hover:scale-105 text-lg px-8 py-6 rounded-xl"
          >
            Start Career Assessment
            <ArrowRight className="ml-2 w-5 h-5" />
          </Button>
          
          <div className="flex items-center gap-2 text-sm text-foreground/60">
            <TrendingUp className="w-4 h-4" />
            <span>Join 50,000+ professionals who found their path</span>
          </div>
        </div>
        
        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-2xl mx-auto">
          <div className="text-center">
            <div className="text-3xl font-bold text-primary-glow mb-2">95%</div>
            <div className="text-sm text-foreground/60">Accuracy Rate</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-success mb-2">500+</div>
            <div className="text-sm text-foreground/60">Career Paths</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-warning mb-2">24/7</div>
            <div className="text-sm text-foreground/60">AI Support</div>
          </div>
        </div>
      </div>
    </section>
  );
};