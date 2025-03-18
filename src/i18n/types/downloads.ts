
// Download section related translation keys
export type DownloadsTranslationKey =
  | 'downloads.title'
  | 'downloads.subtitle'
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
  | 'downloads.downloadButton';

export interface DownloadsTranslations {
  title: string;
  subtitle: string;
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
}
