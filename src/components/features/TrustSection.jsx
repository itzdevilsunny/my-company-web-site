import React from 'react';
import { motion } from 'framer-motion';
import { Zap, CircleDollarSign, BarChart3, ShieldCheck } from 'lucide-react';

const trustPoints = [
  {
    icon: <Zap size={32} />,
    title: "Fast Delivery",
    desc: "Optimized workflows ensuring your product hits the market at record speeds.",
    color: "bg-primary"
  },
  {
    icon: <CircleDollarSign size={32} />,
    title: "Affordable Pricing",
    desc: "Premium digital solutions designed to fit your budget ecosystem.",
    color: "bg-secondary"
  },
  {
    icon: <BarChart3 size={32} />,
    title: "Scalable Solutions",
    desc: "Architectures that grow seamlessly with your user base and data needs.",
    color: "bg-tertiary"
  }
];

const TrustSection = () => {
  return (
    <section className="px-6 lg:px-24 py-32 bg-foreground relative overflow-hidden" id="trust">
      {/* Background neon grid */}
      <div className="absolute inset-0 opacity-10 bg-[linear-gradient(to_right,#8B5CF6_1px,transparent_1px),linear-gradient(to_bottom,#8B5CF6_1px,transparent_1px)] bg-[size:100px_100px]" />
      
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-20">
          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="text-primary font-black text-xs uppercase tracking-[0.4em] mb-4"
          >
            // Why Clients Choose Us
          </motion.div>
          <h2 className="text-5xl lg:text-7xl font-heading text-white tracking-tighter leading-none mb-6">
            The Zorvia <span className="text-tertiary">Promise.</span>
          </h2>
          <p className="text-white/60 font-sans max-w-xl mx-auto font-medium">
            We don't just build software; we build foundations for long-term digital success.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {trustPoints.map((point, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              whileHover={{ y: -10 }}
              className="p-10 bg-white/5 border-2 border-white/10 rounded-[2.5rem] backdrop-blur-sm group hover:bg-white/10 transition-all text-center flex flex-col items-center"
            >
              <div className={`w-20 h-20 ${point.color} text-white border-2 border-foreground rounded-3xl flex items-center justify-center mb-8 shadow-[0_10px_0_0_#000] group-hover:shadow-[0_15px_0_0_#000] group-hover:-translate-y-2 transition-all`}>
                {point.icon}
              </div>
              <h3 className="text-2xl font-heading font-black text-white mb-4 uppercase tracking-tight">{point.title}</h3>
              <p className="text-white/60 text-sm font-medium leading-relaxed">
                {point.desc}
              </p>
            </motion.div>
          ))}
        </div>
        
        {/* Playful Floating Badge */}
        <motion.div 
          animate={{ rotate: [0, 5, -5, 0], y: [0, -10, 0] }}
          transition={{ duration: 6, repeat: Infinity }}
          className="hidden lg:block absolute -right-10 top-0 w-32 h-32 bg-secondary border-4 border-foreground rounded-full shadow-pop flex flex-col items-center justify-center text-center p-4"
        >
          <ShieldCheck className="text-white mb-1" />
          <span className="text-[10px] font-black uppercase text-white leading-tight">100% Reliable</span>
        </motion.div>
      </div>
    </section>
  );
};

export default TrustSection;
