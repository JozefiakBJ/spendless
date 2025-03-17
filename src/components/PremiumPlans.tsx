
import { useState } from 'react';
import { useI18n } from '@/i18n/I18nContext';
import { CheckCircle, X, CreditCard, Users, Gem } from 'lucide-react';
import { Card, CardHeader, CardContent, CardFooter } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

const PremiumPlans = () => {
  const { t } = useI18n();
  const [billingPeriod, setBillingPeriod] = useState<'monthly' | 'yearly'>('monthly');
  
  const plans = [
    {
      name: 'Basic',
      price: billingPeriod === 'monthly' ? 9.99 : 7.99 * 12,
      description: 'Perfect for individuals starting their financial journey',
      features: [
        'Import up to 500 transactions monthly',
        'Basic expense categorization',
        'Monthly spending reports',
        'Export data to CSV',
        'Email support',
      ],
      notIncluded: [
        'AI-powered insights',
        'Multiple budget creation',
        'Budget sharing capabilities',
        'Custom spending categories',
      ],
      icon: CreditCard,
      color: 'bg-primary-50',
      buttonVariant: 'outline',
    },
    {
      name: 'Plus',
      price: billingPeriod === 'monthly' ? 19.99 : 15.99 * 12,
      description: 'Enhanced features for serious budget management',
      features: [
        'Import unlimited transactions',
        'Advanced expense categorization',
        'Weekly spending insights',
        'AI-powered savings recommendations',
        'Create up to 5 separate budgets',
        'Export data to multiple formats',
        'Priority support',
      ],
      notIncluded: [
        'Budget sharing capabilities',
        'Custom spending categories',
      ],
      icon: Users,
      color: 'bg-secondary-50',
      buttonVariant: 'secondary',
      highlight: true,
    },
    {
      name: 'Premium',
      price: billingPeriod === 'monthly' ? 29.99 : 23.99 * 12,
      description: 'Complete financial management for your entire family',
      features: [
        'Import unlimited transactions',
        'Advanced expense categorization',
        'Daily spending insights',
        'AI-powered financial analysis',
        'Create unlimited budgets',
        'Budget sharing with up to 5 people',
        'Custom spending categories',
        'Export to all formats',
        'Premium dedicated support',
      ],
      notIncluded: [],
      icon: Gem,
      color: 'bg-primary-50',
      buttonVariant: 'default',
    },
  ];
  
  return (
    <section id="premium-plans" className="py-24 bg-gray-50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-display font-bold mb-4 text-primary-800">Premium Plans</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Choose the perfect plan to take your financial management to the next level
          </p>
          
          <div className="flex items-center justify-center mt-8 bg-white rounded-full p-1 w-fit mx-auto border">
            <button
              onClick={() => setBillingPeriod('monthly')}
              className={`rounded-full px-6 py-2 text-sm font-medium transition-all ${
                billingPeriod === 'monthly' 
                  ? 'bg-primary-600 text-white' 
                  : 'text-gray-500 hover:text-gray-700'
              }`}
            >
              Monthly
            </button>
            <button
              onClick={() => setBillingPeriod('yearly')}
              className={`rounded-full px-6 py-2 text-sm font-medium transition-all ${
                billingPeriod === 'yearly' 
                  ? 'bg-primary-600 text-white' 
                  : 'text-gray-500 hover:text-gray-700'
              }`}
            >
              Yearly <span className="text-green-500 font-semibold">(Save 20%)</span>
            </button>
          </div>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {plans.map((plan) => (
            <Card 
              key={plan.name}
              className={`border ${plan.highlight ? 'shadow-xl border-secondary-200 ring-2 ring-secondary-200' : 'shadow-md'} 
                rounded-xl overflow-hidden transition-all duration-300 hover:shadow-lg hover:translate-y-[-5px]`}
            >
              <CardHeader className={`${plan.color} bg-opacity-10 px-6 pt-8 pb-4`}>
                <div className="flex justify-between items-center mb-4">
                  <h3 className="text-2xl font-display font-bold text-gray-800">{plan.name}</h3>
                  <plan.icon className={`w-8 h-8 ${plan.highlight ? 'text-secondary-500' : 'text-primary-500'}`} />
                </div>
                <div className="mb-2">
                  <span className="text-3xl font-bold">${plan.price.toFixed(2)}</span>
                  <span className="text-gray-500">/{billingPeriod === 'monthly' ? 'month' : 'year'}</span>
                </div>
                <p className="text-sm text-gray-600">{plan.description}</p>
              </CardHeader>
              
              <CardContent className="px-6 py-4">
                <h4 className="text-sm uppercase tracking-wider text-gray-500 font-semibold mb-3">What's included:</h4>
                <ul className="space-y-3 mb-6">
                  {plan.features.map((feature, i) => (
                    <li key={i} className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                      <span className="text-sm text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>
                
                {plan.notIncluded.length > 0 && (
                  <>
                    <h4 className="text-sm uppercase tracking-wider text-gray-500 font-semibold mb-3">Not included:</h4>
                    <ul className="space-y-3">
                      {plan.notIncluded.map((feature, i) => (
                        <li key={i} className="flex items-start">
                          <X className="w-5 h-5 text-gray-300 mr-2 flex-shrink-0 mt-0.5" />
                          <span className="text-sm text-gray-500">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </>
                )}
              </CardContent>
              
              <CardFooter className="px-6 pb-8 pt-2">
                <Button 
                  variant={plan.buttonVariant as any} 
                  className={`w-full ${plan.highlight ? 'bg-secondary hover:bg-secondary-600' : ''}`}
                >
                  Get {plan.name}
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PremiumPlans;
