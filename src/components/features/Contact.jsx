import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Send, MapPin, Phone, Mail, Sparkles, MessageSquare, CheckCircle2, AlertCircle } from 'lucide-react';
import { InstagramIcon, GithubIcon, TwitterIcon } from '../ui/Icons';
import { supabase } from '../../lib/supabaseClient';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '+91 ',
    whatsapp: '+91 ',
    project_type: 'Web Platform',
    project_description: '',
    website_url: '', // Honeypot
    agreedToTerms: false
  });
  const [status, setStatus] = useState('idle'); // idle, submitting, success, error

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (formData.website_url) {
      setStatus('error');
      return;
    }
    if(!formData.name || !formData.email || !formData.project_description) {
      setStatus('error');
      return;
    }
    if (!formData.agreedToTerms) {
      setStatus('error');
      return;
    }

    setStatus('submitting');
    try {
      const { website_url, ...submissionData } = formData;
      const { error } = await supabase
        .from('project_inquiries')
        .insert([{
          ...submissionData,
          contact_method: 'Global Contact Form',
          status: 'new'
        }]);
      
      if (error) throw error;
      
      setStatus('success');
      setFormData({ name: '', email: '', project_type: 'Web Platform', project_description: '', website_url: '' });
      setTimeout(() => setStatus('idle'), 5000);
    } catch (err) {
      console.error(err);
      setStatus('error');
    }
  };

  return (
    <section className="px-6 lg:px-12 py-12 lg:py-16 bg-background relative overflow-hidden" id="contact">
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-primary via-secondary to-tertiary" />
      
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-start">
          <div>
            <h2 className="text-2xl sm:text-3xl lg:text-5xl font-heading text-foreground tracking-tighter leading-none mb-4 lg:mb-8">
              Start your <br />
              <span className="text-secondary italic">Revolution.</span>
            </h2>
            <p className="text-base lg:text-lg text-muted-foreground font-sans font-medium mb-8 lg:mb-12 max-w-md leading-relaxed">
              Have a visionary project in mind? We're ready to engineer it into reality.
            </p>

            <div className="space-y-6 lg:space-y-8 mb-12 lg:mb-16">
              <div className="flex items-center gap-3 lg:gap-4 group">
                <div className="w-10 h-10 lg:w-12 lg:h-12 bg-white border-2 border-foreground rounded-xl lg:rounded-2xl flex items-center justify-center shadow-pop group-hover:bg-primary group-hover:text-white transition-all">
                  <Mail size={20} lg:size={24} />
                </div>
                <div>
                  <p className="text-[8px] lg:text-[10px] font-black uppercase tracking-widest text-muted-foreground mb-1">Email Support</p>
                  <p className="text-base lg:text-lg font-heading font-black">zorvia02@gmail.com</p>
                </div>
              </div>
              
              <div className="flex items-center gap-3 lg:gap-4 group">
                <div className="w-10 h-10 lg:w-12 lg:h-12 bg-white border-2 border-foreground rounded-xl lg:rounded-2xl flex items-center justify-center shadow-pop group-hover:bg-secondary group-hover:text-white transition-all">
                  <Phone size={20} lg:size={24} />
                </div>
                <div>
                  <p className="text-[8px] lg:text-[10px] font-black uppercase tracking-widest text-muted-foreground mb-1">Quick Contact</p>
                  <p className="text-base lg:text-lg font-heading font-black">+91 (800) ZORVIA-DX</p>
                </div>
              </div>

              <div className="flex items-center gap-3 lg:gap-4 group">
                <div className="w-10 h-10 lg:w-12 lg:h-12 bg-white border-2 border-foreground rounded-xl lg:rounded-2xl flex items-center justify-center shadow-pop group-hover:bg-tertiary group-hover:text-white transition-all">
                  <MapPin size={20} lg:size={24} />
                </div>
                <div>
                  <p className="text-[8px] lg:text-[10px] font-black uppercase tracking-widest text-muted-foreground mb-1">Headquarters</p>
                  <p className="text-base lg:text-lg font-heading font-black text-pretty">Bhubaneswar, Odisha, India</p>
                </div>
              </div>
            </div>

            <div className="flex gap-3 lg:gap-4">
              {[
                { icon: <TwitterIcon size={18} />, color: 'hover:bg-[#1DA1F2]', url: 'https://x.com/zorvia02' },
                { icon: <InstagramIcon size={18} />, color: 'hover:bg-[#E4405F]', url: 'https://www.instagram.com/zorvia02?igsh=MTA0b2EwMXA1b29vYg==' },
                { icon: <GithubIcon size={18} />, color: 'hover:bg-[#333]', url: 'https://github.com/zorvia02' },
                { icon: <Mail size={18} />, color: 'hover:bg-[#EA4335]', url: 'mailto:zorvia02@gmail.com' }
              ].map((social, i) => (
                <motion.a 
                  key={i}
                  whileHover={{ y: -5, rotate: 10 }}
                  href={social.url}
                  target={social.url.startsWith('mailto') ? '_self' : '_blank'}
                  rel="noopener noreferrer"
                  className={`w-8 h-8 lg:w-10 lg:h-10 bg-white border-2 border-foreground rounded-lg lg:rounded-xl flex items-center justify-center shadow-pop-sm transition-all ${social.color} hover:text-white`}
                >
                  {social.icon}
                </motion.a>
              ))}
            </div>
          </div>

          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            className="p-5 lg:p-7 bg-white border-2 border-foreground rounded-2xl lg:rounded-3xl shadow-pop relative overflow-hidden"
          >
            <form onSubmit={handleSubmit} className="space-y-6 lg:space-y-8">
              {/* Honeypot */}
              <input 
                type="text" 
                name="website_url" 
                value={formData.website_url} 
                onChange={(e) => setFormData({...formData, website_url: e.target.value})}
                className="hidden" 
                autoComplete="off"
              />
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
                <div>
                  <label className="block text-[10px] font-black uppercase tracking-widest mb-2 ml-4">Your Name</label>
                  <input 
                    type="text" 
                    value={formData.name}
                    onChange={(e) => setFormData({...formData, name: e.target.value})}
                    placeholder="John Doe" 
                    required
                    className="w-full bg-muted/30 border-2 border-foreground rounded-xl lg:rounded-2xl px-4 lg:px-6 py-2.5 font-bold focus:outline-none focus:bg-white focus:shadow-pop-sm transition-all text-sm"
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
                    className="w-full bg-muted/30 border-2 border-foreground rounded-xl lg:rounded-2xl px-4 lg:px-6 py-2.5 font-bold focus:outline-none focus:bg-white focus:shadow-pop-sm transition-all text-sm"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
                <div>
                  <label className="block text-[10px] font-black uppercase tracking-widest mb-2 ml-4">Phone Number</label>
                  <input 
                    type="tel" 
                    value={formData.phone}
                    onChange={(e) => setFormData({...formData, phone: e.target.value})}
                    placeholder="+91" 
                    required
                    className="w-full bg-muted/30 border-2 border-foreground rounded-xl lg:rounded-2xl px-4 lg:px-6 py-2.5 font-bold focus:outline-none focus:bg-white focus:shadow-pop-sm transition-all text-sm"
                  />
                </div>
                <div>
                  <label className="block text-[10px] font-black uppercase tracking-widest mb-2 ml-4">WhatsApp</label>
                  <input 
                    type="tel" 
                    value={formData.whatsapp}
                    onChange={(e) => setFormData({...formData, whatsapp: e.target.value})}
                    placeholder="+91" 
                    className="w-full bg-muted/30 border-2 border-foreground rounded-xl lg:rounded-2xl px-4 lg:px-6 py-2.5 font-bold focus:outline-none focus:bg-white focus:shadow-pop-sm transition-all text-sm"
                  />
                </div>
              </div>

              <div>
                <label className="block text-[10px] font-black uppercase tracking-widest mb-2 ml-4">Project Type</label>
                <select 
                  value={formData.project_type}
                  onChange={(e) => setFormData({...formData, project_type: e.target.value})}
                  className="w-full bg-muted/30 border-2 border-foreground rounded-xl lg:rounded-2xl px-4 lg:px-6 py-2.5 font-bold focus:outline-none focus:bg-white focus:shadow-pop-sm transition-all appearance-none cursor-pointer text-sm"
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
                  rows="3" 
                  value={formData.project_description}
                  onChange={(e) => setFormData({...formData, project_description: e.target.value})}
                  placeholder="Tell us about the problem we're solving..." 
                  required
                  className="w-full bg-muted/30 border-2 border-foreground rounded-xl lg:rounded-2xl px-4 lg:px-6 py-2.5 font-bold focus:outline-none focus:bg-white focus:shadow-pop-sm transition-all text-sm"
                ></textarea>
              </div>

              <div className="flex items-start gap-3 ml-2 min-h-[40px]">
                 <div className="relative flex items-center mt-0.5">
                    <input 
                      type="checkbox" 
                      required
                      checked={formData.agreedToTerms}
                      onChange={(e) => setFormData({...formData, agreedToTerms: e.target.checked})}
                      className="peer h-5 w-5 cursor-pointer appearance-none rounded-md border-2 border-foreground bg-white transition-all checked:bg-primary checked:border-primary"
                    />
                    <CheckCircle2 className="absolute h-3.5 w-3.5 text-white opacity-0 peer-checked:opacity-100 left-0.5 transition-opacity" strokeWidth={4} />
                 </div>
                 <p className="text-[9px] lg:text-[10px] font-black uppercase tracking-widest text-muted-foreground leading-tight">
                    I agree to the <Link to="/terms" className="text-foreground underline decoration-primary decoration-2 underline-offset-2">Terms of Service</Link> & <Link to="/privacy" className="text-foreground underline decoration-secondary decoration-2 underline-offset-2">Privacy Policy</Link>
                 </p>
              </div>

              {status === 'success' ? (
                 <div className="w-full py-4 lg:py-5 bg-quaternary text-foreground border-2 border-foreground rounded-full font-heading font-black uppercase flex items-center justify-center gap-3 text-sm lg:text-base">
                    <CheckCircle2 size={20} /> Signal Received.
                 </div>
              ) : status === 'error' ? (
                 <div className="w-full py-4 lg:py-5 bg-secondary text-white rounded-full font-heading font-black uppercase flex items-center justify-center gap-3 text-sm lg:text-base">
                    <AlertCircle size={20} /> Error. Try Again.
                 </div>
              ) : (
                <button 
                  disabled={status === 'submitting'}
                  className="w-full py-4 lg:py-5 bg-foreground text-white rounded-full font-heading font-black uppercase tracking-[0.2em] shadow-pop hover:bg-primary transition-all flex items-center justify-center gap-3 active:shadow-none translate-y-0 active:translate-y-1 disabled:opacity-50 text-sm lg:text-base"
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
