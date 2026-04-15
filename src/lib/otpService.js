import emailjs from '@emailjs/browser';

/**
 * Zorvia Intelligence: Unified Email OTP Synchronization Service
 * Bypassing Supabase natively using EmailJS for guaranteed delivery
 */

let verificationStore = {
  email: null,
  otp: null,
  expiresAt: null
};

export const otpService = {
  /**
   * Generates and Sends OTP via EmailJS
   */
  sendEmailOtp: async (email) => {
    try {
      // Generate a solid 6-digit OTP
      const generatedOtp = Math.floor(100000 + Math.random() * 900000).toString();
      
      // Store locally (expires in 10 minutes)
      verificationStore = {
        email: email.toLowerCase(),
        otp: generatedOtp,
        expiresAt: Date.now() + 10 * 60 * 1000
      };

      // Configuration for EmailJS (User must set these in .env)
      const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID || 'service_placeholder';
      const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID || 'template_placeholder';
      const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY || 'public_key_placeholder';
      
      const templateParams = {
        email: email,
        passcode: generatedOtp,
        time: new Date().toLocaleTimeString()
      };

      // Only attempt to send if a real public key is found to avoid crashes on placeholder
      if (publicKey && publicKey !== 'public_key_placeholder') {
          const response = await emailjs.send(serviceId, templateId, templateParams, {
              publicKey: publicKey
          });
          console.log("EmailJS Drop Success:", response.status, response.text);
      } else {
          console.warn(`[DEV MODE] EmailJS key missing. Simulated OTP sent: ${generatedOtp}`);
      }
      
      return { data: { success: true }, error: null };
    } catch (error) {
      console.error("EmailJS Error:", error);
      return { data: null, error: { message: "Failed to dispatch verification code via EmailJS." } };
    }
  },

  /**
   * Verifies the OTP code locally without backend
   */
  verifyOtp: async (email, token) => {
    const trimmedToken = (token || '').toString().trim();
    const targetEmail = (email || '').toString().trim().toLowerCase();

    if (
      verificationStore.email === targetEmail &&
      verificationStore.otp === trimmedToken &&
      verificationStore.expiresAt > Date.now()
    ) {
      // Clear store to prevent replay attacks
      verificationStore = { email: null, otp: null, expiresAt: null };
      return { data: { success: true }, error: null };
    }
    
    if (verificationStore.expiresAt && verificationStore.expiresAt <= Date.now()) {
      return { data: null, error: { message: "Verification code has expired." } };
    }

    return { data: null, error: { message: "INVALID AUTHENTICATION TOKEN." } };
  }
};
