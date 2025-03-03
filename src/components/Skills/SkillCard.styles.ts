import styled from 'styled-components';
import { motion } from 'framer-motion';

export const Card = styled(motion.div)`
  background: white;
  border-radius: 10px;
  padding: 1.5rem;
  text-align: center;
  box-shadow: 0 4px 6px rgba(0,0,0,0.1);
`;

export const SkillIcon = styled.img`
  width: 50px;
  height: 50px;
  margin-bottom: 1rem;
`;

export const SkillName = styled.h3`
  font-size: 1.2rem;
  margin-bottom: 0.5rem;
`;