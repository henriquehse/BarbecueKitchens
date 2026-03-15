'use client';

import { motion } from 'framer-motion';
import { ChevronUp, MessageSquare } from 'lucide-react';

export function BottomDock({ style }: { style?: any }) {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <motion.div 
      style={style}
      className="fixed bottom-6 md:bottom-8 left-1/2 -translate-x-1/2 z-[100] flex items-center gap-1 md:gap-2 p-1.5 md:p-2 bg-secondary/80 backdrop-blur-xl border border-white/5 rounded-full shadow-2xl w-[90%] max-w-max"
    >
      <button
        onClick={scrollToTop}
        className="w-8 h-8 md:w-10 md:h-10 flex items-center justify-center rounded-full hover:bg-white/5 transition-colors group"
        aria-label="Scroll to top"
      >
        <ChevronUp className="w-4 h-4 md:w-5 md:h-5 text-neutral/60 group-hover:text-foreground transition-colors" />
      </button>
      
      <div className="w-px h-5 md:h-6 bg-white/10" />
      
      <a 
        href="https://wa.me/5511978546562"
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center gap-2 md:gap-3 px-3 md:px-4 py-1.5 md:py-2 bg-accent text-black font-syne font-black text-[10px] md:text-xs uppercase tracking-tighter rounded-full hover:scale-105 active:scale-95 transition-all flex-1 md:flex-none justify-center"
      >
        <span>Solicitar Projeto</span>
        <MessageSquare className="w-3.5 h-3.5 md:w-4 md:h-4" />
      </a>
    </motion.div>
  );
}
