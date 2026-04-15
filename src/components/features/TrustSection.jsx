import React from 'react';
import { motion } from 'framer-motion';
import { Zap, CircleDollarSign, BarChart3, ShieldCheck, Star } from 'lucide-react';
import Magnetic from '../ui/Magnetic';

const trustPoints = [
  {
    icon: <Zap size={40} />,
    title: "Turbo Delivery",
    desc: "We don't do 'slow'. Our optimized CI/CD pipelines ensure your vision hits the market at supersonic speeds.",
    color: "bg-primary"
  },
  {
    icon: <CircleDollarSign size={40} />,
    title: "Strategic Value",
    desc: "Enterprise-grade solutions precisely engineered to maximize ROI while fitting your ecosystem perfectly.",
    color: "bg-secondary"
  },
  {
    icon: <BarChart3 size={40} />,
    title: "Infinite Scale",
    desc: "Custom-built architectures designed to auto-scale from your first 1,000 users to your first 10,000,000.",
    color: "bg-quaternary"
  }
];

const TrustSection = () => {
  return (
    <section className="px-6 lg:px-12 py-24 lg:py-32 bg-foreground relative overflow-hidden" id="trust">
      {/* Background neon grid with depth */}
      <div className="absolute inset-0 opacity-20 bg-[linear-gradient(to_right,#8B5CF6_1px,transparent_1px),linear-gradient(to_bottom,#8B5CF6_1px,transparent_1px)] bg-[size:80px_80px]" />
      <div className="absolute inset-0 bg-gradient-to-b from-foreground via-transparent to-foreground" />
      
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-32">
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            className="inline-flex items-center gap-2 px-4 py-2 bg-white/5 border border-white/10 rounded-full text-primary font-black text-xs uppercase tracking-[0.5em] mb-8"
          >
            <Star size={12} fill="currentColor" /> Why the best choose us
          </motion.div>
          <h2 className="text-4xl lg:text-7xl font-heading text-white tracking-tighter leading-[0.8] mb-8">
            The Zorvia <br /> <span className="text-tertiary italic underline decoration-white decoration-4 underline-offset-4">Standard.</span>
          </h2>
          <p className="text-white/40 font-sans max-w-xl mx-auto text-base lg:text-lg font-medium leading-relaxed">
            We don't just build software systems; we build the <span className="text-white font-black italic">high-performance foundations</span> for your long-term digital empire.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {trustPoints.map((point, i) => (
            <Magnetic key={i} strength={0.2}>
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.15, type: "spring", stiffness: 100 }}
                className="p-8 lg:p-10 bg-white/5 border-2 border-white/10 rounded-3xl backdrop-blur-xl group hover:bg-white/10 hover:border-white/20 transition-all text-center flex flex-col items-center h-full shadow-2xl"
              >
                <div className={`w-20 h-20 ${point.color} text-white border-2 border-foreground rounded-2xl flex items-center justify-center mb-8 shadow-pop group-hover:shadow-pop group-hover:-rotate-3 transition-all duration-500`}>
                  {React.cloneElement(point.icon, { size: 28 })}
                </div>
                <h3 className="text-xl lg:text-2xl font-heading font-black text-white mb-4 uppercase tracking-tighter italic">{point.title}</h3>
                <p className="text-white/40 text-base font-medium leading-relaxed">
                  {point.desc}
                </p>
                <div className="mt-8 opacity-0 group-hover:opacity-100 transition-opacity">
                  <div className="w-12 h-1 bg-white/20 rounded-full" />
                </div>
              </motion.div>
            </Magnetic>
          ))}
        </div>
        
        {/* Playful Floating Badge */}
        <Magnetic strength={1}>
          <motion.div 
            animate={{ rotate: [0, 8, -8, 0], y: [0, -20, 0] }}
            transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
            className="hidden lg:flex absolute -right-16 top-16 w-32 h-32 bg-secondary border-2 border-foreground rounded-full shadow-pop flex flex-col items-center justify-center text-center p-4 cursor-pointer group"
          >
            <ShieldCheck className="text-white mb-1 w-10 h-10 group-hover:scale-110 transition-transform" />
            <span className="text-[12px] font-black uppercase text-white leading-tight tracking-widest">Enterprise <br /> Grade</span>
          </motion.div>
        </Magnetic>
      </div>
    </section>
  );
};

export default TrustSection;
