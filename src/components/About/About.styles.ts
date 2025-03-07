import styled from 'styled-components';

export const AboutSection = styled.section`
  padding: 100px 10%;
  background: ${({ theme }) => theme.colors.background};
`;

export const AboutContent = styled.div`
  display: grid;
  grid-template-columns: 1fr 2fr;
  gap: 4rem;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 2rem;
  }
`;

export const Headshot = styled.img`
  width: 40%;
  border-radius: 50%;
  postion: center;
  margin: 0 auto;
  display: block;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    transition: transform 0.3s ease, box-shadow 0.3s ease;
`;

export const Description = styled.div`
  h2 {
    font-size: ${({ theme }) => theme.typography.sizes.h2};
    margin-bottom: 1rem;
  }

  p {
    font-size: ${({ theme }) => theme.typography.sizes.body};
    margin-bottom: 1rem;
  }
`;