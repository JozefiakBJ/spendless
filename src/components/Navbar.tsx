
import { useState, useEffect } from 'react';
import { cn } from "@/lib/utils";
import { Menu, X } from 'lucide-react';
import LanguageSelector from './LanguageSelector';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300 py-4 px-6",
        isScrolled 
          ? "bg-white bg-opacity-90 backdrop-blur-md shadow-sm" 
          : "bg-transparent"
      )}
    >
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <a href="#" className="flex items-center space-x-2">
          <img 
            src="/lovable-uploads/4c207960-91fa-490e-9f6d-43f129b17017.png" 
            alt="SPENDLESS Logo" 
            className="h-10" 
          />
          <span className="font-display font-bold text-2xl tracking-tight text-primary-700">SPENDLESS</span>
        </a>

        {/* Desktop Navigation */}
        <div className="hidden md:flex space-x-8 items-center">
          <a href="#features" className="font-medium text-gray-600 hover:text-primary-600 transition-colors">Features</a>
          <a href="#testimonials" className="font-medium text-gray-600 hover:text-primary-600 transition-colors">Testimonials</a>
          <a href="#pricing" className="font-medium text-gray-600 hover:text-primary-600 transition-colors">Pricing</a>
          <LanguageSelector />
          <button className="bg-primary-50 text-primary-600 hover:bg-primary-100 px-4 py-2 rounded-full font-medium transition-colors">Log in</button>
          <button className="button-primary">Sign up free</button>
        </div>

        {/* Mobile Menu Button */}
        <button 
          className="md:hidden text-gray-700"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <div 
        className={cn(
          "fixed inset-x-0 top-[72px] bg-white shadow-lg md:hidden transition-all duration-300 ease-in-out overflow-hidden",
          mobileMenuOpen ? "max-h-screen opacity-100" : "max-h-0 opacity-0"
        )}
      >
        <div className="p-6 flex flex-col space-y-4">
          <a 
            href="#features" 
            className="font-medium text-gray-600 hover:text-primary-600 transition-colors py-2"
            onClick={() => setMobileMenuOpen(false)}
          >
            Features
          </a>
          <a 
            href="#testimonials" 
            className="font-medium text-gray-600 hover:text-primary-600 transition-colors py-2"
            onClick={() => setMobileMenuOpen(false)}
          >
            Testimonials
          </a>
          <a 
            href="#pricing" 
            className="font-medium text-gray-600 hover:text-primary-600 transition-colors py-2"
            onClick={() => setMobileMenuOpen(false)}
          >
            Pricing
          </a>
          <div className="py-2">
            <LanguageSelector />
          </div>
          <button className="bg-primary-50 text-primary-600 hover:bg-primary-100 px-4 py-2 rounded-full font-medium transition-colors w-full">
            Log in
          </button>
          <button className="button-primary w-full">
            Sign up free
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
