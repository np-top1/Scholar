import React from 'react';
import { BookOpen, Share2, History, Bookmark, ArrowRight, Play, Library, Flame, Youtube, Clock, TrendingUp, Calendar, ChevronRight } from 'lucide-react';
import { LESSONS } from '../constants';
import { motion } from 'framer-motion';
import { Lesson } from '../types';

interface DashboardProps {
  onPlayLesson: (lesson: Lesson) => void;
  activeLesson: Lesson | null;
}

export const Dashboard: React.FC<DashboardProps> = ({ onPlayLesson }) => {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="py-6 px-7 max-w-[74rem] mx-auto space-y-10 pb-32"
    >
      {/* Hero Header */}
      <section className="flex justify-between items-end border-b border-outline-variant pb-6">
        <div>
          <h2 className="font-headline text-[2rem] font-bold text-primary mb-1">Shalom</h2>
          <p className="text-on-surface-variant text-sm font-medium">Continue your journey through the sacred scrolls today.</p>
        </div>
        <div className="text-right">
          <div className="font-headline text-base font-bold text-secondary">תנ״ך</div>
          <div className="text-[0.75rem] text-on-surface-variant font-semibold">Shiurim · אריאל עזריה</div>
        </div>
      </section>

      {/* Main Dashboard Grid */}
      <div className="grid grid-cols-12 gap-6">
        {/* Verse of the Day Card */}
        <div className="col-span-12 lg:col-span-8">
          <div className="bg-surface border border-outline-variant rounded-lg p-8 relative overflow-hidden shadow-s0 parchment-texture group">
            <div className="absolute -right-4 -top-4 font-headline text-[13rem] font-bold text-primary opacity-[0.022] leading-none pointer-events-none select-none">
              א
            </div>
            <div className="relative z-10 space-y-6">
              <div className="flex justify-between items-center">
                <span className="bg-secondary text-on-secondary text-[0.55rem] font-bold uppercase tracking-[0.14em] px-2.5 py-0.5 rounded-[2px]">Daily Verse</span>
                <span className="font-headline text-[0.95rem] font-bold text-primary">II Kings 1:8</span>
              </div>
              <div className="space-y-4">
                <p className="hebrew-text text-[1.75rem] font-bold text-primary leading-[1.7] text-right">
                  וַיֹּאמְרוּ אֵלָיו אִישׁ בַּעַל שֵׂעָר וְאֵזוֹר עוֹר אָזוּר בְּמָתְנָיו וַיֹּאמַר אֵלִיָּה הַתִּשְׁבִּי הוּא׃
                </p>
                <p className="text-[0.9rem] font-body text-on-surface-variant italic leading-[1.7] pl-10 relative before:content-[''] before:absolute before:left-0 before:top-[0.52rem] before:w-[1.6rem] before:h-[2px] before:bg-secondary">
                  "He was a hairy man, and girt with a girdle of leather about his loins." And he said: "It is Elijah the Tishbite."
                </p>
              </div>
              <div className="flex gap-5 pt-4 border-t border-outline-variant">
                <button className="flex items-center gap-1.5 text-secondary font-bold text-[0.6rem] uppercase tracking-[0.09em] hover:opacity-70 transition-opacity">
                  <BookOpen className="w-[15px] h-[15px]" />
                  Explore Commentary
                </button>
                <button className="flex items-center gap-1.5 text-primary/38 font-bold text-[0.6rem] uppercase tracking-[0.09em] hover:text-primary transition-colors">
                  <Share2 className="w-[15px] h-[15px]" />
                  Share Wisdom
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Side Bento Column */}
        <div className="col-span-12 lg:col-span-4 flex flex-col gap-4">
          {/* Study Streak */}
          <div className="bg-primary rounded-lg p-6 flex flex-col justify-between min-h-[10rem] relative overflow-hidden shadow-s1 text-on-primary">
            <div className="absolute top-0 right-0 p-4 opacity-[0.07]">
              <Flame size={64} />
            </div>
            <div className="flex justify-between items-center relative z-10">
              <span className="text-[0.56rem] font-bold uppercase tracking-[0.14em] text-on-primary/50">Study Streak</span>
              <Flame className="w-[18px] h-[18px] text-secondary fill-secondary" />
            </div>
            <h3 className="font-headline text-[2.6rem] font-bold relative z-10 leading-[1.1]">14 <span className="text-[0.95rem] font-body font-normal opacity-40">Days</span></h3>
            <p className="text-[0.64rem] text-on-primary/46 relative z-10">Keep it up! Longest: 22 days.</p>
          </div>

          {/* Shiurim Progress */}
          <div className="bg-surface-container-low border border-outline-variant rounded-lg p-6 flex flex-col justify-between min-h-[10rem]">
            <div>
              <span className="text-[0.56rem] font-bold uppercase tracking-[0.14em] text-on-surface-variant">Shiurim Progress</span>
              <div className="font-headline text-[1.1rem] font-bold text-primary mt-1.5">אריאל עזריה</div>
              <div className="text-[0.75rem] text-on-surface-variant mt-0.5">Tanakh Series · 4 Videos</div>
            </div>
            <div>
              <div className="h-[5px] bg-surface-container-high rounded-full overflow-hidden mt-1.5">
                <div className="h-full bg-secondary w-[50%]"></div>
              </div>
              <p className="text-[0.56rem] font-bold uppercase tracking-[0.09em] text-on-surface-variant mt-1.5">2 of 4 Watched</p>
            </div>
          </div>
        </div>
      </div>

      {/* Latest Lessons */}
      <section className="space-y-6">
        <div className="flex justify-between items-center border-b border-outline-variant pb-3">
          <h3 className="font-headline text-[1.45rem] font-bold text-primary">Latest From אריאל עזריה</h3>
          <button className="text-secondary font-bold text-[0.6rem] uppercase tracking-[0.12em] hover:underline flex items-center gap-1.5 group">
            View Library
            <ArrowRight className="w-[13px] h-[13px] group-hover:translate-x-1 transition-transform" />
          </button>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {LESSONS.map((lesson) => (
            <div 
              key={lesson.id} 
              className="group cursor-pointer"
              onClick={() => onPlayLesson(lesson)}
            >
              <div className="relative aspect-video rounded-lg overflow-hidden mb-3.5 shadow-s0 transition-shadow duration-350 group-hover:shadow-s2">
                <img alt={lesson.title} className="w-full h-full object-cover transition-transform duration-550 group-hover:scale-105" src={lesson.thumbnail} />
                <div className="absolute inset-0 bg-primary/18 group-hover:bg-transparent transition-colors duration-350"></div>
                <div className="absolute bottom-2.5 right-2.5 bg-primary/88 text-on-primary text-[0.56rem] font-bold px-2 py-0.5 rounded-[2px]">{lesson.duration}</div>
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-280">
                  <div className="w-[52px] h-[52px] bg-secondary rounded-full flex items-center justify-center shadow-s2">
                    <Play className="text-on-secondary w-6 h-6 fill-current ml-1" />
                  </div>
                </div>
              </div>
              <h4 className="font-headline font-bold text-[0.95rem] text-primary mb-1 group-hover:text-secondary transition-colors">{lesson.title}</h4>
              <p className="text-[0.75rem] text-on-surface-variant leading-relaxed line-clamp-2">{lesson.description}</p>
              <div className="flex items-center gap-2.5 mt-2.5">
                <span className="text-[0.56rem] font-bold text-secondary uppercase tracking-[0.1em]">Video Shiur</span>
                <span className="w-[3px] h-[3px] rounded-full bg-surface-container-high"></span>
                <span className="text-[0.56rem] font-medium text-on-surface-variant uppercase tracking-[0.1em]">Click to watch</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Continue Previous Studies */}
      <section className="space-y-4">
        <h3 className="text-[1rem] font-headline font-bold text-primary flex items-center gap-2">
          <History className="w-[18px] h-[18px]" />
          Continue Previous Studies
        </h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {[
            { label: 'II Kings 1', title: 'Elijah & Ahaziah', icon: BookOpen },
            { label: 'II Kings 2', title: 'The Fiery Chariot', icon: Library },
            { label: 'Video', title: 'Shiur א׳', icon: Youtube, lesson: LESSONS[0] },
            { label: 'Saved', title: 'Study Notes', icon: Bookmark },
          ].map((item, idx) => (
            <button 
              key={idx} 
              onClick={() => item.lesson && onPlayLesson(item.lesson)}
              className="bg-surface-container-low hover:bg-surface-container-high p-4 rounded-lg border border-outline-variant/10 hover:border-secondary/26 transition-all flex items-center gap-3.5 group/item text-left"
            >
              <div className="w-[38px] h-[38px] bg-primary/7 rounded flex items-center justify-center text-primary group-hover/item:bg-secondary group-hover/item:text-on-secondary transition-colors">
                <item.icon className="w-[17px] h-[17px]" />
              </div>
              <div>
                <p className="text-[0.56rem] font-bold uppercase tracking-[0.13em] text-secondary">{item.label}</p>
                <p className="text-[0.85rem] font-headline font-bold text-primary">{item.title}</p>
              </div>
            </button>
          ))}
        </div>
      </section>
    </motion.div>
  );
};
