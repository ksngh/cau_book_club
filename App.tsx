
import React, { useState, useEffect } from 'react';
import { BookList } from './components/BookList';
import { BookDetail } from './components/BookDetail';
import { Book } from './types';
import { BOOKS } from './constants';

const App: React.FC = () => {
  const [selectedBookId, setSelectedBookId] = useState<string | null>(null);
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [isDarkMode]);

  const toggleTheme = () => setIsDarkMode(prev => !prev);

  const selectedBook = BOOKS.find(b => b.id === selectedBookId);

  return (
    <div className="flex justify-center min-h-screen">
      <div className="w-full max-w-[430px] bg-bg-light dark:bg-bg-dark min-h-screen relative flex flex-col shadow-2xl border-x border-slate-200 dark:border-slate-800">
        
        {/* iOS Status Bar Mock */}
        <div className="h-[44px] flex justify-between items-center px-6 pt-2 sticky top-0 bg-inherit z-50 backdrop-blur-md">
          <span className="text-xs font-semibold">9:41</span>
          <div className="flex items-center space-x-1.5">
            <span className="material-symbols-outlined text-sm">signal_cellular_4_bar</span>
            <span className="material-symbols-outlined text-sm">wifi</span>
            <span className="material-symbols-outlined text-sm">battery_full</span>
          </div>
        </div>

        {selectedBookId && selectedBook ? (
          <BookDetail 
            book={selectedBook} 
            onBack={() => setSelectedBookId(null)} 
          />
        ) : (
          <BookList 
            books={BOOKS} 
            onSelectBook={setSelectedBookId} 
          />
        )}

        {/* Floating Theme Toggle */}
        <button 
          onClick={toggleTheme}
          className="fixed bottom-6 right-6 lg:right-[calc(50%-215px+24px)] w-12 h-12 bg-white dark:bg-slate-800 rounded-full shadow-lg flex items-center justify-center border border-slate-200 dark:border-slate-700 z-50 transform active:scale-95 transition-all"
        >
          <span className="material-symbols-outlined text-slate-600 dark:text-slate-300">
            {isDarkMode ? 'light_mode' : 'dark_mode'}
          </span>
        </button>

        {/* Bottom Safety Area Mock */}
        <div className="h-[34px] w-full flex justify-center items-end pb-2">
          <div className="w-1/3 h-[5px] bg-slate-200 dark:bg-slate-800 rounded-full"></div>
        </div>
      </div>
    </div>
  );
};

export default App;
