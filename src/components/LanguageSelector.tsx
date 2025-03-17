
import { useI18n } from '@/i18n/I18nContext';
import { Check, Globe } from 'lucide-react';
import { LanguageCode } from '@/i18n/types';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';

type Language = {
  code: LanguageCode;
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
  const { language, setLanguage } = useI18n();

  const changeLanguage = (lang: Language) => {
    setLanguage(lang.code);
    console.log(`Language changed to: ${lang.name}`);
  };

  const currentLanguageObj = languages.find(lang => lang.code === language) || languages[0];

  return (
    <DropdownMenu>
      <DropdownMenuTrigger className="flex items-center gap-1 text-gray-600 hover:text-primary-600 transition-colors">
        <Globe size={16} />
        <span className="hidden md:inline">{currentLanguageObj.code.toUpperCase()}</span>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="w-48">
        {languages.map((lang) => (
          <DropdownMenuItem
            key={lang.code}
            className="flex items-center justify-between cursor-pointer"
            onClick={() => changeLanguage(lang)}
          >
            <span>{lang.nativeName}</span>
            {language === lang.code && (
              <Check size={16} className="text-primary-600" />
            )}
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default LanguageSelector;
