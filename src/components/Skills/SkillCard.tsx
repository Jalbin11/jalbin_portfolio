import React from 'react';
import { Card, SkillLogo, SkillName } from './SkillCard.styles';

interface SkillCardProps {
  name: string;
  logo: string;
}

const SkillCard: React.FC<SkillCardProps> = ({ name, logo }) => {
  return (
    <Card>
      <SkillLogo src={logo} alt={`${name} logo`} />
      <SkillName>{name}</SkillName>
    </Card>
  );
};

export default SkillCard;