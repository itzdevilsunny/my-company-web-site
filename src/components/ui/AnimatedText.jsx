import React from 'react';
import { motion } from 'framer-motion';

/**
 * AnimatedText component that renders text character-by-character
 * with a sliding effect from a specified direction.
 * 
 * @param {string} text - The text to animate.
 * @param {string} className - Additional CSS classes.
 * @param {'left'|'right'|'bottom'} from - Direction to slide from.
 * @param {number} delay - Base delay before starting the animation.
 */
const AnimatedText = ({ text, className, from = 'left', delay = 0 }) => {
  const words = text.split(' ');
  
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: delay,
      },
    },
  };

  const childVariants = {
    hidden: { 
      opacity: 0, 
      x: from === 'left' ? -30 : from === 'right' ? 30 : 0,
      y: from === 'bottom' ? 30 : 0,
    },
    visible: { 
      opacity: 1, 
      x: 0,
      y: 0,
      transition: {
        type: 'spring',
        damping: 15,
        stiffness: 150,
      },
    },
  };

  return (
    <motion.span
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
      className={`inline-flex flex-wrap gap-x-[0.3em] ${className}`}
    >
      {words.map((word, index) => (
        <motion.span
          key={index}
          variants={childVariants}
          className="inline-block"
        >
          {word}
        </motion.span>
      ))}
    </motion.span>
  );
};

export default AnimatedText;
