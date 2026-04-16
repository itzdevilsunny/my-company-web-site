import React from 'react';
import { motion } from 'framer-motion';
import { BookOpen, PenTool, Search, Archive, Bookmark, Scroll, Library } from 'lucide-react';

const AcademiaMockup = ({ theme }) => {
  return (
    <div className="min-h-screen relative overflow-hidden bg-[#FDFBF7] text-[#2C241E] font-serif selection:bg-[#4A3728] selection:text-[#FDFBF7]">
      {/* 1. Paper Texture Overlay */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.05] bg-[url('https://www.transparenttextures.com/patterns/old-map.png')] grayscale" />
      <div className="absolute inset-0 pointer-events-none opacity-[0.02] bg-[url('https://www.transparenttextures.com/patterns/natural-paper.png')]" />

      {/* 2. Manuscript Borders */}
      <div className="absolute inset-10 border border-[#2C241E]/10 pointer-events-none" />
      <div className="absolute top-10 left-10 w-24 h-[1px] bg-[#2C241E]/30" />
      <div className="absolute top-10 left-10 h-24 w-[1px] bg-[#2C241E]/30" />

      {/* 3. Scholarly Layout */}
      <div className="relative z-10 h-full flex flex-col p-16 lg:p-24 overflow-y-auto custom-scrollbar">
        
        <header className="flex justify-between items-center mb-24 border-b border-[#2C241E]/20 pb-8">
           <div className="flex items-center gap-4">
              <Library size={24} className="opacity-60" />
              <div className="flex flex-col">
                 <span className="text-[10px] uppercase tracking-[0.3em] font-black opacity-40">Folio No. 042</span>
                 <span className="text-xl font-bold tracking-tight">ZORVIA ACADEMY</span>
              </div>
           </div>
           <nav className="hidden md:flex gap-12 text-[10px] font-black uppercase tracking-[0.2em] opacity-60">
              {['Archives', 'Treatises', 'Lexicon', 'Curriculum'].map(item => (
                <a key={item} href="#" className="hover:opacity-100 border-b border-transparent hover:border-[#2C241E] transition-all pb-1">{item}</a>
              ))}
           </nav>
           <div className="flex gap-6">
              <Search size={18} className="opacity-40" />
              <Bookmark size={18} className="opacity-40" />
           </div>
        </header>

        <main className="grid grid-cols-12 gap-16 flex-grow items-center">
           {/* Section 01: Main Thesis */}
           <div className="col-span-12 lg:col-span-8 space-y-12">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="space-y-6"
              >
                 <div className="flex items-center gap-3">
                    <Scroll size={16} className="text-[#8B4513]" />
                    <span className="text-xs italic opacity-60">Vol. VII: On Digital Architectures</span>
                 </div>

                 <h2 className="text-7xl lg:text-9xl font-bold leading-[0.9] tracking-tighter">
                    Intellectual <br />
                    Authority in the <br />
                    <span className="italic font-light serif text-[#8B4513]">Sovereign Era.</span>
                 </h2>
              </motion.div>

              <div className="flex gap-10 items-start">
                 <div className="w-16 h-[1px] bg-[#2C241E]/40 mt-4" />
                 <p className="max-w-xl text-xl font-medium italic leading-relaxed opacity-80">
                   "The preservation of knowledge is not merely an archival task, but a reconstructive digital protocol. We build architectures that endure the erosion of digital time."
                 </p>
              </div>

              {/* Ink Blot / Annotation */}
              <div className="relative w-fit">
                 <motion.button 
                   whileHover={{ scale: 1.02 }}
                   className="px-12 py-5 bg-[#2C241E] text-[#FDFBF7] font-bold uppercase text-[10px] tracking-[0.3em] shadow-[4px_4px_0px_#8B4513] transition-all"
                 >
                    Read the Treatise
                 </motion.button>
                 <motion.div 
                   animate={{ rotate: [-2, 2, -2] }}
                   transition={{ duration: 5, repeat: Infinity }}
                   className="absolute -right-24 -top-8 hidden lg:block"
                 >
                    <PenTool size={32} className="opacity-20 -rotate-12" />
                    <div className="text-[10px] font-handwritten text-[#8B4513] border-b border-[#8B4513]/30 w-fit">
                       * Marginalia on v1.0
                    </div>
                 </motion.div>
              </div>
           </div>

           {/* Section 02: Footnotes / References */}
           <div className="col-span-12 lg:col-span-4 bg-[#2C241E]/[0.02] p-12 border-l border-[#2C241E]/10 space-y-12 h-fit self-center">
              <div className="flex items-center gap-3 border-b border-[#2C241E]/10 pb-4">
                 <Archive size={16} className="opacity-40" />
                 <span className="text-[10px] font-black uppercase tracking-widest opacity-40">Citation Index</span>
              </div>

              <div className="space-y-8">
                 {[
                   { ref: '§ 1.1', title: 'The Archeology of Logic', author: 'Dr. Z. V.' },
                   { ref: '§ 2.4', title: 'Manifold Structures', author: 'Prof. Lexa' },
                   { ref: '§ 3.9', title: 'Ephemeral UI Nodes', author: 'Anon.' }
                 ].map((cite, i) => (
                   <motion.div 
                     key={i}
                     whileHover={{ x: 5 }}
                     className="group cursor-pointer"
                   >
                      <div className="text-[10px] font-mono opacity-40 mb-1">{cite.ref}</div>
                      <div className="text-lg font-bold group-hover:text-[#8B4513] transition-colors">{cite.title}</div>
                      <div className="text-xs italic opacity-60">By {cite.author}</div>
                   </motion.div>
                 ))}
              </div>

              <div className="pt-8 border-t border-[#2C241E]/10 flex flex-col items-center text-center gap-4">
                 <BookOpen size={24} className="opacity-20" />
                 <p className="text-[10px] font-black uppercase tracking-widest leading-none opacity-40">
                    Full catalog available in the <br /> Great Library of Zorvia.
                 </p>
              </div>
           </div>
        </main>

        <footer className="mt-20 border-t border-[#2C241E]/20 pt-8 flex justify-between items-center opacity-40 italic text-sm">
           <span>The Zorvia Scriptorium, MCMXXVI</span>
           <div className="flex gap-8 not-italic font-black text-[9px] uppercase tracking-widest">
              <span>Authority</span>
              <span>Heritage</span>
              <span>Reason</span>
           </div>
        </footer>
      </div>

      <style dangerouslySetInnerHTML={{ __html: `
        @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,700;1,400&display=swap');
        .font-handwritten { font-family: 'Dancing Script', cursive; }
        .custom-scrollbar::-webkit-scrollbar { width: 4px; }
        .custom-scrollbar::-webkit-scrollbar-thumb { background: #2C241E22; border-radius: 10px; }
      `}} />
    </div>
  );
};

export default AcademiaMockup;

