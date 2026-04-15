import React from 'react';
import { motion } from 'framer-motion';

const NeumorphicMockup = ({ theme }) => {
  return (
    <div className="h-full flex flex-col items-center justify-center p-12">
       <div className="w-full grid grid-cols-2 gap-8 max-w-sm">
          <div className="aspect-square rounded-3xl shadow-[10px_10px_20px_#c0c5cc,-10px_-10px_20px_#ffffff] flex items-center justify-center">
             <div className="w-8 h-8 rounded-full bg-primary/20" />
          </div>
          <div className="aspect-square rounded-3xl shadow-[inset_10px_10px_20px_#c0c5cc,inset_-10px_-10px_20px_#ffffff] flex items-center justify-center">
             <div className="w-12 h-1.5 bg-primary/20 rounded-full" />
          </div>
       </div>
       <div className="mt-12 text-center">
          <h4 className="text-4xl font-black mb-4 tracking-tight">Pure Soft UI.</h4>
          <button className="mt-8 px-12 py-4 rounded-full shadow-[6px_6px_12px_#c0c5cc,-6px_-6px_12px_#ffffff] active:shadow-[inset_4px_4px_8px_#c0c5cc,inset_-4px_-4px_8px_#ffffff] font-black uppercase text-xs tracking-widest transition-all">Interact</button>
       </div>
    </div>
  );
};

export default NeumorphicMockup;
