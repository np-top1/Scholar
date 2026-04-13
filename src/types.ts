export type Screen = 'dashboard' | 'browser' | 'study' | 'media' | 'settings' | 'support' | 'account' | 'signup';

export interface Word {
  heb: string;
  trans: string;
  mean: string;
  root: string;
  gram: string;
  note: string;
}

export interface Verse {
  id: string;
  number: number;
  hebrew: string;
  english: string;
  reference: string;
  book: string;
  chapter: number;
  rashi?: string;
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
