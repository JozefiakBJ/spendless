
import { MapPin, TrendingUp } from "lucide-react";
import { useI18n } from "@/i18n/I18nContext";
import { TranslationKey } from "@/i18n/types";

const RoadmapContact = () => {
  const { t } = useI18n();

  return (
    <div className="bg-gray-50 p-8 rounded-lg border border-gray-200 mt-12">
      <div className="flex items-center gap-3 mb-4">
        <MapPin className="text-primary-600 w-5 h-5" />
        <h3 className="text-xl font-semibold text-gray-900">{t('roadmap.subtitle' as TranslationKey)}</h3>
      </div>
      <p className="text-gray-700 mb-6">
        {t('roadmap.subtitle' as TranslationKey)}
      </p>
      <a href="/contact" className="inline-flex items-center gap-2 text-primary-600 font-medium hover:text-primary-700 transition-colors">
        {t('nav.contact' as TranslationKey)}
        <TrendingUp className="w-4 h-4" />
      </a>
    </div>
  );
};

export default RoadmapContact;
