import React from 'react';
import { motion } from 'framer-motion';
import Card3D from '../shared/Card3D';
import { fadeInUp } from '../../utils/animations';
import '../../styles/components/about.css';

const AboutSection = () => {
  return (
    <motion.section 
      className="about-section" 
      id="about"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
    >
      <motion.h2 
        className="cyber-heading"
        variants={fadeInUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        About XpenseXP
      </motion.h2>
      <div className="about-content">
        <motion.div 
          className="about-text"
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <h3>Level Up Your Financial Game</h3>
          <p>
            XpenseXP transforms mundane expense tracking into an exciting journey. 
            We combine cutting-edge technology with gamification elements to make 
            financial management not just efficient, but truly engaging.
          </p>
        </motion.div>
        <Card3D className="about-stats">
          <div className="stat-grid">
            <div className="stat-item">
              <h4>10K+</h4>
              <p>Active Players</p>
            </div>
            <div className="stat-item">
              <h4>$2M+</h4>
              <p>Total Savings</p>
            </div>
            <div className="stat-item">
              <h4>98%</h4>
              <p>Success Rate</p>
            </div>
            <div className="stat-item">
              <h4>24/7</h4>
              <p>Support</p>
            </div>
          </div>
        </Card3D>
      </div>
    </motion.section>
  );
};

export default AboutSection; 