import React from 'react';
import { motion } from 'framer-motion';

const LuxuryMockup = ({ theme }) => {
  return (
    <div className="h-full flex flex-col items-center justify-center p-20 text-center font-serif">
       <div className="w-[1px] h-32 bg-primary/30 mb-12" />
       <span className="text-[10px] font-black tracking-[0.6em] uppercase opacity-40 mb-6">Exclusivity Defined</span>
       <h4 className="text-6xl font-light mb-12 tracking-widest uppercase">E L E G A N C E.</h4>
       <p className="max-w-md text-sm italic opacity-60 leading-loose mb-12 uppercase tracking-widest">Curated digital experiences for the world's most distinguished identities.</p>
       <button className="px-12 py-4 border border-primary/40 text-[10px] font-black uppercase tracking-[0.3em] hover:bg-primary/5 transition-all">Inquire</button>
    </div>
  );
};

export default LuxuryMockup;
