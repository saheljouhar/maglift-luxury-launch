
import { useState, useEffect } from "react";
import { ArrowRight, Flame } from "lucide-react";
import { GlassButton } from "@/components/ui/glass-button";
import { AuroraBackground } from "@/components/ui/aurora-background";

export const Hero = () => {
  const [stockLeft, setStockLeft] = useState(42);

  useEffect(() => {
    // Simulate stock decreasing for urgency
    const interval = setInterval(() => {
      setStockLeft(prev => prev > 35 ? prev - 1 : prev);
    }, 30000);

    return () => clearInterval(interval);
  }, []);

  const scrollToForm = () => {
    document.getElementById('lead-form')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <AuroraBackground className="relative min-h-screen pt-20 overflow-hidden">
      <div className="container mx-auto px-4 py-12 relative z-10">
        <div className="flex flex-col items-center justify-center min-h-[80vh] text-center">
          {/* Stock Counter */}
          <div className="inline-flex items-center space-x-2 bg-white/10 backdrop-blur-sm border border-white/20 text-white px-4 py-2 rounded-full mb-8 animate-pulse">
            <Flame className="h-4 w-4" />
            <span className="text-sm font-medium">
              Only {stockLeft}/50 left!
            </span>
          </div>

          {/* Main Heading */}
          <h1 className="text-5xl lg:text-7xl font-bold text-white mb-6 leading-tight max-w-4xl">
            MagLift – The Ultimate No-Floor Gym Bag
          </h1>

          {/* Subheading */}
          <p className="text-xl lg:text-2xl text-gray-300 mb-8 font-light">
            Stick it. Snap it. Never lose your essentials again.
          </p>

          {/* Features */}
          <div className="space-y-4 mb-12 max-w-2xl">
            <p className="text-lg text-white font-medium">
              ✨ Premium magnetic backing that secures to any metal surface
            </p>
            <p className="text-lg text-white font-medium">
              ✨ Water-resistant & sweat-proof luxury fabric
            </p>
            <p className="text-lg text-white font-medium">
              ✨ Spacious design fits all your gym essentials
            </p>
          </div>

          {/* Glass Button */}
          <GlassButton 
            onClick={scrollToForm}
            className="text-white font-semibold text-lg group"
          >
            Reserve Now
            <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
          </GlassButton>

          <p className="text-sm text-gray-400 mt-4">
            No payment required now • Reserve yours today
          </p>
        </div>
      </div>
    </AuroraBackground>
  );
};
