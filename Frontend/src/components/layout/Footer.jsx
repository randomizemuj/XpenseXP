import React from 'react';
import { motion } from 'framer-motion';
import '../../styles/components/footer.css';

const Footer = () => {
  return (
    <motion.footer 
      className="cyber-footer"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
    >
      <div className="footer-content">
        <div className="footer-section">
          <h3>XpenseXP</h3>
          <p>Gamifying your financial future</p>
        </div>
        <div className="footer-section">
          <h4>Links</h4>
          <a href="#about">About</a>
          <a href="#contact">Contact</a>
          <a href="#privacy">Privacy Policy</a>
        </div>
      </div>
    </motion.footer>
  );
};

export default Footer; 