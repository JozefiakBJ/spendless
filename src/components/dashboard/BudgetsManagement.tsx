
import React, { useState } from 'react';
import { 
  Plus, 
  Edit, 
  Trash2, 
  Save, 
  X, 
  Wallet, 
  MoreHorizontal, 
  ArrowUpDown, 
  ChevronDown 
} from 'lucide-react';
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
import { Progress } from '@/components/ui/progress';
import { 
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
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
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';
import { Label } from '@/components/ui/label';

interface Budget {
  id: number;
  name: string;
  amount: number;
  spent: number;
  timeframe: string;
  categories: string[];
  createdAt: string;
}

const BudgetsManagement = () => {
  const [budgets, setBudgets] = useState<Budget[]>([
    { 
      id: 1, 
      name: "Monthly Expenses", 
      amount: 3000, 
      spent: 1500, 
      timeframe: "monthly", 
      categories: ["Groceries", "Utilities", "Entertainment", "Transportation"], 
      createdAt: "2023-01-15" 
    },
    { 
      id: 2, 
      name: "Vacation Fund", 
      amount: 5000, 
      spent: 2000, 
      timeframe: "yearly", 
      categories: ["Travel", "Accommodation", "Activities"], 
      createdAt: "2023-02-10" 
    },
    { 
      id: 3, 
      name: "Wedding Savings", 
      amount: 15000, 
      spent: 5000, 
      timeframe: "custom", 
      categories: ["Venue", "Catering", "Attire", "Photography"], 
      createdAt: "2023-03-20" 
    },
    { 
      id: 4, 
      name: "Emergency Fund", 
      amount: 10000, 
      spent: 0, 
      timeframe: "custom", 
      categories: ["Emergency"], 
      createdAt: "2023-04-05" 
    }
  ]);
  
  const [openNewBudget, setOpenNewBudget] = useState(false);
  const [editBudgetId, setEditBudgetId] = useState<number | null>(null);
  
  const [newBudget, setNewBudget] = useState({
    name: "",
    amount: 0,
    timeframe: "monthly",
    categories: [] as string[]
  });
  
  const availableCategories = [
    "Groceries", "Utilities", "Entertainment", "Transportation", 
    "Dining", "Housing", "Healthcare", "Education", "Shopping", 
    "Travel", "Savings", "Emergency", "Investments", "Insurance", 
    "Gifts", "Charity", "Personal Care", "Pets", "Childcare", "Other"
  ];
  
  const handleCreateBudget = () => {
    const newBudgetItem: Budget = {
      id: budgets.length + 1,
      name: newBudget.name,
      amount: newBudget.amount,
      spent: 0,
      timeframe: newBudget.timeframe,
      categories: newBudget.categories,
      createdAt: new Date().toISOString().split('T')[0]
    };
    
    setBudgets([...budgets, newBudgetItem]);
    setNewBudget({
      name: "",
      amount: 0,
      timeframe: "monthly",
      categories: []
    });
    setOpenNewBudget(false);
  };
  
  const handleUpdateBudget = (id: number, field: string, value: any) => {
    setBudgets(budgets.map(budget => 
      budget.id === id ? { ...budget, [field]: value } : budget
    ));
  };
  
  const handleDeleteBudget = (id: number) => {
    setBudgets(budgets.filter(budget => budget.id !== id));
  };
  
  const calculateProgress = (spent: number, amount: number) => {
    return Math.min((spent / amount) * 100, 100);
  };
  
  const getProgressColor = (spent: number, amount: number) => {
    const percentage = (spent / amount) * 100;
    if (percentage < 50) return "bg-green-500";
    if (percentage < 80) return "bg-yellow-500";
    return "bg-red-500";
  };

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h2 className="text-3xl font-bold">Budgets</h2>
        <Dialog open={openNewBudget} onOpenChange={setOpenNewBudget}>
          <DialogTrigger asChild>
            <Button>
              <Plus className="mr-2 h-4 w-4" />
              Create New Budget
            </Button>
          </DialogTrigger>
          <DialogContent className="sm:max-w-[425px]">
            <DialogHeader>
              <DialogTitle>Create New Budget</DialogTitle>
              <DialogDescription>
                Set up a new budget to track your spending in specific categories.
              </DialogDescription>
            </DialogHeader>
            <div className="grid gap-4 py-4">
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="budget-name" className="text-right">
                  Name
                </Label>
                <Input
                  id="budget-name"
                  placeholder="Monthly Expenses"
                  className="col-span-3"
                  value={newBudget.name}
                  onChange={(e) => setNewBudget({...newBudget, name: e.target.value})}
                />
              </div>
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="budget-amount" className="text-right">
                  Amount
                </Label>
                <Input
                  id="budget-amount"
                  type="number"
                  placeholder="1000"
                  className="col-span-3"
                  value={newBudget.amount || ''}
                  onChange={(e) => setNewBudget({...newBudget, amount: parseFloat(e.target.value)})}
                />
              </div>
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="budget-timeframe" className="text-right">
                  Timeframe
                </Label>
                <Select 
                  value={newBudget.timeframe} 
                  onValueChange={(value) => setNewBudget({...newBudget, timeframe: value})}
                >
                  <SelectTrigger className="col-span-3">
                    <SelectValue placeholder="Select a timeframe" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="daily">Daily</SelectItem>
                    <SelectItem value="weekly">Weekly</SelectItem>
                    <SelectItem value="monthly">Monthly</SelectItem>
                    <SelectItem value="yearly">Yearly</SelectItem>
                    <SelectItem value="custom">Custom</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="budget-categories" className="text-right">
                  Categories
                </Label>
                <div className="col-span-3">
                  <Select 
                    onValueChange={(value) => {
                      if (!newBudget.categories.includes(value)) {
                        setNewBudget({
                          ...newBudget, 
                          categories: [...newBudget.categories, value]
                        });
                      }
                    }}
                  >
                    <SelectTrigger>
                      <SelectValue placeholder="Select categories" />
                    </SelectTrigger>
                    <SelectContent>
                      {availableCategories.map(category => (
                        <SelectItem key={category} value={category}>
                          {category}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                  
                  <div className="flex flex-wrap gap-2 mt-2">
                    {newBudget.categories.map(category => (
                      <div 
                        key={category} 
                        className="bg-secondary text-secondary-foreground px-2 py-1 rounded-md text-xs flex items-center"
                      >
                        {category}
                        <button 
                          onClick={() => {
                            setNewBudget({
                              ...newBudget,
                              categories: newBudget.categories.filter(c => c !== category)
                            });
                          }}
                          className="ml-1 text-secondary-foreground/70 hover:text-secondary-foreground"
                        >
                          <X className="h-3 w-3" />
                        </button>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
            <DialogFooter>
              <Button variant="outline" onClick={() => setOpenNewBudget(false)}>Cancel</Button>
              <Button onClick={handleCreateBudget}>Create Budget</Button>
            </DialogFooter>
          </DialogContent>
        </Dialog>
      </div>

      {/* Summary Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium text-muted-foreground">Total Budgets</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{budgets.length}</div>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium text-muted-foreground">Total Budgeted</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">${budgets.reduce((sum, budget) => sum + budget.amount, 0).toFixed(2)}</div>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium text-muted-foreground">Total Spent</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">${budgets.reduce((sum, budget) => sum + budget.spent, 0).toFixed(2)}</div>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium text-muted-foreground">Average Usage</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">
              {budgets.length 
                ? Math.round(budgets.reduce((sum, budget) => sum + (budget.spent / budget.amount), 0) / budgets.length * 100)
                : 0}%
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Budgets Table */}
      <Card>
        <CardHeader>
          <CardTitle>All Budgets</CardTitle>
          <CardDescription>Manage all your budget plans from here</CardDescription>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Name</TableHead>
                <TableHead>Amount</TableHead>
                <TableHead>Spent</TableHead>
                <TableHead>Remaining</TableHead>
                <TableHead>Progress</TableHead>
                <TableHead>Timeframe</TableHead>
                <TableHead>Categories</TableHead>
                <TableHead className="text-right">Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {budgets.map((budget) => (
                <TableRow key={budget.id}>
                  <TableCell className="font-medium">
                    {editBudgetId === budget.id ? (
                      <Input 
                        value={budget.name} 
                        onChange={(e) => handleUpdateBudget(budget.id, 'name', e.target.value)} 
                      />
                    ) : (
                      budget.name
                    )}
                  </TableCell>
                  <TableCell>
                    {editBudgetId === budget.id ? (
                      <Input 
                        type="number" 
                        value={budget.amount} 
                        onChange={(e) => handleUpdateBudget(budget.id, 'amount', parseFloat(e.target.value))} 
                      />
                    ) : (
                      `$${budget.amount.toFixed(2)}`
                    )}
                  </TableCell>
                  <TableCell>${budget.spent.toFixed(2)}</TableCell>
                  <TableCell>${(budget.amount - budget.spent).toFixed(2)}</TableCell>
                  <TableCell>
                    <div className="flex items-center gap-2">
                      <Progress value={calculateProgress(budget.spent, budget.amount)} className="h-2" />
                      <span className="text-xs">{Math.round(calculateProgress(budget.spent, budget.amount))}%</span>
                    </div>
                  </TableCell>
                  <TableCell className="capitalize">
                    {editBudgetId === budget.id ? (
                      <Select 
                        value={budget.timeframe} 
                        onValueChange={(value) => handleUpdateBudget(budget.id, 'timeframe', value)}
                      >
                        <SelectTrigger>
                          <SelectValue />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="daily">Daily</SelectItem>
                          <SelectItem value="weekly">Weekly</SelectItem>
                          <SelectItem value="monthly">Monthly</SelectItem>
                          <SelectItem value="yearly">Yearly</SelectItem>
                          <SelectItem value="custom">Custom</SelectItem>
                        </SelectContent>
                      </Select>
                    ) : (
                      budget.timeframe
                    )}
                  </TableCell>
                  <TableCell>
                    {budget.categories.length > 2 
                      ? `${budget.categories.slice(0, 2).join(', ')}...` 
                      : budget.categories.join(', ')}
                  </TableCell>
                  <TableCell className="text-right">
                    {editBudgetId === budget.id ? (
                      <div className="flex justify-end gap-2">
                        <Button 
                          size="sm" 
                          variant="outline" 
                          onClick={() => setEditBudgetId(null)}
                        >
                          <X className="h-4 w-4" />
                        </Button>
                        <Button 
                          size="sm" 
                          onClick={() => setEditBudgetId(null)}
                        >
                          <Save className="h-4 w-4" />
                        </Button>
                      </div>
                    ) : (
                      <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                          <Button variant="ghost" size="sm">
                            <MoreHorizontal className="h-4 w-4" />
                          </Button>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent align="end">
                          <DropdownMenuLabel>Actions</DropdownMenuLabel>
                          <DropdownMenuSeparator />
                          <DropdownMenuItem onClick={() => setEditBudgetId(budget.id)}>
                            <Edit className="mr-2 h-4 w-4" />
                            Edit
                          </DropdownMenuItem>
                          <DropdownMenuItem onClick={() => handleDeleteBudget(budget.id)}>
                            <Trash2 className="mr-2 h-4 w-4" />
                            Delete
                          </DropdownMenuItem>
                        </DropdownMenuContent>
                      </DropdownMenu>
                    )}
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </div>
  );
};

export default BudgetsManagement;
