import React from 'react';
import { ProjectsSection, ProjectsGrid, SectionTitle } from './Projects.styles';
import ProjectCard from './ProjectCard';
import { BASE_URL } from '../../config';

const projectsData = [
  {
    title: 'FridgeAI',
    shortDesc: 'Developed an intelligent web application, FridgeAI, to revolutionize home food management by tracking inventory, suggesting recipes, and minimizing waste.',
    longDesc: 'FridgeAI is an innovative web application designed to optimize household food inventory and reduce waste. This platform empowers users to efficiently manage their refrigerator contents by tracking expiration dates, categorizing items, and providing intelligent recipe suggestions based on available ingredients. The application features a user-friendly interface for seamless interaction and robust backend logic to process and analyze food data. This project demonstrates strong capabilities in web development, data management, and the application of intelligent systems to solve everyday challenges, promoting sustainable living through smart food consumption.',
    links: [
      { label: 'GitHub', url: 'https://github.com/Albin-Group/fresh-find-food-saver' },
      { label: 'Live Site', url: 'https://fresh-find-food-saver.lovable.app/'
      }
    ],
    images: [
      `${BASE_URL}/assets/FridgeAI.png` // From provided data
    ],
    technologies: ["Web App", "AI", "Inventory Management"]
  },
    {
    title: 'Direct Health Management',
    shortDesc: 'Designed and implemented a modern, responsive business landing page for a medical supply company, establishing a strong digital presence.',
    longDesc: 'Direct Health Management represents a contemporary and fully responsive landing page specifically developed for a medical supply business. The site features a clean, professional design that effectively highlights key products and services. Integrated contact forms streamline client inquiries, providing a robust communication channel. Built with React for a dynamic user interface and deployed on Netlify for optimal performance, this project ensures a professional web presence that is highly optimized for both desktop and mobile users, enhancing accessibility and user engagement.',
    links: [
      { label: 'Live Site', url: 'https://directhealthmanagement.netlify.app/' }
    ],
    images: [
      `${BASE_URL}/assets/DHM_UI.png`, // Use existing image if available
      'https://directhealthmanagement.netlify.app/og-image.png' // From provided data
    ],
    technologies: ["React", "Netlify", "Responsive Design"]
  },
  {
    title: 'Portfolio Project',
    shortDesc: 'A dynamic personal portfolio website meticulously crafted with React to showcase diverse technical proficiencies and project accomplishments.',
    longDesc: 'This comprehensive personal portfolio serves as a central hub for my professional work, skills, and contact information. Engineered with React, it leverages a component-based architecture for modularity and maintainability. Styling is precisely managed with styled-components, ensuring a cohesive and visually appealing user interface. The site is efficiently deployed via GitHub Pages, demonstrating proficiency in modern front-end development workflows and continuous deployment practices. This project effectively highlights my ability to build responsive, high-performance web applications.',
    links: [
      { label: 'GitHub', url: 'https://github.com/Jalbin11/jalbin_portfolio' },
      { label: 'Live Site', url: 'https://Jalbin11.github.io/jalbin_portfolio' }
    ],
    images: [
      `${BASE_URL}/assets/jta.png`, // Use existing image if available
      // '/images/portfolio2.png' // If you want to add this, ensure the image exists
    ],
    technologies: ["React", "TypeScript", "Styled-Components", "Framer Motion", "Node.js"]
  },
  {
    title: 'SQLite Project',
    shortDesc: 'Developed a robust application demonstrating seamless SQLite database integration for efficient data management within a web environment.',
    longDesc: 'This project meticulously illustrates the comprehensive integration of SQLite within a web application, showcasing full Create, Read, Update, and Delete (CRUD) operations. It features a well-structured database schema design, optimized for data integrity and performance. The backend seamlessly interacts with a responsive React frontend, providing an intuitive user experience for data manipulation. This initiative highlights expertise in database management, API development, and the creation of interactive, data-driven web applications.',
    links: [
      { label: 'GitHub', url: 'https://github.com/Jalbin11/sqlite_project' }
    ],
    images: [
      `${BASE_URL}/assets/LocusBotFunny.png`, // Use existing image if available
      // '/images/sqlite1.png' // If you want to add this, ensure the image exists
    ],
    technologies: ["SQLite", "React", "API", "Database"]
  },
  {
    title: 'NFL Database Reporting Python App',
    shortDesc: 'A robust Python application designed for dynamic, multi-criteria filtering and reporting on large datasets, exemplified by NFL player statistics.',
    longDesc: 'This upcoming project develops a sophisticated Python application that empowers users to generate highly customized reports from complex datasets. Utilizing a robust database backend, the system will allow for intricate multi-filter queries across various categories, such as player position, team conference, weight ranges (e.g., 150-220 pounds), or team roster compositions (e.g., more than 6 linebackers). This tool aims to provide unparalleled flexibility in data analysis, offering actionable insights through a user-friendly interface.',
    links: [],
    images: [
      `${BASE_URL}/assets/NFL_Logo.png` // From provided data
    ],
    technologies: ["Python", "Database", "Reporting"]
  },
  {
    title: 'Coming Soon',
    shortDesc: 'More innovative projects will be added here, reflecting continuous skill development and new technical explorations.',
    longDesc: 'B2B Automations, Creator Shares Marketplace, Data/AI API Automated Flows, and more projects are in the pipeline, showcasing ongoing skill enhancement and exploration of new technologies. Stay tuned for updates as I continue to innovate and expand my portfolio with cutting-edge solutions.',
    links: [],
    images: [],
    technologies: []
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