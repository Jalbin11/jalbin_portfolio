import React, { useState } from 'react';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import { CarouselContainer, SkillPill, SkillLogo, CustomArrow } from './SkillCarousel.styles';

const responsive = {
  superLargeDesktop: {
    breakpoint: { max: 4000, min: 3000 },
    items: 8,
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 6,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 5,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 3,
  },
};

interface SkillCarouselProps {
  skills: { name: string; logo: string }[];
  inverse?: boolean;
}

const CustomLeftArrow = ({ onClick }: { onClick?: () => void }) => (
  <CustomArrow onClick={onClick} direction="left">
    &lt;
  </CustomArrow>
);

const CustomRightArrow = ({ onClick }: { onClick?: () => void }) => (
  <CustomArrow onClick={onClick} direction="right">
    &gt;
  </CustomArrow>
);

const SkillCarousel: React.FC<SkillCarouselProps> = ({ skills, inverse }) => {
  const [isAutoPlay, setIsAutoPlay] = useState(true);

  const handleArrowClick = () => {
    setIsAutoPlay(false);
  };

  return (
    <CarouselContainer>
      <CustomLeftArrow onClick={handleArrowClick} /> {/* Left Arrow */}
      <Carousel
        responsive={responsive}
        infinite={true}
        autoPlay={isAutoPlay}
        autoPlaySpeed={2000}
        keyBoardControl={true}
        showDots={false}
        containerClass="carousel-container"
        itemClass="carousel-item"
        rtl={inverse}
        customLeftArrow={<CustomLeftArrow onClick={handleArrowClick} />}
        customRightArrow={<CustomRightArrow onClick={handleArrowClick} />}
        transitionDuration={500} // Smoother transition
        arrows
      >
        {skills.map((skill, index) => (
          <SkillPill key={index}>
            <SkillLogo src={skill.logo} alt={`${skill.name} logo`} />
          </SkillPill>
        ))}
      </Carousel>
      <CustomRightArrow onClick={handleArrowClick} /> {/* Right Arrow */}
    </CarouselContainer>
  );
};

export default SkillCarousel;