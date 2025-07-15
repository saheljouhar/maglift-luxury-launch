
import { Link } from "react-router-dom";

export const Navigation = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-[9999] bg-transparent pointer-events-none">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-center">
          <Link 
            to="/" 
            className="flex items-center space-x-2 hover:opacity-80 transition-opacity pointer-events-auto"
          >
            <img 
              src="/lovable-uploads/45e55dd4-1d7d-4ed2-939c-34fb73d75980.png" 
              alt="MagLift Logo" 
              className="h-24 w-auto"
            />
          </Link>
        </div>
      </div>
    </nav>
  );
};
