import React, { useState } from 'react';
import { 
  Play, 
  Pause,
  SkipBack, 
  SkipForward, 
  Volume2, 
  Maximize2,
  Library,
  ChevronUp,
  ChevronDown,
  X
} from 'lucide-react';
import { Lesson } from '../types';

interface MediaPlayerProps {
  activeLesson: Lesson | null;
}

export const MediaPlayer: React.FC<MediaPlayerProps> = ({ activeLesson }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);

  // Auto-play when a new lesson is selected
  React.useEffect(() => {
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
    <footer className={`fixed bottom-0 right-0 w-[calc(100%-16rem)] z-50 bg-primary text-surface shadow-[0_-10px_30px_rgba(0,32,69,0.15)] transition-all duration-500 rounded-tl-2xl ${isExpanded ? 'h-[80vh]' : 'h-20'}`}>
      {/* Expanded Video View */}
      {isExpanded && (
        <div className="absolute inset-0 p-8 pt-12 flex flex-col">
          <div className="flex justify-between items-start mb-6">
            <div className="flex items-center gap-4">
              <img 
                alt="Rabbi Ariel Azaria" 
                className="w-12 h-12 rounded-full border border-secondary/20 object-cover" 
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuD_l0QudZlZhL4jsBqgr-e0Uc8nVHZlrpz9ghT1LIp2E0YGH4k6Ll0ehd5Slf--nfuM1OCeKuQmPc1noJO5nuD9GJiUfR4u_wiIGcczbaIcte9IH1OOo9nNSYpJMi_6Zz1DAqKqsyu4w6agc3skI7ahS8zOhz3NA0lgTOhDz__0v528cdusugGjU0J2CIHIvNFxS8_D_6dKELs7F0DH_MjFrx0TkFE3yDDbcRXG8UT7kZIE2PdN8D3Zm4ELh_EMouPTrJynHFrq2PA"
              />
              <div>
                <h2 className="text-3xl font-headline font-bold text-surface">{activeLesson.title}</h2>
                <p className="text-secondary font-body text-sm uppercase tracking-widest mt-1">{activeLesson.author}</p>
              </div>
            </div>
            <button 
              onClick={() => setIsExpanded(false)}
              className="p-2 hover:bg-white/10 rounded-full transition-colors"
            >
              <X className="w-6 h-6" />
            </button>
          </div>
          
          <div className="flex-1 bg-black rounded-xl overflow-hidden shadow-2xl relative">
            {activeLesson.youtubeId ? (
              <iframe
                key={`${activeLesson.youtubeId}-${isPlaying}`}
                width="100%"
                height="100%"
                src={`https://www.youtube.com/embed/${activeLesson.youtubeId}?autoplay=${isPlaying ? 1 : 0}`}
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
                <p className="text-surface/60 font-body italic">Video content not available for this lesson.</p>
              </div>
            )}
          </div>
          
          <div className="mt-6">
            <p className="text-surface/70 font-body leading-relaxed max-w-3xl">
              {activeLesson.description}
            </p>
          </div>
        </div>
      )}

      {/* Mini Player Bar */}
      <div className={`h-20 flex justify-between items-center px-12 ${isExpanded ? 'absolute bottom-0 left-0 right-0 border-t border-white/10' : ''}`}>
        <div className="flex items-center gap-4">
          <div className="relative group cursor-pointer" onClick={() => setIsExpanded(!isExpanded)}>
            <div className="w-12 h-12 bg-white/10 rounded flex items-center justify-center border border-white/10 overflow-hidden">
              {activeLesson.thumbnail ? (
                <img src={activeLesson.thumbnail} alt={activeLesson.title} className="w-full h-full object-cover" />
              ) : (
                <Library className="text-secondary w-6 h-6" />
              )}
            </div>
            <div className="absolute inset-0 bg-primary/60 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
              {isExpanded ? <ChevronDown className="w-6 h-6" /> : <ChevronUp className="w-6 h-6" />}
            </div>
          </div>
          <div>
            <p className="text-sm font-bold truncate w-64">{activeLesson.title}</p>
            <p className="text-[10px] uppercase tracking-widest text-surface/60">{activeLesson.author} • {activeLesson.duration}</p>
          </div>
        </div>

        <div className="flex items-center gap-10">
          <button className="text-surface/80 hover:text-secondary transition-all">
            <SkipBack className="w-6 h-6" />
          </button>
          <button 
            onClick={togglePlay}
            className="text-secondary hover:scale-110 transition-transform"
          >
            {isPlaying ? <Pause className="w-10 h-10 fill-current" /> : <Play className="w-10 h-10 fill-current" />}
          </button>
          <button className="text-surface/80 hover:text-secondary transition-all">
            <SkipForward className="w-6 h-6" />
          </button>
        </div>

        <div className="flex items-center gap-6">
          <div className="flex items-center gap-4">
            <Volume2 className="w-4 h-4 text-surface/60" />
            <div className="w-24 h-1 bg-white/10 rounded-full overflow-hidden">
              <div className="w-1/3 h-full bg-secondary"></div>
            </div>
          </div>
          <div className="w-px h-6 bg-white/10 mx-2"></div>
          <button 
            onClick={() => setIsExpanded(!isExpanded)}
            className="text-surface/80 hover:text-secondary transition-all"
          >
            <Maximize2 className="w-5 h-5" />
          </button>
        </div>
      </div>
    </footer>
  );
};
