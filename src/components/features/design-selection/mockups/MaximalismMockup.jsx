import React from 'react';
import { motion } from 'framer-motion';
import { Sparkles, Zap, Star, Heart, Cloud, Moon, Sun, Rocket } from 'lucide-react';

const MaximalismMockup = ({ theme }) => {
  const accents = [
    'var(--color-max-magenta)',
    'var(--color-max-cyan)',
    'var(--color-max-yellow)',
    'var(--color-max-orange)',
    'var(--color-max-purple)'
  ];

  const floatingIcons = [
    { Icon: Sparkles, color: accents[0], size: 48, top: '10%', left: '5%', delay: 0 },
    { Icon: Zap, color: accents[1], size: 64, top: '15%', left: '85%', delay: 1 },
    { Icon: Star, color: accents[2], size: 32, top: '70%', left: '10%', delay: 2 },
    { Icon: Heart, color: accents[3], size: 40, top: '80%', left: '80%', delay: 1.5 },
    { Icon: Cloud, color: accents[4], size: 56, top: '40%', left: '90%', delay: 0.5 },
    { Icon: Rocket, color: accents[0], size: 44, top: '60%', left: '5%', delay: 2.5 },
  ];

  return (
    <div className="h-full w-full relative bg-max-bg font-dm-sans overflow-hidden max-selection">
      {/* Texture Layering System */}
      <div className="absolute inset-0 pattern-max-dots opacity-20 pointer-events-none" />
      <div className="absolute inset-0 pattern-max-stripes opacity-10 pointer-events-none" />
      <div className="absolute inset-0 pattern-max-mesh opacity-30 pointer-events-none" />

      {/* Massive Background Typography */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none overflow-hidden select-none">
        <motion.h1 
          initial={{ opacity: 0, scale: 0.8, rotate: -10 }}
          animate={{ opacity: 0.15, scale: 1, rotate: -5 }}
          className="text-[25rem] font-bungee leading-none text-max-purple tracking-tighter"
        >
          WOW
        </motion.h1>
      </div>

      {/* Floating Decorative Shapes */}
      {floatingIcons.map(({ Icon, color, size, top, left, delay }, i) => (
        <motion.div
          key={i}
          className="absolute"
          style={{ top, left, zIndex: 30 }}
          animate={{
            y: [0, -20, 0],
            rotate: [0, 10, -10, 0],
            scale: [1, 1.1, 0.9, 1]
          }}
          transition={{
            duration: 5 + Math.random() * 2,
            repeat: Infinity,
            delay,
            ease: "easeInOut"
          }}
        >
          <Icon size={size} style={{ color, filter: `drop-shadow(0 0 10px ${color}66)` }} />
        </motion.div>
      ))}

      {/* Hero Content Section */}
      <div className="relative z-20 flex flex-col items-center justify-center h-full px-12 text-center gap-12">
        <div className="space-y-6">
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            className="inline-block px-8 py-3 bg-max-purple rounded-full border-4 border-max-white shadow-max-hard-magenta rotate-2"
          >
             <span className="text-white font-bangers text-3xl tracking-widest uppercase">The Energy Source</span>
          </motion.div>
          
          <motion.h2 
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.1 }}
            className="text-8xl lg:text-9xl font-bungee text-white text-shadow-max-mega leading-none tracking-tighter"
          >
            MORE IS <br />
            <span className="text-gradient-max">MORE</span>
          </motion.h2>
          
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-2xl text-white font-bold max-w-2xl mx-auto leading-relaxed"
          >
            A high-energy digital ecosystem where visual abundance meets unapologetic excess. Every pixel is a celebration of dopamine.
          </motion.p>
        </div>

        {/* Call to Action Row */}
        <div className="flex flex-wrap justify-center gap-8">
          <motion.button
            whileHover={{ scale: 1.1, rotate: -3 }}
            whileTap={{ scale: 0.95 }}
            className="h-20 px-12 bg-gradient-to-r from-max-magenta via-max-purple to-max-cyan rounded-full border-4 border-max-yellow shadow-max-hard-double animate-pulse-glow"
          >
            <span className="text-white font-bungee text-2xl uppercase tracking-widest text-shadow-max-single">Launch Project</span>
          </motion.button>
          
          <motion.button
            whileHover={{ scale: 1.1, rotate: 3 }}
            whileTap={{ scale: 0.95 }}
            className="h-20 px-12 bg-max-bg border-4 border-dashed border-max-cyan rounded-full text-white font-bungee text-2xl uppercase tracking-widest hover:bg-max-cyan transition-colors shadow-max-hard-magenta"
          >
            View Demo
          </motion.button>
        </div>

        {/* Feature Grid with Modulo Accent Rotation */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full max-w-5xl mt-12 pb-20">
          {[
            { title: 'HYPER-COLOR', icon: Sun, desc: 'Clashing accents that demand attention.' },
            { title: 'MULTILAYER', icon: Cloud, desc: 'Deep depth through stacked shadows.' },
            { title: 'PATTERN-JOY', icon: Moon, desc: 'Dots over stripes over checker.' }
          ].map((f, i) => (
            <motion.div
              key={i}
              whileHover={{ scale: 1.05, rotate: i % 2 === 0 ? 2 : -2 }}
              className={`p-8 bg-max-muted/80 backdrop-blur-md border-4 rounded-3xl relative overflow-hidden group`}
              style={{ 
                borderColor: accents[i % accents.length],
                boxShadow: `8px 8px 0px ${accents[(i + 1) % accents.length]}, 16px 16px 0px ${accents[(i + 2) % accents.length]}`
              }}
            >
              {/* Card Pattern Overlay */}
              <div className="absolute inset-0 pattern-max-checker opacity-10 pointer-events-none group-hover:opacity-20 transition-opacity" />
              
              <div className="relative z-10 space-y-4">
                <div 
                  className="w-16 h-16 rounded-2xl flex items-center justify-center border-4"
                  style={{ backgroundColor: `${accents[i % accents.length]}22`, borderColor: accents[i % accents.length] }}
                >
                  <f.icon size={32} style={{ color: accents[i % accents.length] }} />
                </div>
                <h4 className="text-3xl font-bungee text-white text-shadow-max-single uppercase">{f.title}</h4>
                <p className="text-white/80 font-bold leading-relaxed">{f.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Extra floating emoji for good measure */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex gap-12 pointer-events-none">
        {['🚀', '✨', '🔥', '🎨'].map((e, i) => (
          <motion.span 
            key={i}
            className="text-7xl"
            animate={{ 
              y: [0, -10, 0],
              scale: [1, 1.2, 1]
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              delay: i * 0.5
            }}
          >
            {e}
          </motion.span>
        ))}
      </div>
    </div>
  );
};

export default MaximalismMockup;
