
import React from 'react';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import { 
  MoreHorizontal, 
  Edit2, 
  Trash2 
} from 'lucide-react';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { useIsMobile } from '@/hooks/use-mobile';

type TransactionTableProps = {
  searchTerm: string;
};

// Mock transaction data
const transactions = [
  { id: 1, category: 'Food', title: 'Grocery Shopping', description: 'Weekly groceries', amount: 152.75, date: '2023-11-15' },
  { id: 2, category: 'Bills', title: 'Electricity Bill', description: 'October bill', amount: 98.50, date: '2023-11-10' },
  { id: 3, category: 'Transport', title: 'Gas Station', description: 'Fuel for car', amount: 120.25, date: '2023-11-08' },
  { id: 4, category: 'Entertainment', title: 'Movie Tickets', description: 'Weekend movie', amount: 45.00, date: '2023-11-05' },
  { id: 5, category: 'Shopping', title: 'New Shoes', description: 'Running shoes', amount: 89.99, date: '2023-11-03' },
  { id: 6, category: 'Health', title: 'Pharmacy', description: 'Medicine', amount: 32.50, date: '2023-11-01' },
];

const TransactionTable = ({ searchTerm }: TransactionTableProps) => {
  const isMobile = useIsMobile();
  
  // Filter transactions based on search term
  const filteredTransactions = searchTerm 
    ? transactions.filter(t => 
        t.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        t.category.toLowerCase().includes(searchTerm.toLowerCase()) ||
        t.description.toLowerCase().includes(searchTerm.toLowerCase())
      )
    : transactions;

  // Mobile card view
  if (isMobile) {
    return (
      <div className="space-y-4 mt-4">
        {filteredTransactions.map((transaction) => (
          <div 
            key={transaction.id} 
            className="bg-white rounded-lg p-4 shadow-sm border border-gray-100"
          >
            <div className="flex justify-between items-start mb-2">
              <div>
                <h3 className="font-medium">{transaction.title}</h3>
                <p className="text-xs text-gray-500">{transaction.date}</p>
              </div>
              <div className="font-bold text-right">
                {transaction.amount} PLN
              </div>
            </div>
            
            <div className="flex justify-between items-center">
              <span className="text-xs py-1 px-2 bg-gray-100 rounded-full">
                {transaction.category}
              </span>
              
              <DropdownMenu>
                <DropdownMenuTrigger className="focus:outline-none">
                  <MoreHorizontal className="h-5 w-5 text-gray-500" />
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end">
                  <DropdownMenuItem className="flex items-center gap-2">
                    <Edit2 className="h-4 w-4" />
                    Edit
                  </DropdownMenuItem>
                  <DropdownMenuItem className="text-red-600 flex items-center gap-2">
                    <Trash2 className="h-4 w-4" />
                    Delete
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </div>
          </div>
        ))}
        
        {filteredTransactions.length === 0 && (
          <div className="text-center py-8 text-gray-500">
            No transactions found
          </div>
        )}
      </div>
    );
  }

  // Desktop table view
  return (
    <div className="bg-white rounded-lg shadow-sm border border-gray-100 overflow-hidden">
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead className="w-[150px]">CATEGORY</TableHead>
            <TableHead className="w-[250px]">TITLE</TableHead>
            <TableHead className="hidden md:table-cell w-[250px]">DESCRIPTION</TableHead>
            <TableHead className="text-right w-[120px]">AMOUNT</TableHead>
            <TableHead className="w-[50px]"></TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {filteredTransactions.map((transaction) => (
            <TableRow key={transaction.id}>
              <TableCell className="font-medium">{transaction.category}</TableCell>
              <TableCell>{transaction.title}</TableCell>
              <TableCell className="hidden md:table-cell">{transaction.description}</TableCell>
              <TableCell className="text-right">{transaction.amount} PLN</TableCell>
              <TableCell>
                <DropdownMenu>
                  <DropdownMenuTrigger className="focus:outline-none">
                    <MoreHorizontal className="h-5 w-5 text-gray-500" />
                  </DropdownMenuTrigger>
                  <DropdownMenuContent align="end">
                    <DropdownMenuItem className="flex items-center gap-2">
                      <Edit2 className="h-4 w-4" />
                      Edit
                    </DropdownMenuItem>
                    <DropdownMenuItem className="text-red-600 flex items-center gap-2">
                      <Trash2 className="h-4 w-4" />
                      Delete
                    </DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              </TableCell>
            </TableRow>
          ))}
          
          {filteredTransactions.length === 0 && (
            <TableRow>
              <TableCell colSpan={5} className="text-center py-8 text-gray-500">
                No transactions found
              </TableCell>
            </TableRow>
          )}
        </TableBody>
      </Table>
    </div>
  );
};

export default TransactionTable;
