import styled from 'styled-components';

export const SidebarContainer = styled.aside<{ $isOpen: boolean }>`
  position: fixed;
  top: 0;
  right: ${({ $isOpen }) => ($isOpen ? '0' : '-250px')};
  width: 250px;
  height: 100%;
  background: ${({ theme }) => theme.colors.background};
  box-shadow: -2px 0 5px rgba(0, 0, 0, 0.1);
  z-index: 1000;
  padding: 1rem;
  transition: right 0.3s ease;
`;

export const CommandPalette = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

export const CommandInput = styled.input`
  padding: 0.5rem;
  border: 1px solid #ddd;
  border-radius: 4px;
  width: 100%;
`;

export const SidebarButton = styled.button`
  position: fixed;
  right: 0;
  top: 50%;
  transform: translateY(-50%);
  background: ${({ theme }) => theme.colors.primary};
  color: white;
  padding: 1rem;
  border: none;
  border-radius: 4px 0 0 4px;
  cursor: pointer;
  z-index: 1001;
`;