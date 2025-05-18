import React from 'react';
import { LayoutDashboard, Milestone, Library, MessageSquare, Settings, Zap } from 'lucide-react';

interface NavItemProps {
  href?: string; // Optional if it's an action item like AI Assistant toggle
  icon: React.ElementType;
  label: string;
  isActive?: boolean;
  onClick?: () => void; // For action items
}

const NavItem: React.FC<NavItemProps> = ({ href, icon: Icon, label, isActive, onClick }) => {
  const commonClasses = "flex items-center px-3 py-2.5 rounded-lg transition-colors duration-150 ease-in-out";
  const activeClasses = "bg-accent-light text-accent-dark font-medium";
  const inactiveClasses = "text-neutral-600 hover:bg-neutral-200 hover:text-neutral-800";

  if (href) {
    return (
      <a 
        href={href}
        className={`${commonClasses} ${isActive ? activeClasses : inactiveClasses}`}
      >
        <Icon className={`h-5 w-5 mr-3 ${isActive ? 'text-accent-dark' : 'text-neutral-500'}`} />
        <span>{label}</span>
      </a>
    );
  }
  return (
    <button
      onClick={onClick}
      className={`${commonClasses} w-full ${isActive ? activeClasses : inactiveClasses}`}
    >
      <Icon className={`h-5 w-5 mr-3 ${isActive ? 'text-accent-dark' : 'text-neutral-500'}`} />
      <span>{label}</span>
    </button>
  );
  
};

interface SidebarProps {
  onToggleAIAssistant: () => void;
  isAIAssistantActive?: boolean; // To highlight the AI assistant nav item
}

const Sidebar: React.FC<SidebarProps> = ({ onToggleAIAssistant, isAIAssistantActive }) => {
  const currentPath = typeof window !== 'undefined' ? window.location.pathname : '/dashboard';

  const navItems = [
    { href: '/dashboard', icon: LayoutDashboard, label: 'Dashboard' },
    { href: '/milestones', icon: Milestone, label: 'Milestones' },
    { href: '/library', icon: Library, label: 'Resource Library' },
    // Use onClick for AI Assistant to toggle the panel
    { id: 'ai-assistant', icon: MessageSquare, label: 'AI Assistant', action: onToggleAIAssistant, isActiveProp: isAIAssistantActive },
    { href: '/settings', icon: Settings, label: 'Settings' },
  ];

  return (
    <aside className="w-64 bg-white shadow-soft h-screen fixed top-0 left-0 pt-16 flex flex-col z-30">
      {/* Logo area within sidebar, visible when sidebar is not part of Topbar itself */}
      {/* <div className="flex items-center justify-center h-16 border-b border-neutral-200">
        <Zap className="h-8 w-8 text-accent" />
        <span className="ml-2 text-xl font-semibold text-neutral-800">Advisor</span>
      </div> */} 
      {/* This is commented out because Topbar already has a logo. 
          If Topbar and Sidebar were more separate in structure, this could be enabled. 
      */}

      <nav className="flex-grow px-4 py-6 space-y-1.5">
        {navItems.map((item) => (
          <NavItem 
            key={item.id || item.href}
            href={item.href}
            icon={item.icon}
            label={item.label}
            isActive={item.isActiveProp !== undefined ? item.isActiveProp : currentPath === item.href}
            onClick={item.action}
          />
        ))}
      </nav>

      <div className="p-4 border-t border-neutral-200">
        <p className="text-xs text-neutral-500">&copy; 2024 Business Advisor</p>
        <p className="text-xs text-neutral-400 mt-1">Demo Version</p>
      </div>
    </aside>
  );
};

export default Sidebar; 