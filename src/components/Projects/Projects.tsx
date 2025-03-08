import React from 'react';
import { ProjectsSection, ProjectsGrid, SectionTitle } from './Projects.styles';
import ProjectCard from './ProjectCard';
import { BASE_URL } from '../../config';

const projectsData = [
  {
    title: "This Portfolio Site!",
    description: "I used this site to make my first React App...",
    image: `${BASE_URL}/assets/jta.png`,  // Remove /icons/
    technologies: ["React", "TypeScript", "Styled-Components", "Framer Motion", "Node.js"],
    link: "https://github.com/Jalbin11/jalbin_portfolio"
  },
  {
    title: "Custom SQLite DB Interface",
    description: "Developed a custom SQLite database interface...",
    image: `${BASE_URL}/assets/LocusBotFunny.png`,  // Remove /icons/
    technologies: ["SQLite", "Powershell", "Node.js", "React", "JavaScript"],
    link: "https://github.com/Jalbin11"
  }
];

const Projects: React.FC = () => {
  return (
    <ProjectsSection id="projects">
      <SectionTitle>My Projects</SectionTitle>
      <ProjectsGrid>
        {projectsData.map((project, index) => (
          <ProjectCard key={index} {...project} />
        ))}
      </ProjectsGrid>
    </ProjectsSection>
  );
};

export default Projects;