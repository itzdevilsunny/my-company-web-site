export const themes = [
  { 
    id: 'monochrome', 
    name: 'Monochrome', 
    mode: 'Light', 
    type: 'Sans', 
    icon: '⚪', 
    description: 'Clean, high-contrast, and timeless. Perfect for brands that want to communicate clarity and sophistication.',
    features: ['High Contrast', 'Focus on Clarity', 'Timeless Aesthetic'],
    styles: { primary: '#000000', bg: '#ffffff', border: 'border-2 border-black', font: 'font-sans', shadow: 'shadow-pop-sm', visualType: 'monochrome' }
  },
  { 
    id: 'bauhaus', 
    name: 'Bauhaus', 
    mode: 'Light', 
    type: 'Sans', 
    icon: '🔴', 
    description: 'The revolutionary "form follows function" philosophy. A constructivist composition of primary colors, geometric purity, and thick architectural borders.',
    features: ['Geometric Purity', 'Constructivist Logic', 'Primary Color Palette'],
    styles: { 
      primary: '#D02020', 
      bg: '#F0F0F0', 
      accent: '#1040C0', 
      secondary: '#F0C020',
      border: 'border-4 border-black', 
      font: 'font-sans font-black', 
      shadow: 'shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]', 
      visualType: 'bauhaus' 
    }
  },
  { 
    id: 'modern-dark', 
    name: 'Modern Dark', 
    mode: 'Dark', 
    type: 'Sans', 
    icon: '🔵', 
    description: 'A sleek, contemporary dark mode with vibrant blue accents and smooth gradients.',
    features: ['Vibrant Accents', 'Smooth Gradients', 'Sleek Layout'],
    styles: { primary: '#3B82F6', bg: '#0F172A', border: 'border border-white/10', font: 'font-sans', shadow: 'shadow-xl', visualType: 'moderndark' }
  },
  { 
    id: 'newsprint', 
    name: 'Newsprint', 
    mode: 'Light', 
    type: 'Serif', 
    icon: '⚫', 
    description: 'All the News That\'s Fit to Print. An authoritative editorial aesthetic with massive high-contrast typography, strict grid lines, and sharp 90-degree corners.',
    styles: { 
      primary: '#111111', 
      bg: '#F9F9F7', 
      accent: '#CC0000', 
      border: 'border-b-4 border-black', 
      font: 'font-serif', 
      shadow: 'shadow-none', 
      radius: 'rounded-none',
      visualType: 'newspaper' 
    }
  },
  { 
    id: 'saas', 
    name: 'Modern SaaS', 
    mode: 'Light', 
    type: 'Sans', 
    icon: '⚡', 
    description: 'Clarity through structure, character through bold detail. A professional yet design-forward aesthetic featuring electric gradients, sophisticated dual-font typography, and living animations.',
    styles: { 
      primary: '#0052FF', 
      bg: '#FAFAFA', 
      accent: 'linear-gradient(to right, #0052FF, #4D7CFF)',
      foreground: '#0F172A',
      border: 'border border-slate-200', 
      font: 'font-sans', 
      displayFont: 'font-calistoga',
      shadow: 'shadow-xl',
      radius: 'rounded-xl',
      visualType: 'modern' 
    }
  },
  { 
    id: 'luxury', 
    name: 'Luxury', 
    mode: 'Light', 
    type: 'Serif', 
    icon: '🟠', 
    description: 'Elegance through restraint. A sophisticated editorial aesthetic featuring high-contrast serifs, expansive negative space, visible grid lines, and slow cinematic motion.',
    styles: { 
      primary: '#D4AF37', 
      bg: '#F9F8F6', 
      foreground: '#1A1A1A',
      muted: '#6C6863',
      border: 'border-[#1A1A1A]/10', 
      font: 'font-serif', 
      bodyFont: 'font-sans',
      shadow: 'shadow-[0_4px_24px_rgba(0,0,0,0.04)]', 
      radius: 'rounded-none',
      visualType: 'luxury' 
    }
  },
  { 
    id: 'terminal', 
    name: 'Terminal', 
    mode: 'Dark', 
    type: 'Mono', 
    icon: '🟢', 
    description: 'A "hacker" aesthetic with monospaced fonts and green accents. Ideal for technical platforms.',
    styles: { primary: '#00FF00', bg: '#000000', border: 'border border-[#00FF00]/30', font: 'font-mono', shadow: 'shadow-[0_0_15px_rgba(0,255,0,0.1)]', visualType: 'terminal' }
  },
  { 
    id: 'swiss-minimalist', 
    name: 'Swiss Minimalist', 
    mode: 'Light', 
    type: 'Sans', 
    icon: '🔴', 
    description: 'The pinnacle of objective design. Grids, sans-serifs, and absolute functional clarity.',
    styles: { primary: '#FF0000', bg: '#ffffff', border: 'border-none', font: 'font-sans font-bold', shadow: 'shadow-none', visualType: 'swiss' }
  },
  { 
    id: 'kinetic', 
    name: 'Kinetic', 
    mode: 'Dark', 
    type: 'Sans', 
    icon: '🟠', 
    description: 'Typography in motion. A high-energy brutalised aesthetic where text becomes the architecture, featuring infinite marquees, fluid scaling, and acid-yellow accents.',
    styles: { 
      primary: '#DFE104', 
      bg: '#09090B', 
      foreground: '#FAFAFA',
      muted: '#27272A',
      border: 'border-2 border-[#3F3F46]', 
      font: 'font-space-grotesk', 
      shadow: 'shadow-none',
      radius: 'rounded-none',
      visualType: 'kinetic' 
    }
  },
  { 
    id: 'flat-design', 
    name: 'Flat Design', 
    mode: 'Light', 
    type: 'Sans', 
    icon: '🔵', 
    description: 'Simple, 2D aesthetic with vibrant colors and clear iconography. Easy to read and fast to load.',
    styles: { primary: '#3498DB', bg: '#ECF0F1', border: 'border-none', font: 'font-sans', shadow: 'shadow-none', radius: 'rounded-none', visualType: 'flatdesign' }
  },
  { 
    id: 'art-deco', 
    name: 'Art Deco', 
    mode: 'Dark', 
    type: 'Serif', 
    icon: '🟡', 
    description: 'Geometric patterns and glamorous gold-on-black typography. Sophisticated and decorative.',
    styles: { primary: '#D4AF37', bg: '#1A1A1A', border: 'border-double border-4 border-[#D4AF37]', font: 'font-serif', shadow: 'shadow-2xl', visualType: 'artdeco' }
  },
  { 
    id: 'material-design', 
    name: 'Material Design', 
    mode: 'Light', 
    type: 'Sans', 
    icon: '🟣', 
    description: 'Google-inspired hierarchy with subtle shadows and responsive interactions.',
    styles: { primary: '#6200EE', bg: '#ffffff', border: 'border-none', font: 'font-sans', shadow: 'shadow-lg', radius: 'rounded-sm', visualType: 'material' }
  },
  { 
    id: 'neo-brutalism', 
    name: 'Neo Brutalism', 
    mode: 'Light', 
    type: 'Sans', 
    icon: '🟡', 
    description: 'Raw, unpolished, and bold. Thick borders, vibrant colors, and intentional functionality.',
    styles: { primary: '#FFD600', bg: '#ffffff', border: 'border-4 border-black', font: 'font-heading font-black', shadow: 'shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]', visualType: 'brutalist' }
  },
  { 
    id: 'bold-typography', 
    name: 'Bold Typography', 
    mode: 'Dark', 
    type: 'Sans', 
    icon: '🟠', 
    description: 'Type-first design. Massive headlines and minimalist backgrounds for high impact.',
    styles: { primary: '#ffffff', bg: '#000000', border: 'border-none', font: 'font-black uppercase italic', shadow: 'shadow-none', visualType: 'boldtypography' }
  },
  { 
    id: 'academia', 
    name: 'Academia', 
    mode: 'Light', 
    type: 'Serif', 
    icon: '🟤', 
    description: 'Warm, scholarly, and elegant. Features serif typography and paper-like backgrounds.',
    styles: { primary: '#4A3728', bg: '#FDFBF7', border: 'border border-[#E5E1D8]', font: 'font-serif', shadow: 'shadow-sm', visualType: 'academia' }
  },
  { 
    id: 'cyberpunk', 
    name: 'Cyberpunk', 
    mode: 'Dark', 
    type: 'Sans', 
    icon: '🟢', 
    description: 'Neon glows, glitch effects, and futuristic grid systems. For the edge of technology.',
    styles: { primary: '#00FF9F', bg: '#0D0221', border: 'border border-[#FF00FF]', font: 'font-mono', shadow: 'shadow-[0_0_20px_#FF00FF]', visualType: 'cyberpunk' }
  },
  { 
    id: 'web3', 
    name: 'Web3', 
    mode: 'Dark', 
    type: 'Mono', 
    icon: '🟠', 
    description: 'Decentralized aesthetic. Glassmorphism, neon outlines, and data-heavy visuals.',
    styles: { primary: '#F59E0B', bg: '#030712', border: 'border border-white/10 backdrop-blur-md', font: 'font-mono', shadow: 'shadow-2xl', visualType: 'web3' }
  },
  { 
    id: 'playful-geometric', 
    name: 'Playful Geometric', 
    mode: 'Light', 
    type: 'Sans', 
    icon: '🟣', 
    description: 'The core Zorvia aesthetic. Vibrant, rounded, and full of interactive energy.',
    styles: { primary: '#8B5CF6', bg: '#ffffff', border: 'border-4 border-foreground', font: 'font-heading font-black', shadow: 'shadow-pop', visualType: 'playful' }
  },
  { 
    id: 'minimal-dark', 
    name: 'Minimal Dark', 
    mode: 'Dark', 
    type: 'Sans', 
    icon: '🟡', 
    description: 'Pure focus. Deep blacks and subtle gold highlights for a refined dark experience.',
    styles: { primary: '#EAB308', bg: '#000000', border: 'border-none', font: 'font-light tracking-widest', shadow: 'shadow-none', visualType: 'minimaldark' }
  },
  { 
    id: 'claymorphism', 
    name: 'Claymorphism', 
    mode: 'Light', 
    type: 'Sans', 
    icon: '💗', 
    description: 'Soft, 3D pill-like elements with pastel colors. Friendly and tactile.',
    styles: { primary: '#F472B6', bg: '#FDF2F8', border: 'border-none', font: 'font-sans', shadow: 'shadow-[inset_2px_2px_5px_rgba(255,255,255,0.8),inset_-2px_-2px_5px_rgba(0,0,0,0.1),10px_10px_20px_rgba(0,0,0,0.05)]', visualType: 'clay' }
  },
  { 
    id: 'professional', 
    name: 'Professional', 
    mode: 'Light', 
    type: 'Sans', 
    icon: '🟡', 
    description: 'Corporate excellence. Balanced, trustworthy, and designed for enterprise results.',
    styles: { primary: '#1E40AF', bg: '#ffffff', border: 'border-t-4 border-blue-800', font: 'font-sans', shadow: 'shadow-sm', visualType: 'professional' }
  },
  { 
    id: 'botanical', 
    name: 'Botanical', 
    mode: 'Light', 
    type: 'Serif', 
    icon: '🟤', 
    description: 'Earthy tones, organic shapes, and natural textures. For sustainable and wellness brands.',
    styles: { primary: '#166534', bg: '#F0F4F0', border: 'border-none', font: 'font-serif italic', shadow: 'shadow-none', radius: 'rounded-[3rem]', visualType: 'organic' }
  },
  { 
    id: 'vaporwave', 
    name: 'Vaporwave', 
    mode: 'Dark', 
    type: 'Sans', 
    icon: '🟣', 
    description: '80s nostalgia. Pink gradients, palm tree silhouettes, and retro-futuristic vibes.',
    styles: { primary: '#FF71CE', bg: '#01CDFE', accent: '#05FFA1', border: 'border-2 border-[#B967FF]', font: 'font-bold italic', shadow: 'shadow-[5px_5px_0px_#B967FF]', visualType: 'vaporwave' }
  },
  { 
    id: 'enterprise', 
    name: 'Enterprise', 
    mode: 'Light', 
    type: 'Sans', 
    icon: '🔵', 
    description: 'Built for scale. Robust navigation and data-dense layouts for complex platforms.',
    styles: { primary: '#0F172A', bg: '#ffffff', border: 'border border-slate-200', font: 'font-sans', shadow: 'shadow-sm', radius: 'rounded-none', visualType: 'enterprise' }
  },
  { 
    id: 'sketch', 
    name: 'Sketch', 
    mode: 'Light', 
    type: 'Sans', 
    icon: '🔴', 
    description: 'Draft-like aesthetic. Hand-drawn borders and organic lines for a creative feel.',
    styles: { primary: '#EF4444', bg: '#ffffff', border: 'border-2 border-black rounded-[15px_100px_15px_100px/100px_15px_100px_15px]', font: 'font-mono', shadow: 'shadow-none', visualType: 'sketch' }
  },
  { 
    id: 'industrial', 
    name: 'Industrial', 
    mode: 'Light', 
    type: 'Mono', 
    icon: '🟠', 
    description: 'Rugged and functional. Steel-like grays and bold, monospaced instructional type.',
    styles: { primary: '#374151', bg: '#D1D5DB', border: 'border-4 border-slate-700 font-bold', font: 'font-mono', shadow: 'shadow-none', visualType: 'industrial' }
  },
  { 
    id: 'neumorphism', 
    name: 'Neumorphism', 
    mode: 'Light', 
    type: 'Sans', 
    icon: '🔘', 
    description: 'Soft UI. Elements that emerge from the background through clever shadowing.',
    styles: { primary: '#94A3B8', bg: '#E2E8F0', border: 'border-none', font: 'font-sans', shadow: 'shadow-[20px_20px_60px_#c0c5cc,-20px_-20px_60px_#ffffff]', radius: 'rounded-[2rem]', visualType: 'neumorphic' }
  },
  { 
    id: 'organic', 
    name: 'Organic', 
    mode: 'Light', 
    type: 'Sans', 
    icon: '🟢', 
    description: 'Fluid shapes and soft greens. Communicates growth, life, and natural interfaces.',
    styles: { primary: '#22C55E', bg: '#f9fff9', border: 'border-none', font: 'font-sans', shadow: 'shadow-none', radius: 'rounded-[50%_50%_50%_50%/60%_60%_40%_40%]', visualType: 'organic' }
  },
  { 
    id: 'maximalism', 
    name: 'Maximalism', 
    mode: 'Dark / Dopamine', 
    type: 'Display', 
    icon: '🌈', 
    description: 'More is more. A sensory-overload aesthetic featuring clashing patterns, five-accent rotations, massive typography, and unapologetic dopamine motion.',
    styles: { primary: '#FF3AF2', bg: '#0D0D1A', font: 'font-heading', visualType: 'maximalism' },
    features: ['5-Accent Rotation', 'Pattern Layering', 'Mega-Stack Shadows', 'Bouncy Motion']
  },
  { 
    id: 'retro', 
    name: 'Retro', 
    mode: 'Light', 
    type: 'Sans', 
    icon: '🟣', 
    description: '70s and 80s inspired. Warm color palettes and groovy, rounded typography.',
    styles: { primary: '#EA580C', bg: '#FEF3C7', border: 'border-4 border-black', font: 'font-sans', shadow: 'shadow-[6px_6px_0px_0px_rgba(0,0,0,1)]', visualType: 'retro' }
  }
];
