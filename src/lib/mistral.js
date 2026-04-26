const GROQ_API_URL = 'https://api.groq.com/openai/v1/chat/completions';
const API_KEY = import.meta.env.VITE_GROQ_API_KEY;

const getLocalResponse = (message) => {
  if (!message) return "How can I help you today?";
  const lowerMsg = message.toLowerCase();
  
  if (lowerMsg.match(/\b(hi|hello|hey|greetings|how r u|how are you|whats up)\b/)) {
    return "Hello! I am Zorvia Architect. How can I help you elevate your digital presence today?";
  }
  if (lowerMsg.match(/\b(price|pricing|cost|plan|plans|much|fee|fees)\b/)) {
    return "We offer three plans: Basic (₹2,999), Standard (₹5,999), and Premium (₹8,999). Use the '/intake' command to get started!";
  }
  if (lowerMsg.match(/\b(service|services|what do you do|what can you do|offer)\b/)) {
    return "We specialize in Web & Mobile Development, AI Intelligent Systems, and UI/UX Creative Strategy.";
  }
  if (lowerMsg.match(/\b(location|where|address|based)\b/)) {
    return "We are based in South Delhi, Delhi (110049), India.";
  }
  if (lowerMsg.match(/\b(contact|email|phone|reach|call)\b/)) {
    return "You can reach us at contact@zorvia.digital or call us at +91 8674828218.";
  }
  if (lowerMsg.match(/\b(theme|themes|design|style)\b/)) {
    return "Our premium themes include Modern SaaS, Bauhaus, Neo Brutalism, Terminal, Luxury, Cyberpunk, Web3, and Playful Geometric.";
  }
  if (lowerMsg.match(/\b(time|days|delivery|fast)\b/)) {
    return "Basic projects take 3-5 days. Complex applications may take longer depending on your requirements.";
  }
  
  return "I'm currently running in lightweight mode. I can answer questions about our plans, services, pricing, and contact details. How can I assist you?";
};

export const sendMessageToMistral = async (messages) => {
  const lastUserMessage = messages.filter(m => m.role === 'user').pop()?.content || "";

  if (!API_KEY) {
    console.warn('Groq API Key is missing');
    await new Promise(r => setTimeout(r, 600)); // Simulate thinking
    return { role: 'assistant', content: getLocalResponse(lastUserMessage) };
  }

  try {
    const response = await fetch(GROQ_API_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${API_KEY}`,
      },
      body: JSON.stringify({
        model: 'llama3-8b-8192',
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
            - Based in: South Delhi, Delhi, pin code - 110049.
            
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
      console.warn('Groq API fetch failed, falling back to local rule-based response.');
      await new Promise(r => setTimeout(r, 600)); // Simulate thinking
      return {
        role: 'assistant',
        content: getLocalResponse(lastUserMessage)
      };
    }

    const data = await response.json();
    return data.choices[0].message;
  } catch (error) {
    console.error('Groq API Error:', error);
    return { 
      role: 'assistant',
      content: getLocalResponse(lastUserMessage)
    };
  }
};
