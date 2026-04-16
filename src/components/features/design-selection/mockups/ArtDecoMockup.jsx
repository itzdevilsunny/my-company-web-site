import React from 'react';
import { motion } from 'framer-motion';
import { Diamond, Star, Sparkles, Anchor, ChevronDown, Award, Globe } from 'lucide-react';

const ArtDecoMockup = ({ theme }) => {
  return (
    <div className="h-full relative overflow-hidden bg-[#0A0A0A] text-[#D4AF37] font-serif selection:bg-[#D4AF37] selection:text-black">
      {/* 1. Geometric Sunray Background */}
      <div className="absolute inset-0 pointer-events-none opacity-10">
         <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
            <defs>
               <linearGradient id="rayGradient" x1="0%" y1="0%" x2="0%" y2="100%">
                  <stop offset="0%" stopColor="#D4AF37" stopOpacity="0.8" />
                  <stop offset="100%" stopColor="#D4AF37" stopOpacity="0" />
               </linearGradient>
            </defs>
            {[...Array(24)].map((_, i) => (
               <line 
                 key={i}
                 x1="50" y1="100" 
                 x2={50 + Math.cos((i * 15 * Math.PI) / 180) * 150} 
                 y2={100 - Math.sin((i * 15 * Math.PI) / 180) * 150} 
                 stroke="url(#rayGradient)" 
                 strokeWidth="0.2"
               />
            ))}
         </svg>
      </div>

      {/* 2. Symmetrical Double Border Frame */}
      <div className="absolute inset-4 md:inset-8 border border-[#D4AF37]/40 pointer-events-none" />
      <div className="absolute inset-6 md:inset-12 border-2 border-[#D4AF37]/60 pointer-events-none" />
      
      {/* Decorative Corners */}
      {[
        "top-4 left-4 md:top-8 md:left-8 border-t-2 md:border-t-4 border-l-2 md:border-l-4",
        "top-4 right-4 md:top-8 md:right-8 border-t-2 md:border-t-4 border-r-2 md:border-r-4",
        "bottom-4 left-4 md:bottom-8 md:left-8 border-b-2 md:border-b-4 border-l-2 md:border-l-4",
        "bottom-4 right-4 md:bottom-8 md:right-8 border-b-2 md:border-b-4 border-r-2 md:border-r-4"
      ].map((pos, i) => (
        <div key={i} className={`absolute w-8 h-8 md:w-12 md:h-12 border-[#D4AF37] ${pos} z-20`} />
      ))}

      {/* 3. Glamorous Layout */}
      <div className="relative z-10 h-full flex flex-col items-center justify-center p-6 md:p-20 text-center overflow-y-auto no-scrollbar">
        
        <header className="absolute top-10 md:top-20 w-fit flex flex-col items-center gap-4">
           <div className="flex items-center gap-4 md:gap-8">
              <div className="w-8 md:w-16 h-[1px] bg-[#D4AF37]/40" />
              <Diamond size={20} md:size={24} className="opacity-80" />
              <div className="w-8 md:w-16 h-[1px] bg-[#D4AF37]/40" />
           </div>
           <span className="text-[8px] md:text-[10px] font-black uppercase tracking-[0.6em] md:tracking-[1em] opacity-40">Luxury Protocol</span>
        </header>

        <main className="max-w-4xl space-y-8 md:space-y-12 py-24 md:py-0">
           <motion.div
             initial={{ opacity: 0, y: 30 }}
             animate={{ opacity: 1, y: 0 }}
             className="space-y-4 md:space-y-6"
           >
              <h2 className="text-4xl sm:text-6xl md:text-8xl lg:text-[11rem] font-light leading-[0.8] tracking-[0.05em] md:tracking-[0.1em] uppercase">
                G L A M O R <br />
                <span className="opacity-40 italic tracking-tighter lowercase ml-[-0.2em] font-normal">and</span> <br />
                P R E C I S I O N.
              </h2>
           </motion.div>

           <div className="flex flex-col items-center gap-4 md:gap-8">
              <div className="w-[1px] h-12 md:h-20 bg-gradient-to-b from-[#D4AF37] to-transparent" />
              <p className="max-w-xl text-base md:text-xl font-light italic leading-loose opacity-60 uppercase tracking-[0.2em] md:tracking-[0.4em]">
                Sovereign digital architectures inspired by the golden era of decorative structuralism.
              </p>
           </div>

           <div className="flex flex-col sm:flex-row justify-center gap-6 md:gap-12 pt-4 md:pt-8 w-full">
              <motion.button 
                whileHover={{ scale: 1.05, letterSpacing: '0.6em' }}
                className="w-full sm:w-auto px-8 md:px-16 py-4 md:py-5 bg-[#D4AF37] text-black font-black uppercase text-[10px] tracking-[0.4em] shadow-[10px_10px_0px_rgba(212,175,55,0.1)] transition-all"
              >
                 Enter The Era
              </motion.button>
              
              <motion.button 
                whileHover={{ scale: 1.05, letterSpacing: '0.6em' }}
                className="w-full sm:w-auto px-8 md:px-16 py-4 md:py-5 border-2 border-[#D4AF37] text-[#D4AF37] font-black uppercase text-[10px] tracking-[0.4em] transition-all bg-transparent"
              >
                 Inquiry
              </motion.button>
           </div>
        </main>

        {/* Feature Highlights Grid */}
        <div className="absolute bottom-10 md:bottom-20 w-full max-w-5xl grid grid-cols-1 sm:grid-cols-3 divide-y-2 sm:divide-y-0 sm:divide-x-2 divide-[#D4AF37]/20 gap-4 sm:gap-0 bg-black/50 sm:bg-transparent backdrop-blur-sm sm:backdrop-blur-none p-4 sm:p-0">
           {[
             { label: 'STATUS', val: 'EXQUISITE', icon: Award },
             { label: 'REGION', val: 'GLOBAL', icon: Globe },
             { label: 'STRIKE', val: 'GOLD', icon: Sparkles }
           ].map((item, i) => (
             <div key={i} className="flex flex-col items-center gap-2 group py-2 sm:py-0">
                <item.icon size={16} md:size={18} className="opacity-20 group-hover:opacity-100 group-hover:scale-125 transition-all" />
                <div className="text-[8px] font-black uppercase tracking-[0.3em] md:tracking-[0.4em] opacity-40">{item.label}</div>
                <div className="text-[10px] md:text-xs font-black uppercase tracking-[0.2em]">{item.val}</div>
             </div>
           ))}
        </div>

        <motion.div 
           animate={{ y: [0, 10, 0] }}
           transition={{ duration: 3, repeat: Infinity }}
           className="absolute bottom-4 md:bottom-8 flex flex-col items-center gap-2 opacity-20"
        >
           <ChevronDown size={14} />
        </motion.div>
      </div>

      {/* Floating Decorative Elements */}
      <div className="absolute inset-0 pointer-events-none">
         <motion.div 
           animate={{ rotate: 360 }}
           transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
           className="absolute -top-20 -left-20 w-96 h-96 border border-[#D4AF37]/10" 
         />
         <motion.div 
           animate={{ rotate: -360 }}
           transition={{ duration: 50, repeat: Infinity, ease: "linear" }}
           className="absolute -bottom-40 -right-40 w-[600px] h-[600px] border border-[#D4AF37]/10 rounded-full" 
         />
      </div>
    </div>
  );
};

export default ArtDecoMockup;
