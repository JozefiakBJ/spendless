
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { 
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { Calendar as CalendarIcon } from 'lucide-react';
import { Calendar } from '@/components/ui/calendar';
import { format } from 'date-fns';
import { 
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/components/ui/popover';
import { cn } from '@/lib/utils';
import { toast } from 'sonner';

type TransactionFormProps = {
  onSuccess?: () => void;
};

const TransactionForm = ({ onSuccess }: TransactionFormProps = {}) => {
  const [transactionType, setTransactionType] = useState<'expense' | 'revenue'>('expense');
  const [date, setDate] = useState<Date | undefined>(new Date());
  const [amount, setAmount] = useState('');
  const [category, setCategory] = useState('');
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real app, this would save the transaction to a database
    console.log({
      type: transactionType,
      date,
      amount: parseFloat(amount),
      category,
      title,
      description
    });
    
    // Show success notification
    toast.success('Transaction added successfully!');
    
    // Reset form
    setTransactionType('expense');
    setDate(new Date());
    setAmount('');
    setCategory('');
    setTitle('');
    setDescription('');
    
    // Call optional success callback (for mobile view to close the sheet)
    if (onSuccess) {
      onSuccess();
    }
  };

  return (
    <div className="bg-[#fdf8ee] rounded-lg p-4 md:p-6 border border-[#e8e0d0]">
      <h2 className="text-xl font-semibold mb-6">NEW TRANSACTION</h2>
      
      {/* Transaction type toggle */}
      <div className="mb-6 border-b border-[#e8e0d0] pb-2">
        <div className="flex">
          <button
            type="button"
            className={`flex-1 pb-2 text-sm font-medium transition-colors relative ${
              transactionType === 'expense' ? 'text-red-600' : 'text-gray-500 hover:text-gray-700'
            }`}
            onClick={() => setTransactionType('expense')}
          >
            Expense
            {transactionType === 'expense' && (
              <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-red-600"></span>
            )}
          </button>
          <button
            type="button"
            className={`flex-1 pb-2 text-sm font-medium transition-colors relative ${
              transactionType === 'revenue' ? 'text-green-600' : 'text-gray-500 hover:text-gray-700'
            }`}
            onClick={() => setTransactionType('revenue')}
          >
            Revenue
            {transactionType === 'revenue' && (
              <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-green-600"></span>
            )}
          </button>
        </div>
      </div>
      
      <form onSubmit={handleSubmit}>
        {/* Date */}
        <div className="mb-4">
          <Label htmlFor="date" className="text-xs text-gray-500 mb-1 block">Date* (DD/MM/YYYY)</Label>
          <Popover>
            <PopoverTrigger asChild>
              <Button
                variant="outline"
                className={cn(
                  "w-full justify-start text-left font-normal bg-white",
                  !date && "text-muted-foreground"
                )}
              >
                <CalendarIcon className="mr-2 h-4 w-4" />
                {date ? format(date, 'dd / MM / yyyy') : <span>Select date</span>}
              </Button>
            </PopoverTrigger>
            <PopoverContent className="w-auto p-0" align="start">
              <Calendar
                mode="single"
                selected={date}
                onSelect={setDate}
                initialFocus
                className="p-3 pointer-events-auto"
              />
            </PopoverContent>
          </Popover>
        </div>
        
        {/* Amount */}
        <div className="mb-4">
          <Label htmlFor="amount" className="text-xs text-gray-500 mb-1 block">Amount*</Label>
          <div className="relative">
            <Input
              id="amount"
              type="number"
              step="0.01"
              min="0"
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
              className="pr-12 bg-white"
              required
            />
            <div className="absolute inset-y-0 right-3 flex items-center pointer-events-none">
              <span className="text-gray-500">PLN</span>
            </div>
          </div>
        </div>
        
        {/* Category */}
        <div className="mb-4">
          <Label htmlFor="category" className="text-xs text-gray-500 mb-1 block">Category</Label>
          <Select value={category} onValueChange={setCategory}>
            <SelectTrigger className="w-full bg-white">
              <SelectValue placeholder="Shopping" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="shopping">Shopping</SelectItem>
              <SelectItem value="food">Food & Dining</SelectItem>
              <SelectItem value="transport">Transportation</SelectItem>
              <SelectItem value="entertainment">Entertainment</SelectItem>
              <SelectItem value="utilities">Utilities</SelectItem>
              <SelectItem value="health">Health</SelectItem>
              <SelectItem value="other">Other</SelectItem>
            </SelectContent>
          </Select>
        </div>
        
        {/* Title */}
        <div className="mb-4">
          <Label htmlFor="title" className="text-xs text-gray-500 mb-1 block">Title</Label>
          <Input
            id="title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="bg-white"
            placeholder="Store name or title"
          />
        </div>
        
        {/* Description */}
        <div className="mb-6">
          <Label htmlFor="description" className="text-xs text-gray-500 mb-1 block">Description</Label>
          <Textarea
            id="description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            className="bg-white resize-none"
            placeholder="Add details about the transaction"
            rows={3}
          />
        </div>
        
        {/* Submit button */}
        <Button 
          type="submit" 
          className="w-full bg-primary-600 hover:bg-primary-700 text-white"
        >
          Add Transaction
        </Button>
      </form>
    </div>
  );
};

export default TransactionForm;
