import React from 'react';
import { motion } from 'framer-motion';

const testimonials = [
  {
    quote: "Engineering at Zorvia isn't just about code; it's about architecting digital legacies that stand the test of time and scale.",
    name: "Sunny Prasad",
    role: "Founder & CTO",
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Sunny&top=shortFlat&skinColor=ffdbb4"
  },
  {
    quote: "Our mission is to bridge the gap between complex business logic and intuitive digital experiences. Innovation is our standard.",
    name: "Yash Raj Kushwaha",
    role: "CEO",
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Yash&top=shortFlat&skinColor=ffdbb4"
  },
  {
    quote: "Sustainability in growth requires a robust financial ecosystem. We build products that are as fiscally sound as they are technical.",
    name: "Sumit Kumar",
    role: "CFO",
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Sumit&top=shortFlat&skinColor=ffdbb4"
  },
  {
    quote: "Animations and interfaces should feel alive. We push the boundaries of React to ensure every interaction feels premium.",
    name: "Ritika",
    role: "Frontend Developer",
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Ritika&top=straight01&skinColor=ffdbb4"
  },
  {
    quote: "Security and efficiency are the bedrocks of our backend systems. Scalability is never an after-thought; it's the foundation.",
    name: "Nidhi",
    role: "Backend Developer",
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Nidhi&top=straight01&skinColor=ffdbb4"
  },
  {
    quote: "Data is the lifeblood of modern enterprise. Our database architectures are designed for high-performance and integrity.",
    name: "Sudeep Shah",
    role: "Database Engineer",
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Sudeep&top=shortFlat&skinColor=ffdbb4"
  }
];

const Testimonials = () => {
  return (
    <section className="px-6 lg:px-12 py-20 lg:py-24 bg-tertiary relative overflow-hidden" id="testimonials">
      {/* Decorative shapes */}
      <div className="absolute top-0 left-0 w-64 h-64 bg-white/10 rounded-full blur-3xl -ml-32 -mt-32" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-primary/20 rounded-full blur-[100px] -mr-48 -mb-48" />
      
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="text-foreground font-black text-xs uppercase tracking-[0.4em] mb-4"
          >
            // Internal Voices
          </motion.div>
          <h2 className="text-3xl lg:text-6xl font-heading text-foreground tracking-tighter leading-none mb-4">
            Insights from <br />
            <span className="text-white">Our Architects.</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-16">
          {testimonials.map((t, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              className="relative flex flex-col"
            >
              {/* Speech Bubble */}
              <div className="bg-white border-2 border-foreground rounded-3xl p-6 lg:p-8 shadow-pop relative mb-8 min-h-[160px] flex items-center">
                <p className="text-base lg:text-lg font-heading font-black leading-tight text-foreground italic">
                  "{t.quote}"
                </p>
                
                {/* Bubble Tip */}
                <div className="absolute -bottom-4 left-12 w-8 h-8 bg-white border-r-2 border-b-2 border-foreground transform rotate-45" />
              </div>

              {/* User Identity */}
              <div className="flex items-center gap-4 pl-4">
                <div className="w-12 h-12 rounded-full border-2 border-foreground overflow-hidden shadow-pop-sm flex-shrink-0 bg-muted">
                  <img src={t.avatar} alt={t.name} className="w-full h-full object-cover" />
                </div>
                <div>
                  <h3 className="text-lg font-heading font-black text-foreground leading-tight">{t.name}</h3>
                  <p className="text-[10px] font-bold text-foreground/60 uppercase tracking-widest">{t.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
