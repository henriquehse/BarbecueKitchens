'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect } from 'react';

export function Loader() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 2500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {loading && (
        <motion.div
          initial={{ y: 0 }}
          exit={{ y: '-100%' }}
          transition={{ duration: 1, ease: [0.17, 0.67, 0.83, 0.67], delay: 1 }}
          className="fixed inset-0 z-[200] bg-background flex flex-col items-center justify-center"
        >
          <div className="bunker-grid absolute inset-0 opacity-20" />
          
          <div className="relative overflow-hidden">
            <motion.h2
              initial={{ y: 100 }}
              animate={{ y: 0 }}
              transition={{ duration: 1, ease: "circOut" }}
              className="text-4xl md:text-6xl font-syne font-black uppercase tracking-tighter"
            >
              Kitchen <span className="text-accent">Bunker</span>
            </motion.h2>
            <motion.div
              initial={{ width: 0 }}
              animate={{ width: '100%' }}
              transition={{ duration: 1.5, ease: "easeInOut", delay: 0.5 }}
              className="h-1 bg-accent mt-2"
            />
          </div>
          
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.2 }}
            className="text-[10px] font-mono tracking-[0.5em] uppercase mt-4 text-neutral/40"
          >
            Initializing Protocol // Divine V4
          </motion.p>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
