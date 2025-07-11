
import { Instagram } from "lucide-react";
import { Link } from "react-router-dom";

export const Navigation = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-transparent">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center space-x-2 hover:opacity-80 transition-opacity">
            <img 
              src="/lovable-uploads/45e55dd4-1d7d-4ed2-939c-34fb73d75980.png" 
              alt="MagLift Logo" 
              className="h-12 w-auto"
            />
          </Link>
          
          <Link 
            to="/demo" 
            className="text-white/80 hover:text-white transition-colors text-sm font-mono tracking-wide"
          >
            Demo
          </Link>
        </div>
      </div>
    </nav>
  );
};
