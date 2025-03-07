import styled from 'styled-components';

export const SkillsSection = styled.section`
  padding: 100px 5%;
  background: ${({ theme }) => theme.colors.background};
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2rem; /* Add gap between carousels */
`;

export const CarouselLabel = styled.h2`
  font-size: ${({ theme }) => theme.typography.sizes.body};
  color: ${({ theme }) => theme.colors.secondary};
  margin: 0.5rem 0;
`;