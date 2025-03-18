
import React, { useState } from 'react';
import { Search } from 'lucide-react';
import TransactionForm from './TransactionForm';
import TransactionTable from './TransactionTable';
import TransactionCalendar from './TransactionCalendar';
import { Input } from '@/components/ui/input';

const TransactionsView = () => {
  const [currentDateRange, setCurrentDateRange] = useState('1 October - 1 November');
  const [searchTerm, setSearchTerm] = useState('');

  return (
    <div className="flex-1 p-6 overflow-auto">
      <div className="flex flex-col lg:flex-row gap-6">
        {/* Left column - Transaction form */}
        <div className="lg:w-[350px]">
          <TransactionForm />
        </div>

        {/* Right column - Calendar and transactions table */}
        <div className="flex-1">
          {/* Search and filter section */}
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between mb-6 gap-4">
            <div className="text-sm text-gray-600">{currentDateRange}</div>
            <div className="relative w-full sm:w-auto">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
              <Input 
                className="pl-9 h-9 bg-white" 
                placeholder="Szukaj" 
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
          </div>

          {/* Calendar */}
          <div className="mb-6">
            <TransactionCalendar onDateRangeChange={setCurrentDateRange} />
          </div>

          {/* Transactions table */}
          <TransactionTable searchTerm={searchTerm} />
        </div>
      </div>
    </div>
  );
};

export default TransactionsView;
