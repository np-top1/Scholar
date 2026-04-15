import React from 'react';
import { Search, Bell, UserCircle } from 'lucide-react';
import { Screen } from '../types';

interface TopBarProps {
  onScreenChange: (screen: Screen) => void;
}

export const TopBar: React.FC<TopBarProps> = ({ onScreenChange }) => {
  return (
    <header className="h-[3.75rem] bg-surface/90 backdrop-blur-[14px] border-b border-surface-container-high/65 flex justify-between items-center px-7 shrink-0 z-10">
      <div className="flex gap-4.5">
        <button className="text-[0.76rem] font-semibold text-primary/48 tracking-tight hover:text-primary transition-colors">Torah</button>
        <button className="text-[0.76rem] font-semibold text-primary/48 tracking-tight hover:text-primary transition-colors">Nevi'im</button>
        <button className="text-[0.76rem] font-semibold text-primary/48 tracking-tight hover:text-primary transition-colors">Ketuvim</button>
      </div>
      
      <div className="flex items-center gap-4.5">
        <div className="relative">
          <input 
            type="text" 
            placeholder="Search verses…" 
            className="bg-transparent border-none border-b border-outline-variant/38 py-0.5 pr-6 text-[0.76rem] w-48 text-primary outline-none focus:border-secondary transition-colors placeholder:text-on-surface-variant/38"
          />
          <Search className="absolute right-0 top-0.5 w-4 h-4 text-on-surface-variant/40" />
        </div>
        <div className="flex gap-2">
          <button className="text-primary opacity-65 hover:opacity-100 transition-opacity">
            <Bell className="w-[19px] h-[19px]" />
          </button>
          <button 
            onClick={() => onScreenChange('account')}
            className="text-primary opacity-65 hover:opacity-100 transition-opacity"
          >
            <UserCircle className="w-[19px] h-[19px]" />
          </button>
        </div>
      </div>
    </header>
  );
};
