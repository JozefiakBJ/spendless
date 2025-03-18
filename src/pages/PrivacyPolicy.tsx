
import { useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import Navbar from '@/components/navbar';
import Footer from '@/components/Footer';
import { useI18n } from '@/i18n/I18nContext';
import { Separator } from '@/components/ui/separator';
import { ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Card, CardContent, CardHeader } from '@/components/ui/card';

const PrivacyPolicy = () => {
  const { t } = useI18n();
  
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // Get the arrays safely
  const collectItems = t('privacy.collectItems');
  const collectItemsList = Array.isArray(collectItems) ? collectItems : [];
  
  const useItems = t('privacy.useItems');
  const useItemsList = Array.isArray(useItems) ? useItems : [];
  
  const rightsItems = t('privacy.rightsItems');
  const rightsItemsList = Array.isArray(rightsItems) ? rightsItems : [];

  const formattedDate = new Date().toLocaleDateString('en-US', { 
    year: 'numeric', 
    month: 'long', 
    day: 'numeric' 
  });

  return (
    <>
      <Helmet>
        <title>{t('privacy.title')} - SPENDLESS</title>
        <meta 
          name="description" 
          content="SPENDLESS Privacy Policy - Learn how we collect, use, and protect your personal information when you use our budget management application." 
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
            
            <Card className="shadow-sm">
              <CardHeader className="pb-0">
                <h1 className="text-3xl md:text-4xl font-display font-bold mb-3 text-gray-900">{t('privacy.title')}</h1>
                <p className="text-gray-500 text-sm font-medium mb-6">
                  {t('privacy.lastUpdated')} {formattedDate}
                </p>
                <Separator className="mb-8" />
              </CardHeader>
              
              <CardContent>
                <div className="prose prose-lg max-w-none prose-headings:font-display prose-headings:font-semibold prose-headings:text-gray-800 prose-p:text-gray-600 prose-p:leading-relaxed">
                  <p className="text-lg text-gray-700 mb-8">
                    {t('privacy.intro')}
                  </p>
                  
                  <div className="space-y-10">
                    <section>
                      <h2 className="text-2xl mb-4">{t('privacy.collectTitle')}</h2>
                      <p className="mb-4">
                        {t('privacy.collectText')}
                      </p>
                      <ul className="bg-gray-50 p-5 rounded-lg border border-gray-100 my-4">
                        {collectItemsList.map((item, index) => (
                          <li key={index} className="mb-2 last:mb-0">{item}</li>
                        ))}
                      </ul>
                    </section>
                    
                    <section>
                      <h2 className="text-2xl mb-4">{t('privacy.useTitle')}</h2>
                      <p className="mb-4">
                        {t('privacy.useText')}
                      </p>
                      <ul className="bg-gray-50 p-5 rounded-lg border border-gray-100 my-4">
                        {useItemsList.map((item, index) => (
                          <li key={index} className="mb-2 last:mb-0">{item}</li>
                        ))}
                      </ul>
                    </section>
                    
                    <section>
                      <h2 className="text-2xl mb-4">{t('privacy.securityTitle')}</h2>
                      <p>
                        {t('privacy.securityText')}
                      </p>
                    </section>
                    
                    <section>
                      <h2 className="text-2xl mb-4">{t('privacy.retentionTitle')}</h2>
                      <p>
                        {t('privacy.retentionText')}
                      </p>
                    </section>
                    
                    <section>
                      <h2 className="text-2xl mb-4">{t('privacy.rightsTitle')}</h2>
                      <p className="mb-4">
                        {t('privacy.rightsText')}
                      </p>
                      <ul className="bg-gray-50 p-5 rounded-lg border border-gray-100 my-4">
                        {rightsItemsList.map((item, index) => (
                          <li key={index} className="mb-2 last:mb-0">{item}</li>
                        ))}
                      </ul>
                    </section>
                    
                    <section>
                      <h2 className="text-2xl mb-4">{t('privacy.changesTitle')}</h2>
                      <p>
                        {t('privacy.changesText')}
                      </p>
                    </section>
                    
                    <section>
                      <h2 className="text-2xl mb-4">{t('privacy.contactTitle')}</h2>
                      <p>
                        {t('privacy.contactText')}
                      </p>
                    </section>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </main>
        
        <Footer />
      </div>
    </>
  );
};

export default PrivacyPolicy;
