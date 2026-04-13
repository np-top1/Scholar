import React, { useState, useEffect } from 'react';
import { 
  Play, 
  Pause,
  SkipBack, 
  SkipForward, 
  Volume2, 
  Maximize2,
  ChevronUp,
  ChevronDown,
  X,
  Youtube
} from 'lucide-react';
import { Lesson } from '../types';

interface MediaPlayerProps {
  activeLesson: Lesson | null;
}

export const MediaPlayer: React.FC<MediaPlayerProps> = ({ activeLesson }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);

  // Auto-play when a new lesson is selected
  useEffect(() => {
    if (activeLesson) {
      setIsPlaying(true);
    }
  }, [activeLesson]);

  if (!activeLesson) return null;

  const togglePlay = (e: React.MouseEvent) => {
    e.stopPropagation();
    setIsPlaying(!isPlaying);
  };

  return (
    <footer className={`fixed bottom-0 right-0 w-full lg:w-[calc(100%-16rem)] z-50 bg-primary text-white shadow-s3 transition-all duration-500 rounded-t-xl lg:rounded-t-none lg:rounded-tl-xl ${isExpanded ? 'h-[85vh]' : 'h-[4.5rem]'}`}>
      {/* Expanded Video View */}
      {isExpanded && (
        <div className="absolute inset-0 p-6 lg:p-10 flex flex-col">
          <div className="flex justify-between items-start mb-6">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-full bg-secondary/20 flex items-center justify-center border border-secondary/30">
                <Youtube className="text-secondary w-6 h-6" />
              </div>
              <div>
                <h2 className="font-headline text-[1.5rem] font-bold text-white leading-tight">{activeLesson.title}</h2>
                <p className="text-secondary font-bold text-[0.65rem] uppercase tracking-[0.15em] mt-1">אריאל עזריה · Shiur</p>
              </div>
            </div>
            <button 
              onClick={() => setIsExpanded(false)}
              className="p-2 hover:bg-white/10 rounded-full transition-colors"
            >
              <X className="w-6 h-6" />
            </button>
          </div>
          
          <div className="flex-1 bg-black rounded-lg overflow-hidden shadow-s3 relative border border-white/5">
            {activeLesson.youtubeId ? (
              <iframe
                key={`${activeLesson.youtubeId}-${isPlaying}`}
                width="100%"
                height="100%"
                src={`https://www.youtube.com/embed/${activeLesson.youtubeId}?autoplay=${isPlaying ? 1 : 0}&modestbranding=1&rel=0`}
                title={activeLesson.title}
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              ></iframe>
            ) : (
              <div className="absolute inset-0 flex items-center justify-center flex-col gap-4">
                <div className="w-20 h-20 bg-secondary/20 rounded-full flex items-center justify-center">
                  <Play className="w-10 h-10 text-secondary fill-current" />
                </div>
                <p className="text-white/40 font-body italic text-sm">Video content not available for this lesson.</p>
              </div>
            )}
          </div>
          
          <div className="mt-6 max-w-3xl">
            <p className="text-white/65 text-[0.9rem] leading-relaxed">
              {activeLesson.description}
            </p>
          </div>
        </div>
      )}

      {/* Mini Player Bar */}
      <div className={`h-[4.5rem] flex justify-between items-center px-6 lg:px-10 ${isExpanded ? 'absolute bottom-0 left-0 right-0 border-t border-white/10 bg-primary' : ''}`}>
        <div className="flex items-center gap-4 min-w-[14rem]">
          <div className="relative group cursor-pointer" onClick={() => setIsExpanded(!isExpanded)}>
            <div className="w-11 h-11 bg-white/10 rounded-[4px] flex items-center justify-center border border-white/10 overflow-hidden">
              {activeLesson.thumbnail ? (
                <img src={activeLesson.thumbnail} alt={activeLesson.title} className="w-full h-full object-cover" />
              ) : (
                <Youtube className="text-secondary w-5 h-5" />
              )}
            </div>
            <div className="absolute inset-0 bg-primary/75 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
              {isExpanded ? <ChevronDown className="w-5 h-5" /> : <ChevronUp className="w-5 h-5" />}
            </div>
          </div>
          <div className="max-w-[12rem] lg:max-w-xs">
            <p className="text-[0.85rem] font-bold truncate text-white">{activeLesson.title}</p>
            <p className="text-[0.6rem] uppercase tracking-[0.12em] text-white/45 font-bold mt-0.5">אריאל עזריה · {activeLesson.duration}</p>
          </div>
        </div>

        <div className="flex items-center gap-6 lg:gap-10">
          <button className="text-white/60 hover:text-secondary transition-colors">
            <SkipBack className="w-5 h-5" />
          </button>
          <button 
            onClick={togglePlay}
            className="text-secondary hover:scale-110 transition-transform p-1"
          >
            {isPlaying ? <Pause className="w-9 h-9 fill-current" /> : <Play className="w-9 h-9 fill-current" />}
          </button>
          <button className="text-white/60 hover:text-secondary transition-colors">
            <SkipForward className="w-5 h-5" />
          </button>
        </div>

        <div className="hidden md:flex items-center gap-6 min-w-[14rem] justify-end">
          <div className="flex items-center gap-3">
            <Volume2 className="w-4 h-4 text-white/40" />
            <div className="w-20 h-[3px] bg-white/15 rounded-full overflow-hidden">
              <div className="w-[45%] h-full bg-secondary"></div>
            </div>
          </div>
          <div className="w-px h-5 bg-white/10 mx-1"></div>
          <button 
            onClick={() => setIsExpanded(!isExpanded)}
            className="text-white/60 hover:text-secondary transition-colors"
          >
            <Maximize2 className="w-[18px] h-[18px]" />
          </button>
        </div>
      </div>
    </footer>
  );
};
