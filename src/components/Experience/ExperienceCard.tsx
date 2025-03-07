import React from 'react';
import { CardContainer, Logo, Header, Content, BulletPoint } from './ExperienceCard.styles';

interface ExperienceCardProps {
  title: string;
  subtitle: string;
  date?: string;
  logo?: string;
  children: React.ReactNode;
}

const ExperienceCard: React.FC<ExperienceCardProps> = ({ title, subtitle, date, logo, children }) => {
  return (
    <CardContainer>
      <Header>
        {logo && <Logo src={logo} alt={`${title} logo`} />}
        <div>
          <h3>{title}</h3>
          <h4>{subtitle}</h4>
          {date && <p>{date}</p>}
        </div>
      </Header>
      <Content>
        {children}
      </Content>
    </CardContainer>
  );
};

export default ExperienceCard;