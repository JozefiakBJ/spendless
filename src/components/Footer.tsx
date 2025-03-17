
import { Github, Twitter, Instagram, Linkedin } from 'lucide-react';
import { useI18n } from '@/i18n/I18nContext';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const { t } = useI18n();
  
  return (
    <footer className="bg-white border-t border-gray-200">
      <div className="section-container py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-2">
              <img 
                src="/lovable-uploads/4c207960-91fa-490e-9f6d-43f129b17017.png" 
                alt="SPENDLESS Logo" 
                className="h-10" 
              />
              <span className="font-display font-bold text-2xl tracking-tight text-primary-700">SPENDLESS</span>
            </div>
            <p className="mt-4 text-gray-600 max-w-xs">
              {t('footer.description')}
            </p>
            <div className="mt-6 flex space-x-4">
              <a href="#" className="text-gray-500 hover:text-primary-600 transition-colors">
                <Twitter size={20} />
              </a>
              <a href="#" className="text-gray-500 hover:text-primary-600 transition-colors">
                <Instagram size={20} />
              </a>
              <a href="#" className="text-gray-500 hover:text-primary-600 transition-colors">
                <Linkedin size={20} />
              </a>
              <a href="#" className="text-gray-500 hover:text-primary-600 transition-colors">
                <Github size={20} />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="font-display font-semibold text-lg mb-4">{t('footer.product')}</h3>
            <ul className="space-y-3">
              {["Features", "Pricing", "Testimonials", "FAQ", "Roadmap"].map((item, index) => (
                <li key={index}>
                  <a href="#" className="text-gray-600 hover:text-primary-600 transition-colors">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h3 className="font-display font-semibold text-lg mb-4">{t('footer.resources')}</h3>
            <ul className="space-y-3">
              {["Blog", "Guides", "Support Center", "Community", "Webinars"].map((item, index) => (
                <li key={index}>
                  <a href="#" className="text-gray-600 hover:text-primary-600 transition-colors">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h3 className="font-display font-semibold text-lg mb-4">{t('footer.company')}</h3>
            <ul className="space-y-3">
              {["About Us", "Careers", "Contact", "Privacy Policy", "Terms of Service"].map((item, index) => (
                <li key={index}>
                  <a href="#" className="text-gray-600 hover:text-primary-600 transition-colors">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
        
        <div className="mt-12 pt-8 border-t border-gray-200">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-500 text-sm">
              &copy; {currentYear} SPENDLESS. {t('footer.copyright')}
            </p>
            <div className="mt-4 md:mt-0 flex space-x-6">
              <a href="#" className="text-gray-500 hover:text-primary-600 transition-colors text-sm">
                {t('footer.privacyPolicy')}
              </a>
              <a href="#" className="text-gray-500 hover:text-primary-600 transition-colors text-sm">
                {t('footer.terms')}
              </a>
              <a href="#" className="text-gray-500 hover:text-primary-600 transition-colors text-sm">
                {t('footer.cookieSettings')}
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
