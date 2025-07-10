
import { useState } from "react";
import { Hero } from "@/components/Hero";
import { Features } from "@/components/Features";
import { VideoDemo } from "@/components/VideoDemo";
import { LeadForm } from "@/components/LeadForm";
import { Testimonials } from "@/components/Testimonials";
import { FAQ } from "@/components/FAQ";
import { Footer } from "@/components/Footer";
import { Navigation } from "@/components/Navigation";

const Index = () => {
  return (
    <div className="min-h-screen bg-slate-950">
      <Navigation />
      <Hero />
      <Features />
      <VideoDemo />
      <LeadForm />
      <Testimonials />
      <FAQ />
      <Footer />
    </div>
  );
};

export default Index;
