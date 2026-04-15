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
import { otpService } from '../lib/otpService';

const ProjectIntake = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const totalSteps = 5;
  const [isVerified, setIsVerified] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [isOtpSent, setIsOtpSent] = useState(false);
  const [isEmailVerified, setIsEmailVerified] = useState(false);
  const [verificationCode, setVerificationCode] = useState('');
  const [errors, setErrors] = useState({});

  const [formData, setFormData] = useState({
    intakeMode: 'new', // 'new' or 'update'
    name: '',
    email: '',
    phone: '',
    whatsapp: '',
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
    contactMethod: 'email',
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

  const validateStep = (step) => {
    const newErrors = {};
    if (formData.intakeMode === 'new') {
        if (step === 1) {
            if (!formData.name) newErrors.name = "Name Required.";
            if (!formData.email || !/\S+@\S+\.\S+/.test(formData.email)) newErrors.email = "Valid Email Required.";
            if (!formData.phone) newErrors.phone = "Phone Number Required.";
            if (!formData.whatsapp) newErrors.whatsapp = "WhatsApp Number Required.";
        }
        if (step === 2) {
            if (!formData.projectType) newErrors.projectType = "Specify Project Type.";
            if (!formData.projectDescription) newErrors.projectDescription = "Provide Project Description.";
        }
    } else {
        if (step === 1) {
            if (!formData.email) newErrors.email = "Email Required.";
            if (!formData.updateNote) newErrors.updateNote = "Update Note Cannot Be Empty.";
        }
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleNext = async () => {
    if (validateStep(currentStep)) {
      if (currentStep === 1 && !isEmailVerified) {
        if (!isOtpSent) {
          setIsSubmitting(true);
          const { error } = await otpService.sendEmailOtp(formData.email);
          setIsSubmitting(false);
          if (error) {
            setErrors({ global: error.message || "Failed to dispatch verification code." });
          } else {
            setIsOtpSent(true);
            setErrors({});
          }
          return;
        } else {
          setIsSubmitting(true);
          const { error } = await otpService.verifyOtp(formData.email, verificationCode);
          setIsSubmitting(false);
          if (error) {
            setErrors({ verification: "INVALID AUTHENTICATION TOKEN." });
            return;
          } else {
            setIsEmailVerified(true);
            setErrors({});
          }
        }
      }
      
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
            address: formData.address,
            project_type: formData.projectType,
            project_description: formData.projectDescription,
            project_timeline: formData.timeline,
            pricing_plan: formData.pricingPlan,
            aesthetic: formData.designPreference, // Mapping to aesthetic column
            reference_url: formData.referenceUrl,
            additional_requirements: `
Contact Info:
Phone: ${formData.phone || 'N/A'}
WhatsApp: ${formData.whatsapp || 'N/A'}

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

      console.log('Project Submitted Successfully to Cloud');
      localStorage.removeItem('zorvia_intake_v3_progress');
      setIsSuccess(true);
    } catch (err) {
      console.error('Supabase Sync Error:', err);
      setErrors({ global: "Submission failed. Please verify your connection and retry. If this persists, our engineering team has been notified." });
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
    <div className="min-h-screen bg-[#F8F9FA] pt-24 lg:pt-32 pb-20 px-4 lg:px-12 flex flex-col items-center">
      {/* Dynamic Progress Engine */}
      <div className="w-full max-w-4xl mb-12 lg:mb-24 flex flex-col items-center gap-8 lg:gap-12">
        <div className="flex flex-col items-center gap-4 text-center">
          <motion.div 
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            className="px-4 py-1.5 bg-primary text-white border-2 border-foreground rounded-full text-[10px] font-black uppercase tracking-widest shadow-pop-sm"
          >
            Project Setup
          </motion.div>
          <h1 className="text-4xl lg:text-7xl font-heading font-black tracking-tighter italic uppercase leading-none">
            {formData.intakeMode === 'new' ? 'Start Project' : 'Update Project'}
          </h1>
          <p className="text-[10px] lg:text-xs font-black uppercase tracking-[0.4em] text-muted-foreground opacity-60">Welcome to Zorvia</p>
        </div>

        <div className="w-full flex justify-between items-center relative gap-2">
           {/* Connecting Line */}
           <div className="absolute top-1/2 left-0 w-full h-1 lg:h-2 bg-foreground/5 -translate-y-1/2 z-0 rounded-full" />
           <motion.div 
             initial={{ width: 0 }}
             animate={{ width: `${((currentStep - 1) / (totalSteps - 1)) * 100}%` }}
             className="absolute top-1/2 left-0 h-1 lg:h-2 bg-primary -translate-y-1/2 z-0 rounded-full transition-all duration-500 shadow-[0_0_15px_rgba(59,130,246,0.5)]" 
           />

           {[1, 2, 3, 4, 5].map((step) => (
              <div key={step} className="relative z-10 flex flex-col items-center">
                 <motion.div 
                   animate={{ 
                     scale: currentStep === step ? 1.2 : 1,
                     backgroundColor: currentStep >= step ? '#3b82f6' : '#fff',
                     color: currentStep >= step ? '#fff' : '#000'
                   }}
                   className={`w-8 h-8 lg:w-16 lg:h-16 rounded-full border-2 lg:border-4 border-foreground flex items-center justify-center font-heading font-black text-xs lg:text-2xl shadow-pop transition-colors duration-500`}
                 >
                    {currentStep > step ? <CheckCircle2 size={window.innerWidth < 1024 ? 16 : 32} strokeWidth={3} /> : step}
                 </motion.div>
                 <span className={`hidden lg:block absolute -bottom-8 whitespace-nowrap text-[10px] font-black uppercase tracking-widest transition-opacity duration-300 ${currentStep === step ? 'opacity-100' : 'opacity-40'}`}>
                    {['Identity', 'Blueprint', 'Pricing', 'Design', 'Verify'][step-1]}
                 </span>
              </div>
           ))}
        </div>
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
            {currentStep === 1 && <IntakeStepBasic formData={formData} setFormData={setFormData} errors={errors} isOtpSent={isOtpSent} verificationCode={verificationCode} setVerificationCode={setVerificationCode} />}
            {currentStep === 2 && <IntakeStepProject formData={formData} setFormData={setFormData} errors={errors} />}
            {currentStep === 3 && <IntakeStepPricing formData={formData} setFormData={setFormData} errors={errors} />}
            {currentStep === 4 && <IntakeStepDesign formData={formData} setFormData={setFormData} errors={errors} />}
            {currentStep === 5 && (
              <IntakeStepSecurity 
                formData={formData} 
                setFormData={setFormData} 
                errors={errors} 
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
            <div className="flex flex-col sm:flex-row justify-between items-center mt-12 lg:mt-20 gap-4 lg:gap-8">
              {currentStep > 1 && (
                <Magnetic strength={0.2}>
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={handleBack}
                    className="w-full sm:w-auto flex items-center justify-center gap-3 px-8 lg:px-12 py-4 lg:py-5 bg-white border-4 border-foreground rounded-full font-black text-xs lg:text-sm uppercase shadow-pop hover:shadow-pop-active transition-all group"
                  >
                    <ArrowLeft size={16} strokeWidth={3} className="group-hover:-translate-x-1 transition-transform" />
                    Back / वापस
                  </motion.button>
                </Magnetic>
              )}
              
              <div className="hidden sm:block flex-grow" />

              {currentStep < totalSteps ? (
                <Magnetic strength={0.3}>
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={handleNext}
                    disabled={isSubmitting}
                    className="w-full sm:w-auto flex items-center justify-center gap-3 px-10 lg:px-14 py-4 lg:py-5 bg-foreground text-white border-4 border-foreground rounded-full font-black text-xs lg:text-sm uppercase shadow-pop hover:shadow-pop-active transition-all group disabled:opacity-50"
                  >
                    {isSubmitting ? 'Processing...' : (currentStep === 1 && !isEmailVerified) ? (isOtpSent ? 'Verify Code' : 'Send Verification') : 'Continue / आगे बढ़ें'}
                    {!isSubmitting && <ArrowRight size={16} strokeWidth={3} className="group-hover:translate-x-1 transition-transform" />}
                  </motion.button>
                </Magnetic>
              ) : (
                <Magnetic strength={0.5}>
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={handleSubmit}
                    disabled={isSubmitting}
                    className="w-full sm:w-auto flex items-center justify-center gap-4 px-10 lg:px-20 py-5 lg:py-6 bg-secondary text-white border-4 border-foreground rounded-full font-black text-xl lg:text-2xl uppercase shadow-pop-lg hover:shadow-pop-active transition-all disabled:opacity-50 group"
                  >
                    {isSubmitting ? 'Submitting...' : 'Submit / जमा करें'}
                    <Send size={24} strokeWidth={3} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
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
