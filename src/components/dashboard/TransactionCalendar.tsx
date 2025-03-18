
import React, { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { format, addMonths, subMonths, startOfMonth, endOfMonth, eachDayOfInterval, getDay, isSameMonth, isToday } from 'date-fns';

type TransactionCalendarProps = {
  onDateRangeChange: (range: string) => void;
};

const TransactionCalendar = ({ onDateRangeChange }: TransactionCalendarProps) => {
  const [currentMonth, setCurrentMonth] = useState(new Date(2021, 10)); // November 2021 as shown in the image
  
  // Get days of current month
  const monthStart = startOfMonth(currentMonth);
  const monthEnd = endOfMonth(currentMonth);
  const monthDays = eachDayOfInterval({ start: monthStart, end: monthEnd });
  
  // Get day names
  const dayNames = ['MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT', 'SUN'];
  
  // Create a range string like "1 October - 1 November"
  const formatDateRange = () => {
    const start = `1 ${format(currentMonth, 'MMMM')}`;
    const nextMonth = addMonths(currentMonth, 1);
    const end = `1 ${format(nextMonth, 'MMMM')}`;
    return `${start} - ${end}`;
  };
  
  // Handle month navigation
  const prevMonth = () => {
    const newMonth = subMonths(currentMonth, 1);
    setCurrentMonth(newMonth);
    onDateRangeChange(formatDateRange());
  };
  
  const nextMonth = () => {
    const newMonth = addMonths(currentMonth, 1);
    setCurrentMonth(newMonth);
    onDateRangeChange(formatDateRange());
  };
  
  // Update parent component with initial date range
  React.useEffect(() => {
    onDateRangeChange(formatDateRange());
  }, []);
  
  return (
    <div className="bg-white rounded-lg shadow-sm p-4 border border-gray-100">
      <div className="flex items-center justify-between mb-4">
        <button 
          onClick={prevMonth} 
          className="p-1 rounded-full hover:bg-gray-100"
          aria-label="Previous month"
        >
          <ChevronLeft className="h-5 w-5" />
        </button>
        
        <h2 className="text-lg font-medium">
          {format(currentMonth, 'MMMM yyyy')}
        </h2>
        
        <button 
          onClick={nextMonth} 
          className="p-1 rounded-full hover:bg-gray-100"
          aria-label="Next month"
        >
          <ChevronRight className="h-5 w-5" />
        </button>
      </div>
      
      <div className="grid grid-cols-7 gap-2">
        {/* Day names */}
        {dayNames.map((day) => (
          <div key={day} className="text-center font-medium text-xs text-gray-500 py-2">
            {day}
          </div>
        ))}
        
        {/* Calendar days */}
        {Array.from({ length: getDay(monthStart) - 1 >= 0 ? getDay(monthStart) - 1 : 6 }).map((_, index) => (
          <div key={`empty-${index}`} className="h-8 text-center" />
        ))}
        
        {monthDays.map((day, index) => (
          <button
            key={index}
            className={`h-8 w-full flex items-center justify-center text-sm rounded-full
              ${isToday(day) ? 'bg-primary-100 text-primary-700' : 'hover:bg-gray-100'}
              ${day.getDate() === 17 ? 'bg-primary-100 text-primary-700' : ''}
            `}
          >
            {day.getDate()}
          </button>
        ))}
      </div>
    </div>
  );
};

export default TransactionCalendar;
