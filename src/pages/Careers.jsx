import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Briefcase, Zap, Globe, ArrowRight, Sparkles, Star, X, CheckCircle2, Loader2 } from 'lucide-react';
import Magnetic from '../components/ui/Magnetic';
import { supabase } from '../lib/supabaseClient';

const Careers = () => {
  const [selectedPosition, setSelectedPosition] = useState(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    portfolio_url: '',
    resume_url: '',
    message: '',
    website_url: '' // Honeypot
  });

  const positions = [
    { title: 'Visual Architect', type: 'Full-time', location: 'SF / Remote', team: 'Design' },
    { title: 'Growth Engineer', type: 'Contract', location: 'BLR / Remote', team: 'Engineering' },
    { title: 'Intelligence Analyst', type: 'Full-time', location: 'London', team: 'Strategy' },
  ];

  const handleApply = (pos) => {
    setSelectedPosition(pos);
    setIsSuccess(false);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (formData.website_url) {
      alert("Bot detection triggered.");
      return;
    }
    setIsSubmitting(true);
    
    try {
      const { website_url, ...submissionData } = formData;
      const { error } = await supabase
        .from('job_applications')
        .insert([{
          ...submissionData,
          role: selectedPosition.title,
          team: selectedPosition.team,
          type: selectedPosition.type,
          location: selectedPosition.location
        }]);

      if (error) throw error;
      
      setIsSuccess(true);
      setFormData({ name: '', email: '', phone: '', portfolio_url: '', resume_url: '', message: '', website_url: '' });
      setTimeout(() => setSelectedPosition(null), 3000);
    } catch (err) {
      console.error('Application Error:', err);
      alert('Application failed to transmit. Please check your connection.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-white pt-24 lg:pt-32 pb-16 px-6 lg:px-12">
      <div className="max-w-4xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-20"
        >
          <span className="inline-block px-4 py-1 bg-black text-white font-black uppercase mb-6 shadow-pop-sm">Hiring // v4.2</span>
          <h1 className="text-4xl sm:text-6xl lg:text-8xl font-heading font-black tracking-tighter uppercase italic leading-none mb-6 lg:mb-8">
            Join the <br/> <span className="text-primary">Collective.</span>
          </h1>
          <p className="text-xl lg:text-2xl font-bold text-muted-foreground leading-tight max-w-2xl">
            We are looking for wildly optimistic individuals who want to architect the future of digital infrastructure.
          </p>
        </motion.div>

        <div className="space-y-6">
          {positions.map((pos, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: i * 0.1 }}
              className="p-6 lg:p-8 border-2 border-foreground rounded-2xl lg:rounded-3xl flex flex-col md:flex-row justify-between items-start md:items-center gap-6 group hover:bg-slate-50 transition-all cursor-pointer shadow-pop-sm hover:shadow-pop"
            >
              <div>
                <div className="flex items-center gap-3 mb-2">
                  <span className="text-[10px] font-black uppercase tracking-widest text-primary">{pos.team}</span>
                  <span className="w-1 h-1 rounded-full bg-slate-300" />
                  <span className="text-[10px] font-black uppercase tracking-widest text-muted-foreground">{pos.type}</span>
                </div>
                <h3 className="text-2xl lg:text-3xl font-heading font-black uppercase italic">{pos.title}</h3>
                <p className="text-sm font-bold opacity-40 uppercase tracking-widest mt-1">{pos.location}</p>
              </div>
              
              <Magnetic strength={0.2}>
                <button 
                  onClick={() => handleApply(pos)}
                  className="px-8 py-4 bg-black text-white rounded-full font-black uppercase text-xs tracking-widest flex items-center gap-3 group-hover:bg-primary transition-all"
                >
                  Apply Now
                  <ArrowRight size={16} />
                  <ArrowRight size={14} />
                </button>
              </Magnetic>
            </motion.div>
          ))}
        </div>

        <div className="mt-12 lg:mt-16 p-6 lg:p-10 bg-secondary/10 border border-foreground rounded-2xl lg:rounded-[2rem] text-center relative overflow-hidden">
           <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(#ec4899_1px,transparent_1px)] bg-[size:20px_20px] opacity-10" />
           <div className="relative z-10">
              <h4 className="text-xl lg:text-3xl font-heading font-black mb-3 uppercase italic">Don't see your role?</h4>
              <p className="text-base font-bold text-muted-foreground mb-8 max-w-xl mx-auto">
                We're always looking for exceptional talent. Send your portfolio to our intelligence unit.
              </p>
              <button 
                onClick={() => handleApply({ title: 'General Inquiry', team: 'Talent', type: 'Open', location: 'Remote' })}
                className="px-8 lg:px-12 py-4 lg:py-6 bg-white border-2 border-foreground rounded-full font-black uppercase tracking-widest shadow-pop hover:shadow-none hover:translate-x-1 hover:translate-y-1 transition-all"
              >
                General Inquiry
              </button>
           </div>
        </div>
      </div>

      <AnimatePresence>
        {selectedPosition && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center p-6 bg-black/60 backdrop-blur-md"
          >
            <motion.div 
              initial={{ scale: 0.9, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.9, y: 20 }}
              className="bg-white border-2 border-foreground rounded-3xl lg:rounded-[3rem] w-full max-w-2xl overflow-hidden shadow-pop-lg flex flex-col max-h-[90vh]"
            >
              <div className="p-6 border-b-2 border-foreground flex justify-between items-center bg-primary text-white sticky top-0 z-20">
                <div>
                  <h2 className="text-xl lg:text-3xl font-heading font-black uppercase italic leading-none">Apply // {selectedPosition.title}</h2>
                  <p className="text-[8px] lg:text-[10px] font-black uppercase tracking-[0.3em] mt-2 opacity-80">{selectedPosition.team} // {selectedPosition.location}</p>
                </div>
                <button onClick={() => setSelectedPosition(null)} className="p-2 hover:bg-black/10 rounded-full transition-all">
                  <X size={24} className="lg:size-[32px]" />
                </button>
              </div>

              <div className="flex-grow overflow-y-auto p-8 lg:p-12">
                {isSuccess ? (
                  <motion.div 
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="h-full flex flex-col items-center justify-center text-center py-20"
                  >
                    <div className="w-24 h-24 bg-primary rounded-3xl flex items-center justify-center text-white shadow-pop mb-8">
                       <CheckCircle2 size={48} />
                    </div>
                    <h3 className="text-4xl font-heading font-black uppercase italic mb-4">Transmission Successful.</h3>
                    <p className="text-lg font-bold text-muted-foreground">Our intelligence unit will review your coordinates shortly.</p>
                  </motion.div>
                ) : (
                    <div className="space-y-6 lg:space-y-8">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
                        {/* Honeypot */}
                        <input 
                          type="text" 
                          name="website_url" 
                          value={formData.website_url} 
                          onChange={(e) => setFormData({...formData, website_url: e.target.value})}
                          className="hidden" 
                          autoComplete="off"
                        />
                        <div className="space-y-2">
                          <label className="text-[10px] font-black uppercase tracking-widest opacity-40">Full Name</label>
                          <input 
                            required
                            type="text" 
                            value={formData.name}
                            onChange={(e) => setFormData({...formData, name: e.target.value})}
                            className="w-full p-4 border-2 border-foreground rounded-2xl font-bold focus:shadow-pop-sm transition-all outline-none"
                            placeholder="NEO"
                          />
                        </div>
                        <div className="space-y-2">
                          <label className="text-[10px] font-black uppercase tracking-widest opacity-40">Email Address</label>
                          <input 
                            required
                            type="email" 
                            value={formData.email}
                            onChange={(e) => setFormData({...formData, email: e.target.value})}
                            className="w-full p-4 border-2 border-foreground rounded-2xl font-bold focus:shadow-pop-sm transition-all outline-none"
                            placeholder="NEO@ZORVIA.TECH"
                          />
                        </div>
                        <div className="space-y-2">
                          <label className="text-[10px] font-black uppercase tracking-widest opacity-40">Phone Number</label>
                          <input 
                            required
                            type="tel" 
                            value={formData.phone}
                            onChange={(e) => setFormData({...formData, phone: e.target.value})}
                            className="w-full p-4 border-2 border-foreground rounded-2xl font-bold focus:shadow-pop-sm transition-all outline-none"
                            placeholder="+1 555 000 000"
                          />
                        </div>
                        <div className="space-y-2">
                          <label className="text-[10px] font-black uppercase tracking-widest opacity-40">Portfolio URL</label>
                          <input 
                            type="url" 
                            value={formData.portfolio_url}
                            onChange={(e) => setFormData({...formData, portfolio_url: e.target.value})}
                            className="w-full p-4 border-2 border-foreground rounded-2xl font-bold focus:shadow-pop-sm transition-all outline-none"
                            placeholder="HTTPS://ZORVIA.TECH/PORTFOLIO"
                          />
                        </div>
                      </div>
                      <div className="space-y-2">
                        <label className="text-[10px] font-black uppercase tracking-widest opacity-40">Resume / LinkedIn URL</label>
                        <input 
                          required
                          type="url" 
                          value={formData.resume_url}
                          onChange={(e) => setFormData({...formData, resume_url: e.target.value})}
                          className="w-full p-4 border-2 border-foreground rounded-2xl font-bold focus:shadow-pop-sm transition-all outline-none"
                          placeholder="HTTPS://LINKEDIN.COM/IN/NEO"
                        />
                      </div>
                      <div className="space-y-2">
                        <label className="text-[10px] font-black uppercase tracking-widest opacity-40">Cover Note</label>
                        <textarea 
                          rows="4"
                          value={formData.message}
                          onChange={(e) => setFormData({...formData, message: e.target.value})}
                          className="w-full p-4 border-2 border-foreground rounded-2xl font-bold focus:shadow-pop-sm transition-all outline-none resize-none"
                          placeholder="WHY ARE YOU THE ARCHITECT WE NEED?"
                        />
                      </div>
                      
                      <Magnetic strength={0.2}>
                        <button 
                          type="submit"
                          disabled={isSubmitting}
                          className="w-full py-5 lg:py-6 bg-black text-white rounded-2xl font-black uppercase tracking-[0.2em] flex items-center justify-center gap-4 hover:bg-primary transition-all disabled:opacity-50 text-sm lg:text-base"
                        >
                          {isSubmitting ? (
                            <>
                              <Loader2 size={20} className="animate-spin" />
                              TRANSMITTING...
                            </>
                          ) : (
                            <>
                              SUBMIT APPLICATION
                              <ArrowRight size={20} />
                            </>
                          )}
                        </button>
                      </Magnetic>
                    </div>
                )}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Careers;
