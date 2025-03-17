
// Privacy Policy translation keys
export type PrivacyTranslationKey = 
  | 'privacy.title'
  | 'privacy.lastUpdated'
  | 'privacy.intro'
  | 'privacy.collectTitle'
  | 'privacy.collectText'
  | 'privacy.collectItems'
  | 'privacy.useTitle'
  | 'privacy.useText'
  | 'privacy.useItems'
  | 'privacy.securityTitle'
  | 'privacy.securityText'
  | 'privacy.retentionTitle'
  | 'privacy.retentionText'
  | 'privacy.rightsTitle'
  | 'privacy.rightsText'
  | 'privacy.rightsItems'
  | 'privacy.changesTitle'
  | 'privacy.changesText'
  | 'privacy.contactTitle'
  | 'privacy.contactText';

// Privacy Policy translations interface
export type PrivacyTranslations = {
  title: string;
  lastUpdated: string;
  intro: string;
  collectTitle: string;
  collectText: string;
  collectItems: string[];
  useTitle: string;
  useText: string;
  useItems: string[];
  securityTitle: string;
  securityText: string;
  retentionTitle: string;
  retentionText: string;
  rightsTitle: string;
  rightsText: string;
  rightsItems: string[];
  changesTitle: string;
  changesText: string;
  contactTitle: string;
  contactText: string;
};
