import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  HelpCircle, 
  MessageSquare, 
  Send, 
  CheckCircle2, 
  ArrowLeft, 
  LifeBuoy, 
  Zap, 
  AlertCircle,
  Search,
  ChevronRight,
  Code2,
  Settings,
  ShieldCheck,
  CreditCard,
  Activity,
  Clock,
  Terminal,
  Server,
  Cloud,
  Cpu,
  Mail,
  Info,
  Hash
} from 'lucide-react';
import { Link } from 'react-router-dom';
import { supabase } from '../lib/supabaseClient';

const HelpDesk = () => {
  const [activeSection, setActiveSection] = useState('knowledge-base');
  const [searchQuery, setSearchQuery] = useState('');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
    type: 'incident',
    priority: 'standard'
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
          type: formData.type,
          priority: formData.priority,
          status: 'open'
        }]);

      if (error) throw error;
      
      setIsSuccess(true);
      setFormData({ name: '', email: '', subject: '', message: '', type: 'incident', priority: 'standard' });
    } catch (err) {
      setError("Failed to dispatch support request. Please verify telemetry connection.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const knowledgeBase = [
    {
      category: 'Development (L1)',
      icon: <Code2 size={18} />,
      items: [
        { q: 'API Integration Syntax?', a: 'All Zorvia endpoints follow standard RESTful patterns with Bearer token authentication via TLS 1.3.' },
        { q: 'SDK Versioning?', a: 'We support official SDKs for Node.js, Python, and Go. Ensure you are on v4.2+ for full feature parity.' },
        { q: 'Webhooks & Payloads?', a: 'Configure your target URL in the Dev Portal to receive signed JSON payloads for real-time events.' }
      ]
    },
    {
      category: 'Operations (L2)',
      icon: <Settings size={18} />,
      items: [
        { q: 'Deployment Scaling?', a: 'Our infrastructure automatically scales during peak loads. Consult our Scaling Policy for rate limits.' },
        { q: 'Caching Protocols?', a: 'Edge caching is active by default. Use Cache-Control headers to override global latency settings.' },
        { q: 'Service Maintenance?', a: 'Planned updates occur during zero-traffic windows. Subscribe to our status page for notifications.' }
      ]
    },
    {
      category: 'Security & IAM (L3)',
      icon: <ShieldCheck size={18} />,
      items: [
        { q: 'Role-Based Access?', a: 'Zorvia utilizes granular RBAC. Admin, Developer, and Analyst roles can be assigned via the IAM Dashboard.' },
        { q: 'Vulnerability Reporting?', a: 'Submit security findings via our specialized VDP channel for rapid remediation and bounty eligibility.' },
        { q: 'Encryption Integrity?', a: 'All data is encrypted at rest (AES-256) and in transit (TLS 1.3). Keys are rotated every 90 days.' }
      ]
    },
    {
      category: 'Financial & Billing',
      icon: <CreditCard size={18} />,
      items: [
        { q: 'SLA Tiers?', a: 'We offer tiered support levels: Standard (NBD), Priority (4h), and Enterprise (Dedicated Engineer).' },
        { q: 'Invoicing Cycles?', a: 'Invoices are generated on the 1st of each month and available in the Billing Center for download.' },
        { q: 'Payment Protocols?', a: 'We support all major credit providers, ACH transfers, and crypto-escrow for authorized accounts.' }
      ]
    }
  ];

  const systemHealth = [
    { name: 'API Gateway', status: 'operational', load: '12%', icon: <Activity className="text-green-500" /> },
    { name: 'Workflow Engine', status: 'operational', load: '45%', icon: <Cpu className="text-green-500" /> },
    { name: 'Database Cluster', status: 'operational', load: '28%', icon: <Server className="text-green-500" /> },
    { name: 'CDN & Edge', status: 'operational', load: '4%', icon: <Cloud className="text-green-500" /> }
  ];

  const sidebarLinks = [
    { id: 'status', label: '01', title: 'System Health', icon: <Activity size={18} /> },
    { id: 'knowledge-base', label: '02', title: 'Knowledge Base', icon: <LifeBuoy size={18} /> },
    { id: 'support-tiers', label: '03', title: 'Support Tiers', icon: <Clock size={18} /> },
    { id: 'dispatch', label: '04', title: 'Ticket Dispatch', icon: <Send size={18} /> }
  ];

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      window.scrollTo({
        top: element.offsetTop - 120,
        behavior: 'smooth'
      });
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 200;
      for (const link of sidebarLinks) {
        const element = document.getElementById(link.id);
        if (element && element.offsetTop <= scrollPosition && element.offsetTop + element.offsetHeight > scrollPosition) {
          setActiveSection(link.id);
          break;
        }
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-white pt-32 pb-20 selection:bg-primary/30 selection:text-foreground">
      {/* Background Grids */}
      <div className="fixed inset-0 pointer-events-none opacity-[0.03] z-0">
        <div className="absolute inset-0 bg-[#FCD34D]/20 bg-[radial-gradient(#FCD34D_1px,transparent_1px)] [background-size:32px_32px]" />
      </div>

      <div className="container mx-auto px-6 lg:px-12 relative z-10">
        {/* Header Infrastructure */}
        <div className="max-w-6xl mx-auto mb-16">
          <Link 
            to="/" 
            className="inline-flex items-center gap-2 text-[10px] font-black uppercase tracking-[0.3em] text-muted-foreground hover:text-primary mb-8 transition-all hover:-translate-x-1"
          >
            <ArrowLeft size={14} /> Mission Abort: Return to Base
          </Link>
          
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-12 pb-12 border-b-8 border-foreground">
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="space-y-6"
            >
              <div className="flex items-center gap-4">
                 <span className="px-3 py-1 bg-primary/10 text-foreground border-2 border-primary shadow-[4px_4px_0px_currentColor] rounded-lg text-[10px] font-black uppercase tracking-widest flex items-center gap-2">
                   <LifeBuoy size={12} /> Support Command
                 </span>
                 <span className="text-[10px] font-black uppercase tracking-widest text-muted-foreground opacity-60 flex items-center gap-2">
                   <Hash size={12} /> v2.4.16.SUPPORT
                 </span>
              </div>
              <h1 className="text-7xl md:text-9xl font-heading font-black tracking-tighter uppercase italic leading-[0.8]">
                Help <span className="text-primary">Desk.</span>
              </h1>
              <p className="text-2xl font-bold text-muted-foreground max-w-2xl leading-none italic">
                Engineering-led support protocols for technical resolution and strategic project escalation.
              </p>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              className="relative group w-full lg:w-96"
            >
              <Search className="absolute left-6 top-1/2 -translate-y-1/2 text-muted-foreground group-focus-within:text-primary transition-colors" size={20} />
              <input 
                type="text"
                placeholder="Search knowledge logs..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-14 pr-6 py-5 bg-slate-50 border-4 border-foreground rounded-[24px] font-bold text-sm focus:outline-none focus:border-primary transition-all shadow-pop"
              />
            </motion.div>
          </div>
        </div>

        {/* Support Matrix Layout */}
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-16">
          
          {/* Sticky Navigation Sidebar */}
          <aside className="lg:col-span-4 hidden lg:block h-fit sticky top-32">
            <div className="bg-white border-4 border-foreground rounded-[40px] p-8 shadow-pop-lg relative overflow-hidden">
               <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-br from-primary/5 to-transparent rounded-full -mr-12 -mt-12" />
               
               <h3 className="text-xs font-black uppercase tracking-[0.3em] text-muted-foreground mb-8 flex items-center gap-2">
                 Support Matrix Index
               </h3>
               <nav className="space-y-1.5">
                  {sidebarLinks.map(link => (
                    <button
                      key={link.id}
                      onClick={() => scrollToSection(link.id)}
                      className={`
                        w-full flex items-center gap-4 px-5 py-4 rounded-2xl font-black text-[11px] uppercase tracking-widest transition-all text-left
                        ${activeSection === link.id 
                          ? 'bg-primary text-foreground scale-105 shadow-pop -translate-y-1' 
                          : 'text-muted-foreground hover:bg-slate-50 hover:text-foreground'}
                      `}
                    >
                      <span className={`tabular-nums ${activeSection === link.id ? 'text-foreground' : 'opacity-30'}`}>
                        {link.label}
                      </span>
                      {link.title}
                    </button>
                  ))}
               </nav>

               <div className="mt-8 pt-8 border-t-2 border-slate-50 space-y-6">
                  <div className="p-4 bg-slate-50 rounded-2xl border border-slate-200">
                     <p className="text-[10px] font-black uppercase tracking-widest text-muted-foreground mb-3">Live Response Signal</p>
                     <div className="flex items-center gap-3">
                        <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse shadow-[0_0_12px_rgba(34,197,94,0.5)]" />
                        <span className="text-[11px] font-black uppercase tracking-widest">Technicians Online</span>
                     </div>
                  </div>
               </div>
            </div>
          </aside>

          {/* Support Content Stream */}
          <main className="lg:col-span-8 space-y-20">
            
            {/* 01 // System Health HUD */}
            <section id="status" className="scroll-mt-32 space-y-8">
              <div className="flex items-center gap-4">
                 <span className="text-4xl font-heading font-black text-slate-100 italic tabular-nums leading-none">01</span>
                 <h2 className="text-4xl md:text-5xl font-heading font-black uppercase tracking-tighter italic leading-none pt-1">
                   System <span className="text-primary underline decoration-4 underline-offset-8">Health.</span>
                 </h2>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                 {systemHealth.map((item, idx) => (
                    <div key={idx} className="p-6 bg-white border-4 border-foreground rounded-3xl shadow-pop hover:scale-[1.02] transition-transform flex items-center justify-between group">
                       <div className="flex items-center gap-4">
                          <div className="p-3 bg-slate-50 rounded-xl group-hover:bg-primary/10 transition-colors">
                             {item.icon}
                          </div>
                          <div>
                             <h4 className="text-sm font-black uppercase tracking-widest">{item.name}</h4>
                             <p className="text-[10px] font-bold text-muted-foreground uppercase opacity-60">Status: {item.status}</p>
                          </div>
                       </div>
                       <div className="text-right">
                          <p className="text-xs font-black tabular-nums">{item.load}</p>
                          <p className="text-[9px] font-bold text-muted-foreground uppercase tracking-widest">Load</p>
                       </div>
                    </div>
                 ))}
              </div>
            </section>

            {/* 02 // Categorized Knowledge Base */}
            <section id="knowledge-base" className="scroll-mt-32 space-y-8">
               <div className="flex items-center gap-4">
                 <span className="text-4xl font-heading font-black text-slate-100 italic tabular-nums leading-none">02</span>
                 <h2 className="text-4xl md:text-5xl font-heading font-black uppercase tracking-tighter italic leading-none pt-1">
                   Knowledge <span className="text-primary underline decoration-4 underline-offset-8">Base.</span>
                 </h2>
              </div>

              <div className="space-y-12">
                 {knowledgeBase.map((category, idx) => (
                    <div key={idx} className="space-y-6">
                       <h3 className="text-xs font-black uppercase tracking-[0.4em] text-muted-foreground flex items-center gap-3">
                         <span className="w-8 h-[2px] bg-primary rounded-full" />
                         {category.category}
                       </h3>
                       <div className="grid grid-cols-1 gap-4">
                          {category.items.filter(i => 
                            i.q.toLowerCase().includes(searchQuery.toLowerCase()) || 
                            i.a.toLowerCase().includes(searchQuery.toLowerCase())
                          ).map((item, iIdx) => (
                             <motion.div 
                                key={iIdx}
                                whileHover={{ x: 10 }}
                                className="p-8 bg-slate-50 border-4 border-foreground rounded-[32px] shadow-pop group cursor-help"
                             >
                                <div className="flex items-start gap-5">
                                   <div className="p-3 bg-white border-2 border-foreground rounded-xl shadow-pop-sm group-hover:bg-primary transition-colors">
                                      {category.icon}
                                   </div>
                                   <div className="space-y-3">
                                      <h4 className="text-lg font-black uppercase tracking-tight leading-tight pt-1 italic">{item.q}</h4>
                                      <p className="text-xl font-bold text-muted-foreground tracking-tight leading-tight">{item.a}</p>
                                   </div>
                                </div>
                             </motion.div>
                          ))}
                       </div>
                    </div>
                 ))}
              </div>
            </section>

            {/* 03 // Support Tiers & SLAs */}
            <section id="support-tiers" className="scroll-mt-32 space-y-8">
                <div className="flex items-center gap-4">
                 <span className="text-4xl font-heading font-black text-slate-100 italic tabular-nums leading-none">03</span>
                 <h2 className="text-4xl md:text-5xl font-heading font-black uppercase tracking-tighter italic leading-none pt-1">
                   Support <span className="text-primary underline decoration-4 underline-offset-8">Tiers.</span>
                 </h2>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                 {[
                    { title: 'Standard', time: '24-48h', desc: 'Default for all project partners.', color: 'bg-slate-50' },
                    { title: 'Priority', time: '4h-12h', desc: 'Enhanced SLA for production systems.', color: 'bg-primary/5 border-primary/20' },
                    { title: 'Enterprise', time: '< 2h', desc: 'Dedicated engineering squad assigned.', color: 'bg-foreground text-white shadow-pop-lg' }
                 ].map((tier, idx) => (
                    <div key={idx} className={`p-8 border-4 border-foreground rounded-[32px] shadow-pop space-y-4 ${tier.color}`}>
                       <h4 className="text-xs font-black uppercase tracking-[0.3em] opacity-60">{tier.title} Support</h4>
                       <div className="flex items-center gap-2">
                          <Clock size={20} className={tier.title === 'Enterprise' ? 'text-primary' : 'text-foreground'} />
                          <span className="text-3xl font-heading font-black italic">{tier.time}</span>
                       </div>
                       <p className={`text-base font-bold leading-tight ${tier.title === 'Enterprise' ? 'text-slate-400' : 'text-muted-foreground'}`}>
                          {tier.desc}
                       </p>
                    </div>
                 ))}
              </div>
            </section>

            {/* 04 // Ticket Dispatch Terminal */}
            <section id="dispatch" className="scroll-mt-32 space-y-8">
                <div className="flex items-center gap-4">
                 <span className="text-4xl font-heading font-black text-slate-100 italic tabular-nums leading-none">04</span>
                 <h2 className="text-4xl md:text-5xl font-heading font-black uppercase tracking-tighter italic leading-none pt-1">
                   Ticket <span className="text-primary underline decoration-4 underline-offset-8">Dispatch.</span>
                 </h2>
              </div>

              <div className="bg-white border-8 border-foreground rounded-[48px] p-8 md:p-12 shadow-pop-lg relative overflow-hidden group">
                {/* Decorative Elements */}
                <div className="absolute top-12 right-12 text-primary opacity-5 group-hover:rotate-12 transition-transform duration-700">
                  <Terminal size={200} />
                </div>

                <AnimatePresence mode="wait">
                  {isSuccess ? (
                    <motion.div 
                      key="success"
                      initial={{ scale: 0.9, opacity: 0 }}
                      animate={{ scale: 1, opacity: 1 }}
                      className="py-12 flex flex-col items-center text-center gap-8 relative z-10"
                    >
                       <div className="w-24 h-24 bg-primary text-foreground rounded-full flex items-center justify-center shadow-pop animate-bounce">
                          <CheckCircle2 size={48} strokeWidth={3} />
                       </div>
                       <div className="space-y-3">
                          <h3 className="text-5xl font-heading font-black uppercase italic italic leading-none">Transmission <br /><span className="text-primary">Successful.</span></h3>
                          <p className="text-2xl font-bold text-muted-foreground max-w-md italic">Inquiry dispatched to HQ. Expect a technical update within your SLA window.</p>
                       </div>
                       <button 
                         onClick={() => setIsSuccess(false)}
                         className="px-12 py-5 bg-foreground text-white rounded-full text-sm font-black uppercase tracking-widest shadow-pop hover:scale-105 transition-all"
                       >
                          Open New Signal
                       </button>
                    </motion.div>
                  ) : (
                    <motion.form 
                      key="form"
                      onSubmit={handleSubmit} 
                      className="space-y-8 relative z-10"
                    >
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="space-y-3">
                          <label className="text-xs font-black uppercase tracking-widest text-muted-foreground ml-2">Operator Identity</label>
                          <input 
                            required
                            value={formData.name}
                            onChange={(e) => setFormData({...formData, name: e.target.value})}
                            className="w-full bg-slate-50 border-4 border-foreground rounded-[24px] px-6 py-4 font-bold text-base focus:border-primary outline-none transition-all shadow-pop-sm focus:shadow-none focus:translate-x-1 focus:translate-y-1"
                            placeholder="Full Name"
                          />
                        </div>
                        <div className="space-y-3">
                          <label className="text-xs font-black uppercase tracking-widest text-muted-foreground ml-2">Secure Email Signal</label>
                          <input 
                            required
                            type="email"
                            value={formData.email}
                            onChange={(e) => setFormData({...formData, email: e.target.value})}
                            className="w-full bg-slate-50 border-4 border-foreground rounded-[24px] px-6 py-4 font-bold text-base focus:border-primary outline-none transition-all shadow-pop-sm focus:shadow-none focus:translate-x-1 focus:translate-y-1"
                            placeholder="operator@network.tech"
                          />
                        </div>
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="space-y-3">
                           <label className="text-xs font-black uppercase tracking-widest text-muted-foreground ml-2">Issue Topology</label>
                           <select 
                              value={formData.type}
                              onChange={(e) => setFormData({...formData, type: e.target.value})}
                              className="w-full bg-slate-50 border-4 border-foreground rounded-[24px] px-6 py-4 font-bold text-base focus:border-primary outline-none appearance-none cursor-pointer"
                           >
                              <option value="incident">Critical Incident (Breakdown)</option>
                              <option value="feature">Service Request (Feature)</option>
                              <option value="billing">Financial Inquiry (Billing)</option>
                              <option value="security">Security Alert (L3)</option>
                           </select>
                        </div>
                        <div className="space-y-3">
                           <label className="text-xs font-black uppercase tracking-widest text-muted-foreground ml-2">Signal Priority</label>
                           <select 
                              value={formData.priority}
                              onChange={(e) => setFormData({...formData, priority: e.target.value})}
                              className="w-full bg-slate-50 border-4 border-foreground rounded-[24px] px-6 py-4 font-bold text-base focus:border-primary outline-none appearance-none cursor-pointer"
                           >
                              <option value="standard">Standard (Default)</option>
                              <option value="urgent">Urgent (SLA Priority)</option>
                              <option value="emergency">Emergency (Production Critical)</option>
                           </select>
                        </div>
                      </div>

                      <div className="space-y-3">
                        <label className="text-xs font-black uppercase tracking-widest text-muted-foreground ml-2">Transmission Subject</label>
                        <input 
                          required
                          value={formData.subject}
                          onChange={(e) => setFormData({...formData, subject: e.target.value})}
                          className="w-full bg-slate-50 border-4 border-foreground rounded-[24px] px-6 py-4 font-bold text-base focus:border-primary outline-none transition-all shadow-pop-sm focus:shadow-none focus:translate-x-1 focus:translate-y-1"
                          placeholder="Brief technical summary..."
                        />
                      </div>

                      <div className="space-y-3">
                         <label className="text-xs font-black uppercase tracking-widest text-muted-foreground ml-2">Incident Content</label>
                         <textarea 
                           required
                           value={formData.message}
                           onChange={(e) => setFormData({...formData, message: e.target.value})}
                           className="w-full bg-slate-50 border-4 border-foreground rounded-[32px] px-8 py-8 font-bold text-base focus:border-primary outline-none transition-all min-h-[220px] shadow-pop-sm focus:shadow-none focus:translate-x-1 focus:translate-y-1"
                           placeholder="Provide exhaustive details regarding your technical or strategic requirement..."
                         />
                      </div>

                      {error && (
                        <div className="p-5 bg-red-50 text-red-600 border-4 border-red-200 rounded-[24px] text-xs font-black uppercase flex items-center gap-4 animate-shake">
                           <AlertCircle size={20} /> {error}
                        </div>
                      )}

                      <button 
                        disabled={isSubmitting}
                        className="w-full py-6 bg-primary text-foreground border-4 border-foreground rounded-[2rem] font-black text-xl md:text-2xl uppercase tracking-[0.2em] italic shadow-pop hover:shadow-none hover:translate-x-2 hover:translate-y-2 transition-all disabled:opacity-50 flex items-center justify-center gap-6 group"
                      >
                         <Send className={isSubmitting ? 'animate-ping' : 'group-hover:translate-x-2 transition-transform'} />
                         {isSubmitting ? 'DISPATCHING SIGNAL...' : 'TRANSMIT TICKET'}
                      </button>
                    </motion.form>
                  )}
                </AnimatePresence>
              </div>
            </section>

          </main>
        </div>

        {/* Support Footer Metadata */}
        <div className="max-w-6xl mx-auto mt-32 pt-16 border-t-8 border-foreground flex flex-col md:flex-row justify-between items-center gap-12">
            <div className="space-y-2">
               <p className="text-[10px] font-black uppercase tracking-[0.5em] text-muted-foreground">Support Ops Layer: 2.4.16 // Global Command</p>
               <p className="text-[9px] font-bold text-slate-300 uppercase tracking-widest">© 2026 Zorvia Digital. Response times governed by the Master Service Agreement.</p>
            </div>
            <div className="flex gap-10">
               <Link to="/security" className="text-[10px] font-black uppercase tracking-widest text-muted-foreground hover:text-primary transition-colors">Security Annex</Link>
               <Link to="/privacy" className="text-[10px] font-black uppercase tracking-widest text-muted-foreground hover:text-primary transition-colors">Privacy Manifesto</Link>
            </div>
        </div>
      </div>
    </div>
  );
};

export default HelpDesk;
