'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChefHat } from 'lucide-react';
import { cn } from '@/lib/utils';

export function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <header className="fixed top-0 left-0 w-full z-[100] p-6 flex justify-between items-center transition-all duration-500 backdrop-blur-md">
        {/* Aesthetic Blur Line */}
        <div className="absolute top-0 left-0 w-full h-[1px] bg-white/10" />
        
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 border border-accent/50 flex items-center justify-center bg-secondary/80 backdrop-blur-md relative overflow-hidden group">
            <motion.div
              animate={{ rotate: [0, 5, -5, 0] }}
              transition={{ duration: 4, repeat: Infinity }}
            >
              <ChefHat className="w-5 h-5 text-accent" />
            </motion.div>
            <div className="absolute inset-0 bg-accent/10 opacity-0 group-hover:opacity-100 transition-opacity" />
          </div>
          <div className="hidden sm:block">
            <h1 className="text-lg font-syne font-bold tracking-tighter uppercase leading-none">
              Kitchen <span className="text-accent font-black">Bunker</span>
            </h1>
            <p className="text-[10px] text-accent/60 font-mono tracking-widest uppercase">
              Divine V4 // Institutional
            </p>
          </div>
        </div>

        <button
          onClick={() => setIsOpen(!isOpen)}
          className="group relative w-12 h-12 flex flex-col justify-center items-center gap-1.5 focus:outline-none bg-secondary/80 backdrop-blur-md border border-white/5"
          aria-label="Menu"
        >
          <span className={cn(
            "h-[2px] bg-foreground transition-all duration-300",
            isOpen ? "w-8 rotate-45 translate-y-[8px]" : "w-8"
          )} />
          <span className={cn(
            "h-[2px] bg-foreground transition-all duration-300",
            isOpen ? "opacity-0" : "w-8"
          )} />
          <span className={cn(
            "h-[2px] bg-foreground transition-all duration-300",
            isOpen ? "w-8 -rotate-45 -translate-y-[8px]" : "w-5 ml-auto mr-0"
          )} />
        </button>
      </header>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 1.1 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 1.1 }}
            transition={{ duration: 0.5, ease: [0.17, 0.67, 0.83, 0.67] }}
            className="fixed inset-0 z-[90] bg-background flex flex-col items-center justify-center p-8"
          >
            <div className="bunker-grid absolute inset-0 opacity-10 pointer-events-none" />
            
            <nav className="relative z-10 flex flex-col items-center gap-8">
              {['Home', 'Experiência', 'Protocolo', 'Projetos', 'Contato'].map((item, i) => (
                <motion.a
                  key={item}
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 + i * 0.1 }}
                  href="#"
                  onClick={() => setIsOpen(false)}
                  className="text-3xl md:text-8xl font-syne font-black uppercase tracking-tighter hover:text-accent transition-colors"
                >
                  {item}
                </motion.a>
              ))}
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
