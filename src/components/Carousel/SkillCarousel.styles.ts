import styled from 'styled-components';

export const CarouselContainer = styled.div`
  width: 100%;
  max-width: 800px;
  margin: 0 auto;
`;

export const SkillPill = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100px; /* Adjust size as needed */
  height: 100px; /* Adjust size as needed */
  background: ${({ theme }) => theme.colors.background};
  border-radius: 50px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  padding: 10px;
  text-align: center;
  margin: 10px;
`;

export const SkillLogo = styled.img`
  width: 60px; /* Consistent size */
  height: 60px; /* Consistent size */
  object-fit: contain;
`;