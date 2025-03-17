
import { useI18n } from '@/i18n/I18nContext';

const RoadmapHeader = () => {
  const { t } = useI18n();
  
  return (
    <section className="bg-gradient-to-b from-primary-50 to-white py-16 px-4">
      <div className="container mx-auto max-w-4xl text-center">
        <div className="animate-fade-in space-y-4">
          <h1 className="text-4xl md:text-5xl font-display font-bold text-primary-800">
            {t('roadmap.title') || 'Our Product Roadmap'}
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            {t('roadmap.subtitle') || 'Explore our journey and see what exciting features we're building next. We're continuously improving SPENDLESS based on your feedback.'}
          </p>
        </div>
      </div>
    </section>
  );
};

export default RoadmapHeader;
