import styled from 'styled-components';
import { motion } from 'framer-motion';

export const AboutSection = styled.section`
  padding: 50px 10%; /* Reduced padding */
  background: ${({ theme }) => theme.colors.background};
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const AboutContent = styled.div`
  display: flex;
  gap: 4rem;
  max-width: 70%; /* Changed from 1000px to 70% */
  align-items: center;

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 2rem;
  }
`;

export const Headshot = styled.img`
  width: 300px;
  height: 300px;
  border-radius: 50%;
  object-fit: cover;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
`;

export const Description = styled.div`
  flex: 1;

  h2 {
    font-size: ${({ theme }) => theme.typography.sizes.h2};
    margin-bottom: 1rem;
    color: ${({ theme }) => theme.colors.primary};
  }

  p {
    font-size: ${({ theme }) => theme.typography.sizes.body};
    margin-bottom: 1rem;
    line-height: 1.6;
  }
`;

export const TextBubble = styled(motion.div)`
  background: ${({ theme }) => theme.colors.lightPrimary};
  color: ${({ theme }) => theme.colors.text};
  padding: 1.5rem;
  border-radius: 20px;
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
  margin-bottom: 1rem;
  max-width: 600px;
  position: relative;

  &:before {
    content: '';
    position: absolute;
    bottom: -10px;
    left: 30px;
    width: 0;
    height: 0;
    border: 10px solid transparent;
    border-top-color: ${({ theme }) => theme.colors.lightPrimary};
  }
`;

export const QuickReplyBubble = styled(motion.div)`
  background: ${({ theme }) => theme.colors.primary};
  color: white;
  padding: 1.5rem;
  border-radius: 20px;
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
  margin-bottom: 1rem;
  max-width: 600px;
  position: relative;
  align-self: flex-end;

  &:before {
    content: '';
    position: absolute;
    bottom: -10px;
    right: 30px;
    width: 0;
    height: 0;
    border: 10px solid transparent;
    border-top-color: ${({ theme }) => theme.colors.primary};
  }
`;

export const TypingIndicator = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 40px;
  width: 100px;
  background: ${({ theme }) => theme.colors.lightPrimary};
  border-radius: 20px;
  margin-bottom: 1rem;

  &:before {
    content: '...';
    font-size: 1.5rem;
    color: ${({ theme }) => theme.colors.text};
  }
`;

export const QuickReplyButton = styled.button`
  padding: 0.5rem 1rem;
  background: ${({ theme }) => theme.colors.secondary};
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: transform 0.3s ease;
  z-index: 10;

  &:hover {
    background: ${({ theme }) => theme.colors.primary};
  }
`;