export type Screen = 'dashboard' | 'browser' | 'study' | 'media';

export interface Verse {
  id: string;
  number: number;
  hebrew: string;
  english: string;
  reference: string;
  book: string;
  chapter: number;
}

export interface Lesson {
  id: string;
  title: string;
  description: string;
  duration: string;
  thumbnail: string;
  author: string;
  youtubeId?: string;
  book?: string;
  chapter?: number;
}

export interface Note {
  id: string;
  timestamp?: string;
  concept?: string;
  content: string;
  lessonId?: string;
}
