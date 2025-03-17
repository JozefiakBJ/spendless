
import React, { useState } from 'react';
import { 
  Plus, 
  Search, 
  Filter, 
  MoreHorizontal, 
  ArrowDown, 
  ArrowUp, 
  Edit, 
  Trash2, 
  FileUp, 
  Download, 
  CreditCard, 
  ChevronDown, 
  Save, 
  X,
  RefreshCw,
  SlidersHorizontal
} from 'lucide-react';
import { useI18n } from '@/i18n/I18nContext';
import { 
  Card, 
  CardContent, 
  CardDescription, 
  CardFooter, 
  CardHeader, 
  CardTitle 
} from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';
import { Label } from '@/components/ui/label';
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/components/ui/popover';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Checkbox } from '@/components/ui/checkbox';

interface Transaction {
  id: number;
  description: string;
  amount: number;
  date: string;
  category: string;
  account: string;
  type: 'income' | 'expense';
  status: 'completed' | 'pending' | 'failed';
  notes?: string;
  attachments?: string[];
}

const TransactionsManagement = () => {
  // Mock data - in a real app, this would come from API calls
  const [transactions, setTransactions] = useState<Transaction[]>([
    {
      id: 1,
      description: "Salary Deposit",
      amount: 3500.00,
      date: "2023-06-01",
      category: "Income",
      account: "Main Checking",
      type: "income",
      status: "completed"
    },
    {
      id: 2,
      description: "Grocery Store",
      amount: 125.30,
      date: "2023-06-03",
      category: "Groceries",
      account: "Credit Card",
      type: "expense",
      status: "completed"
    },
    {
      id: 3,
      description: "Gas Station",
      amount: 45.80,
      date: "2023-06-05",
      category: "Transportation",
      account: "Credit Card",
      type: "expense",
      status: "completed"
    },
    {
      id: 4,
      description: "Subscription",
      amount: 12.99,
      date: "2023-06-07",
      category: "Entertainment",
      account: "Main Checking",
      type: "expense",
      status: "completed"
    },
    {
      id: 5,
      description: "Rent Payment",
      amount: 1200.00,
      date: "2023-06-10",
      category: "Housing",
      account: "Main Checking",
      type: "expense",
      status: "completed"
    },
    {
      id: 6,
      description: "Freelance Work",
      amount: 750.00,
      date: "2023-06-12",
      category: "Income",
      account: "Savings",
      type: "income",
      status: "completed"
    },
    {
      id: 7,
      description: "Restaurant",
      amount: 68.50,
      date: "2023-06-15",
      category: "Dining",
      account: "Credit Card",
      type: "expense",
      status: "completed"
    }
  ]);

  const [search, setSearch] = useState('');
  const [selectedTransactionId, setSelectedTransactionId] = useState<number | null>(null);
  const [openNewTransaction, setOpenNewTransaction] = useState(false);
  const [openFilters, setOpenFilters] = useState(false);
  
  const [newTransaction, setNewTransaction] = useState<Omit<Transaction, 'id'>>({
    description: '',
    amount: 0,
    date: new Date().toISOString().split('T')[0],
    category: '',
    account: '',
    type: 'expense',
    status: 'completed'
  });
  
  const [filters, setFilters] = useState({
    dateFrom: '',
    dateTo: '',
    type: '',
    category: '',
    account: '',
    minAmount: '',
    maxAmount: '',
    status: ''
  });
  
  const categories = [
    "Income", "Groceries", "Transportation", "Entertainment", "Housing", 
    "Dining", "Utilities", "Healthcare", "Education", "Shopping", "Travel", 
    "Personal Care", "Subscriptions", "Gifts", "Other"
  ];
  
  const accounts = [
    "Main Checking", "Savings", "Credit Card", "Investment", "Cash"
  ];

  const handleCreateTransaction = () => {
    const transaction: Transaction = {
      id: transactions.length + 1,
      ...newTransaction
    };
    
    setTransactions([transaction, ...transactions]);
    setOpenNewTransaction(false);
    setNewTransaction({
      description: '',
      amount: 0,
      date: new Date().toISOString().split('T')[0],
      category: '',
      account: '',
      type: 'expense',
      status: 'completed'
    });
  };
  
  const handleDeleteTransaction = (id: number) => {
    setTransactions(transactions.filter(t => t.id !== id));
  };
  
  const applyFilters = () => {
    setOpenFilters(false);
    // In a real app, you would apply these filters to your API request or data
  };

  const filteredTransactions = transactions.filter(t => 
    t.description.toLowerCase().includes(search.toLowerCase()) ||
    t.category.toLowerCase().includes(search.toLowerCase()) ||
    t.account.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <h2 className="text-3xl font-bold">Transactions</h2>
        <div className="flex gap-2 w-full sm:w-auto">
          <Dialog open={openNewTransaction} onOpenChange={setOpenNewTransaction}>
            <DialogTrigger asChild>
              <Button>
                <Plus className="mr-2 h-4 w-4" />
                Add Transaction
              </Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-[500px]">
              <DialogHeader>
                <DialogTitle>Add New Transaction</DialogTitle>
                <DialogDescription>
                  Enter the details of your new transaction.
                </DialogDescription>
              </DialogHeader>
              <div className="grid gap-4 py-4">
                <Tabs defaultValue="basic" className="w-full">
                  <TabsList className="grid w-full grid-cols-2">
                    <TabsTrigger value="basic">Basic Info</TabsTrigger>
                    <TabsTrigger value="details">Additional Details</TabsTrigger>
                  </TabsList>
                  <TabsContent value="basic" className="mt-4 space-y-4">
                    <div className="grid grid-cols-4 items-center gap-4">
                      <Label htmlFor="transaction-type" className="text-right">
                        Type
                      </Label>
                      <Select 
                        value={newTransaction.type} 
                        onValueChange={(value: 'income' | 'expense') => 
                          setNewTransaction({...newTransaction, type: value})
                        }
                      >
                        <SelectTrigger className="col-span-3">
                          <SelectValue placeholder="Select type" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="income">Income</SelectItem>
                          <SelectItem value="expense">Expense</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <div className="grid grid-cols-4 items-center gap-4">
                      <Label htmlFor="transaction-description" className="text-right">
                        Description
                      </Label>
                      <Input
                        id="transaction-description"
                        placeholder="Grocery shopping"
                        className="col-span-3"
                        value={newTransaction.description}
                        onChange={(e) => setNewTransaction({...newTransaction, description: e.target.value})}
                      />
                    </div>
                    <div className="grid grid-cols-4 items-center gap-4">
                      <Label htmlFor="transaction-amount" className="text-right">
                        Amount
                      </Label>
                      <Input
                        id="transaction-amount"
                        type="number"
                        placeholder="0.00"
                        className="col-span-3"
                        value={newTransaction.amount || ''}
                        onChange={(e) => setNewTransaction({...newTransaction, amount: parseFloat(e.target.value)})}
                      />
                    </div>
                    <div className="grid grid-cols-4 items-center gap-4">
                      <Label htmlFor="transaction-date" className="text-right">
                        Date
                      </Label>
                      <Input
                        id="transaction-date"
                        type="date"
                        className="col-span-3"
                        value={newTransaction.date}
                        onChange={(e) => setNewTransaction({...newTransaction, date: e.target.value})}
                      />
                    </div>
                    <div className="grid grid-cols-4 items-center gap-4">
                      <Label htmlFor="transaction-category" className="text-right">
                        Category
                      </Label>
                      <Select 
                        value={newTransaction.category} 
                        onValueChange={(value) => setNewTransaction({...newTransaction, category: value})}
                      >
                        <SelectTrigger className="col-span-3">
                          <SelectValue placeholder="Select category" />
                        </SelectTrigger>
                        <SelectContent>
                          {categories.map(category => (
                            <SelectItem key={category} value={category}>{category}</SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>
                    <div className="grid grid-cols-4 items-center gap-4">
                      <Label htmlFor="transaction-account" className="text-right">
                        Account
                      </Label>
                      <Select 
                        value={newTransaction.account} 
                        onValueChange={(value) => setNewTransaction({...newTransaction, account: value})}
                      >
                        <SelectTrigger className="col-span-3">
                          <SelectValue placeholder="Select account" />
                        </SelectTrigger>
                        <SelectContent>
                          {accounts.map(account => (
                            <SelectItem key={account} value={account}>{account}</SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>
                  </TabsContent>
                  <TabsContent value="details" className="mt-4 space-y-4">
                    <div className="grid grid-cols-4 items-center gap-4">
                      <Label htmlFor="transaction-status" className="text-right">
                        Status
                      </Label>
                      <Select 
                        value={newTransaction.status} 
                        onValueChange={(value: 'completed' | 'pending' | 'failed') => 
                          setNewTransaction({...newTransaction, status: value})
                        }
                      >
                        <SelectTrigger className="col-span-3">
                          <SelectValue placeholder="Select status" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="completed">Completed</SelectItem>
                          <SelectItem value="pending">Pending</SelectItem>
                          <SelectItem value="failed">Failed</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <div className="grid grid-cols-4 items-center gap-4">
                      <Label htmlFor="transaction-notes" className="text-right">
                        Notes
                      </Label>
                      <Input
                        id="transaction-notes"
                        placeholder="Additional details..."
                        className="col-span-3"
                        value={newTransaction.notes || ''}
                        onChange={(e) => setNewTransaction({...newTransaction, notes: e.target.value})}
                      />
                    </div>
                    {/* Add attachment functionality would go here in a real implementation */}
                  </TabsContent>
                </Tabs>
              </div>
              <DialogFooter>
                <Button variant="outline" onClick={() => setOpenNewTransaction(false)}>Cancel</Button>
                <Button onClick={handleCreateTransaction}>Add Transaction</Button>
              </DialogFooter>
            </DialogContent>
          </Dialog>

          <Button variant="outline">
            <FileUp className="mr-2 h-4 w-4" />
            Import
          </Button>
          
          <Button variant="ghost">
            <Download className="mr-2 h-4 w-4" />
            Export
          </Button>
        </div>
      </div>

      {/* Summary Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium text-muted-foreground">Total Income</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-green-600">
              ${transactions.filter(t => t.type === 'income').reduce((sum, t) => sum + t.amount, 0).toFixed(2)}
            </div>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium text-muted-foreground">Total Expenses</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-red-600">
              ${transactions.filter(t => t.type === 'expense').reduce((sum, t) => sum + t.amount, 0).toFixed(2)}
            </div>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium text-muted-foreground">Balance</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">
              ${(
                transactions.filter(t => t.type === 'income').reduce((sum, t) => sum + t.amount, 0) -
                transactions.filter(t => t.type === 'expense').reduce((sum, t) => sum + t.amount, 0)
              ).toFixed(2)}
            </div>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium text-muted-foreground">Total Transactions</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{transactions.length}</div>
          </CardContent>
        </Card>
      </div>

      {/* Filters and search */}
      <div className="flex flex-col sm:flex-row gap-4">
        <div className="relative flex-1">
          <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
          <Input
            placeholder="Search transactions..."
            className="pl-8"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>
        
        <Popover open={openFilters} onOpenChange={setOpenFilters}>
          <PopoverTrigger asChild>
            <Button variant="outline">
              <SlidersHorizontal className="mr-2 h-4 w-4" />
              Filters
            </Button>
          </PopoverTrigger>
          <PopoverContent className="w-80">
            <div className="space-y-4">
              <h4 className="font-medium">Filter Transactions</h4>
              
              <div className="space-y-2">
                <Label htmlFor="filter-date-from">Date From</Label>
                <Input
                  id="filter-date-from"
                  type="date"
                  value={filters.dateFrom}
                  onChange={(e) => setFilters({...filters, dateFrom: e.target.value})}
                />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="filter-date-to">Date To</Label>
                <Input
                  id="filter-date-to"
                  type="date"
                  value={filters.dateTo}
                  onChange={(e) => setFilters({...filters, dateTo: e.target.value})}
                />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="filter-type">Type</Label>
                <Select 
                  value={filters.type} 
                  onValueChange={(value) => setFilters({...filters, type: value})}
                >
                  <SelectTrigger>
                    <SelectValue placeholder="All Types" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="">All Types</SelectItem>
                    <SelectItem value="income">Income</SelectItem>
                    <SelectItem value="expense">Expense</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="filter-category">Category</Label>
                <Select 
                  value={filters.category} 
                  onValueChange={(value) => setFilters({...filters, category: value})}
                >
                  <SelectTrigger>
                    <SelectValue placeholder="All Categories" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="">All Categories</SelectItem>
                    {categories.map(category => (
                      <SelectItem key={category} value={category}>{category}</SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="filter-account">Account</Label>
                <Select 
                  value={filters.account} 
                  onValueChange={(value) => setFilters({...filters, account: value})}
                >
                  <SelectTrigger>
                    <SelectValue placeholder="All Accounts" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="">All Accounts</SelectItem>
                    {accounts.map(account => (
                      <SelectItem key={account} value={account}>{account}</SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
              
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="filter-min-amount">Min Amount</Label>
                  <Input
                    id="filter-min-amount"
                    type="number"
                    placeholder="0"
                    value={filters.minAmount}
                    onChange={(e) => setFilters({...filters, minAmount: e.target.value})}
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="filter-max-amount">Max Amount</Label>
                  <Input
                    id="filter-max-amount"
                    type="number"
                    placeholder="9999"
                    value={filters.maxAmount}
                    onChange={(e) => setFilters({...filters, maxAmount: e.target.value})}
                  />
                </div>
              </div>
              
              <div className="flex justify-between pt-4">
                <Button variant="outline" onClick={() => {
                  setFilters({
                    dateFrom: '',
                    dateTo: '',
                    type: '',
                    category: '',
                    account: '',
                    minAmount: '',
                    maxAmount: '',
                    status: ''
                  });
                }}>
                  Reset
                </Button>
                <Button onClick={applyFilters}>Apply Filters</Button>
              </div>
            </div>
          </PopoverContent>
        </Popover>
        
        <Button variant="ghost" size="icon">
          <RefreshCw className="h-4 w-4" />
        </Button>
      </div>

      {/* Transactions Table */}
      <Card>
        <CardContent className="p-0">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>
                  <span className="flex items-center">
                    Description
                  </span>
                </TableHead>
                <TableHead>
                  <span className="flex items-center">
                    Amount
                  </span>
                </TableHead>
                <TableHead>
                  <span className="flex items-center">
                    Date
                  </span>
                </TableHead>
                <TableHead>
                  <span className="flex items-center">
                    Category
                  </span>
                </TableHead>
                <TableHead>
                  <span className="flex items-center">
                    Account
                  </span>
                </TableHead>
                <TableHead>
                  <span className="flex items-center">
                    Status
                  </span>
                </TableHead>
                <TableHead className="text-right">Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {filteredTransactions.length === 0 ? (
                <TableRow>
                  <TableCell colSpan={7} className="text-center py-8 text-muted-foreground">
                    No transactions found
                  </TableCell>
                </TableRow>
              ) : (
                filteredTransactions.map((transaction) => (
                  <TableRow key={transaction.id}>
                    <TableCell>
                      <div className="flex items-center space-x-3">
                        <div className={`p-2 rounded-full ${transaction.type === 'income' ? 'bg-green-100' : 'bg-red-100'}`}>
                          {transaction.type === 'income' ? (
                            <ArrowUp className="h-4 w-4 text-green-600" />
                          ) : (
                            <ArrowDown className="h-4 w-4 text-red-600" />
                          )}
                        </div>
                        <span className="font-medium">{transaction.description}</span>
                      </div>
                    </TableCell>
                    <TableCell className={transaction.type === 'income' ? 'text-green-600' : 'text-red-600'}>
                      {transaction.type === 'income' ? '+' : '-'}${transaction.amount.toFixed(2)}
                    </TableCell>
                    <TableCell>{transaction.date}</TableCell>
                    <TableCell>{transaction.category}</TableCell>
                    <TableCell>{transaction.account}</TableCell>
                    <TableCell>
                      <span className={`px-2 py-1 rounded-full text-xs font-medium
                        ${transaction.status === 'completed' ? 'bg-green-100 text-green-800' : 
                          transaction.status === 'pending' ? 'bg-yellow-100 text-yellow-800' : 
                          'bg-red-100 text-red-800'}`}>
                        {transaction.status}
                      </span>
                    </TableCell>
                    <TableCell className="text-right">
                      <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                          <Button variant="ghost" size="sm">
                            <MoreHorizontal className="h-4 w-4" />
                          </Button>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent align="end">
                          <DropdownMenuLabel>Actions</DropdownMenuLabel>
                          <DropdownMenuSeparator />
                          <DropdownMenuItem>
                            <Edit className="mr-2 h-4 w-4" />
                            Edit
                          </DropdownMenuItem>
                          <DropdownMenuItem onClick={() => handleDeleteTransaction(transaction.id)}>
                            <Trash2 className="mr-2 h-4 w-4" />
                            Delete
                          </DropdownMenuItem>
                        </DropdownMenuContent>
                      </DropdownMenu>
                    </TableCell>
                  </TableRow>
                ))
              )}
            </TableBody>
          </Table>
        </CardContent>
        <CardFooter className="flex justify-between border-t p-4">
          <div className="text-sm text-muted-foreground">
            Showing {filteredTransactions.length} of {transactions.length} transactions
          </div>
          <div className="flex items-center space-x-2">
            <Button variant="outline" size="sm" disabled>
              Previous
            </Button>
            <Button variant="outline" size="sm">
              Next
            </Button>
          </div>
        </CardFooter>
      </Card>
    </div>
  );
};

export default TransactionsManagement;
