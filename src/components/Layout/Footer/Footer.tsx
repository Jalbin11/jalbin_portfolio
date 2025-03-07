import React from 'react';
import { FooterContainer, FooterContent, SocialLinks } from './Footer.styles';

const Footer: React.FC = () => {
  return (
    <FooterContainer>
      <FooterContent>
        <div>© 2024 Jacob Albin. All rights reserved.</div>
        <SocialLinks>
          <a href="https://github.com/Jalbin11" target="_blank" rel="noopener noreferrer">GitHub</a>
          <a href="https://www.linkedin.com/in/jacob-albin-540b80196/" target="_blank" rel="noopener noreferrer">LinkedIn</a>
          <a href="https://www.instagram.com/jacob.albin_/" target="_blank" rel="noopener noreferrer">Instagram</a>
        </SocialLinks>
      </FooterContent>
    </FooterContainer>
  );
};

export default Footer;