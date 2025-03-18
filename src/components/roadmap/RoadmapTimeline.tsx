
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Check, Flag, GitBranch, Map, MapPin, Route, Timer, TrendingUp } from "lucide-react";
import { useEffect, useState } from "react";
import { useI18n } from "@/i18n/I18nContext";
import { TranslationKey } from "@/i18n/types";

// Status types for roadmap items
type Status = 'completed' | 'in-progress' | 'planned';

// Interface for roadmap items
interface RoadmapItem {
  id: string;
  titleKey: string;
  descriptionKey: string;
  status: Status;
  quarter: string;
  year: string;
  date?: string;
}

// Sample roadmap data with translation keys
const roadmapData: RoadmapItem[] = [
  {
    id: '1',
    titleKey: 'roadmap.item1.title',
    descriptionKey: 'roadmap.item1.description',
    status: 'completed',
    quarter: 'Q1',
    year: '2023',
    date: 'January 15, 2023'
  },
  {
    id: '2',
    titleKey: 'roadmap.item2.title',
    descriptionKey: 'roadmap.item2.description',
    status: 'completed',
    quarter: 'Q2',
    year: '2023',
    date: 'April 30, 2023'
  },
  {
    id: '3',
    titleKey: 'roadmap.item3.title',
    descriptionKey: 'roadmap.item3.description',
    status: 'completed',
    quarter: 'Q3',
    year: '2023',
    date: 'August 20, 2023'
  },
  {
    id: '4',
    titleKey: 'roadmap.item4.title',
    descriptionKey: 'roadmap.item4.description',
    status: 'in-progress',
    quarter: 'Q1',
    year: '2024',
    date: 'March 2024'
  },
  {
    id: '5',
    titleKey: 'roadmap.item5.title',
    descriptionKey: 'roadmap.item5.description',
    status: 'in-progress',
    quarter: 'Q2',
    year: '2024',
    date: 'June 2024'
  },
  {
    id: '6',
    titleKey: 'roadmap.item6.title',
    descriptionKey: 'roadmap.item6.description',
    status: 'planned',
    quarter: 'Q3',
    year: '2024',
    date: 'September 2024'
  },
  {
    id: '7',
    titleKey: 'roadmap.item7.title',
    descriptionKey: 'roadmap.item7.description',
    status: 'planned',
    quarter: 'Q4',
    year: '2024',
    date: 'November 2024'
  },
  {
    id: '8',
    titleKey: 'roadmap.item8.title',
    descriptionKey: 'roadmap.item8.description',
    status: 'planned',
    quarter: 'Q1',
    year: '2025',
    date: 'February 2025'
  }
];

const RoadmapTimeline = () => {
  const { t } = useI18n();
  const [filter, setFilter] = useState<'all' | Status>('all');
  const [filteredItems, setFilteredItems] = useState<RoadmapItem[]>(roadmapData);
  
  useEffect(() => {
    if (filter === 'all') {
      setFilteredItems(roadmapData);
    } else {
      setFilteredItems(roadmapData.filter(item => item.status === filter));
    }
  }, [filter]);

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
    <section className="py-16 px-4">
      <div className="container mx-auto max-w-5xl">
        <div className="flex flex-col items-center mb-10">
          <div className="flex items-center gap-2 mb-6">
            <Route className="text-primary-600 w-6 h-6" />
            <h2 className="text-3xl font-display font-bold text-gray-900">{t('roadmap.title' as TranslationKey)}</h2>
          </div>
          
          <Tabs defaultValue="all" className="w-full max-w-xl">
            <TabsList className="grid grid-cols-4 mb-8">
              <TabsTrigger value="all" onClick={() => setFilter('all')}>{t('roadmap.filterAll' as TranslationKey)}</TabsTrigger>
              <TabsTrigger value="completed" onClick={() => setFilter('completed')}>{t('roadmap.filterCompleted' as TranslationKey)}</TabsTrigger>
              <TabsTrigger value="in-progress" onClick={() => setFilter('in-progress')}>{t('roadmap.filterInProgress' as TranslationKey)}</TabsTrigger>
              <TabsTrigger value="planned" onClick={() => setFilter('planned')}>{t('roadmap.filterPlanned' as TranslationKey)}</TabsTrigger>
            </TabsList>
            
            <TabsContent value="all" className="mt-0">
              <div className="space-y-8 relative">
                <div className="absolute top-0 bottom-0 left-[27px] w-0.5 bg-gray-200 z-0"></div>
                
                {filteredItems.map((item, index) => (
                  <div key={item.id} className="relative z-10 flex gap-6 animate-fade-in" style={{ animationDelay: `${index * 100}ms` }}>
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
                ))}
              </div>
            </TabsContent>
            
            <TabsContent value="completed" className="mt-0">
              {/* Same content structure as "all" tab but filtered - handled by state */}
            </TabsContent>
            
            <TabsContent value="in-progress" className="mt-0">
              {/* Same content structure as "all" tab but filtered - handled by state */}
            </TabsContent>
            
            <TabsContent value="planned" className="mt-0">
              {/* Same content structure as "all" tab but filtered - handled by state */}
            </TabsContent>
          </Tabs>
        </div>
        
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
      </div>
    </section>
  );
};

export default RoadmapTimeline;
