import React, { useState } from 'react';
import { User, Mail, Shield, CreditCard, LogOut, Camera, History, Bookmark, ChevronRight } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { Screen } from '../types';

interface AccountProps {
  onScreenChange: (screen: Screen) => void;
}

export const Account: React.FC<AccountProps> = ({ onScreenChange }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [location, setLocation] = useState('');
  const [toast, setToast] = useState<string | null>(null);

  const showToast = (message: string) => {
    setToast(message);
    setTimeout(() => setToast(null), 3000);
  };

  const handleUpdate = () => {
    console.log('Updating profile:', { name, email, phone, location });
    showToast('Profile updated successfully!');
  };

  const handleSignOut = () => {
    if (confirm('Are you sure you want to sign out?')) {
      console.log('Signing out...');
      showToast('Signed out successfully!');
      onScreenChange('signup');
    }
  };

  const handleManagePlan = () => {
    onScreenChange('settings');
    showToast('Redirecting to subscription settings...');
  };

  const handleViewActivity = () => {
    onScreenChange('dashboard');
    showToast('Navigating to activity dashboard...');
  };

  const handleSavedItemClick = (item: any) => {
    if (item.type === 'Verse') {
      onScreenChange('browser');
    } else if (item.type === 'Shiur') {
      onScreenChange('media');
    }
    showToast(`Opening ${item.type}: ${item.title}`);
  };

  const handleUploadPhoto = () => {
    showToast('Opening file picker for profile photo...');
  };

  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="py-6 px-7 max-w-[74rem] mx-auto space-y-10 pb-32 relative"
    >
      {/* Toast Notification */}
      <AnimatePresence>
        {toast && (
            <motion.div
              initial={{ opacity: 0, y: 50, x: '-50%' }}
              animate={{ opacity: 1, y: 0, x: '-50%' }}
              exit={{ opacity: 0, y: 20, x: '-50%' }}
              className="fixed bottom-32 left-1/2 z-[100] bg-primary text-on-primary px-6 py-3 rounded-full shadow-s3 text-[0.8rem] font-bold flex items-center gap-3"
            >
            <div className="w-2 h-2 rounded-full bg-secondary animate-pulse" />
            {toast}
          </motion.div>
        )}
      </AnimatePresence>
      <div className="mb-6">
        <h2 className="font-headline text-[1.65rem] font-bold text-primary mb-1">My Account</h2>
        <p className="text-[0.78rem] text-on-surface-variant">Manage your personal information, security, and subscription.</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-[1fr_22rem] gap-8">
        <div className="space-y-8">
          {/* Profile Header */}
          <section className="bg-surface border border-outline-variant rounded-lg p-8 shadow-s0 flex flex-col md:flex-row items-center gap-8">
            <div className="relative group">
              <div className="w-32 h-32 rounded-full bg-secondary/10 border-2 border-secondary/20 flex items-center justify-center overflow-hidden">
                <User className="w-16 h-16 text-secondary" />
              </div>
              <button 
                onClick={handleUploadPhoto}
                className="absolute bottom-0 right-0 w-9 h-9 bg-primary text-on-primary rounded-full flex items-center justify-center shadow-s1 hover:bg-primary/90 transition-colors"
              >
                <Camera className="w-4 h-4" />
              </button>
            </div>
            <div className="text-center md:text-left flex-1">
              <h3 className="font-headline text-[1.8rem] font-bold text-primary">{name || 'User Name'}</h3>
              <p className="text-on-surface-variant text-[0.9rem] mb-4">{email || 'No email provided'}</p>
              <div className="flex flex-wrap justify-center md:justify-start gap-3">
                <span className="px-3 py-1 bg-secondary/15 text-secondary text-[0.6rem] font-bold uppercase tracking-wider rounded-[2px]">Premium Member</span>
                <span className="px-3 py-1 bg-primary/10 text-primary text-[0.6rem] font-bold uppercase tracking-wider rounded-[2px]">Joined Feb 2024</span>
              </div>
            </div>
            <button 
              onClick={handleSignOut}
              className="flex items-center gap-2 text-on-surface-variant hover:text-error transition-colors text-[0.75rem] font-bold uppercase tracking-widest"
            >
              <LogOut className="w-4 h-4" />
              Sign Out
            </button>
          </section>

          {/* Account Details */}
          <section className="bg-surface border border-outline-variant rounded-lg p-8 shadow-s0">
            <div className="flex justify-between items-center mb-6">
              <h4 className="font-headline text-[1.1rem] font-bold text-primary flex items-center gap-2.5">
                <Shield className="w-5 h-5 text-secondary" />
                Personal Information
              </h4>
              <button 
                onClick={() => onScreenChange('signup')}
                className="text-[0.65rem] font-bold text-secondary uppercase tracking-widest hover:underline"
              >
                Create New Account
              </button>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="text-[0.65rem] font-bold text-secondary uppercase tracking-wider block mb-1.5">Full Name</label>
                <input 
                  type="text" 
                  value={name} 
                  onChange={(e) => setName(e.target.value)}
                  className="w-full bg-surface-container-low border border-outline-variant rounded-[4px] px-3 py-2 text-[0.85rem] text-primary outline-none focus:border-secondary" 
                />
              </div>
              <div>
                <label className="text-[0.65rem] font-bold text-secondary uppercase tracking-wider block mb-1.5">Email Address</label>
                <input 
                  type="email" 
                  value={email} 
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email"
                  className="w-full bg-surface-container-low border border-outline-variant rounded-[4px] px-3 py-2 text-[0.85rem] text-primary outline-none focus:border-secondary" 
                />
              </div>
              <div>
                <label className="text-[0.65rem] font-bold text-secondary uppercase tracking-wider block mb-1.5">Phone Number</label>
                <input 
                  type="tel" 
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  placeholder="+1 (555) 000-0000" 
                  className="w-full bg-surface-container-low border border-outline-variant rounded-[4px] px-3 py-2 text-[0.85rem] text-primary outline-none focus:border-secondary" 
                />
              </div>
              <div>
                <label className="text-[0.65rem] font-bold text-secondary uppercase tracking-wider block mb-1.5">Location</label>
                <input 
                  type="text" 
                  value={location}
                  onChange={(e) => setLocation(e.target.value)}
                  placeholder="City, Country" 
                  className="w-full bg-surface-container-low border border-outline-variant rounded-[4px] px-3 py-2 text-[0.85rem] text-primary outline-none focus:border-secondary" 
                />
              </div>
            </div>
            <div className="mt-8 flex justify-end">
              <button 
                onClick={handleUpdate}
                className="px-6 py-2 bg-primary text-on-primary text-[0.7rem] font-bold uppercase tracking-widest rounded-[2px] shadow-s1 hover:bg-primary/90 transition-colors"
              >
                Update Profile
              </button>
            </div>
          </section>

          {/* Billing */}
          <section className="bg-surface border border-outline-variant rounded-lg p-8 shadow-s0">
            <h4 className="font-headline text-[1.1rem] font-bold text-primary mb-6 flex items-center gap-2.5">
              <CreditCard className="w-5 h-5 text-secondary" />
              Subscription & Billing
            </h4>
            <div className="bg-surface-container-low rounded-lg p-5 border border-outline-variant/50 flex items-center justify-between">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-primary/10 rounded flex items-center justify-center text-primary">
                  <Shield className="w-6 h-6" />
                </div>
                <div>
                  <p className="text-[0.9rem] font-bold text-primary">Premium Annual Plan</p>
                  <p className="text-[0.7rem] text-on-surface-variant">Next billing date: Feb 12, 2025</p>
                </div>
              </div>
              <button 
                onClick={handleManagePlan}
                className="text-secondary text-[0.65rem] font-bold uppercase tracking-widest hover:underline"
              >
                Manage Plan
              </button>
            </div>
          </section>
        </div>

        {/* Sidebar: Activity */}
        <div className="space-y-6">
          <section className="bg-surface border border-outline-variant rounded-lg p-6 shadow-s0">
            <h4 className="font-headline text-[1rem] font-bold text-primary mb-5 flex items-center gap-2.5">
              <History className="w-[18px] h-[18px] text-secondary" />
              Recent Activity
            </h4>
            <div className="space-y-4">
              {[
                { action: 'Watched Shiur', target: 'Elijah: The Fiery Ascent', time: '2 hours ago' },
                { action: 'Added Note', target: 'II Kings 2:11 Analysis', time: '5 hours ago' },
                { action: 'Completed Quiz', target: 'Prophetic Succession', time: 'Yesterday' },
                { action: 'Saved Verse', target: 'II Kings 1:8', time: '2 days ago' },
              ].map((item, idx) => (
                <div key={idx} className="flex gap-3">
                  <div className="w-1.5 h-1.5 rounded-full bg-secondary mt-1.5 shrink-0"></div>
                  <div>
                    <p className="text-[0.78rem] font-bold text-primary">{item.action}</p>
                    <p className="text-[0.7rem] text-on-surface-variant">{item.target}</p>
                    <p className="text-[0.6rem] text-on-surface-variant/60 mt-0.5">{item.time}</p>
                  </div>
                </div>
              ))}
            </div>
            <button 
              onClick={handleViewActivity}
              className="w-full mt-6 py-2 border border-outline-variant text-on-surface-variant text-[0.6rem] font-bold uppercase tracking-widest rounded-[2px] hover:bg-surface-container-low transition-colors"
            >
              View All Activity
            </button>
          </section>

          <section className="bg-surface border border-outline-variant rounded-lg p-6 shadow-s0">
            <h4 className="font-headline text-[1rem] font-bold text-primary mb-5 flex items-center gap-2.5">
              <Bookmark className="w-[18px] h-[18px] text-secondary" />
              Saved Items
            </h4>
            <div className="space-y-3">
              {[
                { title: 'The Chariot of Fire', type: 'Shiur' },
                { title: 'Elijah vs Ahaziah', type: 'Study List' },
                { title: 'II Kings 2:12', type: 'Verse' },
              ].map((item, idx) => (
                <div 
                  key={idx} 
                  onClick={() => handleSavedItemClick(item)}
                  className="p-3 bg-surface-container-low/50 rounded border border-outline-variant/40 flex justify-between items-center group cursor-pointer hover:border-secondary/30 transition-colors"
                >
                  <div>
                    <p className="text-[0.78rem] font-bold text-primary group-hover:text-secondary transition-colors">{item.title}</p>
                    <p className="text-[0.6rem] text-on-surface-variant uppercase tracking-tight">{item.type}</p>
                  </div>
                  <ChevronRight className="w-3.5 h-3.5 text-on-surface-variant/30 group-hover:text-secondary transition-colors" />
                </div>
              ))}
            </div>
          </section>
        </div>
      </div>
    </motion.div>
  );
};
