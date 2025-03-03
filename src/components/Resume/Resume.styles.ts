import styled from 'styled-components';

export const ResumeContainer = styled.div`
  padding: 100px 5%;
  background: ${({ theme }) => theme.colors.background};
  color: ${({ theme }) => theme.colors.text};
`;

export const Section = styled.section`
  margin-bottom: 2rem;
`;

export const SectionTitle = styled.h2`
  font-size: ${({ theme }) => theme.typography.sizes.h2};
  margin-bottom: 1rem;
`;

export const List = styled.ul`
  list-style-type: disc;
  padding-left: 1.5rem;
`;

export const ListItem = styled.li`
  margin-bottom: 0.5rem;
`;