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
  const chapters = ['א', 'ב', 'ג', 'ד', 'ה', 'ו', 'ז', 'ח', 'ט', 'י'];
  
  // Use active lesson context if available, otherwise default to Genesis
  const currentBook = activeLesson?.book || 'Genesis';
  const currentChapter = activeLesson?.chapter || 1;
  const currentHebrewName = currentBook === '1 Kings' ? 'מְלָכִים א' : 'בְּרֵאשִׁית';

  const filteredVerses = VERSES.filter(v => v.book === currentBook && v.chapter === currentChapter);
  
  // If no verses found for current context, fallback to first few verses
  const displayVerses = filteredVerses.length > 0 ? filteredVerses : VERSES.slice(0, 5);

  const discussionPoints = currentBook === '1 Kings' 
    ? [
        { time: '02:15', title: "The Strategy of Ben-hadad" },
        { time: '08:40', title: "Ahab's Response and the Elders", active: true },
        { time: '11:20', title: "Prophetic Intervention" },
      ]
    : [
        { time: '04:12', title: "Defining the state of 'Nothingness'" },
        { time: '12:45', title: "The Spirit of God as 'Ruach'", active: true },
        { time: '28:30', title: "Symbolism of the Waters" },
      ];

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="py-6 px-7 max-w-[74rem] mx-auto pb-32"
    >
      <div className="mb-6">
        <h2 className="font-headline text-[1.65rem] font-bold text-primary mb-1">Tanakh Browser</h2>
        <p className="text-[0.78rem] text-on-surface-variant">Read the Hebrew text with English translation. Click a verse to highlight it, then watch the related shiur.</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-[1fr_18rem] gap-8 items-start">
        {/* Hebrew text */}
        <div className="bg-surface border border-outline-variant rounded-lg p-7 shadow-s0">
          <h3 className="font-headline text-[1.3rem] font-bold text-primary flex justify-between items-center mb-2">
            <span className="hebrew-text">{currentHebrewName}</span>
            <span className="text-[0.62rem] font-bold text-secondary uppercase tracking-[0.2em]">{currentBook} · Chapter {currentChapter}</span>
          </h3>
          
          <div className="flex gap-2 mb-6 flex-wrap">
            {chapters.map((ch, idx) => (
              <button 
                key={idx}
                className={`w-9 h-9 rounded-full flex items-center justify-center font-headline text-[0.9rem] font-bold transition-all border ${
                  idx === 0 
                    ? 'bg-secondary text-white border-secondary shadow-[0_2px_8px_rgba(119,90,25,0.26)]' 
                    : 'border-outline-variant text-primary/45 hover:border-secondary hover:text-secondary'
                }`}
              >
                {ch}
              </button>
            ))}
          </div>

          <div className="space-y-11">
            {displayVerses.map((verse) => (
              <div 
                key={verse.id} 
                className={`group cursor-pointer transition-all duration-200 border-r-3 border-transparent pr-3.5 ${
                  verse.number === 2 ? 'bg-surface-container-low/70 rounded-lg p-5 border-r-4 border-secondary relative' : 'hover:border-secondary/25'
                }`}
              >
                {verse.number === 2 && (
                  <div className="absolute -right-1.5 top-6 bg-secondary text-white text-[0.5rem] font-bold uppercase tracking-[0.1em] px-2.5 py-0.5 rounded-r-full shadow-sm">
                    Active
                  </div>
                )}
                <div className={`text-[0.62rem] font-bold mb-1.5 text-right direction-rtl ${verse.number === 2 ? 'text-secondary' : 'text-secondary/36'}`}>
                  {verse.number}
                </div>
                <p className="hebrew-text text-[1.5rem] text-primary leading-[1.75] text-right">
                  {verse.hebrew}
                </p>
                <p className={`mt-2 text-[0.85rem] font-body text-on-surface-variant leading-relaxed italic direction-ltr ${verse.number === 2 ? '' : 'border-r-2 border-secondary/10 pr-3'}`}>
                  {verse.english}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Sidebar: shiurim + discussion */}
        <div className="flex flex-col gap-5">
          <div className="bg-surface border border-outline-variant rounded-lg p-5 shadow-s0">
            <h4 className="font-headline text-[0.9rem] font-bold text-primary mb-3.5 flex items-center gap-2">
              <Play className="w-[17px] h-[17px] text-secondary" />
              Related Shiurim
            </h4>
            <div className="space-y-2">
              {LESSONS.map((lesson, idx) => (
                <div 
                  key={lesson.id}
                  onClick={() => onPlayLesson(lesson)}
                  className="flex gap-2.5 p-2.5 rounded-lg transition-colors cursor-pointer hover:bg-surface-container-high group"
                >
                  <div className="w-24 h-15 rounded-[4px] overflow-hidden shrink-0 relative">
                    <img src={lesson.thumbnail} alt="" className="w-full h-full object-cover" />
                    <div className="absolute inset-0 bg-primary/28 group-hover:bg-primary/8 flex items-center justify-center transition-colors">
                      <div className="w-6.5 h-6.5 bg-secondary rounded-full flex items-center justify-center">
                        <Play className="w-3 h-3 text-white fill-current ml-0.5" />
                      </div>
                    </div>
                  </div>
                  <div>
                    <div className="text-[0.8rem] font-bold text-primary group-hover:text-secondary transition-colors line-clamp-1">{lesson.title}</div>
                    <div className="text-[0.65rem] text-on-surface-variant mt-0.5">אריאל עזריה · Tanakh</div>
                    <div className="text-[0.56rem] font-bold text-secondary uppercase tracking-tight mt-1">Watch in Media Library →</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-surface border border-outline-variant rounded-lg p-5 shadow-s0">
            <h4 className="font-headline text-[0.9rem] font-bold text-primary mb-3.5 flex items-center gap-2">
              <MessageSquare className="w-[17px] h-[17px] text-secondary" />
              Discussion Points
            </h4>
            <div className="space-y-2">
              {discussionPoints.map((point, idx) => (
                <div 
                  key={idx}
                  className={`flex items-center gap-2.5 p-2.5 rounded-lg border transition-colors cursor-pointer group ${
                    point.active 
                      ? 'bg-secondary/7 border-secondary/22' 
                      : 'bg-surface border-outline-variant hover:border-secondary/26'
                  }`}
                >
                  <span className="text-[0.65rem] font-bold text-secondary w-9 shrink-0">{point.time}</span>
                  <p className={`text-[0.78rem] font-semibold flex-1 ${point.active ? 'text-primary font-bold' : 'text-primary'}`}>{point.title}</p>
                  <div className="shrink-0">
                    {point.active ? (
                      <Play className="w-3.5 h-3.5 text-secondary fill-secondary" />
                    ) : (
                      <ChevronRight className="w-3.5 h-3.5 text-primary/25 group-hover:text-secondary transition-colors" />
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};
