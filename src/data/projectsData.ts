import { BASE_URL } from '../config';

export interface ProjectData {
  id: string;
  title: string;
  description: string;
  image: string;
  technologies: string[];
  link: string;
}

export const projectsData: ProjectData[] = [
  {
    id: 'portfolio',
    title: "This Portfolio Site!",
    description: "I used this site to make my first React App...",
    image: `${BASE_URL}/assets/jta.png`,
    technologies: ["React", "TypeScript", "Styled-Components", "Framer Motion", "Node.js"],
    link: "/projects/portfolio"
  },
  {
    id: 'sqlite',
    title: "Custom SQLite DB Interface",
    description: "Developed a custom SQLite database interface...",
    image: `${BASE_URL}/assets/LocusBotFunny.png`,
    technologies: ["SQLite", "Powershell", "Node.js", "React", "JavaScript"],
    link: "/projects/sqlite"
  }
];