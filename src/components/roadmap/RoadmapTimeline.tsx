
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Check, Flag, GitBranch, Map, MapPin, Route, Timer, TrendingUp } from "lucide-react";
import { useEffect, useState } from "react";
import { useI18n } from "@/i18n/I18nContext";

// Status types for roadmap items
type Status = 'completed' | 'in-progress' | 'planned';

// Interface for roadmap items
interface RoadmapItem {
  id: string;
  title: string;
  description: string;
  status: Status;
  quarter: string;
  year: string;
  date?: string;
}

// Sample roadmap data
const roadmapData: RoadmapItem[] = [
  {
    id: '1',
    title: 'SPENDLESS MVP Launch',
    description: 'Initial release with core expense tracking and basic budget management features.',
    status: 'completed',
    quarter: 'Q1',
    year: '2023',
    date: 'January 15, 2023'
  },
  {
    id: '2',
    title: 'Multi-platform Support',
    description: 'Release of mobile applications for iOS and Android, plus desktop apps.',
    status: 'completed',
    quarter: 'Q2',
    year: '2023',
    date: 'April 30, 2023'
  },
  {
    id: '3',
    title: 'AI-Powered Insights',
    description: 'Smart analytics and personalized recommendations to help users save more.',
    status: 'completed',
    quarter: 'Q3',
    year: '2023',
    date: 'August 20, 2023'
  },
  {
    id: '4',
    title: 'Bank Integration',
    description: 'Direct connection with over 10,000 banks worldwide for automated expense tracking.',
    status: 'in-progress',
    quarter: 'Q1',
    year: '2024',
    date: 'March 2024'
  },
  {
    id: '5',
    title: 'Budget Sharing & Collaboration',
    description: 'Share budgets with family members and collaborate on financial goals.',
    status: 'in-progress',
    quarter: 'Q2',
    year: '2024',
    date: 'June 2024'
  },
  {
    id: '6',
    title: 'Investment Tracking',
    description: 'Monitor your investments and integrate with brokerage accounts.',
    status: 'planned',
    quarter: 'Q3',
    year: '2024',
    date: 'September 2024'
  },
  {
    id: '7',
    title: 'Tax Preparation Tools',
    description: 'Simplify tax season with expense categorization and reporting features.',
    status: 'planned',
    quarter: 'Q4',
    year: '2024',
    date: 'November 2024'
  },
  {
    id: '8',
    title: 'Financial Goal Planning',
    description: 'Set long-term financial goals with progress tracking and smart recommendations.',
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
        return <Badge variant="default" className="bg-green-600">{t('roadmap.statusCompleted')}</Badge>;
      case 'in-progress':
        return <Badge variant="secondary" className="bg-blue-600">{t('roadmap.statusInProgress')}</Badge>;
      case 'planned':
        return <Badge variant="outline" className="border-gray-400 text-gray-600">{t('roadmap.statusPlanned')}</Badge>;
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

  return (
    <section className="py-16 px-4">
      <div className="container mx-auto max-w-5xl">
        <div className="flex flex-col items-center mb-10">
          <div className="flex items-center gap-2 mb-6">
            <Route className="text-primary-600 w-6 h-6" />
            <h2 className="text-3xl font-display font-bold text-gray-900">{t('roadmap.title')}</h2>
          </div>
          
          <Tabs defaultValue="all" className="w-full max-w-xl">
            <TabsList className="grid grid-cols-4 mb-8">
              <TabsTrigger value="all" onClick={() => setFilter('all')}>{t('roadmap.filterAll')}</TabsTrigger>
              <TabsTrigger value="completed" onClick={() => setFilter('completed')}>{t('roadmap.filterCompleted')}</TabsTrigger>
              <TabsTrigger value="in-progress" onClick={() => setFilter('in-progress')}>{t('roadmap.filterInProgress')}</TabsTrigger>
              <TabsTrigger value="planned" onClick={() => setFilter('planned')}>{t('roadmap.filterPlanned')}</TabsTrigger>
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
                            <CardTitle className="text-xl font-medium">{item.title}</CardTitle>
                            <CardDescription className="text-sm text-gray-500 mt-1">
                              {t(`roadmap.${item.quarter.toLowerCase()}`)} {item.year} {item.date && `• ${item.date}`}
                            </CardDescription>
                          </div>
                          {getStatusBadge(item.status)}
                        </div>
                      </CardHeader>
                      <CardContent>
                        <p className="text-gray-700">{item.description}</p>
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
            <h3 className="text-xl font-semibold text-gray-900">{t('roadmap.subtitle')}</h3>
          </div>
          <p className="text-gray-700 mb-6">
            {t('roadmap.subtitle')}
          </p>
          <a href="/contact" className="inline-flex items-center gap-2 text-primary-600 font-medium hover:text-primary-700 transition-colors">
            {t('nav.contact')}
            <TrendingUp className="w-4 h-4" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default RoadmapTimeline;
