
import { Link } from "react-router-dom";

export const Navigation = () => {
  return (
    <>
      {/* Fixed logo positioned absolutely */}
      <Link 
        to="/" 
        className="header-logo fixed top-5 left-1/2 transform -translate-x-1/2 z-[1000] bg-transparent hover:opacity-80 transition-opacity"
        style={{
          position: 'fixed',
          top: '20px',
          left: '50%',
          transform: 'translateX(-50%)',
          zIndex: 1000,
          background: 'transparent'
        }}
      >
        <img 
          src="/lovable-uploads/45e55dd4-1d7d-4ed2-939c-34fb73d75980.png" 
          alt="MagLift Logo" 
          className="h-20 w-auto filter drop-shadow-lg"
        />
      </Link>
      
      {/* Transparent header container - no background, static positioning */}
      <header 
        className="bg-transparent"
        style={{
          background: 'transparent',
          position: 'static'
        }}
      >
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-center">
            {/* Empty space to maintain layout */}
            <div className="h-20"></div>
          </div>
        </div>
      </header>
    </>
  );
};
