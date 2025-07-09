
import { Play } from "lucide-react";

export const VideoDemo = () => {
  return (
    <section className="py-20 bg-gradient-to-r from-slate-900 to-blue-900 relative overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
            Watch It In <span className="bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">Action</span>
          </h2>
          <p className="text-xl text-slate-300 max-w-2xl mx-auto">
            See how MagLift's powerful magnetic system keeps your bag secure and accessible
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="relative bg-slate-800 rounded-2xl overflow-hidden shadow-2xl">
            <div className="aspect-video bg-gradient-to-br from-slate-700 to-slate-800 flex items-center justify-center">
              <div className="text-center">
                <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-full mb-4 hover:scale-110 transition-transform duration-300 cursor-pointer">
                  <Play className="h-8 w-8 text-white ml-1" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-2">Demo Video Coming Soon!</h3>
                <p className="text-slate-300">
                  10-15 second demo of MagLift sticking to gym equipment
                </p>
              </div>
            </div>
            
            {/* Video Controls Placeholder */}
            <div className="bg-slate-700 px-6 py-4 flex items-center justify-between">
              <div className="flex items-center space-x-4">
                <div className="w-2 h-2 bg-cyan-400 rounded-full animate-pulse"></div>
                <span className="text-white text-sm">Premium Quality • 4K Resolution</span>
              </div>
              <span className="text-slate-300 text-sm">0:15</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
