import styled from 'styled-components';

export const Card = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 120px; /* Adjust size as needed */
  height: 150px; /* Adjust size as needed */
  background: ${({ theme }) => theme.colors.background};
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  padding: 10px;
  text-align: center;
  margin: 10px;
`;

export const SkillLogo = styled.img`
  width: 60px; /* Consistent size */
  height: 60px; /* Consistent size */
  object-fit: contain;
  margin-bottom: 8px;
`;

export const SkillName = styled.span`
  font-size: ${({ theme }) => theme.typography.sizes.body};
  color: ${({ theme }) => theme.colors.text};
`;