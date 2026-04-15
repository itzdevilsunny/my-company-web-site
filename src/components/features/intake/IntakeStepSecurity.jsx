import React from 'react';
import { ShieldAlert } from 'lucide-react';

const IntakeStepSecurity = ({ formData, setFormData, errors, sentCode, verificationCode, setVerificationCode }) => {
  return (
    <section className="bg-white border-4 border-foreground rounded-[2.5rem] p-12 shadow-pop relative overflow-hidden">
      <h2 className="text-3xl font-heading font-black mb-10 flex items-center gap-4">
        <span className="p-3 bg-secondary text-white rounded-2xl shadow-pop-sm">5</span>
        Security Gateway / अंतिम सुरक्षा
      </h2>
      
      <div className="space-y-10">
        <div className="space-y-4">
          <label className="font-heading font-black text-xs uppercase text-muted-foreground tracking-widest">Additional Instructions / अतिरिक्त जानकारी</label>
          <textarea 
            placeholder="Any specific fonts, colors, or technical needs not mentioned earlier..."
            className="w-full bg-muted/20 border-2 border-foreground rounded-2xl px-6 py-4 font-sans font-bold shadow-pop hover:shadow-pop-active focus:shadow-none outline-none min-h-[100px]"
            value={formData.additionalRequirements}
            onChange={(e) => setFormData({...formData, additionalRequirements: e.target.value})}
          />
        </div>

        <div className="space-y-6">
          <label className="font-heading font-black text-xs uppercase text-muted-foreground tracking-widest">Preferred Contact / संपर्क माध्यम</label>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { id: 'whatsapp', label: 'WhatsApp' },
              { id: 'call', label: 'Phone Call' },
              { id: 'email', label: 'Email Only' }
            ].map(m => (
              <button
                key={m.id}
                onClick={() => setFormData({...formData, contactMethod: m.id})}
                className={`p-5 border-2 rounded-2xl font-heading font-black uppercase tracking-widest text-xs transition-all ${formData.contactMethod === m.id ? 'bg-secondary text-white border-secondary shadow-pop-active' : 'bg-muted/10 border-foreground shadow-pop hover:shadow-pop-active'}`}
              >
                {m.label}
              </button>
            ))}
          </div>
        </div>

        <div className="mt-12 p-8 bg-muted/30 border-4 border-dashed border-foreground/20 rounded-[2.5rem] relative">
            <div className="flex items-center gap-4 mb-6">
              <ShieldAlert className="text-secondary" />
              <h3 className="font-heading font-black text-sm uppercase tracking-[0.2em]">Identify Verification Gateway</h3>
            </div>
            <p className="text-xs font-bold opacity-60 mb-6 leading-relaxed">
              To maintain project transparency and prevent bot submissions, please enter the synchronization code below. 
              <br /><span className="text-secondary">SYSTEM CODE: {sentCode}</span>
            </p>
            <input 
              type="text"
              maxLength={6}
              placeholder="ENTER 6-DIGIT CODE"
              className={`w-full bg-white border-4 text-center text-4xl tracking-[0.5em] py-5 font-black rounded-2xl outline-none transition-all ${errors.verification ? 'border-secondary shadow-pop' : 'border-foreground shadow-pop hover:shadow-pop-active focus:shadow-none'}`}
              value={verificationCode}
              onChange={(e) => setVerificationCode(e.target.value.replace(/\D/g, ''))}
            />
            {errors.verification && <p className="text-secondary text-xs font-black mt-4 text-center px-4 animate-bounce">{errors.verification}</p>}
        </div>

        {/* Anti-Bot Honeypot */}
        <div style={{ display: 'none', visibility: 'hidden' }}>
            <input 
              type="text" 
              name="website_url" 
              value={formData.website_url} 
              onChange={(e) => setFormData({...formData, website_url: e.target.value})} 
            />
        </div>
      </div>
    </section>
  );
};

export default IntakeStepSecurity;
