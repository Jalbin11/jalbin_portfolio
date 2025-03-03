import React from 'react';
import { ResumeContainer, Section, SectionTitle, List, ListItem } from './Resume.styles';
import Card from './Card';
import baylorLogo from '../../assets/baylor-logo.png'; // Ensure you have the logo in the correct path

const Resume: React.FC = () => {
  return (
    <ResumeContainer id="resume">
      <Section>
        <SectionTitle>Summary</SectionTitle>
        <p>Data-driven, automation, and IT generalist with proven ability to optimize physical and digital automation solutions, develop large-scale data pipelines, and deliver strategic insights. Drives efficiency, system reliability, and measurable success by bridging technical solutions and teams with business objectives.</p>
      </Section>

      <Section>
        <SectionTitle>Education & Leadership</SectionTitle>
        <Card
          title="BAYLOR UNIVERSITY-Waco, Texas"
          subtitle="Bachelor of BA - Management Information Systems and Supply Chain Management"
          date="May 2023"
          className="baylor"
          logo={baylorLogo}
        >
          <p>GPA: 3.4</p>
          <List>
            <ListItem>Baylor Library Digital Scholar: Certificate in Data Visualization and Geospatial Analysis</ListItem>
            <ListItem>Recipient of the Dean's Gold & Daniel Heard Supply Chain Management Leadership Scholarships</ListItem>
            <ListItem>Additional: Baylor Club Water Polo Goalie, APICS, ASCM, AITP, Bear Necessities, Alpha Tau Omega T-shirt chair, TCSL D1 Team Captain, FHS Varsity Captain, Frisco 2nd Team All-District, TASCO Academic All-state</ListItem>
          </List>
        </Card>
      </Section>

      <Section>
        <SectionTitle>Experience</SectionTitle>
        <Card title="Nike" subtitle="Warehouse Control Systems Analyst - Dallas, TX" date="June 2024 - Present">
          <List>
            <ListItem>Resolved 70+ high-priority incidents as technical production support for software and hardware issues related to all North America warehouse Automated Selection and Sortation solutions.</ListItem>
            <ListItem>Achieved 99.99% aggregate uptime for automated selecting solution of 500-unit Locus Robotics fleet, by consulting operating strategy, optimizing data, performing bot and system maintenance.</ListItem>
            <ListItem>Enhanced team ability to research parcel tracking system messaging and monitor system health by developing, documenting, and sharing queries on Automated Sorters and Robotics databases.</ListItem>
            <ListItem>Published technical writing and incident documentation to ITSM platform and team knowledge base, to facilitate IT support through dispersed cross-functional teams, for 24-hour coverage.</ListItem>
            <ListItem>Change management for vendor software upgrades and QA testing new features at local DC.</ListItem>
            <ListItem>Volunteered in Nike 2024 Sustainability Champion Cohort, helping plan national R.A.D. comp.</ListItem>
          </List>
        </Card>
        <Card title="Veryable" subtitle="Business Analyst - Platform - Dallas, Tx" date="June 2023 - February 2024">
          <List>
            <ListItem>Spearheaded the design and oversaw development of over 15 key features for a unique SAAS Workforce Management Tool, enhancing user experience in DC staffing and scheduling cost mgt.</ListItem>
            <ListItem>Led technical project management to develop a data pipeline for in-app user activity monitoring.</ListItem>
            <ListItem>Integrated Amplitude tracking with a Table-Plus SQL database to deliver actionable insights, informing executive decision-making through effective data visualization and presentation.</ListItem>
            <ListItem>Successfully connected cold outreach to engage first 4 new-logo demos for in-house SAAS with C-suite operations leader prospects, earning executive recognition for persistence and creativity.</ListItem>
            <ListItem>Supported Integrations and SE Leads on new projects for feature and scheduling data pipeline.</ListItem>
          </List>
        </Card>
        <Card title="Camp Longhorn" subtitle="Senior Staff Head Counselor - Burnet, TX" date="June 2016 - August 2021">
          <List>
            <ListItem>Supported directors in managing staff of over 50 counselors and special programs as part of the Senior Staff team. Creative strategy in leadership including Head Counselor, cabins as large as 29</ListItem>
            <ListItem>Selected to co-lead an annual leadership program of 11 day bus ride camping trip for 22 Rangers.</ListItem>
          </List>
        </Card>
      </Section>

      <Section>
        <SectionTitle>Skills & Certifications</SectionTitle>
        <List>
          <ListItem>Technical Skill Set: Large Data Pipeline & Solutions Development, Automation, and Analysis with SQL, SQLite, Python, JavaScript, Powershell, Windows Servers, Zapier, Workato; IT Project and Database Management for Business Data Visualization, Analytics, Reporting, Consultation and Presentation.</ListItem>
          <ListItem>Supply Chain Leadership: Warehouse management in IT systems consulting for robotics and sorter support, leveraging courses & skills in Project, Distribution, Procurement, & sustainability Management, Negotiation & Conflict Resolution, to drive operational excellence and data-driven decision-making.</ListItem>
          <ListItem>Certifications: Locus Robotics Site Champion, Workato Automation Pro 1-3</ListItem>
        </List>
      </Section>
    </ResumeContainer>
  );
};

export default Resume;