
// Download section related translation keys
export type DownloadsTranslationKey =
  | 'downloads.title'
  | 'downloads.subtitle'
  | 'downloads.description'
  | 'downloads.desktop.title'
  | 'downloads.desktop.choosePlatform'
  | 'downloads.desktop.macos'
  | 'downloads.desktop.windows'
  | 'downloads.desktop.linux'
  | 'downloads.mobile.appStore'
  | 'downloads.mobile.appStoreSubtitle'
  | 'downloads.mobile.googlePlay'
  | 'downloads.mobile.googlePlaySubtitle'
  | 'downloads.downloadFree'
  | 'downloads.downloadButton'
  | 'downloads.desktopApps'
  | 'downloads.mobileApps'
  | 'downloads.macos'
  | 'downloads.windows'
  | 'downloads.linux'
  | 'downloads.systemRequirements'
  | 'downloads.windowsReq'
  | 'downloads.macosReq'
  | 'downloads.linuxReq'
  | 'downloads.mobileReq'
  | 'downloads.syncMessage';

export interface DownloadsTranslations {
  title: string;
  subtitle: string;
  description: string;
  desktop: {
    title: string;
    choosePlatform: string;
    macos: string;
    windows: string;
    linux: string;
  };
  mobile: {
    appStore: string;
    appStoreSubtitle: string;
    googlePlay: string;
    googlePlaySubtitle: string;
  };
  downloadFree: string;
  downloadButton: string;
  desktopApps: string;
  mobileApps: string;
  macos: string;
  windows: string;
  linux: string;
  systemRequirements: string;
  windowsReq: string;
  macosReq: string;
  linuxReq: string;
  mobileReq: string;
  syncMessage: string;
}
