import React from 'react';
import { motion } from 'framer-motion';
import { 
  HeroContainer, 
  HeroContent, 
  Title, 
  Subtitle, 
  CTAContainer,
  CTAButton 
} from './Hero.styles';

const containerVariants = {
  hidden: { 
    opacity: 0 
  },
  visible: { 
    opacity: 1,
    transition: {
      delayChildren: 0.3,
      staggerChildren: 0.2
    }
  }
};

const itemVariants = {
  hidden: { 
    x: -60,
    opacity: 0 
  },
  visible: { 
    x: 0,
    opacity: 1,
    transition: {
      duration: 0.6,
      ease: "easeOut"
    }
  }
};

const Hero: React.FC = () => {
  return (
    <HeroContainer>
      <HeroContent
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.div variants={itemVariants}>
          <Title>Jacob Albin</Title>
        </motion.div>

        <motion.div variants={itemVariants}>
          <Subtitle>Software Engineer & Full-Stack Developer</Subtitle>
        </motion.div>

        <CTAContainer variants={itemVariants}>
          <CTAButton 
            href="#projects"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            View My Work
          </CTAButton>
          <CTAButton 
            href="#contact"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Contact Me
          </CTAButton>
        </CTAContainer>
      </HeroContent>
    </HeroContainer>
  );
};

export default Hero;