
import { Magnet, Shield, Briefcase, Lock } from "lucide-react";

const features = [
  {
    icon: Magnet,
    title: "Strong Magnetic Backing",
    description: "Securely attaches to any metal surface with industrial-grade magnets that won't slip or fall.",
    color: "from-gray-700 to-gray-900"
  },
  {
    icon: Shield,
    title: "Premium Durable Fabric",
    description: "Water-resistant & sweat-proof materials that maintain their luxury look through every workout.",
    color: "from-gray-600 to-gray-800"
  },
  {
    icon: Briefcase,
    title: "Spacious Design",
    description: "Fits shoes, towels, 10.5\" tablets, water bottles, and all your gym essentials with room to spare.",
    color: "from-gray-500 to-gray-700"
  },
  {
    icon: Lock,
    title: "Anti-Theft Zippers",
    description: "Hidden pockets and secure zippers keep your valuables safe while you focus on your workout.",
    color: "from-gray-400 to-gray-600"
  }
];

export const Features = () => {
  return (
    <section className="py-20 bg-gray-100">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Why <span className="bg-gradient-to-r from-gray-700 to-gray-900 bg-clip-text text-transparent">MagLift</span> Changes Everything
          </h2>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto">
            Engineered for the modern fitness enthusiast who demands both functionality and style
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 justify-center">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="group relative bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 hover:scale-[1.02] hover:bg-gray-800 border border-gray-200 w-[300px] mx-auto"
            >
              <div className={`inline-flex p-3 rounded-xl bg-gradient-to-r ${feature.color} mb-4 group-hover:scale-110 transition-transform duration-300`}>
                <feature.icon className="h-6 w-6 text-white" />
              </div>
              
              <h3 className="text-xl font-bold text-gray-900 group-hover:text-white mb-3 transition-colors duration-300">
                {feature.title}
              </h3>
              
              <p className="text-gray-700 group-hover:text-gray-200 leading-relaxed transition-colors duration-300">
                {feature.description}
              </p>

              {/* Hover Gradient Border */}
              <div className={`absolute inset-0 rounded-2xl bg-gradient-to-r ${feature.color} opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10 blur-xl`}></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
