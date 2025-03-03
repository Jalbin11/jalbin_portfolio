import React from 'react';
import { CardContainer, Logo } from './Card.styles';

interface CardProps {
  title: string;
  subtitle: string;
  date?: string;
  children: React.ReactNode;
  className?: string;
  logo?: string;
}

const Card: React.FC<CardProps> = ({ title, subtitle, date, children, className, logo }) => {
  return (
    <CardContainer className={className}>
      {logo && <Logo src={logo} alt={`${title} logo`} />}
      <h3>{title}</h3>
      <h4>{subtitle}</h4>
      {date && <p>{date}</p>}
      <div>{children}</div>
    </CardContainer>
  );
};

export default Card;