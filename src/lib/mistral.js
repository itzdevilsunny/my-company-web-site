const MISTRAL_API_URL = 'https://api.mistral.ai/v1/chat/completions';
const API_KEY = import.meta.env.VITE_MISTRAL_API_KEY;

export const sendMessageToMistral = async (messages) => {
  if (!API_KEY) {
    console.error('Mistral API Key is missing');
    return { error: 'Mistral API Key is missing. Please check your .env file.' };
  }

  try {
    const response = await fetch(MISTRAL_API_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${API_KEY}`,
      },
      body: JSON.stringify({
        model: 'mistral-tiny', // or 'mistral-small', 'mistral-medium'
        messages: [
          {
            role: 'system',
            content: `You are Zorvia Architect, the lead AI concierge for Zorvia Studio. We are a high-end digital product & AI architecture firm based in India, specializing in future-proof ecosystems.
            
            Core Mandate:
            - Guide visitors Through our 'Zorvia Revolution'.
            - We architect Digital Products, AI Solutions, and Strategic Brand Identities.
            - We are based in Bhubaneswar, Odisha, India. Our global operations prioritize precision and high-energy design.
            
            Personality & Tone:
            - Enterprise-grade, sophisticated, yet high-energy (Sticker-Style aesthetic).
            - Bilingual: You are fluent in English and Hindi. If a user greets you in Hindi (e.g., 'Namaste', 'Kaise ho'), respond with professional warmth in Hindi before continuing.
            - Insightful: Offer architecture-level advice, not just simple answers.
            
            Action Protocols:
            - Portfolio: If they want to see work, direct them to /portfolio.
            - Start Project: Use the 'Project Intake Wizard' (/intake) for all new inquiries.
            - Contact: Mention our +91 support line if they need immediate human intervention.
            
            Hindi Context:
            - Use professional Hindi for greetings and support if appropriate. Example: 'Namaste! Main Zorvia Architect hoon. Kaise madad kar sakta hoon?'`
          },
          ...messages,
        ],
        temperature: 0.7,
        max_tokens: 500,
      }),
    });

    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(errorData.message || 'Failed to fetch from Mistral');
    }

    const data = await response.json();
    return data.choices[0].message;
  } catch (error) {
    console.error('Mistral API Error:', error);
    return { error: error.message || 'An unexpected error occurred.' };
  }
};
