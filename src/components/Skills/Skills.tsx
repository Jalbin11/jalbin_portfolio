import React from 'react';
import { SkillsSection, SectionTitle } from './Skills.styles';
import SkillCarousel from '../Carousel/SkillCarousel';

const Skills: React.FC = () => {
  return (
    <SkillsSection id="skills">
      <SectionTitle>Skills & Technologies</SectionTitle>
      <SkillCarousel />
    </SkillsSection>
  );
};

export default Skills;