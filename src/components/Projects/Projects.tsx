import React from 'react';
import { ProjectsSection, ProjectsGrid, SectionTitle } from './Projects.styles';
import ProjectCard from './ProjectCard';

const projectsData = [
  {
    title: "Project 1",
    description: "Description of project 1",
    image: "/path-to-image1.jpg",
    technologies: ["React", "TypeScript", "Node.js"],
    link: "https://project1.com"
  },
  // Add more projects as needed
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