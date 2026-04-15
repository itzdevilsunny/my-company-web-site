import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { HelpCircle, MessageSquare, Send, CheckCircle2, ArrowLeft, LifeBuoy, Zap, AlertCircle } from 'lucide-react';
import { Link } from 'react-router-dom';
import { supabase } from '../lib/supabaseClient';

const HelpDesk = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [error, setError] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError(null);

    try {
      const { error } = await supabase
        .from('support_tickets')
        .insert([{
          name: formData.name,
          email: formData.email,
          subject: formData.subject,
          message: formData.message,
          status: 'open'
        }]);

      if (error) throw error;
      
      setIsSuccess(true);
      setFormData({ name: '', email: '', subject: '', message: '' });
    } catch (err) {
      setError("Failed to dispatch support request. Please verify connection.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const faqs = [
    { q: 'Project Timelines?', a: 'Standard development cycles range from 4-8 weeks depending on architectural complexity.' },
    { q: 'AI Integration?', a: 'We specialize in custom Mistral/OpenAI implementations tailored to specific business logic.' },
    { q: 'Payment Terms?', a: '50% kick-off deposit, 50% upon final acceptance testing and delivery.' }
  ];

  return (
    <div className="min-h-screen bg-white pt-40 pb-20 px-6 lg:px-24 font-sans">
      <div className="max-w-5xl mx-auto">
        <Link to="/" className="inline-flex items-center gap-2 text-[10px] font-black uppercase tracking-widest text-muted-foreground hover:text-primary mb-12 transition-colors">
          <ArrowLeft size={14} /> Back to Base
        </Link>
        
        <div className="flex flex-col lg:flex-row gap-20">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="flex-1 space-y-12"
          >
            <div>
              <h1 className="text-6xl font-heading font-black tracking-tighter uppercase italic leading-[0.9] mb-6">
                Help <span className="text-primary">Desk.</span>
              </h1>
              <p className="text-lg font-bold text-muted-foreground uppercase tracking-widest leading-relaxed">
                Connect with the engineering team for technical support or strategic inquiries.
              </p>
            </div>

            <div className="space-y-6">
              <h3 className="text-xl font-black uppercase tracking-widest flex items-center gap-3">
                <LifeBuoy size={20} className="text-secondary" /> Knowledge Base
              </h3>
              <div className="grid grid-cols-1 gap-4">
                {faqs.map((faq, idx) => (
                  <motion.div 
                    key={idx}
                    whileHover={{ x: 10 }}
                    className="p-6 bg-slate-50 border-2 border-foreground rounded-2xl shadow-pop-sm group cursor-pointer"
                  >
                    <div className="flex items-center gap-3 mb-2">
                       <Zap size={14} className="text-primary" />
                       <span className="text-xs font-black uppercase tracking-widest">{faq.q}</span>
                    </div>
                    <p className="text-[11px] font-bold text-muted-foreground uppercase tracking-wider">{faq.a}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
            className="flex-1"
          >
            <div className="bg-white border-4 border-foreground rounded-[2.5rem] p-8 shadow-pop relative">
              <div className="absolute top-8 right-8 text-primary opacity-20">
                <MessageSquare size={120} />
              </div>

              <h2 className="text-2xl font-heading font-black mb-10 flex items-center gap-4 relative z-10">
                <span className="p-3 bg-foreground text-white rounded-2xl">
                   <Send size={24} />
                </span>
                Dispatch Ticket
              </h2>

              <AnimatePresence mode="wait">
                {isSuccess ? (
                  <motion.div 
                    key="success"
                    initial={{ scale: 0.9, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    className="py-12 flex flex-col items-center text-center gap-6"
                  >
                     <div className="w-20 h-20 bg-green-100 text-green-600 rounded-full flex items-center justify-center shadow-lg">
                        <CheckCircle2 size={40} strokeWidth={3} />
                     </div>
                     <div className="space-y-2">
                        <h3 className="text-xl font-black uppercase tracking-widest">Inquiry Received.</h3>
                        <p className="text-xs font-bold text-muted-foreground uppercase tracking-widest">Expected response: &lt; 24 Hours</p>
                     </div>
                     <button 
                       onClick={() => setIsSuccess(false)}
                       className="px-8 py-3 bg-foreground text-white border-2 border-foreground rounded-full text-xs font-black uppercase tracking-widest shadow-pop"
                     >
                        New Ticket
                     </button>
                  </motion.div>
                ) : (
                  <motion.form 
                    key="form"
                    onSubmit={handleSubmit} 
                    className="space-y-6 relative z-10"
                  >
                    <div className="grid grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <label className="text-[10px] font-black uppercase tracking-widest text-muted-foreground ml-1">Full Name</label>
                        <input 
                          required
                          value={formData.name}
                          onChange={(e) => setFormData({...formData, name: e.target.value})}
                          className="w-full bg-slate-50 border-2 border-slate-200 rounded-xl px-4 py-3 font-bold text-xs focus:border-primary outline-none transition-all focus:bg-white"
                          placeholder="Architect Name"
                        />
                      </div>
                      <div className="space-y-2">
                        <label className="text-[10px] font-black uppercase tracking-widest text-muted-foreground ml-1">Email Address</label>
                        <input 
                          required
                          type="email"
                          value={formData.email}
                          onChange={(e) => setFormData({...formData, email: e.target.value})}
                          className="w-full bg-slate-50 border-2 border-slate-200 rounded-xl px-4 py-3 font-bold text-xs focus:border-primary outline-none transition-all focus:bg-white"
                          placeholder="client@hq.com"
                        />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <label className="text-[10px] font-black uppercase tracking-widest text-muted-foreground ml-1">Subject</label>
                      <input 
                        required
                        value={formData.subject}
                        onChange={(e) => setFormData({...formData, subject: e.target.value})}
                        className="w-full bg-slate-50 border-2 border-slate-200 rounded-xl px-4 py-3 font-bold text-xs focus:border-primary outline-none transition-all focus:bg-white"
                        placeholder="Project Update / Bug Report / Inquiry"
                      />
                    </div>

                    <div className="space-y-2">
                      <label className="text-[10px] font-black uppercase tracking-widest text-muted-foreground ml-1">Details</label>
                      <textarea 
                        required
                        value={formData.message}
                        onChange={(e) => setFormData({...formData, message: e.target.value})}
                        className="w-full bg-slate-50 border-2 border-slate-200 rounded-xl px-4 py-6 font-bold text-xs focus:border-primary outline-none transition-all min-h-[160px] focus:bg-white"
                        placeholder="Describe your technical or strategic requirement..."
                      />
                    </div>

                    {error && (
                      <div className="p-4 bg-red-50 text-red-600 border border-red-200 rounded-xl text-[10px] font-black uppercase flex items-center gap-3">
                         <AlertCircle size={14} /> {error}
                      </div>
                    )}

                    <button 
                      disabled={isSubmitting}
                      className="w-full py-5 bg-secondary text-white border-2 border-foreground rounded-[2rem] font-black text-sm uppercase tracking-[0.2em] shadow-pop hover:shadow-none hover:translate-x-1 hover:translate-y-1 transition-all disabled:opacity-50"
                    >
                      {isSubmitting ? 'DISPATCHING...' : 'TRANSMIT TICKET'}
                    </button>
                  </motion.form>
                )}
              </AnimatePresence>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default HelpDesk;
