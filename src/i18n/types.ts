
// Type for all possible translation keys
export type TranslationKey = 
  // Navbar
  | 'nav.features'
  | 'nav.testimonials'
  | 'nav.pricing'
  | 'nav.login'
  | 'nav.signup'
  
  // Hero
  | 'hero.tagline'
  | 'hero.title' 
  | 'hero.subtitle'
  | 'hero.getStarted'
  | 'hero.howItWorks'
  | 'hero.dashboardCaption'
  | 'hero.exploreFeatures'
  
  // Features
  | 'features.title'
  | 'features.subtitle'
  | 'features.description'
  | 'features.smartTracking.title'
  | 'features.smartTracking.description'
  | 'features.multiSourceImport.title'
  | 'features.multiSourceImport.description'
  | 'features.aiAnalysis.title'
  | 'features.aiAnalysis.description'
  | 'features.multipleBudgets.title'
  | 'features.multipleBudgets.description'
  | 'features.budgetSharing.title'
  | 'features.budgetSharing.description'
  | 'features.security.title'
  | 'features.security.description'
  | 'features.exploreAll'
  
  // Downloads
  | 'downloads.title'
  | 'downloads.subtitle'
  | 'downloads.description'
  | 'downloads.mobileApps'
  | 'downloads.appStore'
  | 'downloads.googlePlay'
  | 'downloads.desktopApps'
  | 'downloads.macos'
  | 'downloads.windows'
  | 'downloads.linux'
  | 'downloads.systemRequirements'
  | 'downloads.windowsReq'
  | 'downloads.macosReq'
  | 'downloads.linuxReq'
  | 'downloads.mobileReq'
  | 'downloads.syncMessage'

  // Testimonials
  | 'testimonials.title'
  | 'testimonials.subtitle'
  | 'testimonials.description'
  | 'testimonials.rating'

  // CTA
  | 'cta.getStarted'
  | 'cta.title'
  | 'cta.description'
  | 'cta.freeTrialButton'
  | 'cta.feature1'
  | 'cta.feature2'
  | 'cta.feature3'
  | 'cta.feature4'
  | 'cta.feature5'
  | 'cta.newsletter.title'
  | 'cta.newsletter.description'
  | 'cta.newsletter.placeholder'
  | 'cta.newsletter.subscribe'
  | 'cta.newsletter.subscribed'
  | 'cta.newsletter.privacy'
  | 'cta.premium.title'
  | 'cta.premium.description'
  | 'cta.premium.button'

  // Footer
  | 'footer.description'
  | 'footer.product'
  | 'footer.resources'
  | 'footer.company'
  | 'footer.copyright'
  | 'footer.privacyPolicy'
  | 'footer.terms'
  | 'footer.cookieSettings'
  
  // Cookies
  | 'cookies.bannerTitle'
  | 'cookies.bannerText'
  | 'cookies.customize'
  | 'cookies.acceptAll'
  | 'cookies.settingsTitle'
  | 'cookies.settingsDescription'
  | 'cookies.necessaryTitle'
  | 'cookies.required'
  | 'cookies.necessaryDescription'
  | 'cookies.functionalTitle'
  | 'cookies.functionalDescription'
  | 'cookies.analyticsTitle'
  | 'cookies.analyticsDescription'
  | 'cookies.marketingTitle'
  | 'cookies.marketingDescription'
  | 'cookies.cancel'
  | 'cookies.savePreferences';

export type LanguageCode = 'en' | 'pl' | 'de' | 'fr' | 'es' | 'uk';

// Simple map of translation keys to strings
export type TranslationsType = Record<TranslationKey, string>;

// Component-specific translation interfaces
export type NavTranslations = {
  features: string;
  testimonials: string;
  pricing: string;
  login: string;
  signup: string;
};

export type HeroTranslations = {
  tagline: string;
  title: string;
  subtitle: string;
  getStarted: string;
  howItWorks: string;
  dashboardCaption: string;
  exploreFeatures: string;
};

export type FeaturesTranslations = {
  title: string;
  subtitle: string;
  description: string;
  smartTracking: {
    title: string;
    description: string;
  };
  multiSourceImport: {
    title: string;
    description: string;
  };
  aiAnalysis: {
    title: string;
    description: string;
  };
  multipleBudgets: {
    title: string;
    description: string;
  };
  budgetSharing: {
    title: string;
    description: string;
  };
  security: {
    title: string;
    description: string;
  };
  exploreAll: string;
};

export type DownloadsTranslations = {
  title: string;
  subtitle: string;
  description: string;
  mobileApps: string;
  appStore: string;
  googlePlay: string;
  desktopApps: string;
  macos: string;
  windows: string;
  linux: string;
  systemRequirements: string;
  windowsReq: string;
  macosReq: string;
  linuxReq: string;
  mobileReq: string;
  syncMessage: string;
};

export type TestimonialsTranslations = {
  title: string;
  subtitle: string;
  description: string;
  rating: string;
};

export type CtaTranslations = {
  getStarted: string;
  title: string;
  description: string;
  freeTrialButton: string;
  feature1: string;
  feature2: string;
  feature3: string;
  feature4: string;
  feature5: string;
  newsletter: {
    title: string;
    description: string;
    placeholder: string;
    subscribe: string;
    subscribed: string;
    privacy: string;
  };
  premium: {
    title: string;
    description: string;
    button: string;
  };
};

export type FooterTranslations = {
  description: string;
  product: string;
  resources: string;
  company: string;
  copyright: string;
  privacyPolicy: string;
  terms: string;
  cookieSettings: string;
};

export type CookiesTranslations = {
  bannerTitle: string;
  bannerText: string;
  customize: string;
  acceptAll: string;
  settingsTitle: string;
  settingsDescription: string;
  necessaryTitle: string;
  required: string;
  necessaryDescription: string;
  functionalTitle: string;
  functionalDescription: string;
  analyticsTitle: string;
  analyticsDescription: string;
  marketingTitle: string;
  marketingDescription: string;
  cancel: string;
  savePreferences: string;
};

// Complete language translations type
export type LanguageTranslations = {
  nav: NavTranslations;
  hero: HeroTranslations;
  features: FeaturesTranslations;
  downloads: DownloadsTranslations;
  testimonials: TestimonialsTranslations;
  cta: CtaTranslations;
  footer: FooterTranslations;
  cookies: CookiesTranslations;
};
