
import { PremiumPlansTranslations } from '../../types';

export const premiumPlans: PremiumPlansTranslations = {
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
};
