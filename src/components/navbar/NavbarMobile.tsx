
import { Menu, X, Download } from 'lucide-react';
import { Button } from '@/components/ui/button';
import LanguageSelector from '@/components/LanguageSelector';
import { useI18n } from '@/i18n/I18nContext';
import { cn } from '@/lib/utils';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import DesktopDownloadOptions from '@/components/downloads/DesktopDownloadOptions';

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
          "fixed inset-x-0 top-0 mt-[48px] py-2 bg-white md:hidden transition-all duration-300 ease-in-out overflow-hidden",
          mobileMenuOpen ? "max-h-screen opacity-100" : "max-h-0 opacity-0"
        )}
        role="navigation"
        aria-label="Mobile navigation"
      >
        <div className="p-6 flex flex-col space-y-4">
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

          {/* Download Dialog */}
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
      </div>
    </>
  );
};

export default NavbarMobile;
