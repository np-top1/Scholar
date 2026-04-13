import React, { useState, useRef, useEffect } from 'react';
import { Send, Bot, User, Sparkles, X, Minimize2, Maximize2 } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { GoogleGenAI } from '@google/genai';

import { Screen, Lesson } from '../types';

const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY });

interface Message {
  role: 'user' | 'model';
  content: string;
}

interface ChatProps {
  activeLesson: Lesson | null;
  currentScreen: Screen;
}

export const Chat: React.FC<ChatProps> = ({ activeLesson, currentScreen }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isMinimized, setIsMinimized] = useState(false);
  const [input, setInput] = useState('');
  const [messages, setMessages] = useState<Message[]>([
    { role: 'model', content: 'שלום! אני עוזר הלימוד שלך. איך אוכל לעזור לך היום בלימוד סיפורי אליהו הנביא?' }
  ]);
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSend = async () => {
    if (!input.trim() || isLoading) return;

    const userMessage = input.trim();
    setInput('');
    setMessages(prev => [...prev, { role: 'user', content: userMessage }]);
    setIsLoading(true);

    const contextInfo = activeLesson 
      ? `The user is currently viewing the lesson: "${activeLesson.title}" which covers ${activeLesson.book || 'II Kings'} chapter ${activeLesson.chapter || 1}.`
      : `The user is currently on the ${currentScreen} screen.`;

    try {
      const response = await ai.models.generateContent({
        model: 'gemini-2.0-flash-exp',
        contents: [
          ...messages.map(m => ({
            role: m.role,
            parts: [{ text: m.content }],
          })),
          { role: 'user', parts: [{ text: userMessage }] }
        ],
        config: {
          systemInstruction: `You are a Tanakh teacher specializing in the stories of Elijah the Prophet in II Kings. 
          Respond using a mixture of Hebrew and English (Code-switching). Use Hebrew for key terms, verses, and traditional concepts, and English for explanations and context. 
          Be scholarly yet accessible.
          
          CURRENT CONTEXT: ${contextInfo}
          
          If the user asks a question, prioritize answering based on the current context (lesson or passage) they are viewing. 
          If the question is general, answer normally but you can reference the current context if relevant.`,
        }
      });

      const text = response.text || 'מצטער, לא הצלחתי להפיק תשובה.';
      setMessages(prev => [...prev, { role: 'model', content: text }]);
    } catch (error) {
      console.error('Chat Error:', error);
      setMessages(prev => [...prev, { role: 'model', content: 'מצטער, חלה שגיאה בחיבור. נסה שוב מאוחר יותר.' }]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="fixed bottom-24 right-8 z-[60]">
      <AnimatePresence>
        {!isOpen && (
          <motion.button
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0, opacity: 0 }}
            onClick={() => setIsOpen(true)}
            className="w-14 h-14 bg-primary text-white rounded-full flex items-center justify-center shadow-s3 hover:bg-primary/90 transition-all group"
          >
            <Sparkles className="w-6 h-6 text-secondary group-hover:scale-110 transition-transform" />
          </motion.button>
        )}
      </AnimatePresence>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ y: 100, opacity: 0, scale: 0.9 }}
            animate={{ y: 0, opacity: 1, scale: 1 }}
            exit={{ y: 100, opacity: 0, scale: 0.9 }}
            className={`bg-surface border border-outline-variant rounded-xl shadow-s3 flex flex-col overflow-hidden transition-all duration-300 ${
              isMinimized ? 'h-16 w-72' : 'h-[32rem] w-[24rem]'
            }`}
          >
            {/* Header */}
            <div className="bg-primary p-4 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-secondary/20 flex items-center justify-center">
                  <Bot className="w-5 h-5 text-secondary" />
                </div>
                <div>
                  <h3 className="text-white font-headline text-sm font-bold">עוזר לימוד AI</h3>
                  {!isMinimized && (
                    <div className="flex items-center gap-1.5">
                      <p className="text-white/40 text-[0.6rem] uppercase tracking-widest">Tanakh Assistant</p>
                      {activeLesson && (
                        <>
                          <span className="w-1 h-1 rounded-full bg-secondary/40" />
                          <p className="text-secondary/80 text-[0.6rem] font-bold truncate max-w-[10rem]">
                            Context: {activeLesson.title}
                          </p>
                        </>
                      )}
                    </div>
                  )}
                </div>
              </div>
              <div className="flex items-center gap-2">
                <button 
                  onClick={() => setIsMinimized(!isMinimized)}
                  className="p-1.5 hover:bg-white/10 rounded-full text-white/60 transition-colors"
                >
                  {isMinimized ? <Maximize2 className="w-4 h-4" /> : <Minimize2 className="w-4 h-4" />}
                </button>
                <button 
                  onClick={() => setIsOpen(false)}
                  className="p-1.5 hover:bg-white/10 rounded-full text-white/60 transition-colors"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>
            </div>

            {!isMinimized && (
              <>
                {/* Messages */}
                <div className="flex-1 overflow-y-auto p-4 space-y-4 custom-scrollbar bg-surface-container-low/30">
                  {messages.map((msg, idx) => (
                    <div key={idx} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                      <div className={`flex gap-2.5 max-w-[85%] ${msg.role === 'user' ? 'flex-row-reverse' : ''}`}>
                        <div className={`w-7 h-7 rounded-full flex items-center justify-center shrink-0 mt-1 ${
                          msg.role === 'user' ? 'bg-secondary text-white' : 'bg-primary text-secondary'
                        }`}>
                          {msg.role === 'user' ? <User className="w-4 h-4" /> : <Bot className="w-4 h-4" />}
                        </div>
                        <div className={`p-3 rounded-lg text-[0.85rem] leading-relaxed ${
                          msg.role === 'user' 
                            ? 'bg-secondary text-white rounded-tr-none' 
                            : 'bg-white border border-outline-variant text-primary rounded-tl-none shadow-s0'
                        }`}>
                          {msg.content}
                        </div>
                      </div>
                    </div>
                  ))}
                  {isLoading && (
                    <div className="flex justify-start">
                      <div className="flex gap-2.5">
                        <div className="w-7 h-7 rounded-full bg-primary text-secondary flex items-center justify-center animate-pulse">
                          <Bot className="w-4 h-4" />
                        </div>
                        <div className="bg-white border border-outline-variant p-3 rounded-lg rounded-tl-none shadow-s0">
                          <div className="flex gap-1">
                            <div className="w-1.5 h-1.5 bg-secondary/40 rounded-full animate-bounce"></div>
                            <div className="w-1.5 h-1.5 bg-secondary/40 rounded-full animate-bounce [animation-delay:0.2s]"></div>
                            <div className="w-1.5 h-1.5 bg-secondary/40 rounded-full animate-bounce [animation-delay:0.4s]"></div>
                          </div>
                        </div>
                      </div>
                    </div>
                  )}
                  <div ref={messagesEndRef} />
                </div>

                {/* Input */}
                <div className="p-4 bg-white border-t border-outline-variant">
                  <div className="relative">
                    <input
                      type="text"
                      value={input}
                      onChange={(e) => setInput(e.target.value)}
                      onKeyDown={(e) => e.key === 'Enter' && handleSend()}
                      placeholder="שאל שאלה..."
                      className="w-full bg-surface-container-low border border-outline-variant rounded-lg py-2.5 pl-4 pr-12 text-[0.85rem] outline-none focus:border-secondary transition-colors"
                    />
                    <button
                      onClick={handleSend}
                      disabled={!input.trim() || isLoading}
                      className="absolute right-2 top-1.5 p-1.5 bg-primary text-secondary rounded-md hover:bg-primary/90 transition-all disabled:opacity-50"
                    >
                      <Send className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              </>
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};
