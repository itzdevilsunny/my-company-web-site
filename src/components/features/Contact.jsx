import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Send, MapPin, Phone, Mail, Sparkles, MessageSquare, CheckCircle2, AlertCircle } from 'lucide-react';
import { InstagramIcon, GithubIcon, LinkedinIcon, TwitterIcon } from '../ui/Icons';
import { supabase } from '../../lib/supabaseClient';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    project_type: 'Web Platform',
    project_description: ''
  });
  const [status, setStatus] = useState('idle'); // idle, submitting, success, error

  const handleSubmit = async (e) => {
    e.preventDefault();
    if(!formData.name || !formData.email || !formData.project_description) {
      setStatus('error');
      return;
    }

    setStatus('submitting');
    try {
      const { error } = await supabase
        .from('project_inquiries')
        .insert([{
          name: formData.name,
          email: formData.email,
          project_type: formData.project_type,
          project_description: formData.project_description,
          contact_method: 'Global Contact Form',
          status: 'new'
        }]);
      
      if (error) throw error;
      
      setStatus('success');
      setFormData({ name: '', email: '', project_type: 'Web Platform', project_description: '' });
      setTimeout(() => setStatus('idle'), 5000);
    } catch (err) {
      console.error(err);
      setStatus('error');
    }
  };

  return (
    <section className="px-6 lg:px-24 py-32 bg-background relative overflow-hidden" id="contact">
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-primary via-secondary to-tertiary" />
      
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-start">
          <div>
            <motion.div 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              className="text-primary font-black text-xs uppercase tracking-[0.4em] mb-4"
            >
              // Reach Out
            </motion.div>
            <h2 className="text-5xl lg:text-7xl font-heading text-foreground tracking-tighter leading-none mb-10">
              Start your <br />
              <span className="text-secondary italic">Revolution.</span>
            </h2>
            <p className="text-xl text-muted-foreground font-sans font-medium mb-12 max-w-md leading-relaxed">
              Have a visionary project in mind? We're ready to engineer it into reality.
            </p>

            <div className="space-y-8 mb-16">
              <div className="flex items-center gap-6 group">
                <div className="w-14 h-14 bg-white border-4 border-foreground rounded-2xl flex items-center justify-center shadow-pop group-hover:bg-primary group-hover:text-white transition-all">
                  <Mail size={24} />
                </div>
                <div>
                  <p className="text-[10px] font-black uppercase tracking-widest text-muted-foreground mb-1">Email Support</p>
                  <p className="text-lg font-heading font-black">hello@zorvia.digital</p>
                </div>
              </div>
              
              <div className="flex items-center gap-6 group">
                <div className="w-14 h-14 bg-white border-4 border-foreground rounded-2xl flex items-center justify-center shadow-pop group-hover:bg-secondary group-hover:text-white transition-all">
                  <Phone size={24} />
                </div>
                <div>
                  <p className="text-[10px] font-black uppercase tracking-widest text-muted-foreground mb-1">Quick Contact</p>
                  <p className="text-lg font-heading font-black">+91 (800) ZORVIA-DX</p>
                </div>
              </div>

              <div className="flex items-center gap-6 group">
                <div className="w-14 h-14 bg-white border-4 border-foreground rounded-2xl flex items-center justify-center shadow-pop group-hover:bg-tertiary group-hover:text-white transition-all">
                  <MapPin size={24} />
                </div>
                <div>
                  <p className="text-[10px] font-black uppercase tracking-widest text-muted-foreground mb-1">Headquarters</p>
                  <p className="text-lg font-heading font-black">Bhubaneswar, Odisha, India</p>
                </div>
              </div>
            </div>

            <div className="flex gap-4">
              {[
                { icon: <TwitterIcon />, color: 'hover:bg-[#1DA1F2]' },
                { icon: <InstagramIcon />, color: 'hover:bg-[#E4405F]' },
                { icon: <LinkedinIcon />, color: 'hover:bg-[#0077b5]' },
                { icon: <GithubIcon />, color: 'hover:bg-[#333]' }
              ].map((social, i) => (
                <motion.a 
                  key={i}
                  whileHover={{ y: -5, rotate: 10 }}
                  href="#"
                  className={`w-12 h-12 bg-white border-2 border-foreground rounded-xl flex items-center justify-center shadow-pop-sm transition-all ${social.color} hover:text-white`}
                >
                  {social.icon}
                </motion.a>
              ))}
            </div>
          </div>

          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            className="p-10 bg-white border-4 border-foreground rounded-[3rem] shadow-pop-lg relative overflow-hidden"
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-[10px] font-black uppercase tracking-widest mb-2 ml-4">Your Name</label>
                  <input 
                    type="text" 
                    value={formData.name}
                    onChange={(e) => setFormData({...formData, name: e.target.value})}
                    placeholder="John Doe" 
                    required
                    className="w-full bg-muted/30 border-2 border-foreground rounded-2xl px-6 py-4 font-bold focus:outline-none focus:bg-white focus:shadow-pop-sm transition-all"
                  />
                </div>
                <div>
                  <label className="block text-[10px] font-black uppercase tracking-widest mb-2 ml-4">Email Address</label>
                  <input 
                    type="email" 
                    value={formData.email}
                    onChange={(e) => setFormData({...formData, email: e.target.value})}
                    placeholder="john@example.com" 
                    required
                    className="w-full bg-muted/30 border-2 border-foreground rounded-2xl px-6 py-4 font-bold focus:outline-none focus:bg-white focus:shadow-pop-sm transition-all"
                  />
                </div>
              </div>

              <div>
                <label className="block text-[10px] font-black uppercase tracking-widest mb-2 ml-4">Project Type</label>
                <select 
                  value={formData.project_type}
                  onChange={(e) => setFormData({...formData, project_type: e.target.value})}
                  className="w-full bg-muted/30 border-2 border-foreground rounded-2xl px-6 py-4 font-bold focus:outline-none focus:bg-white focus:shadow-pop-sm transition-all appearance-none cursor-pointer"
                >
                  <option>Web Platform</option>
                  <option>Mobile App</option>
                  <option>AI Integration</option>
                  <option>Full SaaS Ecosystem</option>
                </select>
              </div>

              <div>
                <label className="block text-[10px] font-black uppercase tracking-widest mb-2 ml-4">Brief Description</label>
                <textarea 
                  rows="4" 
                  value={formData.project_description}
                  onChange={(e) => setFormData({...formData, project_description: e.target.value})}
                  placeholder="Tell us about the problem we're solving..." 
                  required
                  className="w-full bg-muted/30 border-2 border-foreground rounded-2xl px-6 py-4 font-bold focus:outline-none focus:bg-white focus:shadow-pop-sm transition-all"
                ></textarea>
              </div>

              {status === 'success' ? (
                 <div className="w-full py-5 bg-quaternary text-foreground border-2 border-foreground rounded-full font-heading font-black uppercase flex items-center justify-center gap-3">
                    <CheckCircle2 /> Signal Received.
                 </div>
              ) : status === 'error' ? (
                 <div className="w-full py-5 bg-secondary text-white rounded-full font-heading font-black uppercase flex items-center justify-center gap-3">
                    <AlertCircle /> Error. Try Again.
                 </div>
              ) : (
                <button 
                  disabled={status === 'submitting'}
                  className="w-full py-5 bg-foreground text-white rounded-full font-heading font-black uppercase tracking-[0.2em] shadow-pop hover:bg-primary transition-all flex items-center justify-center gap-3 active:shadow-none translate-y-0 active:translate-y-1 disabled:opacity-50"
                >
                  {status === 'submitting' ? 'Authenticating...' : 'Send Transmission'}
                  <Send size={18} />
                </button>
              )}
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
