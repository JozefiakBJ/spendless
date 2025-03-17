import { LanguageTranslations } from '../types';

const plTranslations: LanguageTranslations = {
  nav: {
    features: 'Funkcje',
    testimonials: 'Opinie',
    pricing: 'Cennik',
    login: 'Zaloguj się',
    signup: 'Zarejestruj się za darmo',
  },
  hero: {
    tagline: 'Inteligentne Zarządzanie Budżetem',
    title: 'Przejmij kontrolę nad swoimi finansami z łatwością',
    subtitle: 'Śledź swoje wydatki, importuj wyciągi z różnych źródeł i otrzymuj rekomendacje wspierane przez AI, które pomogą Ci więcej oszczędzać. Udostępniaj budżety znajomym i rodzinie dla lepszej współpracy finansowej.',
    getStarted: 'Zacznij za darmo',
    howItWorks: 'Zobacz jak to działa',
    dashboardCaption: 'Zrozum swoje nawyki wydawania na pierwszy rzut oka',
    exploreFeatures: 'Poznaj funkcje',
  },
  features: {
    title: 'Zaawansowane Funkcje',
    subtitle: 'Wszystko, czego potrzebujesz do zarządzania swoimi finansami',
    description: 'SPENDLESS łączy inteligentne śledzenie, potężne narzędzia importu i analizę AI, aby dać Ci pełną kontrolę nad swoim życiem finansowym.',
    smartTracking: {
      title: 'Inteligentne Śledzenie',
      description: 'Uzyskaj wgląd w czasie rzeczywistym w swoje wzorce wydatków i śledź wydatki w wielu kategoriach i kontach.',
    },
    multiSourceImport: {
      title: 'Import z Wielu Źródeł',
      description: 'Łatwo importuj dane z plików PDF, CSV, arkuszy Excel lub połącz się bezpośrednio ze swoim bankiem.',
    },
    aiAnalysis: {
      title: 'Analiza Wspierana przez AI',
      description: 'Pozwól naszej zaawansowanej sztucznej inteligencji analizować Twoje finanse, identyfikować możliwości oszczędzania i dostarczać spersonalizowane rekomendacje.',
    },
    multipleBudgets: {
      title: 'Wiele Budżetów',
      description: 'Twórz oddzielne budżety dla różnych celów lub okresów i przechowuj całe swoje planowanie finansowe w jednym miejscu.',
    },
    budgetSharing: {
      title: 'Udostępnianie Budżetu',
      description: 'Udostępniaj budżety rodzinie lub znajomym na wspólne wydatki, zarządzanie gospodarstwem domowym lub podróże.',
    },
    security: {
      title: 'Bezpieczeństwo i Prywatność',
      description: 'Twoje dane są zaszyfrowane i bezpieczne. Nigdy nie sprzedajemy Twoich informacji ani nie udostępniamy ich stronom trzecim.',
    },
    exploreAll: 'Odkryj wszystkie funkcje',
  },
  downloads: {
    title: 'Dostępne Wszędzie',
    subtitle: 'Zabierz SPENDLESS ze sobą',
    description: 'Uzyskaj dostęp do swoich finansów z dowolnego miejsca. Nasza aplikacja jest dostępna na wszystkich głównych platformach, dzięki czemu możesz śledzić swoje wydatki bez względu na to, z jakiego urządzenia korzystasz.',
    mobileApps: 'Aplikacje Mobilne',
    appStore: 'App Store',
    googlePlay: 'Google Play',
    desktopApps: 'Aplikacje Desktopowe',
    macos: 'macOS',
    windows: 'Windows',
    linux: 'Linux',
    systemRequirements: 'Wymagania Systemowe',
    windowsReq: 'Windows 10 lub nowszy',
    macosReq: 'macOS 11 (Big Sur) lub nowszy',
    linuxReq: 'Ubuntu 20.04, Fedora 34 lub równoważne',
    mobileReq: 'iOS 14+ lub Android 9.0+',
    syncMessage: 'Wszystkie aplikacje automatycznie synchronizują się z Twoim kontem w chmurze. Twoje dane są zawsze aktualne na wszystkich urządzeniach.',
  },
  testimonials: {
    title: 'Historie Użytkowników',
    subtitle: 'Uwielbiane przez Tysiące Użytkowników',
    description: 'Zobacz, co nasza społeczność mówi o tym, jak SPENDLESS pomógł im osiągnąć ich cele finansowe.',
    rating: 'średnia ocena od ponad 10 000 użytkowników',
  },
  premiumPlans: {
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
  },
  cta: {
    getStarted: 'Zacznij Już Dziś',
    title: 'Przejmij kontrolę nad swoją przyszłością finansową',
    description: 'Dołącz do tysięcy użytkowników, którzy przekształcili swoje relacje z pieniędzmi dzięki SPENDLESS.',
    freeTrialButton: 'Rozpocznij bezpłatny okres próbny',
    feature1: '14-dniowy pełnofunkcyjny okres próbny',
    feature2: 'Karta kredytowa nie jest wymagana na start',
    feature3: 'Importuj nieograniczoną liczbę transakcji',
    feature4: 'Spostrzeżenia i rekomendacje wspierane przez AI',
    feature5: 'Dostęp do wszystkich szablonów budżetu',
    newsletter: {
      title: 'Bądź na bieżąco',
      description: 'Zapisz się do naszego newslettera, aby otrzymywać najnowsze wskazówki, aktualizacje funkcji i informacje finansowe.',
      placeholder: 'Twój adres email',
      subscribe: 'Subskrybuj',
      subscribed: 'Zapisano!',
      privacy: 'Szanujemy Twoją prywatność i nigdy nie udostępnimy Twoich informacji.',
    },
    premium: {
      title: 'Gotowy na poważne planowanie finansowe?',
      description: 'Nasze plany premium oferują zaawansowane funkcje dla bardziej złożonych potrzeb finansowych.',
      button: 'Zobacz Plany Premium',
    },
  },
  footer: {
    description: 'Inteligentne zarządzanie budżetem, które pomaga przejąć kontrolę nad finansami dzięki potężnym narzędziom i spostrzeżeniom.',
    product: 'Produkt',
    resources: 'Zasoby',
    company: 'Firma',
    copyright: 'Wszelkie prawa zastrzeżone.',
    privacyPolicy: 'Polityka Prywatności',
    terms: 'Warunki Korzystania',
    cookieSettings: 'Ustawienia Plików Cookie',
    backToHome: 'Powrót do Strony Głównej',
  },
  cookies: {
    bannerTitle: 'Informacja o Plikach Cookie',
    bannerText: 'Używamy plików cookie, aby ulepszyć Twoje doświadczenia przeglądania, wyświetlać spersonalizowane reklamy lub treści oraz analizować nasz ruch. Klikając "Akceptuj wszystkie", wyrażasz zgodę na nasze pliki cookie.',
    customize: 'Dostosuj',
    acceptAll: 'Akceptuj wszystkie',
    settingsTitle: 'Ustawienia Plików Cookie',
    settingsDescription: 'Zarządzaj swoimi preferencjami dotyczącymi plików cookie. Niezbędne pliki cookie są zawsze włączone, ponieważ są niezbędne do prawidłowego funkcjonowania strony.',
    necessaryTitle: 'Niezbędne',
    required: 'Wymagane',
    necessaryDescription: 'Te pliki cookie są niezbędne do prawidłowego funkcjonowania strony i nie mogą być wyłączone.',
    functionalTitle: 'Funkcjonalne',
    functionalDescription: 'Te pliki cookie umożliwiają stronie zapewnienie zwiększonej funkcjonalności i personalizacji.',
    analyticsTitle: 'Analityczne',
    analyticsDescription: 'Te pliki cookie pomagają nam zrozumieć, jak odwiedzający wchodzą w interakcję ze stroną, pomagając nam ulepszyć nasze usługi.',
    marketingTitle: 'Marketingowe',
    marketingDescription: 'Te pliki cookie są używane do śledzenia odwiedzających na stronach internetowych w celu wyświetlania odpowiednich reklam.',
    cancel: 'Anuluj',
    savePreferences: 'Zapisz preferencje',
  },
  roadmap: {
    title: 'Nasza Mapa Rozwoju',
    subtitle: 'Poznaj naszą drogę i zobacz, jakie ekscytujące funkcje tworzymy jako następne. Stale ulepszamy SPENDLESS na podstawie Twoich opinii.',
    filterAll: 'Wszystkie',
    filterPlanned: 'Planowane',
    filterInProgress: 'W trakcie',
    filterCompleted: 'Ukończone',
    statusPlanned: 'Planowane',
    statusInProgress: 'W trakcie',
    statusCompleted: 'Ukończone',
    q1: 'K1',
    q2: 'K2',
    q3: 'K3',
    q4: 'K4'
  },
  terms: {
    title: 'Warunki korzystania z usługi',
    lastUpdated: 'Ostatnia aktualizacja:',
    intro: 'Prosimy o uważne przeczytanie niniejszych Warunków korzystania z usługi ("Warunki") przed rozpoczęciem korzystania z aplikacji SPENDLESS. Niniejsze Warunki stanowią prawnie wiążącą umowę pomiędzy Tobą a SPENDLESS.',
    acceptanceTitle: 'Akceptacja Warunków',
    acceptanceText: 'Uzyskując dostęp do SPENDLESS lub korzystając z niej, zgadzasz się na przestrzeganie niniejszych Warunków. Jeśli nie zgadzasz się z jakąkolwiek częścią Warunków, nie możesz korzystać z usługi.',
    serviceTitle: 'Opis Usługi',
    serviceText: 'SPENDLESS to aplikacja do zarządzania budżetem, która umożliwia użytkownikom śledzenie wydatków, importowanie danych finansowych z różnych źródeł oraz otrzymywanie analiz wspieranych przez sztuczną inteligencję, aby skuteczniej zarządzać finansami.',
    accountsTitle: 'Konta Użytkowników',
    accountsText: 'Tworząc u nas konto, musisz podać dokładne i kompletne informacje. Jesteś odpowiedzialny za zabezpieczenie hasła i za wszystkie działania, które mają miejsce w ramach Twojego konta.',
    contentTitle: 'Treści Użytkownika',
    contentText: 'Zachowujesz wszystkie prawa do danych finansowych i innych treści, które przesyłasz do SPENDLESS. Przesyłając treści, udzielasz nam licencji na używanie, przechowywanie i przetwarzanie tych treści w celu świadczenia naszych usług.',
    prohibitedTitle: 'Zabronione Zastosowania',
    prohibitedText: 'Zgadzasz się nie:',
    prohibitedItems: [
      'Używać usługi do celów niezgodnych z prawem',
      'Naruszać przepisów prawa w Twojej jurysdykcji',
      'Próbować uzyskać nieuprawniony dostęp do jakiejkolwiek części usługi',
      'Zakłócać lub zakłócać działanie usługi',
      'Sprzedawać, handlować lub odsprzedawać dostępu do usługi'
    ],
    terminationTitle: 'Wypowiedzenie',
    terminationText: 'Możemy wypowiedzieć lub zawiesić Twoje konto i dostęp do usługi natychmiast, bez wcześniejszego powiadomienia lub odpowiedzialności, z jakiegokolwiek powodu, w tym bez ograniczeń, jeśli naruszysz Warunki.',
    liabilityTitle: 'Ograniczenie Odpowiedzialności',
    liabilityText: 'W żadnym wypadku SPENDLESS, jego dyrektorzy, pracownicy, partnerzy, agenci, dostawcy lub podmioty stowarzyszone nie będą odpowiedzialni za jakiekolwiek pośrednie, przypadkowe, specjalne, wynikowe lub karne szkody, w tym bez ograniczeń, utratę zysków, danych, użytkowania, dobrej woli lub inne niematerialne straty.',
    changesTitle: 'Zmiany w Warunkach',
    changesText: 'Zastrzegamy sobie prawo do modyfikowania lub zastępowania niniejszych Warunków w dowolnym momencie. Twoim obowiązkiem jest okresowe przeglądanie niniejszych Warunków pod kątem zmian.',
    contactTitle: 'Kontakt z nami',
    contactText: 'Jeśli masz jakiekolwiek pytania dotyczące niniejszych Warunków, prosimy o kontakt pod adresem terms@spendless.com.'
  },
  privacy: {
    title: 'Polityka Prywatności',
    lastUpdated: 'Ostatnia aktualizacja:',
    intro: 'Niniejsza Polityka Prywatności opisuje, w jaki sposób SPENDLESS zbiera, wykorzystuje i udostępnia Twoje dane osobowe podczas korzystania z naszej aplikacji do zarządzania budżetem.',
    collectTitle: 'Informacje, które zbieramy',
    collectText: 'Zbieramy różne rodzaje informacji, aby dostarczać i ulepszać nasze usługi, w tym:',
    collectItems: [
      'Informacje kontaktowe, takie jak imię i nazwisko, adres e-mail i numer telefonu',
      'Informacje o koncie, takie jak nazwa użytkownika i hasło',
      'Informacje finansowe, takie jak transakcje, salda i kategorie wydatków',
      'Dane o użytkowaniu, takie jak rejestry interakcji z aplikacją, kliknięcia i analizy',
      'Informacje o urządzeniu, takie jak adres IP, typ przeglądarki i system operacyjny'
    ],
    useTitle: 'Jak wykorzystujemy Twoje informacje',
    useText: 'Wykorzystujemy zebrane informacje do:',
    useItems: [
      'Dostarczania, utrzymywania i ulepszania naszych usług',
      'Personalizacji Twojego doświadczenia w aplikacji',
      'Przetwarzania transakcji i zarządzania Twoim kontem',
      'Komunikowania się z Tobą w sprawie aktualizacji, wsparcia i promocji',
      'Analizowania użytkowania w celu ulepszenia naszego produktu i usług',
      'Zapobiegania oszustwom i zapewnienia bezpieczeństwa'
    ],
    securityTitle: 'Bezpieczeństwo danych',
    securityText: 'Wdrażamy odpowiednie środki techniczne i organizacyjne, aby chronić Twoje dane osobowe przed przypadkową utratą, nieautoryzowanym dostępem, ujawnieniem i innymi formami nielegalnego przetwarzania.',
    retentionTitle: 'Przechowywanie danych',
    retentionText: 'Przechowujemy Twoje dane osobowe tylko tak długo, jak jest to konieczne do celów, dla których zostały zebrane, w tym do spełnienia wymogów prawnych, księgowych lub sprawozdawczych.',
    rightsTitle: 'Twoje prawa',
    rightsText: 'W zależności od Twojej lokalizacji, możesz mieć prawa dotyczące Twoich danych osobowych, w tym:',
    rightsItems: [
      'Dostęp do danych osobowych, które posiadamy na Twój temat',
      'Poprawianie niedokładnych danych',
      'Żądanie usunięcia Twoich danych',
      'Ograniczenie lub sprzeciw wobec przetwarzania Twoich danych',
      'Żądanie przeniesienia Twoich danych do innego dostawcy',
      'Złożenie skargi do organu nadzorczego'
    ],
    changesTitle: 'Zmiany w tej polityce',
    changesText: 'Możemy od czasu do czasu aktualizować naszą Politykę Prywatności. Poinformujemy Cię o wszelkich zmianach, publikując nową Politykę Prywatności na tej stronie i aktualizując datę "ostatniej aktualizacji".',
    contactTitle: 'Kontakt z nami',
    contactText: 'Jeśli masz jakiekolwiek pytania dotyczące niniejszej Polityki Prywatności, prosimy o kontakt pod adresem privacy@spendless.com.'
  }
};

export default plTranslations;
