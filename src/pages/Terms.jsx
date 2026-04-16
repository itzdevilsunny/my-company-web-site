import React from 'react';
import { motion } from 'framer-motion';
import { ArrowLeft, Gavel, Mail, MapPin, Hash, CheckCircle2, AlertCircle } from 'lucide-react';
import { Link } from 'react-router-dom';

const Terms = () => {
  const sections = [
    {
      id: 'acceptance',
      title: 'A. Acceptance of Terms',
      content: `By accessing or using the Zorvia website and services, you agree to be bound by these Terms and Conditions. Our services are provided by Zorvia Digital, architected to meet enterprise standards. If you do not agree with these terms, please discontinue use of our portal immediately.`
    },
    {
      id: 'scope',
      title: 'B. Scope of Services',
      content: `Zorvia Digital provides professional digital solutions including, but not limited to:
      • Web Development: Custom architectural builds and frontend engineering.
      • UI/UX Design: User-centric interface design and experience mapping.
      • App Development: Mobile and cross-platform application deployment.
      • Landing Page Design: High-conversion, performance-optimized digital entry-points.`
    },
    {
      id: 'responsibilities',
      title: 'C. User Responsibilities',
      content: `Users must utilize our services legally and responsibly. You agree not to:
      • Misuse our infrastructure or reverse-engineer development artifacts.
      • Upload harmful content or malicious code.
      • Violate any applicable local or international laws while utilizing our digital nexus.`
    },
    {
      id: 'payments',
      title: 'D. Payment Terms & Refunds',
      content: `Standard financial protocols for all projects:
      • Advance Payment: A 50% non-refundable advance payment is required to initiate any architectural node.
      • Refund Rules: Refunds are only available if project work has not commenced. Once design or development cycles have initiated, the advance payment is consumed.
      • Project Timelines: Estimated delivery schedules are provided in the specific Statement of Work (SOW). Timelines are subject to prompt client feedback.
      • Revision Limits: All projects include up to 3 rounds of revisions. Additional revisions may incur supplemental architectural fees.`
    },
    {
      id: 'ownership',
      title: 'E. Intellectual Property & Ownership',
      content: `We believe in client sovereignty. Upon final payment and project completion, the Client owns the final paid project, including all custom assets and source code developed for that specific mission. Zorvia Digital retains the right to display non-sensitive project artifacts in our professional portfolio unless a specific white-label agreement is in place.`
    },
    {
      id: 'cancellation',
      title: 'F. Cancellation Policy',
      content: `Either party may cancel a project with written notice. In the event of client cancellation, all work performed up to the cancellation date will be billed, and any remaining balance of the advance payment will be forfeited to cover resource allocation costs.`
    },
    {
      id: 'liability',
      title: 'G. Limitation of Liability',
      content: `Zorvia Digital shall not be liable for any indirect or consequential damages resulting from project delays or the use of delivered software. Our total liability for any claim is capped at the amount paid by the client for the specific project node.`
    },
    {
      id: 'changes',
      title: 'H. Changes to Terms',
      content: `We reserve the right to update these terms at any time. Your continued use of the platform after updates constitutes acceptance of the new framework.`
    }
  ];

  return (
    <div className="min-h-screen bg-white pt-32 pb-20 selection:bg-primary/10 selection:text-primary">
      <div className="container mx-auto px-6 lg:px-24">
        
        {/* Simple Header */}
        <div className="max-w-3xl mx-auto mb-16">
          <Link 
            to="/" 
            className="inline-flex items-center gap-2 text-[10px] font-black uppercase tracking-widest text-muted-foreground hover:text-primary mb-8 transition-colors"
          >
            <ArrowLeft size={14} /> Return to HQ
          </Link>
          
          <motion.div 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="space-y-4"
          >
            <div className="flex items-center gap-3">
               <span className="text-[10px] font-black uppercase tracking-widest text-primary bg-primary/5 px-2 py-1 rounded">
                 Institutional Rules
               </span>
               <span className="text-[10px] font-black uppercase tracking-widest text-muted-foreground opacity-40">
                 <Hash size={10} className="inline mr-1" /> v2.7.0
               </span>
            </div>
            <h1 className="text-5xl md:text-7xl font-heading font-black tracking-tight text-foreground uppercase italic border-b-4 border-foreground pb-6">
              Terms & <span className="text-primary">Conditions.</span>
            </h1>
            <p className="text-lg font-bold text-muted-foreground leading-relaxed italic">
              Defining the boundaries of project excellence.
            </p>
          </motion.div>
        </div>

        {/* Content Stream */}
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
                    <Gavel size={16} className="text-primary" />
                  </div>
                  {section.title}
                </h2>
                <div className="text-xl font-medium text-slate-600 leading-relaxed whitespace-pre-line">
                  {section.content}
                </div>
              </motion.section>
            ))}
          </div>

          {/* Quick Support Section */}
          <section className="mt-24 pt-16 border-t-2 border-slate-100 space-y-8 text-center">
            <h2 className="text-2xl font-black uppercase italic">Need Clarification?</h2>
            <div className="flex justify-center gap-6">
               <div className="flex items-center gap-4 p-6 bg-slate-50 rounded-2xl border border-slate-200">
                  <Mail className="text-primary" size={24} />
                  <p className="font-bold">legal@zorvia.tech</p>
               </div>
               <div className="flex items-center gap-4 p-6 bg-slate-50 rounded-2xl border border-slate-200">
                  <CheckCircle2 className="text-secondary" size={24} />
                  <p className="font-bold italic">Bengaluru, India</p>
               </div>
            </div>
          </section>

          {/* Bottom Metatada */}
          <div className="mt-24 py-12 border-t-4 border-foreground flex justify-between items-center text-[10px] font-black uppercase tracking-[0.3em] text-muted-foreground">
             <p>© 2026 Zorvia Digital Bengaluru</p>
             <div className="flex gap-8">
               <Link to="/privacy" className="hover:text-primary transition-colors">Privacy Policy</Link>
               <Link to="/security" className="hover:text-primary transition-colors">Security Profile</Link>
             </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Terms;
