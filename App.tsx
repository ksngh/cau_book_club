
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
        
        {/* top status mock removed */}

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

        {/* bottom safety area removed */}
      </div>
    </div>
  );
};

export default App;
