import React from 'react';
import { BookOpen, Share2, History, Mic, Bookmark, ArrowRight, Play, Library } from 'lucide-react';
import { LESSONS } from '../constants';
import { motion } from 'motion/react';
import { Lesson } from '../types';

interface DashboardProps {
  onPlayLesson: (lesson: Lesson) => void;
}

export const Dashboard: React.FC<DashboardProps> = ({ onPlayLesson }) => {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="pt-24 px-10 max-w-7xl mx-auto space-y-16 pb-32"
    >
      {/* Hero Header */}
      <section className="flex justify-between items-end border-b border-outline-variant/10 pb-8">
        <div className="flex items-center gap-6">
          <img 
            alt="Rabbi Ariel Azaria" 
            className="w-20 h-20 rounded-full border-2 border-secondary/20 object-cover shadow-md" 
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuD_l0QudZlZhL4jsBqgr-e0Uc8nVHZlrpz9ghT1LIp2E0YGH4k6Ll0ehd5Slf--nfuM1OCeKuQmPc1noJO5nuD9GJiUfR4u_wiIGcczbaIcte9IH1OOo9nNSYpJMi_6Zz1DAqKqsyu4w6agc3skI7ahS8zOhz3NA0lgTOhDz__0v528cdusugGjU0J2CIHIvNFxS8_D_6dKELs7F0DH_MjFrx0TkFE3yDDbcRXG8UT7kZIE2PdN8D3Zm4ELh_EMouPTrJynHFrq2PA"
          />
          <div>
            <h2 className="text-4xl font-headline font-bold text-primary mb-2">Shalom, Ariel</h2>
            <p className="text-on-surface-variant font-medium">Continue your journey through the sacred scrolls today.</p>
          </div>
        </div>
        <div className="text-right">
          <p className="text-secondary font-bold text-lg uppercase tracking-widest">12 Adar I, 5784</p>
          <p className="text-on-surface-variant text-sm font-semibold">Parashat Tetzaveh</p>
        </div>
      </section>

      {/* Main Dashboard Grid */}
      <div className="grid grid-cols-12 gap-10">
        {/* Verse of the Day Card */}
        <div className="col-span-12 lg:col-span-8">
          <div className="bg-surface-container-low p-12 rounded-xl shadow-sm border border-outline-variant/20 relative overflow-hidden group parchment-texture">
            <div className="absolute -right-16 -top-16 opacity-[0.03] pointer-events-none transition-transform duration-700 group-hover:scale-110">
              <BookOpen size={320} />
            </div>
            <div className="relative z-10 space-y-8">
              <div className="flex justify-between items-center">
                <span className="px-3 py-1 bg-secondary text-surface text-[10px] font-bold uppercase tracking-widest rounded">Daily Verse</span>
                <span className="font-headline font-bold text-xl text-primary">Tehillim 27:4</span>
              </div>
              <div className="space-y-10">
                <p className="hebrew-text text-4xl text-right font-bold text-primary leading-relaxed">
                  אַחַת שָׁאַלְתִּי מֵאֵת־יְהוָה אוֹתָהּ אֲבַקֵּשׁ שִׁבְתִּי בְּבֵית־יְהוָה כָּל־יְמֵי חַיַּי לַחֲזוֹת בְּנֹעַם־יְהוָה וּלְבַקֵּר בְּהֵיכָלוֹ
                </p>
                <p className="text-xl font-body text-on-surface-variant italic leading-relaxed pl-14 relative before:content-[''] before:absolute before:left-0 before:top-4 before:w-10 before:h-[2px] before:bg-secondary">
                  "One thing I have asked of the Lord, that I will seek after: that I may dwell in the house of the Lord all the days of my life, to behold the beauty of the Lord and to inquire in His temple."
                </p>
              </div>
              <div className="flex gap-6 pt-4 border-t border-outline-variant/10">
                <button className="flex items-center gap-2 text-secondary font-bold text-xs uppercase tracking-widest hover:underline transition-all">
                  <BookOpen className="w-4 h-4" />
                  Explore Commentary
                </button>
                <button className="flex items-center gap-2 text-primary/60 font-bold text-xs uppercase tracking-widest hover:text-primary transition-all">
                  <Share2 className="w-4 h-4" />
                  Share Wisdom
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Side Bento Column */}
        <div className="col-span-12 lg:col-span-4 flex flex-col gap-8">
          {/* Current Tractate */}
          <div className="bg-surface-container-low p-8 rounded-xl border border-outline-variant/20 flex flex-col justify-between h-48 parchment-texture">
            <div>
              <span className="text-on-surface-variant font-bold text-[10px] uppercase tracking-widest block mb-4">Current Tractate</span>
              <h3 className="text-2xl font-headline font-bold text-primary">Mishna Berakhot</h3>
            </div>
            <div className="space-y-2">
              <div className="w-full bg-surface-container-high h-1.5 rounded-full overflow-hidden">
                <div className="bg-secondary h-full w-[65%]"></div>
              </div>
              <p className="text-[10px] font-bold text-on-surface-variant uppercase tracking-wider">Perek 3, Mishna 2 • 65% Completed</p>
            </div>
          </div>

          {/* Study Streak */}
          <div className="bg-primary p-8 rounded-xl flex flex-col justify-between h-48 text-surface shadow-lg relative overflow-hidden">
            <div className="absolute top-0 right-0 p-8 opacity-10">
              <History size={72} />
            </div>
            <div className="flex justify-between items-center relative z-10">
              <span className="font-bold text-[10px] uppercase tracking-widest text-surface/60">Study Streak</span>
              <div className="text-secondary">🔥</div>
            </div>
            <h3 className="text-5xl font-headline font-bold relative z-10">14 <span className="text-xl font-body font-normal opacity-60">Days</span></h3>
            <p className="text-xs opacity-70 relative z-10">Keep it up! Your longest streak is 22 days.</p>
          </div>
        </div>
      </div>

      {/* Latest Lessons */}
      <section className="space-y-8">
        <div className="flex justify-between items-center mb-8 border-b border-outline-variant/10 pb-4">
          <h3 className="text-3xl font-headline font-bold text-primary">Latest From Rabbi Ariel</h3>
          <button className="text-secondary font-bold text-xs tracking-widest uppercase hover:underline flex items-center gap-2 group">
            View Library
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {LESSONS.map((lesson) => (
            <div 
              key={lesson.id} 
              className="group cursor-pointer"
              onClick={() => onPlayLesson(lesson)}
            >
              <div className="relative aspect-video rounded-xl overflow-hidden mb-4 shadow-sm group-hover:shadow-lg transition-all duration-500">
                <img alt={lesson.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" src={lesson.thumbnail} />
                <div className="absolute bottom-3 right-3 bg-black/70 text-white text-[10px] font-bold px-2 py-1 rounded">{lesson.duration}</div>
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                  <div className="w-16 h-16 bg-secondary rounded-full flex items-center justify-center shadow-2xl">
                    <Play className="text-surface w-8 h-8 fill-current ml-1" />
                  </div>
                </div>
              </div>
              <h4 className="font-headline font-bold text-lg text-primary mb-1 group-hover:text-secondary transition-colors">{lesson.title}</h4>
              <p className="text-sm text-on-surface-variant font-body line-clamp-2">{lesson.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Continue Previous Studies */}
      <section className="space-y-8">
        <h3 className="text-xl font-headline font-bold text-primary flex items-center gap-3">
          <History className="w-6 h-6" />
          Continue Previous Studies
        </h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            { label: 'Genesis 12', title: 'Lech Lecha', icon: BookOpen },
            { label: 'Berakhot 1:4', title: 'Zeman Keriat Shema', icon: Library },
            { label: 'Podcast', title: 'The Meaning of Exile', icon: Mic },
            { label: 'Saved List', title: 'Holiday Study Prep', icon: Bookmark },
          ].map((item, idx) => (
            <button key={idx} className="bg-surface-container-low hover:bg-surface-container-high p-5 rounded-xl border border-outline-variant/10 hover:border-secondary/30 transition-all flex items-center gap-4 group/item text-left">
              <div className="w-12 h-12 bg-primary/10 rounded flex items-center justify-center text-primary group-hover/item:bg-secondary group-hover/item:text-surface transition-colors">
                <item.icon className="w-6 h-6" />
              </div>
              <div>
                <p className="text-[9px] font-bold uppercase tracking-[0.15em] text-secondary">{item.label}</p>
                <p className="text-sm font-headline font-bold text-primary">{item.title}</p>
              </div>
            </button>
          ))}
        </div>
      </section>
    </motion.div>
  );
};
