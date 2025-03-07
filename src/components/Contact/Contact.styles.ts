import styled from 'styled-components';
import { motion } from 'framer-motion';

export const ContactSection = styled.section`
  padding: 100px 5%;
`;

export const ContactForm = styled.form`
  max-width: 600px;
  margin: 0 auto;
`;

export const FormGroup = styled.div`
  margin-bottom: 1.5rem;
`;

export const Input = styled.input`
  width: 100%;
  padding: 0.8rem;
  border: 1px solid #ddd;
  border-radius: 4px;
`;

export const TextArea = styled.textarea`
  width: 100%;
  padding: 0.8rem;
  border: 1px solid #ddd;
  border-radius: 4px;
  min-height: 150px;
`;

export const SubmitButton = styled(motion.button)`
  background: ${({ theme }) => theme.colors.primary};
  color: white;
  padding: 1rem 2rem;
  border: none;
  border-radius: 4px;
  cursor: pointer;
`;

export const Drawer = styled.div<{ $isOpen: boolean }>`
  position: fixed;
  right: ${({ $isOpen }) => ($isOpen ? '0' : '-300px')};
  top: 0;
  width: 300px;
  height: 100%;
  background: ${({ theme }) => theme.colors.background};
  box-shadow: -2px 0 5px rgba(0, 0, 0, 0.1);
  transition: right 0.3s ease;
  z-index: 1000;
`;

export const DrawerContent = styled.div`
  padding: 2rem;
`;

export const DrawerButton = styled.button`
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
`;