
// Features section translation keys
export type FeaturesTranslationKey = 
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
  | 'features.exploreAll';

// Features section translations interface
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
