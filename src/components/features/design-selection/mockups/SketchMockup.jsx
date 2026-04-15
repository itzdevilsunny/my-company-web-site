import React from 'react';
import { motion } from 'framer-motion';

const SketchMockup = ({ theme }) => {
  return (
    <div className="h-full flex flex-col justify-center p-12 font-mono">
       <div className="border-4 border-black p-8 rounded-[15px_100px_15px_100px/100px_15px_100px_15px] max-w-sm ml-8 bg-white shadow-xl text-black">
          <h4 className="text-4xl font-black mb-4">Crafted by hand.</h4>
          <p className="opacity-70 mb-8 leading-relaxed">Organic lines and imperfect edges for human digital experiences.</p>
          <button className="px-8 py-3 border-4 border-black font-black uppercase rounded-[40px_15px_40px_15px/15px_40px_15px_40px]">Sign Here</button>
       </div>
    </div>
  );
};

export default SketchMockup;
