import React from 'react';
import { motion } from 'framer-motion';
import { ArrowLeft, ShieldCheck, Mail, MapPin, Hash, Database, Lock } from 'lucide-react';
import { Link } from 'react-router-dom';

const Privacy = () => {
  const sections = [
    {
      id: 'introduction',
      title: 'A. Introduction',
      content: `This Privacy Policy explains how Zorvia Digital ("Company") collects, uses, and protects your information. We are committed to ensuring that your project data and personal information are protected in accordance with the Digital Personal Data Protection (DPDP) Act, 2023 of India.`
    },
    {
      id: 'collection',
      title: 'B. Information You Collect',
      content: `We collect specific information required to architect and deliver your digital solutions:
      • Personal Identity: Name, email address, and phone number.
      • Project Requirements: Detailed specifications, brand assets, and technical documentation provided by the client.
      • Technical Data: IP address, cookies, and browser type for security and performance optimization.`
    },
    {
      id: 'usage',
      title: 'C. How You Use Data',
      content: `Your data is processed strictly for the following operational purposes:
      • Communication: Maintaining active uplinks regarding project status.
      • Project Delivery: Utilizing requirements to build and deploy digital products.
      • Billing: Processing financial transactions and tax compliance.
      • System Improvement: Optimizing our internal design and development workflows.`
    },
    {
      id: 'confidentiality',
      title: 'D. Confidentiality Assurance',
      content: `We recognize the sensitivity of client projects. Zorvia Digital provides a formal Confidentiality Assurance for all client projects. We do not disclose, share, or sell your proprietary project requirements, source code, or internal designs to any unauthorized third parties. All internal architects are bound by strict Non-Disclosure Agreements (NDAs).`
    },
    {
      id: 'data-protection',
      title: 'E. Data Protection',
      content: `We implement enterprise-grade security to safeguard your data:
      • Encryption: AES-256 encryption for data at rest and TLS 1.3 for data in transit.
      • Access Control: "Need-to-know" access protocols for project documentation.
      • Secure Servers: Hardened infrastructure with regular vulnerability assessments.`
    },
    {
      id: 'third-party',
      title: 'F. Third-Party Services',
      content: `We utilize trusted industry providers to facilitate our operations:
      • Hosting Providers: Secure cloud infrastructure for development and staging.
      • Payment Gateways: PCI-DSS compliant processors for secure billing.
      • Analytics Tools: Anonymized traffic analysis for portal optimization.`
    },
    {
      id: 'rights',
      title: 'G. User Rights',
      content: `Clients hold sovereign rights over their digital personal data:
      • Request Deletion: You may request the removal of your personal information from our active databases.
      • Update Information: You can correct inaccuracies in your contact or project profile.
      • Opt-Out: You may withdraw consent for optional marketing communications at any time.`
    },
    {
      id: 'contact',
      title: 'H. Contact Information',
      content: `For privacy-related inquiries or to exercise your rights, contact our Data Protection Office:
      • Email: privacy@zorvia.tech
      • Location: Bengaluru Node, India`
    }
  ];

  return (
    <div className="min-h-screen bg-white pt-32 pb-20 selection:bg-secondary/10 selection:text-secondary">
      <div className="container mx-auto px-6 lg:px-24">
        
        {/* Simple Header */}
        <div className="max-w-3xl mx-auto mb-16">
          <Link 
            to="/" 
            className="inline-flex items-center gap-2 text-[10px] font-black uppercase tracking-widest text-muted-foreground hover:text-secondary mb-8 transition-colors"
          >
            <ArrowLeft size={14} /> Return to HQ
          </Link>
          
          <motion.div 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="space-y-4"
          >
            <div className="flex items-center gap-3">
               <span className="text-[10px] font-black uppercase tracking-widest text-secondary bg-secondary/5 px-2 py-1 rounded">
                 Privacy Framework
               </span>
               <span className="text-[10px] font-black uppercase tracking-widest text-muted-foreground opacity-40">
                 <Hash size={10} className="inline mr-1" /> v2.7.0
               </span>
            </div>
            <h1 className="text-5xl md:text-7xl font-heading font-black tracking-tight text-foreground uppercase italic border-b-4 border-foreground pb-6">
               Privacy <span className="text-secondary">Policy.</span>
            </h1>
            <p className="text-lg font-bold text-muted-foreground leading-relaxed italic">
               Confidentiality and integrity in every architectural node.
            </p>
          </motion.div>
        </div>

        {/* Long Form Text Content */}
        <div className="max-w-3xl mx-auto">
          <div className="space-y-16">
            {sections.map((section) => (
              <motion.section 
                key={section.id}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                className="space-y-6"
              >
                <h2 className="text-2xl md:text-3xl font-heading font-black uppercase tracking-tight text-foreground flex items-center gap-3">
                  <div className="w-8 h-8 bg-slate-50 border border-slate-200 rounded flex items-center justify-center">
                    {section.id === 'confidentiality' ? <Lock size={16} className="text-secondary" /> : <Database size={16} className="text-secondary" />}
                  </div>
                  {section.title}
                </h2>
                <div className="text-xl font-medium text-slate-600 leading-relaxed whitespace-pre-line">
                  {section.content}
                </div>
              </motion.section>
            ))}
          </div>

          {/* Contact Section Overlay */}
          <section className="mt-24 pt-16 border-t-2 border-slate-100 space-y-8">
            <h2 className="text-2xl font-black uppercase italic">Direct Uplink</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
               <div className="flex items-center gap-4 p-6 bg-slate-50 rounded-2xl border border-slate-200">
                  <Mail className="text-secondary" size={24} />
                  <div>
                    <p className="text-[10px] font-black uppercase tracking-widest opacity-40">Privacy Office</p>
                    <p className="font-bold">privacy@zorvia.tech</p>
                  </div>
               </div>
               <div className="flex items-center gap-4 p-6 bg-slate-50 rounded-2xl border border-slate-200">
                  <ShieldCheck className="text-secondary" size={24} />
                  <div>
                    <p className="text-[10px] font-black uppercase tracking-widest opacity-40">Status</p>
                    <p className="font-bold">DPDP Compliant (India)</p>
                  </div>
               </div>
            </div>
          </section>

          {/* Bottom Metatada */}
          <div className="mt-24 py-12 border-t-4 border-foreground flex justify-between items-center text-[10px] font-black uppercase tracking-[0.3em] text-muted-foreground">
             <p>© 2026 Zorvia Digital Bengaluru</p>
             <div className="flex gap-8">
               <Link to="/terms" className="hover:text-secondary transition-colors">Terms & Conditions</Link>
               <Link to="/security" className="hover:text-secondary transition-colors">Security Profile</Link>
             </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Privacy;
