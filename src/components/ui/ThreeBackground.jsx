import React from 'react';

const ThreeBackground = () => {
  return (
    <div className="fixed inset-0 bg-dot-grid z-[-1] overflow-hidden bg-background">
      {/* Floating Geometric Shapes (Confetti) */}
      <div className="absolute top-[10%] left-[5%] w-24 h-24 bg-secondary/20 rounded-full animate-bounce duration-[3000ms]" />
      <div className="absolute top-[60%] right-[10%] w-32 h-32 bg-tertiary/20 rotate-12 rounded-sm" />
      <div className="absolute bottom-[10%] left-[20%] w-16 h-16 bg-accent/20 rounded-full animate-pulse" />
      <div className="absolute top-[40%] left-[40%] w-12 h-12 bg-quaternary/30 rounded-full" />
      
      {/* Decorative Squiggle (Hardcoded SVG for now) */}
      <svg className="absolute top-[20%] right-[20%] w-48 h-48 text-secondary/30" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
        <path fill="currentColor" d="M44.7,-76.4C58.1,-69.2,69.2,-58.1,76.4,-44.7C83.7,-31.3,87.1,-15.7,85.2,-0.7C83.3,14.2,76.1,28.4,66.8,40.8C57.5,53.2,46.1,63.8,32.8,71.2C19.5,78.6,4.2,82.8,-11,80.9C-26.2,79,-41.4,71,-53.4,60.1C-65.4,49.2,-74.3,35.4,-78.3,20.5C-82.3,5.6,-81.4,-10.4,-76,-25.1C-70.6,-39.8,-60.7,-53.3,-47.9,-60.9C-35.1,-68.5,-19.6,-70.2,-2,-66.7C15.6,-63.2,31.3,-83.6,44.7,-76.4Z" transform="translate(100 100)" />
      </svg>
    </div>
  );
};

export default ThreeBackground;
