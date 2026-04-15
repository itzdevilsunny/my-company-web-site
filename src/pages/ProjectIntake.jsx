import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Send, ArrowRight, ArrowLeft, CheckCircle2, AlertCircle } from 'lucide-react';
import AnimatedText from '../components/ui/AnimatedText';
import { supabase } from '../lib/supabaseClient';
import Magnetic from '../components/ui/Magnetic';
import { themes } from '../data/themes';

// Step Components
import IntakeStepBasic from '../components/features/intake/IntakeStepBasic';
import IntakeStepProject from '../components/features/intake/IntakeStepProject';
import IntakeStepPricing from '../components/features/intake/IntakeStepPricing';
import IntakeStepDesign from '../components/features/intake/IntakeStepDesign';
import IntakeStepSecurity from '../components/features/intake/IntakeStepSecurity';
import IntakeSuccess from '../components/features/intake/IntakeSuccess';

const ProjectIntake = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const totalSteps = 5;
  const [isVerified, setIsVerified] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [sentCode, setSentCode] = useState('');
  const [verificationCode, setVerificationCode] = useState('');
  const [errors, setErrors] = useState({});

  const [formData, setFormData] = useState({
    intakeMode: 'new', // 'new' or 'update'
    name: '',
    email: '',
    phone: '',
    address: '',
    updateNote: '',
    projectType: '',
    projectDescription: '',
    timeline: '',
    pricingPlan: '',
    designPreference: '',
    hasReference: 'no',
    referenceUrl: '',
    website_url: '',
    additionalRequirements: '',
    contactMethod: 'whatsapp',
    budget: 'entry'
  });

  useEffect(() => {
    const savedProgress = localStorage.getItem('zorvia_intake_v3_progress');
    const selectedTheme = localStorage.getItem('zorvia_selected_theme');
    
    if (savedProgress) {
        const parsed = JSON.parse(savedProgress);
        // If we came from theme selection page, override the preference
        if (selectedTheme) {
          parsed.designPreference = selectedTheme;
          localStorage.removeItem('zorvia_selected_theme');
        }
        setFormData(parsed);
    } else if (selectedTheme) {
        setFormData(prev => ({ ...prev, designPreference: selectedTheme }));
        localStorage.removeItem('zorvia_selected_theme');
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('zorvia_intake_v3_progress', JSON.stringify(formData));
  }, [formData]);

  const generateCode = () => {
    const code = Math.floor(100000 + Math.random() * 900000).toString();
    setSentCode(code);
  };

  useEffect(() => {
    if (currentStep === totalSteps) {
      generateCode();
    }
  }, [currentStep]);

  const validateStep = (step) => {
    const newErrors = {};
    if (formData.intakeMode === 'new') {
        if (step === 1) {
            if (!formData.name) newErrors.name = "Architect Identity Required.";
            if (!formData.email || !/\S+@\S+\.\S+/.test(formData.email)) newErrors.email = "Valid Communication Protocol Required.";
            if (!formData.phone) newErrors.phone = "Secure Line Required.";
        }
        if (step === 2) {
            if (!formData.projectType) newErrors.projectType = "Specify Target Architecture.";
            if (!formData.projectDescription) newErrors.projectDescription = "Provide System Blueprint Overview.";
        }
    } else {
        if (step === 1) {
            if (!formData.email) newErrors.email = "Identity Hash Required.";
            if (!formData.updateNote) newErrors.updateNote = "Update Package Cannot Be Empty.";
        }
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleNext = () => {
    if (validateStep(currentStep)) {
      setCurrentStep(prev => prev + 1);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const handleBack = () => {
    setCurrentStep(prev => prev - 1);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleSubmit = async () => {
    if (formData.website_url) {
      setErrors({ global: "Bot detection triggered. Access denied." });
      return;
    }
    if (verificationCode !== sentCode) {
      setErrors({ verification: "INVALID AUTHENTICATION TOKEN." });
      return;
    }
    
    setIsSubmitting(true);
    setErrors({});
    
    try {
      if (formData.intakeMode === 'new') {
        const browserInfo = `
Browser: ${navigator.userAgent}
Language: ${navigator.language}
Platform: ${navigator.platform}
Screen: ${window.screen.width}x${window.screen.height}
        `.trim();

        const { error } = await supabase
          .from('project_inquiries')
          .insert([{
            name: formData.name,
            email: formData.email,
            phone: formData.phone,
            address: formData.address,
            project_type: formData.projectType,
            project_description: formData.projectDescription,
            project_timeline: formData.timeline,
            pricing_plan: formData.pricingPlan,
            aesthetic: formData.designPreference, // Mapping to aesthetic column
            reference_url: formData.referenceUrl,
            additional_requirements: `
${formData.additionalRequirements}

--- SYSTEM_METADATA ---
${browserInfo}
            `.trim(),
            contact_method: formData.contactMethod,
            budget: formData.budget,
            timeline: formData.timeline // Sending to both timeline columns for safety
          }]);
        
        if (error) throw error;
      } else {
        const { error } = await supabase
          .from('strategic_updates')
          .insert([{
            email: formData.email,
            update_note: formData.updateNote
          }]);
        
        if (error) throw error;
      }

      console.log('Strategy Synchronized with Cloud');
      localStorage.removeItem('zorvia_intake_v3_progress');
      setIsSuccess(true);
    } catch (err) {
      console.error('Supabase Sync Error:', err);
      setErrors({ global: "Technological synchronization failed. Please verify your connection and retry. If this persists, our engineering team has been notified." });
    } finally {
      setIsSubmitting(false);
    }
  };

  const SwitchMode = (mode) => {
    setFormData(prev => ({ ...prev, intakeMode: mode }));
    setCurrentStep(1);
    setErrors({});
  };

  if (isSuccess) {
    return <IntakeSuccess formData={formData} />;
  }

  return (
    <div className="min-h-screen pt-40 pb-20 px-6 lg:px-24 bg-transparent">
      {/* Dynamic Progress Header */}
      <div className="max-w-4xl mx-auto mb-16 text-center relative z-20">
        <div className="flex justify-between items-center mb-8 px-4">
          {[1, 2, 3, 4, 5].map((step) => {
            if (formData.intakeMode === 'update' && step !== 1 && step !== 5) return null;
            return (
              <div key={step} className="flex flex-col items-center gap-3">
                <div className={`w-12 h-12 rounded-full border-4 flex items-center justify-center font-black transition-all ${currentStep === step ? 'bg-primary text-white border-primary scale-110 shadow-pop' : currentStep > step ? 'bg-primary/20 text-primary border-primary/20' : 'bg-muted text-muted-foreground border-foreground/10'}`}>
                  {currentStep > step ? <CheckCircle2 size={24} /> : step}
                </div>
                <span className={`text-[10px] uppercase font-black tracking-widest ${currentStep === step ? 'text-primary' : 'text-muted-foreground'}`}>
                  {step === 1 ? (formData.intakeMode === 'new' ? 'Basic' : 'Update') : step === 2 ? 'Project' : step === 3 ? 'Pricing' : step === 4 ? 'Design' : 'Verify'}
                </span>
              </div>
            );
          })}
          {/* Progress bar line background */}
          <div className="absolute top-6 left-0 w-full h-1 bg-muted -z-10" />
          {/* Active progress bar line */}
          <motion.div 
            className="absolute top-6 left-0 h-1 bg-primary -z-10 origin-left"
            initial={{ scaleX: 0 }}
            animate={{ scaleX: formData.intakeMode === 'new' ? (currentStep - 1) / (totalSteps - 1) : (currentStep === 5 ? 1 : 0) }}
          />
        </div>

        <h1 className="text-5xl lg:text-7xl font-heading text-foreground tracking-tighter mb-4">
          <AnimatedText 
            text={formData.intakeMode === 'new' ? "Project Consultation" : "Strategy Update"} 
            className="block" 
            from="bottom" 
          />
          <span className="text-secondary italic">Step {currentStep === 5 ? 'Final' : currentStep}</span>
        </h1>
      </div>

      {/* Mode Toggle */}
      {currentStep === 1 && (
        <div className="max-w-4xl mx-auto mb-10 flex justify-center">
          <div className="bg-white border-2 border-foreground rounded-full p-1 shadow-pop flex gap-1">
             <button 
               onClick={() => SwitchMode('new')}
               className={`px-8 py-3 rounded-full text-xs font-black uppercase tracking-widest transition-all ${formData.intakeMode === 'new' ? 'bg-primary text-white shadow-sm' : 'hover:bg-muted/50'}`}
             >
               New Project
             </button>
             <button 
               onClick={() => SwitchMode('update')}
               className={`px-8 py-3 rounded-full text-xs font-black uppercase tracking-widest transition-all ${formData.intakeMode === 'update' ? 'bg-secondary text-white shadow-sm' : 'hover:bg-muted/50'}`}
             >
               Send Update
             </button>
          </div>
        </div>
      )}

      {/* Wizard Form Content */}
      <div className="max-w-4xl mx-auto">
        <AnimatePresence mode="wait">
          <motion.div
            key={`${formData.intakeMode}-${currentStep}`}
            initial={{ x: 20, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: -20, opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            {currentStep === 1 && <IntakeStepBasic formData={formData} setFormData={setFormData} errors={errors} />}
            {currentStep === 2 && <IntakeStepProject formData={formData} setFormData={setFormData} errors={errors} />}
            {currentStep === 3 && <IntakeStepPricing formData={formData} setFormData={setFormData} errors={errors} />}
            {currentStep === 4 && <IntakeStepDesign formData={formData} setFormData={setFormData} errors={errors} />}
            {currentStep === 5 && (
              <IntakeStepSecurity 
                formData={formData} 
                setFormData={setFormData} 
                errors={errors} 
                sentCode={sentCode}
                verificationCode={verificationCode}
                setVerificationCode={setVerificationCode}
              />
            )}

            {errors.global && (
              <motion.div 
                initial={{ scale: 0.9, opacity: 0 }} 
                animate={{ scale: 1, opacity: 1 }}
                className="mt-10 p-4 bg-secondary/10 border-2 border-secondary text-secondary font-bold text-sm rounded-xl flex items-center gap-4"
              >
                <AlertCircle /> {errors.global}
              </motion.div>
            )}

            {/* Navigation Buttons */}
            <div className="flex justify-between items-center mt-20 gap-8">
              {currentStep > 1 && (
                <Magnetic strength={0.2}>
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={handleBack}
                    className="flex items-center gap-3 px-12 py-5 bg-white border-4 border-foreground rounded-full font-black text-sm uppercase shadow-pop hover:shadow-pop-active transition-all group"
                  >
                    <ArrowLeft size={18} strokeWidth={3} className="group-hover:-translate-x-1 transition-transform" />
                    Back / वापस
                  </motion.button>
                </Magnetic>
              )}
              
              <div className="flex-grow" />

              {currentStep < totalSteps ? (
                <Magnetic strength={0.3}>
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={handleNext}
                    className="flex items-center gap-3 px-14 py-5 bg-foreground text-white border-4 border-foreground rounded-full font-black text-sm uppercase shadow-pop hover:shadow-pop-active transition-all group"
                  >
                    Continue / आगे बढ़ें
                    <ArrowRight size={18} strokeWidth={3} className="group-hover:translate-x-1 transition-transform" />
                  </motion.button>
                </Magnetic>
              ) : (
                <Magnetic strength={0.5}>
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={handleSubmit}
                    disabled={isSubmitting}
                    className="flex items-center gap-4 px-20 py-6 bg-secondary text-white border-4 border-foreground rounded-full font-black text-2xl uppercase shadow-pop-lg hover:shadow-pop-active transition-all disabled:opacity-50 group"
                  >
                    {isSubmitting ? 'Architecting...' : 'Sync Strategy / सिंक करें'}
                    <Send size={28} strokeWidth={3} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                  </motion.button>
                </Magnetic>
              )}
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
};

export default ProjectIntake;
