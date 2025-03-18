
import { PremiumPlansTranslations } from '../../types';

export const premiumPlans: PremiumPlansTranslations = {
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
};
