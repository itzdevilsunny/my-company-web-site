import React from 'react';
import { motion } from 'framer-motion';
import { FileText, Scale, ShieldCheck, HelpCircle, ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';

const Terms = () => {
  const sections = [
    {
      id: '01',
      title: 'Agreement to Terms',
      icon: <Scale size={20} />,
      content: 'By accessing or using Zorvia services, you agree to be bound by these Terms of Service. If you do not agree, you must cease use of our platform immediately.'
    },
    {
      id: '02',
      title: 'Service Provision',
      icon: <FileText size={20} />,
      content: 'Zorvia provides digital product development, AI architectural consulting, and design services. Specific project scopes, timelines, and deliverables are defined in individual Project Invoices or Service Agreements.'
    },
    {
      id: '03',
      title: 'Intellectual Property',
      icon: <ShieldCheck size={20} />,
      content: 'Upon full payment for services, exclusive rights to the final deliverables are transferred to the client. Zorvia retains the right to display the work in its portfolio unless a written non-disclosure agreement (NDA) states otherwise.'
    },
    {
      id: '04',
      title: 'Liability & Warranty',
      icon: <HelpCircle size={20} />,
      content: 'Our services are provided "as is" without warranty of any kind. Zorvia shall not be liable for any indirect or consequential damages arising from the use of our digital products.'
    }
  ];

  return (
    <div className="min-h-screen bg-white pt-40 pb-20 px-6 lg:px-24">
      <div className="max-w-3xl mx-auto">
        <Link to="/" className="inline-flex items-center gap-2 text-[10px] font-black uppercase tracking-widest text-muted-foreground hover:text-primary mb-12 transition-colors">
          <ArrowLeft size={14} /> Back to Base
        </Link>
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <div className="flex items-center gap-3 mb-6">
             <span className="px-3 py-1 bg-primary/10 text-primary border border-primary/20 rounded-lg text-[9px] font-black uppercase tracking-widest">Compliance</span>
             <span className="text-[9px] font-black uppercase tracking-widest text-muted-foreground opacity-40">v2026.4.16</span>
          </div>

          <h1 className="text-6xl font-heading font-black tracking-tighter uppercase italic mb-12 leading-none">
            Terms of <span className="text-primary">Service.</span>
          </h1>
          
          <div className="space-y-16 font-sans">
            {sections.map(section => (
              <section key={section.id} className="space-y-4 group">
                <h2 className="text-xl font-black uppercase tracking-widest flex items-center gap-4 group-hover:translate-x-2 transition-transform duration-300">
                  <span className="text-slate-200 tabular-nums">{section.id} //</span>
                  <div className="p-2 bg-slate-50 border border-slate-200 rounded-xl">
                    {section.icon}
                  </div>
                  {section.title}
                </h2>
                <p className="text-lg font-bold text-muted-foreground leading-relaxed pl-14 lg:pl-20 border-l-4 border-slate-50">
                  {section.content}
                </p>
              </section>
            ))}
          </div>

          <div className="mt-20 p-8 bg-slate-50 border-2 border-foreground rounded-3xl shadow-pop flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="space-y-1">
              <p className="text-sm font-black uppercase tracking-widest">Questions regarding these terms?</p>
              <p className="text-xs font-bold text-muted-foreground uppercase tracking-widest">Our legal team is here to help.</p>
            </div>
            <Link to="/help-desk" className="px-8 py-4 bg-primary text-white border-2 border-foreground rounded-full font-black text-xs uppercase tracking-widest shadow-pop hover:shadow-none translate-all">
              Contact Support
            </Link>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Terms;
