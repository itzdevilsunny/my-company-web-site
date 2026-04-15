import React from 'react';
import { motion } from 'framer-motion';
import { Shield, Lock, Eye, Globe, ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';

const Privacy = () => {
  return (
    <div className="min-h-screen bg-white pt-40 pb-20 px-6 lg:px-24">
      <div className="max-w-3xl mx-auto">
        <Link to="/" className="inline-flex items-center gap-2 text-[10px] font-black uppercase tracking-widest text-muted-foreground hover:text-primary mb-12 transition-colors">
          <ArrowLeft size={14} /> Back to Base
        </Link>
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <h1 className="text-6xl font-heading font-black tracking-tighter uppercase italic mb-12">
            Privacy <span className="text-secondary">Mesh.</span>
          </h1>
          
          <div className="space-y-12 font-sans">
            <section className="space-y-4">
              <h2 className="text-xl font-black uppercase tracking-widest flex items-center gap-3">
                <Shield size={20} className="text-primary" /> 01 // Intelligence Collection
              </h2>
              <p className="text-lg font-bold text-muted-foreground leading-relaxed">
                We only synchronize data that is essential for the architectural development of your digital ecosystem. Your identity hash is protected by high-fidelity security protocols.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-xl font-black uppercase tracking-widest flex items-center gap-3">
                <Lock size={20} className="text-secondary" /> 02 // Data Sovereignty
              </h2>
              <p className="text-lg font-bold text-muted-foreground leading-relaxed">
                Your strategic blueprints and project inquiries are stored in an encrypted vault. We do not distribute your intelligence to third-party nodes.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-xl font-black uppercase tracking-widest flex items-center gap-3">
                <Eye size={20} className="text-tertiary" /> 03 // Transparency
              </h2>
              <p className="text-lg font-bold text-muted-foreground leading-relaxed">
                You have full control over your data. Request a complete purge of your records at any time through our command portal.
              </p>
            </section>
          </div>

          <div className="mt-20 p-8 border-2 border-dashed border-slate-200 rounded-3xl text-center">
            <p className="text-xs font-bold text-muted-foreground uppercase tracking-widest">
              Last Synchronized: April 15, 2026
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Privacy;
