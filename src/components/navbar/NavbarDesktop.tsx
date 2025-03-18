
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
        onClick={() => window.location.href = '/faq'}
        className="font-medium text-gray-600 hover:text-primary-600 transition-colors cursor-pointer"
        role="button"
        tabIndex={0}
        aria-label="Navigate to FAQ Section"
      >
        {t('faq.title')}
      </div>
      <div 
        onClick={() => scrollToSection('premium-plans')}
        className="font-medium text-gray-600 hover:text-primary-600 transition-colors cursor-pointer"
        role="button"
        tabIndex={0}
        aria-label="Navigate to pricing section"
      >
        {t('nav.pricing')}
      </div>
      
      {/* Download Button with sand color scheme */}
      <Button 
        variant="outline" 
        size="sm"
        onClick={() => scrollToSection('downloads')}
        className="border-sand-300 text-sand-800 hover:bg-sand-100 hover:text-sand-900 transition-colors"
        aria-label="Navigate to downloads section"
      >
        <Download className="mr-2 h-4 w-4" aria-hidden="true" />
        {t('downloads.title')}
      </Button>
      
      <LanguageSelector />
      <Button className="bg-sand-200 hover:bg-sand-300 text-sand-900 hover:text-sand-950 font-medium shadow-sm transition-colors">
        {t('nav.signup')}
      </Button>
    </div>
  );
};

export default NavbarDesktop;
