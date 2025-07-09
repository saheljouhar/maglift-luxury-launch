
import { useState } from "react";
import { ChevronDown, Truck, CreditCard, Shield, Calendar } from "lucide-react";

const faqs = [
  {
    question: "When will my MagLift ship?",
    answer: "Pre-orders will ship by March 15th, 2024. You'll receive tracking information as soon as your order is processed.",
    icon: Truck
  },
  {
    question: "Is payment required now?",
    answer: "No! Reserve your spot now and pay later. We'll send you a secure payment link when your MagLift is ready to ship.",
    icon: CreditCard
  },
  {
    question: "How strong are the magnets?",
    answer: "Our industrial-grade neodymium magnets can hold up to 25 lbs securely. They're designed to work on any ferrous metal surface.",
    icon: Shield
  },
  {
    question: "What's your return policy?",
    answer: "We offer a 30-day money-back guarantee. If you're not completely satisfied, return your MagLift for a full refund.",
    icon: Calendar
  }
];

export const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="py-20 bg-gradient-to-br from-slate-50 to-blue-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-slate-900 mb-6">
            Frequently Asked <span className="bg-gradient-to-r from-cyan-500 to-blue-600 bg-clip-text text-transparent">Questions</span>
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Everything you need to know about MagLift
          </p>
        </div>

        <div className="max-w-3xl mx-auto space-y-4">
          {faqs.map((faq, index) => (
            <div 
              key={index}
              className="bg-white rounded-2xl shadow-lg overflow-hidden border border-slate-100"
            >
              <button
                className="w-full px-6 py-6 text-left flex items-center justify-between hover:bg-slate-50 transition-colors duration-200"
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
              >
                <div className="flex items-center space-x-4">
                  <div className="p-2 bg-gradient-to-r from-cyan-100 to-blue-100 rounded-lg">
                    <faq.icon className="h-5 w-5 text-cyan-600" />
                  </div>
                  <h3 className="text-lg font-semibold text-slate-900">
                    {faq.question}
                  </h3>
                </div>
                
                <ChevronDown 
                  className={`h-5 w-5 text-slate-500 transition-transform duration-200 ${
                    openIndex === index ? 'rotate-180' : ''
                  }`}
                />
              </button>
              
              {openIndex === index && (
                <div className="px-6 pb-6 animate-fade-in">
                  <div className="pl-12">
                    <p className="text-slate-600 leading-relaxed">
                      {faq.answer}
                    </p>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
