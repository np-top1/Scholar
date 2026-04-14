import React, { useState, useRef, useEffect } from 'react';
import { Search, Bell, UserCircle, BookOpen, Youtube, X } from 'lucide-react';
import { Screen, Verse, Lesson } from '../types';
import { VERSES, LESSONS } from '../constants';

interface TopBarProps {
  onScreenChange: (screen: Screen) => void;
  onVerseSelect: (verse: Verse) => void;
  onLessonSelect: (lesson: Lesson) => void;
}

export const TopBar: React.FC<TopBarProps> = ({ onScreenChange, onVerseSelect, onLessonSelect }) => {
  const [query, setQuery] = useState('');
  const [isOpen, setIsOpen] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const q = query.trim().toLowerCase();

  const matchedVerses: Verse[] = q.length < 2 ? [] : VERSES.filter(v =>
    v.english.toLowerCase().includes(q) ||
    v.hebrew.includes(query.trim()) ||
    v.reference.toLowerCase().includes(q) ||
    (v.rashi && v.rashi.includes(query.trim()))
  ).slice(0, 4);

  const matchedLessons: Lesson[] = q.length < 2 ? [] : LESSONS.filter(l =>
    l.title.toLowerCase().includes(q) ||
    l.description.toLowerCase().includes(q)
  ).slice(0, 3);

  const hasResults = matchedVerses.length > 0 || matchedLessons.length > 0;

  // Close dropdown on outside click
  useEffect(() => {
    const handleClick = (e: MouseEvent) => {
      if (containerRef.current && !containerRef.current.contains(e.target as Node)) {
        setIsOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClick);
    return () => document.removeEventListener('mousedown', handleClick);
  }, []);

  const handleVerseClick = (verse: Verse) => {
    onVerseSelect(verse);
    onScreenChange('browser');
    setQuery('');
    setIsOpen(false);
  };

  const handleLessonClick = (lesson: Lesson) => {
    onLessonSelect(lesson);
    setQuery('');
    setIsOpen(false);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setQuery(e.target.value);
    setIsOpen(true);
  };

  const handleClear = () => {
    setQuery('');
    setIsOpen(false);
  };

  // Highlight matching substring in a string
  const highlight = (text: string, q: string) => {
    if (!q || q.length < 2) return <>{text}</>;
    const idx = text.toLowerCase().indexOf(q.toLowerCase());
    if (idx === -1) return <>{text}</>;
    return (
      <>
        {text.slice(0, idx)}
        <mark className="bg-secondary/25 text-secondary rounded-[2px] px-0.5">{text.slice(idx, idx + q.length)}</mark>
        {text.slice(idx + q.length)}
      </>
    );
  };

  return (
    <header className="h-[3.75rem] bg-surface/90 backdrop-blur-[14px] border-b border-surface-container-high/65 flex justify-between items-center px-7 shrink-0 z-20">
      <div className="flex gap-4.5">
        <button className="text-[0.76rem] font-semibold text-primary/48 tracking-tight hover:text-primary transition-colors">Torah</button>
        <button className="text-[0.76rem] font-semibold text-primary/48 tracking-tight hover:text-primary transition-colors">Nevi'im</button>
        <button className="text-[0.76rem] font-semibold text-primary/48 tracking-tight hover:text-primary transition-colors">Ketuvim</button>
      </div>

      <div className="flex items-center gap-4.5">
        {/* Search */}
        <div className="relative" ref={containerRef}>
          <div className="relative flex items-center">
            <input
              type="text"
              value={query}
              onChange={handleChange}
              onFocus={() => query.length >= 2 && setIsOpen(true)}
              placeholder="Search verses…"
              className="bg-transparent border-none border-b border-outline-variant/38 py-0.5 pr-10 pl-0 text-[0.76rem] w-52 text-primary outline-none focus:border-secondary transition-colors placeholder:text-on-surface-variant/38"
            />
            {query ? (
              <button onClick={handleClear} className="absolute right-5 text-on-surface-variant/40 hover:text-primary transition-colors">
                <X className="w-3.5 h-3.5" />
              </button>
            ) : null}
            <Search className="absolute right-0 top-0.5 w-4 h-4 text-on-surface-variant/40 pointer-events-none" />
          </div>

          {/* Dropdown */}
          {isOpen && query.length >= 2 && (
            <div className="absolute right-0 top-[calc(100%+0.75rem)] w-[26rem] bg-surface border border-outline-variant rounded-lg shadow-s3 overflow-hidden z-50">
              {!hasResults && (
                <div className="px-5 py-6 text-center text-[0.78rem] text-on-surface-variant italic">
                  No results for "{query}"
                </div>
              )}

              {matchedVerses.length > 0 && (
                <div>
                  <div className="px-4 py-2 bg-surface-container-low border-b border-outline-variant/50">
                    <span className="text-[0.55rem] font-bold uppercase tracking-[0.18em] text-secondary">Verses</span>
                  </div>
                  {matchedVerses.map(verse => (
                    <button
                      key={verse.id}
                      onClick={() => handleVerseClick(verse)}
                      className="w-full text-left px-4 py-3.5 hover:bg-surface-container-low transition-colors border-b border-outline-variant/30 last:border-0 flex items-start gap-3 group"
                    >
                      <BookOpen className="w-4 h-4 text-secondary shrink-0 mt-0.5" />
                      <div className="min-w-0">
                        <p className="text-[0.7rem] font-bold text-secondary uppercase tracking-wider mb-0.5">{verse.reference}</p>
                        <p className="text-[0.78rem] text-primary font-body italic leading-snug line-clamp-2 group-hover:text-secondary transition-colors">
                          {highlight(verse.english, q)}
                        </p>
                      </div>
                    </button>
                  ))}
                </div>
              )}

              {matchedLessons.length > 0 && (
                <div>
                  <div className="px-4 py-2 bg-surface-container-low border-b border-outline-variant/50">
                    <span className="text-[0.55rem] font-bold uppercase tracking-[0.18em] text-secondary">Shiurim</span>
                  </div>
                  {matchedLessons.map(lesson => (
                    <button
                      key={lesson.id}
                      onClick={() => handleLessonClick(lesson)}
                      className="w-full text-left px-4 py-3.5 hover:bg-surface-container-low transition-colors border-b border-outline-variant/30 last:border-0 flex items-start gap-3 group"
                    >
                      <Youtube className="w-4 h-4 text-secondary shrink-0 mt-0.5" />
                      <div className="min-w-0">
                        <p className="text-[0.78rem] font-bold text-primary leading-snug group-hover:text-secondary transition-colors">
                          {highlight(lesson.title, q)}
                        </p>
                        <p className="text-[0.7rem] text-on-surface-variant mt-0.5 line-clamp-1">
                          {highlight(lesson.description, q)}
                        </p>
                      </div>
                    </button>
                  ))}
                </div>
              )}
            </div>
          )}
        </div>

        <div className="flex gap-2">
          <button className="text-primary opacity-65 hover:opacity-100 transition-opacity">
            <Bell className="w-[19px] h-[19px]" />
          </button>
          <button
            onClick={() => onScreenChange('account')}
            className="text-primary opacity-65 hover:opacity-100 transition-opacity"
          >
            <UserCircle className="w-[19px] h-[19px]" />
          </button>
        </div>
      </div>
    </header>
  );
};
