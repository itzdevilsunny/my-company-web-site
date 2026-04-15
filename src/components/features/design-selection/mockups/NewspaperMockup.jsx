import React from 'react';
import { motion } from 'framer-motion';

const NewspaperMockup = ({ theme }) => {
  return (
    <div className="h-full flex flex-col p-0 font-serif bg-[#F9F9F7] text-[#111111] overflow-hidden">
      {/* Masthead */}
      <div className="border-b-4 border-black px-8 py-4 flex justify-between items-end">
        <div className="font-mono text-[10px] uppercase tracking-widest block leading-none">
          Vol. CXVII ... No. 59,842 <br/>
          <span className="text-[#CC0000] font-bold">Zorvia Global Edition</span>
        </div>
        <h4 className="text-4xl font-black tracking-tighter uppercase text-center flex-grow">The Zorvia Times</h4>
        <div className="font-mono text-[10px] uppercase tracking-widest text-right leading-none">
          SF / BLR / LND <br/>
          Price: $5.00
        </div>
      </div>

      {/* Hero Headline */}
      <div className="p-8 border-b border-black">
        <h3 className="text-6xl lg:text-8xl font-black leading-[0.85] tracking-[-0.05em] mb-6">
          Design Systems <br/> as Sovereign <br/> Infrastructure.
        </h3>
        <div className="flex justify-between items-center border-t border-black pt-4">
          <span className="font-bold text-xs uppercase tracking-widest">Edition 0.4.2 // Protocol</span>
          <span className="font-bold text-xs uppercase tracking-widest">Wednesday, April 15, 2026</span>
        </div>
      </div>

      {/* Multi-column Body */}
      <div className="grid grid-cols-3 flex-grow overflow-hidden">
        <div className="p-6 border-r border-black space-y-4">
          <p className="text-sm leading-relaxed text-justify">
            <span className="text-7xl float-left mr-3 leading-[0.7] font-black mt-2 text-[#CC0000]">I</span>
            n an era of digital homogeneity, the new editorial design system prioritizes the weight of information over the fluff of interaction. Form follows authority.
          </p>
          <p className="text-sm leading-relaxed text-justify opacity-80">
            The grid is no longer a helper; it is the commander. Every pixel is accounted for in a strict 12-column regimen that rejects the rounded organicism of the previous decade.
          </p>
        </div>
        <div className="p-6 border-r border-black flex flex-col">
           <div className="w-full h-48 bg-black/10 grayscale border border-black mb-4 relative overflow-hidden group">
              <div className="absolute inset-0 bg-[radial-gradient(#000_1px,transparent_1px)] [background-size:8px_8px] opacity-20" />
              <div className="absolute bottom-2 left-2 bg-white px-2 py-1 text-[8px] font-mono border border-black uppercase font-bold">Fig. 1.1: The Grid</div>
           </div>
           <h5 className="font-bold text-xl leading-tight mb-2 underline decoration-1 underline-offset-4">The Return to Ink.</h5>
           <p className="text-[13px] leading-snug opacity-90">Why high-contrast black and white palettes are winning the battle for attention span in 2026.</p>
        </div>
        <div className="p-6 bg-black text-white flex flex-col justify-between">
           <div className="space-y-4">
              <h5 className="font-mono text-xs uppercase tracking-widest font-bold text-[#CC0000]">Latest Bullish Signals</h5>
              <div className="border-t border-white/20 pt-4 space-y-6">
                 {[1, 2, 3].map(i => (
                   <div key={i} className="flex justify-between items-start gap-4">
                      <span className="text-3xl font-black italic text-white/20 leading-none">0{i}</span>
                      <p className="text-xs font-sans tracking-wide leading-relaxed">Sovereign identity layers now standard in all Zorvia protocol deployments.</p>
                   </div>
                 ))}
              </div>
           </div>
           <button className="w-full py-3 bg-[#CC0000] text-white border border-white font-mono text-[10px] uppercase tracking-widest font-black hover:bg-white hover:text-black transition-colors">
             Subscribe to Protocol
           </button>
        </div>
      </div>
    </div>
  );
};

export default NewspaperMockup;
