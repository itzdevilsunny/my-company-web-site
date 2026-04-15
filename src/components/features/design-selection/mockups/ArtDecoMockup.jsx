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
      <div className="absolute inset-8 border border-[#D4AF37]/40 pointer-events-none" />
      <div className="absolute inset-12 border-2 border-[#D4AF37]/60 pointer-events-none" />
      
      {/* Decorative Corners */}
      {[
        "top-8 left-8 border-t-4 border-l-4",
        "top-8 right-8 border-t-4 border-r-4",
        "bottom-8 left-8 border-b-4 border-l-4",
        "bottom-8 right-8 border-b-4 border-r-4"
      ].map((pos, i) => (
        <div key={i} className={`absolute w-12 h-12 border-[#D4AF37] ${pos} z-20`} />
      ))}

      {/* 3. Glamorous Layout */}
      <div className="relative z-10 h-full flex flex-col items-center justify-center p-20 text-center">
        
        <header className="absolute top-20 w-fit flex flex-col items-center gap-4">
           <div className="flex items-center gap-8">
              <div className="w-16 h-[1px] bg-[#D4AF37]/40" />
              <Diamond size={24} className="opacity-80" />
              <div className="w-16 h-[1px] bg-[#D4AF37]/40" />
           </div>
           <span className="text-[10px] font-black uppercase tracking-[1em] opacity-40">Luxury Protocol</span>
        </header>

        <main className="max-w-4xl space-y-12">
           <motion.div
             initial={{ opacity: 0, y: 30 }}
             animate={{ opacity: 1, y: 0 }}
             className="space-y-6"
           >
              <h2 className="text-8xl lg:text-[11rem] font-light leading-[0.8] tracking-[0.1em] uppercase">
                G L A M O R <br />
                <span className="opacity-40 italic tracking-tighter lowercase ml-[-0.2em] font-normal">and</span> <br />
                P R E C I S I O N.
              </h2>
           </motion.div>

           <div className="flex flex-col items-center gap-8">
              <div className="w-[1px] h-20 bg-gradient-to-b from-[#D4AF37] to-transparent" />
              <p className="max-w-xl text-xl font-light italic leading-loose opacity-60 uppercase tracking-[0.4em]">
                Sovereign digital architectures inspired by the golden era of decorative structuralism.
              </p>
           </div>

           <div className="flex justify-center gap-12 pt-8">
              <motion.button 
                whileHover={{ scale: 1.05, letterSpacing: '0.6em' }}
                className="px-16 py-5 bg-[#D4AF37] text-black font-black uppercase text-[10px] tracking-[0.4em] shadow-[10px_10px_0px_rgba(212,175,55,0.1)] transition-all"
              >
                 Enter The Era
              </motion.button>
              
              <motion.button 
                whileHover={{ scale: 1.05, letterSpacing: '0.6em' }}
                className="px-16 py-5 border-2 border-[#D4AF37] text-[#D4AF37] font-black uppercase text-[10px] tracking-[0.4em] transition-all bg-transparent"
              >
                 Inquiry
              </motion.button>
           </div>
        </main>

        {/* Feature Highlights Grid */}
        <div className="absolute bottom-20 w-full max-w-5xl grid grid-cols-3 divide-x-2 divide-[#D4AF37]/20">
           {[
             { label: 'STATUS', val: 'EXQUISITE', icon: Award },
             { label: 'REGION', val: 'GLOBAL', icon: Globe },
             { label: 'STRIKE', val: 'GOLD', icon: Sparkles }
           ].map((item, i) => (
             <div key={i} className="flex flex-col items-center gap-2 group">
                <item.icon size={18} className="opacity-20 group-hover:opacity-100 group-hover:scale-125 transition-all" />
                <div className="text-[8px] font-black uppercase tracking-[0.4em] opacity-40">{item.label}</div>
                <div className="text-xs font-black uppercase tracking-[0.2em]">{item.val}</div>
             </div>
           ))}
        </div>

        <motion.div 
           animate={{ y: [0, 10, 0] }}
           transition={{ duration: 3, repeat: Infinity }}
           className="absolute bottom-8 flex flex-col items-center gap-2 opacity-20"
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
