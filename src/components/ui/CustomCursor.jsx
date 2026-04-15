import React, { useEffect, useState } from 'react';
import { motion, useSpring, useMotionValue } from 'framer-motion';

const CustomCursor = () => {
  const [isPointer, setIsPointer] = useState(false);
  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);

  const springConfig = { damping: 25, stiffness: 700 };
  const cursorXSpring = useSpring(cursorX, springConfig);
  const cursorYSpring = useSpring(cursorY, springConfig);

  useEffect(() => {
    const moveCursor = (e) => {
      cursorX.set(e.clientX);
      cursorY.set(e.clientY);

      const target = e.target;
      const isClickable = window.getComputedStyle(target).cursor === 'pointer' || 
                         target.tagName.toLowerCase() === 'button' ||
                         target.tagName.toLowerCase() === 'a' ||
                         target.closest('button') ||
                         target.closest('a');
      
      setIsPointer(isClickable);
    };

    window.addEventListener('mousemove', moveCursor);
    return () => {
      window.removeEventListener('mousemove', moveCursor);
    };
  }, [cursorX, cursorY]);

  return (
    <motion.div
      className="fixed top-0 left-0 w-8 h-8 pointer-events-none z-[1000] hidden lg:block"
      style={{
        translateX: cursorXSpring,
        translateY: cursorYSpring,
        x: '-50%',
        y: '-50%',
      }}
    >
      <motion.div
        animate={{
          scale: isPointer ? 1.5 : 1,
          backgroundColor: isPointer ? 'rgba(59, 130, 246, 0.4)' : 'rgba(30, 41, 59, 0.1)',
          borderWidth: isPointer ? '2px' : '4px',
        }}
        className="w-full h-full rounded-full border-foreground border-4 backdrop-blur-[2px] transition-colors duration-200"
      />
      {isPointer && (
        <motion.div 
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          className="absolute inset-x-0 top-1/2 -translate-y-1/2 flex items-center justify-center"
        >
          <div className="w-1 h-1 bg-foreground rounded-full" />
        </motion.div>
      )}
    </motion.div>
  );
};

export default CustomCursor;
