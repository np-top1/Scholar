import React, { useState } from 'react';
import { motion } from 'motion/react';
import { User, Mail, Shield, CreditCard, LogOut, Camera, History, Bookmark } from 'lucide-react';

export const Account: React.FC = () => {
  const [name, setName] = useState('Nathan Pardo');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [location, setLocation] = useState('');

  const handleUpdate = () => {
    // In a real app, this would call an API
    console.log('Updating profile:', { name, email, phone, location });
    alert('Profile updated successfully!');
  };

  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="py-6 px-7 max-w-[74rem] mx-auto space-y-10 pb-32"
    >
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
              <button className="absolute bottom-0 right-0 w-9 h-9 bg-primary text-white rounded-full flex items-center justify-center shadow-s1 hover:bg-primary/90 transition-colors">
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
            <button className="flex items-center gap-2 text-on-surface-variant hover:text-error transition-colors text-[0.75rem] font-bold uppercase tracking-widest">
              <LogOut className="w-4 h-4" />
              Sign Out
            </button>
          </section>

          {/* Account Details */}
          <section className="bg-surface border border-outline-variant rounded-lg p-8 shadow-s0">
            <h4 className="font-headline text-[1.1rem] font-bold text-primary mb-6 flex items-center gap-2.5">
              <Shield className="w-5 h-5 text-secondary" />
              Personal Information
            </h4>
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
                className="px-6 py-2 bg-primary text-white text-[0.7rem] font-bold uppercase tracking-widest rounded-[2px] shadow-s1 hover:bg-primary/90 transition-colors"
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
              <button className="text-secondary text-[0.65rem] font-bold uppercase tracking-widest hover:underline">
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
                { action: 'Watched Shiur', target: 'Bereshit: The Beginning', time: '2 hours ago' },
                { action: 'Added Note', target: 'Genesis 1:1 Analysis', time: '5 hours ago' },
                { action: 'Completed Quiz', target: 'Hebrew Roots I', time: 'Yesterday' },
                { action: 'Saved Verse', target: 'Tehillim 27:4', time: '2 days ago' },
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
            <button className="w-full mt-6 py-2 border border-outline-variant text-on-surface-variant text-[0.6rem] font-bold uppercase tracking-widest rounded-[2px] hover:bg-surface-container-low transition-colors">
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
                { title: 'The Concept of Ruach', type: 'Shiur' },
                { title: 'Creation Narrative', type: 'Study List' },
                { title: 'Isaiah 45:18', type: 'Verse' },
              ].map((item, idx) => (
                <div key={idx} className="p-3 bg-surface-container-low/50 rounded border border-outline-variant/40 flex justify-between items-center group cursor-pointer hover:border-secondary/30 transition-colors">
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

// Helper component for chevron
const ChevronRight = ({ className }: { className?: string }) => (
  <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
  </svg>
);
