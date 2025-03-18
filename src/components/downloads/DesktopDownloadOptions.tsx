
import { useI18n } from '@/i18n/I18nContext';
import { Button } from '@/components/ui/button';
import { Apple, Monitor, LaptopIcon } from 'lucide-react';

const DesktopDownloadOptions = () => {
  const { t } = useI18n();

  return (
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
  );
};

export default DesktopDownloadOptions;
