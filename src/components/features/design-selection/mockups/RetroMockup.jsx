import React from 'react';
import { motion } from 'framer-motion';
import { Star, Zap, Coffee, Music, Camera, Heart, Sun, Rainbow } from 'lucide-react';

const RetroMockup = ({ theme }) => {
  return (
    <div className="min-h-screen relative overflow-hidden bg-[#FEF3C7] text-[#111111] font-sans selection:bg-[#EA580C] selection:text-white">
      {/* 1. Animated Groovy Sunburst Background */}
      <div className="absolute inset-0 flex items-center justify-center opacity-20 pointer-events-none overflow-hidden">
         <motion.div 
           animate={{ rotate: 360 }}
           transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
           className="w-[2000px] h-[2000px] bg-[repeating-conic-gradient(#EA580C_0_15deg,transparent_0_30deg)]"
         />
      </div>

      {/* 2. Paper Grain Overlay */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.15] mix-blend-multiply bg-[url('https://www.transparenttextures.com/patterns/notebook.png')]" />

      {/* 3. Retro Navbar */}
      <nav className="relative z-10 px-12 py-6 border-b-4 border-black bg-white flex justify-between items-center">
         <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-[#991B1B] rounded-full border-2 border-black shadow-[2px_2px_0px_#000]" />
            <span className="font-black text-xl uppercase italic tracking-tighter">ZORVIA.77</span>
         </div>
         <div className="flex gap-8 font-black text-[10px] uppercase tracking-widest">
            {['Archives', 'Protocol', 'Manifesto'].map(item => (
              <a key={item} href="#" className="hover:text-[#EA580C] transition-colors decoration-4 underline-offset-8 hover:underline">{item}</a>
            ))}
         </div>
      </nav>

      {/* 4. Main Body Content */}
      <div className="relative z-10 p-12 lg:p-20 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
         <div className="lg:col-span-7 space-y-8">
            <div className="inline-flex items-center gap-3 px-4 py-2 bg-[#FDE68A] border-4 border-black rounded-full shadow-[4px_4px_0px_#000]">
               <Sun className="text-[#EA580C]" size={20} />
               <span className="text-xs font-black uppercase tracking-widest">Golden Age Technology</span>
            </div>

            <h2 className="text-8xl font-black uppercase tracking-tighter italic leading-[0.8] text-[#991B1B] drop-shadow-[4px_4px_0px_rgba(255,255,255,1)]">
               GROOVY <br/> 
               <span className="text-[#EA580C]">LOGIC & </span> <br/>
               RADICAL <br/>
               ENGINEERING.
            </h2>

            <p className="text-2xl font-bold leading-tight max-w-xl text-black/80">
               Where vintage aesthetics meet modern computational power. We build infrastructure for a more vibrant digital future.
            </p>

            <div className="flex gap-6">
               <motion.button 
                 whileHover={{ scale: 1.05, rotate: -2 }}
                 className="px-10 py-5 bg-[#EA580C] text-white border-4 border-black rounded-2xl font-black uppercase tracking-widest shadow-[8px_8px_0px_#000] hover:shadow-none hover:translate-x-1 hover:translate-y-1 transition-all flex items-center gap-3"
               >
                  Get Started
                  <Star size={20} />
               </motion.button>
               <button className="px-10 py-5 bg-white text-black border-4 border-black rounded-2xl font-black uppercase tracking-widest shadow-[8px_8px_0px_#000] hover:translate-x-1 hover:translate-y-1 hover:shadow-none transition-all">
                  Documentation
               </button>
            </div>
         </div>

         {/* Retro Card / Illustration area */}
         <div className="lg:col-span-5 relative">
            <motion.div 
               animate={{ y: [0, -10, 0] }}
               transition={{ duration: 4, repeat: Infinity }}
               className="bg-white border-4 border-black p-8 rounded-[3rem] shadow-[20px_20px_0px_rgba(153,27,27,0.1)] relative"
            >
               <div className="absolute -top-6 -right-6 w-16 h-16 bg-[#FDE68A] border-4 border-black rounded-full flex items-center justify-center -rotate-12">
                  <Heart className="text-[#991B1B]" fill="currentColor" size={24} />
               </div>
               
               <div className="w-full h-64 bg-[#FEF3C7] border-4 border-black rounded-[2rem] mb-6 flex items-center justify-center overflow-hidden relative">
                  <div className="absolute inset-0 bg-gradient-to-br from-[#EA580C]/20 to-transparent" />
                  <Rainbow size={120} className="text-[#991B1B] relative z-10" />
               </div>

               <div className="space-y-4">
                  <h5 className="text-2xl font-black uppercase tracking-tighter italic">Vibe Check Passed</h5>
                  <div className="flex gap-2">
                     {[Coffee, Camera, Music].map((Icon, i) => (
                       <div key={i} className="p-3 bg-slate-50 border-2 border-black rounded-xl">
                          <Icon size={18} />
                       </div>
                     ))}
                  </div>
               </div>
            </motion.div>
         </div>
      </div>

      {/* Decorative Rainbow Bar */}
      <div className="absolute bottom-0 left-0 w-full h-8 bg-black flex overflow-hidden">
         {[...'#EF4444', '#F97316', '#FACC15', '#22C55E', '#3B82F6', '#8B5CF6'].map((color, i) => (
           <div key={i} className="flex-grow h-full" style={{ backgroundColor: color }} />
         ))}
      </div>
    </div>
  );
};

export default RetroMockup;

