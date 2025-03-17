
import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { 
  LayoutDashboard, 
  Wallet, 
  Receipt, 
  PieChart, 
  Settings, 
  FileUp, 
  Users, 
  BrainCircuit,
  FolderPlus,
  Bell,
  LogOut
} from 'lucide-react';
import { useI18n } from '@/i18n/I18nContext';
import { 
  Sidebar, 
  SidebarContent, 
  SidebarFooter, 
  SidebarGroup, 
  SidebarGroupContent, 
  SidebarGroupLabel, 
  SidebarHeader, 
  SidebarMenu, 
  SidebarMenuButton, 
  SidebarMenuItem, 
  SidebarProvider, 
  SidebarTrigger 
} from '@/components/ui/sidebar';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Button } from '@/components/ui/button';

interface DashboardLayoutProps {
  children: React.ReactNode;
}

const DashboardLayout: React.FC<DashboardLayoutProps> = ({ children }) => {
  const { t } = useI18n();
  const navigate = useNavigate();
  const location = useLocation();
  
  // Mock user data - in a real app, this would come from auth context
  const user = {
    name: "Jane Doe",
    email: "jane@example.com",
    avatarUrl: "https://i.pravatar.cc/150?img=5"
  };

  // Define menu items
  const menuItems = [
    {
      title: "Dashboard",
      path: "/dashboard",
      icon: LayoutDashboard,
    },
    {
      title: "Budgets",
      path: "/dashboard/budgets",
      icon: Wallet,
    },
    {
      title: "Transactions",
      path: "/dashboard/transactions",
      icon: Receipt,
    },
    {
      title: "Analysis",
      path: "/dashboard/analysis",
      icon: PieChart,
    },
    {
      title: "Import",
      path: "/dashboard/import",
      icon: FileUp,
    }
  ];
  
  // Additional menu items based on the features section
  const advancedItems = [
    {
      title: "Multiple Budgets",
      path: "/dashboard/multi-budgets",
      icon: FolderPlus,
    },
    {
      title: "Budget Sharing",
      path: "/dashboard/sharing",
      icon: Users,
    },
    {
      title: "AI Insights",
      path: "/dashboard/ai-insights",
      icon: BrainCircuit,
    },
    {
      title: "Notifications",
      path: "/dashboard/notifications",
      icon: Bell,
    },
    {
      title: "Settings",
      path: "/dashboard/settings",
      icon: Settings,
    }
  ];

  const isActive = (path: string) => {
    return location.pathname === path;
  };

  const handleLogout = () => {
    // In a real app, implement real logout logic
    navigate('/');
  };

  return (
    <SidebarProvider>
      <div className="min-h-screen flex w-full bg-gray-50">
        <Sidebar className="border-r border-gray-200">
          <SidebarHeader className="px-6 py-4 border-b">
            <div className="flex items-center">
              <div className="font-bold text-xl text-primary">SPENDLESS</div>
            </div>
          </SidebarHeader>
          
          <SidebarContent>
            {/* User profile section */}
            <div className="px-6 py-4 border-b border-gray-200">
              <div className="flex items-center space-x-3">
                <Avatar>
                  <AvatarImage src={user.avatarUrl} alt={user.name} />
                  <AvatarFallback>{user.name.charAt(0)}</AvatarFallback>
                </Avatar>
                <div className="space-y-1">
                  <p className="text-sm font-medium leading-none">{user.name}</p>
                  <p className="text-xs text-muted-foreground">{user.email}</p>
                </div>
              </div>
            </div>
            
            {/* Main menu */}
            <SidebarGroup>
              <SidebarGroupLabel>Main</SidebarGroupLabel>
              <SidebarGroupContent>
                <SidebarMenu>
                  {menuItems.map((item) => (
                    <SidebarMenuItem key={item.path}>
                      <SidebarMenuButton 
                        onClick={() => navigate(item.path)}
                        className={isActive(item.path) ? "bg-primary/10 text-primary" : ""}
                      >
                        <item.icon className="h-5 w-5" />
                        <span>{item.title}</span>
                      </SidebarMenuButton>
                    </SidebarMenuItem>
                  ))}
                </SidebarMenu>
              </SidebarGroupContent>
            </SidebarGroup>
            
            {/* Advanced menu */}
            <SidebarGroup>
              <SidebarGroupLabel>Advanced</SidebarGroupLabel>
              <SidebarGroupContent>
                <SidebarMenu>
                  {advancedItems.map((item) => (
                    <SidebarMenuItem key={item.path}>
                      <SidebarMenuButton 
                        onClick={() => navigate(item.path)}
                        className={isActive(item.path) ? "bg-primary/10 text-primary" : ""}
                      >
                        <item.icon className="h-5 w-5" />
                        <span>{item.title}</span>
                      </SidebarMenuButton>
                    </SidebarMenuItem>
                  ))}
                </SidebarMenu>
              </SidebarGroupContent>
            </SidebarGroup>
          </SidebarContent>
          
          <SidebarFooter className="px-6 py-4 border-t">
            <Button 
              variant="outline" 
              className="w-full justify-start"
              onClick={handleLogout}
            >
              <LogOut className="mr-2 h-4 w-4" />
              Logout
            </Button>
          </SidebarFooter>
        </Sidebar>
        
        <div className="flex-1 overflow-auto">
          <header className="bg-white border-b border-gray-200 p-4 flex items-center justify-between">
            <SidebarTrigger />
            <h1 className="text-2xl font-bold text-center flex-1">
              {location.pathname === "/dashboard" ? "Dashboard" : 
               location.pathname === "/dashboard/budgets" ? "Budgets" :
               location.pathname === "/dashboard/transactions" ? "Transactions" :
               location.pathname === "/dashboard/analysis" ? "Analysis" :
               location.pathname === "/dashboard/import" ? "Import" :
               location.pathname === "/dashboard/multi-budgets" ? "Multiple Budgets" :
               location.pathname === "/dashboard/sharing" ? "Budget Sharing" :
               location.pathname === "/dashboard/ai-insights" ? "AI Insights" :
               location.pathname === "/dashboard/notifications" ? "Notifications" :
               location.pathname === "/dashboard/settings" ? "Settings" : "Dashboard"}
            </h1>
            <div className="w-10"></div> {/* Spacer to balance the sidebar trigger */}
          </header>
          
          <main className="p-6">
            {children}
          </main>
        </div>
      </div>
    </SidebarProvider>
  );
};

export default DashboardLayout;
