
import React, { useEffect, useRef } from 'react';
import { 
  TrendingUp, 
  FileUp, 
  BrainCircuit, 
  FolderPlus, 
  Users, 
  ShieldCheck 
} from 'lucide-react';
import { useI18n } from '@/i18n/I18nContext';

type FeatureCardProps = {
  icon: React.ReactNode;
  title: string;
  description: string;
  delay: number;
};

const FeatureCard = ({ icon, title, description, delay }: FeatureCardProps) => {
  return (
    <div 
      className="feature-card animate-fade-in opacity-0"
      style={{ animationDelay: `${delay}ms` }}
    >
      <div className="flex items-start space-x-4">
        <div className="bg-primary-50 p-3 rounded-xl text-primary-600">
          {icon}
        </div>
        <div>
          <h3 className="text-xl font-display font-semibold mb-2">{title}</h3>
          <p className="text-gray-600">{description}</p>
        </div>
      </div>
    </div>
  );
};

const Features = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const { t } = useI18n();

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const [entry] = entries;
        if (entry.isIntersecting) {
          const cards = document.querySelectorAll('.feature-card');
          cards.forEach((card, index) => {
            setTimeout(() => {
              card.classList.add('opacity-100');
            }, 300 * index); // staggered delay
          });
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <section id="features" className="py-24 bg-gradient-to-b from-white to-secondary-50" ref={sectionRef}>
      <div className="section-container">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block px-4 py-1 bg-primary-50 text-primary-600 rounded-full text-sm font-medium mb-4">
            {t('features.title')}
          </span>
          <h2 className="text-3xl md:text-4xl font-display font-bold mb-6">
            {t('features.subtitle')}
          </h2>
          <p className="text-lg text-gray-600">
            {t('features.description')}
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <FeatureCard 
            icon={<TrendingUp size={24} strokeWidth={2} />}
            title={t('features.smartTracking.title')}
            description={t('features.smartTracking.description')}
            delay={100}
          />
          
          <FeatureCard 
            icon={<FileUp size={24} strokeWidth={2} />}
            title={t('features.multiSourceImport.title')}
            description={t('features.multiSourceImport.description')}
            delay={200}
          />
          
          <FeatureCard 
            icon={<BrainCircuit size={24} strokeWidth={2} />}
            title={t('features.aiAnalysis.title')}
            description={t('features.aiAnalysis.description')}
            delay={300}
          />
          
          <FeatureCard 
            icon={<FolderPlus size={24} strokeWidth={2} />}
            title={t('features.multipleBudgets.title')}
            description={t('features.multipleBudgets.description')}
            delay={400}
          />
          
          <FeatureCard 
            icon={<Users size={24} strokeWidth={2} />}
            title={t('features.budgetSharing.title')}
            description={t('features.budgetSharing.description')}
            delay={500}
          />
          
          <FeatureCard 
            icon={<ShieldCheck size={24} strokeWidth={2} />}
            title={t('features.security.title')}
            description={t('features.security.description')}
            delay={600}
          />
        </div>

        <div className="mt-16 text-center">
          <button    onClick={() => window.location.href = '/roadmap'}
                     className="button-primary">
            {t('features.exploreAll')}
          </button>
        </div>
      </div>
    </section>
  );
};

export default Features;
