import styled from 'styled-components';

export const SkillsSection = styled.section`
  padding: 100px 5%;
  background: ${({ theme }) => theme.colors.background};
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const SectionTitle = styled.h2`
  font-size: ${({ theme }) => theme.typography.sizes.h2};
  text-align: center;
  margin-bottom: 2rem;
`;