
import React from 'react';
import { 
  SidebarProvider, 
  Sidebar, 
  SidebarContent,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuItem,
  SidebarMenuButton,
  SidebarFooter
} from '@/components/ui/sidebar';
import { 
  HomeIcon, 
  CreditCard, 
  PieChart, 
  Settings, 
  HelpCircle,
  LogOut 
} from 'lucide-react';
import TransactionsView from '@/components/dashboard/TransactionsView';
import NavbarLogo from '@/components/navbar/NavbarLogo';

const Dashboard = () => {
  return (
    <SidebarProvider>
      <div className="flex w-full min-h-screen bg-[#f9f5eb]">
        <Sidebar>
          <SidebarHeader className="px-2 py-4">
            <NavbarLogo />
          </SidebarHeader>
          
          <SidebarContent>
            <SidebarMenu>
              <SidebarMenuItem>
                <SidebarMenuButton tooltip="Dashboard">
                  <HomeIcon />
                  <span>Dashboard</span>
                </SidebarMenuButton>
              </SidebarMenuItem>
              
              <SidebarMenuItem>
                <SidebarMenuButton tooltip="Transactions" isActive>
                  <CreditCard />
                  <span>Transactions</span>
                </SidebarMenuButton>
              </SidebarMenuItem>
              
              <SidebarMenuItem>
                <SidebarMenuButton tooltip="Analytics">
                  <PieChart />
                  <span>Analytics</span>
                </SidebarMenuButton>
              </SidebarMenuItem>
              
              <SidebarMenuItem>
                <SidebarMenuButton tooltip="Settings">
                  <Settings />
                  <span>Settings</span>
                </SidebarMenuButton>
              </SidebarMenuItem>
              
              <SidebarMenuItem>
                <SidebarMenuButton tooltip="Help">
                  <HelpCircle />
                  <span>Help</span>
                </SidebarMenuButton>
              </SidebarMenuItem>
            </SidebarMenu>
          </SidebarContent>
          
          <SidebarFooter>
            <SidebarMenu>
              <SidebarMenuItem>
                <SidebarMenuButton tooltip="Logout">
                  <LogOut />
                  <span>Logout</span>
                </SidebarMenuButton>
              </SidebarMenuItem>
            </SidebarMenu>
          </SidebarFooter>
        </Sidebar>
        
        <TransactionsView />
      </div>
    </SidebarProvider>
  );
};

export default Dashboard;
