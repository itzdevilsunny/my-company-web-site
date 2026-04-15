import React from 'react';
import { motion } from 'framer-motion';
import { ShieldCheck, Zap, Users2, Sparkles, MoveRight, Target, Rocket, Lightbulb } from 'lucide-react';
import AnimatedText from '../ui/AnimatedText';

const reasons = [
  { icon: <Zap size={24}/>, title: 'Operational Efficiency', desc: 'Industry-leading delivery timelines without compromising system integrity.', color: 'bg-primary' },
  { icon: <Target size={24}/>, title: 'Precision Engineering', desc: 'Every line of code is written with scalability and security in mind.', color: 'bg-secondary' },
  { icon: <Rocket size={24}/>, title: 'Strategic Scaling', desc: 'We build systems that grow alongside your business ecosystem.', color: 'bg-tertiary' },
  { icon: <Lightbulb size={24}/>, title: 'Innovative Solutions', desc: 'Solving complex technical challenges with forward-thinking architecture.', color: 'bg-quaternary' },
];

const WhyUs = () => {
  return (
    <section id="why-us" className="px-6 lg:px-24 py-20 lg:py-40 border-t-2 border-foreground bg-white relative overflow-hidden">
      {/* Background polka pattern */}
      <div className="absolute inset-0 opacity-5 bg-[radial-gradient(#1E293B_1px,transparent_1px)] bg-[size:20px_20px]" />
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-center relative z-10">
        <div>
          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="text-primary font-black text-[10px] lg:text-xs uppercase tracking-[0.3em] mb-3 lg:mb-4"
          >
            // Our Strategic Advantage
          </motion.div>
          
          <motion.h2 
            className="text-4xl sm:text-6xl lg:text-8xl font-heading text-foreground tracking-tighter leading-none mb-6 lg:mb-10"
          >
            <AnimatedText 
              text="Why Partners" 
              className="block" 
              from="left" 
            />
            <AnimatedText 
              text="Trust Zorvia." 
              className="text-secondary italic" 
              from="left"
              delay={0.5}
            />
          </motion.h2>
          
          <p className="text-lg lg:text-xl text-muted-foreground leading-relaxed max-w-lg mb-8 lg:mb-12 font-sans">
            We deliver high-performance digital infrastructure designed for enterprise reliability and long-term business growth.
          </p>
          
          <div className="relative w-full h-auto min-h-[6rem] py-4 bg-muted/20 border-2 border-foreground border-dashed rounded-2xl flex items-center justify-center overflow-hidden">
             <div className="w-full px-4">
                <div className="flex flex-wrap justify-center gap-3 lg:gap-4 font-heading font-black text-[10px] lg:text-sm uppercase">
                  <span className="bg-muted px-3 lg:px-4 py-1.5 lg:py-2 rounded-full border-2 border-foreground/10">Architecture-First</span>
                  <span className="bg-muted px-3 lg:px-4 py-1.5 lg:py-2 rounded-full border-2 border-foreground/10">Seamless UX</span>
                  <span className="bg-muted px-3 lg:px-4 py-1.5 lg:py-2 rounded-full border-2 border-foreground/10">Data Intelligence</span>
                </div>
             </div>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
          {reasons.map((r, i) => (
            <motion.div 
              key={i}
              initial={{ scale: 0, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              transition={{ type: "spring", delay: i * 0.1 }}
              whileHover={{ y: -10, rotate: i % 2 === 0 ? 2 : -2 }}
              className="p-8 bg-white border-2 border-foreground rounded-2xl shadow-pop hover:shadow-pop-lg transition-all"
            >
              <div className={`w-14 h-14 ${r.color} text-white rounded-xl border-2 border-foreground flex items-center justify-center mb-6 shadow-pop transform rotate-3`}>
                {r.icon}
              </div>
              <h3 className="text-2xl font-heading font-extrabold mb-3 text-foreground">{r.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">{r.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyUs;
