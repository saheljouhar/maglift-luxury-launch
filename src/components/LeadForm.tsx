
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Checkbox } from "@/components/ui/checkbox";
import { useToast } from "@/hooks/use-toast";
import { Shield, MessageCircle } from "lucide-react";

export const LeadForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    instagram: "",
    whatsappOptIn: false
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    setTimeout(() => {
      toast({
        title: "Success! 🎉",
        description: "We'll DM your payment link soon. Check your inbox!",
      });
      setFormData({
        name: "",
        email: "",
        phone: "",
        instagram: "",
        whatsappOptIn: false
      });
      setIsSubmitting(false);
    }, 1500);
  };

  const handleInputChange = (field: string, value: string | boolean) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  return (
    <section id="lead-form" className="py-20 bg-gradient-to-br from-slate-50 to-blue-50">
      <div className="container mx-auto px-4">
        <div className="max-w-2xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl lg:text-5xl font-bold text-slate-900 mb-6">
              Reserve Your <span className="bg-gradient-to-r from-cyan-500 to-blue-600 bg-clip-text text-transparent">MagLift</span>
            </h2>
            <p className="text-xl text-slate-600 mb-4">
              Join the waitlist for exclusive early access and special pricing
            </p>
            <div className="inline-flex items-center space-x-2 bg-green-100 text-green-800 px-4 py-2 rounded-full">
              <Shield className="h-4 w-4" />
              <span className="text-sm font-medium">No payment required now</span>
            </div>
          </div>

          <form onSubmit={handleSubmit} className="bg-white rounded-2xl shadow-xl p-8">
            <div className="grid md:grid-cols-2 gap-6 mb-6">
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-2">
                  Full Name *
                </label>
                <Input
                  type="text"
                  required
                  value={formData.name}
                  onChange={(e) => handleInputChange("name", e.target.value)}
                  className="w-full rounded-xl border-slate-300 focus:border-cyan-500 focus:ring-cyan-500"
                  placeholder="Enter your name"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-2">
                  Email Address *
                </label>
                <Input
                  type="email"
                  required
                  value={formData.email}
                  onChange={(e) => handleInputChange("email", e.target.value)}
                  className="w-full rounded-xl border-slate-300 focus:border-cyan-500 focus:ring-cyan-500"
                  placeholder="your@email.com"
                />
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-6 mb-6">
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-2">
                  Phone Number *
                </label>
                <Input
                  type="tel"
                  required
                  value={formData.phone}
                  onChange={(e) => handleInputChange("phone", e.target.value)}
                  className="w-full rounded-xl border-slate-300 focus:border-cyan-500 focus:ring-cyan-500"
                  placeholder="+1 (555) 000-0000"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-2">
                  Instagram Handle
                </label>
                <Input
                  type="text"
                  value={formData.instagram}
                  onChange={(e) => handleInputChange("instagram", e.target.value)}
                  className="w-full rounded-xl border-slate-300 focus:border-cyan-500 focus:ring-cyan-500"
                  placeholder="@yourusername"
                />
              </div>
            </div>

            <div className="flex items-center space-x-3 mb-6">
              <Checkbox
                id="whatsapp"
                checked={formData.whatsappOptIn}
                onCheckedChange={(checked) => handleInputChange("whatsappOptIn", checked as boolean)}
              />
              <label htmlFor="whatsapp" className="text-sm text-slate-600 flex items-center">
                <MessageCircle className="h-4 w-4 mr-2 text-green-600" />
                Get COD/payment link via WhatsApp for faster checkout
              </label>
            </div>

            <Button
              type="submit"
              disabled={isSubmitting}
              className="w-full bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white py-4 text-lg font-semibold rounded-xl shadow-lg hover:shadow-cyan-500/25 transition-all duration-300 hover:scale-105"
            >
              {isSubmitting ? "Reserving Your Spot..." : "Reserve My MagLift Now"}
            </Button>

            <p className="text-xs text-slate-500 text-center mt-4">
              🔒 We respect your privacy. No spam, ever. Unsubscribe anytime.
            </p>
          </form>
        </div>
      </div>
    </section>
  );
};
