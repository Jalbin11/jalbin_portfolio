import styled from 'styled-components';
import { motion } from 'framer-motion';

export const HeroContainer = styled.section`
  height: 100vh;
  display: flex;
  align-items: center;
  padding: 0 5%;
  background: ${({ theme }) => theme.colors.background};
`;

export const HeroContent = styled(motion.div)`
  max-width: 800px;
`;

export const Title = styled(motion.h1)`
  font-size: ${({ theme }) => theme.typography.sizes.h1};
  margin-bottom: 1rem;
  color: ${({ theme }) => theme.colors.text};
`;

export const Subtitle = styled(motion.p)`
  font-size: ${({ theme }) => theme.typography.sizes.h3};
  color: ${({ theme }) => theme.colors.accent};
  margin-bottom: 2rem;
`;

export const CTAButton = styled(motion.a)`
  display: inline-block;
  padding: 1rem 2rem;
  background: ${({ theme }) => theme.colors.primary};
  color: white;
  border-radius: 5px;
  text-decoration: none;
  margin-right: 1rem;
  
  &:hover {
    background: ${({ theme }) => theme.colors.secondary};
  }
`;