
// Status types for roadmap items
export type Status = 'completed' | 'in-progress' | 'planned';

// Interface for roadmap items
export interface RoadmapItemType {
  id: string;
  titleKey: string;
  descriptionKey: string;
  status: Status;
  quarter: string;
  year: string;
  date?: string;
}

// Sample roadmap data with translation keys
export const roadmapData: RoadmapItemType[] = [
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
