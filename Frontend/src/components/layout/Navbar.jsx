import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { List, X } from "@phosphor-icons/react";
import '../../styles/components/navbar.css';

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <motion.nav 
      className={`cyber-nav ${scrolled ? 'scrolled' : ''}`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ type: "spring", stiffness: 100 }}
    >
      <motion.div 
        className="logo"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        <span className="logo-text">XpenseXP</span>
        <span className="logo-tagline">// GAMIFIED FINANCE</span>
      </motion.div>
      
      <button 
        className="mobile-menu-button"
        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        aria-label="Toggle navigation menu"
      >
        {isMobileMenuOpen ? 
          <X size={32} color="#0ff" weight="bold" /> :
          <List size={32} color="#0ff" weight="bold" />
        }
      </button>

      <AnimatePresence>
        <motion.div 
          className={`nav-links ${isMobileMenuOpen ? 'active' : ''}`}
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ type: "spring", stiffness: 200 }}
        >
          <motion.a 
            href="#features"
            whileHover={{ scale: 1.1, color: "#0ff" }}
            whileTap={{ scale: 0.95 }}
          >
            Features
          </motion.a>
          <motion.a 
            href="#about"
            whileHover={{ scale: 1.1, color: "#0ff" }}
            whileTap={{ scale: 0.95 }}
          >
            About
          </motion.a>
          <motion.a 
            href="#leaderboard"
            whileHover={{ scale: 1.1, color: "#0ff" }}
            whileTap={{ scale: 0.95 }}
          >
            Leaderboard
          </motion.a>
          <motion.a 
            href="#login" 
            className="cyber-button"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Login
          </motion.a>
          <motion.a 
            href="#signup" 
            className="cyber-button-glow"
            whileHover={{ 
              scale: 1.05,
              boxShadow: "0 0 20px rgba(0, 255, 255, 0.5)"
            }}
            whileTap={{ scale: 0.95 }}
          >
            Sign Up
          </motion.a>
        </motion.div>
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar; 