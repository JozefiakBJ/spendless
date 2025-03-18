
import { Route } from "lucide-react";
import { useState } from "react";
import { useI18n } from "@/i18n/I18nContext";
import { TranslationKey } from "@/i18n/types";
import { Status, roadmapData } from "./types";
import RoadmapFilter from "./RoadmapFilter";
import RoadmapList from "./RoadmapList";
import RoadmapContact from "./RoadmapContact";

const RoadmapTimeline = () => {
  const { t } = useI18n();
  const [filter, setFilter] = useState<'all' | Status>('all');

  return (
    <section className="py-16 px-4">
      <div className="container mx-auto max-w-5xl">
        <div className="flex flex-col items-center mb-10">
          <div className="flex items-center gap-2 mb-6">
            <Route className="text-primary-600 w-6 h-6" />
            <h2 className="text-3xl font-display font-bold text-gray-900">{t('roadmap.title' as TranslationKey)}</h2>
          </div>
          
          <RoadmapFilter onFilterChange={setFilter} />
          
          <div className="mt-0 w-full">
            <RoadmapList items={roadmapData} filter={filter} />
          </div>
        </div>
        
        <RoadmapContact />
      </div>
    </section>
  );
};

export default RoadmapTimeline;
