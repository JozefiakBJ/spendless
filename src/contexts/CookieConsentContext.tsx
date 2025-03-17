
import React, { createContext, useContext, useState, useEffect } from 'react';

type CookieCategory = 'necessary' | 'functional' | 'analytics' | 'marketing';

interface CookieConsent {
  necessary: boolean; // Always true, can't be disabled
  functional: boolean;
  analytics: boolean;
  marketing: boolean;
}

interface CookieConsentContextType {
  consent: CookieConsent;
  showBanner: boolean;
  setShowBanner: (show: boolean) => void;
  updateConsent: (category: CookieCategory, value: boolean) => void;
  savePreferences: (all?: boolean) => void;
  openSettings: () => void;
}

const defaultConsent: CookieConsent = {
  necessary: true, // Always required
  functional: false,
  analytics: false,
  marketing: false,
};

const CookieConsentContext = createContext<CookieConsentContextType | undefined>(undefined);

export const useCookieConsent = () => {
  const context = useContext(CookieConsentContext);
  if (!context) {
    throw new Error('useCookieConsent must be used within a CookieConsentProvider');
  }
  return context;
};

export const CookieConsentProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [consent, setConsent] = useState<CookieConsent>(defaultConsent);
  const [showBanner, setShowBanner] = useState(false);
  const [showSettings, setShowSettings] = useState(false);

  // Load saved preferences on initial mount
  useEffect(() => {
    const savedConsent = localStorage.getItem('cookieConsent');
    if (savedConsent) {
      try {
        setConsent(JSON.parse(savedConsent));
        setShowBanner(false);
      } catch (e) {
        console.error('Error parsing cookie consent', e);
        setShowBanner(true);
      }
    } else {
      // No saved preferences found, show the banner
      setShowBanner(true);
    }
  }, []);

  const updateConsent = (category: CookieCategory, value: boolean) => {
    if (category === 'necessary') return; // Can't change necessary cookies
    
    setConsent(prev => ({
      ...prev,
      [category]: value
    }));
  };

  const savePreferences = (all = false) => {
    const newConsent = all 
      ? { ...defaultConsent, functional: true, analytics: true, marketing: true }
      : consent;
    
    // Save to localStorage
    localStorage.setItem('cookieConsent', JSON.stringify(newConsent));
    
    // Update state
    setConsent(newConsent);
    setShowBanner(false);
    setShowSettings(false);
    
    // Here you would implement the actual cookie setting logic
    // For example, enabling/disabling analytics tracking based on consent
  };

  const openSettings = () => {
    setShowSettings(true);
  };

  return (
    <CookieConsentContext.Provider
      value={{
        consent,
        showBanner,
        setShowBanner,
        updateConsent,
        savePreferences,
        openSettings
      }}
    >
      {children}
      {showBanner && <CookieBanner />}
      {showSettings && <CookieSettingsDialog open={showSettings} setOpen={setShowSettings} />}
    </CookieConsentContext.Provider>
  );
};

// These components will be implemented separately
import { CookieBanner } from '@/components/cookies/CookieBanner';
import { CookieSettingsDialog } from '@/components/cookies/CookieSettingsDialog';
