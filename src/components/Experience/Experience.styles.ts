import styled from 'styled-components';

export const ExperienceSection = styled.section`
  padding: 100px 5%;
  background: ${({ theme }) => theme.colors.background};
  color: ${({ theme }) => theme.colors.text};
  max-width: 1200px;
  margin: 0 auto;
`;

export const SectionTitle = styled.h2`
  font-size: ${({ theme }) => theme.typography.sizes.h2};
  margin-bottom: 1rem;
`;

export const ExperienceTimeline = styled.div`
  display: flex;
  flex-direction: column;
`;