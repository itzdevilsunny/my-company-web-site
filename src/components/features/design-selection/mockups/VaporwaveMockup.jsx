import React from 'react';
import { motion } from 'framer-motion';
import { Sun, Cloud, Music, Monitor, Zap, Heart, Sparkles, Send } from 'lucide-react';

const VaporwaveMockup = ({ theme }) => {
  return (
    <div className="min-h-screen relative overflow-hidden bg-[#01CDFE] font-sans text-white selection:bg-[#FF71CE] selection:text-white">
      {/* 1. Retro Background Composition */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
         {/* Perspective Grid */}
         <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[200%] h-[60%] perspective-1000 rotateX-60">
            <div className="w-full h-full bg-[linear-gradient(rgba(185,103,255,0.2)_1px,transparent_1px),linear-gradient(90deg,rgba(185,103,255,0.2)_1px,transparent_1px)] bg-[size:50px_50px] animate-grid-drift" />
         </div>

         {/* Retro Sun */}
         <motion.div 
           animate={{ scale: [1, 1.05, 1], y: [0, -10, 0] }}
           transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
           className="absolute top-20 left-1/2 -translate-x-1/2 w-80 h-80 rounded-full bg-gradient-to-b from-[#FF71CE] via-[#FF71CE]/80 to-transparent shadow-[0_0_80px_rgba(255,113,206,0.4)]"
         >
            <div className="absolute inset-0 flex flex-col gap-4 py-8 opacity-40">
               {[...Array(8)].map((_, i) => (
                 <div key={i} className="h-1 bg-[#01CDFE]" style={{ width: '100%', opacity: (i + 1) * 0.1 }} />
               ))}
            </div>
         </motion.div>

         {/* Floating Palm Silhouette Decorations */}
         <div className="absolute bottom-0 left-0 w-64 h-96 opacity-20 pointer-events-none mix-blend-multiply">
            <div className="w-full h-full bg-[radial-gradient(ellipse_at_bottom_left,#05FFA1_0%,transparent_70%)] blur-3xl" />
         </div>
      </div>

      {/* 2. Floating Aesthetic UI Components */}
      <div className="relative z-10 h-full flex flex-col items-center justify-center p-12 lg:p-24 text-center">
        
        {/* Floating Title with Glitch/Neon Effect */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-16 relative"
        >
           <h2 className="text-7xl lg:text-9xl font-black italic uppercase tracking-tighter leading-none text-white drop-shadow-[0_0_20px_#FF71CE] relative z-10">
              V I S U A L <br />
              <span className="text-[#05FFA1] drop-shadow-[0_0_15px_#05FFA1]">E U P H O R I A.</span>
           </h2>
           <motion.div 
             animate={{ x: [-2, 2, -2], opacity: [0.5, 0.8, 0.5] }}
             transition={{ duration: 0.2, repeat: Infinity }}
             className="absolute inset-0 text-7xl lg:text-9xl font-black italic uppercase tracking-tighter leading-none text-[#FF71CE] blur-[4px] -z-10 translate-x-1 translate-y-1"
           >
              V I S U A L <br /> E U P H O R I A.
           </motion.div>
        </motion.div>

        {/* 80s Window-style Container */}
        <motion.div 
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="max-w-xl w-full bg-[#1A103C]/80 backdrop-blur-xl border-4 border-[#B967FF] rounded-none shadow-[12px_12px_0px_#05FFA1] p-10 flex flex-col gap-8 text-left"
        >
           <div className="flex justify-between items-center border-b-2 border-[#B967FF] pb-4 mb-2">
              <div className="flex gap-2">
                 <div className="w-3 h-3 bg-[#FF71CE] rounded-full" />
                 <div className="w-3 h-3 bg-[#05FFA1] rounded-full" />
                 <div className="w-3 h-3 bg-[#01CDFE] rounded-full" />
              </div>
              <span className="text-[10px] font-black uppercase tracking-[0.4em] opacity-40">SYSTEM_ERROR // 1984</span>
           </div>

           <p className="text-xl font-bold italic leading-relaxed text-[#05FFA1]">
              Architecture for a future that already happened. Retro-futuristic digital ecosystems designed for peak nostalgia.
           </p>

           <div className="flex flex-col gap-6">
              <div className="flex items-center gap-4 text-xs font-black uppercase tracking-widest text-white/60">
                 <Monitor size={16} className="text-[#FF71CE]" />
                 <span>High-Fidelity CRT Rendering</span>
              </div>
              <div className="flex items-center gap-4 text-xs font-black uppercase tracking-widest text-white/60">
                 <Music size={16} className="text-[#05FFA1]" />
                 <span>Strategic Lo-Fi Soundscapes</span>
              </div>
           </div>

           <motion.button 
             whileHover={{ x: 8, y: 8, boxShadow: '0px 0px 0px #05FFA1' }}
             className="w-full py-6 bg-[#FF71CE] text-white border-4 border-white font-black uppercase tracking-[0.2em] shadow-[8px_8px_0px_#05FFA1] transition-all flex items-center justify-center gap-4 group"
           >
              INITIATE VOYAGE
              <Send size={20} className="group-hover:rotate-12 transition-transform" />
           </motion.button>
        </motion.div>

        {/* Floating Icons with Motion */}
        <div className="absolute inset-0 pointer-events-none">
           {[
             { Icon: Heart, color: '#FF71CE', top: '15%', left: '10%', delay: 0 },
             { Icon: Sparkles, color: '#05FFA1', top: '25%', right: '15%', delay: 1 },
             { Icon: Zap, color: '#01CDFE', bottom: '20%', left: '15%', delay: 2 },
             { Icon: Cloud, color: '#B967FF', bottom: '30%', right: '10%', delay: 1.5 }
           ].map(({ Icon, color, top, left, right, bottom, delay }, i) => (
             <motion.div
               key={i}
               className="absolute"
               style={{ top, left, right, bottom }}
               animate={{ 
                 y: [0, -15, 0], 
                 rotate: [0, 10, -10, 0],
                 opacity: [0.3, 0.6, 0.3]
               }}
               transition={{ duration: 4, repeat: Infinity, delay }}
             >
                <Icon size={48} style={{ color, filter: `drop-shadow(0 0 10px ${color})` }} />
             </motion.div>
           ))}
        </div>
      </div>

      {/* 3. Scanlines Overlay */}
      <div className="absolute inset-0 pointer-events-none opacity-20 bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.25)_50%),linear-gradient(90deg,rgba(255,0,0,0.06),rgba(0,255,0,0.02),rgba(0,0,255,0.06))] bg-[length:100%_3px,3px_100%] animate-scanline" />

      <style dangerouslySetInnerHTML={{ __html: `
        @keyframes grid-drift {
          from { transform: translateY(0); }
          to { transform: translateY(50px); }
        }
        .animate-grid-drift {
          animation: grid-drift 2s linear infinite;
        }
        .perspective-1000 { perspective: 1000px; }
        .rotateX-60 { transform: rotateX(60deg); }
      `}} />
    </div>
  );
};

export default VaporwaveMockup;

