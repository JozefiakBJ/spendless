
import React, { useEffect, useRef } from 'react';
import { 
  TrendingUp, 
  FileUp, 
  BrainCircuit, 
  FolderPlus, 
  Users, 
  ShieldCheck 
} from 'lucide-react';

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
            Powerful Features
          </span>
          <h2 className="text-3xl md:text-4xl font-display font-bold mb-6">
            Everything You Need to Manage Your Finances
          </h2>
          <p className="text-lg text-gray-600">
            SPENDLESS combines smart tracking, powerful import tools, and AI analysis to give you complete control over your financial life.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <FeatureCard 
            icon={<TrendingUp size={24} strokeWidth={2} />}
            title="Smart Tracking"
            description="Get real-time insights into your spending patterns and track expenses across multiple categories and accounts."
            delay={100}
          />
          
          <FeatureCard 
            icon={<FileUp size={24} strokeWidth={2} />}
            title="Multi-Source Import"
            description="Easily import data from PDFs, CSV files, Excel sheets, or connect directly to your bank accounts."
            delay={200}
          />
          
          <FeatureCard 
            icon={<BrainCircuit size={24} strokeWidth={2} />}
            title="AI-Powered Analysis"
            description="Let our advanced AI analyze your finances, identify saving opportunities, and provide personalized recommendations."
            delay={300}
          />
          
          <FeatureCard 
            icon={<FolderPlus size={24} strokeWidth={2} />}
            title="Multiple Budgets"
            description="Create separate budgets for different goals or time periods and keep all your financial planning in one place."
            delay={400}
          />
          
          <FeatureCard 
            icon={<Users size={24} strokeWidth={2} />}
            title="Budget Sharing"
            description="Share budgets with family or friends for joint expenses, household management, or trips."
            delay={500}
          />
          
          <FeatureCard 
            icon={<ShieldCheck size={24} strokeWidth={2} />}
            title="Security & Privacy"
            description="Your data is encrypted and secure. We never sell your information or share it with third parties."
            delay={600}
          />
        </div>

        <div className="mt-16 text-center">
          <button className="button-primary">
            Explore All Features
          </button>
        </div>
      </div>
    </section>
  );
};

export default Features;
