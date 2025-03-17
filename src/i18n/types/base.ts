
// Import all required translation keys and types from respective files
import { NavTranslationKey, NavTranslations } from './nav';
import { HeroTranslationKey, HeroTranslations } from './hero';
import { FeaturesTranslationKey, FeaturesTranslations } from './features';
import { DownloadsTranslationKey, DownloadsTranslations } from './downloads';
import { TestimonialsTranslationKey, TestimonialsTranslations } from './testimonials';
import { PremiumPlansTranslationKey, PremiumPlansTranslations } from './premiumPlans';
import { CtaTranslationKey, CtaTranslations } from './cta';
import { FooterTranslationKey, FooterTranslations } from './footer';
import { CookiesTranslationKey, CookiesTranslations } from './cookies';
import { RoadmapTranslationKey, RoadmapTranslations } from './roadmap';
import { TermsTranslationKey, TermsTranslations } from './terms';

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
  | RoadmapTranslationKey
  | TermsTranslationKey;

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
  terms: TermsTranslations;
}
