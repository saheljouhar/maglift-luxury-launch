
import { Instagram } from "lucide-react";

export const Navigation = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b border-slate-200 shadow-sm">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <a 
            href="https://instagram.com" 
            target="_blank" 
            rel="noopener noreferrer"
            className="flex items-center space-x-2 hover:opacity-80 transition-opacity"
          >
            <img 
              src="/lovable-uploads/c2c7a70f-5cfd-4052-809a-2cdcf749cd7c.png" 
              alt="MagLift Logo" 
              className="h-12 w-auto"
            />
          </a>
          
          <a 
            href="https://instagram.com" 
            target="_blank" 
            rel="noopener noreferrer"
            className="flex items-center space-x-2 bg-gradient-to-r from-purple-500 to-pink-500 text-white px-4 py-2 rounded-full hover:shadow-lg transition-all duration-300 hover:scale-105"
          >
            <Instagram className="h-4 w-4" />
            <span className="font-medium">Follow Us</span>
          </a>
        </div>
      </div>
    </nav>
  );
};
