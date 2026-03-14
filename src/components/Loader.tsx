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
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
          className="fixed inset-0 z-[1000] bg-black flex flex-col items-center justify-center p-6"
        >
          <div className="relative flex flex-col items-center">
            {/* Main Title Container */}
            <div className="overflow-hidden">
              <motion.h2
                initial={{ y: 40, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                className="text-2xl md:text-5xl font-syne font-black uppercase tracking-[0.1em] text-white whitespace-nowrap"
              >
                Kitchen <span className="text-accent">Bunker</span>
              </motion.h2>
            </div>

            {/* Tactical Divider Line */}
            <motion.div
              initial={{ width: 0 }}
              animate={{ width: '100%' }}
              transition={{ duration: 1.2, ease: "circIn", delay: 0.2 }}
              className="h-[1px] bg-accent mt-3 mb-3 w-full"
            />

            {/* Sub-protocol Label */}
            <motion.div
               initial={{ opacity: 0 }}
               animate={{ opacity: 1 }}
               transition={{ delay: 1 }}
            >
              <p className="text-[7px] md:text-[9px] font-mono tracking-[0.4em] uppercase text-white/50 text-center">
                Initializing Protocol // Divine V4
              </p>
            </motion.div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
