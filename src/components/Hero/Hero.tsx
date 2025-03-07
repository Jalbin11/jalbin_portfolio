import React from 'react';
import { motion } from 'framer-motion';
import { 
  HeroContainer, 
  HeroContent, 
  Title, 
  Subtitle, 
  CTAContainer,
  CTAButton,
  SignatureAnimation,
  CoolButton,
  CoolText
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

const slideFromLeft = {
  hidden: {
    x: -100,
    opacity: 0,
  },
  visible: (custom: number) => ({
    x: 0,
    opacity: 1,
    transition: {
      delay: custom * 0.2,
      duration: 0.8,
      ease: 'easeInOut', // Updated easing function
    },
  }),
};

const Hero: React.FC<{ toggleTheme: () => void }> = ({ toggleTheme }) => {
  const [coolActive, setCoolActive] = React.useState(false);

  const handleCoolClick = () => {
    setCoolActive(!coolActive);
    toggleTheme();
  };

  return (
    <HeroContainer>
      <SignatureAnimation
        initial={{ pathLength: 0 }}
        animate={{ pathLength: 1 }}
        transition={{ duration: 2, ease: 'easeInOut' }}
      />
      <HeroContent
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.div custom={0} variants={slideFromLeft} initial="hidden" animate="visible">
          <Title>Jacob Albin</Title>
        </motion.div>

        <motion.div custom={1} variants={slideFromLeft} initial="hidden" animate="visible">
          <Subtitle>Data-Driven Growth Strategist & Full-Stack Automation Engineer</Subtitle>
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
          <CoolButton onClick={handleCoolClick}>
            <CoolText>
              {coolActive ? "Night Mode Activated!" : "Activate Night Mode"}
            </CoolText>
          </CoolButton>
        </CTAContainer>
      </HeroContent>
    </HeroContainer>
  );
};

export default Hero;