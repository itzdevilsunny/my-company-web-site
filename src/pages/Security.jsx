import React from 'react';
import { motion } from 'framer-motion';
import { Shield, Lock, Database, Globe, ArrowLeft, CheckCircle2, Server } from 'lucide-react';
import { Link } from 'react-router-dom';

const Security = () => {
  const securityFeatures = [
    {
      title: 'Data Encryption',
      description: 'All data is encrypted in transit using industry-standard TLS 1.3 and at rest using AES-256 encryption. Your project blueprints are stored in dedicated encrypted volumes.',
      icon: <Lock className="text-primary" size={24} />
    },
    {
      title: 'Infrastructure Reliability',
      description: 'Zorvia production environments are hosted on high-availability cloud infrastructure with automated daily snapshots and disaster recovery protocols.',
      icon: <Server className="text-secondary" size={24} />
    },
    {
      title: 'Identity Protection',
      description: 'Multi-factor authentication (MFA) is enforced for all system access. We utilize secure OTP-based validation for all customer inquiry portals.',
      icon: <Shield className="text-tertiary" size={24} />
    }
  ];

  return (
    <div className="min-h-screen bg-slate-50 pt-40 pb-20 px-6 lg:px-24">
      <div className="max-w-4xl mx-auto">
        <Link to="/" className="inline-flex items-center gap-2 text-[10px] font-black uppercase tracking-widest text-muted-foreground hover:text-primary mb-12 transition-colors">
          <ArrowLeft size={14} /> Back to Base
        </Link>
        
        <motion.div 
          initial={{ opacity: 0, scale: 0.98 }}
          animate={{ opacity: 1, scale: 1 }}
        >
          <div className="mb-12">
            <h1 className="text-6xl font-heading font-black tracking-tighter uppercase italic leading-[0.9] mb-4">
              Security <span className="text-primary">Profile.</span>
            </h1>
            <p className="text-lg font-bold text-muted-foreground uppercase tracking-widest opacity-60">System Resilience & Data Integrity</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20">
            <div className="bg-white border-2 border-foreground rounded-[2rem] p-8 shadow-pop space-y-6">
              <h3 className="text-xl font-black uppercase tracking-widest flex items-center gap-3">
                <Globe size={20} className="text-primary" /> Global Compliance
              </h3>
              <div className="space-y-4">
                {[
                  { name: 'ISO 27001 Certified', status: 'In Progress' },
                  { name: 'SOC2 Type II Compliant', status: 'Compliant' },
                  { name: 'GDPR / CCPA Data Protection', status: 'Compliant' },
                  { name: 'Industry-Standard Encryption', status: 'Active' }
                ].map(item => (
                  <div key={item.name} className="flex items-center justify-between p-4 bg-slate-50 border border-slate-200 rounded-xl group/item">
                    <span className="text-xs font-black uppercase tracking-widest">{item.name}</span>
                    <span className={`px-2 py-1 rounded-md text-[8px] font-black uppercase tracking-widest ${item.status === 'Compliant' || item.status === 'Active' ? 'bg-green-100 text-green-600' : 'bg-blue-100 text-blue-600'}`}>
                      {item.status}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-foreground text-white rounded-[2rem] p-8 shadow-pop space-y-6">
              <h3 className="text-xl font-black uppercase tracking-widest flex items-center gap-3">
                <Database size={20} className="text-secondary" /> System Operations
              </h3>
              <div className="space-y-6">
                <div className="p-4 bg-white/5 border border-white/10 rounded-xl">
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-[10px] font-black uppercase tracking-widest text-white/40">Uptime Reliability</span>
                    <span className="text-[10px] font-black uppercase tracking-widest text-secondary">99.9% SLI</span>
                  </div>
                  <div className="h-1.5 w-full bg-white/10 rounded-full overflow-hidden">
                    <motion.div 
                      initial={{ width: 0 }}
                      animate={{ width: '99.9%' }}
                      className="h-full bg-secondary"
                    />
                  </div>
                </div>
                <div className="p-4 bg-white/5 border border-white/10 rounded-xl">
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-[10px] font-black uppercase tracking-widest text-white/40">Encryption Coverage</span>
                    <span className="text-[10px] font-black uppercase tracking-widest text-primary">100% End-to-End</span>
                  </div>
                  <div className="h-1.5 w-full bg-white/10 rounded-full overflow-hidden">
                     <motion.div 
                      initial={{ width: 0 }}
                      animate={{ width: '100%' }}
                      className="h-full bg-primary"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="space-y-8">
            <h2 className="text-2xl font-black uppercase tracking-widest italic ml-4">Core Protections</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {securityFeatures.map(feature => (
                <div key={feature.title} className="bg-white border-2 border-foreground rounded-2xl p-6 shadow-pop-sm group hover:-translate-y-1 transition-all">
                  <div className="p-3 bg-slate-50 border border-slate-100 rounded-xl w-fit mb-4 group-hover:scale-110 transition-transform">
                    {feature.icon}
                  </div>
                  <h4 className="font-heading font-black text-xs uppercase tracking-widest mb-2">{feature.title}</h4>
                  <p className="text-[10px] font-bold text-muted-foreground leading-relaxed uppercase tracking-wider">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Security;
