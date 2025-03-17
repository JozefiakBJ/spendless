
import { useState, useEffect } from 'react';
import { cn } from "@/lib/utils";
import { Menu, X, Download, Apple, Play } from 'lucide-react';
import LanguageSelector from './LanguageSelector';
import { useI18n } from '@/i18n/I18nContext';
import { Button } from '@/components/ui/button';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { t } = useI18n();

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
          <a href="#features" className="font-medium text-gray-600 hover:text-primary-600 transition-colors">
            {t('nav.features')}
          </a>
          <a href="#testimonials" className="font-medium text-gray-600 hover:text-primary-600 transition-colors">
            {t('nav.testimonials')}
          </a>
          <a href="#pricing" className="font-medium text-gray-600 hover:text-primary-600 transition-colors">
            {t('nav.pricing')}
          </a>
          
          {/* Download Button in Navbar */}
          <a href="#downloads" className="group relative">
            <Button 
              variant="outline" 
              size="sm" 
              className="border-primary-300 text-primary-600 hover:bg-primary-50 group-hover:opacity-0 transition-opacity"
            >
              <Download className="mr-2 h-4 w-4" />
              {t('downloads.title')}
            </Button>
            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity flex gap-1 -translate-y-1">
              <div className="bg-black text-white rounded-md flex items-center justify-center px-2 py-1 scale-75 transform-gpu">
                <Apple className="h-3 w-3 mr-1" />
                <span className="text-[10px] font-semibold">App Store</span>
              </div>
              <div className="bg-black text-white rounded-md flex items-center justify-center px-2 py-1 scale-75 transform-gpu">
                <Play className="h-3 w-3 mr-1" />
                <span className="text-[10px] font-semibold">Google Play</span>
              </div>
            </div>
          </a>
          
          <LanguageSelector />
          <button className="bg-primary-50 text-primary-600 hover:bg-primary-100 px-4 py-2 rounded-full font-medium transition-colors">
            {t('nav.login')}
          </button>
          <button className="button-primary">
            {t('nav.signup')}
          </button>
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
            {t('nav.features')}
          </a>
          <a 
            href="#testimonials" 
            className="font-medium text-gray-600 hover:text-primary-600 transition-colors py-2"
            onClick={() => setMobileMenuOpen(false)}
          >
            {t('nav.testimonials')}
          </a>
          <a 
            href="#pricing" 
            className="font-medium text-gray-600 hover:text-primary-600 transition-colors py-2"
            onClick={() => setMobileMenuOpen(false)}
          >
            {t('nav.pricing')}
          </a>
          
          {/* Download Buttons in Mobile Menu */}
          <div className="flex flex-col gap-2 py-2">
            <span className="font-medium text-gray-600">{t('downloads.title')}</span>
            <div className="flex flex-wrap gap-2">
              <a 
                href="#downloads" 
                className="flex-1"
                onClick={() => setMobileMenuOpen(false)}
              >
                <div className="bg-black text-white rounded-lg flex items-center justify-center px-3 py-1.5">
                  <Apple className="h-5 w-5 mr-1.5" />
                  <div className="flex flex-col items-start">
                    <span className="text-[10px]">Download on the</span>
                    <span className="text-sm font-semibold leading-tight">App Store</span>
                  </div>
                </div>
              </a>
              <a 
                href="#downloads" 
                className="flex-1"
                onClick={() => setMobileMenuOpen(false)}
              >
                <div className="bg-black text-white rounded-lg flex items-center justify-center px-3 py-1.5">
                  <Play className="h-5 w-5 mr-1.5" />
                  <div className="flex flex-col items-start">
                    <span className="text-[10px]">GET IT ON</span>
                    <span className="text-sm font-semibold leading-tight">Google Play</span>
                  </div>
                </div>
              </a>
            </div>
          </div>
          
          <div className="py-2">
            <LanguageSelector />
          </div>
          <button className="bg-primary-50 text-primary-600 hover:bg-primary-100 px-4 py-2 rounded-full font-medium transition-colors w-full">
            {t('nav.login')}
          </button>
          <button className="button-primary w-full">
            {t('nav.signup')}
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
