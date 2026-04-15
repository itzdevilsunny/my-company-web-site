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
const MaximalismMockup = lazy(() => import('./mockups/MaximalismMockup'));

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
