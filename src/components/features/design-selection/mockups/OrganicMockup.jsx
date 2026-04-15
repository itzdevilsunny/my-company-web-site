import React from 'react';
import { motion } from 'framer-motion';

const OrganicMockup = ({ theme }) => {
  return (
    <div className="h-full relative overflow-hidden flex flex-col justify-center p-16">
       <div className="absolute top-0 left-0 w-64 h-64 rounded-full bg-primary/5 -translate-x-1/2 -translate-y-1/2 blur-3xl" />
       <div className="z-10 max-w-sm">
          <span className="text-xs font-black uppercase text-primary/60 tracking-widest mb-4 inline-block">Natural flow</span>
          <h4 className="text-6xl font-black mb-8 leading-[1.1] tracking-tighter italic">Growing <br/> Connections.</h4>
          <p className="opacity-60 mb-10 leading-relaxed">Soft edges and living color palettes for a digital garden.</p>
          <button className="px-10 py-5 rounded-[50%_50%_50%_50%/60%_60%_40%_40%] bg-primary text-white font-black hover:opacity-80 transition-all">Begin Journey</button>
       </div>
    </div>
  );
};

export default OrganicMockup;
