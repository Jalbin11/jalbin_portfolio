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

const getPrimaryColor = (logo: string): string => {
  switch (logo) {
    case 'baylor-logo.png':
      return '#003015'; // Baylor green
    case 'nike-logo.png':
      return '#111111'; // Nike black
    case 'veryable-logo.png':
      return '#0073e6'; // Veryable blue
    case 'camp-logo.png':
      return '#ff6600'; // Camp Longhorn orange
    default:
      return '#ffffff'; // Default white
  }
};

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
  const bgColor = logo ? getPrimaryColor(logo) : '#ffffff';

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
        <PeekabooContainer bgColor={bgColor}>
          <a href={link} target="_blank" rel="noopener noreferrer">
            <PeekabooLogo src={`${BASE_URL}/assets/${logo}`} alt={`${title} logo`} />
          </a>
        </PeekabooContainer>
      )}
      <Content>{children}</Content>
    </CardContainer>
  );
};

export default ExperienceCard;