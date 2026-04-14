import React from 'react';
import { FileEdit, Lightbulb, Play, BookOpen, Trash2 } from 'lucide-react';
import { NOTES, LESSONS, VERSES, WORDS } from '../constants';
import { motion } from 'framer-motion';
import { Lesson, Note } from '../types';

interface StudyModeProps {
  onPlayLesson: (lesson: Lesson) => void;
  activeLesson: Lesson | null;
}

const STORAGE_KEY = 'scholar_notes';

function loadNotes(): Note[] {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    return raw ? JSON.parse(raw) : [];
  } catch {
    return [];
  }
}

function saveNotes(notes: Note[]): void {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(notes));
}

export const StudyMode: React.FC<StudyModeProps> = ({ onPlayLesson, activeLesson }) => {
  const [analysisTab, setAnalysisTab] = React.useState<'morphology' | 'roots'>('morphology');
  const [newNote, setNewNote] = React.useState('');
  const [isSaving, setIsSaving] = React.useState(false);
  const [savedToast, setSavedToast] = React.useState(false);
  const [userNotes, setUserNotes] = React.useState<Note[]>(loadNotes);

  // Use active lesson context if available, otherwise default to II Kings
  const currentBook = activeLesson?.book || 'II Kings';
  const currentChapter = activeLesson?.chapter || 1;
  
  const filteredVerses = VERSES.filter(v => v.book === currentBook && v.chapter === currentChapter);
  const activeVerse = filteredVerses[0] || VERSES[0];

  const studyLesson = activeLesson || LESSONS[0];

  // Combine built-in notes with user notes for this lesson
  const builtInNotes = NOTES.filter(n => n.lessonId === studyLesson.id);
  const lessonUserNotes = userNotes.filter(n => n.lessonId === studyLesson.id);
  const displayNotes = [
    ...(builtInNotes.length > 0 ? builtInNotes : NOTES.slice(0, 2)),
    ...lessonUserNotes,
  ];

  const handleSaveNote = () => {
    if (!newNote.trim()) return;
    setIsSaving(true);

    const note: Note = {
      id: `user-note-${Date.now()}`,
      concept: 'My Note',
      content: newNote.trim(),
      lessonId: studyLesson.id,
    };

    const updated = [...userNotes, note];
    setUserNotes(updated);
    saveNotes(updated);

    setTimeout(() => {
      setIsSaving(false);
      setNewNote('');
      setSavedToast(true);
      setTimeout(() => setSavedToast(false), 2500);
    }, 400);
  };

  const handleDeleteNote = (id: string) => {
    const updated = userNotes.filter(n => n.id !== id);
    setUserNotes(updated);
    saveNotes(updated);
  };

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="py-6 px-7 max-w-[74rem] mx-auto pb-32"
    >
      <div className="mb-6">
        <h2 className="font-headline text-[1.65rem] font-bold text-primary mb-1">Study Mode</h2>
        <p className="text-[0.78rem] text-on-surface-variant">Deep dive into the text with linguistic analysis, cross-references, and scholar's notes.</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-[1fr_20rem] gap-8 items-start">
        <div className="space-y-8">
          {/* Hero Verse Display */}
          <section className="relative overflow-hidden rounded-lg bg-primary min-h-[22rem] flex items-end p-10 shadow-s1">
            <div className="absolute inset-0 z-0 opacity-15">
              <img 
                alt="Hero background" 
                className="w-full h-full object-cover" 
                src="https://picsum.photos/seed/tanakh/1200/600?blur=2"
              />
            </div>
            <div className="absolute inset-0 bg-gradient-to-t from-primary via-primary/65 to-transparent"></div>
            <div className="relative z-10 w-full text-right">
              <span className="text-secondary font-bold text-[0.56rem] uppercase tracking-[0.25em] mb-3 block">{currentBook} · Chapter {currentChapter}</span>
              <h2 className="hebrew-text text-[2.8rem] font-bold text-on-primary mb-6 leading-[1.4]">{activeVerse.hebrew}</h2>
              <div className="flex justify-end gap-5 text-left">
                <div className="max-w-[32rem]">
                  <p className="text-[1.1rem] font-body text-on-primary/85 italic leading-relaxed">"{activeVerse.english}"</p>
                  {activeVerse.rashi && (
                    <div className="mt-4 p-4 bg-on-primary/5 border-r-2 border-secondary/40 rounded-l-lg text-right">
                      <p className="text-[0.56rem] font-bold text-secondary uppercase tracking-[0.15em] mb-1.5">רש"י · Rashi</p>
                      <p className="hebrew-text text-[1rem] text-on-primary/90 leading-relaxed">
                        {activeVerse.rashi}
                      </p>
                    </div>
                  )}
                  <div className="mt-4 flex gap-2.5">
                    <span className="bg-on-primary/10 text-on-primary/70 px-2.5 py-0.5 rounded-[2px] text-[0.56rem] font-bold uppercase tracking-wider">JPS 1917</span>
                    <span className="bg-on-primary/10 text-on-primary/70 px-2.5 py-0.5 rounded-[2px] text-[0.56rem] font-bold uppercase tracking-wider">{activeVerse.reference}</span>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Analysis Grid */}
          <div className="space-y-6">
            <div className="flex items-center justify-between border-b border-outline-variant pb-3">
              <h3 className="font-headline text-[1.25rem] font-bold text-primary">Lexical Analysis</h3>
              <div className="flex gap-1.5 bg-surface-container-low p-1 rounded-[4px]">
                <button 
                  onClick={() => setAnalysisTab('morphology')}
                  className={`px-4 py-1 rounded-[2px] text-[0.6rem] font-bold uppercase tracking-wider transition-all ${analysisTab === 'morphology' ? 'bg-primary text-on-primary shadow-sm' : 'text-on-surface-variant hover:bg-surface-container-high'}`}
                >
                  Morphology
                </button>
                <button 
                  onClick={() => setAnalysisTab('roots')}
                  className={`px-4 py-1 rounded-[2px] text-[0.6rem] font-bold uppercase tracking-wider transition-all ${analysisTab === 'roots' ? 'bg-primary text-on-primary shadow-sm' : 'text-on-surface-variant hover:bg-surface-container-high'}`}
                >
                  Roots
                </button>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {WORDS.map((word, idx) => (
                <div key={idx} className="bg-surface border border-outline-variant rounded-lg p-5 hover:shadow-s2 transition-all group cursor-pointer parchment-texture">
                  <span className="hebrew-text text-[1.8rem] font-bold text-primary block mb-2 text-center group-hover:text-secondary transition-colors">{word.heb}</span>
                  <div className="text-center space-y-1">
                    <span className="text-[0.56rem] uppercase font-bold text-secondary tracking-[0.12em] block">{word.trans}</span>
                    <p className="text-[0.78rem] font-medium text-primary">{word.mean}</p>
                    <div className="pt-2 mt-2 border-t border-outline-variant/50 text-[0.65rem] text-on-surface-variant leading-relaxed">
                      {analysisTab === 'morphology' ? (
                        <>
                          <span className="font-bold text-primary/60">Grammar:</span> {word.gram}
                        </>
                      ) : (
                        <>
                          <span className="font-bold text-primary/60">Root:</span> {word.root}
                        </>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-4">
              <div className="space-y-4">
                <h4 className="font-headline text-[0.95rem] font-bold text-primary flex items-center gap-2">
                  <BookOpen className="w-[17px] h-[17px] text-secondary" />
                  Cross-References
                </h4>
                <div className="space-y-3">
                  {[
                    { ref: 'Malachi 3:23', text: 'Behold, I will send you Elijah the prophet before the coming of the great and terrible day of the Lord.' },
                    { ref: 'I Kings 18:46', text: 'And the hand of the Lord was on Elijah; and he girded up his loins, and ran before Ahab to the entrance of Jezreel.' },
                  ].map((item, idx) => (
                    <div 
                      key={idx} 
                      onClick={() => alert(`Navigating to ${item.ref}`)}
                      className="p-4 bg-surface border border-outline-variant rounded-lg hover:border-secondary/30 transition-colors cursor-pointer group shadow-s0"
                    >
                      <p className="text-[0.56rem] font-bold text-secondary uppercase mb-1.5 tracking-[0.1em]">{item.ref}</p>
                      <p className="text-[0.78rem] font-body italic text-on-surface-variant leading-relaxed group-hover:text-primary transition-colors">"{item.text}"</p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="space-y-4">
                <h4 className="font-headline text-[0.95rem] font-bold text-primary flex items-center gap-2">
                  <Play className="w-[17px] h-[17px] text-secondary" />
                  Active Shiur
                </h4>
                <div 
                  className="relative rounded-lg overflow-hidden bg-primary aspect-video group cursor-pointer shadow-s1"
                  onClick={() => onPlayLesson(studyLesson)}
                >
                  <img 
                    src={studyLesson.thumbnail} 
                    alt={studyLesson.title} 
                    className="absolute inset-0 w-full h-full object-cover opacity-35 group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-primary/80 to-transparent"></div>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-12 h-12 bg-secondary rounded-full flex items-center justify-center shadow-s2 group-hover:scale-110 transition-transform">
                      <Play className="w-6 h-6 text-on-secondary fill-current ml-1" />
                    </div>
                  </div>
                  <div className="absolute bottom-0 left-0 right-0 p-4">
                    <h5 className="text-on-primary font-headline text-[0.85rem] font-bold">{studyLesson.title}</h5>
                    <p className="text-on-primary/60 text-[0.65rem] mt-0.5">{studyLesson.duration} · אריאל עזריה</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Sticky Note-Taking Sidebar */}
        <aside className="space-y-5 lg:sticky lg:top-6">
          <div className="bg-surface border border-outline-variant rounded-lg p-6 shadow-s0 flex flex-col min-h-[32rem] parchment-texture">
            <div className="flex items-center justify-between mb-6 pb-3 border-b border-outline-variant">
              <h3 className="font-headline text-[0.95rem] font-bold text-primary">Scholar's Notes</h3>
              <FileEdit className="text-primary/25 w-[18px] h-[18px]" />
            </div>
            <div className="flex-1 space-y-5 overflow-y-auto pr-1 custom-scrollbar">
              {displayNotes.map((note) => {
                const isUserNote = note.id.startsWith('user-note-');
                return (
                  <div key={note.id} className="p-3.5 bg-surface-container-low/50 rounded-lg border border-outline-variant/40 hover:border-secondary/25 transition-colors group relative">
                    <span className="text-[0.56rem] font-bold text-secondary uppercase tracking-[0.12em] block mb-1.5">
                      {note.timestamp ? `Timestamp: ${note.timestamp}` : note.concept}
                    </span>
                    <p className="text-[0.78rem] italic leading-relaxed text-on-surface-variant">{note.content}</p>
                    {isUserNote && (
                      <button
                        onClick={() => handleDeleteNote(note.id)}
                        className="absolute top-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity text-on-surface-variant/40 hover:text-red-400"
                        title="Delete note"
                      >
                        <Trash2 className="w-3.5 h-3.5" />
                      </button>
                    )}
                  </div>
                );
              })}
            </div>
            <div className="mt-6 pt-5 border-t border-outline-variant">
              {savedToast && (
                <p className="text-[0.65rem] font-bold text-secondary uppercase tracking-wider mb-2 text-center animate-pulse">
                  ✓ Note saved
                </p>
              )}
              <textarea 
                className="w-full bg-transparent border-none focus:ring-0 text-[0.78rem] font-body italic placeholder:text-on-surface-variant/30 resize-none h-24" 
                placeholder="Add a new observation..."
                value={newNote}
                onChange={(e) => setNewNote(e.target.value)}
              ></textarea>
              <button 
                onClick={handleSaveNote}
                disabled={isSaving || !newNote.trim()}
                className="w-full mt-3 py-2.5 bg-primary text-on-primary text-[0.65rem] font-bold uppercase tracking-[0.12em] rounded-[2px] hover:bg-primary/90 transition-colors shadow-s1 disabled:opacity-50"
              >
                {isSaving ? 'Saving...' : 'Save Note'}
              </button>
            </div>
          </div>
          
          <div className="bg-secondary/8 border border-secondary/15 p-4 rounded-lg flex items-start gap-3">
            <Lightbulb className="text-secondary w-[18px] h-[18px] mt-0.5 shrink-0" />
            <p className="text-[0.65rem] font-bold text-secondary uppercase leading-relaxed tracking-wide">Pro Tip: Hover over Hebrew words for root morphology.</p>
          </div>
        </aside>
      </div>
    </motion.div>
  );
};
