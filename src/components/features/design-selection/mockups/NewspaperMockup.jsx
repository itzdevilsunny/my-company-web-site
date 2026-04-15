import React from 'react';
import { motion } from 'framer-motion';
import { Newspaper, TrendingUp, Globe, Anchor, Bookmark, Share2, Search, Menu, Clock, AlertCircle } from 'lucide-react';

const NewspaperMockup = ({ theme }) => {
  return (
    <div className="h-full flex flex-col p-0 font-serif bg-[#F9F9F7] text-[#111111] overflow-hidden selection:bg-[#CC0000] selection:text-white">
      {/* 1. Traditional Top Bar */}
      <div className="border-b border-black/10 px-8 py-2 flex justify-between items-center bg-white/50 backdrop-blur-sm sticky top-0 z-30">
         <div className="flex gap-6 items-center">
            <Menu size={16} className="cursor-pointer" />
            <Search size={16} className="cursor-pointer" />
         </div>
         <div className="flex items-center gap-4 text-[10px] font-mono font-black uppercase tracking-widest">
            <span className="animate-pulse text-[#CC0000]">● Live</span>
            <span>Market Data: +14.2%</span>
         </div>
         <div className="flex gap-6 items-center">
            <Bookmark size={16} className="cursor-pointer" />
            <Share2 size={16} className="cursor-pointer" />
         </div>
      </div>

      {/* 2. Iconic Masthead */}
      <div className="border-b-[6px] border-double border-black px-12 py-8 flex flex-col items-center gap-4 relative">
        <div className="absolute top-4 left-12 flex flex-col text-[9px] font-mono uppercase tracking-tighter leading-none opacity-60">
           <span>Vol. CXVII</span>
           <span>No. 59,842</span>
        </div>
        
        <h4 className="text-6xl lg:text-8xl font-black tracking-tighter uppercase text-center leading-none">
           The Zorvia Times
        </h4>
        
        <div className="w-full flex justify-between items-center border-t border-black/20 pt-4 px-2">
           <div className="flex items-center gap-3">
              <Globe size={12} className="text-[#CC0000]" />
              <span className="text-[10px] font-mono uppercase font-black tracking-[0.2em]">Global Protocol Edition</span>
           </div>
           <div className="flex items-center gap-6 text-[10px] font-mono uppercase font-black tracking-[0.2em]">
              <span>SF / BLR / LND</span>
              <span className="px-2 bg-black text-white">$5.00</span>
           </div>
        </div>
      </div>

      {/* 3. Hero Headline & Lead Story */}
      <div className="grid grid-cols-12 flex-grow overflow-hidden">
         {/* Left Column: Main Story */}
         <div className="col-span-12 lg:col-span-8 border-r border-black flex flex-col divide-y border-black">
            <div className="p-10">
               <motion.div
                 initial={{ opacity: 0, y: 20 }}
                 animate={{ opacity: 1, y: 0 }}
                 className="space-y-6"
               >
                  <span className="inline-block px-3 py-1 bg-[#CC0000] text-white text-[9px] font-black uppercase tracking-widest mb-4">Editorial // Infrastructure</span>
                  <h3 className="text-7xl lg:text-9xl font-black leading-[0.82] tracking-[-0.06em] uppercase">
                    Design Systems <br/> as Sovereign <br/> Infrastructure.
                  </h3>
                  <div className="flex items-center gap-4 pt-4 border-t border-black/10">
                     <div className="w-10 h-10 rounded-full bg-black/5 flex items-center justify-center border border-black">
                        <Anchor size={18} />
                     </div>
                     <div>
                        <p className="text-xs font-bold uppercase tracking-tight">By Zorvia Intelligence Unit</p>
                        <p className="text-[10px] font-mono opacity-40 uppercase tracking-widest">Wednesday, April 15, 2026 • 4 Min Read</p>
                     </div>
                  </div>
               </motion.div>
            </div>

            <div className="grid grid-cols-2 divide-x divide-black flex-grow">
               <div className="p-8 space-y-6">
                  <p className="text-base leading-relaxed text-justify first-letter:text-7xl first-letter:float-left first-letter:mr-3 first-letter:leading-[0.7] first-letter:font-black first-letter:mt-2 first-letter:text-[#CC0000]">
                    In an era of digital homogeneity, the new editorial design system prioritizes the weight of information over the fluff of interaction. Form follows authority in this new epoch of digital publishing.
                  </p>
                  <p className="text-sm leading-relaxed text-justify opacity-80 italic">
                    "The grid is no longer a helper; it is the commander. Every pixel is accounted for in a strict 12-column regimen."
                  </p>
               </div>
               <div className="p-8 flex flex-col gap-6">
                  <div className="aspect-[4/3] bg-black/5 border border-black relative overflow-hidden group grayscale hover:grayscale-0 transition-all duration-700">
                     <div className="absolute inset-0 bg-[radial-gradient(#000_1px,transparent_1px)] [background-size:8px_8px] opacity-20" />
                     <img 
                       src="https://images.unsplash.com/photo-1504711434969-e33886168f5c?q=80&w=2070&auto=format&fit=crop" 
                       alt="The Grid"
                       className="w-full h-full object-cover mix-blend-multiply opacity-60"
                     />
                     <div className="absolute bottom-3 left-3 bg-white px-3 py-1 text-[8px] font-mono border border-black uppercase font-black">Fig. 1.1: Visual Hierarchy</div>
                  </div>
                  <h5 className="font-bold text-2xl leading-tight underline decoration-2 underline-offset-8">The Return to Ink.</h5>
                  <p className="text-sm leading-snug opacity-90">Why high-contrast black and white palettes are winning the battle for attention span in the high-noise environment of 2026.</p>
               </div>
            </div>
         </div>

         {/* Right Column: Intelligence Feed */}
         <div className="col-span-12 lg:col-span-4 bg-black text-white flex flex-col justify-between overflow-hidden">
            <div className="p-8 space-y-8">
               <div className="flex items-center justify-between border-b border-white/20 pb-4">
                  <h5 className="font-mono text-xs uppercase tracking-widest font-black text-[#CC0000]">Market Signals</h5>
                  <TrendingUp size={14} className="text-[#CC0000]" />
               </div>
               
               <div className="space-y-10 overflow-y-auto max-h-[400px] custom-scrollbar pr-4">
                  {[1, 2, 3, 4].map(i => (
                    <motion.div 
                      key={i} 
                      initial={{ opacity: 0, x: 20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ delay: i * 0.1 }}
                      className="space-y-3"
                    >
                       <div className="flex justify-between text-[9px] font-mono opacity-40 uppercase tracking-[0.2em]">
                          <span>Ref: ARCH-0{i}</span>
                          <span>12:0{i} PM</span>
                       </div>
                       <p className="text-sm font-sans tracking-wide leading-relaxed font-bold">
                          {i === 1 && "Sovereign identity layers now standard in all Zorvia protocol deployments."}
                          {i === 2 && "Automated grid systems achieving 99.8% structural efficiency across 40 nodes."}
                          {i === 3 && "Neural layout engines deprecating traditional responsive helpers."}
                          {i === 4 && "Visual entropy levels dropping below critical thresholds in test environments."}
                       </p>
                       <div className="h-[1px] w-full bg-white/10" />
                    </motion.div>
                  ))}
               </div>
            </div>

            <div className="p-10 bg-[#CC0000] space-y-8">
               <div className="space-y-4">
                  <h6 className="text-4xl font-black uppercase tracking-tighter leading-none">Subscribe to the <br/> Protocol.</h6>
                  <p className="text-xs font-mono uppercase tracking-widest opacity-80">Access high-fidelity intelligence feeds.</p>
               </div>
               <motion.button 
                 whileHover={{ scale: 1.02 }}
                 whileTap={{ scale: 0.98 }}
                 className="w-full py-5 bg-white text-black border-2 border-black font-mono text-[10px] uppercase tracking-widest font-black shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] hover:shadow-none hover:translate-x-1 hover:translate-y-1 transition-all"
               >
                 Initialize Access
               </motion.button>
            </div>
         </div>
      </div>

      <style dangerouslySetInnerHTML={{ __html: `
        .custom-scrollbar::-webkit-scrollbar { width: 2px; }
        .custom-scrollbar::-webkit-scrollbar-track { background: transparent; }
        .custom-scrollbar::-webkit-scrollbar-thumb { background: rgba(255,255,255,0.2); }
      `}} />
    </div>
  );
};

export default NewspaperMockup;
