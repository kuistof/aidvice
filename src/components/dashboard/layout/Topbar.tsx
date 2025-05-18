import React from 'react';
import { Bell, UserCircle, Zap, TrendingUp } from 'lucide-react';

// Example props, would come from user data
interface TopbarProps {
  userName?: string;
  userAvatar?: string;
  notificationsCount?: number;
  currentXP?: number;
  xpToNextLevel?: number;
}

const Topbar: React.FC<TopbarProps> = ({
  userName = "Entrepreneur",
  notificationsCount = 3,
  currentXP = 750,
  xpToNextLevel = 1000,
}) => {
  const xpPercentage = (currentXP / xpToNextLevel) * 100;

  return (
    <header className="bg-white shadow-soft sticky top-0 z-40">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <Zap className="h-7 w-7 text-accent" /> 
            <span className="ml-2 text-xl font-semibold text-neutral-800 hidden sm:inline">Advisor</span>
          </div>

          {/* Center Area - XP Bar Placeholder */}
          <div className="hidden md:flex items-center space-x-2">
            <TrendingUp className="h-5 w-5 text-amber-500" />
            <div className="w-32 bg-neutral-200 rounded-full h-2.5">
              <div 
                className="bg-amber-500 h-2.5 rounded-full transition-all duration-300 ease-out"
                style={{ width: `${xpPercentage}%` }}
              ></div>
            </div>
            <span className="text-xs text-neutral-600 font-medium">{currentXP} / {xpToNextLevel} XP</span>
          </div>

          <div className="flex items-center space-x-3 sm:space-x-4">
            <button 
              className="relative p-1 rounded-full text-neutral-500 hover:text-neutral-700 hover:bg-neutral-100 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-accent"
              aria-label="Notifications"
            >
              <Bell className="h-6 w-6" />
              {notificationsCount > 0 && (
                <span className="absolute top-0 right-0 block h-2.5 w-2.5 rounded-full ring-2 ring-white bg-rose-500" />
              )}
            </button>
            <div className="flex items-center">
                <UserCircle className="h-7 w-7 text-neutral-500 hover:text-neutral-700" />
                {/* <span className="ml-2 text-sm font-medium text-neutral-700 hidden lg:inline">{userName}</span> */}
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Topbar; 