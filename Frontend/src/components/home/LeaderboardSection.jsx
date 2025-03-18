import React from 'react';
import { motion } from 'framer-motion';
import { fadeInUp, staggerContainer } from '../../utils/animations';
import '../../styles/components/leaderboard.css';

const LeaderboardCard = ({ position, name, amount }) => {
  return (
    <motion.div 
      key={position} 
      className="leaderboard-card"
      variants={fadeInUp}
      whileHover={{ 
        scale: 1.05,
        boxShadow: "0 0 20px var(--cyber-yellow)"
      }}
    >
      <div className="rank">#{position}</div>
      <div 
        className="avatar" 
        role="img" 
        aria-label={`Profile avatar for ${name}`}
      ></div>
      <div className="player-info">
        <h4>{name}</h4>
        <p>Saved: ${amount}</p>
      </div>
    </motion.div>
  );
};

const LeaderboardSection = () => {
  const topSavers = [
    { position: 1, name: "Cyber Player 1", amount: "1,100" },
    { position: 2, name: "Cyber Player 2", amount: "1,200" },
    { position: 3, name: "Cyber Player 3", amount: "1,300" }
  ];

  return (
    <motion.section 
      className="leaderboard-preview" 
      id="leaderboard"
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
        Top Savers This Week
      </motion.h2>
      <motion.div 
        className="leaderboard-cards"
        variants={staggerContainer}
        initial="initial"
        whileInView="animate"
        viewport={{ once: true }}
      >
        {topSavers.map((saver) => (
          <LeaderboardCard key={saver.position} {...saver} />
        ))}
      </motion.div>
    </motion.section>
  );
};

export default LeaderboardSection; 