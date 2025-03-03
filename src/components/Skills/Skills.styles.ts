import styled from 'styled-components';
import { motion } from 'framer-motion';

export const SkillsSection = styled.section`
  padding: 100px 5%;
  background: ${({ theme }) => theme.colors.background};
`;

export const SkillsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
  gap: 2rem;
  margin-top: 3rem;
`;

export const SectionTitle = styled.h2`
  font-size: ${({ theme }) => theme.typography.sizes.h2};
  text-align: center;
  margin-bottom: 2rem;
`;