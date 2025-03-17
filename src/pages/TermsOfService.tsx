
import { useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import Navbar from '@/components/navbar';
import Footer from '@/components/Footer';
import { useI18n } from '@/i18n/I18nContext';

const TermsOfService = () => {
  const { t } = useI18n();
  
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // Get the prohibited items array safely
  const prohibitedItems = t('terms.prohibitedItems');
  const prohibitedItemsList = Array.isArray(prohibitedItems) ? prohibitedItems : [];

  return (
    <>
      <Helmet>
        <title>{t('terms.title')} - SPENDLESS</title>
        <meta 
          name="description" 
          content="SPENDLESS Terms of Service - Understand the terms governing your use of our budget management application." 
        />
      </Helmet>
      
      <div className="min-h-screen w-full overflow-x-hidden">
        <Navbar />
        
        <main className="pt-32 pb-20">
          <div className="container mx-auto px-4 max-w-4xl">
            <h1 className="text-3xl md:text-4xl font-display font-bold mb-8">{t('terms.title')}</h1>
            
            <div className="prose prose-lg max-w-none">
              <p className="lead">
                {t('terms.lastUpdated')} {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
              </p>
              
              <p>
                {t('terms.intro')}
              </p>
              
              <h2>{t('terms.acceptanceTitle')}</h2>
              <p>
                {t('terms.acceptanceText')}
              </p>
              
              <h2>{t('terms.serviceTitle')}</h2>
              <p>
                {t('terms.serviceText')}
              </p>
              
              <h2>{t('terms.accountsTitle')}</h2>
              <p>
                {t('terms.accountsText')}
              </p>
              
              <h2>{t('terms.contentTitle')}</h2>
              <p>
                {t('terms.contentText')}
              </p>
              
              <h2>{t('terms.prohibitedTitle')}</h2>
              <p>
                {t('terms.prohibitedText')}
              </p>
              <ul>
                {prohibitedItemsList.map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
              
              <h2>{t('terms.terminationTitle')}</h2>
              <p>
                {t('terms.terminationText')}
              </p>
              
              <h2>{t('terms.liabilityTitle')}</h2>
              <p>
                {t('terms.liabilityText')}
              </p>
              
              <h2>{t('terms.changesTitle')}</h2>
              <p>
                {t('terms.changesText')}
              </p>
              
              <h2>{t('terms.contactTitle')}</h2>
              <p>
                {t('terms.contactText')}
              </p>
            </div>
          </div>
        </main>
        
        <Footer />
      </div>
    </>
  );
};

export default TermsOfService;
