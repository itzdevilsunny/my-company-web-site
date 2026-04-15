import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle2 } from 'lucide-react';

const IntakeSuccess = ({ formData }) => {
  return (
    <div className="min-h-screen flex items-center justify-center p-6 bg-transparent">
      <motion.div 
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        className="max-w-xl w-full bg-white border-4 border-primary rounded-[3rem] p-16 text-center shadow-pop relative overflow-hidden"
      >
        <div className="absolute -top-10 -right-10 w-40 h-40 bg-primary/10 rounded-full" />
        <CheckCircle2 size={80} className="text-primary mx-auto mb-8" />
        <h2 className="text-4xl font-heading font-black mb-6">Strategy Synchronized.</h2>
        <p className="text-lg text-muted-foreground font-sans leading-relaxed mb-10">
          {formData.intakeMode === 'update' 
            ? "Your strategic update has been appended to your record. Our lead architect will review the changes and reach out shortly."
            : "Our engineering team is now reviewing your strategy deep-dive. Expect a call within 24 hours to schedule your consultation."}
        </p>
        <button 
          onClick={() => window.location.href = "/"}
          className="bg-foreground text-white px-10 py-4 rounded-full font-black shadow-pop hover:shadow-pop-active transition-all"
        >
          Return to Overview
        </button>
      </motion.div>
    </div>
  );
};

export default IntakeSuccess;
