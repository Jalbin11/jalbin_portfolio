import styled from 'styled-components';

export const CardContainer = styled.div`
  background: ${({ theme }) => theme.colors.background};
  border: 1px solid ${({ theme }) => theme.colors.secondary};
  border-radius: 8px;
  padding: 1.5rem;
  margin-bottom: 1.5rem;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease, box-shadow 0.3s ease;

  &:hover {
    transform: scale(1.05);
    box-shadow: 0 8px 12px rgba(0, 0, 0, 0.2);
  }

  h3 {
    margin: 0 0 0.5rem 0;
    font-size: ${({ theme }) => theme.typography.sizes.h3};
  }

  h4 {
    margin: 0 0 1rem 0;
    font-size: ${({ theme }) => theme.typography.sizes.h4};
    color: ${({ theme }) => theme.colors.accent};
  }

  p {
    margin: 0 0 1rem 0;
    font-size: ${({ theme }) => theme.typography.sizes.body};
    color: ${({ theme }) => theme.colors.text}CC;
  }

  div {
    font-size: ${({ theme }) => theme.typography.sizes.body};
    color: ${({ theme }) => theme.colors.text};
  }
`;

export const Logo = styled.img`
  width: 60px;
  height: 60px;
  object-fit: contain;
  margin-right: 1rem;
`;

export const Header = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 1rem;
`;

export const Content = styled.div`
  font-size: ${({ theme }) => theme.typography.sizes.body};
  color: ${({ theme }) => theme.colors.text};
  ul {
    padding-left: 1.5rem;
  }
`;

export const BulletPoint = styled.li`
  margin-bottom: 0.5rem;
  &:before {
    content: '•';
    color: ${({ theme }) => theme.colors.accent};
    display: inline-block;
    width: 1em;
    margin-left: -1em;
  }
`;