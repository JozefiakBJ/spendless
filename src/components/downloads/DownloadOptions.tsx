
import { useState } from 'react';
import { useI18n } from '@/i18n/I18nContext';
import { Button } from '@/components/ui/button';
import { Apple, Monitor, LaptopIcon } from 'lucide-react';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

const DownloadOptions = () => {
  const { t } = useI18n();

  return (
    <div className="mt-8 flex flex-col gap-4 animate-fade-in" style={{ animationDelay: '0.7s' }}>
      <div className="flex flex-wrap gap-3 justify-center">
        {/* App Store button */}
        <a href="#" className="transition-transform hover:scale-105">
          <div className="bg-black text-white rounded-lg flex items-center justify-center px-4 py-2">
            <img src="/Apple.svg" alt="Apple Logo" className="h-7 w-7 mr-2" />
            <div className="flex flex-col items-start">
              <span className="text-xs">{t('downloads.mobile.appStore')}</span>
              <span className="text-lg font-semibold leading-tight">{t('downloads.mobile.appStoreSubtitle')}</span>
            </div>
          </div>
        </a>
        
        {/* Google Play button */}
        <a href="#" className="transition-transform hover:scale-105">
          <div className="bg-black text-white rounded-lg flex items-center justify-center px-4 py-2">
            <img src="/Playstore.svg" alt="Google Play Logo" className="h-7 w-7 mr-2" />
            <div className="flex flex-col items-start">
              <span className="text-xs">{t('downloads.mobile.googlePlay')}</span>
              <span className="text-lg font-semibold leading-tight">{t('downloads.mobile.googlePlaySubtitle')}</span>
            </div>
          </div>
        </a>

        {/* Desktop Download with Dialog */}
        <Dialog>
          <DialogTrigger asChild>
            <button className="bg-black text-white rounded-lg flex items-center justify-center px-4 py-2 transition-transform hover:scale-105">
              <img src="/Download.svg" alt="Download Logo" className="h-7 w-7 mr-2" />
              <div className="flex flex-col items-start">
                <span className="text-xs">{t('downloads.downloadFree')}</span>
                <span className="text-lg font-semibold leading-tight">{t('downloads.downloadButton')}</span>
              </div>
            </button>
          </DialogTrigger>
          <DialogContent className="sm:max-w-md">
            <DialogHeader>
              <DialogTitle className="text-xl">{t('downloads.desktop.title')}</DialogTitle>
            </DialogHeader>
            <div className="grid gap-4 py-4">
              <h3 className="font-medium mb-2">{t('downloads.desktop.choosePlatform')}</h3>
              
              {/* macOS option */}
              <Button variant="outline" className="w-full justify-start">
                <Apple className="mr-2 h-5 w-5" />
                <span>{t('downloads.desktop.macos')}</span>
              </Button>
              
              {/* Windows option */}
              <Button variant="outline" className="w-full justify-start">
                <Monitor className="mr-2 h-5 w-5" />
                <span>{t('downloads.desktop.windows')}</span>
              </Button>
              
              {/* Linux option */}
              <Button variant="outline" className="w-full justify-start">
                <LaptopIcon className="mr-2 h-5 w-5" />
                <span>{t('downloads.desktop.linux')}</span>
              </Button>
            </div>
          </DialogContent>
        </Dialog>
      </div>
    </div>
  );
};

export default DownloadOptions;
