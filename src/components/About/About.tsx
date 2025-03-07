import React from 'react';
import { AboutSection, Headshot, AboutContent, Description } from './About.styles';

const About: React.FC = () => {
  return (
    <AboutSection id="about">
      <Headshot src="/assets/headshot.jpg" alt="Headshot" />
      <Description>
        <h2>About Me</h2>
        <p>...</p>
      </Description>
    </AboutSection>
  );
};

export default About;