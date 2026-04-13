import React, { useState } from 'react';
import { User, Mail, Lock, ArrowRight, ShieldCheck } from 'lucide-react';
import { motion } from 'framer-motion';
import { Screen } from '../types';

interface SignupProps {
  onScreenChange: (screen: Screen) => void;
}

export const Signup: React.FC<SignupProps> = ({ onScreenChange }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleSignup = (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    // Simulate signup
    setTimeout(() => {
      setIsLoading(false);
      onScreenChange('account');
    }, 1500);
  };

  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="min-h-[80vh] flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8"
    >
      <div className="max-w-md w-full space-y-8 bg-surface border border-outline-variant p-10 rounded-xl shadow-s2 parchment-texture">
        <div className="text-center">
          <div className="mx-auto h-12 w-12 bg-secondary/10 rounded-full flex items-center justify-center mb-4">
            <ShieldCheck className="h-6 w-6 text-secondary" />
          </div>
          <h2 className="font-headline text-3xl font-bold text-primary">Create Account</h2>
          <p className="mt-2 text-sm text-on-surface-variant">Join the Scholarly Sanctuary and start your journey.</p>
        </div>
        
        <form className="mt-8 space-y-6" onSubmit={handleSignup}>
          <div className="space-y-4">
            <div>
              <label className="text-[0.65rem] font-bold text-secondary uppercase tracking-wider block mb-1.5">Full Name</label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <User className="h-4 w-4 text-primary/30" />
                </div>
                <input
                  type="text"
                  required
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full bg-surface-container-low border border-outline-variant rounded-[4px] pl-10 pr-3 py-2.5 text-[0.85rem] text-primary outline-none focus:border-secondary transition-colors"
                  placeholder="Enter your name"
                />
              </div>
            </div>
            
            <div>
              <label className="text-[0.65rem] font-bold text-secondary uppercase tracking-wider block mb-1.5">Email Address</label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <Mail className="h-4 w-4 text-primary/30" />
                </div>
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full bg-surface-container-low border border-outline-variant rounded-[4px] pl-10 pr-3 py-2.5 text-[0.85rem] text-primary outline-none focus:border-secondary transition-colors"
                  placeholder="you@example.com"
                />
              </div>
            </div>

            <div>
              <label className="text-[0.65rem] font-bold text-secondary uppercase tracking-wider block mb-1.5">Password</label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <Lock className="h-4 w-4 text-primary/30" />
                </div>
                <input
                  type="password"
                  required
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full bg-surface-container-low border border-outline-variant rounded-[4px] pl-10 pr-3 py-2.5 text-[0.85rem] text-primary outline-none focus:border-secondary transition-colors"
                  placeholder="••••••••"
                />
              </div>
            </div>
          </div>

          <div>
            <button
              type="submit"
              disabled={isLoading}
              className="group relative w-full flex justify-center py-3 px-4 border border-transparent text-sm font-bold uppercase tracking-widest rounded-[2px] text-on-primary bg-primary hover:bg-primary/90 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-secondary transition-all disabled:opacity-50"
            >
              {isLoading ? (
                <div className="w-5 h-5 border-2 border-on-primary/30 border-t-on-primary rounded-full animate-spin" />
              ) : (
                <>
                  Create Account
                  <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </>
              )}
            </button>
          </div>
        </form>

        <div className="text-center mt-4">
          <button 
            onClick={() => onScreenChange('account')}
            className="text-xs text-secondary font-bold uppercase tracking-widest hover:underline"
          >
            Already have an account? Sign In
          </button>
        </div>
      </div>
    </motion.div>
  );
};
