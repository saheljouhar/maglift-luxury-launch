
import { Star, Instagram, Trophy } from "lucide-react";

const testimonials = [
  {
    name: "Sarah Johnson",
    role: "Fitness Influencer",
    content: "This bag is a game-changer! No more placing my stuff on dirty gym floors. The magnetic feature is so strong and reliable.",
    rating: 5,
    icon: Instagram,
    verified: true
  },
  {
    name: "Mike Chen",
    role: "Gym Owner",
    content: "The magnet is insanely strong and the premium look matches perfectly with our high-end gym aesthetic. Members love it!",
    rating: 5,
    icon: Trophy,
    verified: true
  },
  {
    name: "Alex Rivera",
    role: "Personal Trainer",
    content: "Finally, a gym bag that understands my needs. Water-resistant, spacious, and that magnetic backing is pure genius.",
    rating: 5,
    icon: Star,
    verified: true
  }
];

export const Testimonials = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-slate-900 mb-6">
            What Fitness Pros Are <span className="bg-gradient-to-r from-cyan-500 to-blue-600 bg-clip-text text-transparent">Saying</span>
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Join thousands of satisfied customers who've transformed their gym experience
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index}
              className="bg-gradient-to-br from-slate-50 to-white rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-slate-100 relative overflow-hidden"
            >
              {/* Stars */}
              <div className="flex space-x-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                ))}
              </div>

              {/* Content */}
              <blockquote className="text-slate-700 mb-6 leading-relaxed">
                "{testimonial.content}"
              </blockquote>

              {/* Author */}
              <div className="flex items-center justify-between">
                <div>
                  <div className="flex items-center space-x-2">
                    <h4 className="font-bold text-slate-900">{testimonial.name}</h4>
                    {testimonial.verified && (
                      <div className="w-4 h-4 bg-blue-500 rounded-full flex items-center justify-center">
                        <div className="w-2 h-2 bg-white rounded-full"></div>
                      </div>
                    )}
                  </div>
                  <p className="text-sm text-slate-600">{testimonial.role}</p>
                </div>
                
                <div className="p-2 bg-gradient-to-r from-cyan-100 to-blue-100 rounded-lg">
                  <testimonial.icon className="h-5 w-5 text-cyan-600" />
                </div>
              </div>

              {/* Background Gradient */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-cyan-500/10 to-blue-500/10 rounded-full -translate-y-16 translate-x-16"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
