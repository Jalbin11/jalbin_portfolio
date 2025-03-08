import React from 'react';
import { CardContainer, Logo, PeekabooContainer, PeekabooLogo, Header, Content } from './ExperienceCard.styles';
import { BASE_URL } from '../../config';

interface ExperienceCardProps {
  title: string;
  subtitle: string;
  date?: string;
  logo?: string;
  link?: string;
  children: React.ReactNode;
  style?: React.CSSProperties;
  initial?: any;
  animate?: any;
  transition?: any;
}

const ExperienceCard: React.FC<ExperienceCardProps> = ({
  title,
  subtitle,
  date,
  logo,
  link,
  children,
  style,
  initial,
  animate,
  transition
}) => {
  return (
    <CardContainer style={style} initial={initial} animate={animate} transition={transition}>
      <Header>
        {logo && <Logo src={`${BASE_URL}/assets/${logo}`} alt={`${title} logo`} />}
        <div>
          <h3>{title}</h3>
          <h4>{subtitle}</h4>
          {date && <p>{date}</p>}
        </div>
      </Header>
      {logo && (
        <PeekabooContainer>
          <a href={link} target="_blank" rel="noopener noreferrer">
            <PeekabooLogo src={`${BASE_URL}/assets/${logo}`} alt={`${title} logo`} />
          </a>
        </PeekabooContainer>
      )}
      <Content>{children}</Content>
    </CardContainer>
  );
};

export default ExperienceCard;  // Add default export