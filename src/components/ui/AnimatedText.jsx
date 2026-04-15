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
  const characters = text.split('');
  
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.03,
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
      className={`inline-flex flex-wrap ${className}`}
    >
      {characters.map((char, index) => (
        <motion.span
          key={index}
          variants={childVariants}
          className="inline-block whitespace-pre"
        >
          {char}
        </motion.span>
      ))}
    </motion.span>
  );
};

export default AnimatedText;
