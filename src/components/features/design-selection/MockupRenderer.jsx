import React, { lazy, Suspense } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

// Lazy load mockup components for better performance
const TerminalMockup = lazy(() => import('./mockups/TerminalMockup'));
const BauhausMockup = lazy(() => import('./mockups/BauhausMockup'));
const BrutalistMockup = lazy(() => import('./mockups/BrutalistMockup'));
const NewspaperMockup = lazy(() => import('./mockups/NewspaperMockup'));
const LuxuryMockup = lazy(() => import('./mockups/LuxuryMockup'));
const CyberpunkMockup = lazy(() => import('./mockups/CyberpunkMockup'));
const ClayMockup = lazy(() => import('./mockups/ClayMockup'));
const SketchMockup = lazy(() => import('./mockups/SketchMockup'));
const NeumorphicMockup = lazy(() => import('./mockups/NeumorphicMockup'));
const OrganicMockup = lazy(() => import('./mockups/OrganicMockup'));
const ModernMockup = lazy(() => import('./mockups/ModernMockup'));
const KineticMockup = lazy(() => import('./mockups/KineticMockup'));
const RetroMockup = lazy(() => import('./mockups/RetroMockup'));
const MaximalismMockup = lazy(() => import('./mockups/MaximalismMockup'));
const VaporwaveMockup = lazy(() => import('./mockups/VaporwaveMockup'));
const IndustrialMockup = lazy(() => import('./mockups/IndustrialMockup'));
const SwissMockup = lazy(() => import('./mockups/SwissMockup'));
const ArtDecoMockup = lazy(() => import('./mockups/ArtDecoMockup'));
const AcademiaMockup = lazy(() => import('./mockups/AcademiaMockup'));
const MaterialMockup = lazy(() => import('./mockups/MaterialMockup'));

const MinimalDarkMockup = lazy(() => import('./mockups/MinimalDarkMockup'));
const ProfessionalMockup = lazy(() => import('./mockups/ProfessionalMockup'));
const EnterpriseMockup = lazy(() => import('./mockups/EnterpriseMockup'));
const MonochromeMockup = lazy(() => import('./mockups/MonochromeMockup'));
const ModernDarkMockup = lazy(() => import('./mockups/ModernDarkMockup'));
const FlatDesignMockup = lazy(() => import('./mockups/FlatDesignMockup'));
const BoldTypographyMockup = lazy(() => import('./mockups/BoldTypographyMockup'));
const Web3Mockup = lazy(() => import('./mockups/Web3Mockup'));
const PlayfulMockup = lazy(() => import('./mockups/PlayfulMockup'));

const mockupMap = {
  terminal: TerminalMockup,
  bauhaus: BauhausMockup,
  brutalist: BrutalistMockup,
  newspaper: NewspaperMockup,
  luxury: LuxuryMockup,
  cyberpunk: CyberpunkMockup,
  clay: ClayMockup,
  sketch: SketchMockup,
  neumorphic: NeumorphicMockup,
  organic: OrganicMockup,
  modern: ModernMockup,
  kinetic: KineticMockup,
  maximalism: MaximalismMockup,
  retro: RetroMockup,
  vaporwave: VaporwaveMockup,
  industrial: IndustrialMockup,
  swiss: SwissMockup,
  artdeco: ArtDecoMockup,
  academia: AcademiaMockup,
  material: MaterialMockup,
  minimaldark: MinimalDarkMockup,
  professional: ProfessionalMockup,
  enterprise: EnterpriseMockup,
  monochrome: MonochromeMockup,
  moderndark: ModernDarkMockup,
  flatdesign: FlatDesignMockup,
  boldtypography: BoldTypographyMockup,
  web3: Web3Mockup,
  playful: PlayfulMockup,
};

const MockupRenderer = ({ theme }) => {
  const visualType = theme?.styles?.visualType || 'modern';
  const Component = mockupMap[visualType] || ModernMockup;

  return (
    <div 
      className="h-full w-full transition-all duration-500 relative overflow-hidden"
      style={{ 
        backgroundColor: theme.styles.bg, 
        color: theme.mode === 'Light' ? '#000000' : '#ffffff' 
      }}
    >
      <Suspense fallback={
        <div className="h-full w-full flex items-center justify-center bg-black/5">
          <div className="w-8 h-8 border-4 border-primary border-t-transparent rounded-full animate-spin" />
        </div>
      }>
        <Component theme={theme} />
      </Suspense>
    </div>
  );
};

export default MockupRenderer;
