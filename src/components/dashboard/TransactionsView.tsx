
import React, { useState } from 'react';
import { Search } from 'lucide-react';
import TransactionForm from './TransactionForm';
import TransactionTable from './TransactionTable';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { 
  Sheet,
  SheetContent,
  SheetTrigger,
} from '@/components/ui/sheet';
import { useIsMobile } from '@/hooks/use-mobile';
import { Plus } from 'lucide-react';

const TransactionsView = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const isMobile = useIsMobile();
  const [showForm, setShowForm] = useState(false);

  return (
    <div className="flex-1 p-4 md:p-6 overflow-auto">
      {/* Mobile form in slide-out sheet */}
      {isMobile && (
        <div className="sticky top-0 z-10 bg-[#f9f5eb] pt-2 pb-4">
          <Sheet open={showForm} onOpenChange={setShowForm}>
            <SheetTrigger asChild>
              <Button className="w-full mb-4 flex items-center gap-2">
                <Plus size={18} />
                Add Transaction
              </Button>
            </SheetTrigger>
            <SheetContent side="bottom" className="h-[80vh] rounded-t-xl pt-6 px-4">
              <div className="h-full overflow-auto pb-8">
                <TransactionForm onSuccess={() => setShowForm(false)} />
              </div>
            </SheetContent>
          </Sheet>
          
          {/* Search - Mobile */}
          <div className="relative w-full">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
            <Input 
              className="pl-9 h-9 bg-white" 
              placeholder="Search transactions" 
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
        </div>
      )}

      {/* Desktop layout */}
      <div className="flex flex-col lg:flex-row gap-6">
        {/* Left column - Transaction form (desktop only) */}
        {!isMobile && (
          <div className="lg:w-[350px] sticky top-6 self-start">
            <TransactionForm />
          </div>
        )}

        {/* Right column - Transactions table */}
        <div className="flex-1">
          {/* Search and filter section - Desktop only */}
          {!isMobile && (
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between mb-6 gap-4">
              <div className="text-sm text-gray-600">Transactions</div>
              <div className="relative w-full sm:w-auto">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
                <Input 
                  className="pl-9 h-9 bg-white" 
                  placeholder="Search" 
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
              </div>
            </div>
          )}

          {/* Transactions table */}
          <TransactionTable searchTerm={searchTerm} />
        </div>
      </div>
    </div>
  );
};

export default TransactionsView;
