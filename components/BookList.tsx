
import React from 'react';
import { Book } from '../types';

interface BookListProps {
  books: Book[];
  onSelectBook: (id: string) => void;
}

export const BookList: React.FC<BookListProps> = ({ books, onSelectBook }) => {
  return (
    <div className="flex-1 flex flex-col overflow-y-auto hide-scrollbar">
      {/* Header */}
      <header className="px-6 py-6 border-b border-slate-100 dark:border-slate-800 bg-inherit">
        <p className="text-[10px] text-slate-400 dark:text-slate-500 font-bold tracking-[0.2em] uppercase mb-1">
          중앙가르드 독서모임
        </p>
        <h1 className="font-display text-4xl font-bold italic text-primary dark:text-white">
          CAU Book Club
        </h1>
      </header>

      <main className="px-6 pt-6 pb-12 space-y-10">
        {/* Featured Card */}
        <div className="group relative rounded-2xl overflow-hidden aspect-[16/9] shadow-md cursor-pointer transform transition-all active:scale-[0.98]">
          <img 
            alt="Sophisticated library" 
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" 
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuAJONyHY6sfZKK-Xq26f_lR0CwR5BQmXfXhUzEt_Y7XUlIxxWWeq0UEvW66JO7mDwX_LqHZEmV6FocGpokbWoKcMn1gKZqroYIvdIbC7rF9XcmBE7xOout2ibeHrQ99nrQBZBpBPH1jbFn1vp1fpb7KCRYhlx3qEGl7CbZ9XA9bdfx9hYAWgeRdRIyzJbSnThveAMTtD5DrdXTnt2Sdt69IoKK8kayQhsuwODrh6JrwsBEBmf-qf2ZN6o0loEMG_Iw3_IqRL0afais" 
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent flex flex-col justify-end p-5">
            <h3 className="text-white font-display text-2xl font-bold leading-tight">Today's Reflection</h3>
            <p className="text-white/80 text-xs mt-1">Exploring the Classics of Modern Thought</p>
          </div>
        </div>

        {/* Book Grid */}
        <div className="grid grid-cols-2 gap-x-5 gap-y-10">
          {books.map((book) => (
            <div 
              key={book.id} 
              className="flex flex-col group cursor-pointer"
              onClick={() => onSelectBook(book.id)}
            >
              <div className="aspect-[2/3] bg-slate-100 dark:bg-slate-800 rounded-lg shadow-sm mb-3 overflow-hidden transform transition-all group-active:scale-[0.97] group-hover:shadow-lg">
                <img 
                  alt={book.title} 
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105" 
                  src={book.coverUrl} 
                />
              </div>
              <h4 className="font-bold text-sm leading-snug mb-1 line-clamp-2 dark:text-slate-100">
                {book.title}
              </h4>
              <p className="text-[11px] text-slate-500 dark:text-slate-400">
                {book.author}
              </p>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
};
