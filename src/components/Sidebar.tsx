import React from 'react';
import { 
  LayoutDashboard, 
  BookOpen, 
  Library, 
  Youtube, 
  Settings, 
  HelpCircle,
  UserCircle,
  GraduationCap
} from 'lucide-react';
import { Screen } from '../types';

interface SidebarProps {
  currentScreen: Screen;
  onScreenChange: (screen: Screen) => void;
}

export const Sidebar: React.FC<SidebarProps> = ({ currentScreen, onScreenChange }) => {
  const navItems = [
    { id: 'dashboard', label: 'Dashboard', icon: LayoutDashboard },
    { id: 'browser', label: 'Tanakh Browser', icon: BookOpen },
    { id: 'study', label: 'Study Mode', icon: Library },
    { id: 'media', label: 'Media Library', icon: Youtube },
    { id: 'account', label: 'My Account', icon: UserCircle },
  ];

  return (
    <aside className="w-60 shrink-0 h-screen bg-surface border-r border-outline-variant flex flex-col py-6 z-50">
      <div className="px-5 mb-8">
        <h1 className="font-headline text-base font-bold text-primary leading-tight">The Scholarly Sanctuary</h1>
        <p className="text-[9px] font-extrabold uppercase tracking-[0.18em] text-secondary mt-1">The Living Archive</p>
      </div>

      <nav className="flex-1">
        {navItems.map((item) => {
          const Icon = item.icon;
          const isActive = currentScreen === item.id;
          return (
            <button
              key={item.id}
              onClick={() => onScreenChange(item.id as Screen)}
              className={`w-full flex items-center gap-2.5 pl-4.5 py-2.5 font-headline text-[0.85rem] transition-all duration-150 border-l-3 select-none ${
                isActive 
                  ? 'text-secondary font-bold border-secondary bg-secondary/5' 
                  : 'text-primary/60 font-medium border-transparent hover:bg-surface-container-highest hover:text-primary'
              }`}
            >
              <Icon className="w-[18px] h-[18px]" />
              <span>{item.label}</span>
            </button>
          );
        })}
      </nav>

      <div className="px-5 pt-4.5 border-t border-outline-variant mt-auto">
        <div className="flex items-center gap-2.5 mb-3.5">
          <div className="w-9 h-9 rounded-full bg-primary/5 border border-secondary/20 flex items-center justify-center shrink-0">
            <GraduationCap className="w-4 h-4 text-secondary" />
          </div>
          <div>
            <p className="text-[0.8rem] font-bold text-primary font-headline">אריאל עזריה</p>
            <p className="text-[0.62rem] text-on-surface-variant">Lead Scholar</p>
          </div>
        </div>
        <div className="space-y-1">
          <button 
            onClick={() => onScreenChange('settings')}
            className={`w-full flex items-center gap-1.5 text-[0.72rem] p-1.5 rounded transition-colors ${currentScreen === 'settings' ? 'text-secondary font-bold' : 'text-primary/60 hover:text-primary'}`}
          >
            <Settings className="w-[15px] h-[15px]" />
            Settings
          </button>
          <button 
            onClick={() => onScreenChange('support')}
            className={`w-full flex items-center gap-1.5 text-[0.72rem] p-1.5 rounded transition-colors ${currentScreen === 'support' ? 'text-secondary font-bold' : 'text-primary/60 hover:text-primary'}`}
          >
            <HelpCircle className="w-[15px] h-[15px]" />
            Support
          </button>
        </div>
      </div>
    </aside>
  );
};
