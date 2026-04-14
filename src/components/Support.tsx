import React from 'react';
import { motion } from 'framer-motion';
import { HelpCircle, MessageSquare, Mail, Book, ExternalLink, Search, ChevronRight } from 'lucide-react';

export const Support: React.FC = () => {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="py-6 px-7 max-w-[74rem] mx-auto space-y-10 pb-32"
    >
      <div className="mb-6">
        <h2 className="font-headline text-[1.65rem] font-bold text-primary mb-1">Support & Help</h2>
        <p className="text-[0.78rem] text-on-surface-variant">Find answers to common questions or get in touch with our team.</p>
      </div>

      <div className="relative mb-10">
        <input 
          type="text" 
          placeholder="Search for help articles..." 
          className="w-full bg-surface border border-outline-variant rounded-lg py-4 px-12 text-[0.95rem] text-primary outline-none focus:border-secondary transition-colors shadow-s0"
        />
        <Search className="absolute left-4 top-4.5 w-5 h-5 text-on-surface-variant/40" />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-surface border border-outline-variant rounded-lg p-6 shadow-s0 text-center space-y-4">
          <div className="w-12 h-12 bg-secondary/15 rounded-full flex items-center justify-center text-secondary mx-auto">
            <MessageSquare className="w-6 h-6" />
          </div>
          <h3 className="font-headline text-[1.1rem] font-bold text-primary">Live Chat</h3>
          <p className="text-[0.75rem] text-on-surface-variant leading-relaxed">Chat with our support team in real-time for immediate assistance.</p>
          <button className="w-full py-2.5 border border-secondary text-secondary text-[0.65rem] font-bold uppercase tracking-widest rounded-[2px] hover:bg-secondary/5 transition-colors">
            Start Chat
          </button>
        </div>

        <div className="bg-surface border border-outline-variant rounded-lg p-6 shadow-s0 text-center space-y-4">
          <div className="w-12 h-12 bg-secondary/15 rounded-full flex items-center justify-center text-secondary mx-auto">
            <Mail className="w-6 h-6" />
          </div>
          <h3 className="font-headline text-[1.1rem] font-bold text-primary">Email Support</h3>
          <p className="text-[0.75rem] text-on-surface-variant leading-relaxed">Send us an email and we'll get back to you within 24 hours.</p>
          <button className="w-full py-2.5 border border-secondary text-secondary text-[0.65rem] font-bold uppercase tracking-widest rounded-[2px] hover:bg-secondary/5 transition-colors">
            Send Email
          </button>
        </div>

        <div className="bg-surface border border-outline-variant rounded-lg p-6 shadow-s0 text-center space-y-4">
          <div className="w-12 h-12 bg-secondary/15 rounded-full flex items-center justify-center text-secondary mx-auto">
            <Book className="w-6 h-6" />
          </div>
          <h3 className="font-headline text-[1.1rem] font-bold text-primary">Help Center</h3>
          <p className="text-[0.75rem] text-on-surface-variant leading-relaxed">Browse our comprehensive documentation and tutorials.</p>
          <button className="w-full py-2.5 border border-secondary text-secondary text-[0.65rem] font-bold uppercase tracking-widest rounded-[2px] hover:bg-secondary/5 transition-colors">
            Visit Docs
          </button>
        </div>
      </div>

      <section className="space-y-6">
        <h3 className="font-headline text-[1.25rem] font-bold text-primary border-b border-outline-variant pb-3">Frequently Asked Questions</h3>
        <div className="space-y-4">
          {[
            { q: 'How do I save my progress in a shiur?', a: 'Your progress is automatically saved as you watch. You can find your recently watched videos on the Dashboard.' },
            { q: 'Can I download videos for offline viewing?', a: 'Currently, offline viewing is only available on our mobile application. We are working on bringing this to the web version soon.' },
            { q: 'How do I access the linguistic analysis tools?', a: 'Navigate to the "Study Mode" screen from the sidebar. Hovering over Hebrew words will show their root and morphology.' },
            { q: 'Is there a community forum for discussion?', a: 'Yes! You can join our community discussions by clicking the "Community" link in the footer of the sidebar.' },
          ].map((item, idx) => (
            <div key={idx} className="bg-surface border border-outline-variant rounded-lg p-5 shadow-s0 group cursor-pointer hover:border-secondary/30 transition-colors">
              <div className="flex justify-between items-center">
                <h4 className="text-[0.9rem] font-bold text-primary">{item.q}</h4>
                <ChevronRight className="w-4 h-4 text-on-surface-variant/40 group-hover:text-secondary transition-colors" />
              </div>
              <p className="mt-3 text-[0.8rem] text-on-surface-variant leading-relaxed hidden group-hover:block transition-all">
                {item.a}
              </p>
            </div>
          ))}
        </div>
      </section>
    </motion.div>
  );
};
