
import { useEffect, useState } from "react";
import RoadmapItem from "./RoadmapItem";
import { RoadmapItemType, Status } from "./types";

interface RoadmapListProps {
  items: RoadmapItemType[];
  filter: 'all' | Status;
}

const RoadmapList = ({ items, filter }: RoadmapListProps) => {
  const [filteredItems, setFilteredItems] = useState<RoadmapItemType[]>(items);
  
  useEffect(() => {
    if (filter === 'all') {
      setFilteredItems(items);
    } else {
      setFilteredItems(items.filter(item => item.status === filter));
    }
  }, [filter, items]);

  return (
    <div className="space-y-8 relative">
      <div className="absolute top-0 bottom-0 left-[27px] w-0.5 bg-gray-200 z-0"></div>
      
      {filteredItems.map((item, index) => (
        <RoadmapItem 
          key={item.id} 
          item={item} 
        />
      ))}
    </div>
  );
};

export default RoadmapList;
