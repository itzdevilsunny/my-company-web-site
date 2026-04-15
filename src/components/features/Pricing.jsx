import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Check, Sparkles, ArrowRight, Star, Zap, Rocket, Crown } from 'lucide-react';
import AnimatedText from '../ui/AnimatedText';
import Magnetic from '../ui/Magnetic';

const plans = [
  {
    name: 'Starter Pro',
    price: '₹2,999',
    desc: 'Perfect for startups and emerging digital products looking for high-impact presence.',
    color: 'border-quaternary',
    accent: 'text-quaternary',
    icon: <Zap size={40} />,
    features: ['High-Energy UX', 'Responsive Framework', 'Core SEO Pack', 'Sticker-Style UI', '48hr Support'],
  },
  {
    name: 'Scale Alpha',
    price: '₹5,999',
    featured: true,
    desc: 'Bespoke systems engineered for organizational expansion and high-velocity conversions.',
    color: 'border-secondary',
    accent: 'text-secondary',
    icon: <Rocket size={40} />,
    features: ['Advanced Ecosystem', 'Custom Logic Kernal', 'Magnetic UX Flow', 'Full SEO Arsenal', 'Top-Priority Dev'],
  },
  {
    name: 'Vault Custom',
    price: '₹8,999',
    desc: 'Full-scale digital ecosystems for global industry leaders with complex architectures.',
    color: 'border-primary',
    accent: 'text-primary',
    icon: <Crown size={40} />,
    features: ['Cloud Architecture', 'AI-Driven Core', 'Enterprise Security', 'Custom API Mesh', 'Dedicated Project Lead'],
  },
];

const PricingCard = ({ plan, i }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: i * 0.1, type: "spring", stiffness: 100 }}
      className={`relative group h-full ${plan.featured ? 'z-20 scale-105' : 'z-10'}`}
    >
      {plan.featured && (
        <Magnetic strength={0.4}>
          <div className="absolute -top-10 left-1/2 -translate-x-1/2 px-8 py-3 bg-tertiary border-4 border-foreground rounded-full text-foreground font-heading font-black text-xs uppercase tracking-widest shadow-pop z-30 flex items-center gap-2">
            <Star size={14} fill="currentColor" /> Best Investment
          </div>
        </Magnetic>
      )}

      <div className={`h-full bg-white border-2 ${plan.color} rounded-3xl p-8 lg:p-10 flex flex-col shadow-pop hover:shadow-pop transition-all relative overflow-hidden`}>
        <div className="mb-8 text-center flex flex-col items-center">
          <div className={`w-16 h-16 ${plan.accent} bg-white border-2 border-foreground rounded-2xl flex items-center justify-center mb-6 shadow-pop group-hover:-rotate-12 transition-transform duration-500`}>
             {React.cloneElement(plan.icon, { size: 28 })}
          </div>
          <h3 className="text-2xl lg:text-3xl font-heading font-black text-foreground mb-3 tracking-tighter uppercase italic">{plan.name}</h3>
          <p className="text-muted-foreground font-sans text-sm font-medium leading-snug">{plan.desc}</p>
        </div>

        <div className="flex flex-col items-center mb-10">
          <div className="flex items-baseline gap-1">
            <span className="text-4xl lg:text-5xl font-heading font-black text-foreground tracking-tighter">{plan.price}</span>
            <span className="text-muted-foreground font-black text-xs uppercase opacity-40">/ FLAT</span>
          </div>
          <div className="h-1 w-16 bg-foreground/5 rounded-full mt-3" />
        </div>

        <ul className="space-y-5 mb-12 flex-grow">
          {plan.features.map((feature, idx) => (
            <li key={idx} className="flex items-center gap-4 text-foreground font-bold tracking-tight">
              <div className={`p-1 rounded-full bg-white border-2 ${plan.color} shrink-0`}>
                <Check size={16} className={plan.accent} strokeWidth={4} />
              </div>
              <span>{feature}</span>
            </li>
          ))}
        </ul>

        <Magnetic strength={0.3}>
          <Link to="/start-project" className="w-full">
            <button className={`w-full py-4 rounded-full font-heading font-black text-xl lg:text-2xl uppercase tracking-widest border-2 border-foreground shadow-pop hover:shadow-none hover:translate-x-1 hover:translate-y-1 transition-all flex items-center justify-center gap-3 ${plan.featured ? 'bg-secondary text-white' : 'bg-white text-foreground'}`}>
              Select Plan <ArrowRight size={20} />
            </button>
          </Link>
        </Magnetic>
      </div>
    </motion.div>
  );
};

const Pricing = () => {
  return (
    <section id="pricing" className="px-6 lg:px-16 py-32 lg:py-40 bg-white relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[400px] bg-secondary/5 rotate-[-5deg] z-0 blur-3xl pointer-events-none" />
      
      <div className="relative z-10 flex flex-col items-center text-center mb-24">
        <h2 className="text-4xl lg:text-7xl font-heading text-foreground tracking-tighter leading-[0.8]">
          Transparent <br />
          <span className="text-secondary italic underline decoration-foreground decoration-4 underline-offset-4">Investments.</span>
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-10 lg:gap-12 max-w-7xl mx-auto items-center relative z-10">
        {plans.map((plan, i) => (
          <PricingCard key={i} plan={plan} i={i} />
        ))}
      </div>
    </section>
  );
};

export default Pricing;
