import styled from 'styled-components';
import { motion } from 'framer-motion';

export const HeroContainer = styled.section`
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0 5%;
  background: ${({ theme }) => theme.colors.background};
  position: relative;
  overflow: hidden;

  @media (max-width: 768px) {
    padding: 0 3%;
    text-align: center;
  }
`;

export const HeroContent = styled(motion.div)`
  max-width: ${({ theme }) => theme.grid.container};
  width: 100%;
  z-index: 1;

  @media (max-width: 768px) {
    max-width: 100%;
    padding: 0 20px;
  }
`;

export const Title = styled(motion.h1)`
  font-size: ${({ theme }) => theme.typography.sizes.h1};
  margin-bottom: 1.5rem;
  color: ${({ theme }) => theme.colors.text};
  font-weight: bold;
  line-height: 1.2;

  @media (max-width: 768px) {
    font-size: calc(${({ theme }) => theme.typography.sizes.h1} * 0.7);
  }
`;

export const Subtitle = styled(motion.p)`
  font-size: ${({ theme }) => theme.typography.sizes.h3};
  color: ${({ theme }) => theme.colors.accent};
  margin-bottom: 2.5rem;
  line-height: 1.4;
  opacity: 0.9;

  @media (max-width: 768px) {
    font-size: calc(${({ theme }) => theme.typography.sizes.h3} * 0.8);
  }
`;

export const CTAContainer = styled(motion.div)`
  display: flex;
  gap: 1rem;

  @media (max-width: 480px) {
    flex-direction: column;
    align-items: center;
  }
`;

export const CTAButton = styled(motion.a)`
  display: inline-block;
  padding: 1rem 2rem;
  background: ${({ theme }) => theme.colors.primary};
  color: white;
  border-radius: 5px;
  text-decoration: none;
  font-weight: 500;
  transition: transform 0.2s ease, box-shadow 0.2s ease;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  
  &:hover {
    background: ${({ theme }) => theme.colors.secondary};
    transform: translateY(-2px);
    box-shadow: 0 4px 15px rgba(0, 0, 0, 0.15);
  }

  &:active {
    transform: translateY(0);
  }

  @media (max-width: 480px) {
    width: 100%;
    text-align: center;
  }
`;

export const CoolButton = styled.button`
  padding: 1rem 2rem;
  background: ${({ theme }) => theme.colors.primary};
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: transform 0.3s ease;
  z-index: 10;

  &:hover {
    background: ${({ theme }) => theme.colors.secondary};
  }
`;

export const CoolText = styled.span`
  font-weight: bold;
  position: relative;
  display: inline-block;
`;

export const BackgroundAnimation = styled(motion.div)`
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background: linear-gradient(
    45deg,
    ${({ theme }) => theme.colors.primary}0A,
    ${({ theme }) => theme.colors.secondary}0A
  );
  z-index: 0;
`;

export const SignatureAnimation = styled(motion.svg)`
  position: absolute;
  top: 20%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 300px;
  height: 150px;
  stroke: ${({ theme }) => theme.colors.primary};
  stroke-width: 2;
  fill: none;
  z-index: 1;
`;

export const ScrollIndicator = styled.div`
  display: none; /* Hide the scroll indicator */
`;