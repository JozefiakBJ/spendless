
import { Menu, X, Apple, Play } from 'lucide-react';
import { Button } from '@/components/ui/button';
import LanguageSelector from '@/components/LanguageSelector';
import { useI18n } from '@/i18n/I18nContext';
import { cn } from '@/lib/utils';
import { Link } from 'react-router-dom';

type NavbarMobileProps = {
  mobileMenuOpen: boolean;
  setMobileMenuOpen: (open: boolean) => void;
  isHomePage: boolean;
  scrollToSection: (sectionId: string) => void;
};

const NavbarMobile = ({ 
  mobileMenuOpen, 
  setMobileMenuOpen, 
  isHomePage,
  scrollToSection 
}: NavbarMobileProps) => {
  const { t } = useI18n();

  return (
    <>
      {/* Mobile Menu Button */}
      <button 
        className="md:hidden text-gray-700"
        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        aria-expanded={mobileMenuOpen}
        aria-controls="mobile-menu"
        aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
      >
        {mobileMenuOpen ? <X size={24} aria-hidden="true" /> : <Menu size={24} aria-hidden="true" />}
      </button>

      {/* Mobile Menu Panel */}
      <div 
        id="mobile-menu"
        className={cn(
          "fixed inset-x-0 top-[72px] bg-white shadow-lg md:hidden transition-all duration-300 ease-in-out overflow-hidden",
          mobileMenuOpen ? "max-h-screen opacity-100" : "max-h-0 opacity-0"
        )}
        role="navigation"
        aria-label="Mobile navigation"
      >
        <div className="p-6 flex flex-col space-y-4">
          <div 
            onClick={() => scrollToSection('features')} 
            className="font-medium text-gray-600 hover:text-primary-600 transition-colors py-2 text-left cursor-pointer"
            role="button"
            tabIndex={0}
            aria-label="Navigate to features section"
          >
            {t('nav.features')}
          </div>
          <div 
            onClick={() => scrollToSection('testimonials')} 
            className="font-medium text-gray-600 hover:text-primary-600 transition-colors py-2 text-left cursor-pointer"
            role="button"
            tabIndex={0}
            aria-label="Navigate to testimonials section"
          >
            {t('nav.testimonials')}
          </div>
          <div 
            onClick={() => scrollToSection('pricing')} 
            className="font-medium text-gray-600 hover:text-primary-600 transition-colors py-2 text-left cursor-pointer"
            role="button"
            tabIndex={0}
            aria-label="Navigate to pricing section"
          >
            {t('nav.pricing')}
          </div>
          
          {/* Download Buttons in Mobile Menu */}
          <div className="flex flex-col gap-2 py-2">
            <span className="font-medium text-gray-600">{t('downloads.title')}</span>
            <div className="flex flex-wrap gap-2">
              <div 
                onClick={() => scrollToSection('downloads')} 
                className="flex-1 cursor-pointer"
                role="button"
                tabIndex={0}
                aria-label="Download on App Store"
              >
                <div className="bg-black text-white rounded-lg flex items-center justify-center px-3 py-1.5">
                  <Apple className="h-5 w-5 mr-1.5" aria-hidden="true" />
                  <div className="flex flex-col items-start">
                    <span className="text-[10px]">Download on the</span>
                    <span className="text-sm font-semibold leading-tight">App Store</span>
                  </div>
                </div>
              </div>
              <div 
                onClick={() => scrollToSection('downloads')} 
                className="flex-1 cursor-pointer"
                role="button"
                tabIndex={0}
                aria-label="Get it on Google Play"
              >
                <div className="bg-black text-white rounded-lg flex items-center justify-center px-3 py-1.5">
                  <Play className="h-5 w-5 mr-1.5" aria-hidden="true" />
                  <div className="flex flex-col items-start">
                    <span className="text-[10px]">GET IT ON</span>
                    <span className="text-sm font-semibold leading-tight">Google Play</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="py-2">
            <LanguageSelector />
          </div>
          <Link to="/dashboard" className="w-full">
            <Button variant="outline" className="bg-primary-50 text-primary-600 hover:bg-primary-100 font-medium transition-colors w-full">
              {t('nav.login')}
            </Button>
          </Link>
          <Button className="button-primary w-full">
            {t('nav.signup')}
          </Button>
        </div>
      </div>
    </>
  );
};

export default NavbarMobile;
