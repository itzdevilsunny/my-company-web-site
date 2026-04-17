import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Code, Smartphone, Palette, BrainCircuit, Cloud, ArrowUpRight } from 'lucide-react';
import AnimatedText from '../ui/AnimatedText';

const services = [
  { 
    icon: <Code size={32} />, 
    title: 'Advanced Web Development', 
    desc: 'We engineer robust, highly scalable digital infrastructures using modern stacks. Our high-performance platforms are architecture-first, ensuring lightning-fast load times, flawless database structures, and uncompromising SEO standards to dominate your market.',
    color: 'bg-primary',
    className: 'lg:col-span-2'
  },
  { 
    icon: <Smartphone size={32} />, 
    title: 'Mobile Excellence', 
    desc: 'We craft frictionless iOS and Android experiences that captivate from the first tap. By blending native-like performance with intuitive, gesture-driven UX design, we ensure your mobile presence delivers maximum retention.',
    color: 'bg-secondary',
    className: 'lg:col-span-1'
  },
  { 
    icon: <Palette size={32} />, 
    title: 'Creative Strategy', 
    desc: 'Our design philosophy transcends aesthetics. We build comprehensive, psychology-driven UI/UX design systems that guide user behavior, creating immersive visual narratives engineered specifically to maximize ROI and brand conversion.',
    color: 'bg-tertiary',
    className: 'lg:col-span-1'
  },
  { 
    icon: <BrainCircuit size={32} />, 
    title: 'Intelligent Systems', 
    desc: 'Future-proof your enterprise with state-of-the-art AI integration. We seamlessly embed custom LLM solutions and automated neural pipelines directly into your core business logic to multiply efficiency and unlock predictive insights.',
    color: 'bg-quaternary',
    className: 'lg:col-span-2'
  }
];

const ServiceCard = ({ s, i }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 50, scale: 0.9 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true }}
      transition={{ type: "spring", stiffness: 100, delay: i * 0.1 }}
      whileHover={{ scale: 1.02, rotate: i % 2 === 0 ? 1 : -1 }}
      className={`${s.className} group h-full`}
    >
      <div className="relative h-full p-6 lg:p-8 bg-white border-2 border-foreground rounded-xl shadow-pop hover:shadow-pop transition-all duration-300 flex flex-col justify-between">
        <div>
          <div className={`absolute top-0 left-6 lg:left-8 -translate-y-1/2 w-10 h-10 lg:w-12 lg:h-12 ${s.color} text-white rounded-full border-2 border-foreground flex items-center justify-center shadow-pop group-hover:rotate-12 transition-transform`}>
            {React.cloneElement(s.icon, { size: window.innerWidth < 1024 ? 24 : 32 })}
          </div>
          
          <div className="mt-4 lg:mt-6">
            <h3 className="text-xl lg:text-2xl font-heading font-extrabold mb-2 lg:mb-3 text-foreground">{s.title}</h3>
            <motion.div 
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: isExpanded ? 'auto' : 0, opacity: isExpanded ? 1 : 0 }}
              className="overflow-hidden"
              transition={{ duration: 0.3 }}
            >
              <p className="text-sm lg:text-base text-muted-foreground leading-relaxed font-sans pb-4 pt-2">
                {s.desc}
              </p>
            </motion.div>
          </div>
        </div>
        
        <button 
          onClick={(e) => { e.stopPropagation(); setIsExpanded(!isExpanded); }}
          className="mt-4 flex w-fit items-center gap-2 font-bold text-primary group-hover:translate-x-1 transition-transform text-xs lg:text-sm cursor-pointer outline-none hover:text-secondary group-hover:scale-105"
        >
          {isExpanded ? 'Read Less' : 'Read More'} 
          <ArrowUpRight size={16} className={`lg:size-[18px] transition-transform duration-300 ${isExpanded ? 'rotate-90' : ''}`} />
        </button>

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
    <section id="services" className="px-6 lg:px-16 py-20 lg:py-24 bg-transparent relative">
      <div className="flex flex-col items-center mb-12 text-center">
        <motion.h2 
          className="text-3xl sm:text-4xl lg:text-6xl font-heading text-foreground tracking-tight max-w-3xl"
        >
          <AnimatedText 
            text="Engineering Excellence" 
            className="block" 
            from="right" 
          />
          <AnimatedText 
            text="In Every Solution." 
            className="text-primary italic block" 
            from="right"
            delay={0.5}
          />
        </motion.h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
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
           <button 
             onClick={() => window.dispatchEvent(new CustomEvent('open-command-palette'))}
             className="bg-foreground text-white px-8 py-3 rounded-full font-bold shadow-pop hover:scale-110 transition-transform"
           >
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
