
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

  // Premium Plans
  | 'premiumPlans.title'
  | 'premiumPlans.subtitle'
  | 'premiumPlans.monthly'
  | 'premiumPlans.yearly'
  | 'premiumPlans.discount'
  | 'premiumPlans.perMonth'
  | 'premiumPlans.perYear'
  | 'premiumPlans.included'
  | 'premiumPlans.notIncluded'
  | 'premiumPlans.getButton'
  | 'premiumPlans.basic.name'
  | 'premiumPlans.basic.description'
  | 'premiumPlans.basic.features.f1'
  | 'premiumPlans.basic.features.f2'
  | 'premiumPlans.basic.features.f3'
  | 'premiumPlans.basic.features.f4'
  | 'premiumPlans.basic.features.f5'
  | 'premiumPlans.basic.notIncluded.f1'
  | 'premiumPlans.basic.notIncluded.f2'
  | 'premiumPlans.basic.notIncluded.f3'
  | 'premiumPlans.basic.notIncluded.f4'
  | 'premiumPlans.plus.name'
  | 'premiumPlans.plus.description'
  | 'premiumPlans.plus.features.f1'
  | 'premiumPlans.plus.features.f2'
  | 'premiumPlans.plus.features.f3'
  | 'premiumPlans.plus.features.f4'
  | 'premiumPlans.plus.features.f5'
  | 'premiumPlans.plus.features.f6'
  | 'premiumPlans.plus.features.f7'
  | 'premiumPlans.plus.notIncluded.f1'
  | 'premiumPlans.plus.notIncluded.f2'
  | 'premiumPlans.premium.name'
  | 'premiumPlans.premium.description'
  | 'premiumPlans.premium.features.f1'
  | 'premiumPlans.premium.features.f2'
  | 'premiumPlans.premium.features.f3'
  | 'premiumPlans.premium.features.f4'
  | 'premiumPlans.premium.features.f5'
  | 'premiumPlans.premium.features.f6'
  | 'premiumPlans.premium.features.f7'
  | 'premiumPlans.premium.features.f8'
  | 'premiumPlans.premium.features.f9'

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
  | 'cookies.savePreferences'
  
  // Roadmap
  | 'roadmap.title'
  | 'roadmap.subtitle'
  | 'roadmap.filterAll'
  | 'roadmap.filterPlanned'
  | 'roadmap.filterInProgress'
  | 'roadmap.filterCompleted'
  | 'roadmap.statusPlanned'
  | 'roadmap.statusInProgress'
  | 'roadmap.statusCompleted'
  | 'roadmap.q1'
  | 'roadmap.q2'
  | 'roadmap.q3'
  | 'roadmap.q4';

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

export type PremiumPlansTranslations = {
  title: string;
  subtitle: string;
  monthly: string;
  yearly: string;
  discount: string;
  perMonth: string;
  perYear: string;
  included: string;
  notIncluded: string;
  getButton: string;
  basic: {
    name: string;
    description: string;
    features: {
      f1: string;
      f2: string;
      f3: string;
      f4: string;
      f5: string;
    };
    notIncluded: {
      f1: string;
      f2: string;
      f3: string;
      f4: string;
    };
  };
  plus: {
    name: string;
    description: string;
    features: {
      f1: string;
      f2: string;
      f3: string;
      f4: string;
      f5: string;
      f6: string;
      f7: string;
    };
    notIncluded: {
      f1: string;
      f2: string;
    };
  };
  premium: {
    name: string;
    description: string;
    features: {
      f1: string;
      f2: string;
      f3: string;
      f4: string;
      f5: string;
      f6: string;
      f7: string;
      f8: string;
      f9: string;
    };
  };
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
  premiumPlans: PremiumPlansTranslations;
  cta: CtaTranslations;
  footer: FooterTranslations;
  cookies: CookiesTranslations;
  roadmap: RoadmapTranslations;
};

// Add RoadmapTranslations type
export type RoadmapTranslations = {
  title: string;
  subtitle: string;
  filterAll: string;
  filterPlanned: string;
  filterInProgress: string;
  filterCompleted: string;
  statusPlanned: string;
  statusInProgress: string;
  statusCompleted: string;
  q1: string;
  q2: string;
  q3: string;
  q4: string;
};
