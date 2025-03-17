
// Downloads section translation keys
export type DownloadsTranslationKey = 
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
  | 'downloads.syncMessage';

// Downloads section translations interface
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
