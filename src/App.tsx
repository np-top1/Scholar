import { useState } from 'react';
import { Sidebar } from './components/Sidebar';
import { TopBar } from './components/TopBar';
import { MediaPlayer } from './components/MediaPlayer';
import { Dashboard } from './components/Dashboard';
import { TanakhBrowser } from './components/TanakhBrowser';
import { StudyMode } from './components/StudyMode';
import { MediaLibrary } from './components/MediaLibrary';
import { Screen, Lesson } from './types';
import { LESSONS } from './constants';

export default function App() {
  const [currentScreen, setCurrentScreen] = useState<Screen>('dashboard');
  const [activeLesson, setActiveLesson] = useState<Lesson | null>(LESSONS[0]);

  const renderScreen = () => {
    switch (currentScreen) {
      case 'dashboard':
        return <Dashboard onPlayLesson={setActiveLesson} activeLesson={activeLesson} />;
      case 'browser':
        return <TanakhBrowser onPlayLesson={setActiveLesson} activeLesson={activeLesson} />;
      case 'study':
        return <StudyMode onPlayLesson={setActiveLesson} activeLesson={activeLesson} />;
      case 'media':
        return <MediaLibrary onPlayLesson={setActiveLesson} activeLesson={activeLesson} />;
      default:
        return <Dashboard onPlayLesson={setActiveLesson} activeLesson={activeLesson} />;
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <Sidebar currentScreen={currentScreen} onScreenChange={setCurrentScreen} />
      <div className="ml-64">
        <TopBar />
        <main className="min-h-screen">
          {renderScreen()}
        </main>
        <MediaPlayer activeLesson={activeLesson} />
      </div>
    </div>
  );
}
