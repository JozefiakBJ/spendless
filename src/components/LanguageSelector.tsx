
import { useState, useEffect } from 'react';
import { Check, Globe } from 'lucide-react';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';

type Language = {
  code: string;
  name: string;
  nativeName: string;
};

const languages: Language[] = [
  { code: 'en', name: 'English', nativeName: 'English' },
  { code: 'pl', name: 'Polish', nativeName: 'Polski' },
  { code: 'de', name: 'German', nativeName: 'Deutsch' },
  { code: 'fr', name: 'French', nativeName: 'Français' },
  { code: 'es', name: 'Spanish', nativeName: 'Español' },
  { code: 'uk', name: 'Ukrainian', nativeName: 'Українська' },
];

const LanguageSelector = () => {
  const [currentLanguage, setCurrentLanguage] = useState<Language>(languages[0]);

  const changeLanguage = (language: Language) => {
    setCurrentLanguage(language);
    // Here you would implement actual language change logic
    // For example, using i18n library or custom implementation
    localStorage.setItem('preferredLanguage', language.code);
    document.documentElement.lang = language.code;
    console.log(`Language changed to: ${language.name}`);
  };

  useEffect(() => {
    // Get saved language from localStorage on component mount
    const savedLanguage = localStorage.getItem('preferredLanguage');
    if (savedLanguage) {
      const lang = languages.find(l => l.code === savedLanguage);
      if (lang) setCurrentLanguage(lang);
    }
  }, []);

  return (
    <DropdownMenu>
      <DropdownMenuTrigger className="flex items-center gap-1 text-gray-600 hover:text-primary-600 transition-colors">
        <Globe size={16} />
        <span className="hidden md:inline">{currentLanguage.code.toUpperCase()}</span>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="w-48">
        {languages.map((language) => (
          <DropdownMenuItem
            key={language.code}
            className="flex items-center justify-between cursor-pointer"
            onClick={() => changeLanguage(language)}
          >
            <span>{language.nativeName}</span>
            {currentLanguage.code === language.code && (
              <Check size={16} className="text-primary-600" />
            )}
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default LanguageSelector;
