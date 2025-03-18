import React from 'react';
import Navbar from '../components/layout/Navbar';
import Footer from '../components/layout/Footer';
import HeroSection from '../components/home/HeroSection';
import FeaturesSection from '../components/home/FeaturesSection';
import AboutSection from '../components/home/AboutSection';
import WhyChooseSection from '../components/home/WhyChooseSection';
import LeaderboardSection from '../components/home/LeaderboardSection';
import ParallaxBackground from '../components/shared/ParallaxBackground';
import '../styles/LandingPage.css';

const LandingPage = () => {
  return (
    <div className="landing-container">
      <ParallaxBackground />
      <Navbar />
      <main>
        <HeroSection />
        <AboutSection />
        <FeaturesSection />
        <WhyChooseSection />
        <LeaderboardSection />
      </main>
      <Footer />
    </div>
  );
};

export default LandingPage; 