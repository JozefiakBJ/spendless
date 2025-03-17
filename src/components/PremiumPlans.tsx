
import { CheckCircle, Gem, Star, Shield } from 'lucide-react';
import { useI18n } from '@/i18n/I18nContext';
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

const PremiumPlans = () => {
  const { t } = useI18n();

  return (
    <section id="premium-plans" className="py-20 bg-gradient-to-b from-white to-primary-50">
      <div className="section-container">
        <div className="text-center mb-12 animate-fade-in-up opacity-0" style={{ animationDelay: '100ms' }}>
          <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">
            {t('cta.premium.title')}
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            {t('cta.premium.description')}
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Basic Plan */}
          <Card className="border-2 border-gray-200 shadow-md hover:shadow-lg transition-all animate-fade-in-up opacity-0" style={{ animationDelay: '200ms' }}>
            <CardHeader className="pb-2">
              <div className="flex items-center justify-between mb-2">
                <Star className="h-6 w-6 text-primary-500" />
                <div className="bg-primary-100 text-primary-700 px-3 py-1 rounded-full text-xs font-medium">
                  Most Popular
                </div>
              </div>
              <CardTitle className="text-2xl font-display">Basic</CardTitle>
              <CardDescription>Perfect for individuals</CardDescription>
              <div className="mt-4">
                <span className="text-3xl font-bold">$5.99</span>
                <span className="text-gray-500 ml-2">/month</span>
              </div>
            </CardHeader>
            <CardContent className="pt-6">
              <ul className="space-y-3">
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 mr-2 text-primary-500 shrink-0 mt-0.5" />
                  <span>Up to 5 custom budgets</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 mr-2 text-primary-500 shrink-0 mt-0.5" />
                  <span>Basic AI-powered insights</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 mr-2 text-primary-500 shrink-0 mt-0.5" />
                  <span>3 months of transaction history</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 mr-2 text-primary-500 shrink-0 mt-0.5" />
                  <span>Email support</span>
                </li>
              </ul>
            </CardContent>
            <CardFooter>
              <Button className="w-full bg-primary hover:bg-primary-600">
                Choose Basic
              </Button>
            </CardFooter>
          </Card>

          {/* Pro Plan */}
          <Card className="border-2 border-primary-400 shadow-xl relative animate-fade-in-up opacity-0" style={{ animationDelay: '300ms' }}>
            <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-primary-600 text-white px-4 py-1 rounded-full text-sm font-medium">
              Recommended
            </div>
            <CardHeader className="pb-2">
              <div className="flex items-center justify-between mb-2">
                <Gem className="h-6 w-6 text-primary-600" />
              </div>
              <CardTitle className="text-2xl font-display">Pro</CardTitle>
              <CardDescription>For serious budgeters</CardDescription>
              <div className="mt-4">
                <span className="text-3xl font-bold">$9.99</span>
                <span className="text-gray-500 ml-2">/month</span>
              </div>
            </CardHeader>
            <CardContent className="pt-6">
              <ul className="space-y-3">
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 mr-2 text-primary-600 shrink-0 mt-0.5" />
                  <span>Unlimited budgets</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 mr-2 text-primary-600 shrink-0 mt-0.5" />
                  <span>Advanced AI analysis & recommendations</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 mr-2 text-primary-600 shrink-0 mt-0.5" />
                  <span>12 months of transaction history</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 mr-2 text-primary-600 shrink-0 mt-0.5" />
                  <span>CSV & PDF export</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 mr-2 text-primary-600 shrink-0 mt-0.5" />
                  <span>Priority email & chat support</span>
                </li>
              </ul>
            </CardContent>
            <CardFooter>
              <Button className="w-full bg-secondary hover:bg-secondary-600 text-secondary-foreground">
                Choose Pro
              </Button>
            </CardFooter>
          </Card>

          {/* Business Plan */}
          <Card className="border-2 border-gray-200 shadow-md hover:shadow-lg transition-all animate-fade-in-up opacity-0" style={{ animationDelay: '400ms' }}>
            <CardHeader className="pb-2">
              <div className="flex items-center justify-between mb-2">
                <Shield className="h-6 w-6 text-primary-500" />
              </div>
              <CardTitle className="text-2xl font-display">Business</CardTitle>
              <CardDescription>For teams & organizations</CardDescription>
              <div className="mt-4">
                <span className="text-3xl font-bold">$19.99</span>
                <span className="text-gray-500 ml-2">/month</span>
              </div>
            </CardHeader>
            <CardContent className="pt-6">
              <ul className="space-y-3">
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 mr-2 text-primary-500 shrink-0 mt-0.5" />
                  <span>Everything in Pro plan</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 mr-2 text-primary-500 shrink-0 mt-0.5" />
                  <span>Team collaboration features</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 mr-2 text-primary-500 shrink-0 mt-0.5" />
                  <span>Role-based permissions</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 mr-2 text-primary-500 shrink-0 mt-0.5" />
                  <span>API access</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 mr-2 text-primary-500 shrink-0 mt-0.5" />
                  <span>Dedicated account manager</span>
                </li>
              </ul>
            </CardContent>
            <CardFooter>
              <Button className="w-full bg-primary hover:bg-primary-600">
                Choose Business
              </Button>
            </CardFooter>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default PremiumPlans;
