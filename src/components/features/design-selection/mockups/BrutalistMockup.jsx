import React from 'react';
import { motion } from 'framer-motion';

const BrutalistMockup = ({ theme }) => {
  const { styles: s } = theme;
  
  return (
    <div className="h-full flex flex-col justify-between p-12">
      <div>
         <span className="inline-block px-4 py-1 bg-black text-white font-black uppercase mb-4 shadow-[4px_4px_0px_#FFD600]">New Era</span>
         <h4 className="text-7xl font-black uppercase leading-none italic mb-8 -ml-2">RAW POWER.</h4>
      </div>
      <div className="flex flex-col gap-4">
         <p className="text-xl font-bold uppercase tracking-tight max-w-xs">No gradients. No fluff. Just effective engineering.</p>
         <div className="flex gap-4">
            <button className="px-10 py-5 bg-white text-black border-4 border-black font-black uppercase shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] hover:translate-x-1 hover:translate-y-1 hover:shadow-none transition-all">Build it</button>
            <button className="px-10 py-5 bg-primary text-black border-4 border-black font-black uppercase shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] transition-all">Action</button>
         </div>
      </div>
    </div>
  );
};

export default BrutalistMockup;
