import React from 'react';
import { ProjectsSection, ProjectsGrid, SectionTitle } from './Projects.styles';
import ProjectCard from './ProjectCard';

const projectsData = [
  {
    title: "This Portfolio Site!",
    description: "I used this site to make my first React App, showcasing a quick learning curve for new technologies to align with business needs. A fully customized personal portfolio website built from scratch to showcase my skills, projects, and professional journey. This site features a modern design, responsive layout, and interactive elements to provide an engaging user experience.",
    image: "/jta.png",
    technologies: ["React", "TypeScript", "Styled-Components", "Framer Motion", "Node.js"],
    link: "https://github.com/Jalbin11/jalbin_portfolio"
  },
  {
    title: "Custom SQLite DB Interface",
    description: "Developed a custom SQLite database interface to manage and query data as interim solution of robotics database connection. This project allowed large unpocessed robotics fleet reports to be downloaded as a.csv and parsed into a manageable database. This was built and distributed with windows Powershell, SQLite, JavaScript, and Node.js.",
    image: "/assets/LocusBotFunny.png",
    technologies: ["SQLite", "Powershell", "Node.js","React" ,"JavaScript"],
    link: "https://github.com/Jalbin11"
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