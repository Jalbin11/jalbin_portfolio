import React from 'react';
import {
  Card,
  ProjectImage,
  ProjectInfo,
  ProjectTitle,
  ProjectDescription,
  TechStack,
  TechTag
} from './ProjectCard.styles';

interface ProjectCardProps {
  title: string;
  description: string;
  image: string;
  technologies: string[];
  link: string;
}

const ProjectCard: React.FC<ProjectCardProps> = ({
  title,
  description,
  image,
  technologies,
  link
}) => {
  return (
    <Card
      whileHover={{ y: -10 }}
      transition={{ type: "spring", stiffness: 300 }}
    >
      <a href={link} target="_blank" rel="noopener noreferrer">
        <ProjectImage src={image} alt={title} />
        <ProjectInfo>
          <ProjectTitle>{title}</ProjectTitle>
          <ProjectDescription>{description}</ProjectDescription>
          <TechStack>
            {technologies.map((tech) => (
              <TechTag key={tech}>{tech}</TechTag>
            ))}
          </TechStack>
        </ProjectInfo>
      </a>
    </Card>
  );
};

export default ProjectCard;