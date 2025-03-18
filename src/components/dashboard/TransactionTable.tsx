
import React from 'react';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import { MoreHorizontal } from 'lucide-react';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';

type TransactionTableProps = {
  searchTerm: string;
};

// Mock transaction data
const transactions = [
  { id: 1, category: 'Lorem Ipsum', title: 'Lorem ipsum długi tekst co', description: 'Lorem Ipsum', amount: 202 },
  { id: 2, category: 'Lorem Ipsum', title: 'Lorem ipsum', description: 'Lorem Ipsum', amount: 202 },
  { id: 3, category: 'Lorem Ipsum', title: 'Lorem ipsum', description: 'Lorem Ipsum', amount: 202 },
  { id: 4, category: 'Lorem Ipsum', title: 'Lorem ipsum', description: 'Lorem Ipsum', amount: 202 },
  { id: 5, category: 'Lorem Ipsum', title: 'Lorem ipsum', description: 'Lorem Ipsum', amount: 202 },
  { id: 6, category: 'Lorem Ipsum', title: 'Lorem ipsum', description: 'Lorem Ipsum', amount: 202 },
];

const TransactionTable = ({ searchTerm }: TransactionTableProps) => {
  // Filter transactions based on search term
  const filteredTransactions = searchTerm 
    ? transactions.filter(t => 
        t.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        t.category.toLowerCase().includes(searchTerm.toLowerCase()) ||
        t.description.toLowerCase().includes(searchTerm.toLowerCase())
      )
    : transactions;

  return (
    <div className="bg-white rounded-lg shadow-sm border border-gray-100 overflow-hidden">
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead className="w-[150px]">CATEGORY</TableHead>
            <TableHead className="w-[250px]">TITLE</TableHead>
            <TableHead className="w-[250px]">DESCRIPTION</TableHead>
            <TableHead className="text-right w-[120px]">AMOUNT</TableHead>
            <TableHead className="w-[50px]"></TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {filteredTransactions.map((transaction) => (
            <TableRow key={transaction.id}>
              <TableCell className="font-medium">{transaction.category}</TableCell>
              <TableCell>{transaction.title}</TableCell>
              <TableCell>{transaction.description}</TableCell>
              <TableCell className="text-right">{transaction.amount} PLN</TableCell>
              <TableCell>
                <DropdownMenu>
                  <DropdownMenuTrigger className="focus:outline-none">
                    <MoreHorizontal className="h-5 w-5 text-gray-500" />
                  </DropdownMenuTrigger>
                  <DropdownMenuContent align="end">
                    <DropdownMenuItem>Edit</DropdownMenuItem>
                    <DropdownMenuItem className="text-red-600">Delete</DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
};

export default TransactionTable;
