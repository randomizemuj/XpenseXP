export const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut"
    }
  }
};

export const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.2
    }
  }
};

export const glowPulse = {
  animate: {
    boxShadow: [
      "0 0 10px rgba(0, 255, 255, 0.5)",
      "0 0 20px rgba(0, 255, 255, 0.8)",
      "0 0 10px rgba(0, 255, 255, 0.5)"
    ],
    transition: {
      duration: 2,
      repeat: Infinity,
      ease: "easeInOut"
    }
  }
}; 