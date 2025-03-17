
import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Outlet, useLocation } from 'react-router-dom';
import DashboardLayout from '@/components/dashboard/DashboardLayout';
import DashboardOverview from '@/components/dashboard/DashboardOverview';
import BudgetsManagement from '@/components/dashboard/BudgetsManagement';
import TransactionsManagement from '@/components/dashboard/TransactionsManagement';
import SettingsManagement from '@/components/dashboard/SettingsManagement';
import AIInsights from '@/components/dashboard/AIInsights';

const Dashboard = () => {
  const location = useLocation();
  
  // Determine which component to render based on the current path
  const renderDashboardContent = () => {
    const path = location.pathname;
    
    if (path === '/dashboard') {
      return <DashboardOverview />;
    } else if (path === '/dashboard/budgets') {
      return <BudgetsManagement />;
    } else if (path === '/dashboard/transactions') {
      return <TransactionsManagement />;
    } else if (path === '/dashboard/settings') {
      return <SettingsManagement />;
    } else if (path === '/dashboard/ai-insights') {
      return <AIInsights />;
    } else {
      // For other routes that don't have a specific component yet
      return <Outlet />;
    }
  };
  
  return (
    <>
      <Helmet>
        <title>Dashboard - SPENDLESS</title>
        <meta name="description" content="Manage your budgets and transactions with SPENDLESS dashboard" />
        <link rel="canonical" href="https://spendless.com/dashboard" />
      </Helmet>
      <DashboardLayout>
        {renderDashboardContent()}
      </DashboardLayout>
    </>
  );
};

export default Dashboard;
