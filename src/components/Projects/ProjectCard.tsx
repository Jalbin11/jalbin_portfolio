import React, { useState } from 'react';
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
  shortDesc: string;
  longDesc: string;
  images: string[];
  technologies: string[];
  links: { label: string; url: string }[];
}

const ProjectCard: React.FC<ProjectCardProps> = ({
  title,
  shortDesc,
  longDesc,
  images,
  technologies,
  links
}) => {
  const [expanded, setExpanded] = useState(false);

  return (
    <Card
      onClick={() => setExpanded((prev) => !prev)}
      tabIndex={0}
      aria-expanded={expanded}
      style={{ cursor: 'pointer' }}
    >
      {images.length > 0 && (
        <ProjectImage src={images[0]} alt={title} />
      )}
      <ProjectInfo>
        <ProjectTitle>{title}</ProjectTitle>
        <ProjectDescription>{shortDesc}</ProjectDescription>
        <TechStack>
          {technologies.map((tech) => (
            <TechTag key={tech}>{tech}</TechTag>
          ))}
        </TechStack>
        {expanded && (
          <>
            {images.length > 1 && images.slice(1).map((img, i) => (
              <ProjectImage src={img} alt={`${title} screenshot ${i + 2}`} key={img} />
            ))}
            <ProjectDescription>{longDesc}</ProjectDescription>
            {links.length > 0 && (
              <div style={{ marginTop: '1rem' }}>
                {links.map(link => (
                  <a
                    key={link.url}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={e => e.stopPropagation()}
                    style={{ marginRight: '1rem', color: '#007bff', textDecoration: 'underline' }}
                  >
                    {link.label}
                  </a>
                ))}
              </div>
            )}
          </>
        )}
      </ProjectInfo>
    </Card>
  );
};

export default ProjectCard;