import React from 'react';
import { motion } from 'framer-motion';

const BauhausMockup = ({ theme }) => {
  const { styles: s } = theme;

  return (
    <div className="h-full relative overflow-hidden flex flex-col justify-center p-12 bg-[#F0F0F0]">
      {/* Background Compositional Elements */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-[#1040C0] opacity-10" />
      <motion.div 
        initial={{ x: 100, rotate: 45 }}
        animate={{ x: 0 }}
        className="absolute -top-20 -right-20 w-64 h-64 border-8 border-black opacity-20" 
      />
      
      <div className="relative z-10 flex flex-col items-start text-black">
        {/* Geometric Composition Header */}
        <div className="flex gap-4 mb-12">
          <div className="w-12 h-12 bg-[#D02020] border-4 border-black shadow-[4px_4px_0px_0px_black]" />
          <div className="w-12 h-12 bg-[#1040C0] rounded-full border-4 border-black shadow-[4px_4px_0px_0px_black]" />
          <div className="w-12 h-12 bg-[#F0C020] border-4 border-black rotate-45 shadow-[4px_4px_0px_0px_black]" />
        </div>

        <h4 className="text-7xl font-black mb-10 leading-[0.85] uppercase tracking-tighter">
          FORM <br/> 
          <span className="bg-[#D02020] text-white px-4 inline-block transform -rotate-2">FOLLOWS</span> <br/> 
          FUNCTION.
        </h4>

        <div className="flex flex-col gap-6 w-full max-w-xs">
          <p className="text-lg font-bold uppercase tracking-tight text-black/60 border-l-8 border-[#1040C0] pl-6">
            Constructivist Logic. <br/> Architectural Design.
          </p>
          <motion.button 
            whileHover={{ x: 4, y: 4, boxShadow: '0px 0px 0px 0px black' }}
            className="w-full py-5 bg-[#D02020] text-white border-4 border-black font-black uppercase tracking-widest shadow-[8px_8px_0px_0px_black] transition-all"
          >
            EXECUTE PLAN
          </motion.button>
        </div>
      </div>

      {/* Floating Decorative Elements */}
      <div className="absolute bottom-12 right-12 flex gap-2">
        <div className="w-24 h-24 rounded-full bg-[#1040C0] border-4 border-black" />
        <div className="w-24 h-24 bg-[#F0C020] border-4 border-black -translate-x-12 translate-y-6 flex items-center justify-center font-black text-4xl text-black">!</div>
      </div>
    </div>
  );
};

export default BauhausMockup;
