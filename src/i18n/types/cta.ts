
// CTA section translation keys
export type CtaTranslationKey = 
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
  | 'cta.premium.button';

// CTA section translations interface
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
