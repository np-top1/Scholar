import React from 'react';
import { Bookmark, Share2, Play, GraduationCap, ChevronRight } from 'lucide-react';
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
  const displayVerses = filteredVerses.length > 0 ? filteredVerses : VERSES.slice(0, 3);

  const commentaryLesson = activeLesson || LESSONS[2];

  const discussionPoints = currentBook === '1 Kings' 
    ? [
        { time: '02:15', title: "The Strategy of Ben-hadad" },
        { time: '08:40', title: "Ahab's Response and the Elders", active: true },
        { time: '11:20', title: "Prophetic Intervention" },
      ]
    : [
        { time: '04:12', title: "Defining the state of 'Nothingness'" },
        { time: '12:45', title: "The Spirit of God as 'Ruach'", active: true },
        { time: '28:30', title: "Symbolism of the Waters in Kabbalah" },
      ];

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="pt-16 min-h-screen bg-surface"
    >
      {/* Chapter Navigation */}
      <section className="px-10 py-8 bg-surface-container-low/30 border-b border-outline-variant/10">
        <div className="flex items-center justify-between mb-6">
          <div>
            <h2 className="text-3xl font-headline font-bold text-primary flex items-center gap-4">
              <span className="hebrew-text">{currentHebrewName}</span>
              <span className="text-[10px] font-bold text-secondary tracking-[0.2em] uppercase">{currentBook} • Chapter {currentChapter}</span>
            </h2>
          </div>
          <div className="flex gap-2">
            <button className="w-10 h-10 flex items-center justify-center rounded-full border border-outline-variant/30 hover:bg-surface-container-high transition-colors text-primary/60">
              <Bookmark className="w-5 h-5" />
            </button>
            <button className="w-10 h-10 flex items-center justify-center rounded-full border border-outline-variant/30 hover:bg-surface-container-high transition-colors text-primary/60">
              <Share2 className="w-5 h-5" />
            </button>
          </div>
        </div>
        <div className="flex gap-3 overflow-x-auto pb-2 no-scrollbar">
          {chapters.map((ch, idx) => (
            <button 
              key={idx}
              className={`flex-shrink-0 w-10 h-10 flex items-center justify-center rounded-full font-bold text-lg transition-all ${
                idx === 0 
                  ? 'bg-secondary text-surface shadow-md shadow-secondary/20' 
                  : 'border border-outline-variant/50 text-primary/60 hover:border-secondary hover:text-secondary'
              }`}
            >
              {ch}
            </button>
          ))}
        </div>
      </section>

      {/* Dual Pane Layout */}
      <div className="grid grid-cols-12 gap-0 min-h-[calc(100vh-14rem)]">
        {/* Left Pane: Hebrew Text */}
        <div className="col-span-12 lg:col-span-7 px-10 py-12 bg-surface order-2 lg:order-1" dir="rtl">
          <div className="space-y-16 max-w-3xl mx-auto">
            {displayVerses.map((verse) => (
              <div 
                key={verse.id} 
                className={`group cursor-pointer relative transition-all duration-300 ${
                  verse.number === 1 ? 'p-8 bg-surface-container-low/60 rounded-xl shadow-sm border-r-4 border-secondary' : ''
                }`}
              >
                <div className="flex items-start gap-6">
                  <span className={`text-xs font-bold font-body mt-4 ${verse.number === 1 ? 'text-secondary' : 'text-secondary/40'}`}>
                    {verse.number}
                  </span>
                  <p className="hebrew-text text-4xl text-primary flex-1 leading-relaxed">
                    {verse.hebrew}
                  </p>
                </div>
                <div className={`mt-6 pr-10 ${verse.number !== 1 ? 'border-r-2 border-secondary/10' : ''}`}>
                  <p className={`font-body text-on-surface-variant leading-relaxed italic text-lg ${verse.number !== 1 ? 'opacity-80' : ''}`} dir="ltr">
                    {verse.english}
                  </p>
                </div>
                {verse.number === 1 && (
                  <div className="absolute -right-2 top-10 flex items-center">
                    <span className="bg-secondary text-surface px-3 py-1 rounded-r-full text-[10px] font-bold uppercase tracking-widest shadow-sm">Active Verse</span>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Right Pane: Video Commentary */}
        <div className="col-span-12 lg:col-span-5 px-8 py-12 lg:sticky lg:top-16 h-fit bg-surface-container-low/40 border-l border-outline-variant/10 order-1 lg:order-2">
          <div 
            className="rounded-xl overflow-hidden shadow-2xl relative group bg-black aspect-video mb-8 cursor-pointer"
            onClick={() => onPlayLesson(commentaryLesson)}
          >
            <img 
              alt={commentaryLesson.title} 
              className="w-full h-full object-cover opacity-60 transition-transform group-hover:scale-105 duration-700" 
              src={commentaryLesson.thumbnail}
            />
            <div className="absolute inset-0 flex items-center justify-center">
              <button className="w-20 h-20 bg-secondary text-surface rounded-full flex items-center justify-center shadow-2xl transition-transform group-hover:scale-110 active:scale-95">
                <Play className="w-10 h-10 fill-current ml-1" />
              </button>
            </div>
            <div className="absolute bottom-0 left-0 right-0 p-6 bg-primary/40 backdrop-blur-xl border-t border-white/10 flex justify-between items-end">
              <div dir="ltr">
                <h4 className="text-white font-headline text-lg font-bold">{commentaryLesson.title}</h4>
                <p className="text-white/70 text-sm font-body">{currentBook} • Chapter {currentChapter} Intro</p>
              </div>
              <span className="text-white/60 text-[10px] font-mono">{commentaryLesson.duration}</span>
            </div>
          </div>

          <div className="space-y-8" dir="ltr">
            <div>
              <div className="flex items-center gap-4 mb-4">
                <img 
                  alt="Rabbi Ariel Azaria" 
                  className="w-12 h-12 rounded-full border border-secondary/20 object-cover" 
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuD_l0QudZlZhL4jsBqgr-e0Uc8nVHZlrpz9ghT1LIp2E0YGH4k6Ll0ehd5Slf--nfuM1OCeKuQmPc1noJO5nuD9GJiUfR4u_wiIGcczbaIcte9IH1OOo9nNSYpJMi_6Zz1DAqKqsyu4w6agc3skI7ahS8zOhz3NA0lgTOhDz__0v528cdusugGjU0J2CIHIvNFxS8_D_6dKELs7F0DH_MjFrx0TkFE3yDDbcRXG8UT7kZIE2PdN8D3Zm4ELh_EMouPTrJynHFrq2PA"
                />
                <h3 className="text-primary font-headline text-2xl font-bold flex items-center gap-3">
                  <GraduationCap className="text-secondary w-6 h-6" />
                  Rabbi Azaria's Insight
                </h3>
              </div>
              <p className="text-on-surface-variant font-body leading-relaxed text-sm">
                {commentaryLesson.description}
              </p>
            </div>

            <div className="space-y-4">
              <div className="flex items-center justify-between border-b border-outline-variant/10 pb-2">
                <h4 className="text-[10px] font-bold uppercase tracking-[0.2em] text-secondary">Discussion Points</h4>
                <span className="text-[8px] text-on-surface-variant/60 font-bold uppercase">Click to Jump</span>
              </div>
              <div className="space-y-3">
                {discussionPoints.map((point, idx) => (
                  <div 
                    key={idx}
                    className={`flex items-center gap-4 p-4 rounded-lg border transition-all cursor-pointer group ${
                      point.active 
                        ? 'bg-secondary/5 border-secondary/20' 
                        : 'bg-surface border-outline-variant/20 hover:border-secondary/30'
                    }`}
                  >
                    <span className="text-secondary font-bold text-xs">{point.time}</span>
                    <p className={`text-sm font-semibold ${point.active ? 'text-primary' : 'text-primary/80'}`}>{point.title}</p>
                    {point.active ? (
                      <Play className="w-4 h-4 ml-auto text-secondary fill-current" />
                    ) : (
                      <ChevronRight className="w-4 h-4 ml-auto text-primary/40 group-hover:text-secondary transition-colors" />
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};
