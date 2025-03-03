import styled from 'styled-components';
import { motion } from 'framer-motion';

export const HeroContent = styled.div`
  position: relative;
  z-index: 2;
  overflow: hidden;
`;

export const Title = styled(motion.h1)`
  margin-bottom: 1rem;
`;

export const Subtitle = styled(motion.h2)`
  margin-bottom: 2rem;
`;

export const CTAButton = styled(motion.button)`
  padding: 1rem 2rem;
  cursor: pointer;
  border: none;
  border-radius: 4px;
  background: ${({ theme }) => theme.colors.primary};
  color: white;
  transition: transform 0.2s ease;
  
  &:hover {
    transform: scale(1.05);
  }
`;
export const HeroContainer = styled.section`
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0 5%;
  background: ${({ theme }) => theme.colors.background};
  position: relative;
  overflow: hidden;
`;

export const ParticleBackground = styled(motion.div)`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 0;
`;

export const GradientOverlay = styled(motion.div)`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: radial-gradient(
    circle at center,
    transparent 0%,
    ${({ theme }) => theme.colors.background} 70%
  );
  z-index: 1;
`;