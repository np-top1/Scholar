import React from 'react';
import { motion } from 'motion/react';
import { Settings as SettingsIcon, Bell, Shield, Globe, Moon, Volume2 } from 'lucide-react';

export const Settings: React.FC = () => {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="py-6 px-7 max-w-[74rem] mx-auto space-y-10 pb-32"
    >
      <div className="mb-6">
        <h2 className="font-headline text-[1.65rem] font-bold text-primary mb-1">Settings</h2>
        <p className="text-[0.78rem] text-on-surface-variant">Manage your account preferences, notifications, and application settings.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="space-y-6">
          <section className="bg-surface border border-outline-variant rounded-lg p-6 shadow-s0">
            <h3 className="font-headline text-[1.1rem] font-bold text-primary mb-6 flex items-center gap-2.5">
              <Bell className="w-5 h-5 text-secondary" />
              Notifications
            </h3>
            <div className="space-y-5">
              {[
                { label: 'Daily Study Reminder', desc: 'Get a nudge to continue your daily verse study.' },
                { label: 'New Shiurim Alerts', desc: 'Be notified when Rabbi Azaria uploads new content.' },
                { label: 'Community Updates', desc: 'Stay informed about new features and events.' },
              ].map((item, idx) => (
                <div key={idx} className="flex items-center justify-between">
                  <div>
                    <p className="text-[0.85rem] font-bold text-primary">{item.label}</p>
                    <p className="text-[0.7rem] text-on-surface-variant">{item.desc}</p>
                  </div>
                  <div className="w-10 h-5 bg-secondary/20 rounded-full relative cursor-pointer">
                    <div className="absolute right-0.5 top-0.5 w-4 h-4 bg-secondary rounded-full shadow-sm"></div>
                  </div>
                </div>
              ))}
            </div>
          </section>

          <section className="bg-surface border border-outline-variant rounded-lg p-6 shadow-s0">
            <h3 className="font-headline text-[1.1rem] font-bold text-primary mb-6 flex items-center gap-2.5">
              <Globe className="w-5 h-5 text-secondary" />
              Language & Region
            </h3>
            <div className="space-y-4">
              <div>
                <label className="text-[0.65rem] font-bold text-secondary uppercase tracking-wider block mb-1.5">Primary Language</label>
                <select className="w-full bg-surface-container-low border border-outline-variant rounded-[4px] px-3 py-2 text-[0.8rem] text-primary outline-none focus:border-secondary">
                  <option>English (US)</option>
                  <option>Hebrew (עברית)</option>
                </select>
              </div>
              <div>
                <label className="text-[0.65rem] font-bold text-secondary uppercase tracking-wider block mb-1.5">Tanakh Translation</label>
                <select className="w-full bg-surface-container-low border border-outline-variant rounded-[4px] px-3 py-2 text-[0.8rem] text-primary outline-none focus:border-secondary">
                  <option>JPS 1917</option>
                  <option>Koren</option>
                  <option>Sefaria</option>
                </select>
              </div>
            </div>
          </section>
        </div>

        <div className="space-y-6">
          <section className="bg-surface border border-outline-variant rounded-lg p-6 shadow-s0">
            <h3 className="font-headline text-[1.1rem] font-bold text-primary mb-6 flex items-center gap-2.5">
              <Moon className="w-5 h-5 text-secondary" />
              Appearance
            </h3>
            <div className="space-y-5">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-[0.85rem] font-bold text-primary">Dark Mode</p>
                  <p className="text-[0.7rem] text-on-surface-variant">Switch to a darker color palette for night study.</p>
                </div>
                <div className="w-10 h-5 bg-surface-container-high rounded-full relative cursor-pointer">
                  <div className="absolute left-0.5 top-0.5 w-4 h-4 bg-white rounded-full shadow-sm"></div>
                </div>
              </div>
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-[0.85rem] font-bold text-primary">Parchment Texture</p>
                  <p className="text-[0.7rem] text-on-surface-variant">Show a subtle parchment background in study modes.</p>
                </div>
                <div className="w-10 h-5 bg-secondary/20 rounded-full relative cursor-pointer">
                  <div className="absolute right-0.5 top-0.5 w-4 h-4 bg-secondary rounded-full shadow-sm"></div>
                </div>
              </div>
            </div>
          </section>

          <section className="bg-surface border border-outline-variant rounded-lg p-6 shadow-s0">
            <h3 className="font-headline text-[1.1rem] font-bold text-primary mb-6 flex items-center gap-2.5">
              <Volume2 className="w-5 h-5 text-secondary" />
              Audio & Video
            </h3>
            <div className="space-y-5">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-[0.85rem] font-bold text-primary">Auto-play Shiurim</p>
                  <p className="text-[0.7rem] text-on-surface-variant">Automatically start videos when selecting a lesson.</p>
                </div>
                <div className="w-10 h-5 bg-secondary/20 rounded-full relative cursor-pointer">
                  <div className="absolute right-0.5 top-0.5 w-4 h-4 bg-secondary rounded-full shadow-sm"></div>
                </div>
              </div>
              <div>
                <label className="text-[0.65rem] font-bold text-secondary uppercase tracking-wider block mb-1.5">Default Video Quality</label>
                <select className="w-full bg-surface-container-low border border-outline-variant rounded-[4px] px-3 py-2 text-[0.8rem] text-primary outline-none focus:border-secondary">
                  <option>Auto</option>
                  <option>1080p HD</option>
                  <option>720p</option>
                  <option>480p</option>
                </select>
              </div>
            </div>
          </section>
        </div>
      </div>

      <div className="flex justify-end pt-4">
        <button className="px-8 py-2.5 bg-primary text-white text-[0.75rem] font-bold uppercase tracking-widest rounded-[2px] shadow-s1 hover:bg-primary/90 transition-colors">
          Save All Changes
        </button>
      </div>
    </motion.div>
  );
};
