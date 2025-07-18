// Hero.jsx
import { motion } from 'framer-motion';
import '../styles/Hero.css';
import profilePic from '../assets/shiv.png';
import MatrixRain from './MatrixRain'; // 🌧️ Hacker-style code rain overlay

const Hero = () => {
  // Scroll handler for the button
  const handleScroll = () => {
    const section = document.getElementById('timeline');
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <motion.section
      initial={{ opacity: 0, y: -40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="hero-container"
    >
      <MatrixRain />

      <motion.img
        src={profilePic}
        alt="Shiv Shukla"
        className="hero-avatar"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.3 }}
      />

      <motion.div
        className="hero-text"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
      >
        <h1 className="hero-title">
          Hi, I'm Shiv 👋
        </h1>
        <p className="hero-description">
          A frontend-focused SDE Intern blending fintech functionality with bold UI/UX storytelling.
        </p>
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="hero-button"
          onClick={handleScroll}
        >
          Explore My Journey
        </motion.button>
      </motion.div>
    </motion.section>
  );
};

export default Hero;