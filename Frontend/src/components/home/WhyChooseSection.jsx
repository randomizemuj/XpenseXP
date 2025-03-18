import React from 'react';
import { motion } from 'framer-motion';
import Card3D from '../shared/Card3D';
import { Shield, Rocket, Brain, Lightning } from "@phosphor-icons/react";
import { fadeInUp, staggerContainer } from '../../utils/animations';
import '../../styles/components/why-choose.css';

const ReasonCard = ({ icon: Icon, title, description }) => {
  return (
    <Card3D className="reason-card">
      <motion.div
        animate={{
          y: [0, -10, 0],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      >
        <Icon size={48} weight="duotone" className="reason-icon" />
      </motion.div>
      <h3>{title}</h3>
      <p>{description}</p>
    </Card3D>
  );
};

const WhyChooseSection = () => {
  const reasons = [
    {
      icon: Shield,
      title: "Secure & Private",
      description: "Bank-grade encryption and privacy-first approach to protect your financial data"
    },
    {
      icon: Rocket,
      title: "Boost Motivation",
      description: "Gamification elements that make saving money exciting and rewarding"
    },
    {
      icon: Brain,
      title: "Smart Insights",
      description: "AI-powered analysis to help you make better financial decisions"
    },
    {
      icon: Lightning,
      title: "Real-time Tracking",
      description: "Instant updates and notifications to keep you on top of your finances"
    }
  ];

  return (
    <motion.section 
      className="why-choose-section"
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
        Why Choose XpenseXP?
      </motion.h2>
      <motion.div 
        className="reasons-grid"
        variants={staggerContainer}
        initial="initial"
        whileInView="animate"
        viewport={{ once: true }}
      >
        {reasons.map((reason) => (
          <ReasonCard key={reason.title} {...reason} />
        ))}
      </motion.div>
    </motion.section>
  );
};

export default WhyChooseSection; 