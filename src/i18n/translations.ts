
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

type TranslationsType = {
  [key in TranslationKey]: string;
};

export type LanguageCode = 'en' | 'pl' | 'de' | 'fr' | 'es' | 'uk';

// English translations (base)
export const en: TranslationsType = {
  // Navbar
  'nav.features': 'Features',
  'nav.testimonials': 'Testimonials',
  'nav.pricing': 'Pricing',
  'nav.login': 'Log in',
  'nav.signup': 'Sign up free',

  // Hero
  'hero.tagline': 'Smart Budget Management',
  'hero.title': 'Take Control of Your Finances with Ease',
  'hero.subtitle': 'Track your spending, upload statements from any source, and get AI-powered insights to help you save more. Share budgets with friends and family for better financial collaboration.',
  'hero.getStarted': 'Get Started Free',
  'hero.howItWorks': 'See How It Works',
  'hero.dashboardCaption': 'Understand your spending habits at a glance',
  'hero.exploreFeatures': 'Explore Features',

  // Features
  'features.title': 'Powerful Features',
  'features.subtitle': 'Everything You Need to Manage Your Finances',
  'features.description': 'SPENDLESS combines smart tracking, powerful import tools, and AI analysis to give you complete control over your financial life.',
  'features.smartTracking.title': 'Smart Tracking',
  'features.smartTracking.description': 'Get real-time insights into your spending patterns and track expenses across multiple categories and accounts.',
  'features.multiSourceImport.title': 'Multi-Source Import',
  'features.multiSourceImport.description': 'Easily import data from PDFs, CSV files, Excel sheets, or connect directly to your bank accounts.',
  'features.aiAnalysis.title': 'AI-Powered Analysis',
  'features.aiAnalysis.description': 'Let our advanced AI analyze your finances, identify saving opportunities, and provide personalized recommendations.',
  'features.multipleBudgets.title': 'Multiple Budgets',
  'features.multipleBudgets.description': 'Create separate budgets for different goals or time periods and keep all your financial planning in one place.',
  'features.budgetSharing.title': 'Budget Sharing',
  'features.budgetSharing.description': 'Share budgets with family or friends for joint expenses, household management, or trips.',
  'features.security.title': 'Security & Privacy',
  'features.security.description': 'Your data is encrypted and secure. We never sell your information or share it with third parties.',
  'features.exploreAll': 'Explore All Features',

  // Downloads
  'downloads.title': 'Available Everywhere',
  'downloads.subtitle': 'Take SPENDLESS With You',
  'downloads.description': 'Access your finances from anywhere. Our app is available on all major platforms, so you can track your spending no matter which device you\'re using.',
  'downloads.mobileApps': 'Mobile Apps',
  'downloads.appStore': 'App Store',
  'downloads.googlePlay': 'Google Play',
  'downloads.desktopApps': 'Desktop Apps',
  'downloads.macos': 'macOS',
  'downloads.windows': 'Windows',
  'downloads.linux': 'Linux',
  'downloads.systemRequirements': 'System Requirements',
  'downloads.windowsReq': 'Windows 10 or newer',
  'downloads.macosReq': 'macOS 11 (Big Sur) or newer',
  'downloads.linuxReq': 'Ubuntu 20.04, Fedora 34, or equivalent',
  'downloads.mobileReq': 'iOS 14+ or Android 9.0+',
  'downloads.syncMessage': 'All apps sync automatically with your cloud account. Your data is always up-to-date across all your devices.',

  // Testimonials
  'testimonials.title': 'User Stories',
  'testimonials.subtitle': 'Loved by Thousands of Users',
  'testimonials.description': 'See what our community is saying about how SPENDLESS has helped them achieve their financial goals.',
  'testimonials.rating': 'average rating from over 10,000 users',

  // CTA
  'cta.getStarted': 'Get Started Today',
  'cta.title': 'Take Control of Your Financial Future',
  'cta.description': 'Join thousands of users who have transformed their relationship with money using SPENDLESS.',
  'cta.freeTrialButton': 'Start Your Free Trial',
  'cta.feature1': 'Free 14-day full-featured trial',
  'cta.feature2': 'No credit card required to start',
  'cta.feature3': 'Import unlimited transactions',
  'cta.feature4': 'AI-powered insights and recommendations',
  'cta.feature5': 'Access to all budget templates',
  'cta.newsletter.title': 'Stay Updated',
  'cta.newsletter.description': 'Sign up for our newsletter to receive the latest tips, feature updates, and financial insights.',
  'cta.newsletter.placeholder': 'Your email address',
  'cta.newsletter.subscribe': 'Subscribe',
  'cta.newsletter.subscribed': 'Subscribed!',
  'cta.newsletter.privacy': 'We respect your privacy and will never share your information.',
  'cta.premium.title': 'Ready for serious financial planning?',
  'cta.premium.description': 'Our premium plans offer advanced features for more complex financial needs.',
  'cta.premium.button': 'View Premium Plans',

  // Footer
  'footer.description': 'Smart budget management that helps you take control of your finances with powerful tools and insights.',
  'footer.product': 'Product',
  'footer.resources': 'Resources',
  'footer.company': 'Company',
  'footer.copyright': 'All rights reserved.',
  'footer.privacyPolicy': 'Privacy Policy',
  'footer.terms': 'Terms of Service',
  'footer.cookieSettings': 'Cookie Settings',
};

// Polish translations
export const pl: TranslationsType = {
  // Navbar
  'nav.features': 'Funkcje',
  'nav.testimonials': 'Opinie',
  'nav.pricing': 'Cennik',
  'nav.login': 'Zaloguj się',
  'nav.signup': 'Zarejestruj się za darmo',

  // Hero
  'hero.tagline': 'Inteligentne Zarządzanie Budżetem',
  'hero.title': 'Przejmij kontrolę nad swoimi finansami z łatwością',
  'hero.subtitle': 'Śledź swoje wydatki, importuj wyciągi z różnych źródeł i otrzymuj rekomendacje wspierane przez AI, które pomogą Ci więcej oszczędzać. Udostępniaj budżety znajomym i rodzinie dla lepszej współpracy finansowej.',
  'hero.getStarted': 'Zacznij za darmo',
  'hero.howItWorks': 'Zobacz jak to działa',
  'hero.dashboardCaption': 'Zrozum swoje nawyki wydawania na pierwszy rzut oka',
  'hero.exploreFeatures': 'Poznaj funkcje',

  // Features
  'features.title': 'Zaawansowane Funkcje',
  'features.subtitle': 'Wszystko, czego potrzebujesz do zarządzania swoimi finansami',
  'features.description': 'SPENDLESS łączy inteligentne śledzenie, potężne narzędzia importu i analizę AI, aby dać Ci pełną kontrolę nad swoim życiem finansowym.',
  'features.smartTracking.title': 'Inteligentne Śledzenie',
  'features.smartTracking.description': 'Uzyskaj wgląd w czasie rzeczywistym w swoje wzorce wydatków i śledź wydatki w wielu kategoriach i kontach.',
  'features.multiSourceImport.title': 'Import z Wielu Źródeł',
  'features.multiSourceImport.description': 'Łatwo importuj dane z plików PDF, CSV, arkuszy Excel lub połącz się bezpośrednio ze swoim bankiem.',
  'features.aiAnalysis.title': 'Analiza Wspierana przez AI',
  'features.aiAnalysis.description': 'Pozwól naszej zaawansowanej sztucznej inteligencji analizować Twoje finanse, identyfikować możliwości oszczędzania i dostarczać spersonalizowane rekomendacje.',
  'features.multipleBudgets.title': 'Wiele Budżetów',
  'features.multipleBudgets.description': 'Twórz oddzielne budżety dla różnych celów lub okresów i przechowuj całe swoje planowanie finansowe w jednym miejscu.',
  'features.budgetSharing.title': 'Udostępnianie Budżetu',
  'features.budgetSharing.description': 'Udostępniaj budżety rodzinie lub znajomym na wspólne wydatki, zarządzanie gospodarstwem domowym lub podróże.',
  'features.security.title': 'Bezpieczeństwo i Prywatność',
  'features.security.description': 'Twoje dane są zaszyfrowane i bezpieczne. Nigdy nie sprzedajemy Twoich informacji ani nie udostępniamy ich stronom trzecim.',
  'features.exploreAll': 'Odkryj wszystkie funkcje',

  // Downloads
  'downloads.title': 'Dostępne Wszędzie',
  'downloads.subtitle': 'Zabierz SPENDLESS ze sobą',
  'downloads.description': 'Uzyskaj dostęp do swoich finansów z dowolnego miejsca. Nasza aplikacja jest dostępna na wszystkich głównych platformach, dzięki czemu możesz śledzić swoje wydatki bez względu na to, z jakiego urządzenia korzystasz.',
  'downloads.mobileApps': 'Aplikacje Mobilne',
  'downloads.appStore': 'App Store',
  'downloads.googlePlay': 'Google Play',
  'downloads.desktopApps': 'Aplikacje Desktopowe',
  'downloads.macos': 'macOS',
  'downloads.windows': 'Windows',
  'downloads.linux': 'Linux',
  'downloads.systemRequirements': 'Wymagania Systemowe',
  'downloads.windowsReq': 'Windows 10 lub nowszy',
  'downloads.macosReq': 'macOS 11 (Big Sur) lub nowszy',
  'downloads.linuxReq': 'Ubuntu 20.04, Fedora 34 lub równoważne',
  'downloads.mobileReq': 'iOS 14+ lub Android 9.0+',
  'downloads.syncMessage': 'Wszystkie aplikacje automatycznie synchronizują się z Twoim kontem w chmurze. Twoje dane są zawsze aktualne na wszystkich urządzeniach.',

  // Testimonials
  'testimonials.title': 'Historie Użytkowników',
  'testimonials.subtitle': 'Uwielbiane przez Tysiące Użytkowników',
  'testimonials.description': 'Zobacz, co nasza społeczność mówi o tym, jak SPENDLESS pomógł im osiągnąć ich cele finansowe.',
  'testimonials.rating': 'średnia ocena od ponad 10 000 użytkowników',

  // CTA
  'cta.getStarted': 'Zacznij Już Dziś',
  'cta.title': 'Przejmij kontrolę nad swoją przyszłością finansową',
  'cta.description': 'Dołącz do tysięcy użytkowników, którzy przekształcili swoje relacje z pieniędzmi dzięki SPENDLESS.',
  'cta.freeTrialButton': 'Rozpocznij bezpłatny okres próbny',
  'cta.feature1': '14-dniowy pełnofunkcyjny okres próbny',
  'cta.feature2': 'Karta kredytowa nie jest wymagana na start',
  'cta.feature3': 'Importuj nieograniczoną liczbę transakcji',
  'cta.feature4': 'Spostrzeżenia i rekomendacje wspierane przez AI',
  'cta.feature5': 'Dostęp do wszystkich szablonów budżetu',
  'cta.newsletter.title': 'Bądź na bieżąco',
  'cta.newsletter.description': 'Zapisz się do naszego newslettera, aby otrzymywać najnowsze wskazówki, aktualizacje funkcji i informacje finansowe.',
  'cta.newsletter.placeholder': 'Twój adres email',
  'cta.newsletter.subscribe': 'Subskrybuj',
  'cta.newsletter.subscribed': 'Zapisano!',
  'cta.newsletter.privacy': 'Szanujemy Twoją prywatność i nigdy nie udostępnimy Twoich informacji.',
  'cta.premium.title': 'Gotowy na poważne planowanie finansowe?',
  'cta.premium.description': 'Nasze plany premium oferują zaawansowane funkcje dla bardziej złożonych potrzeb finansowych.',
  'cta.premium.button': 'Zobacz Plany Premium',

  // Footer
  'footer.description': 'Inteligentne zarządzanie budżetem, które pomaga przejąć kontrolę nad finansami dzięki potężnym narzędziom i spostrzeżeniom.',
  'footer.product': 'Produkt',
  'footer.resources': 'Zasoby',
  'footer.company': 'Firma',
  'footer.copyright': 'Wszelkie prawa zastrzeżone.',
  'footer.privacyPolicy': 'Polityka Prywatności',
  'footer.terms': 'Warunki Korzystania',
  'footer.cookieSettings': 'Ustawienia Plików Cookie',
};

// German translations
export const de: TranslationsType = {
  // Navbar
  'nav.features': 'Funktionen',
  'nav.testimonials': 'Kundenstimmen',
  'nav.pricing': 'Preise',
  'nav.login': 'Anmelden',
  'nav.signup': 'Kostenlos registrieren',

  // Hero
  'hero.tagline': 'Intelligentes Budgetmanagement',
  'hero.title': 'Übernehmen Sie mühelos die Kontrolle über Ihre Finanzen',
  'hero.subtitle': 'Verfolgen Sie Ihre Ausgaben, laden Sie Kontoauszüge aus verschiedenen Quellen hoch und erhalten Sie KI-gestützte Einblicke, die Ihnen beim Sparen helfen. Teilen Sie Budgets mit Freunden und Familie für eine bessere finanzielle Zusammenarbeit.',
  'hero.getStarted': 'Kostenlos starten',
  'hero.howItWorks': 'So funktioniert es',
  'hero.dashboardCaption': 'Verstehen Sie Ihre Ausgabegewohnheiten auf einen Blick',
  'hero.exploreFeatures': 'Funktionen erkunden',

  // Features
  'features.title': 'Leistungsstarke Funktionen',
  'features.subtitle': 'Alles, was Sie zur Verwaltung Ihrer Finanzen benötigen',
  'features.description': 'SPENDLESS kombiniert intelligentes Tracking, leistungsstarke Import-Tools und KI-Analyse, um Ihnen die vollständige Kontrolle über Ihr Finanzleben zu geben.',
  'features.smartTracking.title': 'Intelligentes Tracking',
  'features.smartTracking.description': 'Erhalten Sie Echtzeit-Einblicke in Ihre Ausgabemuster und verfolgen Sie Ausgaben über mehrere Kategorien und Konten hinweg.',
  'features.multiSourceImport.title': 'Multi-Quellen-Import',
  'features.multiSourceImport.description': 'Importieren Sie ganz einfach Daten aus PDFs, CSV-Dateien, Excel-Tabellen oder verbinden Sie sich direkt mit Ihren Bankkonten.',
  'features.aiAnalysis.title': 'KI-gestützte Analyse',
  'features.aiAnalysis.description': 'Lassen Sie unsere fortschrittliche KI Ihre Finanzen analysieren, Sparmöglichkeiten identifizieren und personalisierte Empfehlungen geben.',
  'features.multipleBudgets.title': 'Mehrere Budgets',
  'features.multipleBudgets.description': 'Erstellen Sie separate Budgets für verschiedene Ziele oder Zeiträume und behalten Sie Ihre gesamte Finanzplanung an einem Ort.',
  'features.budgetSharing.title': 'Budget-Sharing',
  'features.budgetSharing.description': 'Teilen Sie Budgets mit Familie oder Freunden für gemeinsame Ausgaben, Haushaltsführung oder Reisen.',
  'features.security.title': 'Sicherheit & Datenschutz',
  'features.security.description': 'Ihre Daten sind verschlüsselt und sicher. Wir verkaufen Ihre Informationen niemals oder teilen sie mit Dritten.',
  'features.exploreAll': 'Alle Funktionen erkunden',

  // Downloads
  'downloads.title': 'Überall verfügbar',
  'downloads.subtitle': 'Nehmen Sie SPENDLESS mit',
  'downloads.description': 'Greifen Sie von überall auf Ihre Finanzen zu. Unsere App ist auf allen wichtigen Plattformen verfügbar, damit Sie Ihre Ausgaben unabhängig vom verwendeten Gerät verfolgen können.',
  'downloads.mobileApps': 'Mobile Apps',
  'downloads.appStore': 'App Store',
  'downloads.googlePlay': 'Google Play',
  'downloads.desktopApps': 'Desktop-Apps',
  'downloads.macos': 'macOS',
  'downloads.windows': 'Windows',
  'downloads.linux': 'Linux',
  'downloads.systemRequirements': 'Systemanforderungen',
  'downloads.windowsReq': 'Windows 10 oder neuer',
  'downloads.macosReq': 'macOS 11 (Big Sur) oder neuer',
  'downloads.linuxReq': 'Ubuntu 20.04, Fedora 34 oder gleichwertig',
  'downloads.mobileReq': 'iOS 14+ oder Android 9.0+',
  'downloads.syncMessage': 'Alle Apps synchronisieren sich automatisch mit Ihrem Cloud-Konto. Ihre Daten sind auf allen Ihren Geräten immer auf dem neuesten Stand.',

  // Testimonials
  'testimonials.title': 'Nutzergeschichten',
  'testimonials.subtitle': 'Von Tausenden von Nutzern geliebt',
  'testimonials.description': 'Sehen Sie, was unsere Community darüber sagt, wie SPENDLESS ihnen geholfen hat, ihre finanziellen Ziele zu erreichen.',
  'testimonials.rating': 'durchschnittliche Bewertung von über 10.000 Nutzern',

  // CTA
  'cta.getStarted': 'Jetzt starten',
  'cta.title': 'Übernehmen Sie die Kontrolle über Ihre finanzielle Zukunft',
  'cta.description': 'Schließen Sie sich Tausenden von Nutzern an, die ihre Beziehung zum Geld mit SPENDLESS verändert haben.',
  'cta.freeTrialButton': 'Starten Sie Ihre kostenlose Testversion',
  'cta.feature1': '14-tägige Testversion mit vollem Funktionsumfang',
  'cta.feature2': 'Keine Kreditkarte erforderlich',
  'cta.feature3': 'Importieren Sie unbegrenzte Transaktionen',
  'cta.feature4': 'KI-gestützte Erkenntnisse und Empfehlungen',
  'cta.feature5': 'Zugang zu allen Budget-Vorlagen',
  'cta.newsletter.title': 'Bleiben Sie auf dem Laufenden',
  'cta.newsletter.description': 'Melden Sie sich für unseren Newsletter an, um die neuesten Tipps, Funktionsupdates und Finanzinformationen zu erhalten.',
  'cta.newsletter.placeholder': 'Ihre E-Mail-Adresse',
  'cta.newsletter.subscribe': 'Abonnieren',
  'cta.newsletter.subscribed': 'Abonniert!',
  'cta.newsletter.privacy': 'Wir respektieren Ihre Privatsphäre und werden Ihre Informationen niemals weitergeben.',
  'cta.premium.title': 'Bereit für eine ernsthafte Finanzplanung?',
  'cta.premium.description': 'Unsere Premium-Pläne bieten erweiterte Funktionen für komplexere finanzielle Bedürfnisse.',
  'cta.premium.button': 'Premium-Pläne anzeigen',

  // Footer
  'footer.description': 'Intelligentes Budgetmanagement, das Ihnen hilft, die Kontrolle über Ihre Finanzen mit leistungsstarken Tools und Einblicken zu übernehmen.',
  'footer.product': 'Produkt',
  'footer.resources': 'Ressourcen',
  'footer.company': 'Unternehmen',
  'footer.copyright': 'Alle Rechte vorbehalten.',
  'footer.privacyPolicy': 'Datenschutzrichtlinie',
  'footer.terms': 'Nutzungsbedingungen',
  'footer.cookieSettings': 'Cookie-Einstellungen',
};

// French translations
export const fr: TranslationsType = {
  // Navbar
  'nav.features': 'Fonctionnalités',
  'nav.testimonials': 'Témoignages',
  'nav.pricing': 'Tarifs',
  'nav.login': 'Connexion',
  'nav.signup': 'Inscription gratuite',

  // Hero
  'hero.tagline': 'Gestion intelligente du budget',
  'hero.title': 'Prenez le contrôle de vos finances en toute simplicité',
  'hero.subtitle': 'Suivez vos dépenses, importez des relevés de toute source et obtenez des analyses alimentées par l\'IA pour vous aider à économiser davantage. Partagez des budgets avec vos amis et votre famille pour une meilleure collaboration financière.',
  'hero.getStarted': 'Commencer gratuitement',
  'hero.howItWorks': 'Voir comment ça marche',
  'hero.dashboardCaption': 'Comprenez vos habitudes de dépenses en un coup d\'œil',
  'hero.exploreFeatures': 'Explorer les fonctionnalités',

  // Features
  'features.title': 'Fonctionnalités puissantes',
  'features.subtitle': 'Tout ce dont vous avez besoin pour gérer vos finances',
  'features.description': 'SPENDLESS combine le suivi intelligent, des outils d\'importation puissants et l\'analyse par IA pour vous donner un contrôle total sur votre vie financière.',
  'features.smartTracking.title': 'Suivi intelligent',
  'features.smartTracking.description': 'Obtenez des aperçus en temps réel de vos habitudes de dépenses et suivez les dépenses à travers plusieurs catégories et comptes.',
  'features.multiSourceImport.title': 'Importation multi-sources',
  'features.multiSourceImport.description': 'Importez facilement des données à partir de PDF, fichiers CSV, feuilles Excel ou connectez-vous directement à vos comptes bancaires.',
  'features.aiAnalysis.title': 'Analyse alimentée par l\'IA',
  'features.aiAnalysis.description': 'Laissez notre IA avancée analyser vos finances, identifier les opportunités d\'économies et fournir des recommandations personnalisées.',
  'features.multipleBudgets.title': 'Budgets multiples',
  'features.multipleBudgets.description': 'Créez des budgets séparés pour différents objectifs ou périodes et gardez toute votre planification financière en un seul endroit.',
  'features.budgetSharing.title': 'Partage de budget',
  'features.budgetSharing.description': 'Partagez des budgets avec votre famille ou vos amis pour les dépenses communes, la gestion du ménage ou les voyages.',
  'features.security.title': 'Sécurité et confidentialité',
  'features.security.description': 'Vos données sont cryptées et sécurisées. Nous ne vendons jamais vos informations et ne les partageons pas avec des tiers.',
  'features.exploreAll': 'Explorer toutes les fonctionnalités',

  // Downloads
  'downloads.title': 'Disponible partout',
  'downloads.subtitle': 'Emportez SPENDLESS avec vous',
  'downloads.description': 'Accédez à vos finances de n\'importe où. Notre application est disponible sur toutes les principales plateformes, vous pouvez donc suivre vos dépenses quel que soit l\'appareil que vous utilisez.',
  'downloads.mobileApps': 'Applications mobiles',
  'downloads.appStore': 'App Store',
  'downloads.googlePlay': 'Google Play',
  'downloads.desktopApps': 'Applications de bureau',
  'downloads.macos': 'macOS',
  'downloads.windows': 'Windows',
  'downloads.linux': 'Linux',
  'downloads.systemRequirements': 'Exigences système',
  'downloads.windowsReq': 'Windows 10 ou plus récent',
  'downloads.macosReq': 'macOS 11 (Big Sur) ou plus récent',
  'downloads.linuxReq': 'Ubuntu 20.04, Fedora 34 ou équivalent',
  'downloads.mobileReq': 'iOS 14+ ou Android 9.0+',
  'downloads.syncMessage': 'Toutes les applications se synchronisent automatiquement avec votre compte cloud. Vos données sont toujours à jour sur tous vos appareils.',

  // Testimonials
  'testimonials.title': 'Histoires d\'utilisateurs',
  'testimonials.subtitle': 'Aimé par des milliers d\'utilisateurs',
  'testimonials.description': 'Découvrez ce que notre communauté dit sur la façon dont SPENDLESS les a aidés à atteindre leurs objectifs financiers.',
  'testimonials.rating': 'note moyenne de plus de 10 000 utilisateurs',

  // CTA
  'cta.getStarted': 'Commencez aujourd\'hui',
  'cta.title': 'Prenez le contrôle de votre avenir financier',
  'cta.description': 'Rejoignez des milliers d\'utilisateurs qui ont transformé leur relation avec l\'argent grâce à SPENDLESS.',
  'cta.freeTrialButton': 'Commencez votre essai gratuit',
  'cta.feature1': 'Essai gratuit de 14 jours avec toutes les fonctionnalités',
  'cta.feature2': 'Aucune carte de crédit requise pour commencer',
  'cta.feature3': 'Importez des transactions illimitées',
  'cta.feature4': 'Informations et recommandations alimentées par l\'IA',
  'cta.feature5': 'Accès à tous les modèles de budget',
  'cta.newsletter.title': 'Restez informé',
  'cta.newsletter.description': 'Inscrivez-vous à notre newsletter pour recevoir les derniers conseils, mises à jour des fonctionnalités et informations financières.',
  'cta.newsletter.placeholder': 'Votre adresse e-mail',
  'cta.newsletter.subscribe': 'S\'abonner',
  'cta.newsletter.subscribed': 'Abonné !',
  'cta.newsletter.privacy': 'Nous respectons votre vie privée et ne partagerons jamais vos informations.',
  'cta.premium.title': 'Prêt pour une planification financière sérieuse ?',
  'cta.premium.description': 'Nos plans premium offrent des fonctionnalités avancées pour des besoins financiers plus complexes.',
  'cta.premium.button': 'Voir les plans Premium',

  // Footer
  'footer.description': 'Gestion intelligente du budget qui vous aide à prendre le contrôle de vos finances avec des outils et des informations puissants.',
  'footer.product': 'Produit',
  'footer.resources': 'Ressources',
  'footer.company': 'Entreprise',
  'footer.copyright': 'Tous droits réservés.',
  'footer.privacyPolicy': 'Politique de confidentialité',
  'footer.terms': 'Conditions d\'utilisation',
  'footer.cookieSettings': 'Paramètres des cookies',
};

// Spanish translations
export const es: TranslationsType = {
  // Navbar
  'nav.features': 'Características',
  'nav.testimonials': 'Testimonios',
  'nav.pricing': 'Precios',
  'nav.login': 'Iniciar sesión',
  'nav.signup': 'Registrarse gratis',

  // Hero
  'hero.tagline': 'Gestión Inteligente de Presupuesto',
  'hero.title': 'Tome el control de sus finanzas con facilidad',
  'hero.subtitle': 'Rastree sus gastos, cargue extractos de cualquier fuente y obtenga información impulsada por IA para ayudarle a ahorrar más. Comparta presupuestos con amigos y familiares para una mejor colaboración financiera.',
  'hero.getStarted': 'Comenzar gratis',
  'hero.howItWorks': 'Ver cómo funciona',
  'hero.dashboardCaption': 'Comprenda sus hábitos de gasto de un vistazo',
  'hero.exploreFeatures': 'Explorar características',

  // Features
  'features.title': 'Características Poderosas',
  'features.subtitle': 'Todo lo que necesita para gestionar sus finanzas',
  'features.description': 'SPENDLESS combina seguimiento inteligente, potentes herramientas de importación y análisis de IA para darle control total sobre su vida financiera.',
  'features.smartTracking.title': 'Seguimiento Inteligente',
  'features.smartTracking.description': 'Obtenga información en tiempo real sobre sus patrones de gasto y rastree gastos en múltiples categorías y cuentas.',
  'features.multiSourceImport.title': 'Importación de Múltiples Fuentes',
  'features.multiSourceImport.description': 'Importe fácilmente datos de PDFs, archivos CSV, hojas de Excel o conéctese directamente a sus cuentas bancarias.',
  'features.aiAnalysis.title': 'Análisis Impulsado por IA',
  'features.aiAnalysis.description': 'Deje que nuestra IA avanzada analice sus finanzas, identifique oportunidades de ahorro y proporcione recomendaciones personalizadas.',
  'features.multipleBudgets.title': 'Múltiples Presupuestos',
  'features.multipleBudgets.description': 'Cree presupuestos separados para diferentes objetivos o períodos y mantenga toda su planificación financiera en un solo lugar.',
  'features.budgetSharing.title': 'Compartir Presupuestos',
  'features.budgetSharing.description': 'Comparta presupuestos con familiares o amigos para gastos conjuntos, gestión del hogar o viajes.',
  'features.security.title': 'Seguridad y Privacidad',
  'features.security.description': 'Sus datos están encriptados y seguros. Nunca vendemos su información ni la compartimos con terceros.',
  'features.exploreAll': 'Explorar todas las características',

  // Downloads
  'downloads.title': 'Disponible en todas partes',
  'downloads.subtitle': 'Lleve SPENDLESS con usted',
  'downloads.description': 'Acceda a sus finanzas desde cualquier lugar. Nuestra aplicación está disponible en todas las principales plataformas, por lo que puede rastrear sus gastos sin importar qué dispositivo esté utilizando.',
  'downloads.mobileApps': 'Aplicaciones Móviles',
  'downloads.appStore': 'App Store',
  'downloads.googlePlay': 'Google Play',
  'downloads.desktopApps': 'Aplicaciones de Escritorio',
  'downloads.macos': 'macOS',
  'downloads.windows': 'Windows',
  'downloads.linux': 'Linux',
  'downloads.systemRequirements': 'Requisitos del Sistema',
  'downloads.windowsReq': 'Windows 10 o más reciente',
  'downloads.macosReq': 'macOS 11 (Big Sur) o más reciente',
  'downloads.linuxReq': 'Ubuntu 20.04, Fedora 34 o equivalente',
  'downloads.mobileReq': 'iOS 14+ o Android 9.0+',
  'downloads.syncMessage': 'Todas las aplicaciones se sincronizan automáticamente con su cuenta en la nube. Sus datos siempre están actualizados en todos sus dispositivos.',

  // Testimonials
  'testimonials.title': 'Historias de Usuarios',
  'testimonials.subtitle': 'Amado por Miles de Usuarios',
  'testimonials.description': 'Vea lo que nuestra comunidad dice sobre cómo SPENDLESS les ha ayudado a alcanzar sus objetivos financieros.',
  'testimonials.rating': 'calificación promedio de más de 10.000 usuarios',

  // CTA
  'cta.getStarted': 'Comience Hoy',
  'cta.title': 'Tome el control de su futuro financiero',
  'cta.description': 'Únase a miles de usuarios que han transformado su relación con el dinero usando SPENDLESS.',
  'cta.freeTrialButton': 'Comience su prueba gratuita',
  'cta.feature1': 'Prueba gratuita de 14 días con todas las funciones',
  'cta.feature2': 'No se requiere tarjeta de crédito para comenzar',
  'cta.feature3': 'Importe transacciones ilimitadas',
  'cta.feature4': 'Información y recomendaciones impulsadas por IA',
  'cta.feature5': 'Acceso a todas las plantillas de presupuesto',
  'cta.newsletter.title': 'Manténgase actualizado',
  'cta.newsletter.description': 'Suscríbase a nuestro boletín para recibir los últimos consejos, actualizaciones de funciones e información financiera.',
  'cta.newsletter.placeholder': 'Su dirección de correo electrónico',
  'cta.newsletter.subscribe': 'Suscribirse',
  'cta.newsletter.subscribed': '¡Suscrito!',
  'cta.newsletter.privacy': 'Respetamos su privacidad y nunca compartiremos su información.',
  'cta.premium.title': '¿Listo para una planificación financiera seria?',
  'cta.premium.description': 'Nuestros planes premium ofrecen características avanzadas para necesidades financieras más complejas.',
  'cta.premium.button': 'Ver Planes Premium',

  // Footer
  'footer.description': 'Gestión inteligente de presupuesto que le ayuda a tomar el control de sus finanzas con herramientas e información potentes.',
  'footer.product': 'Producto',
  'footer.resources': 'Recursos',
  'footer.company': 'Empresa',
  'footer.copyright': 'Todos los derechos reservados.',
  'footer.privacyPolicy': 'Política de Privacidad',
  'footer.terms': 'Términos de Servicio',
  'footer.cookieSettings': 'Configuración de Cookies',
};

// Ukrainian translations
export const uk: TranslationsType = {
  // Navbar
  'nav.features': 'Функції',
  'nav.testimonials': 'Відгуки',
  'nav.pricing': 'Ціни',
  'nav.login': 'Увійти',
  'nav.signup': 'Зареєструватися безкоштовно',

  // Hero
  'hero.tagline': 'Розумне управління бюджетом',
  'hero.title': 'Візьміть контроль над своїми фінансами з легкістю',
  'hero.subtitle': 'Відстежуйте свої витрати, завантажуйте виписки з будь-якого джерела та отримуйте аналітику на основі ШІ, щоб допомогти вам заощаджувати більше. Діліться бюджетами з друзями та родиною для кращої фінансової співпраці.',
  'hero.getStarted': 'Почати безкоштовно',
  'hero.howItWorks': 'Подивитися, як це працює',
  'hero.dashboardCaption': 'Зрозумійте свої звички витрат з першого погляду',
  'hero.exploreFeatures': 'Дослідити функції',

  // Features
  'features.title': 'Потужні функції',
  'features.subtitle': 'Все, що вам потрібно для управління фінансами',
  'features.description': 'SPENDLESS поєднує розумне відстеження, потужні інструменти імпорту та аналіз на основі ШІ, щоб надати вам повний контроль над вашим фінансовим життям.',
  'features.smartTracking.title': 'Розумне відстеження',
  'features.smartTracking.description': 'Отримуйте аналітику в реальному часі про ваші шаблони витрат та відстежуйте витрати за різними категоріями та рахунками.',
  'features.multiSourceImport.title': 'Імпорт з різних джерел',
  'features.multiSourceImport.description': 'Легко імпортуйте дані з PDF-файлів, CSV-файлів, Excel-таблиць або підключайтеся безпосередньо до ваших банківських рахунків.',
  'features.aiAnalysis.title': 'Аналіз на основі ШІ',
  'features.aiAnalysis.description': 'Дозвольте нашому передовому ШІ аналізувати ваші фінанси, виявляти можливості заощадження та надавати персоналізовані рекомендації.',
  'features.multipleBudgets.title': 'Кілька бюджетів',
  'features.multipleBudgets.description': 'Створюйте окремі бюджети для різних цілей або періодів часу та зберігайте все ваше фінансове планування в одному місці.',
  'features.budgetSharing.title': 'Спільне використання бюджету',
  'features.budgetSharing.description': 'Діліться бюджетами з сім\'єю або друзями для спільних витрат, ведення домашнього господарства або подорожей.',
  'features.security.title': 'Безпека та конфіденційність',
  'features.security.description': 'Ваші дані зашифровані та захищені. Ми ніколи не продаємо вашу інформацію і не ділимося нею з третіми сторонами.',
  'features.exploreAll': 'Дослідити всі функції',

  // Downloads
  'downloads.title': 'Доступно всюди',
  'downloads.subtitle': 'Візьміть SPENDLESS з собою',
  'downloads.description': 'Отримуйте доступ до своїх фінансів звідусіль. Наш додаток доступний на всіх основних платформах, тому ви можете відстежувати свої витрати незалежно від того, який пристрій використовуєте.',
  'downloads.mobileApps': 'Мобільні додатки',
  'downloads.appStore': 'App Store',
  'downloads.googlePlay': 'Google Play',
  'downloads.desktopApps': 'Комп\'ютерні додатки',
  'downloads.macos': 'macOS',
  'downloads.windows': 'Windows',
  'downloads.linux': 'Linux',
  'downloads.systemRequirements': 'Системні вимоги',
  'downloads.windowsReq': 'Windows 10 або новіше',
  'downloads.macosReq': 'macOS 11 (Big Sur) або новіше',
  'downloads.linuxReq': 'Ubuntu 20.04, Fedora 34 або еквівалент',
  'downloads.mobileReq': 'iOS 14+ або Android 9.0+',
  'downloads.syncMessage': 'Усі додатки автоматично синхронізуються з вашим хмарним обліковим записом. Ваші дані завжди актуальні на всіх ваших пристроях.',

  // Testimonials
  'testimonials.title': 'Історії користувачів',
  'testimonials.subtitle': 'Улюблений тисячами користувачів',
  'testimonials.description': 'Подивіться, що говорить наша спільнота про те, як SPENDLESS допоміг їм досягти фінансових цілей.',
  'testimonials.rating': 'середня оцінка від понад 10 000 користувачів',

  // CTA
  'cta.getStarted': 'Почніть сьогодні',
  'cta.title': 'Візьміть контроль над своїм фінансовим майбутнім',
  'cta.description': 'Приєднуйтесь до тисяч користувачів, які змінили своє ставлення до грошей за допомогою SPENDLESS.',
  'cta.freeTrialButton': 'Почніть безкоштовну пробну версію',
  'cta.feature1': 'Безкоштовна 14-денна повнофункціональна пробна версія',
  'cta.feature2': 'Кредитна картка не потрібна для початку',
  'cta.feature3': 'Імпортуйте необмежену кількість транзакцій',
  'cta.feature4': 'Аналітика та рекомендації на основі ШІ',
  'cta.feature5': 'Доступ до всіх шаблонів бюджету',
  'cta.newsletter.title': 'Будьте в курсі',
  'cta.newsletter.description': 'Підпишіться на наш інформаційний бюлетень, щоб отримувати останні поради, оновлення функцій та фінансову інформацію.',
  'cta.newsletter.placeholder': 'Ваша електронна адреса',
  'cta.newsletter.subscribe': 'Підписатися',
  'cta.newsletter.subscribed': 'Підписано!',
  'cta.newsletter.privacy': 'Ми поважаємо вашу конфіденційність і ніколи не поширюємо вашу інформацію.',
  'cta.premium.title': 'Готові до серйозного фінансового планування?',
  'cta.premium.description': 'Наші преміум-плани пропонують розширені функції для більш складних фінансових потреб.',
  'cta.premium.button': 'Переглянути преміум-плани',

  // Footer
  'footer.description': 'Розумне управління бюджетом, яке допомагає вам взяти контроль над своїми фінансами за допомогою потужних інструментів та аналітики.',
  'footer.product': 'Продукт',
  'footer.resources': 'Ресурси',
  'footer.company': 'Компанія',
  'footer.copyright': 'Усі права захищено.',
  'footer.privacyPolicy': 'Політика конфіденційності',
  'footer.terms': 'Умови використання',
  'footer.cookieSettings': 'Налаштування файлів cookie',
};

// Export all translations in a single object
export const translations = {
  en,
  pl,
  de,
  fr,
  es,
  uk
};
