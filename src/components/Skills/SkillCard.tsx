import React from 'react';
import { Card, SkillLogo, SkillName } from './SkillCard.styles';
import { BASE_URL } from '../../config';

interface SkillCardProps {
  name: string;
  logo: string;
}

const SkillCard: React.FC<SkillCardProps> = ({ name, logo }) => {
  return (
    <Card>
      <SkillLogo src={`${BASE_URL}/assets/icons/${logo}`} alt={`${name} logo`} />
      <SkillName>{name}</SkillName>
    </Card>
  );
};

export default SkillCard;