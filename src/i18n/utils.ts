
import { LanguageCode, LanguageTranslations, TranslationKey, TranslationsType } from './types';

/**
 * Helper function to flatten nested translation objects into a simple key-value store
 * Converts { nav: { features: 'Features' } } into { 'nav.features': 'Features' }
 */
export function flattenTranslations(translations: LanguageTranslations): TranslationsType {
  const result: Partial<TranslationsType> = {};

  // Helper function to recursively traverse the nested structure
  function flatten(obj: any, prefix: string = '') {
    Object.entries(obj).forEach(([key, value]) => {
      const newKey = prefix ? `${prefix}.${key}` : key;
      
      if (typeof value === 'object' && value !== null) {
        flatten(value, newKey);
      } else {
        result[newKey as TranslationKey] = value as string;
      }
    });
  }

  flatten(translations);
  return result as TranslationsType;
}
