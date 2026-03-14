'use client';

import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion';
import { useRef, useState, useEffect, useMemo } from 'react';
import Image, { StaticImageData } from 'next/image';
import { Hammer, Droplets, Flame, ChefHat, Package, ChevronDown, Maximize2, X, MessageCircle, ChevronLeft, ChevronRight } from 'lucide-react';
import { Header } from '@/components/Header';
import { BottomDock } from '@/components/BottomDock';
import { Loader } from '@/components/Loader';
import { Footer } from '@/components/Footer';

// Imagens originais
import img103 from '@/assets/images/103.png';
import img104 from '@/assets/images/104.png';
import img100 from '@/assets/images/100.png';

// Imagens derivativas
import devFridge from '@/assets/images/derivative_fridge.png';
import devSink from '@/assets/images/sink_aligned_final_perfection.png';
import imgIslandElite from '@/assets/images/island_aligned_final_perfection.png';
import imgGrillElite from '@/assets/images/grill_aligned_final_perfection.png';

export default function Home() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [selectedImage, setSelectedImage] = useState<StaticImageData | null>(null);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [highlightIndex, setHighlightIndex] = useState(0);
  
  const originalImages = useMemo(() => [img103, img100, img104], []);
  const highlightItems = useMemo(() => [
    { img: img103, title: "Integração Arquitetônica", desc: "Equilíbrio absoluto entre forma e função" },
    { img: img100, title: "Núcleo de Preparo", desc: "Saneamento de alta precisão" },
    { img: img104, title: "Estação Grill", desc: "Performance térmica industrial" }
  ], []);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  const heroScale = useTransform(scrollYProgress, [0, 0.2], [1.1, 1]);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % originalImages.length);
    }, 30000); // 30 seconds as requested
    return () => clearInterval(timer);
  }, [originalImages.length]);

  const modules = [
    { title: "Núcleo de Preparo", tag: "Estação_01", img: devSink, icon: Droplets, desc: "Saneamento e higienização de alta precisão" },
    { title: "Ilha de Comando", tag: "Estação_02", img: imgIslandElite, icon: Hammer, desc: "Ponto focal de integração e performance gourmet" },
    { title: "Estação Grill", tag: "Estação_03", img: imgGrillElite, icon: Flame, desc: "Cura térmica e cockpit social" },
    { title: "Torre de Equipamentos", tag: "Estação_04", img: devFridge, icon: Package, desc: "Armazenamento e processamento térmico" }
  ];

  return (
    <main className="relative min-h-screen bg-background" ref={containerRef}>
      <Loader />
      <Header />
      <BottomDock />

      {/* 1. HERO SECTION */}
      <section id="home" className="relative h-screen flex items-center justify-center overflow-hidden">
        <AnimatePresence mode="wait">
          <motion.div 
            key={currentSlide}
            initial={{ opacity: 0, scale: 1.1 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 1.05 }}
            transition={{ duration: 2, ease: "easeInOut" }}
            style={{ scale: heroScale }}
            className="absolute inset-0 z-0"
          >
            <Image 
              src={originalImages[currentSlide]} 
              alt="Kitchen Bunker Protocol // Divine V4" 
              fill 
              className="object-cover grayscale-[20%] brightness-50"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-black/60" />
          </motion.div>
        </AnimatePresence>

        <div className="relative z-10 w-full max-w-7xl mx-auto px-8">
          <motion.div
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="max-w-5xl md:max-w-6xl"
          >
            <h2 className="text-[clamp(1.5rem,8vw,7rem)] font-syne font-black uppercase tracking-tighter leading-[0.8] mb-8 md:mb-12 max-w-[90%] sm:max-w-none px-4 md:px-0 mx-auto md:mx-0">
              Arquitetura <br/> de <span className="text-accent italic">Integração</span>
            </h2>
            <div className="flex flex-col md:flex-row gap-12 items-start md:items-center">
              <p className="max-w-md text-neutral/60 font-mono text-[10px] md:text-xs lg:text-sm leading-relaxed border-l border-accent/30 pl-6">
                Protocolo de design industrial fundindo funcionalidade de alta performance com estética minimalista de ambientes de elite.
              </p>
              <div className="flex gap-4 p-5 bg-secondary/80 backdrop-blur-xl border border-white/5 font-mono text-[10px]">
                <div className="flex flex-col">
                  <span className="text-accent font-bold">STATUS</span>
                  <span>OPTIMIZED_FLOW</span>
                </div>
                <div className="w-px h-8 bg-white/10" />
                <div className="flex flex-col">
                  <span className="text-accent font-bold">MODE</span>
                  <span>DIVINE_V4</span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        <motion.div 
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="absolute bottom-12 left-1/2 -translate-x-1/2"
        >
          <ChevronDown className="w-6 h-6 text-accent" />
        </motion.div>
      </section>

      {/* 1.5 HIGH-RES HIGHLIGHT SLIDER */}
      <section className="py-24 bg-background relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-8 mb-12 flex flex-col md:flex-row justify-between items-start md:items-end gap-6">
          <div>
            <span className="text-[10px] font-mono text-accent tracking-[0.5em] uppercase block mb-4">Elite_Display_v4</span>
            <h3 className="text-4xl md:text-6xl font-syne font-black uppercase tracking-tighter">Sistemas <span className="text-accent italic">Nucleares</span></h3>
          </div>
          
          <div className="flex items-center gap-6">
            <div className="flex gap-2">
              <button 
                onClick={() => setHighlightIndex((prev) => (prev - 1 + highlightItems.length) % highlightItems.length)}
                className="w-12 h-12 border border-white/10 flex items-center justify-center hover:bg-accent hover:text-black transition-all"
                aria-label="Anterior"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              <button 
                onClick={() => setHighlightIndex((prev) => (prev + 1) % highlightItems.length)}
                className="w-12 h-12 border border-white/10 flex items-center justify-center hover:bg-accent hover:text-black transition-all"
                aria-label="Próximo"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
            <div className="hidden md:block text-[10px] font-mono text-neutral/40 uppercase tracking-widest">
              Navegue pelas estações // {highlightIndex + 1}_0{highlightItems.length}
            </div>
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-0 md:px-8">
          <div className="relative aspect-video w-full overflow-hidden border-y md:border border-white/5">
            <AnimatePresence mode="wait">
              <motion.div 
                key={highlightIndex}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.5 }}
                className="absolute inset-0 cursor-zoom-in"
                onClick={() => setSelectedImage(highlightItems[highlightIndex].img)}
              >
                <Image 
                  src={highlightItems[highlightIndex].img} 
                  alt={highlightItems[highlightIndex].title} 
                  fill 
                  className="object-cover" 
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-60" />
                
                <div className="absolute bottom-8 left-8 md:bottom-16 md:left-16 max-w-xl">
                  <motion.h4 
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    className="text-3xl md:text-6xl font-syne font-black uppercase tracking-tighter text-white"
                  >
                    {highlightItems[highlightIndex].title}
                  </motion.h4>
                  <motion.p 
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.2 }}
                    className="text-xs md:text-base font-mono text-accent mt-4 uppercase tracking-widest"
                  >
                    {highlightItems[highlightIndex].desc}
                  </motion.p>
                </div>

                <div className="absolute top-8 right-8 p-4 bg-black/80 border border-white/5 hidden md:block">
                  <Maximize2 className="w-5 h-5 text-white" />
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
          
          {/* Mobile Dot Nav */}
          <div className="flex justify-center gap-3 mt-8 md:hidden">
            {highlightItems.map((_, i) => (
              <div 
                key={i} 
                className={cn(
                  "h-1 transition-all duration-500",
                  i === highlightIndex ? "w-12 bg-accent" : "w-4 bg-white/10"
                )} 
              />
            ))}
          </div>
        </div>
      </section>

      {/* 2. GALLERY */}
      <section id="projetos" className="py-48 px-8 max-w-7xl mx-auto">
        <div className="mb-24 space-y-4">
          <span className="text-[10px] font-mono text-accent tracking-[0.5em] uppercase">Visual_Inventory</span>
          <h2 className="text-5xl md:text-7xl lg:text-[4vw] xl:text-8xl font-syne font-black uppercase tracking-tighter">Sistemas de <span className="text-accent italic">Elite</span></h2>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {modules.map((mod, i) => (
            <motion.div 
              key={i}
              whileHover={{ y: -10 }} 
              className={cn(
                "group aspect-video relative overflow-hidden bg-secondary border border-white/5 cursor-zoom-in rounded-sm",
                i % 2 !== 0 && "md:translate-y-12"
              )}
              onClick={() => setSelectedImage(mod.img)}
            >
              <Image src={mod.img} alt={mod.title} fill className="object-cover grayscale opacity-50 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-700 hover:scale-105" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-60" />
              <div className="absolute bottom-8 left-8 right-8">
                <span className="text-[10px] font-mono text-accent uppercase tracking-widest mb-2 block">{mod.tag}</span>
                <h3 className="text-2xl md:text-4xl font-syne font-bold uppercase tracking-tighter">{mod.title}</h3>
                <p className="text-[10px] md:text-xs font-mono text-neutral/40 uppercase mt-2 opacity-0 group-hover:opacity-100 transition-opacity translate-y-2 group-hover:translate-y-0 duration-300">
                  {mod.desc}
                </p>
              </div>
              <div className="absolute top-8 left-8 p-3 bg-black/80 border border-accent/20 group-hover:border-accent transition-colors">
                <mod.icon className="w-4 h-4 text-accent" />
              </div>
              <div className="absolute top-8 right-8 p-4 bg-black/80 border border-white/5 opacity-0 group-hover:opacity-100 transition-opacity">
                <Maximize2 className="w-5 h-5 text-white" />
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* 3. NARRATIVE */}
      <section id="protocolo" className="py-64 bg-secondary/30 relative overflow-hidden border-t border-white/5">
        <div className="bunker-grid absolute inset-0 opacity-5" />
        <div className="max-w-7xl mx-auto px-8 grid grid-cols-1 lg:grid-cols-2 gap-32 items-center relative">
          
          {/* TEXT LAYER (BACKGROUND) */}
          <div className="space-y-16 py-12 relative z-10 lg:z-30">
            <div className="space-y-6 relative">
              <div className="flex items-center gap-3">
                <span className="w-8 h-[1px] bg-accent" />
                <span className="text-[10px] font-mono text-accent tracking-[0.5em] uppercase">Intelligence // 01</span>
              </div>
              
              <div className="relative group">
                {/* Layered Text Idea: Background Solid */}
                <h2 className="text-[clamp(1.8rem,8vw,7.5rem)] font-syne font-black uppercase tracking-tighter text-white leading-[0.85] relative z-10 max-w-[95%]">
                  Protocolo <br /> de <span className="text-accent italic text-[clamp(1.5rem,7vw,6rem)] align-top ml-2">Uso</span>
                </h2>
                
                {/* Foreground Outline (for overlap feel) */}
                <h2 className="absolute top-0 left-0 text-[clamp(1.8rem,8vw,7.5rem)] font-syne font-black uppercase tracking-tighter leading-[0.85] pointer-events-none z-40 text-transparent [-webkit-text-stroke:1px_rgba(255,255,255,0.3)] max-w-[95%]">
                  Protocolo <br /> de <span className="italic text-[clamp(1.5rem,7vw,6rem)] align-top ml-2">Uso</span>
                </h2>
              </div>
            </div>
            
            <p className="text-neutral/50 font-mono text-sm leading-relaxed max-w-md border-l border-white/10 pl-8">
              A coreografia culinária redesenhada. Integração absoluta entre o cockpit de preparo e a zona de lazer. Cada movimento calculado para precisão industrial e harmonia estética.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="p-8 border border-white/5 bg-black/40 space-y-4 group hover:border-accent/30 transition-all duration-500 backdrop-blur-sm">
                <ChefHat className="w-6 h-6 text-accent/50 group-hover:text-accent transition-colors" />
                <div>
                  <h4 className="font-bold uppercase text-[10px] tracking-widest text-neutral/40 group-hover:text-white transition-colors">Performance</h4>
                  <p className="text-[10px] font-mono text-accent mt-1">RESPOSTA_IMEDIATA</p>
                </div>
              </div>
              <div className="p-8 border border-white/5 bg-black/40 space-y-4 group hover:border-accent/30 transition-all duration-500 backdrop-blur-sm">
                <Package className="w-6 h-6 text-accent/50 group-hover:text-accent transition-colors" />
                <div>
                  <h4 className="font-bold uppercase text-[10px] tracking-widest text-neutral/40 group-hover:text-white transition-colors">Durabilidade</h4>
                  <p className="text-[10px] font-mono text-accent mt-1">INOX_304_REINFORCED</p>
                </div>
              </div>
            </div>
            
            <div className="pt-8">
              <motion.a 
                href="https://wa.me/5511978546562"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ x: 10 }}
                className="inline-flex items-center gap-6 group"
              >
                <div className="bg-accent text-black px-8 md:px-12 py-4 md:py-6 font-syne font-black uppercase tracking-tighter text-lg md:text-xl">
                  Iniciar Projeto
                </div>
                <div className="w-12 h-12 md:w-16 md:h-16 border border-white/10 flex items-center justify-center group-hover:border-accent group-hover:bg-accent/10 transition-all duration-500">
                  <MessageCircle className="w-5 h-5 md:w-6 md:h-6 text-accent" />
                </div>
              </motion.a>
            </div>
          </div>
          
          {/* IMAGE LAYER */}
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1.5 }}
            className="lg:absolute lg:right-0 lg:top-1/2 lg:-translate-y-1/2 w-full lg:w-[60%] aspect-video lg:h-[80%] z-20 pointer-events-auto mt-12 lg:mt-0"
          >
             <div className="relative w-full h-full overflow-hidden border-t lg:border-t-0 lg:border-l border-white/5 shadow-2xl">
               <Image 
                 src={imgIslandElite} 
                 alt="Detailed View // Elite Island" 
                 fill 
                 className="object-cover grayscale hover:grayscale-0 hover:scale-105 transition-all duration-1000 cursor-zoom-in" 
                 onClick={() => setSelectedImage(imgIslandElite)}
               />
               <div className="absolute inset-0 bg-gradient-to-b lg:bg-gradient-to-r from-black via-transparent to-transparent opacity-60" />
               <div className="absolute bottom-8 right-8 lg:bottom-12 lg:right-12 text-[8px] md:text-[10px] font-mono text-accent/40 lg:rotate-90 origin-right uppercase tracking-[0.5em]">
                 Island_elite // divine_v4
               </div>
             </div>
          </motion.div>
        </div>
      </section>

      <Footer />

      {/* IMAGE MODAL SYSTEM */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[1000] bg-black/95 backdrop-blur-xl flex items-center justify-center p-4 md:p-12 cursor-zoom-out"
            onClick={() => setSelectedImage(null)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="relative w-full h-full flex items-center justify-center"
            >
              <Image 
                src={selectedImage} 
                alt="High Resolution View" 
                className="max-w-full max-h-full object-contain shadow-2xl"
                priority
              />
              <button 
                className="absolute top-0 right-0 p-4 bg-accent text-black rounded-full hover:scale-110 active:scale-95 transition-all"
                onClick={() => setSelectedImage(null)}
              >
                <X className="w-6 h-6" />
              </button>
              <div className="absolute bottom-0 left-0 p-6 font-mono text-[10px] text-accent flex flex-col md:flex-row gap-8 uppercase tracking-widest border-l-2 border-accent bg-black/40 backdrop-blur-md">
                <span>Resolução: 8K_Ultra_HD</span>
                <span>Fidelidade: 100%</span>
                <span>Protocolo: Divine_V4</span>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </main>
);
}

function cn(...classes: (string | boolean | undefined | null)[]) {
  return classes.filter(Boolean).join(' ');
}
