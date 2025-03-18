
import React from 'react';
import { SidebarProvider } from '@/contexts/SidebarContext';
import DashboardSidebar from '@/components/dashboard/DashboardSidebar';
import TransactionsView from '@/components/dashboard/TransactionsView';

const Dashboard = () => {
  return (
    <SidebarProvider>
      <div className="flex w-full min-h-screen bg-[#f9f5eb]">
        <DashboardSidebar />
        <TransactionsView />
      </div>
    </SidebarProvider>
  );
};

export default Dashboard;
