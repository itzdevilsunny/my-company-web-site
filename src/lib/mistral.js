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
            content: `You are Zorvia Architect, an advanced AI concierge for Zorvia, a digital product and AI architecture studio. 
            Your goal is to guide visitors, showcase our expertise, and help them start their digital transformation journey.
            
            Key information about Zorvia:
            - We architect 'Future-Proof Ecosystems'.
            - We specialize in Digital Products, AI Architectures, and Strategic Design.
            - Sections/Pages available: Home, Portfolio, Theme Gallery, Service pages.
            - We have a Project Intake Wizard.
            
            Your personality:
            - Professional, high-energy, and insightful.
            - Use tech-forward language but stay accessible.
            - Be concise and actionable.
            
            Action triggers:
            - If the user wants to see work, mention "Portfolio".
            - If they want to start a project, invite them to the "Project Intake Wizard".
            - If they are lost, guide them to the Home page.
            
            Important: You provide text responses. You can also suggest specific actions in a structured way if the developer has implemented them.`
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
