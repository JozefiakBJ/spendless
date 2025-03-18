import { LanguageTranslations } from '../types';

const frTranslations: LanguageTranslations = {
  nav: {
    features: 'Fonctionnalités',
    testimonials: 'Témoignages',
    pricing: 'Tarifs',
    login: 'Connexion',
    signup: 'Inscription gratuite',
    contact: 'Contact',
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
  premiumPlans: {
    title: 'Plans Premium',
    subtitle: 'Choisissez le plan parfait pour faire passer votre gestion financière au niveau supérieur',
    monthly: 'Mensuel',
    yearly: 'Annuel',
    discount: '(Économisez 20%)',
    perMonth: 'mois',
    perYear: 'an',
    included: 'Ce qui est inclus:',
    notIncluded: 'Non inclus:',
    getButton: 'Obtenir',
    basic: {
      name: 'Basique',
      description: 'Parfait pour les personnes qui débutent leur parcours financier',
      features: {
        f1: 'Importation jusqu\'à 500 transactions par mois',
        f2: 'Catégorisation basique des dépenses',
        f3: 'Rapports mensuels des dépenses',
        f4: 'Exportation des données en CSV',
        f5: 'Support par e-mail',
      },
      notIncluded: {
        f1: 'Analyses alimentées par l\'IA',
        f2: 'Création de budgets multiples',
        f3: 'Capacités de partage de budget',
        f4: 'Catégories de dépenses personnalisées',
      }
    },
    plus: {
      name: 'Plus',
      description: 'Fonctionnalités améliorées pour une gestion sérieuse du budget',
      features: {
        f1: 'Importation de transactions illimitées',
        f2: 'Catégorisation avancée des dépenses',
        f3: 'Analyses hebdomadaires des dépenses',
        f4: 'Recommandations d\'économies alimentées par l\'IA',
        f5: 'Création jusqu\'à 5 budgets séparés',
        f6: 'Exportation des données dans plusieurs formats',
        f7: 'Support prioritaire',
      },
      notIncluded: {
        f1: 'Capacités de partage de budget',
        f2: 'Catégories de dépenses personnalisées',
      }
    },
    premium: {
      name: 'Premium',
      description: 'Gestion financière complète pour toute votre famille',
      features: {
        f1: 'Importation de transactions illimitées',
        f2: 'Catégorisation avancée des dépenses',
        f3: 'Analyses quotidiennes des dépenses',
        f4: 'Analyse financière alimentée par l\'IA',
        f5: 'Création de budgets illimités',
        f6: 'Partage de budget avec jusqu\'à 5 personnes',
        f7: 'Catégories de dépenses personnalisées',
        f8: 'Exportation dans tous les formats',
        f9: 'Support dédié premium',
      }
    }
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
    backToHome: 'Retour à l\'accueil',
  },
  cookies: {
    bannerTitle: 'Avis sur les Cookies',
    bannerText: 'Nous utilisons des cookies pour améliorer votre expérience de navigation, diffuser des annonces ou du contenu personnalisés et analyser notre trafic. En cliquant sur "Tout accepter", vous consentez à l\'utilisation de nos cookies.',
    customize: 'Personnaliser',
    acceptAll: 'Tout accepter',
    settingsTitle: 'Paramètres des Cookies',
    settingsDescription: 'Gérez vos préférences en matière de cookies. Les cookies nécessaires sont toujours activés car ils sont essentiels au bon fonctionnement du site.',
    necessaryTitle: 'Nécessaires',
    required: 'Obligatoires',
    necessaryDescription: 'Ces cookies sont essentiels au bon fonctionnement du site et ne peuvent pas être désactivés.',
    functionalTitle: 'Fonctionnels',
    functionalDescription: 'Ces cookies permettent au site de fournir une fonctionnalité et une personnalisation améliorées.',
    analyticsTitle: 'Analytiques',
    analyticsDescription: 'Ces cookies nous aident à comprendre comment les visiteurs interagissent avec le site, nous aidant à améliorer nos services.',
    marketingTitle: 'Marketing',
    marketingDescription: 'Ces cookies sont utilisés pour suivre les visiteurs sur les sites web afin d\'afficher des publicités pertinentes.',
    cancel: 'Annuler',
    savePreferences: 'Enregistrer les préférences',
  },
  roadmap: {
    title: 'Notre Feuille de Route',
    subtitle: 'Explorez notre parcours et découvrez les nouvelles fonctionnalités passionnantes que nous développons. Nous améliorons continuellement SPENDLESS en fonction de vos retours.',
    filterAll: 'Tous',
    filterPlanned: 'Planifié',
    filterInProgress: 'En cours',
    filterCompleted: 'Terminé',
    statusPlanned: 'Planifié',
    statusInProgress: 'En cours',
    statusCompleted: 'Terminé',
    q1: 'T1',
    q2: 'T2',
    q3: 'T3',
    q4: 'T4',
    item1: {
      title: 'Lancement MVP de SPENDLESS',
      description: 'Version initiale avec des fonctionnalités de base de suivi des dépenses et de gestion budgétaire.'
    },
    item2: {
      title: 'Support Multi-Plateformes',
      description: 'Lancement d\'applications mobiles pour iOS et Android, ainsi que d\'applications de bureau.'
    },
    item3: {
      title: 'Analyses Alimentées par l\'IA',
      description: 'Analyses intelligentes et recommandations personnalisées pour aider les utilisateurs à économiser davantage.'
    },
    item4: {
      title: 'Intégration Bancaire',
      description: 'Connexion directe avec plus de 10 000 banques dans le monde pour un suivi automatisé des dépenses.'
    },
    item5: {
      title: 'Partage de Budget et Collaboration',
      description: 'Partagez des budgets avec les membres de votre famille et collaborez sur des objectifs financiers.'
    },
    item6: {
      title: 'Suivi des Investissements',
      description: 'Suivez vos investissements et intégrez-les avec des comptes de courtage.'
    },
    item7: {
      title: 'Outils de Préparation Fiscale',
      description: 'Simplifiez la saison fiscale avec la catégorisation des dépenses et les fonctionnalités de reporting.'
    },
    item8: {
      title: 'Planification d\'Objectifs Financiers',
      description: 'Définissez des objectifs financiers à long terme avec suivi des progrès et recommandations intelligentes.'
    }
  },
  terms: {
    title: 'Conditions d\'utilisation',
    lastUpdated: 'Dernière mise à jour:',
    intro: 'Veuillez lire attentivement ces Conditions d\'utilisation ("Conditions") avant d\'utiliser l\'application SPENDLESS. Ces Conditions constituent un accord juridiquement contraignant entre vous et SPENDLESS.',
    acceptanceTitle: 'Acceptation des Conditions',
    acceptanceText: 'En accédant à ou en utilisant SPENDLESS, vous acceptez d\'être lié par ces Conditions. Si vous n\'êtes pas d\'accord avec une partie des Conditions, vous ne pouvez pas accéder au service.',
    serviceTitle: 'Description du Service',
    serviceText: 'SPENDLESS est une application de gestion budgétaire qui permet aux utilisateurs de suivre les dépenses, d\'importer des données financières de diverses sources et de recevoir des insights alimentés par l\'IA pour aider à gérer les finances plus efficacement.',
    accountsTitle: 'Comptes Utilisateurs',
    accountsText: 'Lorsque vous créez un compte chez nous, vous devez fournir des informations précises et complètes. Vous êtes responsable de la protection du mot de passe et de toutes les activités qui se produisent sous votre compte.',
    contentTitle: 'Contenu Utilisateur',
    contentText: 'Vous conservez tous les droits sur les données financières et autres contenus que vous téléchargez sur SPENDLESS. En téléchargeant du contenu, vous nous accordez une licence pour utiliser, stocker et traiter ce contenu dans le but de vous fournir nos services.',
    prohibitedTitle: 'Utilisations Interdites',
    prohibitedText: 'Vous acceptez de ne pas:',
    prohibitedItems: [
      'Utiliser le service à des fins illégales',
      'Violer les lois de votre juridiction',
      'Tenter d\'obtenir un accès non autorisé à une partie du service',
      'Interférer avec ou perturber le service',
      'Vendre, échanger ou revendre votre accès au service'
    ],
    terminationTitle: 'Résiliation',
    terminationText: 'Nous pouvons résilier ou suspendre votre compte et l\'accès au service immédiatement, sans préavis ni responsabilité, pour quelque raison que ce soit, y compris sans limitation si vous violez les Conditions.',
    liabilityTitle: 'Limitation de Responsabilité',
    liabilityText: 'En aucun cas, SPENDLESS, ses directeurs, employés, partenaires, agents, fournisseurs ou affiliés ne seront responsables de tout dommage indirect, accessoire, spécial, consécutif ou punitif, y compris sans limitation, perte de profits, de données, d\'utilisation, de goodwill ou autres pertes intangibles.',
    changesTitle: 'Modifications des Conditions',
    changesText: 'Nous nous réservons le droit de modifier ou de remplacer ces Conditions à tout moment. Il est de votre responsabilité de vérifier périodiquement ces Conditions pour les changements.',
    contactTitle: 'Contactez-nous',
    contactText: 'Si vous avez des questions sur ces Conditions, veuillez nous contacter à terms@spendless.com.'
  },
  privacy: {
    title: 'Politique de Confidentialité',
    lastUpdated: 'Dernière mise à jour:',
    intro: 'Cette Politique de Confidentialité décrit comment SPENDLESS collecte, utilise et partage vos informations personnelles lorsque vous utilisez notre application de gestion budgétaire.',
    collectTitle: 'Informations que nous collectons',
    collectText: 'Nous collectons différents types d\'informations pour fournir et améliorer nos services, notamment:',
    collectItems: [
      'Informations de contact comme le nom, l\'adresse e-mail et le numéro de téléphone',
      'Informations de compte comme le nom d\'utilisateur et le mot de passe',
      'Informations financières comme les transactions, les soldes et les catégories de dépenses',
      'Données d\'utilisation comme les journaux d\'interactions avec l\'application, les clics et les analyses',
      'Informations sur l\'appareil comme l\'adresse IP, le type de navigateur et le système d\'exploitation'
    ],
    useTitle: 'Comment nous utilisons vos informations',
    useText: 'Nous utilisons les informations collectées pour:',
    useItems: [
      'Fournir, maintenir et améliorer nos services',
      'Personnaliser votre expérience dans l\'application',
      'Traiter les transactions et gérer votre compte',
      'Communiquer avec vous au sujet des mises à jour, du support et des promotions',
      'Analyser l\'utilisation pour améliorer notre produit et nos services',
      'Prévenir les activités frauduleuses et assurer la sécurité'
    ],
    securityTitle: 'Sécurité des données',
    securityText: 'Nous mettons en œuvre des mesures techniques et organisationnelles appropriées pour protéger vos données personnelles contre la perte accidentelle, l\'accès non autorisé, la divulgation et d\'autres formes de traitement illégal.',
    retentionTitle: 'Conservation des données',
    retentionText: 'Nous conservons vos données personnelles uniquement aussi longtemps que nécessaire pour atteindre les objectifs pour lesquels elles ont été collectées, y compris pour satisfaire aux exigences légales, comptables ou de rapport.',
    rightsTitle: 'Vos droits',
    rightsText: 'Selon votre emplacement, vous pouvez avoir des droits concernant vos données personnelles, notamment:',
    rightsItems: [
      'Accéder aux données personnelles que nous détenons à votre sujet',
      'Corriger les données inexactes',
      'Demander la suppression de vos données',
      'Restreindre ou vous opposer au traitement de vos données',
      'Demander le transfert de vos données à un autre fournisseur',
      'Déposer une plainte auprès d\'une autorité de contrôle'
    ],
    changesTitle: 'Modifications de cette politique',
    changesText: 'Nous pouvons mettre à jour notre Politique de Confidentialité de temps en temps. Nous vous informerons de tout changement en publiant la nouvelle Politique de Confidentialité sur cette page et en mettant à jour la date de "dernière mise à jour".',
    contactTitle: 'Contactez-nous',
    contactText: 'Si vous avez des questions concernant cette Politique de Confidentialité, veuillez nous contacter à privacy@spendless.com.'
  },
  faq: {
    title: 'Questions Fréquemment Posées',
    stillHaveQuestions: 'Vous avez encore des questions ?',
    supportTeam: 'Notre équipe de support est là pour vous aider',
    contactSupport: 'Contacter le support',
    questions: {
      q1: {
        question: "Qu'est-ce que SPENDLESS ?",
        answer: "SPENDLESS est une application de gestion des finances personnelles qui vous aide à suivre vos dépenses, à créer des budgets et à optimiser vos habitudes financières. Notre objectif est de rendre la gestion de vos finances simple et sans stress."
      },
      q2: {
        question: "Combien coûte SPENDLESS ?",
        answer: "SPENDLESS propose des formules gratuites et premium. La formule gratuite comprend des fonctionnalités de base de suivi des dépenses et de budgétisation. Nos formules premium commencent à 5,99 €/mois et incluent des fonctionnalités avancées comme des catégories personnalisées, le suivi des investissements et des analyses financières."
      },
      q3: {
        question: "Mes données financières sont-elles sécurisées avec SPENDLESS ?",
        answer: "Oui, votre sécurité est notre priorité absolue. Nous utilisons un cryptage de niveau bancaire pour protéger vos données. Nous ne stockons jamais vos identifiants bancaires, et toutes les connexions aux institutions financières sont sécurisées par un cryptage 256 bits. De plus, nous effectuons régulièrement des audits de sécurité pour garantir la sécurité de vos données."
      },
      q4: {
        question: "Puis-je connecter mes comptes bancaires à SPENDLESS ?",
        answer: "Oui, SPENDLESS peut se connecter en toute sécurité à plus de 10 000 institutions financières dans le monde. Cela permet l'importation automatique des transactions et des soldes, ce qui facilite la mise à jour de vos données financières."
      },
      q5: {
        question: "Comment annuler mon abonnement ?",
        answer: "Vous pouvez annuler votre abonnement à tout moment depuis les paramètres de votre compte. Après l'annulation, vous continuerez à avoir accès aux fonctionnalités premium jusqu'à la fin de votre période de facturation en cours, après quoi votre compte reviendra à la formule gratuite."
      },
      q6: {
        question: "SPENDLESS fonctionne-t-il sur tous les appareils ?",
        answer: "Oui, SPENDLESS est disponible sur iOS, Android et en tant qu'application web. Vos données se synchronisent automatiquement sur tous vos appareils, vous pouvez donc accéder à vos informations financières n'importe où et n'importe quand."
      },
      q7: {
        question: "Puis-je exporter mes données depuis SPENDLESS ?",
        answer: "Oui, vous pouvez exporter vos données financières à tout moment dans différents formats, notamment CSV, Excel et PDF. Cela facilite l'utilisation de vos données à des fins fiscales ou de planification financière en dehors de l'application."
      },
      q8: {
        question: "Comment SPENDLESS m'aide-t-il à économiser de l'argent ?",
        answer: "SPENDLESS vous aide à économiser de l'argent en vous donnant une visibilité claire sur vos habitudes de dépenses, en vous alertant des dépenses inhabituelles, en identifiant les abonnements que vous n'utilisez peut-être pas et en fournissant des recommandations personnalisées pour optimiser votre budget en fonction de vos modèles financiers."
      },
      q9: {
        question: "Y a-t-il une limite au nombre de comptes que je peux ajouter ?",
        answer: "Les utilisateurs gratuits peuvent connecter jusqu'à 3 comptes financiers. Les utilisateurs premium peuvent connecter un nombre illimité de comptes, y compris des comptes bancaires, des cartes de crédit, des prêts, des investissements et plus encore."
      },
      q10: {
        question: "Proposez-vous un service client ?",
        answer: "Oui, nous fournissons un support client par email et chat pour tous les utilisateurs. Les abonnés premium bénéficient également d'un support prioritaire avec des temps de réponse plus rapides."
      }
    }
  }
};

export default frTranslations;

