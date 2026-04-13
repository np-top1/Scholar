import React from 'react';
import { Play, Youtube, Clock, ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';
import { LESSONS } from '../constants';
import { Lesson } from '../types';

interface MediaLibraryProps {
  onPlayLesson: (lesson: Lesson) => void;
  activeLesson: Lesson | null;
}

export const MediaLibrary: React.FC<MediaLibraryProps> = ({ onPlayLesson }) => {
  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="py-6 px-7 max-w-[74rem] mx-auto pb-32"
    >
      <div className="mb-6">
        <h2 className="font-headline text-[1.65rem] font-bold text-primary mb-1">Media Library</h2>
        <p className="text-[0.78rem] text-on-surface-variant">Explore the full collection of shiurim and lectures by Rabbi Ariel Azaria.</p>
      </div>

      {/* Featured Section */}
      <section className="mb-10">
        <div className="relative overflow-hidden rounded-lg bg-primary h-[24rem] flex items-end p-10 shadow-s1">
          <div className="absolute inset-0 z-0">
            <img 
              alt="Hero Background" 
              className="w-full h-full object-cover opacity-35" 
              src={LESSONS[0].thumbnail}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-primary via-primary/45 to-transparent"></div>
          </div>
          <div className="relative z-10 max-w-2xl">
            <span className="text-secondary font-bold text-[0.56rem] uppercase tracking-[0.25em] mb-3 block">Featured Lesson</span>
            <h2 className="font-headline text-[2.4rem] font-bold text-white mb-6 leading-[1.15]">{LESSONS[0].title}</h2>
            <div className="flex gap-3.5">
              <button 
                onClick={() => onPlayLesson(LESSONS[0])}
                className="bg-secondary text-white px-7 py-2.5 rounded-[2px] font-bold text-[0.75rem] uppercase tracking-widest flex items-center gap-2 shadow-s1 hover:bg-secondary/90 transition-all active:scale-[0.98]"
              >
                <Play className="w-[15px] h-[15px] fill-current" />
                Watch Now
              </button>
              <button className="bg-white/10 backdrop-blur-md text-white border border-white/20 px-7 py-2.5 rounded-[2px] font-bold text-[0.75rem] uppercase tracking-widest hover:bg-white/20 transition-all">
                Lesson Details
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Playlists & Video Cards */}
      <div className="space-y-12">
        {/* Category 1: Recent Lessons */}
        <div className="space-y-6">
          <div className="flex items-center justify-between border-b border-outline-variant pb-3">
            <div className="flex items-center gap-3">
              <h4 className="font-headline text-[1.25rem] font-bold text-primary">Recent Shiurim</h4>
              <span className="bg-surface-container-high px-2.5 py-0.5 rounded-full text-[0.56rem] font-bold text-primary/60 tracking-tight">{LESSONS.length} VIDEOS</span>
            </div>
            <button className="text-secondary font-bold text-[0.6rem] uppercase tracking-[0.12em] hover:underline flex items-center gap-1.5 group">
              View All
              <ArrowRight className="w-[13px] h-[13px] group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {LESSONS.map((video) => (
              <div 
                key={video.id} 
                className="group cursor-pointer"
                onClick={() => onPlayLesson(video)}
              >
                <div className="relative aspect-video rounded-lg overflow-hidden mb-3.5 shadow-s0 transition-shadow duration-350 group-hover:shadow-s2">
                  <img alt={video.title} className="w-full h-full object-cover transition-transform duration-550 group-hover:scale-105" src={video.thumbnail} />
                  <div className="absolute inset-0 bg-primary/18 group-hover:bg-transparent transition-colors duration-350"></div>
                  <div className="absolute bottom-2.5 right-2.5 bg-primary/88 text-surface text-[0.56rem] font-bold px-2 py-0.5 rounded-[2px]">{video.duration}</div>
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-280">
                    <div className="w-[52px] h-[52px] bg-secondary rounded-full flex items-center justify-center shadow-s2">
                      <Play className="text-white w-6 h-6 fill-current ml-1" />
                    </div>
                  </div>
                </div>
                <h5 className="font-headline font-bold text-[0.9rem] text-primary mb-1 group-hover:text-secondary transition-colors">{video.title}</h5>
                <p className="text-[0.75rem] text-on-surface-variant leading-relaxed line-clamp-2">{video.description}</p>
                <div className="flex items-center gap-2.5 mt-2.5">
                  <span className="text-[0.56rem] font-bold text-secondary uppercase tracking-[0.1em]">אריאל עזריה</span>
                  <span className="w-[3px] h-[3px] rounded-full bg-surface-container-high"></span>
                  <span className="text-[0.56rem] font-medium text-on-surface-variant uppercase tracking-[0.1em]">Shiur</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Category 2: Nevi'im */}
        <div className="space-y-6">
          <div className="flex items-center justify-between border-b border-outline-variant pb-3">
            <div className="flex items-center gap-3">
              <h4 className="font-headline text-[1.25rem] font-bold text-primary">Nevi'im Series</h4>
              <span className="bg-surface-container-high px-2.5 py-0.5 rounded-full text-[0.56rem] font-bold text-primary/60 tracking-tight">12 SERIES</span>
            </div>
            <button className="text-secondary font-bold text-[0.6rem] uppercase tracking-[0.12em] hover:underline">View Full Playlist</button>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_22rem] gap-8">
            <div className="group cursor-pointer">
              <div className="relative aspect-[21/9] rounded-lg overflow-hidden shadow-s1 border border-outline-variant/10">
                <img alt="Prophets Featured" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000" src="https://picsum.photos/seed/prophets/1200/600" />
                <div className="absolute inset-0 bg-gradient-to-r from-primary/90 to-transparent"></div>
                <div className="absolute inset-0 p-8 flex flex-col justify-end">
                  <div className="bg-secondary text-white text-[0.56rem] font-bold uppercase px-2.5 py-0.5 rounded-[2px] w-max mb-3 tracking-wider">Series Spotlight</div>
                  <h5 className="font-headline text-[1.8rem] font-bold text-white mb-2">Elijah: The Fiery Prophet</h5>
                  <p className="text-white/75 max-w-lg text-[0.85rem] mb-4 leading-relaxed">A multi-part series exploring the life and miracles of Elijah the Prophet in the books of Kings.</p>
                  <div className="flex items-center gap-6">
                    <div className="flex items-center text-white/90 text-[0.65rem] font-bold gap-2 uppercase tracking-wide">
                      <Youtube className="w-4 h-4 text-secondary" />
                      4 Lessons
                    </div>
                    <div className="flex items-center text-white/90 text-[0.65rem] font-bold gap-2 uppercase tracking-wide">
                      <Clock className="w-4 h-4 text-secondary" />
                      3 Hours Total
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-col gap-4">
              {[
                { title: 'Elisha: The Double Portion', lessons: '8 Lessons', seed: 'torn' },
                { title: 'The Chariot of Fire', lessons: '6 Lessons', seed: 'wheel' },
                { title: 'Prophetic Miracles', lessons: '24 Lessons', seed: 'lamps' },
              ].map((item, idx) => (
                <div key={idx} className="flex gap-4 p-3 rounded-lg border border-outline-variant/10 hover:border-secondary/30 transition-all cursor-pointer group bg-surface shadow-s0">
                  <div className="w-24 h-16 rounded-[4px] overflow-hidden shrink-0">
                    <img alt={item.title} className="w-full h-full object-cover" src={`https://picsum.photos/seed/${item.seed}/200/150`} />
                  </div>
                  <div className="flex flex-col justify-center">
                    <h6 className="font-bold text-primary text-[0.8rem] group-hover:text-secondary transition-colors line-clamp-1">{item.title}</h6>
                    <span className="text-[0.56rem] font-bold text-secondary uppercase mt-1 tracking-widest">{item.lessons}</span>
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
