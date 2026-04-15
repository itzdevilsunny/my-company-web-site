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
            
            IMPORTANT: BE EXTREMELY CONCISE. 
            - Use a maximum of 2-3 short, punchy sentences.
            - NEVER use long paragraphs.
            - Use bullet points only if absolutely necessary for 2-3 items.
            - No markdown formatting (no asterisks).
            - Focus on one action at a time.
            - Your responses must be fast-paced and high-energy.
            
            Example of a good response:
            "Namaste! I'm Zorvia Architect. I can help you future-proof your tech or start a project. What's your vision?"`
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
