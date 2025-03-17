
import { ArrowDown, Apple, Play } from 'lucide-react';
import { useState, useEffect } from 'react';
import { useI18n } from '@/i18n/I18nContext';
import { Button } from '@/components/ui/button';

const Hero = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  const { t } = useI18n();

  useEffect(() => {
    // Add a small delay to create a staggered loading effect
    setTimeout(() => {
      setIsLoaded(true);
    }, 100);
  }, []);

  return (
    <section className="min-h-screen pt-24 pb-16 flex items-center relative bg-hero-pattern">
      <div 
        className={`section-container flex flex-col items-center text-center transition-all duration-1000 ease-out ${
          isLoaded ? 'opacity-100' : 'opacity-0 translate-y-8'
        }`}
      >
        <div className="overflow-visible w-24 h-24 mb-6 relative">
          <img 
            src="/lovable-uploads/4c207960-91fa-490e-9f6d-43f129b17017.png" 
            alt="SPENDLESS Logo" 
            className="w-20 h-20 object-contain animate-float absolute left-1/2 -translate-x-1/2" 
          />
        </div>
        
        <span className="inline-block px-4 py-1 bg-primary-50 text-primary-600 rounded-full text-sm font-medium mb-4 animate-fade-in" style={{ animationDelay: '0.2s' }}>
          {t('hero.tagline')}
        </span>
        
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold max-w-3xl leading-tight md:leading-tight animate-fade-in" style={{ animationDelay: '0.4s' }}>
          {t('hero.title')}
        </h1>
        
        <p className="mt-6 text-lg md:text-xl text-gray-600 max-w-2xl leading-relaxed animate-fade-in" style={{ animationDelay: '0.6s' }}>
          {t('hero.subtitle')}
        </p>
        
        {/* Download app section */}
        <div className="mt-8 flex flex-col gap-4 animate-fade-in" style={{ animationDelay: '0.7s' }}>
          <div className="inline-block px-4 py-1 bg-secondary-50 text-secondary-600 rounded-full text-sm font-medium">
            {t('downloads.title')}
          </div>
          <div className="flex flex-wrap gap-3 justify-center">
            <Button 
              variant="default" 
              size="lg" 
              className="bg-black text-white hover:bg-gray-800"
            >
              <Apple className="mr-2" />
              {t('downloads.appStore')}
            </Button>
            
            <Button 
              variant="default" 
              size="lg" 
              className="bg-primary-600 hover:bg-primary-700"
            >
              <Play className="mr-2" />
              {t('downloads.googlePlay')}
            </Button>
          </div>
        </div>
        
        <div className="mt-10 flex flex-col sm:flex-row items-center gap-4 animate-fade-in" style={{ animationDelay: '0.8s' }}>
          <button className="button-primary min-w-[180px]">
            {t('hero.getStarted')}
          </button>
          <button className="button-secondary min-w-[180px]">
            {t('hero.howItWorks')}
          </button>
        </div>
        
        <div className="mt-16 relative animate-fade-in" style={{ animationDelay: '1s' }}>
          <div className="absolute -inset-4 bg-gradient-to-tr from-primary-50 to-secondary-50 rounded-2xl blur-lg opacity-50"></div>
          <div className="relative bg-white rounded-2xl overflow-hidden shadow-xl border border-gray-100 max-w-4xl mx-auto">
            <img 
              src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&q=85&fm=jpg&crop=entropy&cs=srgb&w=2000" 
              alt="SPENDLESS Dashboard" 
              className="w-full h-auto object-cover"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent flex items-end p-6">
              <p className="text-white text-lg font-medium">{t('hero.dashboardCaption')}</p>
            </div>
          </div>
        </div>
        
        <a 
          href="#features" 
          className="mt-16 flex flex-col items-center group hover:scale-105 transition-transform duration-300 animate-fade-in" 
          style={{ animationDelay: '1.2s' }}
        >
          <span className="text-gray-500 mb-2 group-hover:text-primary-600 transition-colors">{t('hero.exploreFeatures')}</span>
          <ArrowDown 
            className="text-gray-400 group-hover:text-primary-600 transition-colors animate-pulse-soft" 
            size={24} 
          />
        </a>
      </div>
      
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-b from-transparent to-white"></div>
    </section>
  );
};

export default Hero;
