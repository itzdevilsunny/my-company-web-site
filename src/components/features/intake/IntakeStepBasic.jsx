import React from 'react';
import { AlertCircle } from 'lucide-react';

const IntakeStepBasic = ({ formData, setFormData, errors }) => {
  return (
    <section className="bg-white border-4 border-foreground rounded-[2.5rem] p-12 shadow-pop relative overflow-hidden">
      <div className="absolute top-0 right-0 w-40 h-40 bg-primary/5 -mr-20 -mt-20 rounded-full" />
      <h2 className="text-3xl font-heading font-black mb-10 flex items-center gap-4">
        <span className="p-3 bg-primary text-white rounded-2xl shadow-pop-sm">1</span>
        Basic Details / बुनियादी जानकारी
      </h2>
      
      <div className="space-y-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="space-y-4">
              <label className="font-heading font-black text-xs uppercase text-muted-foreground tracking-widest">Full Name / पूरा नाम</label>
              <input 
                type="text"
                placeholder="Your Name"
                className={`w-full bg-muted/20 border-2 rounded-xl px-6 py-4 font-sans font-bold transition-all outline-none ${errors.name ? 'border-secondary shadow-pop' : 'border-foreground shadow-pop hover:shadow-pop-active focus:shadow-none'}`}
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
                className={`w-full bg-muted/20 border-2 rounded-xl px-6 py-4 font-sans font-bold transition-all outline-none ${errors.email ? 'border-secondary shadow-pop' : 'border-foreground shadow-pop hover:shadow-pop-active focus:shadow-none'}`}
                value={formData.email}
                onChange={(e) => setFormData({...formData, email: e.target.value})}
              />
              {errors.email && <p className="text-secondary text-xs font-bold mt-1 flex items-center gap-2"><AlertCircle size={12}/> {errors.email}</p>}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="space-y-4">
              <label className="font-heading font-black text-xs uppercase text-muted-foreground tracking-widest">Phone Number / मोबाइल नंबर</label>
              <input 
                type="text"
                placeholder="+91 ···· ····"
                className={`w-full bg-muted/20 border-2 rounded-xl px-6 py-4 font-sans font-bold transition-all outline-none ${errors.phone ? 'border-secondary shadow-pop' : 'border-foreground shadow-pop hover:shadow-pop-active focus:shadow-none'}`}
                value={formData.phone}
                onChange={(e) => setFormData({...formData, phone: e.target.value})}
              />
              {errors.phone && <p className="text-secondary text-xs font-bold mt-1 flex items-center gap-2"><AlertCircle size={12}/> {errors.phone}</p>}
          </div>
          <div className="space-y-4">
              <label className="font-heading font-black text-xs uppercase text-muted-foreground tracking-widest">Address / पता</label>
              <textarea 
                placeholder="City, State, Country"
                className="w-full bg-muted/20 border-2 border-foreground rounded-xl px-6 py-4 font-sans font-bold shadow-pop hover:shadow-pop-active focus:shadow-none outline-none min-h-[46px]"
                value={formData.address}
                onChange={(e) => setFormData({...formData, address: e.target.value})}
              />
          </div>
        </div>
        
        {formData.intakeMode === 'update' && (
          <div className="pt-8 border-t-2 border-foreground/5 space-y-4">
              <label className="font-heading font-black text-xs uppercase text-secondary tracking-widest">What do you want to update? / आप क्या अपडेट करना चाहते हैं?</label>
              <textarea 
                placeholder="Describe your changes..."
                className={`w-full bg-white border-4 rounded-2xl px-6 py-4 font-sans font-bold transition-all outline-none min-h-[150px] ${errors.updateNote ? 'border-secondary shadow-pop' : 'border-foreground shadow-pop hover:shadow-pop-active focus:shadow-none'}`}
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
