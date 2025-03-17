
import React from 'react';
import { X } from 'lucide-react';
import { useI18n } from '@/i18n/I18nContext';
import { useCookieConsent } from '@/contexts/CookieConsentContext';
import { Button } from '@/components/ui/button';

export function CookieBanner() {
  const { t } = useI18n();
  const { savePreferences, openSettings } = useCookieConsent();

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 p-4 md:p-6 bg-white border-t border-gray-200 shadow-lg animate-slide-up">
      <div className="container mx-auto max-w-7xl flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
        <div className="flex-1">
          <h3 className="text-lg font-semibold mb-2">{t('cookies.bannerTitle') || 'Cookie Notice'}</h3>
          <p className="text-gray-600 text-sm md:text-base max-w-3xl">
            {t('cookies.bannerText') || 
              'We use cookies to enhance your browsing experience, serve personalized ads or content, and analyze our traffic. By clicking "Accept All", you consent to our use of cookies.'}
          </p>
        </div>
        
        <div className="flex flex-col sm:flex-row gap-2 sm:items-center mt-2 sm:mt-0">
          <Button 
            variant="outline" 
            size="sm" 
            onClick={openSettings}
            className="whitespace-nowrap"
          >
            {t('cookies.customize') || 'Customize'}
          </Button>
          
          <Button
            variant="default"
            size="sm"
            onClick={() => savePreferences(true)}
            className="whitespace-nowrap"
          >
            {t('cookies.acceptAll') || 'Accept All'}
          </Button>
        </div>
      </div>
    </div>
  );
}
