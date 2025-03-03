import React from 'react';
import { HeroContainer, HeroContent, Title, Subtitle, CTAButton } from './Hero.styles';

const Hero: React.FC = () => {
  return (
    <HeroContainer>
      <HeroContent
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <Title>Jacob Albin</Title>
        <Subtitle>Software Engineer & Full-Stack Developer</Subtitle>
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
      </HeroContent>
    </HeroContainer>
  );
};

export default Hero;