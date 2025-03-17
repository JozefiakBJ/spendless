
import React from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogFooter, DialogDescription } from '@/components/ui/dialog';
import { Checkbox } from '@/components/ui/checkbox';
import { Button } from '@/components/ui/button';
import { useI18n } from '@/i18n/I18nContext';
import { useCookieConsent } from '@/contexts/CookieConsentContext';

interface CookieSettingsDialogProps {
  open: boolean;
  setOpen: (open: boolean) => void;
}

export function CookieSettingsDialog({ open, setOpen }: CookieSettingsDialogProps) {
  const { t } = useI18n();
  const { consent, updateConsent, savePreferences } = useCookieConsent();

  const handleSave = () => {
    savePreferences();
    setOpen(false);
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle>{t('cookies.settingsTitle') || 'Cookie Settings'}</DialogTitle>
          <DialogDescription>
            {t('cookies.settingsDescription') || 
              'Manage your cookie preferences. Necessary cookies are always enabled as they are essential for the website to function properly.'}
          </DialogDescription>
        </DialogHeader>

        <div className="py-4 space-y-4">
          {/* Necessary cookies - always enabled and checked */}
          <div className="flex items-start space-x-4 rounded-lg p-2 hover:bg-gray-50">
            <Checkbox id="necessary" checked={true} disabled={true} />
            <div className="space-y-1">
              <label 
                htmlFor="necessary" 
                className="text-sm font-medium leading-none flex items-center gap-2 cursor-default"
              >
                {t('cookies.necessaryTitle') || 'Necessary'}
                <span className="text-xs bg-primary-100 text-primary-800 px-2 py-0.5 rounded-full">
                  {t('cookies.required') || 'Required'}
                </span>
              </label>
              <p className="text-sm text-gray-500 leading-snug">
                {t('cookies.necessaryDescription') || 
                  'These cookies are essential for the website to function properly and cannot be disabled.'}
              </p>
            </div>
          </div>

          {/* Functional cookies */}
          <div className="flex items-start space-x-4 rounded-lg p-2 hover:bg-gray-50">
            <Checkbox 
              id="functional" 
              checked={consent.functional} 
              onCheckedChange={(checked) => updateConsent('functional', checked === true)}
            />
            <div className="space-y-1">
              <label 
                htmlFor="functional" 
                className="text-sm font-medium leading-none cursor-pointer"
              >
                {t('cookies.functionalTitle') || 'Functional'}
              </label>
              <p className="text-sm text-gray-500 leading-snug">
                {t('cookies.functionalDescription') || 
                  'These cookies enable the website to provide enhanced functionality and personalization.'}
              </p>
            </div>
          </div>

          {/* Analytics cookies */}
          <div className="flex items-start space-x-4 rounded-lg p-2 hover:bg-gray-50">
            <Checkbox 
              id="analytics" 
              checked={consent.analytics} 
              onCheckedChange={(checked) => updateConsent('analytics', checked === true)}
            />
            <div className="space-y-1">
              <label 
                htmlFor="analytics" 
                className="text-sm font-medium leading-none cursor-pointer"
              >
                {t('cookies.analyticsTitle') || 'Analytics'}
              </label>
              <p className="text-sm text-gray-500 leading-snug">
                {t('cookies.analyticsDescription') || 
                  'These cookies help us understand how visitors interact with the website, helping us improve our services.'}
              </p>
            </div>
          </div>

          {/* Marketing cookies */}
          <div className="flex items-start space-x-4 rounded-lg p-2 hover:bg-gray-50">
            <Checkbox 
              id="marketing" 
              checked={consent.marketing} 
              onCheckedChange={(checked) => updateConsent('marketing', checked === true)}
            />
            <div className="space-y-1">
              <label 
                htmlFor="marketing" 
                className="text-sm font-medium leading-none cursor-pointer"
              >
                {t('cookies.marketingTitle') || 'Marketing'}
              </label>
              <p className="text-sm text-gray-500 leading-snug">
                {t('cookies.marketingDescription') || 
                  'These cookies are used to track visitors across websites to display relevant advertisements.'}
              </p>
            </div>
          </div>
        </div>

        <DialogFooter className="flex space-x-2 justify-end">
          <Button variant="outline" onClick={() => setOpen(false)}>
            {t('cookies.cancel') || 'Cancel'}
          </Button>
          <Button onClick={handleSave}>
            {t('cookies.savePreferences') || 'Save Preferences'}
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
