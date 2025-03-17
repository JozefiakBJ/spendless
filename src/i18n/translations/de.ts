import { LanguageTranslations } from '../types';

const deTranslations: LanguageTranslations = {
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
  premiumPlans: {
    title: 'Premium-Pläne',
    subtitle: 'Wählen Sie den perfekten Plan, um Ihr Finanzmanagement auf die nächste Stufe zu heben',
    monthly: 'Monatlich',
    yearly: 'Jährlich',
    discount: '(20% sparen)',
    perMonth: 'Monat',
    perYear: 'Jahr',
    included: 'Enthaltene Leistungen:',
    notIncluded: 'Nicht enthalten:',
    getButton: 'Erhalten',
    basic: {
      name: 'Basic',
      description: 'Perfekt für Privatpersonen, die ihre finanzielle Reise beginnen',
      features: {
        f1: 'Import von bis zu 500 Transaktionen monatlich',
        f2: 'Grundlegende Ausgabenkategorisierung',
        f3: 'Monatliche Ausgabenberichte',
        f4: 'Datenexport nach CSV',
        f5: 'E-Mail-Support',
      },
      notIncluded: {
        f1: 'KI-gestützte Erkenntnisse',
        f2: 'Erstellung mehrerer Budgets',
        f3: 'Budget-Sharing-Funktionen',
        f4: 'Benutzerdefinierte Ausgabenkategorien',
      }
    },
    plus: {
      name: 'Plus',
      description: 'Erweiterte Funktionen für ein ernsthaftes Budgetmanagement',
      features: {
        f1: 'Import von unbegrenzten Transaktionen',
        f2: 'Erweiterte Ausgabenkategorisierung',
        f3: 'Wöchentliche Ausgabenanalysen',
        f4: 'KI-gestützte Sparempfehlungen',
        f5: 'Erstellung von bis zu 5 separaten Budgets',
        f6: 'Datenexport in mehrere Formate',
        f7: 'Prioritäts-Support',
      },
      notIncluded: {
        f1: 'Budget-Sharing-Funktionen',
        f2: 'Benutzerdefinierte Ausgabenkategorien',
      }
    },
    premium: {
      name: 'Premium',
      description: 'Komplettes Finanzmanagement für Ihre gesamte Familie',
      features: {
        f1: 'Import von unbegrenzten Transaktionen',
        f2: 'Erweiterte Ausgabenkategorisierung',
        f3: 'Tägliche Ausgabenanalysen',
        f4: 'KI-gestützte Finanzanalyse',
        f5: 'Erstellung unbegrenzter Budgets',
        f6: 'Budget-Sharing mit bis zu 5 Personen',
        f7: 'Benutzerdefinierte Ausgabenkategorien',
        f8: 'Export in alle Formate',
        f9: 'Premium-Kundenbetreuung',
      }
    }
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
    backToHome: 'Zurück zur Startseite',
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
  roadmap: {
    title: 'Unsere Produkt-Roadmap',
    subtitle: 'Entdecken Sie unsere Reise und sehen Sie, welche spannenden Funktionen wir als nächstes entwickeln. Wir verbessern SPENDLESS kontinuierlich basierend auf Ihrem Feedback.',
    filterAll: 'Alle',
    filterPlanned: 'Geplant',
    filterInProgress: 'In Bearbeitung',
    filterCompleted: 'Abgeschlossen',
    statusPlanned: 'Geplant',
    statusInProgress: 'In Bearbeitung',
    statusCompleted: 'Abgeschlossen',
    q1: 'Q1',
    q2: 'Q2',
    q3: 'Q3',
    q4: 'Q4'
  },
  terms: {
    title: 'Nutzungsbedingungen',
    lastUpdated: 'Zuletzt aktualisiert:',
    intro: 'Bitte lesen Sie diese Nutzungsbedingungen ("Bedingungen") sorgfältig durch, bevor Sie die SPENDLESS-Anwendung nutzen. Diese Bedingungen stellen eine rechtlich bindende Vereinbarung zwischen Ihnen und SPENDLESS dar.',
    acceptanceTitle: 'Akzeptanz der Bedingungen',
    acceptanceText: 'Durch den Zugriff auf oder die Nutzung von SPENDLESS erklären Sie sich mit diesen Bedingungen einverstanden. Wenn Sie mit einem Teil der Bedingungen nicht einverstanden sind, dürfen Sie nicht auf den Dienst zugreifen.',
    serviceTitle: 'Beschreibung des Dienstes',
    serviceText: 'SPENDLESS ist eine Budgetverwaltungsanwendung, die Benutzern ermöglicht, Ausgaben zu verfolgen, Finanzdaten aus verschiedenen Quellen zu importieren und KI-gestützte Einblicke zu erhalten, um Finanzen effektiver zu verwalten.',
    accountsTitle: 'Benutzerkonten',
    accountsText: 'Wenn Sie bei uns ein Konto erstellen, müssen Sie genaue und vollständige Informationen angeben. Sie sind für den Schutz des Passworts und für alle Aktivitäten verantwortlich, die unter Ihrem Konto stattfinden.',
    contentTitle: 'Benutzerinhalte',
    contentText: 'Sie behalten alle Rechte an den Finanzdaten und anderen Inhalten, die Sie in SPENDLESS hochladen. Durch das Hochladen von Inhalten gewähren Sie uns die Lizenz, diese Inhalte zum Zweck der Bereitstellung unserer Dienste zu nutzen, zu speichern und zu verarbeiten.',
    prohibitedTitle: 'Verbotene Nutzungen',
    prohibitedText: 'Sie stimmen zu, nicht:',
    prohibitedItems: [
      'Den Dienst für illegale Zwecke zu nutzen',
      'Gesetze in Ihrer Rechtsprechung zu verletzen',
      'Zu versuchen, unbefugten Zugriff auf irgendeinen Teil des Dienstes zu erlangen',
      'Den Dienst zu stören oder zu unterbrechen',
      'Ihren Zugang zum Dienst zu verkaufen, zu handeln oder weiterzuverkaufen'
    ],
    terminationTitle: 'Kündigung',
    terminationText: 'Wir können Ihr Konto und den Zugang zum Dienst sofort kündigen oder aussetzen, ohne vorherige Mitteilung oder Haftung, aus irgendeinem Grund, einschließlich ohne Einschränkung, wenn Sie gegen die Bedingungen verstoßen.',
    liabilityTitle: 'Haftungsbeschränkung',
    liabilityText: 'In keinem Fall haften SPENDLESS, seine Direktoren, Mitarbeiter, Partner, Agenten, Lieferanten oder verbundenen Unternehmen für indirekte, zufällige, besondere, Folge- oder Strafschäden, einschließlich ohne Einschränkung Verlust von Gewinnen, Daten, Nutzung, Goodwill oder andere immaterielle Verluste.',
    changesTitle: 'Änderungen der Bedingungen',
    changesText: 'Wir behalten uns das Recht vor, diese Bedingungen jederzeit zu ändern oder zu ersetzen. Es liegt in Ihrer Verantwortung, diese Bedingungen regelmäßig auf Änderungen zu überprüfen.',
    contactTitle: 'Kontaktiere uns',
    contactText: 'Wenn Sie Fragen zu diesen Bedingungen haben, kontaktieren Sie uns bitte unter terms@spendless.com.'
  },
  privacy: {
    title: 'Datenschutzrichtlinie',
    lastUpdated: 'Zuletzt aktualisiert:',
    intro: 'Diese Datenschutzrichtlinie beschreibt, wie SPENDLESS Ihre persönlichen Daten sammelt, verwendet und teilt, wenn Sie unsere Budgetverwaltungsanwendung nutzen.',
    collectTitle: 'Informationen, die wir sammeln',
    collectText: 'Wir sammeln verschiedene Arten von Informationen, um unsere Dienste bereitzustellen und zu verbessern, einschließlich:',
    collectItems: [
      'Kontaktinformationen wie Name, E-Mail-Adresse und Telefonnummer',
      'Kontoinformationen wie Benutzername und Passwort',
      'Finanzinformationen wie Transaktionen, Kontostände und Ausgabenkategorien',
      'Nutzungsdaten wie Protokolle von Interaktionen mit der Anwendung, Klicks und Analysen',
      'Geräteinformationen wie IP-Adresse, Browser-Typ und Betriebssystem'
    ],
    useTitle: 'Wie wir Ihre Informationen verwenden',
    useText: 'Wir verwenden die gesammelten Informationen, um:',
    useItems: [
      'Unsere Dienste bereitzustellen, zu warten und zu verbessern',
      'Ihre Erfahrung in der Anwendung zu personalisieren',
      'Transaktionen zu verarbeiten und Ihr Konto zu verwalten',
      'Mit Ihnen über Updates, Support und Werbeaktionen zu kommunizieren',
      'Die Nutzung zu analysieren, um unser Produkt und unsere Dienstleistungen zu verbessern',
      'Betrügerische Aktivitäten zu verhindern und die Sicherheit zu gewährleisten'
    ],
    securityTitle: 'Datensicherheit',
    securityText: 'Wir implementieren angemessene technische und organisatorische Maßnahmen, um Ihre persönlichen Daten vor versehentlichem Verlust, unbefugtem Zugriff, Offenlegung und anderen Formen der unrechtmäßigen Verarbeitung zu schützen.',
    retentionTitle: 'Datenaufbewahrung',
    retentionText: 'Wir speichern Ihre persönlichen Daten nur so lange, wie es für die Zwecke, für die sie erhoben wurden, erforderlich ist, einschließlich der Einhaltung gesetzlicher, buchhalterischer oder Berichtspflichten.',
    rightsTitle: 'Ihre Rechte',
    rightsText: 'Je nach Ihrem Standort haben Sie möglicherweise Rechte in Bezug auf Ihre persönlichen Daten, darunter:',
    rightsItems: [
      'Zugriff auf die persönlichen Daten, die wir über Sie haben',
      'Korrektur ungenauer Daten',
      'Beantragung der Löschung Ihrer Daten',
      'Einschränkung oder Widerspruch gegen die Verarbeitung Ihrer Daten',
      'Anforderung der Übertragung Ihrer Daten an einen anderen Anbieter',
      'Einreichung einer Beschwerde bei einer Aufsichtsbehörde'
    ],
    changesTitle: 'Änderungen an dieser Richtlinie',
    changesText: 'Wir können unsere Datenschutzrichtlinie von Zeit zu Zeit aktualisieren. Wir werden Sie über Änderungen informieren, indem wir die neue Datenschutzrichtlinie auf dieser Seite veröffentlichen und das Datum der "letzten Aktualisierung" ändern.',
    contactTitle: 'Kontaktieren Sie uns',
    contactText: 'Wenn Sie Fragen zu dieser Datenschutzrichtlinie haben, kontaktieren Sie uns bitte unter privacy@spendless.com.'
  },
  faq: {
    title: 'Häufig gestellte Fragen',
    stillHaveQuestions: 'Noch Fragen?',
    supportTeam: 'Unser Support-Team steht Ihnen zur Verfügung',
    contactSupport: 'Support kontaktieren',
    questions: {
      q1: {
        question: "Was ist SPENDLESS?",
        answer: "SPENDLESS ist eine App zur Verwaltung persönlicher Finanzen, die Ihnen hilft, Ausgaben zu verfolgen, Budgets zu erstellen und Ihre finanziellen Gewohnheiten zu optimieren. Unser Ziel ist es, die Verwaltung Ihrer Finanzen einfach und stressfrei zu gestalten."
      },
      q2: {
        question: "Wie viel kostet SPENDLESS?",
        answer: "SPENDLESS bietet sowohl kostenlose als auch Premium-Pläne an. Der kostenlose Plan umfasst grundlegende Funktionen zur Ausgabenverfolgung und Budgetierung. Unsere Premium-Pläne beginnen bei 5,99 €/Monat und beinhalten erweiterte Funktionen wie benutzerdefinierte Kategorien, Investitionsverfolgung und Finanzeinblicke."
      },
      q3: {
        question: "Sind meine Finanzdaten bei SPENDLESS sicher?",
        answer: "Ja, Ihre Sicherheit hat für uns höchste Priorität. Wir verwenden Bankniveau-Verschlüsselung zum Schutz Ihrer Daten. Wir speichern niemals Ihre Bankzugangsdaten, und alle Verbindungen zu Finanzinstituten werden mit 256-Bit-Verschlüsselung gesichert. Darüber hinaus führen wir regelmäßige Sicherheitsaudits durch, um die Sicherheit Ihrer Daten zu gewährleisten."
      },
      q4: {
        question: "Kann ich meine Bankkonten mit SPENDLESS verbinden?",
        answer: "Ja, SPENDLESS kann sich sicher mit über 10.000 Finanzinstituten weltweit verbinden. Dies ermöglicht den automatischen Import von Transaktionen und Salden, was es einfacher macht, Ihre Finanzdaten aktuell zu halten."
      },
      q5: {
        question: "Wie kündige ich mein Abonnement?",
        answer: "Sie können Ihr Abonnement jederzeit in Ihren Kontoeinstellungen kündigen. Nach der Kündigung haben Sie weiterhin Zugriff auf Premium-Funktionen bis zum Ende Ihres aktuellen Abrechnungszeitraums, danach wird Ihr Konto auf den kostenlosen Plan zurückgesetzt."
      },
      q6: {
        question: "Funktioniert SPENDLESS auf allen Geräten?",
        answer: "Ja, SPENDLESS ist für iOS, Android und als Web-Anwendung verfügbar. Ihre Daten synchronisieren sich automatisch auf all Ihren Geräten, sodass Sie von überall und jederzeit auf Ihre Finanzinformationen zugreifen können."
      },
      q7: {
        question: "Kann ich meine Daten aus SPENDLESS exportieren?",
        answer: "Ja, Sie können Ihre Finanzdaten jederzeit in verschiedenen Formaten, einschließlich CSV, Excel und PDF, exportieren. Dies erleichtert die Verwendung Ihrer Daten für Steuerzwecke oder Finanzplanung außerhalb der App."
      },
      q8: {
        question: "Wie hilft mir SPENDLESS beim Geldsparen?",
        answer: "SPENDLESS hilft Ihnen, Geld zu sparen, indem es Ihnen klare Einblicke in Ihre Ausgabengewohnheiten gibt, Sie vor ungewöhnlichen Ausgaben warnt, Abonnements identifiziert, die Sie möglicherweise nicht nutzen, und personalisierte Empfehlungen zur Optimierung Ihres Budgets basierend auf Ihren finanziellen Mustern liefert."
      },
      q9: {
        question: "Gibt es ein Limit für die Anzahl der Konten, die ich hinzufügen kann?",
        answer: "Kostenlose Nutzer können bis zu 3 Finanzkonten verbinden. Premium-Nutzer können unbegrenzt Konten verbinden, einschließlich Bankkonten, Kreditkarten, Darlehen, Investitionen und mehr."
      },
      q10: {
        question: "Bieten Sie Kundensupport an?",
        answer: "Ja, wir bieten Kundensupport per E-Mail und Chat für alle Nutzer an. Premium-Abonnenten erhalten zudem priorisierten Support mit schnelleren Antwortzeiten."
      }
    }
  }
};

export default deTranslations;
