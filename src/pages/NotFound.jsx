import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Terminal, ArrowRight, Home, ShieldAlert, Cpu } from 'lucide-react';

const NotFound = () => {
  return (
    <div className="min-h-screen bg-white flex items-center justify-center p-6 relative overflow-hidden font-sans">
      {/* Background HUD Grid */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.03]">
        <div className="absolute inset-0 bg-[radial-gradient(#000_1px,transparent_1px)] [background-size:32px_32px]" />
      </div>

      <div className="max-w-2xl w-full relative z-10">
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="bg-slate-900 border-8 border-foreground rounded-[48px] p-8 md:p-16 shadow-pop-lg text-white space-y-8 relative overflow-hidden"
        >
          {/* Glitch Overlay Decor */}
          <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-secondary via-transparent to-tertiary opacity-30" />
          
          <div className="flex flex-col items-center text-center space-y-6">
            <div className="w-24 h-24 bg-secondary rounded-[32px] flex items-center justify-center shadow-[8px_8px_0px_#000] rotate-3 mb-4">
              <ShieldAlert size={48} className="text-white" />
            </div>

            <div className="space-y-2">
              <div className="flex items-center justify-center gap-3 text-[10px] font-black uppercase tracking-[0.4em] text-secondary">
                <Cpu size={12} /> Error Node Identified
              </div>
              <h1 className="text-8xl md:text-[10rem] font-heading font-black tracking-tighter leading-none italic uppercase">
                404.
              </h1>
              <p className="text-2xl font-bold italic text-slate-400">
                Uplink Severed: This path does not exist in the Zorvia Protocol.
              </p>
            </div>

            <div className="w-full h-px bg-white/10 my-8" />

            <div className="flex flex-col sm:flex-row gap-6 w-full sm:w-auto">
              <Link 
                to="/" 
                className="group px-8 py-5 bg-secondary text-white border-4 border-foreground rounded-2xl font-black uppercase tracking-widest text-sm shadow-pop hover:shadow-none transition-all flex items-center justify-center gap-3"
              >
                <Home size={20} /> Re-Establish Uplink
              </Link>
              
              <button 
                onClick={() => window.history.back()}
                className="px-8 py-5 bg-white text-foreground border-4 border-foreground rounded-2xl font-black uppercase tracking-widest text-sm shadow-pop hover:shadow-none transition-all flex items-center justify-center gap-3"
              >
                Previous Node <ArrowRight size={20} className="rotate-180" />
              </button>
            </div>
          </div>

          {/* Terminal Code Decor */}
          <div className="mt-12 p-6 bg-black/40 rounded-3xl border border-white/5 font-mono text-[10px] text-green-400/60 overflow-hidden select-none">
            <div className="flex items-center gap-2 mb-2">
              <Terminal size={12} />
              <span>SYSTEM_DIAGNOSTICS</span>
            </div>
            <p>> scanning_routes... [FAILED]</p>
            <p>> searching_manifest... [0_RESULTS_FOUND]</p>
            <p>> error_code: ERR_NODE_NOT_SYNCED</p>
            <p className="animate-pulse">> _</p>
          </div>
        </motion.div>

        {/* Floating Stickers */}
        <motion.div 
          animate={{ y: [0, -10, 0], rotate: [-5, -2, -5] }}
          transition={{ repeat: Infinity, duration: 4 }}
          className="absolute -top-12 -right-8 w-24 h-24 bg-tertiary border-4 border-foreground rounded-full flex items-center justify-center shadow-pop font-black text-white text-xs text-center p-2 uppercase tracking-tighter -rotate-12 pointer-events-none"
        >
          Lost in Space?
        </motion.div>
      </div>

      {/* Aesthetic Border Decor */}
      <div className="fixed top-8 left-8 p-4 border-2 border-slate-100 rounded-2xl hidden lg:block">
        <div className="text-[8px] font-black uppercase tracking-widest text-muted-foreground vertical-text leading-none">
          SYSTEM FAULT // PERSISTENCE LAYER MISSING
        </div>
      </div>
    </div>
  );
};

export default NotFound;
