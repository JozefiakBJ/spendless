
import React from 'react';
import { Link } from 'react-router-dom';
import { ChevronLeft, PiggyBank, LayoutDashboard, BarChart3, Upload, Settings, User } from 'lucide-react';
import { useSidebar } from '@/contexts/SidebarContext';

const DashboardSidebar = () => {
  const { expanded, toggleExpanded } = useSidebar();

  return (
    <div className={`h-screen ${expanded ? 'w-[240px]' : 'w-[80px]'} bg-white border-r border-gray-200 flex flex-col transition-all duration-300`}>
      {/* Top section with logo */}
      <div className="p-4 flex items-center justify-between border-b border-gray-200">
        <Link to="/" className="flex items-center gap-2">
          <PiggyBank className="h-6 w-6 text-primary-700" />
          {expanded && <span className="font-display font-bold text-xl text-primary-700">SPENDLESS</span>}
        </Link>
        <button 
          className="text-gray-500 hover:text-gray-700" 
          onClick={toggleExpanded}
          aria-label={expanded ? "Collapse sidebar" : "Expand sidebar"}
        >
          <ChevronLeft className={`h-5 w-5 transition-transform ${expanded ? '' : 'rotate-180'}`} />
        </button>
      </div>

      {/* Navigation links */}
      <nav className="flex-1 py-6">
        <ul className="space-y-2 px-2">
          <SidebarItem icon={LayoutDashboard} text="Zarządzaj" href="/dashboard" expanded={expanded} active />
          <SidebarItem icon={BarChart3} text="Przeglądaj" href="/dashboard/analytics" expanded={expanded} />
          <SidebarItem icon={Upload} text="Wczytaj wydatki" href="/dashboard/upload" expanded={expanded} />
        </ul>
      </nav>

      {/* Bottom section */}
      <div className="mt-auto border-t border-gray-200">
        <ul className="py-4 px-2 space-y-2">
          <SidebarItem icon={Settings} text="Ustawienia" href="/dashboard/settings" expanded={expanded} />
          <SidebarItem icon={User} text="Andrzej" href="/dashboard/profile" expanded={expanded} />
        </ul>
      </div>
    </div>
  );
};

type SidebarItemProps = {
  icon: React.ElementType;
  text: string;
  href: string;
  expanded: boolean;
  active?: boolean;
};

const SidebarItem = ({ icon: Icon, text, href, expanded, active }: SidebarItemProps) => {
  return (
    <li>
      <Link
        to={href}
        className={`flex items-center gap-3 p-3 rounded-md transition-colors ${
          active
            ? 'bg-primary-100 text-primary-700'
            : 'text-gray-600 hover:bg-gray-100'
        }`}
      >
        <Icon className="h-5 w-5 flex-shrink-0" />
        {expanded && <span>{text}</span>}
      </Link>
    </li>
  );
};

export default DashboardSidebar;
