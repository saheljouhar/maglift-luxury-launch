
import { useState, useEffect } from "react";
import { ArrowRight, Flame } from "lucide-react";
import { LiquidButton } from "@/components/ui/liquid-glass-button";

export const Hero = () => {
  const [stockLeft, setStockLeft] = useState(32);

  useEffect(() => {
    // Simulate stock decreasing for urgency
    const interval = setInterval(() => {
      setStockLeft(prev => prev > 25 ? prev - 1 : prev);
    }, 30000);

    return () => clearInterval(interval);
  }, []);

  const scrollToForm = () => {
    document.getElementById('lead-form')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="relative min-h-screen pt-20 bg-gradient-to-br from-black via-gray-900 to-black overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-30" style={{
        backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23FFFFFF' fill-opacity='0.05'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
      }}></div>
      
      <div className="container mx-auto px-4 py-12 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center min-h-[80vh]">
          {/* Left Column - Content */}
          <div className="text-center lg:text-left animate-fade-in">
            {/* Urgency Badge */}
            <div className="inline-flex items-center space-x-2 bg-white/20 border border-white/40 text-white px-4 py-2 rounded-full mb-6 animate-pulse">
              <Flame className="h-4 w-4" />
              <span className="text-sm font-medium">
                Only {stockLeft}/50 left at launch price!
              </span>
            </div>

            <h1 className="text-5xl lg:text-7xl font-bold text-white mb-6 leading-tight">
              <span className="bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
                MagLift
              </span>
              <br />
              <span className="text-3xl lg:text-4xl text-gray-300 block mt-2">
                The Ultimate No-Floor Gym Bag
              </span>
            </h1>

            <p className="text-xl lg:text-2xl text-gray-300 mb-8 font-light">
              Stick it. Snap it. Never lose your essentials again.
            </p>

            <div className="space-y-4 mb-8">
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

            <LiquidButton 
              onClick={scrollToForm}
              size="xxl"
              className="text-black font-semibold text-lg hover:text-gray-800 transition-colors group"
            >
              Reserve Now – Limited Stock!
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </LiquidButton>

            <p className="text-sm text-gray-400 mt-4">
              No payment required now • Reserve yours today
            </p>
          </div>

          {/* Right Column - Product Images */}
          <div className="relative">
            <div className="grid grid-cols-2 gap-6 animate-fade-in">
              <div className="transform rotate-3 hover:rotate-0 transition-transform duration-500">
                <img 
                  src="/lovable-uploads/7782c7a3-9486-4884-8883-d260fc2691f8.png"
                  alt="MagLift Black Gym Bag"
                  className="w-full h-auto rounded-2xl shadow-2xl hover:shadow-white/20 transition-shadow duration-300"
                />
              </div>
              <div className="transform -rotate-3 hover:rotate-0 transition-transform duration-500 mt-8">
                <img 
                  src="/lovable-uploads/fe10892e-7ff6-4347-b8fc-1b7b379c6628.png"
                  alt="MagLift Gray Gym Bag"
                  className="w-full h-auto rounded-2xl shadow-2xl hover:shadow-white/20 transition-shadow duration-300"
                />
              </div>
            </div>
            
            {/* Floating Elements */}
            <div className="absolute -top-4 -right-4 bg-gradient-to-r from-white to-gray-200 text-black px-4 py-2 rounded-full text-sm font-bold animate-bounce">
              NEW!
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
