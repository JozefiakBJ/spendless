
import React, { createContext, useContext, useState, useEffect } from 'react';
import { LanguageCode, TranslationKey } from './types';
import { flattenTranslations } from './utils';
import en from './translations/en';
import pl from './translations/pl';
import de from './translations/de';
import fr from './translations/fr';
import es from './translations/es';
import uk from './translations/uk';

// Create a translations object with all the flattened translations
const translations = {
  en: flattenTranslations(en),
  pl: flattenTranslations(pl),
  de: flattenTranslations(de),
  fr: flattenTranslations(fr),
  es: flattenTranslations(es),
  uk: flattenTranslations(uk),
};

interface I18nContextType {
  language: LanguageCode;
  setLanguage: (lang: LanguageCode) => void;
  t: (key: TranslationKey) => string;
}

const defaultLanguage: LanguageCode = 'en';

// Create the context
export const I18nContext = createContext<I18nContextType>({
  language: defaultLanguage,
  setLanguage: () => {},
  t: () => '',
});

// Custom hook to use the i18n context
export const useI18n = () => useContext(I18nContext);

interface I18nProviderProps {
  children: React.ReactNode;
}

export const I18nProvider: React.FC<I18nProviderProps> = ({ children }) => {
  const [language, setLanguageState] = useState<LanguageCode>(defaultLanguage);

  useEffect(() => {
    // Get saved language on mount
    const savedLanguage = localStorage.getItem('preferredLanguage') as LanguageCode;
    if (savedLanguage && Object.keys(translations).includes(savedLanguage)) {
      setLanguageState(savedLanguage);
      document.documentElement.lang = savedLanguage;
    }
  }, []);

  const setLanguage = (lang: LanguageCode) => {
    setLanguageState(lang);
    localStorage.setItem('preferredLanguage', lang);
    document.documentElement.lang = lang;
  };

  const t = (key: TranslationKey): string => {
    // Return the translation string for the current language
    // If translation doesn't exist, fall back to English
    return translations[language][key] || translations.en[key] || key;
  };

  return (
    <I18nContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </I18nContext.Provider>
  );
};
