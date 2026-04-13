import { useState } from 'react';
import { Sidebar } from './components/Sidebar';
import { TopBar } from './components/TopBar';
import { MediaPlayer } from './components/MediaPlayer';
import { Dashboard } from './components/Dashboard';
import { TanakhBrowser } from './components/TanakhBrowser';
import { StudyMode } from './components/StudyMode';
import { MediaLibrary } from './components/MediaLibrary';
import { Settings } from './components/Settings';
import { Support } from './components/Support';
import { Account } from './components/Account';
import { Signup } from './components/Signup';
import { Chat } from './components/Chat';
import Analytics from './components/Analytics';
import { Screen, Lesson } from './types';
import { LESSONS } from './constants';

export default function App() {
  const [currentScreen, setCurrentScreen] = useState<Screen>('dashboard');
  const [activeLesson, setActiveLesson] = useState<Lesson | null>(LESSONS[0]);
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    if (!darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  };

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
      case 'settings':
        return <Settings darkMode={darkMode} onToggleDarkMode={toggleDarkMode} />;
      case 'support':
        return <Support />;
      case 'account':
        return <Account onScreenChange={setCurrentScreen} />;
      case 'signup':
        return <Signup onScreenChange={setCurrentScreen} />;
      default:
        return <Dashboard onPlayLesson={setActiveLesson} activeLesson={activeLesson} />;
    }
  };

  return (
    <div className="flex h-screen overflow-hidden">
      <Analytics />
      <Sidebar currentScreen={currentScreen} onScreenChange={setCurrentScreen} />
      <div className="flex-1 flex flex-col overflow-hidden min-w-0">
        <TopBar onScreenChange={setCurrentScreen} />
        <div className="flex-1 overflow-y-auto overflow-x-hidden" id="scroll">
          {renderScreen()}
        </div>
        <MediaPlayer activeLesson={activeLesson} />
        <Chat activeLesson={activeLesson} currentScreen={currentScreen} />
      </div>
    </div>
  );
}
