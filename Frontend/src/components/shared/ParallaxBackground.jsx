import React, { useEffect, useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import '../../styles/shared/parallax-background.css';

const ParallaxBackground = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  return (
    <motion.div ref={ref} className="parallax-container">
      <motion.div 
        className="grid-overlay"
        style={{ y, opacity }}
      />
      <motion.div 
        className="glow-orb orb-1"
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.5, 0.8, 0.5],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
      <motion.div 
        className="glow-orb orb-2"
        animate={{
          scale: [1.2, 1, 1.2],
          opacity: [0.8, 0.5, 0.8],
        }}
        transition={{
          duration: 5,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
    </motion.div>
  );
};

export default ParallaxBackground; 