
import { Github, Twitter, Instagram, Linkedin } from 'lucide-react';
import { useI18n } from '@/i18n/I18nContext';
import { Link } from 'react-router-dom';
import { CookieSettingsLink } from './cookies/CookieSettingsLink';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const { t } = useI18n();

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
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
                  Features
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('pricing')}
                  className="text-gray-600 hover:text-primary-600 transition-colors text-left"
                >
                  Pricing
                </button>
              </li>

              <li>
                <Link to="/roadmap" className="text-gray-600 hover:text-primary-600 transition-colors">
                  Roadmap
                </Link>
              </li>

            </ul>
          </div>

          <div>
            <h3 className="font-display font-semibold text-lg mb-4">{t('footer.resources')}</h3>
            <ul className="space-y-3">
              <li>
                <a href="#" className="text-gray-600 hover:text-primary-600 transition-colors">
                  Guides
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-primary-600 transition-colors">
                  Support Center
                </a>
              </li>
              <li>
                <Link to="/faq" className="text-gray-600 hover:text-primary-600 transition-colors">
                  FAQ
                </Link>
              </li>
              <li>
                <button
                    onClick={() => scrollToSection('testimonials')}
                    className="text-gray-600 hover:text-primary-600 transition-colors text-left"
                >
                  Testimonials
                </button>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-display font-semibold text-lg mb-4">{t('footer.company')}</h3>
            <ul className="space-y-3">
              <li>
                <Link to="/contact" className="text-gray-600 hover:text-primary-600 transition-colors">
                  Contact
                </Link>
              </li>
              <li>
                <Link to="/privacy" className="text-gray-600 hover:text-primary-600 transition-colors">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link to="/terms" className="text-gray-600 hover:text-primary-600 transition-colors">
                  Terms of Service
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
