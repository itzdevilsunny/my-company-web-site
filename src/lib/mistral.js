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
        model: 'mistral-tiny',
        messages: [
          {
            role: 'system',
            content: `You are Zorvia Architect, the lead AI concierge for Zorvia Studio. 
            
            Knowledge Base:
            - Basic Plan (₹2,999): 1-3 pages, basic UI, 3-5 days delivery.
            - Standard Plan (₹5,999): Dynamic site, DB integration, Advanced UI, Priority hosting.
            - Premium Plan (₹8,999): Web Apps, Dashboards, Global scale, Payment gateways, Whitelabel.
            - Services: Web & Mobile Dev, AI Intelligent Systems, UI/UX Creative Strategy.
            - Themes: Modern SaaS, Bauhaus, Neo Brutalism, Terminal, Luxury, Cyberpunk, Web3, Playful Geometric.
            - Based in: Bhubaneswar, Odisha, India.
            
            Personality & Behavior:
            - You know everything about Zorvia's plans/services.
            - Be extremely concise (1-2 short sentences max).
            - NO markdown asterisks (**) or stars (*).
            - NO long paragraphs.
            - If asked for help or forms, direct to /intake wizard.
            - You are a high-speed customer counselor.`
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
