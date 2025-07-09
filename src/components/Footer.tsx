
import { Instagram, MessageCircle, Shield } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="bg-slate-900 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8 items-center">
          {/* Logo & Brand */}
          <div>
            <img 
              src="/lovable-uploads/c2c7a70f-5cfd-4052-809a-2cdcf749cd7c.png" 
              alt="MagLift Logo" 
              className="h-12 w-auto mb-4"
            />
            <p className="text-slate-400">
              The ultimate magnetic gym bag for modern fitness enthusiasts.
            </p>
          </div>

          {/* Contact Links */}
          <div className="text-center">
            <h3 className="font-semibold mb-4">Connect With Us</h3>
            <div className="flex justify-center space-x-6">
              <a 
                href="https://instagram.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center space-x-2 text-slate-300 hover:text-cyan-400 transition-colors"
              >
                <Instagram className="h-5 w-5" />
                <span>Instagram</span>
              </a>
              
              <a 
                href="https://wa.me/1234567890" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center space-x-2 text-slate-300 hover:text-green-400 transition-colors"
              >
                <MessageCircle className="h-5 w-5" />
                <span>WhatsApp</span>
              </a>
            </div>
          </div>

          {/* Privacy */}
          <div className="text-center md:text-right">
            <div className="flex items-center justify-center md:justify-end space-x-2 mb-2">
              <Shield className="h-4 w-4 text-cyan-400" />
              <span className="text-sm">Privacy Protected</span>
            </div>
            <p className="text-xs text-slate-400">
              © 2024 MagLift. All rights reserved.
            </p>
          </div>
        </div>
        
        <div className="border-t border-slate-800 mt-8 pt-8 text-center">
          <p className="text-slate-400 text-sm">
            Made with ❤️ for fitness enthusiasts worldwide
          </p>
        </div>
      </div>
    </footer>
  );
};
