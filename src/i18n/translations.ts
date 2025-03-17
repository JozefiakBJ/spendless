// Type definitions
export type TranslationKey = 
  // Navbar
  | 'nav.features'
  | 'nav.testimonials'
  | 'nav.pricing'
  | 'nav.login'
  | 'nav.signup'
  
  // Hero
  | 'hero.tagline'
  | 'hero.title' 
  | 'hero.subtitle'
  | 'hero.getStarted'
  | 'hero.howItWorks'
  | 'hero.dashboardCaption'
  | 'hero.exploreFeatures'
  
  // Features
  | 'features.title'
  | 'features.subtitle'
  | 'features.description'
  | 'features.smartTracking.title'
  | 'features.smartTracking.description'
  | 'features.multiSourceImport.title'
  | 'features.multiSourceImport.description'
  | 'features.aiAnalysis.title'
  | 'features.aiAnalysis.description'
  | 'features.multipleBudgets.title'
  | 'features.multipleBudgets.description'
  | 'features.budgetSharing.title'
  | 'features.budgetSharing.description'
  | 'features.security.title'
  | 'features.security.description'
  | 'features.exploreAll'
  
  // Downloads
  | 'downloads.title'
  | 'downloads.subtitle'
  | 'downloads.description'
  | 'downloads.mobileApps'
  | 'downloads.appStore'
  | 'downloads.googlePlay'
  | 'downloads.desktopApps'
  | 'downloads.macos'
  | 'downloads.windows'
  | 'downloads.linux'
  | 'downloads.systemRequirements'
  | 'downloads.windowsReq'
  | 'downloads.macosReq'
  | 'downloads.linuxReq'
  | 'downloads.mobileReq'
  | 'downloads.syncMessage'

  // Testimonials
  | 'testimonials.title'
  | 'testimonials.subtitle'
  | 'testimonials.description'
  | 'testimonials.rating'

  // CTA
  | 'cta.getStarted'
  | 'cta.title'
  | 'cta.description'
  | 'cta.freeTrialButton'
  | 'cta.feature1'
  | 'cta.feature2'
  | 'cta.feature3'
  | 'cta.feature4'
  | 'cta.feature5'
  | 'cta.newsletter.title'
  | 'cta.newsletter.description'
  | 'cta.newsletter.placeholder'
  | 'cta.newsletter.subscribe'
  | 'cta.newsletter.subscribed'
  | 'cta.newsletter.privacy'
  | 'cta.premium.title'
  | 'cta.premium.description'
  | 'cta.premium.button'

  // Footer
  | 'footer.description'
  | 'footer.product'
  | 'footer.resources'
  | 'footer.company'
  | 'footer.copyright'
  | 'footer.privacyPolicy'
  | 'footer.terms'
  | 'footer.cookieSettings'
  
  // Cookies
  | 'cookies.bannerTitle'
  | 'cookies.bannerText'
  | 'cookies.customize'
  | 'cookies.acceptAll'
  | 'cookies.settingsTitle'
  | 'cookies.settingsDescription'
  | 'cookies.necessaryTitle'
  | 'cookies.required'
  | 'cookies.necessaryDescription'
  | 'cookies.functionalTitle'
  | 'cookies.functionalDescription'
  | 'cookies.analyticsTitle'
  | 'cookies.analyticsDescription'
  | 'cookies.marketingTitle'
  | 'cookies.marketingDescription'
  | 'cookies.cancel'
  | 'cookies.savePreferences';

export type LanguageCode = 'en' | 'pl' | 'de' | 'fr' | 'es' | 'uk';

// Add the missing TranslationsType definition
export type TranslationsType = Record<TranslationKey, string>;

// Translation sections by feature
type NavTranslations = {
  features: string;
  testimonials: string;
  pricing: string;
  login: string;
  signup: string;
};

type HeroTranslations = {
  tagline: string;
  title: string;
  subtitle: string;
  getStarted: string;
  howItWorks: string;
  dashboardCaption: string;
  exploreFeatures: string;
};

type FeaturesTranslations = {
  title: string;
  subtitle: string;
  description: string;
  smartTracking: {
    title: string;
    description: string;
  };
  multiSourceImport: {
    title: string;
    description: string;
  };
  aiAnalysis: {
    title: string;
    description: string;
  };
  multipleBudgets: {
    title: string;
    description: string;
  };
  budgetSharing: {
    title: string;
    description: string;
  };
  security: {
    title: string;
    description: string;
  };
  exploreAll: string;
};

type DownloadsTranslations = {
  title: string;
  subtitle: string;
  description: string;
  mobileApps: string;
  appStore: string;
  googlePlay: string;
  desktopApps: string;
  macos: string;
  windows: string;
  linux: string;
  systemRequirements: string;
  windowsReq: string;
  macosReq: string;
  linuxReq: string;
  mobileReq: string;
  syncMessage: string;
};

type TestimonialsTranslations = {
  title: string;
  subtitle: string;
  description: string;
  rating: string;
};

type CtaTranslations = {
  getStarted: string;
  title: string;
  description: string;
  freeTrialButton: string;
  feature1: string;
  feature2: string;
  feature3: string;
  feature4: string;
  feature5: string;
  newsletter: {
    title: string;
    description: string;
    placeholder: string;
    subscribe: string;
    subscribed: string;
    privacy: string;
  };
  premium: {
    title: string;
    description: string;
    button: string;
  };
};

type FooterTranslations = {
  description: string;
  product: string;
  resources: string;
  company: string;
  copyright: string;
  privacyPolicy: string;
  terms: string;
  cookieSettings: string;
};

// Create a new interface for cookie translations
type CookiesTranslations = {
  bannerTitle: string;
  bannerText: string;
  customize: string;
  acceptAll: string;
  settingsTitle: string;
  settingsDescription: string;
  necessaryTitle: string;
  required: string;
  necessaryDescription: string;
  functionalTitle: string;
  functionalDescription: string;
  analyticsTitle: string;
  analyticsDescription: string;
  marketingTitle: string;
  marketingDescription: string;
  cancel: string;
  savePreferences: string;
};

// Update the LanguageTranslations type to include cookies
type LanguageTranslations = {
  nav: NavTranslations;
  hero: HeroTranslations;
  features: FeaturesTranslations;
  downloads: DownloadsTranslations;
  testimonials: TestimonialsTranslations;
  cta: CtaTranslations;
  footer: FooterTranslations;
  cookies: CookiesTranslations;
};

// Define translations by language
const languageTranslations: Record<LanguageCode, LanguageTranslations> = {
  // English translations
  en: {
    nav: {
      features: 'Features',
      testimonials: 'Testimonials',
      pricing: 'Pricing',
      login: 'Log in',
      signup: 'Sign up free',
    },
    hero: {
      tagline: 'Smart Budget Management',
      title: 'Take Control of Your Finances with Ease',
      subtitle: 'Track your spending, upload statements from any source, and get AI-powered insights to help you save more. Share budgets with friends and family for better financial collaboration.',
      getStarted: 'Get Started Free',
      howItWorks: 'See How It Works',
      dashboardCaption: 'Understand your spending habits at a glance',
      exploreFeatures: 'Explore Features',
    },
    features: {
      title: 'Powerful Features',
      subtitle: 'Everything You Need to Manage Your Finances',
      description: 'SPENDLESS combines smart tracking, powerful import tools, and AI analysis to give you complete control over your financial life.',
      smartTracking: {
        title: 'Smart Tracking',
        description: 'Get real-time insights into your spending patterns and track expenses across multiple categories and accounts.',
      },
      multiSourceImport: {
        title: 'Multi-Source Import',
        description: 'Easily import data from PDFs, CSV files, Excel sheets, or connect directly to your bank accounts.',
      },
      aiAnalysis: {
        title: 'AI-Powered Analysis',
        description: 'Let our advanced AI analyze your finances, identify saving opportunities, and provide personalized recommendations.',
      },
      multipleBudgets: {
        title: 'Multiple Budgets',
        description: 'Create separate budgets for different goals or time periods and keep all your financial planning in one place.',
      },
      budgetSharing: {
        title: 'Budget Sharing',
        description: 'Share budgets with family or friends for joint expenses, household management, or trips.',
      },
      security: {
        title: 'Security & Privacy',
        description: 'Your data is encrypted and secure. We never sell your information or share it with third parties.',
      },
      exploreAll: 'Explore All Features',
    },
    downloads: {
      title: 'Available Everywhere',
      subtitle: 'Take SPENDLESS With You',
      description: 'Access your finances from anywhere. Our app is available on all major platforms, so you can track your spending no matter which device you\'re using.',
      mobileApps: 'Mobile Apps',
      appStore: 'App Store',
      googlePlay: 'Google Play',
      desktopApps: 'Desktop Apps',
      macos: 'macOS',
      windows: 'Windows',
      linux: 'Linux',
      systemRequirements: 'System Requirements',
      windowsReq: 'Windows 10 or newer',
      macosReq: 'macOS 11 (Big Sur) or newer',
      linuxReq: 'Ubuntu 20.04, Fedora 34, or equivalent',
      mobileReq: 'iOS 14+ or Android 9.0+',
      syncMessage: 'All apps sync automatically with your cloud account. Your data is always up-to-date across all your devices.',
    },
    testimonials: {
      title: 'User Stories',
      subtitle: 'Loved by Thousands of Users',
      description: 'See what our community is saying about how SPENDLESS has helped them achieve their financial goals.',
      rating: 'average rating from over 10,000 users',
    },
    cta: {
      getStarted: 'Get Started Today',
      title: 'Take Control of Your Financial Future',
      description: 'Join thousands of users who have transformed their relationship with money using SPENDLESS.',
      freeTrialButton: 'Start Your Free Trial',
      feature1: 'Free 14-day full-featured trial',
      feature2: 'No credit card required to start',
      feature3: 'Import unlimited transactions',
      feature4: 'AI-powered insights and recommendations',
      feature5: 'Access to all budget templates',
      newsletter: {
        title: 'Stay Updated',
        description: 'Sign up for our newsletter to receive the latest tips, feature updates, and financial insights.',
        placeholder: 'Your email address',
        subscribe: 'Subscribe',
        subscribed: 'Subscribed!',
        privacy: 'We respect your privacy and will never share your information.',
      },
      premium: {
        title: 'Ready for serious financial planning?',
        description: 'Our premium plans offer advanced features for more complex financial needs.',
        button: 'View Premium Plans',
      },
    },
    footer: {
      description: 'Smart budget management that helps you take control of your finances with powerful tools and insights.',
      product: 'Product',
      resources: 'Resources',
      company: 'Company',
      copyright: 'All rights reserved.',
      privacyPolicy: 'Privacy Policy',
      terms: 'Terms of Service',
      cookieSettings: 'Cookie Settings',
    },
    cookies: {
      bannerTitle: 'Cookie Notice',
      bannerText: 'We use cookies to enhance your browsing experience, serve personalized ads or content, and analyze our traffic. By clicking "Accept All", you consent to our use of cookies.',
      customize: 'Customize',
      acceptAll: 'Accept All',
      settingsTitle: 'Cookie Settings',
      settingsDescription: 'Manage your cookie preferences. Necessary cookies are always enabled as they are essential for the website to function properly.',
      necessaryTitle: 'Necessary',
      required: 'Required',
      necessaryDescription: 'These cookies are essential for the website to function properly and cannot be disabled.',
      functionalTitle: 'Functional',
      functionalDescription: 'These cookies enable the website to provide enhanced functionality and personalization.',
      analyticsTitle: 'Analytics',
      analyticsDescription: 'These cookies help us understand how visitors interact with the website, helping us improve our services.',
      marketingTitle: 'Marketing',
      marketingDescription: 'These cookies are used to track visitors across websites to display relevant advertisements.',
      cancel: 'Cancel',
      savePreferences: 'Save Preferences',
    },
  },

  // Polish translations
  pl: {
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
  },

  // German translations
  de: {
    nav: {
      features: 'Funktionen',
      testimonials: 'Kundenstimmen',
      pricing: 'Preise',
      login: 'Anmelden',
      signup: 'Kostenlos registrieren',
    },
    hero: {
      tagline: 'Intelligentes Budgetmanagement',
      title: 'Übernehmen Sie mühelos die Kontrolle über Ihre Finanzen',
      subtitle: 'Verfolgen Sie Ihre Ausgaben, laden Sie Kontoauszüge aus verschiedenen Quellen hoch und erhalten Sie KI-gestützte Einblicke, die Ihnen beim Sparen helfen. Teilen Sie Budgets mit Freunden und Familie für eine bessere finanzielle Zusammenarbeit.',
      getStarted: 'Kostenlos starten',
      howItWorks: 'So funktioniert es',
      dashboardCaption: 'Verstehen Sie Ihre Ausgabegewohnheiten auf einen Blick',
      exploreFeatures: 'Funktionen erkunden',
    },
    features: {
      title: 'Leistungsstarke Funktionen',
      subtitle: 'Alles, was Sie zur Verwaltung Ihrer Finanzen benötigen',
      description: 'SPENDLESS kombiniert intelligentes Tracking, leistungsstarke Import-Tools und KI-Analyse, um Ihnen die vollständige Kontrolle über Ihr Finanzleben zu geben.',
      smartTracking: {
        title: 'Intelligentes Tracking',
        description: 'Erhalten Sie Echtzeit-Einblicke in Ihre Ausgabemuster und verfolgen Sie Ausgaben über mehrere Kategorien und Konten hinweg.',
      },
      multiSourceImport: {
        title: 'Multi-Quellen-Import',
        description: 'Importieren Sie ganz einfach Daten aus PDFs, CSV-Dateien, Excel-Tabellen oder verbinden Sie sich direkt mit Ihren Bankkonten.',
      },
      aiAnalysis: {
        title: 'KI-gestützte Analyse',
        description: 'Lassen Sie unsere fortschrittliche KI Ihre Finanzen analysieren, Sparmöglichkeiten identifizieren und personalisierte Empfehlungen geben.',
      },
      multipleBudgets: {
        title: 'Mehrere Budgets',
        description: 'Erstellen Sie separate Budgets für verschiedene Ziele oder Zeiträume und behalten Sie Ihre gesamte Finanzplanung an einem Ort.',
      },
      budgetSharing: {
        title: 'Budget-Sharing',
        description: 'Teilen Sie Budgets mit Familie oder Freunden für gemeinsame Ausgaben, Haushaltsführung oder Reisen.',
      },
      security: {
        title: 'Sicherheit & Datenschutz',
        description: 'Ihre Daten sind verschlüsselt und sicher. Wir verkaufen Ihre Informationen niemals oder teilen sie mit Dritten.',
      },
      exploreAll: 'Alle Funktionen erkunden',
    },
    downloads: {
      title: 'Überall verfügbar',
      subtitle: 'Nehmen Sie SPENDLESS mit',
      description: 'Greifen Sie von überall auf Ihre Finanzen zu. Unsere App ist auf allen wichtigen Plattformen verfügbar, damit Sie Ihre Ausgaben unabhängig vom verwendeten Gerät verfolgen können.',
      mobileApps: 'Mobile Apps',
      appStore: 'App Store',
      googlePlay: 'Google Play',
      desktopApps: 'Desktop-Apps',
      macos: 'macOS',
      windows: 'Windows',
      linux: 'Linux',
      systemRequirements: 'Systemanforderungen',
      windowsReq: 'Windows 10 oder neuer',
      macosReq: 'macOS 11 (Big Sur) oder neuer',
      linuxReq: 'Ubuntu 20.04, Fedora 34 oder gleichwertig',
      mobileReq: 'iOS 14+ oder Android 9.0+',
      syncMessage: 'Alle Apps synchronisieren sich automatisch mit Ihrem Cloud-Konto. Ihre Daten sind auf allen Ihren Geräten immer auf dem neuesten Stand.',
    },
    testimonials: {
      title: 'Nutzergeschichten',
      subtitle: 'Von Tausenden von Nutzern geliebt',
      description: 'Sehen Sie, was unsere Community darüber sagt, wie SPENDLESS ihnen geholfen hat, ihre finanziellen Ziele zu erreichen.',
      rating: 'durchschnittliche Bewertung von über 10.000 Nutzern',
    },
    cta: {
      getStarted: 'Jetzt starten',
      title: 'Übernehmen Sie die Kontrolle über Ihre finanzielle Zukunft',
      description: 'Schließen Sie sich Tausenden von Nutzern an, die ihre Beziehung zum Geld mit SPENDLESS verändert haben.',
      freeTrialButton: 'Starten Sie Ihre kostenlose Testversion',
      feature1: '14-tägige Testversion mit vollem Funktionsumfang',
      feature2: 'Keine Kreditkarte erforderlich',
      feature3: 'Importieren Sie unbegrenzte Transaktionen',
      feature4: 'KI-gestützte Erkenntnisse und Empfehlungen',
      feature5: 'Zugang zu allen Budget-Vorlagen',
      newsletter: {
        title: 'Bleiben Sie auf dem Laufenden',
        description: 'Melden Sie sich für unseren Newsletter an, um die neuesten Tipps, Funktionsupdates und Finanzinformationen zu erhalten.',
        placeholder: 'Ihre E-Mail-Adresse',
        subscribe: 'Abonnieren',
        subscribed: 'Abonniert!',
        privacy: 'Wir respektieren Ihre Privatsphäre und werden Ihre Informationen niemals weitergeben.',
      },
      premium: {
        title: 'Bereit für eine ernsthafte Finanzplanung?',
        description: 'Unsere Premium-Pläne bieten erweiterte Funktionen für komplexere finanzielle Bedürfnisse.',
        button: 'Premium-Pläne anzeigen',
      },
    },
    footer: {
      description: 'Intelligentes Budgetmanagement, das Ihnen hilft, die Kontrolle über Ihre Finanzen mit leistungsstarken Tools und Einblicken zu übernehmen.',
      product: 'Produkt',
      resources: 'Ressourcen',
      company: 'Unternehmen',
      copyright: 'Alle Rechte vorbehalten.',
      privacyPolicy: 'Datenschutzrichtlinie',
      terms: 'Nutzungsbedingungen',
      cookieSettings: 'Cookie-Einstellungen',
    },
    cookies: {
      bannerTitle: 'Cookie-Hinweis',
      bannerText: 'Wir verwenden Cookies, um Ihr Surferlebnis zu verbessern, personalisierte Anzeigen oder Inhalte zu schalten und unseren Verkehr zu analysieren. Durch Klicken auf "Alle akzeptieren" stimmen Sie der Verwendung unserer Cookies zu.',
      customize: 'Anpassen',
      acceptAll: 'Alle akzeptieren',
      settingsTitle: 'Cookie-Einstellungen',
      settingsDescription: 'Verwalten Sie Ihre Cookie-Präferenzen. Notwendige Cookies sind immer aktiviert, da sie für das ordnungsgemäße Funktionieren der Website unerlässlich sind.',
      necessaryTitle: 'Notwendig',
      required: 'Erforderlich',
      necessaryDescription: 'Diese Cookies sind für das ordnungsgemäße Funktionieren der Website unerlässlich und können nicht deaktiviert werden.',
      functionalTitle: 'Funktional',
      functionalDescription: 'Diese Cookies ermöglichen der Website, verbesserte Funktionalität und Personalisierung bereitzustellen.',
      analyticsTitle: 'Analytisch',
      analyticsDescription: 'Diese Cookies helfen uns zu verstehen, wie Besucher mit der Website interagieren, und helfen uns, unsere Dienste zu verbessern.',
      marketingTitle: 'Marketing',
      marketingDescription: 'Diese Cookies werden verwendet, um Besucher über Websites hinweg zu verfolgen, um relevante Werbung anzuzeigen.',
      cancel: 'Abbrechen',
      savePreferences: 'Einstellungen speichern',
    },
  },

  // French translations
  fr: {
    nav: {
      features: 'Fonctionnalités',
      testimonials: 'Témoignages',
      pricing: 'Tarifs',
      login: 'Connexion',
      signup: 'Inscription gratuite',
    },
    hero: {
      tagline: 'Gestion intelligente du budget',
      title: 'Prenez le contrôle de vos finances en toute simplicité',
      subtitle: 'Suivez vos dépenses, importez des relevés de toute source et obtenez des analyses alimentées par l\'IA pour vous aider à économiser davantage. Partagez des budgets avec vos amis et votre famille pour une meilleure collaboration financière.',
      getStarted: 'Commencer gratuitement',
      howItWorks: 'Voir comment ça marche',
      dashboardCaption: 'Comprenez vos habitudes de dépenses en un coup d\'œil',
      exploreFeatures: 'Explorer les fonctionnalités',
    },
    features: {
      title: 'Fonctionnalités puissantes',
      subtitle: 'Tout ce dont vous avez besoin pour gérer vos finances',
      description: 'SPENDLESS combine le suivi intelligent, des outils d\'importation puissants et l\'analyse par IA pour vous donner un contrôle total sur votre vie financière.',
      smartTracking: {
        title: 'Suivi intelligent',
        description: 'Obtenez des aperçus en temps réel de vos habitudes de dépenses et suivez les dépenses à travers plusieurs catégories et comptes.',
      },
      multiSourceImport: {
        title: 'Importation multi-sources',
        description: 'Importez facilement des données à partir de PDF, fichiers CSV, feuilles Excel ou connectez-vous directement à vos comptes bancaires.',
      },
      aiAnalysis: {
        title: 'Analyse alimentée par l\'IA',
        description: 'Laissez notre IA avancée analyser vos finances, identifier les opportunités d\'économies et fournir des recommandations personnalisées.',
      },
      multipleBudgets: {
        title: 'Budgets multiples',
        description: 'Créez des budgets séparés pour différents objectifs ou périodes et gardez toute votre planification financière en un seul endroit.',
      },
      budgetSharing: {
        title: 'Partage de budget',
        description: 'Partagez des budgets avec votre famille ou vos amis pour les dépenses communes, la gestion du ménage ou les voyages.',
      },
      security: {
        title: 'Sécurité et confidentialité',
        description: 'Vos données sont cryptées et sécurisées. Nous ne vendons jamais vos informations et ne les partageons pas avec des tiers.',
      },
      exploreAll: 'Explorer toutes les fonctionnalités',
    },
    downloads: {
      title: 'Disponible partout',
      subtitle: 'Emportez SPENDLESS avec vous',
      description: 'Accédez à vos finances de n\'importe où. Notre application est disponible sur toutes les principales plateformes, vous pouvez donc suivre vos dépenses quel que soit l\'appareil que vous utilisez.',
      mobileApps: 'Applications mobiles',
      appStore: 'App Store',
      googlePlay: 'Google Play',
      desktopApps: 'Applications de bureau',
      macos: 'macOS',
      windows: 'Windows',
      linux: 'Linux',
      systemRequirements: 'Exigences système',
      windowsReq: 'Windows 10 ou plus récent',
      macosReq: 'macOS 11 (Big Sur) ou plus récent',
      linuxReq: 'Ubuntu 20.04, Fedora 34 ou équivalent',
      mobileReq: 'iOS 14+ ou Android 9.0+',
      syncMessage: 'Toutes les applications se synchronisent automatiquement avec votre compte cloud. Vos données sont toujours à jour sur tous vos appareils.',
    },
    testimonials: {
      title: 'Histoires d\'utilisateurs',
      subtitle: 'Aimé par des milliers d\'utilisateurs',
      description: 'Découvrez ce que notre communauté dit sur la façon dont SPENDLESS les a aidés à atteindre leurs objectifs financiers.',
      rating: 'note moyenne de plus de 10 000 utilisateurs',
    },
    cta: {
      getStarted: 'Commencez aujourd\'hui',
      title: 'Prenez le contrôle de votre avenir financier',
      description: 'Rejoignez des milliers d\'utilisateurs qui ont transformé leur relation avec l\'argent grâce à SPENDLESS.',
      freeTrialButton: 'Commencez votre essai gratuit',
      feature1: 'Essai gratuit de 14 jours avec toutes les fonctionnalités',
      feature2: 'Aucune carte de crédit requise pour commencer',
      feature3: 'Importez des transactions illimitées',
      feature4: 'Informations et recommandations alimentées par l\'IA',
      feature5: 'Accès à tous les modèles de budget',
      newsletter: {
        title: 'Restez informé',
        description: 'Inscrivez-vous à notre newsletter pour recevoir les derniers conseils, mises à jour des fonctionnalités et informations financières.',
        placeholder: 'Votre adresse e-mail',
        subscribe: 'S\'abonner',
        subscribed: 'Abonné !',
        privacy: 'Nous respectons votre vie privée et ne partagerons jamais vos informations.',
      },
      premium: {
        title: 'Prêt pour une planification financière sérieuse ?',
        description: 'Nos plans premium offrent des fonctionnalités avancées pour des besoins financiers plus complexes.',
        button: 'Voir les plans Premium',
      },
    },
    footer: {
      description: 'Gestion intelligente du budget qui vous aide à prendre le contrôle de vos finances avec des outils et des informations puissants.',
      product: 'Produit',
      resources: 'Ressources',
      company: 'Entreprise',
      copyright: 'Tous droits réservés.',
      privacyPolicy: 'Politique de confidentialité',
      terms: 'Conditions d\'utilisation',
      cookieSettings: 'Paramètres des cookies',
    },
    cookies: {
      bannerTitle: 'Avis sur les Cookies',
      bannerText: 'Nous utilisons des cookies pour améliorer votre expérience de navigation, diffuser des annonces ou du contenu personnalisés et analyser notre trafic. En cliquant sur "Tout accepter", vous consentez à l\'utilisation de nos cookies.',
      customize: 'Personnaliser',
      acceptAll: 'Tout accepter',
      settingsTitle: 'Paramètres des Cookies',
      settingsDescription: 'Gérez vos préférences en matière de cookies. Les cookies nécessaires sont toujours activés car ils sont essentiels au bon fonctionnement du site.',
      necessaryTitle: 'Nécessaires',
      required: 'Obligatoires
