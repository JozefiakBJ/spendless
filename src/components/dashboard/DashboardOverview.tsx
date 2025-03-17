
import React, { useState } from 'react';
import { useI18n } from '@/i18n/I18nContext';
import { 
  ArrowDown, 
  ArrowUp, 
  TrendingUp, 
  ArrowRight, 
  Calendar, 
  DollarSign, 
  CreditCard, 
  AlertCircle,
  BrainCircuit
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
import { Progress } from '@/components/ui/progress';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Legend,
  PieChart,
  Pie,
  Cell,
} from 'recharts';

const DashboardOverview = () => {
  const { t } = useI18n();
  const [timeframe, setTimeframe] = useState('monthly');
  
  // Mock data - in a real app, this would come from API calls
  const balanceSummary = {
    currentBalance: 4250.75,
    monthlyIncome: 5800,
    monthlyExpenses: 3200.50,
    savingsGoalProgress: 65,
    savingsGoal: 10000,
    currentSavings: 6500,
  };
  
  const recentTransactions = [
    { id: 1, name: 'Grocery Store', amount: -125.30, date: '2023-06-10', category: 'Groceries' },
    { id: 2, name: 'Salary', amount: 2900.00, date: '2023-06-01', category: 'Income' },
    { id: 3, name: 'Electricity Bill', amount: -95.20, date: '2023-06-05', category: 'Utilities' },
    { id: 4, name: 'Restaurant', amount: -42.80, date: '2023-06-08', category: 'Dining' },
    { id: 5, name: 'Online Course', amount: -199.99, date: '2023-06-03', category: 'Education' },
  ];
  
  const upcomingBills = [
    { id: 1, name: 'Rent', amount: 1200, dueDate: '2023-06-15' },
    { id: 2, name: 'Internet', amount: 60, dueDate: '2023-06-18' },
    { id: 3, name: 'Phone Bill', amount: 45, dueDate: '2023-06-22' },
  ];
  
  const spendingByCategory = [
    { name: 'Groceries', value: 550 },
    { name: 'Utilities', value: 350 },
    { name: 'Rent', value: 1200 },
    { name: 'Entertainment', value: 250 },
    { name: 'Transportation', value: 300 },
    { name: 'Health', value: 150 },
    { name: 'Other', value: 400 },
  ];
  
  const monthlySpending = [
    { month: 'Jan', expenses: 2950, income: 5800 },
    { month: 'Feb', expenses: 3200, income: 5800 },
    { month: 'Mar', expenses: 2800, income: 5800 },
    { month: 'Apr', expenses: 3500, income: 5800 },
    { month: 'May', expenses: 3100, income: 5800 },
    { month: 'Jun', expenses: 3200, income: 5800 },
  ];

  const budgetTracker = [
    { name: 'Groceries', budget: 600, spent: 550, left: 50 },
    { name: 'Utilities', budget: 400, spent: 350, left: 50 },
    { name: 'Entertainment', budget: 300, spent: 250, left: 50 },
    { name: 'Transportation', budget: 350, spent: 300, left: 50 },
  ];
  
  const aiInsights = [
    "You've spent 15% less on groceries this month compared to last month.",
    "Your electricity bill is higher than usual. Consider checking for energy-saving opportunities.",
    "Based on your spending habits, you could save $200 more per month by reducing dining out expenses.",
    "You're on track to reach your savings goal by October if you maintain your current savings rate."
  ];
  
  // Colors for pie chart
  const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', '#9146FF', '#FF4560', '#775DD0'];

  return (
    <div className="space-y-6">
      {/* Summary Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium text-muted-foreground">Total Balance</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">${balanceSummary.currentBalance.toFixed(2)}</div>
            <div className="flex items-center mt-1 text-xs text-green-600">
              <ArrowUp className="h-4 w-4 mr-1" />
              <span>7.2% from last month</span>
            </div>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium text-muted-foreground">Monthly Income</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">${balanceSummary.monthlyIncome.toFixed(2)}</div>
            <div className="flex items-center mt-1 text-xs text-muted-foreground">
              <TrendingUp className="h-4 w-4 mr-1" />
              <span>Consistent since January</span>
            </div>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium text-muted-foreground">Monthly Expenses</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">${balanceSummary.monthlyExpenses.toFixed(2)}</div>
            <div className="flex items-center mt-1 text-xs text-red-600">
              <ArrowDown className="h-4 w-4 mr-1" />
              <span>4.3% from last month</span>
            </div>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium text-muted-foreground">Savings Goal</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">${balanceSummary.currentSavings} <span className="text-xs text-muted-foreground">/ ${balanceSummary.savingsGoal}</span></div>
            <Progress value={balanceSummary.savingsGoalProgress} className="mt-2" />
            <div className="mt-1 text-xs text-muted-foreground">{balanceSummary.savingsGoalProgress}% to goal</div>
          </CardContent>
        </Card>
      </div>

      {/* Main Content */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Left Column */}
        <div className="lg:col-span-2 space-y-6">
          {/* Spending Overview */}
          <Card>
            <CardHeader className="pb-2 flex flex-row items-center justify-between">
              <div>
                <CardTitle>Spending Overview</CardTitle>
                <CardDescription>Your income and expenses for the past months</CardDescription>
              </div>
              <Tabs defaultValue="monthly" onValueChange={setTimeframe}>
                <TabsList>
                  <TabsTrigger value="monthly">Monthly</TabsTrigger>
                  <TabsTrigger value="yearly">Yearly</TabsTrigger>
                </TabsList>
              </Tabs>
            </CardHeader>
            <CardContent className="pt-4 h-80">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart
                  data={monthlySpending}
                  margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
                >
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="month" />
                  <YAxis />
                  <Tooltip />
                  <Legend />
                  <Bar name="Income" dataKey="income" fill="#4ade80" />
                  <Bar name="Expenses" dataKey="expenses" fill="#f87171" />
                </BarChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>

          {/* Budget Tracker */}
          <Card>
            <CardHeader>
              <CardTitle>Budget Tracker</CardTitle>
              <CardDescription>Your current spending against budget limits</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {budgetTracker.map((item) => (
                  <div key={item.name} className="space-y-1">
                    <div className="flex justify-between text-sm">
                      <span>{item.name}</span>
                      <span>${item.spent} / ${item.budget}</span>
                    </div>
                    <Progress value={(item.spent / item.budget) * 100} />
                    <div className="text-xs text-right text-muted-foreground">
                      ${item.left} left
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
            <CardFooter>
              <Button variant="outline" className="w-full">
                Manage Budgets
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </CardFooter>
          </Card>
        </div>

        {/* Right Column */}
        <div className="space-y-6">
          {/* Categories Pie Chart */}
          <Card>
            <CardHeader>
              <CardTitle>Spending by Category</CardTitle>
              <CardDescription>Where your money is going</CardDescription>
            </CardHeader>
            <CardContent className="h-64">
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie
                    data={spendingByCategory}
                    cx="50%"
                    cy="50%"
                    labelLine={false}
                    label={({ name, percent }) => `${name}: ${(percent * 100).toFixed(0)}%`}
                    outerRadius={80}
                    fill="#8884d8"
                    dataKey="value"
                  >
                    {spendingByCategory.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                    ))}
                  </Pie>
                  <Tooltip formatter={(value) => `$${value}`} />
                </PieChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>

          {/* Recent Transactions */}
          <Card>
            <CardHeader>
              <CardTitle>Recent Transactions</CardTitle>
              <CardDescription>Your latest financial activities</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {recentTransactions.map((transaction) => (
                  <div key={transaction.id} className="flex items-center justify-between border-b pb-2 last:border-0 last:pb-0">
                    <div className="flex items-center space-x-3">
                      <div className={`p-2 rounded-full ${transaction.amount > 0 ? 'bg-green-100' : 'bg-red-100'}`}>
                        {transaction.amount > 0 ? (
                          <ArrowUp className="h-4 w-4 text-green-600" />
                        ) : (
                          <ArrowDown className="h-4 w-4 text-red-600" />
                        )}
                      </div>
                      <div>
                        <div className="font-medium">{transaction.name}</div>
                        <div className="text-xs text-muted-foreground">{transaction.category} • {transaction.date}</div>
                      </div>
                    </div>
                    <div className={`font-medium ${transaction.amount > 0 ? 'text-green-600' : 'text-red-600'}`}>
                      {transaction.amount > 0 ? '+' : ''}{transaction.amount.toFixed(2)}
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
            <CardFooter>
              <Button variant="outline" className="w-full">
                View All Transactions
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </CardFooter>
          </Card>
        </div>
      </div>

      {/* Bottom Row */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Upcoming Bills */}
        <Card>
          <CardHeader>
            <CardTitle>Upcoming Bills</CardTitle>
            <CardDescription>Bills due in the next 30 days</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {upcomingBills.map((bill) => (
                <div key={bill.id} className="flex items-center justify-between border-b pb-2 last:border-0 last:pb-0">
                  <div className="flex items-center space-x-3">
                    <div className="p-2 rounded-full bg-primary-50">
                      <Calendar className="h-4 w-4 text-primary" />
                    </div>
                    <div>
                      <div className="font-medium">{bill.name}</div>
                      <div className="text-xs text-muted-foreground">Due on {bill.dueDate}</div>
                    </div>
                  </div>
                  <div className="font-medium">${bill.amount.toFixed(2)}</div>
                </div>
              ))}
            </div>
          </CardContent>
          <CardFooter>
            <Button variant="outline" className="w-full">
              Manage Bills
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </CardFooter>
        </Card>

        {/* AI Insights */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center">
              <BrainCircuit className="mr-2 h-5 w-5 text-primary" />
              AI-Powered Insights
            </CardTitle>
            <CardDescription>Personalized financial recommendations</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {aiInsights.map((insight, index) => (
                <div key={index} className="flex space-x-3">
                  <div className="p-2 rounded-full bg-primary-50 h-8 w-8 flex items-center justify-center flex-shrink-0">
                    <AlertCircle className="h-4 w-4 text-primary" />
                  </div>
                  <p className="text-sm">{insight}</p>
                </div>
              ))}
            </div>
          </CardContent>
          <CardFooter>
            <Button variant="outline" className="w-full">
              View All Insights
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </CardFooter>
        </Card>
      </div>
    </div>
  );
};

export default DashboardOverview;
