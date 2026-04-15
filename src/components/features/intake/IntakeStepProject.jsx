import React from 'react';

const IntakeStepProject = ({ formData, setFormData, errors }) => {
  return (
    <section className="bg-white border-2 border-secondary rounded-2xl p-6 shadow-pop relative overflow-hidden">
      <div className="absolute bottom-0 left-0 w-40 h-40 bg-secondary/5 -ml-20 -mb-20 rounded-full" />
      <h2 className="text-xl font-heading font-black mb-6 flex items-center gap-4">
        <span className="p-2 bg-secondary text-white rounded-xl shadow-pop-sm">2</span>
        Project Requirements / प्रोजेक्ट विवरण
      </h2>

      <div className="space-y-8">
        <div className="space-y-4">
          <label className="font-heading font-black text-xs uppercase text-muted-foreground tracking-widest">
            Project Type / प्रोजेक्ट का प्रकार?
          </label>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {['Landing Page', 'Business Site', 'Portfolio', 'E-commerce', 'Web App', 'Mobile App', 'Other'].map((type) => (
              <button
                key={type}
                type="button"
                onClick={() => setFormData({...formData, projectType: type})}
                className={`p-4 border-2 rounded-xl font-heading font-black text-[10px] uppercase transition-all ${formData.projectType === type ? 'bg-secondary text-white border-secondary shadow-pop-active' : 'bg-muted/10 border-foreground shadow-pop hover:shadow-pop-active'}`}
              >
                {type}
              </button>
            ))}
          </div>
          {errors.projectType && <p className="text-secondary text-xs font-bold mt-1">{errors.projectType}</p>}
        </div>

        <div className="space-y-4">
          <label className="font-heading font-black text-xs uppercase text-muted-foreground tracking-widest">
            Detailed Requirement / प्रोजेक्ट के बारे में विस्तार से बताएं
          </label>
          <textarea 
            placeholder="Describe the modules, features, and functionality you need..."
            className={`w-full bg-muted/20 border-2 rounded-xl px-6 py-3 font-sans font-bold transition-all outline-none min-h-[150px] ${errors.projectDescription ? 'border-secondary shadow-pop' : 'border-foreground shadow-pop hover:shadow-pop-active focus:shadow-none'}`}
            value={formData.projectDescription}
            onChange={(e) => setFormData({...formData, projectDescription: e.target.value})}
          />
          {errors.projectDescription && <p className="text-secondary text-xs font-bold mt-1">{errors.projectDescription}</p>}
        </div>

        <div className="space-y-4">
          <label className="font-heading font-black text-xs uppercase text-muted-foreground tracking-widest">
            Required Completion / कितने दिनों में चाहिए?
          </label>
          <div className="flex flex-wrap gap-4">
            {['3-5 Days', '7 Days', '10-15 Days', '1 Month', 'Flexible'].map((t) => (
              <button
                key={t}
                type="button"
                onClick={() => setFormData({...formData, timeline: t})}
                className={`px-8 py-3 border-2 rounded-full font-heading font-black text-xs uppercase transition-all ${formData.timeline === t ? 'bg-secondary text-white border-secondary shadow-pop-active' : 'bg-muted/10 border-foreground shadow-pop hover:shadow-pop-active'}`}
              >
                {t}
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default IntakeStepProject;
