
import { Github, Twitter, Instagram, Linkedin } from 'lucide-react';
import { useI18n } from '@/i18n/I18nContext';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { CookieSettingsLink } from './cookies/CookieSettingsLink';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const { t } = useI18n();
  const navigate = useNavigate();
  const location = useLocation();

  const scrollToSection = (sectionId: string) => {
    const isHomePage = location.pathname === '/';
    
    if (isHomePage) {
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    } else {
      // If not on home page, navigate to home and then scroll to section
      navigate('/', { state: { scrollTo: sectionId } });
    }
  };

  return (
    <footer className="bg-white border-t border-gray-200">
      <div className="section-container py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-2">
              <span className="font-display font-bold text-2xl tracking-tight text-primary-700">SPENDLESS</span>
            </div>
            <p className="mt-4 text-gray-600 max-w-xs">
              {t('footer.description')}
            </p>
            <div className="mt-6 flex space-x-4">
              <a href="#" className="text-gray-500 hover:text-primary-600 transition-colors">
                <Instagram size={20} />
              </a>
              <a href="#" className="text-gray-500 hover:text-primary-600 transition-colors">
                <Linkedin size={20} />
              </a>
            </div>
          </div>

          <div>
            <h3 className="font-display font-semibold text-lg mb-4">{t('footer.product')}</h3>
            <ul className="space-y-3">
              <li>
                <button
                  onClick={() => scrollToSection('features')}
                  className="text-gray-600 hover:text-primary-600 transition-colors text-left"
                >
                  {t('nav.features')}
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('pricing')}
                  className="text-gray-600 hover:text-primary-600 transition-colors text-left"
                >
                  {t('premiumPlans.title')}
                </button>
              </li>

              <li>
                <button
                  onClick={() => scrollToSection('faq')}
                  className="text-gray-600 hover:text-primary-600 transition-colors text-left"
                >
                  {t('faq.title')}
                </button>
              </li>
              <li>
                <Link to="/roadmap" className="text-gray-600 hover:text-primary-600 transition-colors">
                  {t('roadmap.title')}
                </Link>
              </li>

            </ul>
          </div>

          <div>
            <h3 className="font-display font-semibold text-lg mb-4">{t('footer.company')}</h3>
            <ul className="space-y-3">
              <li>
                <Link to="/contact" className="text-gray-600 hover:text-primary-600 transition-colors">
                  {t('nav.contact')}
                </Link>
              </li>
              <li>
                <Link to="/privacy" className="text-gray-600 hover:text-primary-600 transition-colors">
                  {t('footer.privacyPolicy')}
                </Link>
              </li>
              <li>
                <Link to="/terms" className="text-gray-600 hover:text-primary-600 transition-colors">
                  {t('footer.terms')}
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-gray-200">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-500 text-sm">
              &copy; {currentYear} SPENDLESS. {t('footer.copyright')}
            </p>
            <div className="mt-4 md:mt-0 flex space-x-6">
              <Link to="/privacy" className="text-gray-500 hover:text-primary-600 transition-colors text-sm">
                {t('footer.privacyPolicy')}
              </Link>
              <Link to="/terms" className="text-gray-500 hover:text-primary-600 transition-colors text-sm">
                {t('footer.terms')}
              </Link>
              <CookieSettingsLink />
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
