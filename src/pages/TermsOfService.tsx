
import { useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import Navbar from '@/components/navbar';
import Footer from '@/components/Footer';
import { useI18n } from '@/i18n/I18nContext';
import { Separator } from '@/components/ui/separator';
import { ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';

const TermsOfService = () => {
  const { t } = useI18n();
  
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // Get the prohibited items array safely
  const prohibitedItems = t('terms.prohibitedItems');
  const prohibitedItemsList = Array.isArray(prohibitedItems) ? prohibitedItems : [];

  const formattedDate = new Date().toLocaleDateString('en-US', { 
    year: 'numeric', 
    month: 'long', 
    day: 'numeric' 
  });

  return (
    <>
      <Helmet>
        <title>{t('terms.title')} - SPENDLESS</title>
        <meta 
          name="description" 
          content="SPENDLESS Terms of Service - Understand the terms governing your use of our budget management application." 
        />
      </Helmet>
      
      <div className="min-h-screen w-full overflow-x-hidden bg-gray-50">
        <Navbar />
        
        <main className="pt-28 pb-20">
          <div className="container mx-auto px-4 max-w-3xl">
            <Link to="/" className="inline-flex items-center text-primary-600 hover:text-primary-700 mb-6 group transition-colors">
              <ArrowLeft size={16} className="mr-2 group-hover:-translate-x-1 transition-transform" />
              {t('footer.backToHome')}
            </Link>
            
            <div className="bg-white rounded-xl shadow-sm p-8 md:p-10">
              <h1 className="text-3xl md:text-4xl font-display font-bold mb-3 text-gray-900">{t('terms.title')}</h1>
              
              <p className="text-gray-500 text-sm font-medium mb-6">
                {t('terms.lastUpdated')} {formattedDate}
              </p>
              
              <Separator className="mb-8" />
              
              <div className="prose prose-lg max-w-none prose-headings:font-display prose-headings:font-semibold prose-headings:text-gray-800 prose-p:text-gray-600 prose-p:leading-relaxed">
                <p className="text-lg text-gray-700">
                  {t('terms.intro')}
                </p>
                
                <h2 className="text-2xl mt-10 mb-4">{t('terms.acceptanceTitle')}</h2>
                <p>
                  {t('terms.acceptanceText')}
                </p>
                
                <h2 className="text-2xl mt-10 mb-4">{t('terms.serviceTitle')}</h2>
                <p>
                  {t('terms.serviceText')}
                </p>
                
                <h2 className="text-2xl mt-10 mb-4">{t('terms.accountsTitle')}</h2>
                <p>
                  {t('terms.accountsText')}
                </p>
                
                <h2 className="text-2xl mt-10 mb-4">{t('terms.contentTitle')}</h2>
                <p>
                  {t('terms.contentText')}
                </p>
                
                <h2 className="text-2xl mt-10 mb-4">{t('terms.prohibitedTitle')}</h2>
                <p>
                  {t('terms.prohibitedText')}
                </p>
                <ul className="bg-gray-50 p-5 rounded-lg border border-gray-100 my-4">
                  {prohibitedItemsList.map((item, index) => (
                    <li key={index} className="mb-2 last:mb-0">{item}</li>
                  ))}
                </ul>
                
                <h2 className="text-2xl mt-10 mb-4">{t('terms.terminationTitle')}</h2>
                <p>
                  {t('terms.terminationText')}
                </p>
                
                <h2 className="text-2xl mt-10 mb-4">{t('terms.liabilityTitle')}</h2>
                <p>
                  {t('terms.liabilityText')}
                </p>
                
                <h2 className="text-2xl mt-10 mb-4">{t('terms.changesTitle')}</h2>
                <p>
                  {t('terms.changesText')}
                </p>
                
                <h2 className="text-2xl mt-10 mb-4">{t('terms.contactTitle')}</h2>
                <p>
                  {t('terms.contactText')}
                </p>
              </div>
            </div>
          </div>
        </main>
        
        <Footer />
      </div>
    </>
  );
};

export default TermsOfService;
