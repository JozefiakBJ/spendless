
import { Download } from 'lucide-react';
import { Button } from '@/components/ui/button';
import LanguageSelector from '@/components/LanguageSelector';
import { useI18n } from '@/i18n/I18nContext';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import DesktopDownloadOptions from '@/components/downloads/DesktopDownloadOptions';

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
        onClick={() => scrollToSection('faq')}
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
        {t('premiumPlans.title')}
      </div>
      
      {/* New download dialog */}
      <Dialog>
        <DialogTrigger asChild>
          <div 
            className="font-medium text-gray-600 hover:text-primary-600 transition-colors cursor-pointer flex items-center"
            role="button"
            tabIndex={0}
          >
            <Download className="h-4 w-4 mr-1" />
            {t('downloads.title')}
          </div>
        </DialogTrigger>
        <DialogContent className="sm:max-w-md">
          <DialogHeader>
            <DialogTitle>{t('downloads.desktop.title')}</DialogTitle>
          </DialogHeader>
          <DesktopDownloadOptions />
        </DialogContent>
      </Dialog>

      <LanguageSelector />
      <Button className="bg-sand-200 hover:bg-sand-300 text-sand-900 hover:text-sand-950 font-medium shadow-sm transition-colors">
        {t('nav.login')}
      </Button>
    </div>
  );
};

export default NavbarDesktop;
