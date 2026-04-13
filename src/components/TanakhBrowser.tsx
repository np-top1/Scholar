import React from 'react';
import { Bookmark, Share2, Play, ChevronRight, MessageSquare, ChevronLeft, BookOpen, Search, Youtube } from 'lucide-react';
import { VERSES, LESSONS } from '../constants';
import { motion } from 'motion/react';
import { Lesson } from '../types';

interface TanakhBrowserProps {
  onPlayLesson: (lesson: Lesson) => void;
  activeLesson: Lesson | null;
}

export const TanakhBrowser: React.FC<TanakhBrowserProps> = ({ onPlayLesson, activeLesson }) => {
  const [selectedChapter, setSelectedChapter] = React.useState<number | null>(null);
  const chapters = ['א', 'ב', 'ג', 'ד', 'ה', 'ו', 'ז', 'ח', 'ט', 'י'];
  
  // Use active lesson context if available, otherwise default to II Kings
  const currentBook = activeLesson?.book || 'II Kings';
  const currentChapter = selectedChapter || activeLesson?.chapter || 1;
  const currentHebrewName = 'מְלָכִים ב';

  const filteredVerses = VERSES.filter(v => v.book === currentBook && v.chapter === currentChapter);
  
  // If no verses found for current context, fallback to all available verses (which are II Kings)
  const displayVerses = filteredVerses.length > 0 ? filteredVerses : VERSES;

  const discussionPoints = [
    { time: '02:15', title: "The Strategy of Elijah's Ascent" },
    { time: '08:40', title: "Elisha's Request for a Double Portion", active: true },
    { time: '11:20', title: "The Chariot of Fire and the Whirlwind" },
  ];

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="py-6 px-7 max-w-[54rem] mx-auto pb-32"
    >
      <div className="mb-6">
        <h2 className="font-headline text-[1.65rem] font-bold text-primary mb-1">Tanakh Browser</h2>
        <p className="text-[0.78rem] text-on-surface-variant">Read the Hebrew text with English translation. Click a verse to highlight it, then watch the related shiur.</p>
      </div>

      {/* Hebrew text */}
      <div className="bg-surface border border-outline-variant rounded-lg p-7 shadow-s0">
        <h3 className="font-headline text-[1.3rem] font-bold text-primary flex justify-between items-center mb-2">
          <span className="hebrew-text">{currentHebrewName}</span>
          <span className="text-[0.62rem] font-bold text-secondary uppercase tracking-[0.2em]">{currentBook} · Chapter {currentChapter}</span>
        </h3>
        
        <div className="flex gap-2 mb-6 flex-wrap">
          {chapters.map((ch, idx) => {
            const chapterNum = idx + 1;
            const isActive = currentChapter === chapterNum;
            return (
              <button 
                key={idx}
                onClick={() => setSelectedChapter(chapterNum)}
                className={`w-9 h-9 rounded-full flex items-center justify-center font-headline text-[0.9rem] font-bold transition-all border ${
                  isActive 
                    ? 'bg-secondary text-white border-secondary shadow-[0_2px_8px_rgba(119,90,25,0.26)]' 
                    : 'border-outline-variant text-primary/45 hover:border-secondary hover:text-secondary'
                }`}
              >
                {ch}
              </button>
            );
          })}
        </div>

        <div className="space-y-11">
          {displayVerses.map((verse) => (
            <div 
              key={verse.id} 
              className={`group cursor-pointer transition-all duration-200 border-r-3 border-transparent pr-3.5 ${
                verse.number === 8 ? 'bg-surface-container-low/70 rounded-lg p-5 border-r-4 border-secondary relative' : 'hover:border-secondary/25'
              }`}
            >
              {verse.number === 8 && (
                <div className="absolute -right-1.5 top-6 bg-secondary text-white text-[0.5rem] font-bold uppercase tracking-[0.1em] px-2.5 py-0.5 rounded-r-full shadow-sm">
                  Active
                </div>
              )}
              <div className={`text-[0.62rem] font-bold mb-1.5 text-right direction-rtl ${verse.number === 8 ? 'text-secondary' : 'text-secondary/36'}`}>
                {verse.number}
              </div>
              <p className="hebrew-text text-[1.5rem] text-primary leading-[1.75] text-right">
                {verse.hebrew}
              </p>
              <p className={`mt-2 text-[0.85rem] font-body text-on-surface-variant leading-relaxed italic direction-ltr ${verse.number === 8 ? '' : 'border-r-2 border-secondary/10 pr-3'}`}>
                {verse.english}
              </p>
              {verse.rashi && (
                <div className="mt-4 p-4 bg-surface-container-low/40 border-r-2 border-secondary/20 rounded-l-lg">
                  <p className="text-[0.65rem] font-bold text-secondary uppercase tracking-[0.15em] mb-1.5">רש"י · Rashi</p>
                  <p className="hebrew-text text-[1.1rem] text-primary/80 leading-relaxed text-right">
                    {verse.rashi}
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </motion.div>
  );
};
