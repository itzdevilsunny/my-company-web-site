import React from 'react';
import { AlertCircle, ShieldCheck } from 'lucide-react';

const IntakeStepBasic = ({ formData, setFormData, errors, isOtpSent, verificationCode, setVerificationCode }) => {
  return (
    <section className="bg-white border-[3px] border-foreground rounded-[2rem] p-8 shadow-pop relative overflow-hidden">
      <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 -mr-16 -mt-16 rounded-full" />
      <h2 className="text-2xl font-heading font-black mb-6 flex items-center gap-3">
        <span className="p-2 bg-primary text-white rounded-xl shadow-pop-sm">1</span>
        Identity & Verification / पहचान
      </h2>
      
      <div className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-4">
              <label className="font-heading font-black text-xs uppercase text-muted-foreground tracking-widest">Full Name / पूरा नाम</label>
              <input 
                type="text"
                placeholder="Your Name"
                disabled={isOtpSent}
                className={`w-full bg-muted/20 border-2 rounded-xl px-4 py-3 font-sans font-bold transition-all outline-none disabled:opacity-50 ${errors.name ? 'border-secondary shadow-pop' : 'border-foreground shadow-pop hover:shadow-pop-active focus:shadow-none'}`}
                value={formData.name}
                onChange={(e) => setFormData({...formData, name: e.target.value})}
              />
              {errors.name && <p className="text-secondary text-xs font-bold mt-1 flex items-center gap-2"><AlertCircle size={12}/> {errors.name}</p>}
          </div>
          <div className="space-y-4">
              <label className="font-heading font-black text-xs uppercase text-muted-foreground tracking-widest">Email Address / ईमेल पता</label>
              <input 
                type="email"
                placeholder="email@example.com"
                disabled={isOtpSent}
                className={`w-full bg-muted/20 border-2 rounded-xl px-4 py-3 font-sans font-bold transition-all outline-none disabled:opacity-50 ${errors.email ? 'border-secondary shadow-pop' : 'border-foreground shadow-pop hover:shadow-pop-active focus:shadow-none'}`}
                value={formData.email}
                onChange={(e) => setFormData({...formData, email: e.target.value})}
              />
              {errors.email && <p className="text-secondary text-xs font-bold mt-1 flex items-center gap-2"><AlertCircle size={12}/> {errors.email}</p>}
          </div>
          <div className="space-y-4">
              <label className="font-heading font-black text-xs uppercase text-muted-foreground tracking-widest">Phone Number / फ़ोन नंबर</label>
              <input 
                type="tel"
                placeholder="+91"
                disabled={isOtpSent}
                className={`w-full bg-muted/20 border-2 rounded-xl px-4 py-3 font-sans font-bold transition-all outline-none disabled:opacity-50 ${errors.phone ? 'border-secondary shadow-pop' : 'border-foreground shadow-pop hover:shadow-pop-active focus:shadow-none'}`}
                value={formData.phone || ''}
                onChange={(e) => setFormData({...formData, phone: e.target.value})}
              />
              {errors.phone && <p className="text-secondary text-xs font-bold mt-1 flex items-center gap-2"><AlertCircle size={12}/> {errors.phone}</p>}
          </div>
          <div className="space-y-4">
              <label className="font-heading font-black text-xs uppercase text-muted-foreground tracking-widest">WhatsApp Number / वट्सएप</label>
              <input 
                type="tel"
                placeholder="+91"
                disabled={isOtpSent}
                className={`w-full bg-muted/20 border-2 rounded-xl px-4 py-3 font-sans font-bold transition-all outline-none disabled:opacity-50 ${errors.whatsapp ? 'border-secondary shadow-pop' : 'border-foreground shadow-pop hover:shadow-pop-active focus:shadow-none'}`}
                value={formData.whatsapp || ''}
                onChange={(e) => setFormData({...formData, whatsapp: e.target.value})}
              />
              {errors.whatsapp && <p className="text-secondary text-xs font-bold mt-1 flex items-center gap-2"><AlertCircle size={12}/> {errors.whatsapp}</p>}
          </div>
        </div>

        {isOtpSent ? (
          <div className="mt-6 p-6 bg-muted/30 border-2 border-dashed border-foreground/20 rounded-[1.5rem] relative animate-in fade-in zoom-in duration-500">
            <div className="flex items-center gap-3 mb-3">
              <ShieldCheck className="text-primary" size={20} />
              <h3 className="font-heading font-black text-xs uppercase tracking-[0.2em]">Verify Email OTP</h3>
            </div>
            <p className="text-xs font-bold opacity-60 mb-4 leading-relaxed">
              We have dispatched a secure 6-digit code to your email. Please enter it below to confirm your identity.
            </p>
            <input 
              type="text"
              maxLength={6}
              placeholder="ENTER CODE"
              className={`w-full bg-white border-[3px] text-center text-3xl tracking-[0.5em] py-3 font-black rounded-xl outline-none transition-all ${errors.verification ? 'border-secondary shadow-pop' : 'border-foreground shadow-pop hover:shadow-pop-active focus:shadow-none'}`}
              value={verificationCode}
              onChange={(e) => setVerificationCode(e.target.value.replace(/\D/g, ''))}
            />
            {errors.verification && <p className="text-secondary text-xs font-black mt-3 text-center px-4 animate-bounce">{errors.verification}</p>}
          </div>
        ) : (
          <div className="space-y-4">
              <label className="font-heading font-black text-xs uppercase text-muted-foreground tracking-widest">Company / Address / पता</label>
              <textarea 
                placeholder="City, State, Country"
                className="w-full bg-muted/20 border-2 border-foreground rounded-xl px-4 py-3 font-sans font-bold shadow-pop hover:shadow-pop-active focus:shadow-none outline-none min-h-[46px]"
                value={formData.address}
                onChange={(e) => setFormData({...formData, address: e.target.value})}
              />
          </div>
        )}
        
        {formData.intakeMode === 'update' && (
          <div className="pt-6 border-t-2 border-foreground/5 space-y-4">
              <label className="font-heading font-black text-xs uppercase text-secondary tracking-widest">What do you want to update? / आप क्या अपडेट करना चाहते हैं?</label>
              <textarea 
                placeholder="Describe your changes..."
                disabled={isOtpSent}
                className={`w-full bg-white border-2 rounded-xl px-4 py-3 font-sans font-bold transition-all outline-none min-h-[120px] disabled:opacity-50 ${errors.updateNote ? 'border-secondary shadow-pop' : 'border-foreground shadow-pop hover:shadow-pop-active focus:shadow-none'}`}
                value={formData.updateNote}
                onChange={(e) => setFormData({...formData, updateNote: e.target.value})}
              />
              {errors.updateNote && <p className="text-secondary text-xs font-bold mt-1 flex items-center gap-2"><AlertCircle size={12}/> {errors.updateNote}</p>}
          </div>
        )}
      </div>
    </section>
  );
};

export default IntakeStepBasic;
