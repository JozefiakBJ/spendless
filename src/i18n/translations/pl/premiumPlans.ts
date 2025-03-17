
import { PremiumPlansTranslations } from '../../types/premiumPlans';

export const premiumPlans: PremiumPlansTranslations = {
  title: 'Plany Premium',
  subtitle: 'Wybierz idealny plan, aby przenieść zarządzanie finansami na wyższy poziom',
  monthly: 'Miesięcznie',
  yearly: 'Rocznie',
  discount: '(Oszczędź 20%)',
  perMonth: 'miesiąc',
  perYear: 'rok',
  included: 'Co zawiera:',
  notIncluded: 'Nie zawiera:',
  getButton: 'Wybierz',
  basic: {
    name: 'Podstawowy',
    description: 'Idealny dla osób rozpoczynających swoją podróż finansową',
    features: {
      f1: 'Import do 500 transakcji miesięcznie',
      f2: 'Podstawowa kategoryzacja wydatków',
      f3: 'Miesięczne raporty wydatków',
      f4: 'Eksport danych do CSV',
      f5: 'Wsparcie przez e-mail',
    },
    notIncluded: {
      f1: 'Analityka wspierana przez AI',
      f2: 'Tworzenie wielu budżetów',
      f3: 'Możliwość udostępniania budżetu',
      f4: 'Niestandardowe kategorie wydatków',
    }
  },
  plus: {
    name: 'Plus',
    description: 'Rozszerzone funkcje dla poważnego zarządzania budżetem',
    features: {
      f1: 'Import nieograniczonej liczby transakcji',
      f2: 'Zaawansowana kategoryzacja wydatków',
      f3: 'Tygodniowe analizy wydatków',
      f4: 'Rekomendacje oszczędności wspierane przez AI',
      f5: 'Tworzenie do 5 oddzielnych budżetów',
      f6: 'Eksport danych do wielu formatów',
      f7: 'Priorytetowe wsparcie',
    },
    notIncluded: {
      f1: 'Możliwość udostępniania budżetu',
      f2: 'Niestandardowe kategorie wydatków',
    }
  },
  premium: {
    name: 'Premium',
    description: 'Kompletne zarządzanie finansami dla całej rodziny',
    features: {
      f1: 'Import nieograniczonej liczby transakcji',
      f2: 'Zaawansowana kategoryzacja wydatków',
      f3: 'Codzienne analizy wydatków',
      f4: 'Analiza finansowa wspierana przez AI',
      f5: 'Tworzenie nieograniczonej liczby budżetów',
      f6: 'Udostępnianie budżetu dla maksymalnie 5 osób',
      f7: 'Niestandardowe kategorie wydatków',
      f8: 'Eksport do wszystkich formatów',
      f9: 'Dedykowane wsparcie premium',
    }
  }
};
