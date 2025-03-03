import React from 'react';
import { SkillsSection, SkillsGrid, SectionTitle } from './Skills.styles';
import SkillCard from './SkillCard';

const skillsData = [
  { name: 'React', icon: '/icons/react.svg' },
  { name: 'TypeScript', icon: '/icons/typescript.svg' },
  { name: 'Node.js', icon: '/icons/nodejs.svg' },
  { name: 'Python', icon: '/icons/python.svg' }
];

const Skills: React.FC = () => (
  <SkillsSection id="skills">
    <SectionTitle>Skills & Technologies</SectionTitle>
    <SkillsGrid>
      {skillsData.map((skill) => (
        <SkillCard key={skill.name} {...skill} />
      ))}
    </SkillsGrid>
  </SkillsSection>
);

export default Skills;