import styled from 'styled-components';
import { motion } from 'framer-motion';

export const CardContainer = styled(motion.div)`
  position: relative;
  background: ${({ theme }) => theme.colors.background};
  border: 1px solid ${({ theme }) => theme.colors.secondary};
  border-radius: 8px;
  padding: 1.5rem;
  margin-bottom: 1.5rem;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  transition: transform 0.5s ease, box-shadow 0.5s ease;

  &:hover {
    transform: translateX(-10%);
    box-shadow: 0 8px 12px rgba(0, 0, 0, 0.2);
    z-index: 1; /* Bring card to front */
  }

  h3 {
    margin: 0 0 0.5rem 0;
    font-size: ${({ theme }) => theme.typography.sizes.h3};
  }

  h4 {
    margin: 0 0 1rem 0;
    font-size: ${({ theme }) => theme.typography.sizes.h4};
    color: ${({ theme }) => theme.colors.accent};
  }

  p {
    margin: 0 0 1rem 0;
    font-size: ${({ theme }) => theme.typography.sizes.body};
    color: ${({ theme }) => theme.colors.text}CC;
  }

  div {
    font-size: ${({ theme }) => theme.typography.sizes.body};
    color: ${({ theme }) => theme.colors.text};
  }
`;

export const Logo = styled.img`
  width: 60px;
  height: 60px;
  object-fit: contain;
  margin-right: 1rem;
`;

export const PeekabooContainer = styled.div<{ bgColor: string }>`
  position: absolute;
  right: 0;
  top: 0;
  height: 100%;
  width: 30%; /* Cover 30% of the card */
  overflow: hidden;
  background: ${({ theme }) => theme.colors.background}; /* Solid background color */
  transition: right 0.5s ease;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  background-color: ${({ bgColor }) => bgColor};

  ${CardContainer}:hover & {
    right: -30%; /* Slide off the card subtly */
  }
`;

export const PeekabooLogo = styled.img`
  height: 100%;
  width: 100%;
  object-fit: contain;
`;

export const Header = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 1rem;
`;

export const Content = styled.div`
  font-size: ${({ theme }) => theme.typography.sizes.body};
  color: ${({ theme }) => theme.colors.text};
  ul {
    padding-left: 1.5rem;
  }
`;

export const BulletPoint = styled.li`
  margin-bottom: 0.5rem;
  &:before {
    content: '•';
    color: ${({ theme }) => theme.colors.accent};
    display: inline-block;
    width: 1em;
    margin-left: -1em;
  }
`;