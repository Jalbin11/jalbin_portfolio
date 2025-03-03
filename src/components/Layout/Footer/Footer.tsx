import React from 'react';
import { FooterContainer, FooterContent, SocialLinks } from './Footer.styles';

const Footer: React.FC = () => {
  return (
    <FooterContainer>
      <FooterContent>
        <div>© 2024 Jacob Albin. All rights reserved.</div>
        <SocialLinks>
          <a href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer">GitHub</a>
          <a href="https://linkedin.com/in/yourusername" target="_blank" rel="noopener noreferrer">LinkedIn</a>
        </SocialLinks>
      </FooterContent>
    </FooterContainer>
  );
};

export default Footer;