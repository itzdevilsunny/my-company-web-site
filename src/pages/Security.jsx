import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Shield, 
  Lock, 
  Database, 
  Globe, 
  ArrowLeft, 
  ShieldCheck, 
  Server,
  Activity,
  Cpu,
  Eye,
  Terminal,
  Key,
  Users,
  AlertTriangle,
  FileCheck,
  Zap,
  CheckCircle2,
  Clock,
  ExternalLink,
  ChevronRight,
  Gavel,
  ShieldAlert
} from 'lucide-react';
import { Link } from 'react-router-dom';

const Security = () => {
  const [activeSection, setActiveSection] = useState('overview');
  const [easyMode, setEasyMode] = useState(false);

  const complianceItems = [
    { name: 'Cert-In Aligned', status: 'Active', progress: 100, color: '#8B5CF6' },
    { name: 'MeitY Standards', status: 'Compliant', progress: 100, color: '#F472B6' },
    { name: 'DPDP Readiness', status: 'Strategic', progress: 95, color: '#FBBF24' },
    { name: 'ISO/IEC 27001', status: 'In Review', progress: 85, color: '#34D399' }
  ];

  const sections = [
    {
      id: 'overview',
      label: '01',
      title: 'Security Philosophy',
      icon: <Shield size={18} />,
      content: `Security is the bedrock of Zorvia's Indian digital architecture. We adopt a "Security by Design" and "Zero Trust" methodology. Our framework is explicitly aligned with the Cyber Security Directions issued by the Indian Computer Emergency Response Team (Cert-In).`,
      simplified: `At Zorvia, we build "security first." We follow the strict safety rules set by the Indian government (Cert-In) to make sure your data is never at risk.`
    },
    {
      id: 'infrastructure',
      label: '02',
      title: 'Indian Cloud Sovereign',
      icon: <Server size={18} />,
      content: `We prioritize data localization. Our production environments are hosted on Tier-1 cloud providers (AWS/GCP) with primary nodes located in Mumbai and Hyderabad regions.
      • VPC Isolation: All workloads are isolated in hardened Virtual Private Clouds.
      • Cert-In Reporting: We maintain logs in compliance with Cert-In's 6-month mandatory retention policy.`,
      simplified: `We keep your data in high-security servers located right here in India (Mumbai and Hyderabad). We also keep safety logs for 6 months as the law requires.`
    },
    {
      id: 'encryption',
      label: '03',
      title: 'Data Hardening',
      icon: <Database size={18} />,
      content: `We utilize industry-standard cryptographic protocols.
      • In Transit: TLS 1.3 encryption for all data moving across the network.
      • At Rest: AES-256 encryption for all databases and file stores.
      • Sovereign Keys: Key management is handled via dedicated hardware modules with automated rotation.`,
      simplified: `We "scramble" (encrypt) your data so that if a hacker ever saw it, it would look like nonsense. Your passwords and private info are always locked.`
    },
    {
      id: 'ai-security',
      label: '04',
      title: 'AI Prompt Security',
      icon: <Cpu size={18} />,
      content: `Our AI ecosystem is built with a proprietary "Safety Layer." 
      • Prompt Anonymization: We strip PII (Personally Identifiable Information) before requests hit third-party LLM APIs.
      • Injection Defense: We use advanced filtering to prevent "Prompt Injection" attacks.
      • No Data Leakage: We explicitly disable "training" on client data in all our enterprise AI agreements.`,
      simplified: `When we use AI to help with your project, we hide your name and private info from the AI models. We also make sure the AI can't be "tricked" into leaking your secrets.`
    },
    {
      id: 'app-security',
      label: '05',
      title: 'SDLC Fortification',
      icon: <Terminal size={18} />,
      content: `Every line of code is audited.
      • Automated SAST: Static analysis scans for hardcoded API keys and vulnerabilities.
      • DAST Scans: Dynamic security testing in our staging environments.
      • Dependency Guard: We block libraries with known CVEs (Common Vulnerabilities and Exposures).`,
      simplified: `We check every piece of code we write for "cracks" or weaknesses before we launch it. We use robots to scan for bugs 24/7.`
    },
    {
      id: 'iam',
      label: '06',
      title: 'Identity Control',
      icon: <Users size={18} />,
      content: `We enforce the Principle of Least Privilege (PoLP).
      • Mandatory MFA: Multi-Factor Authentication is required for all Zorvia staff access.
      • Audit Trails: We log exactly who accessed which data and when.
      • Zero Persistence: We do not store permanent credentials for client systems unless strictly required by the SOW.`,
      simplified: `Only the people who absolutely need to see your data can see it. Everyone at Zorvia has to use extra security (MFA) to log in.`
    },
    {
      id: 'incident',
      label: '07',
      title: 'Emergency Response',
      icon: <AlertTriangle size={18} />,
      content: `We are ready for any threat.
      • Cert-In Protocol: We report any major security incident to Cert-In within 6 hours as per Indian law.
      • On-Call: Our engineering team maintains a 24/7 on-call rotation.
      • DR Nodes: We maintain geo-redundant backups for immediate recovery.`,
      simplified: `If something ever goes wrong, we have a fast-response team ready 24/7. We are legally required to report big problems to the government within 6 hours.`
    },
    {
      id: 'governance',
      label: '08',
      title: 'Legal Compliance',
      icon: <Gavel size={18} />,
      content: `Our security program is managed by our Legal and CISO teams in Bengaluru.
      • IT Act 2000: Fully compliant with Section 43A and Section 72A.
      • DPDP Act 2023: Implementing security safeguards as specified for Data Fiduciaries.`,
      simplified: `Our security team is based in Bengaluru. We follow all the important Indian technology and privacy laws to keeps things legal and safe.`
    }
  ];

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 200;
      for (const section of sections) {
        const element = document.getElementById(section.id);
        if (element && element.offsetTop <= scrollPosition && element.offsetTop + element.offsetHeight > scrollPosition) {
          setActiveSection(section.id);
          break;
        }
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      window.scrollTo({
        top: element.offsetTop - 120,
        behavior: 'smooth'
      });
    }
  };

  return (
    <div className="min-h-screen bg-white pt-32 pb-20 selection:bg-secondary selection:text-white">
      {/* HUD Backdrop */}
      <div className="fixed inset-0 pointer-events-none opacity-[0.05] z-0">
        <div className="absolute inset-0 bg-[radial-gradient(#000_1px,transparent_1px)] [background-size:24px_24px]" />
      </div>

      <div className="container mx-auto px-6 lg:px-12 relative z-10">
        
        {/* Floating Easy Language Toggle */}
        <motion.button
          initial={{ x: 100 }}
          animate={{ x: 0 }}
          onClick={() => setEasyMode(!easyMode)}
          className={`
            fixed right-8 bottom-8 z-50 flex items-center gap-3 px-6 py-4 rounded-2xl font-black uppercase tracking-widest text-sm shadow-pop transition-all
            ${easyMode ? 'bg-secondary text-white border-2 border-foreground' : 'bg-white text-foreground border-4 border-foreground'}
          `}
        >
          <Zap size={20} className={easyMode ? 'animate-pulse' : ''} />
          {easyMode ? 'Standard Mode' : 'Easy Language'}
        </motion.button>

        {/* Superior Header */}
        <div className="max-w-6xl mx-auto mb-16">
          <Link 
            to="/" 
            className="inline-flex items-center gap-2 text-[10px] font-black uppercase tracking-[0.2em] text-muted-foreground hover:text-secondary mb-8 transition-all hover:-translate-x-1"
          >
            <ArrowLeft size={14} /> Back to Headquarters
          </Link>
          
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-12 pb-12 border-b-8 border-foreground">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="space-y-6"
            >
              <div className="flex items-center gap-3">
                 <div className="px-3 py-1 bg-secondary text-white border-2 border-foreground shadow-[4px_4px_0px_#000] rounded-lg text-[10px] font-black uppercase tracking-widest flex items-center gap-2">
                   <ShieldCheck size={12} /> CERT-IN GUIDELINE v2.5.0
                 </div>
                 <div className="flex items-center gap-2 px-3 py-1 bg-slate-100 border-2 border-slate-200 rounded-lg text-[10px] font-black uppercase text-muted-foreground">
                    <Activity size={12} className="animate-pulse text-green-500" /> Bengaluru Node Active
                 </div>
              </div>
              <h1 className="text-7xl md:text-9xl font-heading font-black tracking-tighter uppercase italic leading-[0.8]">
                Security <span className="text-secondary tracking-[-0.1em]">Annex.</span>
              </h1>
              <p className="text-2xl font-bold text-muted-foreground max-w-2xl leading-none italic">
                {easyMode 
                  ? "A simplified look at how we protect your project from hackers and data leaks."
                  : "A technical deep-dive into the architectural fortifications protecting our India-First digital presence."
                }
              </p>
            </motion.div>

            {/* Compliance Quick View HUD */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="bg-slate-900 border-4 border-foreground p-8 rounded-[40px] shadow-pop-lg w-full lg:w-[400px] text-white"
            >
              <h3 className="text-xs font-black uppercase tracking-widest text-slate-400 mb-6 flex items-center justify-between">
                Security Posture <span className="text-green-400">98% OPTIMIZED</span>
              </h3>
              <div className="space-y-5">
                {complianceItems.map(item => (
                  <div key={item.name} className="space-y-2">
                    <div className="flex justify-between items-end">
                      <span className="text-[10px] font-black uppercase tracking-widest">{item.name}</span>
                      <span className="text-[9px] font-bold text-slate-500">{item.status}</span>
                    </div>
                    <div className="h-2 w-full bg-white/5 border border-white/10 rounded-full overflow-hidden">
                       <motion.div 
                        initial={{ width: 0 }}
                        animate={{ width: `${item.progress}%` }}
                        transition={{ duration: 1.5, ease: "easeOut" }}
                        className="h-full rounded-full"
                        style={{ backgroundColor: item.color }}
                       />
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>

        {/* Technical Content Layout */}
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-16">
          
          {/* Navigation Matrix */}
          <aside className="lg:col-span-4 hidden lg:block h-fit sticky top-32">
            <div className="bg-white border-4 border-foreground rounded-[40px] p-8 shadow-pop-lg overflow-hidden relative group">
              {/* Decor Line */}
              <div className="absolute top-0 right-0 w-24 h-24 bg-secondary/10 rotate-45 -mr-12 -mt-12 group-hover:bg-secondary/20 transition-colors" />
              
              <h3 className="text-xs font-black uppercase tracking-[0.3em] text-muted-foreground mb-8">Navigation Matrix</h3>
              <nav className="space-y-2">
                {sections.map(section => (
                  <button
                    key={section.id}
                    onClick={() => scrollToSection(section.id)}
                    className={`
                      w-full flex items-center justify-between px-5 py-4 rounded-2xl font-black text-[11px] uppercase tracking-widest transition-all text-left
                      ${activeSection === section.id 
                        ? 'bg-foreground text-white scale-105 shadow-pop -translate-y-1' 
                        : 'text-muted-foreground hover:bg-slate-50 border-2 border-transparent hover:border-slate-200'}
                    `}
                  >
                    <div className="flex items-center gap-4">
                      <span className={`tabular-nums ${activeSection === section.id ? 'text-secondary font-black' : 'opacity-30'}`}>
                        {section.label}
                      </span>
                      {section.title}
                    </div>
                    {activeSection === section.id && <ChevronRight size={14} className="text-secondary" />}
                  </button>
                ))}
              </nav>

              <div className="mt-8 pt-8 border-t-4 border-slate-50 space-y-4">
                <div className="p-4 bg-slate-50 rounded-2xl space-y-3">
                  <div className="flex items-center gap-2">
                    <Zap size={14} className="text-tertiary" />
                    <span className="text-[10px] font-black uppercase tracking-widest">Live Uptime Monitor</span>
                  </div>
                  <div className="flex gap-1 h-3">
                    {[1,2,3,4,5,6,7,8,9,10,11,12].map(i => (
                      <motion.div 
                        key={i}
                        animate={{ height: [8, 12, 8] }}
                        transition={{ repeat: Infinity, duration: 1.5, delay: i * 0.1 }}
                        className="flex-1 bg-green-500 rounded-full"
                      />
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </aside>

          {/* Technical Deep-Dive Clauses */}
          <main className="lg:col-span-8 space-y-24">
            {sections.map((section) => (
              <motion.section 
                key={section.id}
                id={section.id}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-150px" }}
                className="scroll-mt-32 relative"
              >
                <div className="absolute -left-12 top-0 h-full w-1 hidden md:block">
                   <div className={`w-full h-full rounded-full transition-colors duration-500 ${activeSection === section.id ? 'bg-secondary' : 'bg-slate-100'}`} />
                </div>

                <div className="space-y-8">
                  {/* Section Label */}
                  <div className="flex items-center gap-4">
                     <div className="w-14 h-14 bg-foreground rounded-[20px] flex items-center justify-center text-white border-4 border-foreground shadow-[6px_6px_0px_rgba(244,114,182,0.5)]">
                        {section.icon}
                     </div>
                     <div className="space-y-1">
                        <span className="text-[10px] font-black uppercase tracking-[0.4em] text-secondary">Section {section.label}</span>
                        <h2 className="text-4xl md:text-5xl font-heading font-black uppercase tracking-tighter italic leading-none">
                          {section.title}
                        </h2>
                     </div>
                  </div>

                  {/* Content Terminal Style */}
                  <div className={`border-4 border-foreground rounded-[32px] p-8 md:p-12 shadow-pop relative overflow-hidden group transition-colors ${easyMode ? 'bg-slate-900 text-white' : 'bg-white text-muted-foreground'}`}>
                     {/* Glossy Overlay */}
                     <div className="absolute top-0 right-0 w-full h-2 bg-gradient-to-r from-transparent via-secondary/20 to-transparent" />
                     
                     <AnimatePresence mode="wait">
                       <motion.p 
                        key={easyMode ? 'easy' : 'tech'}
                        initial={{ opacity: 0, x: 10 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: -10 }}
                        className={`text-2xl font-bold leading-tight whitespace-pre-line tracking-tight mb-8 ${easyMode ? 'text-slate-100' : 'text-muted-foreground'}`}
                       >
                        {easyMode ? section.simplified : section.content}
                       </motion.p>
                     </AnimatePresence>

                     <div className="grid grid-cols-2 md:grid-cols-3 gap-4 pt-8 border-t-2 border-slate-100/10">
                        <div className="flex items-center gap-2">
                           <CheckCircle2 size={14} className="text-green-500" />
                           <span className={`text-[9px] font-black uppercase tracking-widest ${easyMode ? 'text-slate-400' : 'text-muted-foreground'}`}>Cert-In Aligned</span>
                        </div>
                        <div className="flex items-center gap-2">
                           <CheckCircle2 size={14} className="text-green-500" />
                           <span className={`text-[9px] font-black uppercase tracking-widest ${easyMode ? 'text-slate-400' : 'text-muted-foreground'}`}>AES-256 Ready</span>
                        </div>
                        <div className="hidden md:flex items-center gap-2">
                           <Clock size={14} className="text-slate-500" />
                           <span className={`text-[9px] font-black uppercase tracking-widest ${easyMode ? 'text-slate-400' : 'text-muted-foreground'}`}>Mumbai Zone 1</span>
                        </div>
                     </div>
                  </div>
                </div>
              </motion.section>
            ))}

            {/* Emergency Protocols Footer */}
            <motion.div 
               initial={{ opacity: 0, y: 40 }}
               whileInView={{ opacity: 1, y: 0 }}
               viewport={{ once: true }}
               className={`mt-40 p-12 border-4 border-dashed rounded-[48px] text-center space-y-8 ${easyMode ? 'bg-red-50 border-red-200' : 'bg-newsprint-off-white border-foreground/20'}`}
            >
               <div className={`w-20 h-20 rounded-full flex items-center justify-center mx-auto shadow-pop ${easyMode ? 'bg-red-500 text-white' : 'bg-foreground text-white'}`}>
                  <AlertTriangle size={36} />
               </div>
               <div className="space-y-4">
                  <h3 className={`text-4xl font-heading font-black uppercase tracking-tighter italic ${easyMode ? 'text-red-600' : 'text-foreground'}`}>
                    {easyMode ? 'Found a Safety Bug?' : 'Found a Vulnerability?'}
                  </h3>
                  <p className="text-xl font-bold text-muted-foreground max-w-2xl mx-auto leading-tight italic">
                    {easyMode 
                      ? "If you found a problem with our security, tell us right away! We promise to listen and fix it fast."
                      : "We strictly follow a Responsible Disclosure Policy. If you have identified a security security threat, please report it immediately."
                    }
                  </p>
               </div>
               <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
                  <a href="mailto:contact@zorvia.digital" className={`px-10 py-5 rounded-2xl font-black text-sm uppercase tracking-widest shadow-pop hover:shadow-none transition-all flex items-center gap-3 ${easyMode ? 'bg-red-500 text-white' : 'bg-foreground text-white'}`}>
                     {easyMode ? 'Send Alert' : 'Report Threat'} <ChevronRight size={18} />
                  </a>
                  <Link to="/help-desk" className="text-sm font-black uppercase tracking-widest text-muted-foreground hover:text-secondary transition-colors">
                     View Security SLA
                  </Link>
               </div>
            </motion.div>

            {/* Bottom Credits */}
            <div className="pt-20 border-t-2 border-slate-100 flex flex-col md:flex-row justify-between items-center gap-8 text-[10px] font-black uppercase tracking-[0.3em] text-muted-foreground">
               <p>Zorvia Digital Bengaluru Security Ops // System Rev. 2.5.0</p>
               <div className="flex gap-8">
                  <a href="#" className="hover:text-secondary transition-colors flex items-center gap-1">Network Status <ExternalLink size={10} /></a>
                  <a href="#" className="hover:text-secondary transition-colors">Incident Logs</a>
               </div>
            </div>
          </main>
        </div>
      </div>
    </div>
  );
};

export default Security;
