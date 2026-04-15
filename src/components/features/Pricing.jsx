import React from 'react';
import { motion } from 'framer-motion';
import { Check, Sparkles, ArrowRight, Star } from 'lucide-react';
import AnimatedText from '../ui/AnimatedText';

const plans = [
  {
    name: 'Startup Core',
    price: '₹2,999',
    desc: 'Optimized for startups and emerging digital products.',
    color: 'border-quaternary',
    accent: 'text-quaternary',
    features: ['Standard Interface', 'Responsive Framework', 'Mobile-First Design', '1 Revision', '5 Day Turnaround'],
  },
  {
    name: 'Enterprise Scale',
    price: '₹5,999',
    featured: true,
    desc: 'Comprehensive solutions engineered for organizational scale.',
    color: 'border-secondary',
    accent: 'text-secondary',
    features: ['Advanced Ecosystem', 'Custom Logic Arch', 'Scaled Micro-interactions', '3 Revisions', '10 Day Delivery'],
  },
  {
    name: 'Vanguard Custom',
    price: '₹8,999',
    desc: 'Full-scale digital ecosystems for industry leaders.',
    color: 'border-primary',
    accent: 'text-primary',
    features: ['Cloud Infrastructure', 'AI-Driven Core', 'Enterprise Integration', 'Dedicated Roadmap', 'Priority Service'],
  },
];

const PricingCard = ({ plan, i }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: i * 0.1 }}
      whileHover={{ rotate: i % 2 === 0 ? -1 : 1, scale: plan.featured ? 1.05 : 1.02 }}
      className={`relative group ${plan.featured ? 'z-20 scale-105' : 'z-10'}`}
    >
      {plan.featured && (
        <div className="absolute -top-8 -right-8 w-24 h-24 bg-tertiary border-2 border-foreground rounded-full flex items-center justify-center shadow-pop rotate-12 z-30 animate-pulse">
          <div className="text-foreground text-center flex flex-col items-center">
            <Star size={20} fill="currentColor" />
            <span className="text-[10px] font-black uppercase leading-none">Best<br/>Pick</span>
          </div>
        </div>
      )}

      <div className={`h-full bg-white border-4 ${plan.color} rounded-3xl p-10 flex flex-col shadow-pop group-hover:shadow-pop-lg transition-all`}>
        <div className="mb-8">
          <h3 className="text-3xl font-heading font-extrabold text-foreground mb-2">{plan.name}</h3>
          <p className="text-muted-foreground font-sans text-sm">{plan.desc}</p>
        </div>

        <div className="flex items-baseline gap-2 mb-10">
          <span className="text-5xl font-heading font-black text-foreground">{plan.price}</span>
          <span className="text-muted-foreground font-bold text-sm uppercase">/ flat</span>
        </div>

        <ul className="space-y-4 mb-10 flex-grow">
          {plan.features.map((feature, idx) => (
            <li key={idx} className="flex items-center gap-4 text-foreground font-medium">
              <div className={`p-1 rounded-full bg-white border-2 ${plan.color}`}>
                <Check size={14} className={plan.accent} strokeWidth={4} />
              </div>
              <span>{feature}</span>
            </li>
          ))}
        </ul>

        <button className={`w-full py-5 rounded-full font-black text-xl border-2 border-foreground shadow-pop hover:shadow-pop-active active:shadow-none transition-all flex items-center justify-center gap-3 ${plan.featured ? 'bg-secondary text-white' : 'bg-white text-foreground hover:bg-muted'}`}>
          Select Plan <ArrowRight size={20} />
        </button>
      </div>
    </motion.div>
  );
};

const Pricing = () => {
  return (
    <section id="pricing" className="px-6 lg:px-24 py-40 bg-transparent relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[500px] bg-secondary/5 rotate-[-5deg] z-0" />
      
      <div className="relative z-10 flex flex-col items-center text-center mb-24">
        <motion.div 
          className="bg-quaternary/20 text-quaternary border-2 border-quaternary/30 px-6 py-2 rounded-full font-black text-xs uppercase tracking-widest mb-6"
          initial={{ scale: 0 }}
          whileInView={{ scale: 1 }}
        >
          // Strategic Growth
        </motion.div>
        <motion.h2 
          className="text-6xl lg:text-8xl font-heading text-foreground tracking-tighter"
        >
          <AnimatedText 
            text="Strategic" 
            className="mr-4" 
            from="bottom" 
          />
          <AnimatedText 
            text="Scaling" 
            className="text-secondary mr-4" 
            from="bottom"
            delay={0.3}
          />
          <AnimatedText 
            text="Models." 
            from="bottom"
            delay={0.6}
          />
        </motion.h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-12 max-w-7xl mx-auto items-center">
        {plans.map((plan, i) => (
          <PricingCard key={i} plan={plan} i={i} />
        ))}
      </div>
    </section>
  );
};

export default Pricing;
