import React from 'react';
import { motion } from 'framer-motion';
import { Crown, Star, ShieldCheck, Diamond, Sparkles, ChevronDown, Compass, UserCheck } from 'lucide-react';

const LuxuryMockup = ({ theme }) => {
  return (
    <div className="h-full relative overflow-hidden bg-[#050505] text-[#D4AF37] font-serif selection:bg-[#D4AF37] selection:text-black">
      {/* 1. Subtle Parallax Background */}
      <div className="absolute inset-0 pointer-events-none opacity-20">
         <motion.div 
           animate={{ scale: [1, 1.1, 1], opacity: [0.1, 0.2, 0.1] }}
           transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
           className="absolute top-0 right-0 w-[800px] h-[800px] bg-[radial-gradient(circle,#D4AF37_0%,transparent_70%)] blur-[120px]"
         />
      </div>

      {/* 2. Precision Minimalist Layout */}
      <div className="relative z-10 h-full flex flex-col items-center p-12 lg:p-24 border-[24px] border-[#D4AF37]/5">
        
        <header className="w-full flex justify-between items-center mb-24">
           <div className="flex flex-col items-center gap-1 group">
              <Compass className="text-[#D4AF37]/40 group-hover:text-[#D4AF37] transition-colors" size={24} />
              <div className="w-[1px] h-8 bg-[#D4AF37]/20" />
           </div>
           
           <div className="flex flex-col items-center">
              <div className="text-[10px] tracking-[0.8em] font-black uppercase opacity-40 mb-2">The Reserve</div>
              <div className="w-12 h-[1px] bg-[#D4AF37]/40" />
           </div>

           <motion.button 
             whileHover={{ y: -2 }}
             className="w-12 h-12 rounded-full border border-[#D4AF37]/20 flex items-center justify-center hover:bg-[#D4AF37]/5"
           >
              <UserCheck size={18} />
           </motion.button>
        </header>

        <main className="flex-grow flex flex-col items-center text-center max-w-4xl">
           <motion.div
             initial={{ opacity: 0, scale: 0.95 }}
             animate={{ opacity: 1, scale: 1 }}
             className="mb-12"
           >
              <Crown size={48} className="mb-8 opacity-60" />
              <h2 className="text-7xl lg:text-9xl font-extralight tracking-[0.2em] uppercase leading-tight mb-8">
                E L E G A N C E <br />
                <span className="opacity-30 italic font-light lowercase tracking-tighter ml-[-0.2em]">redefined.</span>
              </h2>
           </motion.div>

           <div className="w-[1px] h-32 bg-gradient-to-b from-[#D4AF37] to-transparent mb-12" />

           <p className="max-w-xl text-lg lg:text-xl font-light italic leading-loose opacity-60 uppercase tracking-[0.3em] mb-16">
             Curated digital architectures for the world's most distinguished identities. Precision engineering meets sovereign aesthetics.
           </p>

           <div className="flex flex-col items-center gap-12">
              <motion.button 
                whileHover={{ letterSpacing: '0.6em', opacity: 1 }}
                className="px-20 py-6 border border-[#D4AF37]/30 text-[10px] font-black uppercase tracking-[0.4em] opacity-80 hover:opacity-100 transition-all bg-black"
              >
                 Enter the Reserve
              </motion.button>

              <motion.div 
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="flex flex-col items-center gap-2 opacity-30"
              >
                 <span className="text-[8px] uppercase tracking-widest font-black">Discover More</span>
                 <ChevronDown size={14} />
              </motion.div>
           </div>
        </main>

        {/* 3. Floating Metallic Objects */}
        <div className="absolute inset-0 pointer-events-none">
           <motion.div 
             animate={{ y: [0, -20, 0], rotate: [0, 10, 0] }}
             transition={{ duration: 5, repeat: Infinity }}
             className="absolute top-[20%] right-[10%] w-32 h-32 border border-[#D4AF37]/20 rounded-full flex items-center justify-center"
           >
              <Diamond size={24} className="opacity-40" />
           </motion.div>

           <motion.div 
             animate={{ x: [0, 20, 0], y: [0, 15, 0] }}
             transition={{ duration: 7, repeat: Infinity }}
             className="absolute bottom-[10%] left-[5%] p-8 border border-[#D4AF37]/10"
           >
              <ShieldCheck size={32} className="opacity-20" />
           </motion.div>
        </div>

        <footer className="w-full flex justify-between items-end opacity-20">
           <div className="text-[10px] font-black uppercase tracking-widest">Est. 2026</div>
           <div className="flex gap-12 font-black text-[10px] uppercase tracking-widest">
              <span>Sovereignty</span>
              <span>Precision</span>
              <span>Grace</span>
           </div>
        </footer>
      </div>
    </div>
  );
};

export default LuxuryMockup;
