
import React from 'react';
import { useI18n } from '@/i18n/I18nContext';
import { useCookieConsent } from '@/contexts/CookieConsentContext';

export function CookieSettingsLink() {
  const { t } = useI18n();
  const { openSettings } = useCookieConsent();

  return (
    <button 
      className="text-gray-500 hover:text-primary-600 transition-colors text-sm"
      onClick={openSettings}
    >
      {t('footer.cookieSettings') || 'Cookie Settings'}
    </button>
  );
}
