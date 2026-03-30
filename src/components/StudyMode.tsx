import React from 'react';
import { FileEdit, Lightbulb, Play, GraduationCap } from 'lucide-react';
import { NOTES, LESSONS, VERSES } from '../constants';
import { motion } from 'motion/react';
import { Lesson } from '../types';

interface StudyModeProps {
  onPlayLesson: (lesson: Lesson) => void;
  activeLesson: Lesson | null;
}

export const StudyMode: React.FC<StudyModeProps> = ({ onPlayLesson, activeLesson }) => {
  // Use active lesson context if available, otherwise default to Genesis
  const currentBook = activeLesson?.book || 'Genesis';
  const currentChapter = activeLesson?.chapter || 1;
  
  const filteredVerses = VERSES.filter(v => v.book === currentBook && v.chapter === currentChapter);
  const activeVerse = filteredVerses[0] || VERSES[0];

  const studyLesson = activeLesson || LESSONS[0];
  const filteredNotes = NOTES.filter(n => n.lessonId === studyLesson.id);
  const displayNotes = filteredNotes.length > 0 ? filteredNotes : NOTES.slice(0, 2);

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="pt-16 min-h-screen parchment-texture"
    >
      <div className="pt-8 px-10 max-w-[1400px] mx-auto flex flex-col lg:flex-row gap-12">
        {/* Left Analysis Pane */}
        <div className="flex-1 space-y-12 pb-32">
          {/* Hero Verse Display */}
          <section className="relative overflow-hidden rounded-xl bg-primary min-h-[400px] flex items-end p-12 shadow-xl">
            <div className="absolute inset-0 z-0 opacity-20">
              <img 
                alt="Hero background" 
                className="w-full h-full object-cover" 
                src="https://picsum.photos/seed/genesis/1200/600"
              />
            </div>
            <div className="absolute inset-0 bg-gradient-to-t from-primary via-primary/60 to-transparent"></div>
            <div className="relative z-10 w-full text-right">
              <span className="text-secondary font-body text-xs uppercase tracking-[0.3em] font-bold mb-4 block">{currentBook} • Chapter {currentChapter}</span>
              <h2 className="hebrew-text text-6xl font-bold text-surface mb-8 leading-tight">{activeVerse.hebrew}</h2>
              <div className="flex justify-end gap-6 text-left">
                <div className="max-w-xl">
                  <p className="text-xl font-body text-surface/90 italic leading-relaxed">"{activeVerse.english}"</p>
                  <div className="mt-4 flex gap-3">
                    <span className="bg-secondary/20 text-secondary-container px-3 py-1 rounded text-[10px] font-bold uppercase tracking-wider">Translation: JPS 1917</span>
                    <span className="bg-secondary/20 text-secondary-container px-3 py-1 rounded text-[10px] font-bold uppercase tracking-wider">Reference: {activeVerse.reference}</span>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Analysis Section Headers */}
          <section className="flex flex-col md:flex-row md:items-end justify-between gap-8 border-b border-outline-variant/20 pb-4">
            <div className="flex-1">
              <h3 className="text-3xl font-headline font-bold text-primary mb-2">Lexical Insights</h3>
              <p className="text-on-surface-variant max-w-md">Morphological breakdown and cross-references for this specific verse.</p>
            </div>
            <div className="flex gap-2 bg-surface-container-low p-1 rounded-lg">
              <button className="px-6 py-2 bg-primary text-surface rounded font-body text-xs font-bold uppercase tracking-wider">Analysis</button>
              <button className="px-6 py-2 text-on-surface-variant hover:bg-surface-container-high rounded font-body text-xs font-bold uppercase tracking-wider transition-colors">Compare</button>
              <button className="px-6 py-2 text-on-surface-variant hover:bg-surface-container-high rounded font-body text-xs font-bold uppercase tracking-wider transition-colors">Links</button>
            </div>
          </section>

          {/* Analysis Grid */}
          <div className="grid grid-cols-12 gap-8">
            <div className="col-span-12">
              <div className="flex flex-wrap gap-4">
                {[
                  { hb: 'בְּרֵאשִׁית', en: 'Bereshit', trans: 'In the beginning' },
                  { hb: 'בָּרָא', en: 'Bara', trans: 'He created' },
                  { hb: 'אֱלֹהִים', en: 'Elohim', trans: 'God (Pluralis)' },
                ].map((word, idx) => (
                  <div key={idx} className="flex-1 bg-surface-container-low p-6 rounded-xl hover:shadow-md transition-all border border-transparent hover:border-secondary/20 group cursor-pointer">
                    <span className="hebrew-text text-3xl font-bold text-primary block mb-3 text-center">{word.hb}</span>
                    <div className="text-center">
                      <span className="text-[10px] uppercase font-bold text-secondary tracking-widest block">{word.en}</span>
                      <p className="text-sm italic text-on-surface-variant mt-1">{word.trans}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="col-span-12 lg:col-span-6">
              <div className="flex items-center justify-between mb-6 pb-2 border-b border-outline-variant/10">
                <div className="flex items-center gap-3">
                  <span className="text-secondary font-headline text-xl font-bold">01.</span>
                  <h4 className="text-xl font-headline font-bold text-primary">Cross-References</h4>
                </div>
                <button className="text-secondary font-body text-[10px] font-bold tracking-widest uppercase hover:underline">View All</button>
              </div>
              <div className="space-y-4">
                <div className="p-5 bg-surface rounded-xl shadow-sm hover:shadow-md transition-all border border-outline-variant/20 group cursor-pointer">
                  <p className="text-[10px] font-bold text-secondary uppercase mb-2 tracking-widest">Psalm 33:6</p>
                  <p className="text-sm font-body italic text-on-surface/80 leading-relaxed">"By the word of the Lord were the heavens made..."</p>
                </div>
                <div className="p-5 bg-surface rounded-xl shadow-sm hover:shadow-md transition-all border border-outline-variant/20 group cursor-pointer">
                  <p className="text-[10px] font-bold text-secondary uppercase mb-2 tracking-widest">Isaiah 45:18</p>
                  <p className="text-sm font-body italic text-on-surface/80 leading-relaxed">"For thus saith the Lord that created the heavens..."</p>
                </div>
              </div>
            </div>

            <div className="col-span-12 lg:col-span-6">
              <div className="flex items-center justify-between mb-6 pb-2 border-b border-outline-variant/10">
                <div className="flex items-center gap-3">
                  <span className="text-secondary font-headline text-xl font-bold">02.</span>
                  <h4 className="text-xl font-headline font-bold text-primary">Scholar's Commentary</h4>
                </div>
                <button className="text-secondary font-body text-[10px] font-bold tracking-widest uppercase hover:underline">Full Lecture</button>
              </div>
              <div 
                className="relative rounded-xl overflow-hidden bg-primary p-8 group cursor-pointer shadow-md"
                onClick={() => onPlayLesson(studyLesson)}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-primary via-primary/80 to-secondary/30 opacity-90"></div>
                <img 
                  src={studyLesson.thumbnail} 
                  alt={studyLesson.title} 
                  className="absolute inset-0 w-full h-full object-cover opacity-20 group-hover:scale-110 transition-transform duration-1000"
                />
                <div className="relative z-10">
                  <div className="flex items-center gap-4 mb-6">
                    <img className="w-12 h-12 rounded-full object-cover border-2 border-secondary" src="https://lh3.googleusercontent.com/aida-public/AB6AXuD_l0QudZlZhL4jsBqgr-e0Uc8nVHZlrpz9ghT1LIp2E0YGH4k6Ll0ehd5Slf--nfuM1OCeKuQmPc1noJO5nuD9GJiUfR4u_wiIGcczbaIcte9IH1OOo9nNSYpJMi_6Zz1DAqKqsyu4w6agc3skI7ahS8zOhz3NA0lgTOhDz__0v528cdusugGjU0J2CIHIvNFxS8_D_6dKELs7F0DH_MjFrx0TkFE3yDDbcRXG8UT7kZIE2PdN8D3Zm4ELh_EMouPTrJynHFrq2PA" />
                    <div>
                      <h5 className="text-surface font-headline font-bold">{studyLesson.title}</h5>
                      <p className="text-[9px] text-secondary font-bold uppercase tracking-wider">Active Video Lesson</p>
                    </div>
                  </div>
                  <p className="text-sm text-surface/80 leading-relaxed italic mb-6 line-clamp-2">
                    {studyLesson.description}
                  </p>
                  <div className="flex items-center gap-4">
                    <button className="w-10 h-10 bg-secondary text-surface rounded-full flex items-center justify-center hover:scale-105 transition-transform">
                      <Play className="w-5 h-5 fill-current ml-0.5" />
                    </button>
                    <div className="flex-1 h-0.5 bg-white/20 rounded-full">
                      <div className="w-1/3 h-full bg-secondary"></div>
                    </div>
                    <span className="text-[10px] text-surface font-bold">{studyLesson.duration}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Sticky Note-Taking Sidebar */}
        <aside className="w-full lg:w-80 space-y-6">
          <div className="lg:sticky lg:top-24 bg-surface-container-low rounded-xl p-8 border border-outline-variant/10 shadow-sm flex flex-col min-h-[600px] parchment-texture">
            <div className="flex items-center justify-between mb-8 pb-4 border-b border-outline-variant/20">
              <h3 className="font-headline text-lg font-bold text-primary">Scholar's Notes</h3>
              <FileEdit className="text-primary/40 w-5 h-5" />
            </div>
            <div className="flex-1 space-y-6 overflow-y-auto pr-2">
              {displayNotes.map((note) => (
                <div key={note.id} className="p-4 bg-surface rounded-lg border border-transparent hover:border-secondary/30 transition-all shadow-sm">
                  <span className="text-[9px] font-bold text-secondary uppercase tracking-widest block mb-2">
                    {note.timestamp ? `Timestamp: ${note.timestamp}` : note.concept}
                  </span>
                  <p className="text-sm italic leading-relaxed text-on-surface/80">{note.content}</p>
                </div>
              ))}
            </div>
            <div className="mt-8 pt-8 border-t border-outline-variant/20">
              <textarea 
                className="w-full bg-transparent border-0 focus:ring-0 text-sm font-body italic placeholder:opacity-30 resize-none h-32" 
                placeholder="Add a new observation..."
              ></textarea>
              <button className="w-full mt-4 py-3 bg-primary text-surface text-xs font-bold uppercase tracking-widest rounded hover:opacity-95 transition-all">Save Note</button>
            </div>
          </div>
          <div className="bg-secondary/10 p-4 rounded-xl flex items-start gap-3 border border-secondary/5">
            <Lightbulb className="text-secondary w-5 h-5 mt-0.5" />
            <p className="text-[10px] font-bold text-secondary uppercase leading-relaxed tracking-wide">Pro Tip: Hover over Hebrew words for root morphology.</p>
          </div>
        </aside>
      </div>
    </motion.div>
  );
};
