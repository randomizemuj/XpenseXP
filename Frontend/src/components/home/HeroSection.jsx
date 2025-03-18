import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { CyberButtonLarge } from '../shared/Button';
import { fadeInUp, glowPulse } from '../../utils/animations';
import '../../styles/components/hero.css';

const HeroSection = () => {
  const [isImageLoaded, setIsImageLoaded] = useState(false);

  const handleImageError = (e) => {
    e.target.src = '/placeholder-avatar.png';
    e.target.alt = 'Cyberpunk character placeholder';
  };

  return (
    <motion.section 
      className="hero-section"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <motion.div 
        className="hero-content"
        variants={fadeInUp}
        initial="hidden"
        animate="visible"
      >
        <motion.h1 
          className="cyber-glitch"
          animate={{
            textShadow: [
              "0 0 10px #0ff, 0 0 20px #0ff",
              "0 0 30px #0ff, 0 0 40px #0ff",
              "0 0 10px #0ff, 0 0 20px #0ff"
            ]
          }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          Level Up Your Savings
        </motion.h1>
        <motion.p className="cyber-text">
          Transform your financial journey into an epic adventure. 
          Track expenses, customize your cyber avatar, and compete with others.
        </motion.p>
        <CyberButtonLarge variants={glowPulse} animate="animate">
          Start Your Journey
        </CyberButtonLarge>
      </motion.div>
      <motion.div 
        className="hero-image magic-glow"
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        {!isImageLoaded && (
          <div className="image-skeleton" aria-label="Loading hero image...">
            Loading...
          </div>
        )}
        <img 
          src="src/assets/cyber-avatar.png"
          alt="Cyberpunk character with neon highlights and futuristic armor" 
          onLoad={() => setIsImageLoaded(true)}
          onError={handleImageError}
          style={{ display: isImageLoaded ? 'block' : 'none' }}
        />
      </motion.div>
    </motion.section>
  );
};

export default HeroSection; 