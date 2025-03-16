import React, { useEffect, useState } from 'react';
import { ExperienceSection, ExperienceTimeline, SectionTitle } from './Experience.styles';
import ExperienceCard from './ExperienceCard';
import { BulletPoint } from './ExperienceCard.styles';

const Experience: React.FC = () => {
    const [hasScrolled, setHasScrolled] = useState(false);


  useEffect(() => {
    const handleScroll = () => {
      setHasScrolled(true);
      window.removeEventListener('scroll', handleScroll);
    };

    window.addEventListener('scroll', handleScroll);

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <ExperienceSection id="experience">
      <SectionTitle>Education</SectionTitle>
      <ExperienceTimeline>
        <ExperienceCard
          title="Baylor University"
          subtitle="Bachelor of BA - Management Information Systems and Supply Chain Management"
          date="May 2023 | GPA: 3.4"
          logo="baylor-logo.png"
          link="https://www.baylor.edu/"
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <p>Dual BBA in Information Systems & Supply Chain Management, blending technical acumen with strategic business insights.</p>
          <ul>
            <BulletPoint>Baylor Library Digital Scholar: Certificate in Data Visualization and Geospatial Analysis</BulletPoint>
            <BulletPoint>Deans Gold Scholar Maintained 3.5+ out of major GPA all 4 years</BulletPoint>
            <BulletPoint>Recipient of the Daniel Heard Supply Chain Management Leadership Scholarship</BulletPoint>
            <BulletPoint>Relevant Coursework: SQL, Java, Python, SAP, Systems Analysis, Quantitative Analysis, Negotiation, Distribution Mgt, Procurement, Operations, Info Security, Project Mgt, Mgt Strategy</BulletPoint>
            <BulletPoint>Additional: Baylor Club Water Polo Goalie, APICS, ASCM, AITP, Bear Necessities, Alpha Tau Omega, TCSL D1 Team Captain, FHS Varsity Captain, Frisco 2nd Team All-District, TASCO Academic All-state</BulletPoint>
          </ul>
        </ExperienceCard>
      </ExperienceTimeline>

      <SectionTitle>Experience</SectionTitle>
      <ExperienceTimeline>
        <ExperienceCard
          title="Nike"
          subtitle="Warehouse Control Systems Analyst"
          date="Jun 2024 - Present"
          logo="nike-logo.png"
          link="https://www.nike.com/"
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <ul>
            <BulletPoint>Resolved 69+ high-priority incidents as technical production support for automated selecting and sortation solutions across all NA DCS, addressing both software and hardware issues.</BulletPoint>
            <BulletPoint>Maintained a 500-unit Locus Robotics fleet, optimizing operating strategy and system data through hardware and system maintenance, and facilitating software upgrades with vendors and change management.</BulletPoint>
            <BulletPoint>Enhanced team's system monitoring capabilities by developing, documenting, and sharing advanced queries for industrial hardware, such as Automated Storage and Retrieval Systems (ASRS), and sortation equipment.</BulletPoint>
            <BulletPoint>Leveraged SQL for large data analysis and automation to improve operational efficiency and problem-solving.</BulletPoint>
            <BulletPoint>Utilized Powershell, Windows Servers, and SQL for analytics workflow automations.</BulletPoint>
          </ul>
        </ExperienceCard>
        <ExperienceCard
          title="Veryable"
          subtitle="Corporate Strategy Intern"
          date="Aug 2022 - Dec 2022"
          logo="veryable-logo.png"
          link="https://www.veryableops.com/"
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.6 }}
        >
          <ul>
            <BulletPoint>Developed technical plans to optimize the automatic selection algorithm for the "Autofill" feature, projecting a 6% increase in daily demand fulfillment and $3.6 million in Annual Recurring Revenue (ARR).</BulletPoint>
            <BulletPoint>Analyzed over 120 million rows of data from 5000+ supply chain businesses using SQL to execute A/B experiments, driving data-driven improvements.</BulletPoint>
            <BulletPoint>Developed a database to monitor in-app activity, impacting engagement and executive decision-making.</BulletPoint>
            <BulletPoint>Successfully secured the first four new-logo product demos for an in-house SAAS tool with C-suite stakeholders, earning executive recognition for creative outreach strategies.</BulletPoint>
          </ul>
        </ExperienceCard>
        <ExperienceCard
          title="Camp Longhorn"
          subtitle="Senior Staff Head Counselor"
          date="Jun 2016 - Aug 2021"
          logo="camp-logo.png"
          link="https://www.camplonghorn.com/"
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.8 }}
        >
          <ul>
            <BulletPoint>Supported directors in managing a staff of 50+ counselors, providing leadership and guidance.</BulletPoint>
            <BulletPoint>Led annual Ranger leadership program, an 11-day camping trip for 22 campers, fostering teamwork and personal development.</BulletPoint>
            <BulletPoint>Effectively managed cabins of up to 29 high schoolers, demonstrating strong organizational and interpersonal skills.</BulletPoint>
            <BulletPoint>Developed and implemented creative leadership approaches to enhance camper experience and staff cohesion.</BulletPoint>
          </ul>
        </ExperienceCard>
      </ExperienceTimeline>
    </ExperienceSection>
  );
};

export default Experience;