
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useI18n } from "@/i18n/I18nContext";
import { TranslationKey } from "@/i18n/types";
import { Status } from "./types";

interface RoadmapFilterProps {
  onFilterChange: (filter: 'all' | Status) => void;
}

const RoadmapFilter = ({ onFilterChange }: RoadmapFilterProps) => {
  const { t } = useI18n();

  return (
    <Tabs defaultValue="all" className="w-full max-w-xl">
      <TabsList className="grid grid-cols-4 mb-8">
        <TabsTrigger value="all" onClick={() => onFilterChange('all')}>
          {t('roadmap.filterAll' as TranslationKey)}
        </TabsTrigger>
        <TabsTrigger value="completed" onClick={() => onFilterChange('completed')}>
          {t('roadmap.filterCompleted' as TranslationKey)}
        </TabsTrigger>
        <TabsTrigger value="in-progress" onClick={() => onFilterChange('in-progress')}>
          {t('roadmap.filterInProgress' as TranslationKey)}
        </TabsTrigger>
        <TabsTrigger value="planned" onClick={() => onFilterChange('planned')}>
          {t('roadmap.filterPlanned' as TranslationKey)}
        </TabsTrigger>
      </TabsList>
    </Tabs>
  );
};

export default RoadmapFilter;
