
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Checkbox } from "@/components/ui/checkbox";
import { useToast } from "@/hooks/use-toast";
import { supabase } from "@/integrations/supabase/client";
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

    try {
      const { error } = await (supabase as any)
        .from('booking')
        .insert([
          {
            full_name: formData.name,
            email: formData.email,
            phone: formData.phone,
            instagram: formData.instagram,
            source: formData.whatsappOptIn ? 'whatsapp_opted' : 'web_form'
          }
        ]);

      if (error) throw error;

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
    } catch (error) {
      console.error('Error saving booking:', error);
      toast({
        title: "Error",
        description: "Something went wrong. Please try again.",
        variant: "destructive"
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleInputChange = (field: string, value: string | boolean) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  return (
    <section id="lead-form" className="py-20 bg-gradient-to-br from-gray-50 to-white">
      <div className="container mx-auto px-4">
        <div className="max-w-2xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl lg:text-5xl font-bold text-black mb-6">
              Reserve Your <span className="bg-gradient-to-r from-black to-gray-600 bg-clip-text text-transparent">MagLift</span>
            </h2>
            <p className="text-xl text-gray-600 mb-4">
              Join the waitlist for exclusive early access and special pricing
            </p>
            <div className="inline-flex items-center space-x-2 bg-gray-100 text-gray-800 px-4 py-2 rounded-full">
              <Shield className="h-4 w-4" />
              <span className="text-sm font-medium">No payment required now</span>
            </div>
          </div>

          <form onSubmit={handleSubmit} className="form-container bg-white rounded-2xl shadow-xl p-8 pr-16">
            {/* First Row - Name and Email */}
            <div className="grid md:grid-cols-2 gap-6 mb-12">
              <div className="name-field">
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Full Name *
                </label>
                <Input
                  type="text"
                  required
                  value={formData.name}
                  onChange={(e) => handleInputChange("name", e.target.value)}
                  className="w-full h-12 px-4 py-3 rounded-xl bg-gray-100 border-gray-300 focus:border-black focus:ring-black"
                  placeholder="Enter your name"
                />
              </div>
              
              <div className="email-field">
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Email Address *
                </label>
                <Input
                  type="email"
                  required
                  value={formData.email}
                  onChange={(e) => handleInputChange("email", e.target.value)}
                  className="w-full h-12 px-4 py-3 rounded-xl bg-gray-100 border-gray-300 focus:border-black focus:ring-black"
                  placeholder="your@email.com"
                />
              </div>
            </div>

            {/* Second Row - Phone and Instagram */}
            <div className="grid md:grid-cols-2 gap-6 mb-12">
              <div className="phone-field">
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Phone Number *
                </label>
                <Input
                  type="tel"
                  required
                  value={formData.phone}
                  onChange={(e) => handleInputChange("phone", e.target.value)}
                  className="w-full h-12 px-4 py-3 rounded-xl bg-gray-100 border-gray-300 focus:border-black focus:ring-black"
                  placeholder="+1 (555) 000-0000"
                />
              </div>
              
              <div className="instagram-field">
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Instagram Handle
                </label>
                <Input
                  type="text"
                  value={formData.instagram}
                  onChange={(e) => handleInputChange("instagram", e.target.value)}
                  className="w-full h-12 px-4 py-3 rounded-xl bg-gray-100 border-gray-300 focus:border-black focus:ring-black"
                  placeholder="@yourusername"
                />
              </div>
            </div>

            {/* WhatsApp Checkbox */}
            <div className="flex items-center space-x-3 mb-10">
              <Checkbox
                id="whatsapp"
                checked={formData.whatsappOptIn}
                onCheckedChange={(checked) => handleInputChange("whatsappOptIn", checked as boolean)}
              />
              <label htmlFor="whatsapp" className="text-sm text-gray-600 flex items-center">
                <MessageCircle className="h-4 w-4 mr-2 text-gray-600" />
                Get COD/payment link via WhatsApp for faster checkout
              </label>
            </div>

            {/* Submit Button */}
            <div className="px-0">
              <Button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-gradient-to-r from-black to-gray-800 hover:from-gray-800 hover:to-black text-white py-4 text-lg font-semibold rounded-xl shadow-lg hover:shadow-black/25 transition-all duration-300 hover:scale-105 mb-4"
              >
                {isSubmitting ? "Reserving Your Spot..." : "Reserve My MagLift Now"}
              </Button>
              
              <p className="text-xs text-gray-500 text-center">
                🔒 We respect your privacy. No spam, ever. Unsubscribe anytime.
              </p>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};
