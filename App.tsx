
import React, { useState, useEffect } from 'react';
import { BookList } from './components/BookList';
import { BookDetail } from './components/BookDetail';
import { Book } from './types';
import { BOOKS } from './constants';

const App: React.FC = () => {
  const [selectedBookId, setSelectedBookId] = useState<string | null>(() => {
    // Initialize from URL param or history state so deep links / reloads work
    try {
      const params = new URLSearchParams(window.location.search);
      const id = params.get('book');
      if (id) return id;
    } catch (e) {
      // ignore in non-browser environments
    }
    // fallback to history.state (if user navigated via pushState)
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const initialState = (window.history && (window.history.state as any));
    return initialState && initialState.selectedBookId ? initialState.selectedBookId : null;
  });
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [isDarkMode]);

  const toggleTheme = () => setIsDarkMode(prev => !prev);

  // Helper to open a book and push a history entry so browser back works
  const openBook = (id: string) => {
    setSelectedBookId(id);
    try {
      window.history.pushState({ selectedBookId: id }, '', `?book=${encodeURIComponent(id)}`);
    } catch (e) {
      // ignore if pushState not available
    }
  };

  const selectedBook = BOOKS.find(b => b.id === selectedBookId);

  // Listen for popstate (browser back / forward / hardware back on mobile)
  useEffect(() => {
    const onPop = (ev: PopStateEvent) => {
      // Try state first, then URL param
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      const state = (ev.state as any) || {};
      if (state && state.selectedBookId) {
        setSelectedBookId(state.selectedBookId);
        return;
      }
      try {
        const params = new URLSearchParams(window.location.search);
        const id = params.get('book');
        setSelectedBookId(id);
      } catch (e) {
        setSelectedBookId(null);
      }
    };

    window.addEventListener('popstate', onPop);
    return () => window.removeEventListener('popstate', onPop);
  }, []);

  return (
    <div className="flex justify-center min-h-screen">
      <div className="w-full max-w-[430px] bg-bg-light dark:bg-bg-dark min-h-screen relative flex flex-col shadow-2xl border-x border-slate-200 dark:border-slate-800">
        
        {/* top status mock removed */}

        {selectedBookId && selectedBook ? (
          <BookDetail 
            book={selectedBook} 
            // use history.back so browser / mobile back buttons behave consistently
            onBack={() => window.history.back() } 
          />
        ) : (
          <BookList 
            books={BOOKS} 
            onSelectBook={openBook} 
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
