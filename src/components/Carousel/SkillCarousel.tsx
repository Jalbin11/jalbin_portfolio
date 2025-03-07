import React from 'react';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import { CarouselContainer, SkillPill, SkillLogo } from './SkillCarousel.styles';
import skillsData from '../../data/skillsData';

const responsive = {
  superLargeDesktop: {
    breakpoint: { max: 4000, min: 3000 },
    items: 5,
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 5,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 3,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
  },
};

const SkillCarousel: React.FC = () => {
  return (
    <CarouselContainer>
      <Carousel
        responsive={responsive}
        infinite={true}
        autoPlay={true}
        autoPlaySpeed={2000}
        keyBoardControl={true}
        showDots={false}
        containerClass="carousel-container"
        itemClass="carousel-item"
      >
        {skillsData.map((skill, index) => (
          <SkillPill key={index}>
            <SkillLogo src={skill.logo} alt={`${skill.name} logo`} />
          </SkillPill>
        ))}
      </Carousel>
    </CarouselContainer>
  );
};

export default SkillCarousel;