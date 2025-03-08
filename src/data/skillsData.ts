// src/data/skillsData.ts
import { BASE_URL } from '../config';

const skillsData = {
  techLanguages: [
    { name: 'CSS', logo: `${BASE_URL}/assets/icons/css-logo.png` },
    { name: 'HTML', logo: `${BASE_URL}/assets/icons/html-logo.png` },
    { name: 'JavaScript', logo: `${BASE_URL}/assets/icons/javascript-logo.png` },
    { name: 'TypeScript', logo: `${BASE_URL}/assets/icons/typescript-logo.png` },
    { name: 'Python', logo: `${BASE_URL}/assets/icons/python-logo.jpeg` },
    { name: 'React', logo: `${BASE_URL}/assets/icons/react-logo.png` },
    { name: 'GraphQL', logo: `${BASE_URL}/assets/icons/graphQL-logo.png` },
  ],
  automationData: [
    { name: 'GitHub', logo: `${BASE_URL}/assets/icons/github-logo.png` },
    { name: 'DBeaver', logo: `${BASE_URL}/assets/icons/dbeaver-logo.png` },
    { name: 'REST API', logo: `${BASE_URL}/assets/icons/restapi-logo.png` },
    { name: 'PowerShell', logo: `${BASE_URL}/assets/icons/powershell-logo.png` },
    { name: 'SQL', logo: `${BASE_URL}/assets/icons/SQL-logo.png` },
    { name: 'Snowflake', logo: `${BASE_URL}/assets/icons/snowflake-logo.png` },
    { name: 'Splunk', logo: `${BASE_URL}/assets/icons/splunk-logo.png` },
  ],
  biApps: [
    { name: 'PowerBI', logo: `${BASE_URL}/assets/icons/powerbi-logo.jpeg` },
    { name: 'Tableau', logo: `${BASE_URL}/assets/icons/tableau-logo.png` },
    { name: 'Looker', logo: `${BASE_URL}/assets/icons/looker-logo.png` },
    { name: 'Salesforce', logo: `${BASE_URL}/assets/icons/salesforce-logo.png` },
    { name: 'HubSpot', logo: `${BASE_URL}/assets/icons/hubspot-logo.png` },
    { name: 'Make', logo: `${BASE_URL}/assets/icons/make-logo.png` },
    { name: 'Zapier', logo: `${BASE_URL}/assets/icons/zapier-logo.png` },
  ],
};

export default skillsData;