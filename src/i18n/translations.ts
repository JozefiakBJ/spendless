
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
  | 'footer.cookieSettings';

export type LanguageCode = 'en' | 'pl' | 'de' | 'fr' | 'es' | 'uk';

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

// Top-level language structure
type LanguageTranslations = {
  nav: NavTranslations;
  hero: HeroTranslations;
  features: FeaturesTranslations;
  downloads: DownloadsTranslations;
  testimonials: TestimonialsTranslations;
  cta: CtaTranslations;
  footer: FooterTranslations;
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
  },

  // Spanish translations
  es: {
    nav: {
      features: 'Características',
      testimonials: 'Testimonios',
      pricing: 'Precios',
      login: 'Iniciar sesión',
      signup: 'Registrarse gratis',
    },
    hero: {
      tagline: 'Gestión Inteligente de Presupuesto',
      title: 'Tome el control de sus finanzas con facilidad',
      subtitle: 'Rastree sus gastos, cargue extractos de cualquier fuente y obtenga información impulsada por IA para ayudarle a ahorrar más. Comparta presupuestos con amigos y familiares para una mejor colaboración financiera.',
      getStarted: 'Comenzar gratis',
      howItWorks: 'Ver cómo funciona',
      dashboardCaption: 'Comprenda sus hábitos de gasto de un vistazo',
      exploreFeatures: 'Explorar características',
    },
    features: {
      title: 'Características Poderosas',
      subtitle: 'Todo lo que necesita para gestionar sus finanzas',
      description: 'SPENDLESS combina seguimiento inteligente, potentes herramientas de importación y análisis de IA para darle control total sobre su vida financiera.',
      smartTracking: {
        title: 'Seguimiento Inteligente',
        description: 'Obtenga información en tiempo real sobre sus patrones de gasto y rastree gastos en múltiples categorías y cuentas.',
      },
      multiSourceImport: {
        title: 'Importación de Múltiples Fuentes',
        description: 'Importe fácilmente datos de PDFs, archivos CSV, hojas de Excel o conéctese directamente a sus cuentas bancarias.',
      },
      aiAnalysis: {
        title: 'Análisis Impulsado por IA',
        description: 'Deje que nuestra IA avanzada analice sus finanzas, identifique oportunidades de ahorro y proporcione recomendaciones personalizadas.',
      },
      multipleBudgets: {
        title: 'Múltiples Presupuestos',
        description: 'Cree presupuestos separados para diferentes objetivos o períodos y mantenga toda su planificación financiera en un solo lugar.',
      },
      budgetSharing: {
        title: 'Compartir Presupuestos',
        description: 'Comparta presupuestos con familiares o amigos para gastos conjuntos, gestión del hogar o viajes.',
      },
      security: {
        title: 'Seguridad y Privacidad',
        description: 'Sus datos están encriptados y seguros. Nunca vendemos su información ni la compartimos con terceros.',
      },
      exploreAll: 'Explorar todas las características',
    },
    downloads: {
      title: 'Disponible en todas partes',
      subtitle: 'Lleve SPENDLESS con usted',
      description: 'Acceda a sus finanzas desde cualquier lugar. Nuestra aplicación está disponible en todas las principales plataformas, por lo que puede rastrear sus gastos sin importar qué dispositivo esté utilizando.',
      mobileApps: 'Aplicaciones Móviles',
      appStore: 'App Store',
      googlePlay: 'Google Play',
      desktopApps: 'Aplicaciones de Escritorio',
      macos: 'macOS',
      windows: 'Windows',
      linux: 'Linux',
      systemRequirements: 'Requisitos del Sistema',
      windowsReq: 'Windows 10 o más reciente',
      macosReq: 'macOS 11 (Big Sur) o más reciente',
      linuxReq: 'Ubuntu 20.04, Fedora 34 o equivalente',
      mobileReq: 'iOS 14+ o Android 9.0+',
      syncMessage: 'Todas las aplicaciones se sincronizan automáticamente con su cuenta en la nube. Sus datos siempre están actualizados en todos sus dispositivos.',
    },
    testimonials: {
      title: 'Historias de Usuarios',
      subtitle: 'Amado por Miles de Usuarios',
      description: 'Vea lo que nuestra comunidad dice sobre cómo SPENDLESS les ha ayudado a alcanzar sus objetivos financieros.',
      rating: 'calificación promedio de más de 10.000 usuarios',
    },
    cta: {
      getStarted: 'Comience Hoy',
      title: 'Tome el control de su futuro financiero',
      description: 'Únase a miles de usuarios que han transformado su relación con el dinero usando SPENDLESS.',
      freeTrialButton: 'Comience su prueba gratuita',
      feature1: 'Prueba gratuita de 14 días con todas las funciones',
      feature2: 'No se requiere tarjeta de crédito para comenzar',
      feature3: 'Importe transacciones ilimitadas',
      feature4: 'Información y recomendaciones impulsadas por IA',
      feature5: 'Acceso a todas las plantillas de presupuesto',
      newsletter: {
        title: 'Manténgase actualizado',
        description: 'Suscríbase a nuestro boletín para recibir los últimos consejos, actualizaciones de funciones e información financiera.',
        placeholder: 'Su dirección de correo electrónico',
        subscribe: 'Suscribirse',
        subscribed: '¡Suscrito!',
        privacy: 'Respetamos su privacidad y nunca compartiremos su información.',
      },
      premium: {
        title: '¿Listo para una planificación financiera seria?',
        description: 'Nuestros planes premium ofrecen características avanzadas para necesidades financieras más complejas.',
        button: 'Ver Planes Premium',
      },
    },
    footer: {
      description: 'Gestión inteligente de presupuesto que le ayuda a tomar el control de sus finanzas con herramientas e información potentes.',
      product: 'Producto',
      resources: 'Recursos',
      company: 'Empresa',
      copyright: 'Todos los derechos reservados.',
      privacyPolicy: 'Política de Privacidad',
      terms: 'Términos de Servicio',
      cookieSettings: 'Configuración de Cookies',
    },
  },

  // Ukrainian translations
  uk: {
    nav: {
      features: 'Функції',
      testimonials: 'Відгуки',
      pricing: 'Ціни',
      login: 'Увійти',
      signup: 'Зареєструватися безкоштовно',
    },
    hero: {
      tagline: 'Розумне управління бюджетом',
      title: 'Візьміть контроль над своїми фінансами з легкістю',
      subtitle: 'Відстежуйте свої витрати, завантажуйте виписки з будь-якого джерела та отримуйте аналітику на основі ШІ, щоб допомогти вам заощаджувати більше. Діліться бюджетами з друзями та родиною для кращої фінансової співпраці.',
      getStarted: 'Почати безкоштовно',
      howItWorks: 'Подивитися, як це працює',
      dashboardCaption: 'Зрозумійте свої звички витрат з першого погляду',
      exploreFeatures: 'Дослідити функції',
    },
    features: {
      title: 'Потужні функції',
      subtitle: 'Все, що вам потрібно для управління фінансами',
      description: 'SPENDLESS поєднує розумне відстеження, потужні інструменти імпорту та аналіз на основі ШІ, щоб надати вам повний контроль над вашим фінансовим життям.',
      smartTracking: {
        title: 'Розумне відстеження',
        description: 'Отримуйте аналітику в реальному часі про ваші шаблони витрат та відстежуйте витрати за різними категоріями та рахунками.',
      },
      multiSourceImport: {
        title: 'Імпорт з різних джерел',
        description: 'Легко імпортуйте дані з PDF-файлів, CSV-файлів, Excel-таблиць або підключайтеся безпосередньо до ваших банківських рахунків.',
      },
      aiAnalysis: {
        title: 'Аналіз на основі ШІ',
        description: 'Дозвольте нашому передовому ШІ аналізувати ваші фінанси, виявляти можливості заощадження та надавати персоналізовані рекомендації.',
      },
      multipleBudgets: {
        title: 'Кілька бюджетів',
        description: 'Створюйте окремі бюджети для різних цілей або періодів часу та зберігайте все ваше фінансове планування в одному місці.',
      },
      budgetSharing: {
        title: 'Спільне використання бюджету',
        description: 'Діліться бюджетами з сім\'єю або друзями для спільних витрат, ведення домашнього господарства або подорожей.',
      },
      security: {
        title: 'Безпека та конфіденційність',
        description: 'Ваші дані зашифровані та захищені. Ми ніколи не продаємо вашу інформацію і не ділимося нею з третіми сторонами.',
      },
      exploreAll: 'Дослідити всі функції',
    },
    downloads: {
      title: 'Доступно всюди',
      subtitle: 'Візьміть SPENDLESS з собою',
      description: 'Отримуйте доступ до своїх фінансів звідусіль. Наш додаток доступний на всіх основних платформах, тому ви можете відстежувати свої витрати незалежно від того, який пристрій використовуєте.',
      mobileApps: 'Мобільні додатки',
      appStore: 'App Store',
      googlePlay: 'Google Play',
      desktopApps: 'Комп\'ютерні додатки',
      macos: 'macOS',
      windows: 'Windows',
      linux: 'Linux',
      systemRequirements: 'Системні вимоги',
      windowsReq: 'Windows 10 або новіше',
      macosReq: 'macOS 11 (Big Sur) або новіше',
      linuxReq: 'Ubuntu 20.04, Fedora 34 або еквівалент',
      mobileReq: 'iOS 14+ або Android 9.0+',
      syncMessage: 'Усі додатки автоматично синхронізуються з вашим хмарним обліковим записом. Ваші дані завжди актуальні на всіх ваших пристроях.',
    },
    testimonials: {
      title: 'Історії користувачів',
      subtitle: 'Улюблений тисячами користувачів',
      description: 'Подивіться, що говорить наша спільнота про те, як SPENDLESS допоміг їм досягти фінансових цілей.',
      rating: 'середня оцінка від понад 10 000 користувачів',
    },
    cta: {
      getStarted: 'Почніть сьогодні',
      title: 'Візьміть контроль над своїм фінансовим майбутнім',
      description: 'Приєднуйтесь до тисяч користувачів, які змінили своє ставлення до грошей за допомогою SPENDLESS.',
      freeTrialButton: 'Почніть безкоштовну пробну версію',
      feature1: 'Безкоштовна 14-денна повнофункціональна пробна версія',
      feature2: 'Кредитна картка не потрібна для початку',
      feature3: 'Імпортуйте необмежену кількість транзакцій',
      feature4: 'Аналітика та рекомендації на основі ШІ',
      feature5: 'Доступ до всіх шаблонів бюджету',
      newsletter: {
        title: 'Будьте в курсі',
        description: 'Підпишіться на наш інформаційний бюлетень, щоб отримувати останні поради, оновлення функцій та фінансову інформацію.',
        placeholder: 'Ваша електронна адреса',
        subscribe: 'Підписатися',
        subscribed: 'Підписано!',
        privacy: 'Ми поважаємо вашу конфіденційність і ніколи не поширюємо вашу інформацію.',
      },
      premium: {
        title: 'Готові до серйозного фінансового планування?',
        description: 'Наші преміум-плани пропонують розширені функції для більш складних фінансових потреб.',
        button: 'Переглянути преміум-плани',
      },
    },
    footer: {
      description: 'Розумне управління бюджетом, яке допомагає вам взяти контроль над своїми фінансами за допомогою потужних інструментів та аналітики.',
      product: 'Продукт',
      resources: 'Ресурси',
      company: 'Компанія',
      copyright: 'Усі права захищено.',
      privacyPolicy: 'Політика конфіденційності',
      terms: 'Умови використання',
      cookieSettings: 'Налаштування файлів cookie',
    },
  },
};

// Flat translations lookup utility for compatibility with existing code
// Maps dot notation keys (like 'nav.features') to their values
function flattenTranslations(): Record<LanguageCode, TranslationsType> {
  const result = {} as Record<LanguageCode, TranslationsType>;
  
  // Process each language
  Object.entries(languageTranslations).forEach(([langCode, langData]) => {
    const lang = langCode as LanguageCode;
    result[lang] = {} as TranslationsType;
    
    // Flatten nav section
    Object.entries(langData.nav).forEach(([key, value]) => {
      result[lang][`nav.${key}` as TranslationKey] = value;
    });
    
    // Flatten hero section
    Object.entries(langData.hero).forEach(([key, value]) => {
      result[lang][`hero.${key}` as TranslationKey] = value;
    });
    
    // Flatten features section
    Object.entries(langData.features).forEach(([key, value]) => {
      if (typeof value === 'object') {
        // Handle nested objects like smartTracking
        Object.entries(value).forEach(([subKey, subValue]) => {
          result[lang][`features.${key}.${subKey}` as TranslationKey] = subValue;
        });
      } else {
        result[lang][`features.${key}` as TranslationKey] = value;
      }
    });
    
    // Flatten downloads section
    Object.entries(langData.downloads).forEach(([key, value]) => {
      result[lang][`downloads.${key}` as TranslationKey] = value;
    });
    
    // Flatten testimonials section
    Object.entries(langData.testimonials).forEach(([key, value]) => {
      result[lang][`testimonials.${key}` as TranslationKey] = value;
    });
    
    // Flatten cta section
    Object.entries(langData.cta).forEach(([key, value]) => {
      if (typeof value === 'object') {
        // Handle nested objects like newsletter
        Object.entries(value).forEach(([subKey, subValue]) => {
          result[lang][`cta.${key}.${subKey}` as TranslationKey] = subValue;
        });
      } else {
        result[lang][`cta.${key}` as TranslationKey] = value;
      }
    });
    
    // Flatten footer section
    Object.entries(langData.footer).forEach(([key, value]) => {
      result[lang][`footer.${key}` as TranslationKey] = value;
    });
  });
  
  return result;
}

export const translations = flattenTranslations();
