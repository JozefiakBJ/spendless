
// Base translation types
export type LanguageCode = 'en' | 'pl' | 'de' | 'fr' | 'es' | 'uk';

// Simple map of translation keys to strings - will be constructed from all specific feature keys
export type TranslationsType = Record<TranslationKey, string>;

// Type for all possible translation keys - will be constructed from all specific feature keys
export type TranslationKey = NavTranslationKey
  | HeroTranslationKey
  | FeaturesTranslationKey
  | DownloadsTranslationKey
  | TestimonialsTranslationKey
  | PremiumPlansTranslationKey
  | CtaTranslationKey
  | FooterTranslationKey
  | CookiesTranslationKey
  | RoadmapTranslationKey;

// Master interface that combines all feature-specific translation interfaces
export interface LanguageTranslations {
  nav: NavTranslations;
  hero: HeroTranslations;
  features: FeaturesTranslations;
  downloads: DownloadsTranslations;
  testimonials: TestimonialsTranslations;
  premiumPlans: PremiumPlansTranslations;
  cta: CtaTranslations;
  footer: FooterTranslations;
  cookies: CookiesTranslations;
  roadmap: RoadmapTranslations;
}
