
import { Download, Apple, Play } from 'lucide-react';
import { Button } from '@/components/ui/button';
import LanguageSelector from '@/components/LanguageSelector';
import { useI18n } from '@/i18n/I18nContext';

type NavbarDesktopProps = {
  isHomePage: boolean;
  scrollToSection: (sectionId: string) => void;
};

const NavbarDesktop = ({ isHomePage, scrollToSection }: NavbarDesktopProps) => {
  const { t } = useI18n();

  return (
    <div className="hidden md:flex space-x-8 items-center" role="navigation" aria-label="Desktop navigation">
      <div 
        onClick={() => scrollToSection('features')} 
        className="font-medium text-gray-600 hover:text-primary-600 transition-colors cursor-pointer"
        role="button"
        tabIndex={0}
        aria-label="Navigate to features section"
      >
        {t('nav.features')}
      </div>
      <div 
        onClick={() => scrollToSection('testimonials')} 
        className="font-medium text-gray-600 hover:text-primary-600 transition-colors cursor-pointer"
        role="button"
        tabIndex={0}
        aria-label="Navigate to testimonials section"
      >
        {t('nav.testimonials')}
      </div>
      <div 
        onClick={() => scrollToSection('pricing')} 
        className="font-medium text-gray-600 hover:text-primary-600 transition-colors cursor-pointer"
        role="button"
        tabIndex={0}
        aria-label="Navigate to pricing section"
      >
        {t('nav.pricing')}
      </div>
      
      {/* Download Button in Navbar */}
      <div 
        onClick={() => scrollToSection('downloads')}
        className="group relative cursor-pointer"
        role="button"
        tabIndex={0}
        aria-label="Navigate to downloads section"
      >
        <Button 
          variant="outline" 
          size="sm" 
          className="border-primary-300 text-primary-600 hover:bg-primary-50 group-hover:opacity-0 transition-opacity"
        >
          <Download className="mr-2 h-4 w-4" aria-hidden="true" />
          {t('downloads.title')}
        </Button>
        <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity flex gap-1 -translate-y-1">
          <div className="bg-black text-white rounded-md flex items-center justify-center px-2 py-1 scale-75 transform-gpu">
            <Apple className="h-3 w-3 mr-1" aria-hidden="true" />
            <span className="text-[10px] font-semibold">App Store</span>
          </div>
          <div className="bg-black text-white rounded-md flex items-center justify-center px-2 py-1 scale-75 transform-gpu">
            <Play className="h-3 w-3 mr-1" aria-hidden="true" />
            <span className="text-[10px] font-semibold">Google Play</span>
          </div>
        </div>
      </div>
      
      <LanguageSelector />
      <Button variant="outline" className="bg-primary-50 text-primary-600 hover:bg-primary-100 font-medium transition-colors">
        {t('nav.login')}
      </Button>
      <Button className="button-primary">
        {t('nav.signup')}
      </Button>
    </div>
  );
};

export default NavbarDesktop;
