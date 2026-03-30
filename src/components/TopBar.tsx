import React from 'react';
import { Search, Bell, User } from 'lucide-react';

export const TopBar: React.FC = () => {
  return (
    <header className="fixed top-0 right-0 w-[calc(100%-16rem)] h-16 z-40 bg-surface/80 backdrop-blur-md border-b border-outline-variant/10 flex justify-between items-center px-10">
      <div className="flex items-center gap-8">
        <div className="flex gap-6">
          <button className="text-primary/60 hover:text-primary font-body font-semibold tracking-wide text-sm border-b-2 border-transparent hover:border-secondary transition-all pb-1">Torah</button>
          <button className="text-primary/60 hover:text-primary font-body font-semibold tracking-wide text-sm border-b-2 border-transparent hover:border-secondary transition-all pb-1">Nevi'im</button>
          <button className="text-primary/60 hover:text-primary font-body font-semibold tracking-wide text-sm border-b-2 border-transparent hover:border-secondary transition-all pb-1">Ketuvim</button>
        </div>
      </div>

      <div className="flex items-center gap-6">
        <div className="relative group">
          <input 
            className="bg-transparent border-0 border-b border-outline-variant/30 focus:ring-0 focus:border-secondary transition-all duration-300 w-64 py-1 text-sm font-body placeholder:text-on-surface-variant/40" 
            placeholder="Search Verses" 
            type="text"
          />
          <Search className="absolute right-0 top-1 w-4 h-4 text-on-surface-variant group-focus-within:text-secondary transition-colors" />
        </div>
        <div className="flex gap-4">
          <button className="text-primary/70 hover:text-primary transition-colors">
            <Bell className="w-5 h-5" />
          </button>
          <button className="text-primary/70 hover:text-primary transition-colors">
            <User className="w-5 h-5" />
          </button>
        </div>
      </div>
    </header>
  );
};
