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
            content: `You are Zorvia Architect, the lead AI concierge for Zorvia Studio. 
            
            Core Mandate:
            - You represent Zorvia Studio to POTENTIAL CUSTOMERS and CLIENTS. 
            - Your only goal is to excite them about our work and get them to start a project via the /intake wizard.
            - We are based in Bhubaneswar, India. We build AI-driven products and high-impact designs.
            
            Personality:
            - High-energy, visionary, and customer-obsessed.
            - Bilingual: Fluid English and Hindi.
            
            Handling Forms:
            - If a customer asks you to fill a form or "help me", ALWAYS direct them to our 'Project Intake Wizard' (/intake). 
            - Example: "I can help you build your vision. Let's head to our Project Intake Wizard to get started immediately. Sound good?"
            
            IMPORTANT: BE EXTREMELY CONCISE.
            - Use 1-2 short, punchy sentences.
            - NO long paragraphs.
            - NO markdown asterisks (**). Plain text only.
            - NO internal admin/vendor talk. You are a client concierge.`
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
