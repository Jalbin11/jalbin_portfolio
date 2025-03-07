import React from 'react';
import { SkillsSection, CarouselLabel } from './Skills.styles';
import SkillCarousel from '../Carousel/SkillCarousel';
import skillsData from '../../data/skillsData';

const Skills: React.FC = () => {
  return (
    <SkillsSection id="skills">
      <CarouselLabel>Languages</CarouselLabel>
      <SkillCarousel skills={skillsData.techLanguages} />
      <CarouselLabel>Automation & Data</CarouselLabel>
      <SkillCarousel skills={skillsData.automationData} inverse />
      <CarouselLabel>Business Intelligence</CarouselLabel>
      <SkillCarousel skills={skillsData.biApps} />
    </SkillsSection>
  );
};

export default Skills;