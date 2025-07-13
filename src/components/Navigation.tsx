
import { Link } from "react-router-dom";

export const Navigation = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-md border-b border-gray-200">
      <div className="container mx-auto px-4 py-3">
        <div className="flex items-center justify-center">
          <Link to="/" className="flex items-center space-x-2 hover:opacity-80 transition-opacity">
            <img 
              src="/lovable-uploads/45e55dd4-1d7d-4ed2-939c-34fb73d75980.png" 
              alt="MagLift Logo" 
              className="h-16 w-auto"
            />
          </Link>
        </div>
      </div>
    </nav>
  );
};
