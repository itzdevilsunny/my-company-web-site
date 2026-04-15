import React from 'react';
import { motion } from 'framer-motion';
import { Code, Smartphone, Palette, BrainCircuit, Cloud, ArrowUpRight } from 'lucide-react';
import AnimatedText from '../ui/AnimatedText';

const services = [
  { 
    icon: <Code size={32} />, 
    title: 'Advanced Web Development', 
    desc: 'Scalable, high-performance web platforms engineered for industry-leading speed.',
    color: 'bg-primary',
    className: 'lg:col-span-2'
  },
  { 
    icon: <Smartphone size={32} />, 
    title: 'Mobile Excellence', 
    desc: 'Seamless mobile applications that prioritize user engagement and accessibility.',
    color: 'bg-secondary',
    className: 'lg:col-span-1'
  },
  { 
    icon: <Palette size={32} />, 
    title: 'Creative Strategy', 
    desc: 'Comprehensive UI/UX design systems focused on brand conversion and clarity.',
    color: 'bg-tertiary',
    className: 'lg:col-span-1'
  },
  { 
    icon: <BrainCircuit size={32} />, 
    title: 'Intelligent Systems', 
    desc: 'Custom-built artificial intelligence solutions integrated with your core business logic.',
    color: 'bg-quaternary',
    className: 'lg:col-span-2'
  }
];

const ServiceCard = ({ s, i }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50, scale: 0.9 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true }}
      transition={{ type: "spring", stiffness: 100, delay: i * 0.1 }}
      whileHover={{ scale: 1.02, rotate: i % 2 === 0 ? 1 : -1 }}
      className={`${s.className} group h-full`}
    >
      <div className="relative h-full p-8 lg:p-10 bg-white border-2 border-foreground rounded-2xl shadow-pop hover:shadow-pop-lg transition-all duration-300">
        <div className={`absolute top-0 left-8 lg:left-10 -translate-y-1/2 w-12 h-12 lg:w-16 lg:h-16 ${s.color} text-white rounded-full border-2 border-foreground flex items-center justify-center shadow-pop group-hover:rotate-12 transition-transform`}>
          {React.cloneElement(s.icon, { size: window.innerWidth < 1024 ? 24 : 32 })}
        </div>
        
        <div className="mt-6 lg:mt-8">
          <h3 className="text-2xl lg:text-3xl font-heading font-extrabold mb-3 lg:mb-4 text-foreground">{s.title}</h3>
          <p className="text-base lg:text-lg text-muted-foreground leading-relaxed font-sans">{s.desc}</p>
        </div>
        
        <div className="mt-8 lg:mt-10 flex items-center gap-2 font-bold text-primary group-hover:translate-x-2 transition-transform text-sm lg:text-base">
          Learn More <ArrowUpRight size={18} className="lg:size-[20px]" />
        </div>

        {/* Squiggle Decoration inside card */}
        <div className="absolute bottom-4 right-4 text-muted/30 opacity-0 group-hover:opacity-100 transition-opacity">
           <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
             <path d="M5 20C5 20 10 15 15 20C20 25 25 30 30 25C35 20 40 15 40 20" stroke="currentColor" strokeWidth="4" strokeLinecap="round"/>
           </svg>
        </div>
      </div>
    </motion.div>
  );
};

const Services = () => {
  return (
    <section id="services" className="px-6 lg:px-24 py-32 bg-transparent relative">
      <div className="flex flex-col items-center mb-24 text-center">
        <motion.span 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="text-secondary font-bold uppercase tracking-[0.3em] text-sm mb-4 bg-secondary/10 px-4 py-1 rounded-full border border-secondary/20"
        >
          Visual Spectrum
        </motion.span>
        <motion.h2 
          className="text-4xl sm:text-5xl lg:text-7xl font-heading text-foreground tracking-tight max-w-4xl"
        >
          <AnimatedText 
            text="Engineering Excellence" 
            className="block" 
            from="right" 
          />
          <AnimatedText 
            text="In Every Solution." 
            className="text-primary italic block sm:inline" 
            from="right"
            delay={0.5}
          />
        </motion.h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
        {services.map((s, i) => (
          <ServiceCard key={i} s={s} i={i} />
        ))}
        
        {/* Playful Placeholder/CTA Card */}
        <motion.div 
           initial={{ opacity: 0, scale: 0.8 }}
           whileInView={{ opacity: 1, scale: 1 }}
           className="bg-tertiary/20 border-2 border-foreground border-dashed rounded-2xl flex flex-col items-center justify-center p-10 text-center gap-6"
        >
           <div className="w-20 h-20 bg-white border-2 border-foreground rounded-full flex items-center justify-center shadow-pop animate-bounce">
              <Sparkles className="text-tertiary" size={40} />
           </div>
           <h3 className="text-2xl font-heading font-extrabold max-w-[200px]">Have a wild idea?</h3>
           <button className="bg-foreground text-white px-8 py-3 rounded-full font-bold shadow-pop hover:scale-110 transition-transform">
             Let's Chat
           </button>
        </motion.div>
      </div>
    </section>
  );
};

const Sparkles = ({ className, size }) => (
  <svg className={className} width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="m12 3-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.813a2 2 0 0 1 1.275-1.275L21 12l-5.813-1.912a2 2 0 0 1-1.275-1.275L12 3Z"/>
    <path d="M5 3v4"/><path d="M3 5h4"/><path d="M21 17v4"/><path d="M19 19h4"/>
  </svg>
);

export default Services;
