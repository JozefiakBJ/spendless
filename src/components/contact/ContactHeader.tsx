
import React from 'react';
import { useI18n } from '@/i18n/I18nContext';

const ContactHeader = () => {
  const { t } = useI18n();
  
  return (
    <div>
      <h1 className="font-display text-4xl md:text-5xl font-bold text-primary-800 mb-4">{t('contact.title')}</h1>
      <p className="text-lg text-gray-600 max-w-2xl mx-auto">
        {t('contact.subtitle')}
      </p>
    </div>
  );
};

export default ContactHeader;
