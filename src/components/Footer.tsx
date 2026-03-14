'use client';

import { motion } from 'framer-motion';
import { ChefHat } from 'lucide-react';

export function Footer() {
  return (
    <footer id="contato" className="relative pt-24 pb-48 px-8 border-t border-white/5 bg-secondary/50 overflow-hidden">
      <div className="bunker-grid absolute inset-0 opacity-5 pointer-events-none" />
      
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 relative z-10">
        <div className="space-y-6">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 border border-accent/50 flex items-center justify-center">
              <ChefHat className="w-4 h-4 text-accent" />
            </div>
            <h3 className="text-xl font-syne font-bold uppercase tracking-tighter">Kitchen Bunker</h3>
          </div>
          <p className="text-neutral/60 text-sm font-mono leading-relaxed">
            Arquitetura de alta performance para ambientes de elite.
          </p>
        </div>

        <div className="space-y-6">
          <h4 className="text-[10px] font-mono uppercase tracking-[0.3em] text-accent">Navegação</h4>
          <ul className="space-y-4 text-sm font-bold uppercase tracking-tight">
            <li><a href="#home" className="hover:text-accent transition-colors">Home</a></li>
            <li><a href="#experiencia" className="hover:text-accent transition-colors">A Experiência</a></li>
            <li><a href="#protocolo" className="hover:text-accent transition-colors">O Protocolo</a></li>
          </ul>
        </div>

        <div className="space-y-6">
          <h4 className="text-[10px] font-mono uppercase tracking-[0.3em] text-accent">Protocolo</h4>
          <ul className="space-y-4 text-sm font-bold uppercase tracking-tight text-neutral/40">
            <li>Privado // Divine V4</li>
            <li>Status: Ativo</li>
          </ul>
        </div>

        <div className="space-y-6">
          <h4 className="text-[10px] font-mono uppercase tracking-[0.3em] text-accent">Status</h4>
          <div className="p-4 border border-white/5 bg-black/40 space-y-2">
            <div className="flex items-center justify-between text-[10px] font-mono uppercase">
              <span>Security</span>
              <span className="text-accent">Locked</span>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-32 border-t border-white/5 pt-12 text-center overflow-hidden">
        <motion.div 
          animate={{ x: [0, -1000] }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          className="whitespace-nowrap flex gap-12 text-[80px] md:text-[120px] font-syne font-black uppercase tracking-tighter opacity-5 select-none"
        >
          <span>Kitchen Bunker Protocol // Divine V4 // Integration Architecture //</span>
          <span>Kitchen Bunker Protocol // Divine V4 // Integration Architecture //</span>
        </motion.div>
      </div>
      
      <div className="absolute bottom-8 left-8 right-8 flex justify-between items-center text-[10px] font-mono text-neutral/40 uppercase tracking-widest">
        <span>© 2026 Kitchen Bunker. Todos os direitos reservados.</span>
        <span>By Nexus Architect</span>
      </div>
    </footer>
  );
}
