
import { PremiumPlansTranslations } from '../../types';

export const premiumPlans: PremiumPlansTranslations = {
  title: 'Premium Plans',
  subtitle: 'Choose the perfect plan to take your financial management to the next level',
  monthly: 'Monthly',
  yearly: 'Yearly',
  discount: '(Save 20%)',
  perMonth: 'month',
  perYear: 'year',
  included: 'What\'s included:',
  notIncluded: 'Not included:',
  getButton: 'Get',
  basic: {
    name: 'Basic',
    description: 'Perfect for individuals starting their financial journey',
    features: {
      f1: 'Import up to 500 transactions monthly',
      f2: 'Basic expense categorization',
      f3: 'Monthly spending reports',
      f4: 'Export data to CSV',
      f5: 'Email support',
    },
    notIncluded: {
      f1: 'AI-powered insights',
      f2: 'Multiple budget creation',
      f3: 'Budget sharing capabilities',
      f4: 'Custom spending categories',
    }
  },
  plus: {
    name: 'Plus',
    description: 'Enhanced features for serious budget management',
    features: {
      f1: 'Import unlimited transactions',
      f2: 'Advanced expense categorization',
      f3: 'Weekly spending insights',
      f4: 'AI-powered savings recommendations',
      f5: 'Create up to 5 separate budgets',
      f6: 'Export data to multiple formats',
      f7: 'Priority support',
    },
    notIncluded: {
      f1: 'Budget sharing capabilities',
      f2: 'Custom spending categories',
    }
  },
  premium: {
    name: 'Premium',
    description: 'Complete financial management for your entire family',
    features: {
      f1: 'Import unlimited transactions',
      f2: 'Advanced expense categorization',
      f3: 'Daily spending insights',
      f4: 'AI-powered financial analysis',
      f5: 'Create unlimited budgets',
      f6: 'Budget sharing with up to 5 people',
      f7: 'Custom spending categories',
      f8: 'Export to all formats',
      f9: 'Premium dedicated support',
    }
  }
};
