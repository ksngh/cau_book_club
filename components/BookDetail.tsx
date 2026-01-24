
import React from 'react';
import { Book } from '../types';
import { REVIEWS } from '../constants';

interface BookDetailProps {
  book: Book;
  onBack: () => void;
}

export const BookDetail: React.FC<BookDetailProps> = ({ book, onBack }) => {
  return (
    <div className="flex-1 flex flex-col overflow-y-auto hide-scrollbar bg-slate-50 dark:bg-slate-900">
      {/* Header Sticky */}
      <header className="sticky top-0 z-50 bg-slate-50/80 dark:bg-slate-900/80 backdrop-blur-md px-4 h-16 flex items-center justify-between border-b border-slate-100 dark:border-slate-800">
        <button 
          onClick={onBack}
          className="p-2 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-full transition-colors flex items-center"
        >
          <span className="material-symbols-outlined align-middle text-[20px]">arrow_back_ios_new</span>
        </button>
        <h1 className="text-md font-bold tracking-tight text-slate-800 dark:text-slate-100">도서 상세 정보</h1>
        {/* spacer to keep header title centered when right-side action is removed */}
        <div className="w-10" aria-hidden="true" />
      </header>

      <main className="pb-12">
        {/* Book Cover Visual */}
        <section className="px-6 py-10 flex flex-col items-center">
          <div className="relative w-52 aspect-[2/3] shadow-2xl rounded-xl overflow-hidden transform transition-all duration-500 hover:scale-[1.02]">
            <img 
              alt={book.title} 
              className="w-full h-full object-cover" 
              src={book.coverUrl} 
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
          </div>
          <div className="mt-8 text-center px-4">
            <span className="inline-block px-3 py-1.5 bg-accent/10 text-accent text-[10px] font-bold rounded-full mb-3 uppercase tracking-widest">
              {book.category || 'Curated Classics'}
            </span>
            <h2 className="text-3xl font-bold leading-tight mb-2 dark:text-white">
              {book.title}
            </h2>
            <p className="text-lg text-slate-500 dark:text-slate-400 font-medium italic">
              {book.author}
            </p>
          </div>
        </section>

        {/* Summary Card */}
        <section className="px-6 space-y-4">
          <div className="bg-white dark:bg-slate-800/60 p-6 rounded-ios shadow-sm border border-slate-100 dark:border-slate-700">
            <h3 className="text-xs font-bold text-accent mb-4 flex items-center gap-2 uppercase tracking-wider">
              <span className="material-symbols-outlined text-[16px]">menu_book</span> 주제 및 요지
            </h3>
            <p className="leading-relaxed text-sm text-slate-700 dark:text-slate-300">
              {book.description || "이 도서의 상세 설명이 곧 업데이트될 예정입니다. 책 클럽 회원들과 함께 깊이 있는 논의를 시작해보세요."}
            </p>
          </div>
        </section>

        {/* Schedule Card */}
        <section className="mt-8 px-6">
          <h3 className="text-xl font-bold mb-5 px-1 dark:text-white">독서 모임 일정</h3>
          <div className="bg-accent text-white p-7 rounded-ios shadow-xl shadow-accent/20 relative overflow-hidden group">
            <div className="absolute -right-8 -top-8 w-40 h-40 bg-white/10 rounded-full blur-3xl group-hover:scale-110 transition-transform"></div>
            <div className="relative z-10 space-y-5">
              <div className="flex items-start gap-4">
                <div className="bg-white/20 p-2.5 rounded-xl shadow-sm">
                  <span className="material-symbols-outlined text-[20px]">calendar_today</span>
                </div>
                <div>
                  <p className="text-[11px] text-white/70 font-medium uppercase tracking-wider">날짜 및 시간</p>
                  <p className="text-lg font-bold">2024년 6월 15일 (토) 오후 3:00</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="bg-white/20 p-2.5 rounded-xl shadow-sm">
                  <span className="material-symbols-outlined text-[20px]">location_on</span>
                </div>
                <div>
                  <p className="text-[11px] text-white/70 font-medium uppercase tracking-wider">장소</p>
                  <p className="text-lg font-bold underline underline-offset-8 decoration-white/30">성수동 북카페 '고요'</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Reviews Section */}
        <section className="mt-12 px-6">
          <div className="flex items-center justify-between mb-6 px-1">
            <h3 className="text-xl font-bold dark:text-white">Community Reflections</h3>
            <span className="text-xs text-slate-400 font-semibold tracking-wide uppercase">
              {REVIEWS.length * 3} Reviews
            </span>
          </div>
          <div className="space-y-4">
            {REVIEWS.map((review) => (
              <div key={review.id} className="bg-white dark:bg-slate-800/40 p-5 rounded-ios border border-slate-100 dark:border-slate-800 shadow-sm transition-all hover:shadow-md">
                <div className="flex items-center gap-3 mb-3">
                  <div className={`w-9 h-9 rounded-full flex items-center justify-center text-[10px] font-black ${review.avatarColor}`}>
                    {review.initials}
                  </div>
                  <div className="flex flex-col">
                    <span className="text-sm font-bold dark:text-slate-100">{review.userName}</span>
                    <span className="text-[10px] text-slate-400 font-medium">{review.time}</span>
                  </div>
                </div>
                <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed font-normal">
                  {review.content}
                </p>
              </div>
            ))}
          </div>
        </section>
      </main>
    </div>
  );
};
