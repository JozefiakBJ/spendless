
import { flattenTranslations } from './utils';
import en from './translations/en';
import pl from './translations/pl';
import de from './translations/de';
import fr from './translations/fr';
import es from './translations/es';
import uk from './translations/uk';

// Export all translation-related types and functions
// Using 'export type' for TypeScript types when isolatedModules is enabled
export { flattenTranslations };
export type { LanguageCode, TranslationKey, LanguageTranslations, TranslationsType } from './types';

// Export all translations
export { default as en } from './translations/en';
export { default as pl } from './translations/pl';
export { default as de } from './translations/de';
export { default as fr } from './translations/fr';
export { default as es } from './translations/es';
export { default as uk } from './translations/uk';

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
