
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Check, Flag, Timer } from "lucide-react";
import { useI18n } from "@/i18n/I18nContext";
import { TranslationKey } from "@/i18n/types";
import { Status, RoadmapItemType } from "./types";

interface RoadmapItemProps {
  item: RoadmapItemType;
}

const RoadmapItem = ({ item }: RoadmapItemProps) => {
  const { t } = useI18n();

  const getStatusBadge = (status: Status) => {
    switch (status) {
      case 'completed':
        return <Badge variant="default" className="bg-green-600">{t('roadmap.statusCompleted' as TranslationKey)}</Badge>;
      case 'in-progress':
        return <Badge variant="secondary" className="bg-blue-600">{t('roadmap.statusInProgress' as TranslationKey)}</Badge>;
      case 'planned':
        return <Badge variant="outline" className="border-gray-400 text-gray-600">{t('roadmap.statusPlanned' as TranslationKey)}</Badge>;
    }
  };
  
  const getStatusIcon = (status: Status) => {
    switch (status) {
      case 'completed':
        return <Check className="w-5 h-5 text-green-600" />;
      case 'in-progress':
        return <Timer className="w-5 h-5 text-blue-600" />;
      case 'planned':
        return <Flag className="w-5 h-5 text-gray-600" />;
    }
  };

  // Helper function to get the translated quarter
  const getTranslatedQuarter = (quarter: string): string => {
    if (quarter === 'Q1') return t('roadmap.q1' as TranslationKey);
    if (quarter === 'Q2') return t('roadmap.q2' as TranslationKey);
    if (quarter === 'Q3') return t('roadmap.q3' as TranslationKey);
    if (quarter === 'Q4') return t('roadmap.q4' as TranslationKey);
    return quarter; // Fallback to original if not matched
  };

  return (
    <div className="relative z-10 flex gap-6 animate-fade-in">
      <div className="flex-shrink-0 w-14 h-14 rounded-full bg-white border-2 border-primary-100 flex items-center justify-center">
        {getStatusIcon(item.status)}
      </div>
      
      <Card className="w-full shadow-sm hover:shadow-md transition-shadow duration-200">
        <CardHeader className="pb-2">
          <div className="flex justify-between items-start">
            <div>
              <CardTitle className="text-xl font-medium">{t(item.titleKey as TranslationKey)}</CardTitle>
              <CardDescription className="text-sm text-gray-500 mt-1">
                {getTranslatedQuarter(item.quarter)} {item.year} {item.date && `• ${item.date}`}
              </CardDescription>
            </div>
            {getStatusBadge(item.status)}
          </div>
        </CardHeader>
        <CardContent>
          <p className="text-gray-700">{t(item.descriptionKey as TranslationKey)}</p>
        </CardContent>
      </Card>
    </div>
  );
};

export default RoadmapItem;
