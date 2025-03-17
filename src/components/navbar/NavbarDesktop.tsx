
import { Download } from 'lucide-react';
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
      
      {/* Simple Download Button in Navbar with normal hover effect */}
      <Button 
        variant="outline" 
        size="sm"
        onClick={() => scrollToSection('downloads')}
        className="border-primary-300 text-primary-600 hover:bg-primary-100 hover:text-primary-700 transition-colors"
        aria-label="Navigate to downloads section"
      >
        <Download className="mr-2 h-4 w-4" aria-hidden="true" />
        {t('downloads.title')}
      </Button>
      
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
