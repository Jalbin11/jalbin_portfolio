import styled from 'styled-components';

export const ProjectsSection = styled.section`
  padding: 100px 5%;
  background: ${({ theme }) => theme.colors.background};
`;

export const ProjectsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
  margin-top: 3rem;
`;

export const SectionTitle = styled.h2`
  font-size: ${({ theme }) => theme.typography.sizes.h2};
  text-align: center;
  margin-bottom: 2rem;
`;