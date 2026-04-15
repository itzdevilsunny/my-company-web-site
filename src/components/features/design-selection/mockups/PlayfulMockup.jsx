import React from 'react';
import { motion } from 'framer-motion';
import { Circle, Square, Triangle, Hexagon, Star, Sparkles, Smile, ArrowRight } from 'lucide-react';

const PlayfulMockup = ({ theme }) => {
  return (
    <div className="h-full relative overflow-hidden bg-white text-slate-800 font-sans selection:bg-[#8B5CF6] selection:text-white">
      
      {/* 1. Floating Primitives Background */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
         <motion.div 
           animate={{ y: [0, -20, 0], rotate: [0, 10, 0] }} transition={{ duration: 4, repeat: Infinity }}
           className="absolute top-10 left-10 w-24 h-24 bg-[#F472B6] rounded-full opacity-20 border-[8px] border-[#F472B6]" 
         />
         <motion.div 
           animate={{ y: [0, 30, 0], rotate: [0, -15, 0] }} transition={{ duration: 5, repeat: Infinity }}
           className="absolute bottom-20 right-20 w-32 h-32 bg-[#34D399] rounded-[2rem] opacity-20 border-[8px] border-[#34D399]" 
         />
         <motion.div 
           animate={{ x: [0, -20, 0], rotate: [45, 90, 45] }} transition={{ duration: 6, repeat: Infinity }}
           className="absolute top-40 right-40 w-16 h-16 bg-[#FBBF24] opacity-20 border-[6px] border-[#FBBF24]" 
         />
      </div>

      {/* 2. Bouncy Layout structure */}
      <div className="relative z-10 h-full p-6 lg:p-12 flex flex-col pb-0">
        
        <header className="flex justify-between items-center mb-8">
           <motion.div 
             whileHover={{ scale: 1.1, rotate: -5 }}
             className="flex items-center gap-3 bg-[#8B5CF6] text-white px-6 py-3 rounded-full border-4 border-slate-900 shadow-pop"
           >
              <Smile size={24} />
              <span className="font-black text-xl uppercase tracking-wider">Zorvia!</span>
           </motion.div>

           <div className="hidden lg:flex gap-4">
              {['Home', 'Playground', 'Studio'].map((item, i) => (
                <motion.button 
                  key={item} whileHover={{ y: -4 }}
                  className="px-6 py-2 bg-slate-100 rounded-full font-bold border-2 border-transparent hover:border-slate-900 transition-colors"
                >
                   {item}
                </motion.button>
              ))}
           </div>
        </header>

        <main className="grid grid-cols-12 gap-8 flex-grow h-full items-end pb-8">
           {/* Left Hero Card */}
           <motion.div 
             initial={{ y: 100, opacity: 0 }}
             animate={{ y: 0, opacity: 1 }}
             transition={{ type: "spring", bounce: 0.5 }}
             className="col-span-12 lg:col-span-7 bg-[#FDE68A] border-4 border-slate-900 rounded-[3rem] p-12 h-full flex flex-col justify-center shadow-pop relative overflow-hidden group"
           >
              <Sparkles className="absolute top-8 right-8 text-amber-500 opacity-50 group-hover:scale-150 transition-transform" size={48} />
              <h2 className="text-6xl font-black leading-[1.1] mb-6 tracking-tight">
                 Make Digital <br />
                 <span className="text-[#8B5CF6]">Fun Again.</span>
              </h2>
              <p className="text-xl font-bold text-amber-900/60 max-w-md mb-8">
                 Bold lines, squishy geometry, and interactive layouts that actually make you want to click buttons.
              </p>
              <div className="mt-auto">
                 <motion.button 
                   whileHover={{ scale: 1.05 }}
                   whileTap={{ scale: 0.95 }}
                   className="px-8 py-5 bg-[#8B5CF6] text-white border-4 border-slate-900 rounded-full font-black text-lg uppercase tracking-wider shadow-pop hover:shadow-none hover:translate-y-1 hover:translate-x-1 transition-all flex items-center gap-3"
                 >
                    Start Playing <ArrowRight size={24} />
                 </motion.button>
              </div>
           </motion.div>

           {/* Right Geometry Stack */}
           <div className="col-span-12 lg:col-span-5 flex flex-col gap-8 h-full">
              <motion.div 
                initial={{ x: 100, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ type: "spring", bounce: 0.4, delay: 0.1 }}
                className="bg-[#A78BFA] border-4 border-slate-900 rounded-[3rem] p-8 flex-grow shadow-pop flex flex-col justify-between"
              >
                 <Circle size={48} className="text-white fill-white" />
                 <div className="text-3xl font-black text-slate-900 mt-4 leading-tight">Rounded <br/> Perfection.</div>
              </motion.div>

              <div className="flex gap-8 h-1/2">
                 <motion.div 
                   initial={{ y: 100, opacity: 0 }}
                   animate={{ y: 0, opacity: 1 }}
                   transition={{ type: "spring", bounce: 0.6, delay: 0.2 }}
                   className="bg-[#34D399] border-4 border-slate-900 rounded-[2rem] p-6 flex-1 shadow-pop flex items-center justify-center cursor-pointer hover:-translate-y-2 transition-transform"
                 >
                    <Triangle size={64} className="text-white fill-white" />
                 </motion.div>

                 <motion.div 
                   initial={{ y: 100, opacity: 0 }}
                   animate={{ y: 0, opacity: 1 }}
                   transition={{ type: "spring", bounce: 0.6, delay: 0.3 }}
                   className="bg-[#F472B6] border-4 border-slate-900 rounded-[2rem] p-6 flex-1 shadow-pop flex items-center justify-center cursor-pointer hover:-translate-y-2 transition-transform"
                 >
                    <Square size={64} className="text-white fill-white" />
                 </motion.div>
              </div>
           </div>
        </main>
      </div>

      <style dangerouslySetInnerHTML={{ __html: `
         .shadow-pop { box-shadow: 8px 8px 0px 0px rgba(15,23,42,1); }
      `}} />
    </div>
  );
};

export default PlayfulMockup;
