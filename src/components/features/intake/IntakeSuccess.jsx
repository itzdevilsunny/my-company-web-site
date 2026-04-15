import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle2, Home, ArrowRight, Star, Sparkles, Rocket, Layout } from 'lucide-react';
import Magnetic from '../../ui/Magnetic';
import AnimatedText from '../../ui/AnimatedText';
import { themes } from '../../../data/themes';

const IntakeSuccess = ({ formData }) => {
  const selectedThemeName = themes.find(t => t.id === formData.designPreference)?.name;

  return (
    <div className="min-h-screen flex items-center justify-center p-6 bg-transparent relative overflow-hidden">
      {/* Celebration Background Elements */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="absolute inset-0 pointer-events-none"
      >
        <div className="absolute top-1/4 left-1/4 text-primary opacity-20 rotate-12 scale-150">
           <Star size={40} fill="currentColor" />
        </div>
        <div className="absolute bottom-1/4 right-1/4 text-secondary opacity-20 -rotate-12 scale-150">
           <Sparkles size={40} fill="currentColor" />
        </div>
        <div className="absolute top-1/2 right-1/3 text-tertiary opacity-20 -rotate-45 scale-150">
           <Rocket size={40} fill="currentColor" />
        </div>
      </motion.div>

      <motion.div 
        initial={{ y: 100, opacity: 0, rotateX: 20 }}
        animate={{ y: 0, opacity: 1, rotateX: 0 }}
        transition={{ type: "spring", stiffness: 100, damping: 20 }}
        className="max-w-3xl w-full bg-white border-4 border-foreground rounded-[4rem] p-12 lg:p-20 text-center shadow-pop-lg relative overflow-hidden perspective-1000"
      >
        {/* Decorative Ticket Perforation Appearance */}
        <div className="absolute left-0 top-1/2 -translate-y-1/2 w-6 h-12 bg-background border-r-4 border-foreground rounded-r-full -ml-1 shadow-inner" />
        <div className="absolute right-0 top-1/2 -translate-y-1/2 w-6 h-12 bg-background border-l-4 border-foreground rounded-l-full -mr-1 shadow-inner" />
        
        <motion.div 
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ delay: 0.3, type: "spring" }}
          className="w-24 h-24 bg-primary text-white border-4 border-foreground rounded-3xl mx-auto mb-10 flex items-center justify-center shadow-pop rotate-12"
        >
          <CheckCircle2 size={48} strokeWidth={3} />
        </motion.div>

        <h2 className="text-5xl lg:text-7xl font-heading font-black mb-6 leading-none tracking-tighter uppercase italic">
          <AnimatedText text="Strategy Synchronized." from="bottom" />
        </h2>
        
        <p className="text-xl lg:text-2xl text-muted-foreground font-sans font-bold leading-tight max-w-xl mx-auto mb-12 tracking-tight">
          {formData.intakeMode === 'update' 
            ? "Your high-fidelity update has been merged into our strategic core. Anticipate synchronization within 6 hours."
            : "Your project blueprint is being reviewed by our lead architects. The digital frontier awaits your arrival."}
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-20">
           <div className="p-6 bg-muted/30 border-2 border-foreground/10 rounded-3xl text-left">
              <span className="text-[10px] font-black uppercase tracking-widest text-muted-foreground block mb-2">Protocol //</span>
              <p className="font-heading font-black text-lg">{formData.intakeMode === 'new' ? 'Strategic Launch' : 'Ecosystem Update'}</p>
           </div>
           <div className="p-6 bg-muted/30 border-2 border-foreground/10 rounded-3xl text-left">
              <span className="text-[10px] font-black uppercase tracking-widest text-muted-foreground block mb-2">Architect //</span>
              <p className="font-heading font-black text-lg truncate">{formData.name || formData.email}</p>
           </div>
           {formData.intakeMode === 'new' && (
             <div className="p-6 bg-muted/30 border-2 border-foreground/10 rounded-3xl text-left col-span-1 md:col-span-2 flex items-center justify-between">
                <div>
                  <span className="text-[10px] font-black uppercase tracking-widest text-muted-foreground block mb-2">Visual Archetype //</span>
                  <p className="font-heading font-black text-lg">{selectedThemeName || formData.designPreference || 'Standard Protocol'}</p>
                </div>
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary border-2 border-primary/20 shadow-pop-sm">
                   <Layout size={24} />
                </div>
             </div>
           )}
        </div>

        <Magnetic strength={0.4}>
          <button 
            onClick={() => window.location.href = "/"}
            className="flex items-center gap-4 bg-foreground text-white px-12 py-6 rounded-full font-heading font-black text-2xl uppercase tracking-widest shadow-pop hover:shadow-pop-active transition-all group mx-auto"
          >
            <Home size={28} />
            Command Center
            <ArrowRight className="group-hover:translate-x-2 transition-transform" />
          </button>
        </Magnetic>
        
        {/* Footer branding */}
        <div className="mt-16 pt-8 border-t-2 border-dotted border-foreground/10 text-[10px] font-black uppercase tracking-[0.4em] text-foreground/20">
           Zorvia Digital Ecosystems // Protocol v4.0.2
        </div>
      </motion.div>
    </div>
  );
};

export default IntakeSuccess;
