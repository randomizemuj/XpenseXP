import React from 'react';
import { motion } from 'framer-motion';
import { 
  GameController, 
  ChartLineUp, 
  Crown, 
  Sparkle,
  Gauge,
  Target
} from "@phosphor-icons/react";
import { fadeInUp, staggerContainer } from '../../utils/animations';
import '../../styles/components/features.css';

const FeatureCard = ({ icon: Icon, title, description, delay }) => {
  return (
    <motion.div 
      className="feature-card magic-glow"
      variants={fadeInUp}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      transition={{ delay }}
    >
      <div className="feature-icon">
        <motion.div
          animate={{ 
            rotate: [0, 5, -5, 0],
            y: [0, -5, 5, 0]
          }}
          transition={{ 
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        >
          <Icon 
            size={64} 
            weight="bold"
            className="icon-glow"
          />
        </motion.div>
      </div>
      <h3>{title}</h3>
      <p>{description}</p>
    </motion.div>
  );
};

const FeaturesSection = () => {
  const features = [
    {
      icon: GameController,
      title: "Gamified Experience",
      description: "Transform your financial journey into an engaging adventure with achievements and rewards",
      delay: 0.2
    },
    {
      icon: Crown,
      title: "Custom Achievements",
      description: "Unlock unique badges and titles as you reach your financial goals",
      delay: 0.4
    },
    {
      icon: Target,
      title: "Smart Goals",
      description: "Set personalized targets and track your progress with intuitive visualizations",
      delay: 0.6
    },
    {
      icon: ChartLineUp,
      title: "AI Analytics",
      description: "Get intelligent insights and recommendations for better financial decisions",
      delay: 0.8
    },
    {
      icon: Sparkle,
      title: "Daily Quests",
      description: "Complete challenges to earn bonus points and special rewards",
      delay: 1.0
    },
    {
      icon: Gauge,
      title: "Real-time Tracking",
      description: "Monitor your expenses and savings progress with live updates",
      delay: 1.2
    }
  ];

  return (
    <motion.section 
      className="features-section" 
      id="features"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
    >
      <motion.h2 
        className="cyber-heading"
        variants={fadeInUp}
        initial="initial"
        whileInView="animate"
        viewport={{ once: true }}
      >
        Features
      </motion.h2>
      <motion.div 
        className="features-grid"
        variants={staggerContainer}
        initial="initial"
        whileInView="animate"
        viewport={{ once: true }}
      >
        {features.map((feature) => (
          <FeatureCard key={feature.title} {...feature} />
        ))}
      </motion.div>
    </motion.section>
  );
};

export default FeaturesSection; 