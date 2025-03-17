
import React, { useState } from 'react';
import { 
  BrainCircuit, 
  TrendingUp, 
  TrendingDown, 
  PieChart, 
  Wallet, 
  BadgeDollarSign, 
  CalendarClock, 
  ArrowRight,
  Search
} from 'lucide-react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
import { Button } from '@/components/ui/button';
import { 
  BarChart, 
  Bar, 
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip, 
  ResponsiveContainer, 
  LineChart, 
  Line
} from 'recharts';
import { 
  ChartContainer, 
  ChartTooltip, 
  ChartTooltipContent
} from '@/components/ui/chart';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Input } from '@/components/ui/input';

// Mock data for charts and insights
const monthlySpendingData = [
  { month: 'Jan', amount: 2300, category: 'All' },
  { month: 'Feb', amount: 2100, category: 'All' },
  { month: 'Mar', amount: 2800, category: 'All' },
  { month: 'Apr', amount: 2600, category: 'All' },
  { month: 'May', amount: 2900, category: 'All' },
  { month: 'Jun', amount: 2400, category: 'All' },
];

const categorySpendingData = [
  { name: 'Housing', value: 1200, fill: '#8884d8' },
  { name: 'Food', value: 500, fill: '#82ca9d' },
  { name: 'Transport', value: 300, fill: '#ffc658' },
  { name: 'Entertainment', value: 200, fill: '#ff8042' },
  { name: 'Others', value: 200, fill: '#0088fe' },
];

const budgetForecastData = [
  { month: 'Jul', forecast: 2500, actual: null },
  { month: 'Aug', forecast: 2600, actual: null },
  { month: 'Sep', forecast: 2700, actual: null },
];

const savingPotentialData = [
  { category: 'Coffee', amount: 120, description: 'Reduce coffee purchases by 50%' },
  { category: 'Subscriptions', amount: 80, description: 'Cancel unused streaming services' },
  { category: 'Takeout', amount: 200, description: 'Cook at home twice more per week' },
  { category: 'Transport', amount: 150, description: 'Use public transport instead of taxi' },
];

const chartConfig = {
  expenses: {
    label: 'Expenses',
    theme: {
      light: 'hsl(var(--chart-1))',
      dark: 'hsl(var(--chart-1))'
    }
  },
  income: {
    label: 'Income',
    theme: {
      light: 'hsl(var(--chart-2))',
      dark: 'hsl(var(--chart-2))'
    }
  },
  forecast: {
    label: 'Forecast',
    theme: {
      light: 'hsl(var(--chart-3))',
      dark: 'hsl(var(--chart-3))'
    }
  }
};

const AIInsights = () => {
  const [selectedInsightType, setSelectedInsightType] = useState('spending');
  const [askAiInput, setAskAiInput] = useState('');

  const handleAskAi = () => {
    // In a real app, this would trigger an API call to a backend AI service
    console.log('Asking AI:', askAiInput);
    // Reset input after sending
    setAskAiInput('');
  };

  return (
    <div className="space-y-6">
      {/* Header with AI Query Input */}
      <Card>
        <CardHeader className="bg-primary-50/50 border-b pb-3">
          <div className="flex items-center justify-between">
            <CardTitle className="text-xl flex items-center">
              <BrainCircuit className="mr-2 h-5 w-5 text-primary" />
              AI Financial Assistant
            </CardTitle>
          </div>
          <CardDescription>
            Ask anything about your finances or get personalized recommendations
          </CardDescription>
        </CardHeader>
        <CardContent className="pt-4">
          <div className="flex gap-3">
            <Input 
              placeholder="Ask about your spending, saving goals, or budget recommendations..." 
              className="flex-1"
              value={askAiInput}
              onChange={(e) => setAskAiInput(e.target.value)}
              onKeyDown={(e) => e.key === 'Enter' && handleAskAi()}
            />
            <Button onClick={handleAskAi}>
              <Search className="mr-2 h-4 w-4" />
              Ask AI
            </Button>
          </div>
        </CardContent>
      </Card>

      {/* Insights Tabs */}
      <Tabs defaultValue="spending" onValueChange={setSelectedInsightType}>
        <TabsList className="grid grid-cols-4 mb-4">
          <TabsTrigger value="spending">Spending Analysis</TabsTrigger>
          <TabsTrigger value="patterns">Pattern Detection</TabsTrigger>
          <TabsTrigger value="recommendations">Recommendations</TabsTrigger>
          <TabsTrigger value="forecasts">Forecasts</TabsTrigger>
        </TabsList>

        {/* Spending Analysis Tab */}
        <TabsContent value="spending" className="space-y-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {/* Monthly Spending Trends */}
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Monthly Spending Trends</CardTitle>
                <CardDescription>AI analysis of your spending patterns over time</CardDescription>
              </CardHeader>
              <CardContent>
                <ChartContainer config={chartConfig} className="h-64">
                  <BarChart data={monthlySpendingData}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="month" />
                    <YAxis />
                    <ChartTooltip content={<ChartTooltipContent />} />
                    <Bar dataKey="amount" name="expenses" fill="var(--color-expenses)" radius={[4, 4, 0, 0]} />
                  </BarChart>
                </ChartContainer>
              </CardContent>
              <CardFooter>
                <p className="text-sm text-muted-foreground">
                  Your spending has increased by 12% in the last 3 months
                </p>
              </CardFooter>
            </Card>

            {/* Category Breakdown */}
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Category Analysis</CardTitle>
                <CardDescription>
                  AI breakdown of your top spending categories
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {categorySpendingData.map((category) => (
                    <div key={category.name} className="space-y-1">
                      <div className="flex justify-between text-sm">
                        <span>{category.name}</span>
                        <span className="font-medium">${category.value}</span>
                      </div>
                      <Progress 
                        value={category.value / 24} 
                        className="h-2"
                        style={{ backgroundColor: `${category.fill}30` }}
                        indicatorClassName={`bg-[${category.fill}]`}
                      />
                    </div>
                  ))}
                </div>
              </CardContent>
              <CardFooter>
                <p className="text-sm text-muted-foreground">
                  <TrendingUp className="inline h-4 w-4 mr-1" /> 
                  Housing expenses are 15% higher than average for your income level
                </p>
              </CardFooter>
            </Card>
          </div>
        </TabsContent>

        {/* Pattern Detection Tab */}
        <TabsContent value="patterns" className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Unusual Spending Card */}
            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-lg flex items-center">
                  <TrendingUp className="mr-2 h-5 w-5 text-yellow-500" />
                  Unusual Spending
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm">
                  Your restaurant spending increased by 35% this month compared to your 3-month average.
                </p>
              </CardContent>
              <CardFooter className="pt-0">
                <Button variant="link" className="p-0 h-auto">
                  View Details <ArrowRight className="ml-1 h-4 w-4" />
                </Button>
              </CardFooter>
            </Card>

            {/* Recurring Expenses Card */}
            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-lg flex items-center">
                  <CalendarClock className="mr-2 h-5 w-5 text-blue-500" />
                  Recurring Expenses
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm">
                  AI detected 5 subscription services costing a total of $87.45 monthly.
                </p>
              </CardContent>
              <CardFooter className="pt-0">
                <Button variant="link" className="p-0 h-auto">
                  Review Subscriptions <ArrowRight className="ml-1 h-4 w-4" />
                </Button>
              </CardFooter>
            </Card>

            {/* Spending Habits Card */}
            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-lg flex items-center">
                  <PieChart className="mr-2 h-5 w-5 text-green-500" />
                  Spending Habits
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm">
                  You tend to spend 30% more on weekends than weekdays, primarily on entertainment.
                </p>
              </CardContent>
              <CardFooter className="pt-0">
                <Button variant="link" className="p-0 h-auto">
                  Explore Patterns <ArrowRight className="ml-1 h-4 w-4" />
                </Button>
              </CardFooter>
            </Card>
          </div>
        </TabsContent>

        {/* Recommendations Tab */}
        <TabsContent value="recommendations" className="space-y-6">
          <div className="grid grid-cols-1 gap-6">
            {/* Savings Potential */}
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Saving Opportunities</CardTitle>
                <CardDescription>
                  AI-identified opportunities to reduce expenses
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {savingPotentialData.map((item, index) => (
                    <div key={index} className="flex justify-between items-center border-b pb-3 last:border-0 last:pb-0">
                      <div>
                        <h4 className="font-medium">{item.category}</h4>
                        <p className="text-sm text-muted-foreground">{item.description}</p>
                      </div>
                      <div className="text-primary font-medium">
                        ${item.amount} / month
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
              <CardFooter>
                <p className="text-sm text-muted-foreground">
                  <BadgeDollarSign className="inline h-4 w-4 mr-1" /> 
                  Potential monthly savings: $550 by following all recommendations
                </p>
              </CardFooter>
            </Card>

            {/* Budget Recommendations */}
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Smart Budget Adjustments</CardTitle>
                <CardDescription>
                  AI suggestions to optimize your budget categories
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex justify-between items-center border-b pb-3">
                    <div>
                      <h4 className="font-medium">Food & Groceries</h4>
                      <p className="text-sm text-muted-foreground">Increase budget by 10% to match actual spending</p>
                    </div>
                    <Button size="sm" variant="outline">Apply</Button>
                  </div>
                  <div className="flex justify-between items-center border-b pb-3">
                    <div>
                      <h4 className="font-medium">Entertainment</h4>
                      <p className="text-sm text-muted-foreground">Reduce budget by 15% to align with financial goals</p>
                    </div>
                    <Button size="sm" variant="outline">Apply</Button>
                  </div>
                  <div className="flex justify-between items-center">
                    <div>
                      <h4 className="font-medium">Savings</h4>
                      <p className="text-sm text-muted-foreground">Increase monthly allocation by $100 to meet goal timeframe</p>
                    </div>
                    <Button size="sm" variant="outline">Apply</Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        {/* Forecasts Tab */}
        <TabsContent value="forecasts" className="space-y-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {/* Spending Forecast */}
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">3-Month Spending Forecast</CardTitle>
                <CardDescription>Based on your historical patterns and upcoming bills</CardDescription>
              </CardHeader>
              <CardContent>
                <ChartContainer config={chartConfig} className="h-64">
                  <LineChart data={[...monthlySpendingData, ...budgetForecastData]}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="month" />
                    <YAxis />
                    <ChartTooltip content={<ChartTooltipContent />} />
                    <Line 
                      type="monotone" 
                      dataKey="amount" 
                      name="expenses" 
                      strokeWidth={2} 
                      stroke="var(--color-expenses)"
                      dot={{ r: 4 }}
                    />
                    <Line 
                      type="monotone" 
                      dataKey="forecast" 
                      name="forecast" 
                      strokeWidth={2} 
                      stroke="var(--color-forecast)"
                      strokeDasharray="5 5"
                      dot={{ r: 4 }}
                    />
                  </LineChart>
                </ChartContainer>
              </CardContent>
              <CardFooter>
                <p className="text-sm text-muted-foreground">
                  <TrendingUp className="inline h-4 w-4 mr-1" /> 
                  Predicted 5% gradual increase in spending over next 3 months
                </p>
              </CardFooter>
            </Card>

            {/* Financial Insights */}
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">AI Financial Insights</CardTitle>
                <CardDescription>Predictive analysis of your financial future</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="border-l-4 border-blue-500 pl-3 py-1">
                    <h4 className="font-medium">Savings Goal Projection</h4>
                    <p className="text-sm text-muted-foreground">
                      At your current saving rate, you'll reach your vacation fund goal in approximately 8 months.
                    </p>
                  </div>
                  <div className="border-l-4 border-yellow-500 pl-3 py-1">
                    <h4 className="font-medium">Cash Flow Warning</h4>
                    <p className="text-sm text-muted-foreground">
                      Your September cash flow may be tight due to upcoming annual insurance payment.
                    </p>
                  </div>
                  <div className="border-l-4 border-green-500 pl-3 py-1">
                    <h4 className="font-medium">Investment Opportunity</h4>
                    <p className="text-sm text-muted-foreground">
                      Based on your risk profile and cash reserves, you could increase retirement contributions by 3%.
                    </p>
                  </div>
                </div>
              </CardContent>
              <CardFooter>
                <Button variant="outline" className="w-full">
                  <Wallet className="mr-2 h-4 w-4" /> 
                  Generate Comprehensive Financial Report
                </Button>
              </CardFooter>
            </Card>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default AIInsights;
