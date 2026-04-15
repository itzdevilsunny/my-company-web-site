import { supabase } from './supabaseClient';

/**
 * Zorvia Intelligence: Unified Email OTP Synchronization Service
 * Uses native Supabase Auth with custom Gmail SMTP configuration
 */
export const otpService = {
  /**
   * Sends OTP via Email using Supabase Auth
   */
  sendEmailOtp: async (email) => {
    const { data, error } = await supabase.auth.signInWithOtp({
      email,
      options: {
        shouldCreateUser: true,
      }
    });
    return { data, error };
  },

  /**
   * Verifies the OTP code
   */
  verifyOtp: async (email, token) => {
    const { data, error } = await supabase.auth.verifyOtp({
      email,
      token,
      type: 'email'
    });
    return { data, error };
  }
};
