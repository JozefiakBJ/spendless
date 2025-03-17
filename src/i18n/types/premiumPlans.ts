
// Premium Plans section translation keys
export type PremiumPlansTranslationKey = 
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
  | 'premiumPlans.premium.features.f9';

// Premium Plans section translations interface
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
