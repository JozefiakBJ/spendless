
import { LanguageCode, LanguageTranslations, TranslationKey, TranslationsType } from './types';
import en from './translations/en';
import pl from './translations/pl';
import de from './translations/de';
import fr from './translations/fr';
import es from './translations/es';
import uk from './translations/uk';
import { flattenTranslations } from './utils';

// Export all translation-related types and functions
export { LanguageCode, TranslationKey, LanguageTranslations, TranslationsType, flattenTranslations };

// Export all translations
export { en, pl, de, fr, es, uk };

// Export a translations object with all language translations
export const translations = {
  en,
  pl,
  de,
  fr,
  es,
  uk
};

// Export flattened translations for direct use
export const flattenedTranslations = {
  en: flattenTranslations(en),
  pl: flattenTranslations(pl),
  de: flattenTranslations(de),
  fr: flattenTranslations(fr),
  es: flattenTranslations(es),
  uk: flattenTranslations(uk),
};
