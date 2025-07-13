
import { useState, useEffect } from "react";
import { ArrowRight } from "lucide-react";
import { GlassButton } from "@/components/ui/glass-button";
import { AuroraBackground } from "@/components/ui/aurora-background";

export const Hero = () => {
  const scrollToForm = () => {
    const formElement = document.getElementById('lead-form');
    if (formElement) {
      formElement.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
      });
      
      // Add fade-in animation to form
      formElement.style.opacity = '0';
      formElement.style.transform = 'translateY(20px)';
      setTimeout(() => {
        formElement.style.transition = 'opacity 0.6s ease-out, transform 0.6s ease-out';
        formElement.style.opacity = '1';
        formElement.style.transform = 'translateY(0)';
      }, 100);
    }
  };

  return (
    <AuroraBackground className="dark">
      {/* Account for fixed header */}
      <div className="h-24"></div>
      
      <div className="container mx-auto px-4 py-12 relative z-10">
        <div className="flex flex-col items-center justify-center min-h-[80vh] text-center">
          {/* Main Heading */}
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight max-w-5xl">
            MagLift – The Ultimate No-Floor Gym Bag
          </h1>

          {/* Subheading */}
          <p className="text-lg md:text-xl lg:text-2xl text-gray-300 mb-12 font-light max-w-3xl">
            Stick it. Snap it. Never lose your essentials again.
          </p>

          {/* Glass Button - Centered, No Border */}
          <GlassButton 
            onClick={scrollToForm}
            className="text-white font-semibold text-lg group border-0 bg-white/10 backdrop-blur-md hover:bg-white/15"
          >
            Reserve Now
            <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
          </GlassButton>
        </div>
      </div>
    </AuroraBackground>
  );
};
