import React from 'react';
import { motion } from 'framer-motion';
import { Check, Zap } from 'lucide-react';
import './Pricing.css';

const plans = [
  {
    name: 'Basic',
    price: '₹2,999',
    badge: null,
    color: '#00f2ff',
    features: ['Landing Page', 'Simple UI', 'Mobile Responsive', '1 Revision', 'Delivery in 5 Days'],
  },
  {
    name: 'Standard',
    price: '₹5,999',
    badge: 'Most Popular',
    color: '#ff00c8',
    features: ['Hackathon Projects', 'App Development', 'Custom UI/UX', '3 Revisions', 'Delivery in 10 Days'],
  },
  {
    name: 'Premium',
    price: '₹8,999',
    badge: null,
    color: '#7000ff',
    features: ['Dashboard + Full System', 'AI Integration', 'Backend + Database', 'Unlimited Revisions', 'Priority Support'],
  },
];

const Pricing = () => {
  return (
    <section id="pricing" className="pricing">
      <motion.h2
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        Affordable Plans for Everyone
      </motion.h2>

      <div className="pricing-grid">
        {plans.map((plan, i) => (
          <motion.div
            key={i}
            className={`pricing-card glass-card ${plan.badge ? 'featured' : ''}`}
            style={{ '--plan-color': plan.color }}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.15 }}
            whileHover={{ y: -10 }}
          >
            {plan.badge && (
              <div className="badge">
                <Zap size={14} /> {plan.badge}
              </div>
            )}
            <h3 style={{ color: plan.color }}>{plan.name}</h3>
            <div className="price">{plan.price}</div>
            <ul className="feature-list">
              {plan.features.map((f, j) => (
                <li key={j}>
                  <Check size={16} color={plan.color} />
                  {f}
                </li>
              ))}
            </ul>
            <button className="plan-btn" style={{ background: `linear-gradient(45deg, ${plan.color}, #050505)`, borderColor: plan.color }}>
              Get Started
            </button>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Pricing;
