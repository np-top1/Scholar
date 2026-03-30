import React from 'react';
import { Play, Youtube, Clock } from 'lucide-react';
import { motion } from 'motion/react';
import { LESSONS } from '../constants';
import { Lesson } from '../types';

interface MediaLibraryProps {
  onPlayLesson: (lesson: Lesson) => void;
}

export const MediaLibrary: React.FC<MediaLibraryProps> = ({ onPlayLesson }) => {
  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="pt-24 px-10 max-w-7xl mx-auto pb-32"
    >
      {/* Hero Section */}
      <section className="mb-16">
        <div className="relative overflow-hidden rounded-xl bg-primary h-[400px] flex items-end p-12 shadow-2xl">
          <div className="absolute inset-0 z-0">
            <img 
              alt="Hero Background" 
              className="w-full h-full object-cover opacity-40 mix-blend-overlay" 
              src={LESSONS[0].thumbnail}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-primary via-transparent to-transparent"></div>
          </div>
          <div className="relative z-10 max-w-2xl">
            <span className="text-secondary font-body text-xs uppercase tracking-[0.3em] font-bold mb-4 block">Featured Lesson</span>
            <h2 className="text-5xl font-headline font-bold text-surface mb-6 leading-tight">{LESSONS[0].title}</h2>
            <div className="flex gap-4">
              <button 
                onClick={() => onPlayLesson(LESSONS[0])}
                className="bg-secondary text-surface px-8 py-3 rounded font-body font-bold text-sm flex items-center gap-2 hover:opacity-90 transition-all duration-300 active:scale-[0.98]"
              >
                <Play className="w-4 h-4 fill-current" />
                WATCH NOW
              </button>
              <button className="bg-white/10 backdrop-blur-md text-surface border border-white/20 px-8 py-3 rounded font-body font-bold text-sm hover:bg-white/20 transition-all">
                LESSON DETAILS
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Filters & Playlist Selection */}
      <section className="mb-12 flex flex-col md:flex-row md:items-end justify-between gap-8">
        <div className="flex-1">
          <h3 className="text-3xl font-headline font-bold text-primary mb-2">Curated Collections</h3>
          <p className="text-on-surface-variant max-w-md">Explore the depth of the Tanakh through the eyes of Rabbi Azaria. Each series is a deep-dive into the spiritual and linguistic roots of the text.</p>
        </div>
        <div className="flex gap-2 bg-surface-container-low p-1 rounded-lg">
          <button className="px-6 py-2 bg-primary text-surface rounded font-body text-xs font-bold uppercase tracking-wider">All Library</button>
          <button className="px-6 py-2 text-on-surface-variant hover:bg-surface-container-high rounded font-body text-xs font-bold uppercase tracking-wider transition-colors">Most Recent</button>
          <button className="px-6 py-2 text-on-surface-variant hover:bg-surface-container-high rounded font-body text-xs font-bold uppercase tracking-wider transition-colors">Recommended</button>
        </div>
      </section>

      {/* Playlists & Video Cards */}
      <div className="space-y-20">
        {/* Category 1: Recent Lessons */}
        <div className="group">
          <div className="flex items-center justify-between mb-8 border-b border-outline-variant/10 pb-4">
            <div className="flex items-center gap-4">
              <span className="text-secondary font-headline text-2xl font-bold">01.</span>
              <h4 className="text-2xl font-headline font-bold text-primary">Recent Lessons</h4>
              <span className="bg-surface-container-highest px-3 py-1 rounded-full text-[10px] font-bold text-primary tracking-tighter">{LESSONS.length} VIDEOS</span>
            </div>
            <button className="text-secondary font-body text-xs font-bold tracking-widest uppercase hover:underline">View All</button>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {LESSONS.map((video) => (
              <div 
                key={video.id} 
                className="group/card cursor-pointer"
                onClick={() => onPlayLesson(video)}
              >
                <div className="relative aspect-video rounded-xl overflow-hidden mb-4 shadow-sm group-hover/card:shadow-lg transition-all duration-500">
                  <img alt={video.title} className="w-full h-full object-cover group-hover/card:scale-105 transition-transform duration-700" src={video.thumbnail} />
                  <div className="absolute inset-0 bg-primary/20 group-hover/card:bg-transparent transition-colors duration-500"></div>
                  <div className="absolute bottom-3 right-3 bg-primary/90 text-surface text-[10px] font-bold px-2 py-1 rounded">{video.duration}</div>
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover/card:opacity-100 transition-opacity duration-300">
                    <div className="w-16 h-16 bg-secondary rounded-full flex items-center justify-center shadow-2xl">
                      <Play className="text-surface w-8 h-8 fill-current ml-1" />
                    </div>
                  </div>
                </div>
                <h5 className="font-headline font-bold text-lg text-primary mb-1 group-hover/card:text-secondary transition-colors">{video.title}</h5>
                <p className="text-sm text-on-surface-variant font-body line-clamp-2">{video.description}</p>
                <div className="flex items-center gap-3 mt-4">
                  <span className="text-[10px] font-bold text-secondary uppercase tracking-widest">{video.author}</span>
                  <span className="w-1 h-1 bg-outline-variant rounded-full"></span>
                  <span className="text-[10px] font-medium text-on-surface-variant uppercase tracking-widest">Recent</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Category 2: Nevi'im */}
        <div>
          <div className="flex items-center justify-between mb-8 border-b border-outline-variant/10 pb-4">
            <div className="flex items-center gap-4">
              <span className="text-secondary font-headline text-2xl font-bold">02.</span>
              <h4 className="text-2xl font-headline font-bold text-primary">Nevi'im: The Prophets</h4>
              <span className="bg-surface-container-highest px-3 py-1 rounded-full text-[10px] font-bold text-primary tracking-tighter">12 SERIES</span>
            </div>
            <button className="text-secondary font-body text-xs font-bold tracking-widest uppercase hover:underline">View Full Playlist</button>
          </div>
          <div className="flex flex-col lg:flex-row gap-10">
            <div className="lg:w-2/3 group/card cursor-pointer">
              <div className="relative aspect-[21/9] rounded-xl overflow-hidden mb-6 shadow-md">
                <img alt="Prophets Featured" className="w-full h-full object-cover group-hover/card:scale-105 transition-transform duration-1000" src="https://picsum.photos/seed/prophets/1200/600" />
                <div className="absolute inset-0 bg-gradient-to-r from-primary to-transparent opacity-60"></div>
                <div className="absolute inset-0 p-10 flex flex-col justify-end">
                  <div className="bg-secondary text-surface text-[10px] font-bold uppercase px-3 py-1 rounded w-max mb-3">Series Spotlight</div>
                  <h5 className="text-3xl font-headline font-bold text-surface mb-2">Isaiah: Visions of Peace</h5>
                  <p className="text-surface/80 max-w-lg text-sm mb-4">A multi-part series exploring the transformative prophecies of Yeshayahu and the concept of universal harmony.</p>
                  <div className="flex items-center gap-6">
                    <div className="flex items-center text-surface/90 text-xs font-bold gap-2">
                      <Youtube className="w-4 h-4" />
                      12 LESSONS
                    </div>
                    <div className="flex items-center text-surface/90 text-xs font-bold gap-2">
                      <Clock className="w-4 h-4" />
                      14 HOURS TOTAL
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="lg:w-1/3 flex flex-col gap-6">
              {[
                { title: 'Jeremiah: The Weeping Prophet', desc: 'Understanding the destruction and the promise of a new heart.', lessons: '8 Lessons', seed: 'torn' },
                { title: 'Ezekiel: The Chariot Vision', desc: 'Decoding the Ma\'aseh Merkavah and the Glory of G-d\'s departure.', lessons: '6 Lessons', seed: 'wheel' },
                { title: 'The Minor Prophets (Tre Asar)', desc: 'Short messages with eternal impacts: Hosea through Malachi.', lessons: '24 Lessons', seed: 'lamps' },
              ].map((item, idx) => (
                <div key={idx} className="flex gap-4 group/item cursor-pointer">
                  <div className="w-28 h-20 rounded-lg overflow-hidden flex-shrink-0">
                    <img alt={item.title} className="w-full h-full object-cover" src={`https://picsum.photos/seed/${item.seed}/200/150`} />
                  </div>
                  <div>
                    <h6 className="font-bold text-primary text-sm group-hover/item:text-secondary transition-colors">{item.title}</h6>
                    <p className="text-xs text-on-surface-variant line-clamp-2 mt-1">{item.desc}</p>
                    <span className="text-[9px] font-bold text-secondary uppercase mt-2 block tracking-widest">{item.lessons}</span>
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
