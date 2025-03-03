import React from 'react';
import { Card, SkillIcon, SkillName } from './SkillCard.styles';

interface SkillCardProps {
  name: string;
  icon: string;
}

const SkillCard: React.FC<SkillCardProps> = ({ name, icon }) => (
  <Card
    whileHover={{ y: -5 }}
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
  >
    <SkillIcon src={icon} alt={name} />
    <SkillName>{name}</SkillName>
  </Card>
);

export default SkillCard;