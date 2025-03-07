import styled from 'styled-components';

export const CarouselContainer = styled.div`
  width: 100%;
  max-width: 1500px;
  margin: 0 auto;
  position: relative;
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

export const CustomArrow = styled.button<{ direction: 'left' | 'right' }>`
  position: absolute;
  top: 50%;
  ${({ direction }) => (direction === 'left' ? 'left: -30px;' : 'right: -30px;')}
  transform: translateY(-50%);
  background: transparent;
  border: none;
  color: ${({ theme }) => theme.colors.primary};
  font-size: 2rem;
  cursor: pointer;
  transition: background 0.1s ease;

  &:hover {
    background: ${({ theme }) => theme.colors.secondary};
    color: white;
  }
`;