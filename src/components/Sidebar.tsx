import React from 'react';
import { 
  LayoutDashboard, 
  BookOpen, 
  Library, 
  Youtube, 
  Settings, 
  HelpCircle 
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
  ];

  return (
    <aside className="h-screen w-64 fixed left-0 top-0 bg-surface border-r border-outline-variant/10 flex flex-col py-8 z-50">
      <div className="px-6 mb-10">
        <h1 className="text-xl font-bold tracking-tight text-primary font-headline">The Scholarly Sanctuary</h1>
        <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-secondary mt-1">The Living Archive</p>
      </div>

      <nav className="flex-1 space-y-1">
        {navItems.map((item) => {
          const Icon = item.icon;
          const isActive = currentScreen === item.id;
          return (
            <button
              key={item.id}
              onClick={() => onScreenChange(item.id as Screen)}
              className={`w-full flex items-center px-6 py-3 transition-all duration-300 group ${
                isActive 
                  ? 'text-secondary border-l-4 border-secondary bg-secondary/5 font-bold' 
                  : 'text-primary/70 hover:text-primary hover:bg-surface-container-high border-l-4 border-transparent'
              }`}
            >
              <Icon className={`mr-3 w-5 h-5 ${isActive ? 'text-secondary' : 'text-primary/50 group-hover:text-primary'}`} />
              <span className="font-headline text-sm">{item.label}</span>
            </button>
          );
        })}
      </nav>

      <div className="mt-auto px-6 pt-6 border-t border-outline-variant/10">
        <div className="flex items-center gap-3 mb-6">
          <img 
            alt="Rabbi Ariel Azaria" 
            className="w-10 h-10 rounded-full border border-secondary/20 object-cover" 
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuD_l0QudZlZhL4jsBqgr-e0Uc8nVHZlrpz9ghT1LIp2E0YGH4k6Ll0ehd5Slf--nfuM1OCeKuQmPc1noJO5nuD9GJiUfR4u_wiIGcczbaIcte9IH1OOo9nNSYpJMi_6Zz1DAqKqsyu4w6agc3skI7ahS8zOhz3NA0lgTOhDz__0v528cdusugGjU0J2CIHIvNFxS8_D_6dKELs7F0DH_MjFrx0TkFE3yDDbcRXG8UT7kZIE2PdN8D3Zm4ELh_EMouPTrJynHFrq2PA"
          />
          <div>
            <p className="text-sm font-bold text-primary">Rabbi Ariel Azaria</p>
            <p className="text-[10px] text-on-surface-variant font-bold uppercase tracking-wider">Lead Scholar</p>
          </div>
        </div>
        <div className="space-y-1">
          <button className="w-full flex items-center text-primary/70 text-xs px-2 py-2 hover:text-primary transition-colors">
            <Settings className="mr-2 w-4 h-4" />
            Settings
          </button>
          <button className="w-full flex items-center text-primary/70 text-xs px-2 py-2 hover:text-primary transition-colors">
            <HelpCircle className="mr-2 w-4 h-4" />
            Support
          </button>
        </div>
      </div>
    </aside>
  );
};
