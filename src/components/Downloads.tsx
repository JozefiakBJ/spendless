
import { Apple, Play, Monitor, LaptopIcon } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useI18n } from '@/i18n/I18nContext';

const Downloads = () => {
  const { t } = useI18n();
  
  return (
    <section id="downloads" className="py-20 bg-primary-50">
      <div className="section-container">
        <div className="text-center mb-12 reveal-animation">
          <span className="inline-block px-4 py-1 bg-primary-100 text-primary-600 rounded-full text-sm font-medium mb-4">
            {t('downloads.title')}
          </span>
          <h2 className="text-3xl md:text-4xl font-display font-bold mb-6">
            {t('downloads.subtitle')}
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            {t('downloads.description')}
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-10 items-center reveal-animation">
          <div className="space-y-6">
            <h3 className="text-2xl font-display font-semibold">{t('downloads.mobileApps')}</h3>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                variant="default" 
                size="lg" 
                className="bg-black text-white hover:bg-gray-800 flex-1"
              >
                <Apple className="mr-2" />
                {t('downloads.appStore')}
              </Button>
              
              <Button 
                variant="default" 
                size="lg" 
                className="bg-primary-600 hover:bg-primary-700 flex-1"
              >
                <Play className="mr-2" />
                {t('downloads.googlePlay')}
              </Button>
            </div>
            
            <div className="relative mt-6">
              <div className="aspect-[4/3] max-w-md mx-auto relative">
                <img
                  src="https://images.unsplash.com/photo-1582828462913-803c0fe9d275?q=80&w=800&auto=format&fit=crop"
                  alt="SPENDLESS on mobile devices"
                  className="rounded-2xl shadow-lg object-cover h-full w-full"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent rounded-2xl"></div>
              </div>
            </div>
          </div>
          
          <div className="space-y-6">
            <h3 className="text-2xl font-display font-semibold">{t('downloads.desktopApps')}</h3>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <Button 
                variant="outline" 
                size="lg" 
                className="border-primary-200 hover:bg-primary-50"
              >
                <Apple className="mr-2" />
                {t('downloads.macos')}
              </Button>
              
              <Button 
                variant="outline" 
                size="lg" 
                className="border-primary-200 hover:bg-primary-50"
              >
                <Monitor className="mr-2" />
                {t('downloads.windows')}
              </Button>
              
              <Button 
                variant="outline" 
                size="lg" 
                className="border-primary-200 hover:bg-primary-50"
              >
                <LaptopIcon className="mr-2" />
                {t('downloads.linux')}
              </Button>
            </div>
            
            <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 mt-6">
              <h4 className="font-medium mb-4">{t('downloads.systemRequirements')}</h4>
              <ul className="space-y-2 text-sm text-gray-600">
                <li className="flex items-start">
                  <span className="font-medium mr-2">{t('downloads.windows')}:</span> 
                  <span>{t('downloads.windowsReq')}</span>
                </li>
                <li className="flex items-start">
                  <span className="font-medium mr-2">{t('downloads.macos')}:</span> 
                  <span>{t('downloads.macosReq')}</span>
                </li>
                <li className="flex items-start">
                  <span className="font-medium mr-2">{t('downloads.linux')}:</span> 
                  <span>{t('downloads.linuxReq')}</span>
                </li>
                <li className="flex items-start">
                  <span className="font-medium mr-2">{t('downloads.mobileApps')}:</span> 
                  <span>{t('downloads.mobileReq')}</span>
                </li>
              </ul>
              
              <div className="mt-4 pt-4 border-t border-gray-100">
                <p className="text-sm text-gray-500">
                  {t('downloads.syncMessage')}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Downloads;
