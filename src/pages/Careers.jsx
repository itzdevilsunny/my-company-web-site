import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase, Zap, Globe, ArrowRight, Sparkles, Star } from 'lucide-react';
import Magnetic from '../components/ui/Magnetic';

const Careers = () => {
  const positions = [
    { title: 'Visual Architect', type: 'Full-time', location: 'SF / Remote', team: 'Design' },
    { title: 'Growth Engineer', type: 'Contract', location: 'BLR / Remote', team: 'Engineering' },
    { title: 'Intelligence Analyst', type: 'Full-time', location: 'London', team: 'Strategy' },
  ];

  return (
    <div className="min-h-screen bg-white pt-40 pb-20 px-6 lg:px-24">
      <div className="max-w-4xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-20"
        >
          <span className="inline-block px-4 py-1 bg-black text-white font-black uppercase mb-6 shadow-pop-sm">Hiring // v4.2</span>
          <h1 className="text-7xl lg:text-9xl font-heading font-black tracking-tighter uppercase italic leading-none mb-8">
            Join the <br/> <span className="text-primary">Collective.</span>
          </h1>
          <p className="text-2xl font-bold text-muted-foreground leading-tight max-w-2xl">
            We are looking for wildly optimistic individuals who want to architect the future of digital infrastructure.
          </p>
        </motion.div>

        <div className="space-y-6">
          {positions.map((pos, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: i * 0.1 }}
              className="p-8 border-4 border-foreground rounded-[2rem] flex flex-col md:flex-row justify-between items-start md:items-center gap-6 group hover:bg-slate-50 transition-all cursor-pointer shadow-pop-sm hover:shadow-pop"
            >
              <div>
                <div className="flex items-center gap-3 mb-2">
                  <span className="text-[10px] font-black uppercase tracking-widest text-primary">{pos.team}</span>
                  <span className="w-1 h-1 rounded-full bg-slate-300" />
                  <span className="text-[10px] font-black uppercase tracking-widest text-muted-foreground">{pos.type}</span>
                </div>
                <h3 className="text-3xl font-heading font-black uppercase italic">{pos.title}</h3>
                <p className="text-sm font-bold opacity-40 uppercase tracking-widest mt-1">{pos.location}</p>
              </div>
              
              <Magnetic strength={0.2}>
                <button className="px-8 py-4 bg-black text-white rounded-full font-black uppercase text-xs tracking-widest flex items-center gap-3 group-hover:bg-primary transition-all">
                  Apply Now
                  <ArrowRight size={16} />
                </button>
              </Magnetic>
            </motion.div>
          ))}
        </div>

        <div className="mt-32 p-12 bg-secondary/10 border-4 border-foreground rounded-[3rem] text-center relative overflow-hidden">
           <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(#ec4899_1px,transparent_1px)] bg-[size:20px_20px] opacity-10" />
           <div className="relative z-10">
              <h4 className="text-4xl font-heading font-black mb-6 uppercase italic">Don't see your role?</h4>
              <p className="text-lg font-bold text-muted-foreground mb-10 max-w-xl mx-auto">
                We're always looking for exceptional talent. Send your portfolio to our intelligence unit.
              </p>
              <button className="px-12 py-6 bg-white border-4 border-foreground rounded-full font-black uppercase tracking-widest shadow-pop hover:shadow-none hover:translate-x-1 hover:translate-y-1 transition-all">
                General Inquiry
              </button>
           </div>
        </div>
      </div>
    </div>
  );
};

export default Careers;
