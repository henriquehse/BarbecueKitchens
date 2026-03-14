'use client';

import { ChevronUp, MessageSquare } from 'lucide-react';

export function BottomDock() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="fixed bottom-8 left-1/2 -translate-x-1/2 z-[100] flex items-center gap-2 p-2 bg-secondary/80 backdrop-blur-xl border border-white/5 rounded-full shadow-2xl">
      <button
        onClick={scrollToTop}
        className="w-10 h-10 flex items-center justify-center rounded-full hover:bg-white/5 transition-colors group"
        aria-label="Scroll to top"
      >
        <ChevronUp className="w-5 h-5 text-neutral/60 group-hover:text-foreground transition-colors" />
      </button>
      
      <div className="w-px h-6 bg-white/10" />
      
      <a 
        href="https://wa.me/5511978546562"
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center gap-3 px-4 py-2 bg-accent text-black font-syne font-bold text-xs uppercase tracking-tighter rounded-full hover:scale-105 active:scale-95 transition-all"
      >
        <span>Solicitar Projeto</span>
        <MessageSquare className="w-4 h-4" />
      </a>
    </div>
  );
}
