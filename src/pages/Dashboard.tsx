
import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Outlet } from 'react-router-dom';
import DashboardLayout from '@/components/dashboard/DashboardLayout';

const Dashboard = () => {
  return (
    <>
      <Helmet>
        <title>Dashboard - SPENDLESS</title>
        <meta name="description" content="Manage your budgets and transactions with SPENDLESS dashboard" />
        <link rel="canonical" href="https://spendless.com/dashboard" />
      </Helmet>
      <DashboardLayout>
        <Outlet />
      </DashboardLayout>
    </>
  );
};

export default Dashboard;
