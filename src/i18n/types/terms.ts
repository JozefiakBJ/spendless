
// Terms of Service translation keys
export type TermsTranslationKey = 
  | 'terms.title'
  | 'terms.lastUpdated'
  | 'terms.intro'
  | 'terms.acceptanceTitle'
  | 'terms.acceptanceText'
  | 'terms.serviceTitle'
  | 'terms.serviceText'
  | 'terms.accountsTitle'
  | 'terms.accountsText'
  | 'terms.contentTitle'
  | 'terms.contentText'
  | 'terms.prohibitedTitle'
  | 'terms.prohibitedText'
  | 'terms.prohibitedItems'
  | 'terms.terminationTitle'
  | 'terms.terminationText'
  | 'terms.liabilityTitle'
  | 'terms.liabilityText'
  | 'terms.changesTitle'
  | 'terms.changesText'
  | 'terms.contactTitle'
  | 'terms.contactText';

// Terms of Service translations interface
export type TermsTranslations = {
  title: string;
  lastUpdated: string;
  intro: string;
  acceptanceTitle: string;
  acceptanceText: string;
  serviceTitle: string;
  serviceText: string;
  accountsTitle: string;
  accountsText: string;
  contentTitle: string;
  contentText: string;
  prohibitedTitle: string;
  prohibitedText: string;
  prohibitedItems: string[];
  terminationTitle: string;
  terminationText: string;
  liabilityTitle: string;
  liabilityText: string;
  changesTitle: string;
  changesText: string;
  contactTitle: string;
  contactText: string;
};
