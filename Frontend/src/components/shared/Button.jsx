import React from 'react';
import { motion } from 'framer-motion';
import '../../styles/shared/buttons.css';

export const CyberButton = ({ children, variant = 'default', ...props }) => {
  const buttonClass = variant === 'glow' ? 'cyber-button-glow' : 'cyber-button';
  
  return (
    <motion.button 
      className={buttonClass}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      {...props}
    >
      {children}
    </motion.button>
  );
};

export const CyberButtonLarge = ({ children, ...props }) => {
  return (
    <motion.button 
      className="cyber-button-large"
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      {...props}
    >
      {children}
    </motion.button>
  );
}; 