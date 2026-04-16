import React from 'react';
import { motion } from 'framer-motion';
import { 
  Rocket, 
  ArrowLeft, 
  Hash, 
  Target,
  Sparkles,
  Mail,
  ChevronRight
} from 'lucide-react';
import { Link } from 'react-router-dom';

const Careers = () => {
  return (
    <div className="min-h-screen bg-white pt-32 pb-20 selection:bg-tertiary/30 selection:text-foreground">
      {/* Background HUD Layer */}
      <div className="fixed inset-0 pointer-events-none opacity-[0.03] z-0">
        <div className="absolute inset-0 bg-[#10B981]/10 bg-[radial-gradient(#10B981_1px,transparent_1px)] [background-size:32px_32px]" />
      </div>

      <div className="container mx-auto px-6 lg:px-12 relative z-10 flex flex-col items-center justify-center min-h-[70vh] text-center">
        
        {/* Header Infrastructure */}
        <div className="max-w-4xl mx-auto w-full mb-12">
          <Link 
            to="/" 
            className="inline-flex items-center gap-2 text-[10px] font-black uppercase tracking-[0.3em] text-muted-foreground hover:text-tertiary mb-12 transition-all hover:-translate-x-1"
          >
            <ArrowLeft size={14} /> Back to Headquarters
          </Link>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="space-y-8"
          >
            <div className="flex flex-col items-center gap-4">
               <span className="px-3 py-1 bg-tertiary text-white border-2 border-foreground shadow-[4px_4px_0px_currentColor] rounded-lg text-[10px] font-black uppercase tracking-widest flex items-center gap-2">
                 <Target size={12} strokeWidth={3} /> Talent Nexus // Status: Offline
               </span>
               <span className="text-[10px] font-black uppercase tracking-widest text-muted-foreground opacity-60 flex items-center gap-2">
                 <Hash size={12} /> v2.6.0.WAITLIST
               </span>
            </div>
            
            <h1 className="text-7xl md:text-9xl font-heading font-black tracking-tighter uppercase italic leading-[0.8] mb-8">
              Hiring <br/><span className="text-tertiary underline decoration-8 underline-offset-8">Soon.</span>
            </h1>
            
            <p className="text-2xl md:text-3xl font-bold text-muted-foreground max-w-2xl mx-auto leading-tight italic">
              Our Collective is currently at peak capacity. We are re-calibrating our architectural nodes for the next growth cycle.
            </p>
          </motion.div>
        </div>

        {/* Coming Soon Interactive Card */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.2 }}
          className="max-w-2xl w-full p-12 bg-foreground text-white rounded-[48px] shadow-pop-lg relative overflow-hidden group"
        >
           <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-tertiary/20 via-transparent to-transparent pointer-events-none" />
           <div className="absolute -right-20 -bottom-20 w-64 h-64 bg-tertiary/10 rounded-full blur-3xl group-hover:bg-tertiary/20 transition-all duration-700" />
           
           <div className="relative z-10 space-y-8">
              <div className="w-20 h-20 bg-white/5 border border-white/10 rounded-3xl flex items-center justify-center mx-auto">
                 <Rocket size={40} className="text-tertiary group-hover:-translate-y-2 group-hover:translate-x-2 transition-transform duration-500 ease-out" />
              </div>
              
              <div className="space-y-2">
                <h3 className="text-3xl font-heading font-black uppercase tracking-tighter italic">Join the Waitlist</h3>
                <p className="text-lg font-bold text-slate-400 italic">
                  Drop your signal below. We'll notify your uplink the moment a new architectural node opens.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                 <input 
                  type="email" 
                  placeholder="identity@nexus.tech" 
                  className="flex-1 bg-white/5 border-2 border-white/10 rounded-2xl px-6 py-4 font-bold text-white placeholder:text-white/20 focus:outline-none focus:border-tertiary transition-all"
                 />
                 <button className="px-8 py-4 bg-tertiary text-white rounded-2xl font-black uppercase text-xs tracking-widest shadow-pop-sm hover:translate-y-1 hover:shadow-none transition-all flex items-center justify-center gap-2">
                   Notify Me <ChevronRight size={18} />
                 </button>
              </div>
           </div>
        </motion.div>

        {/* Support Footer */}
        <div className="mt-20 flex flex-col items-center gap-6">
           <div className="flex items-center gap-6 grayscale opacity-40">
              <Sparkles size={24} />
              <div className="w-px h-8 bg-foreground/20" />
              <h4 className="text-[10px] font-black uppercase tracking-[0.5em]">Zorvia Digital Bengaluru</h4>
           </div>
           <p className="text-[11px] font-black uppercase tracking-widest text-muted-foreground flex items-center gap-2">
             For strategic inquiries: <a href="mailto:talent@zorvia.tech" className="text-tertiary hover:underline flex items-center gap-1"><Mail size={12} /> talent@zorvia.tech</a>
           </p>
        </div>

      </div>
    </div>
  );
};

export default Careers;
