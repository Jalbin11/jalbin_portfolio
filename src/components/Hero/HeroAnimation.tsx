import { motion } from 'framer-motion';

const slideFromLeft = {
  hidden: {
    x: -100,
    opacity: 0
  },
  visible: (custom: number) => ({
    x: 0,
    opacity: 1,
    transition: {
      delay: custom * 0.2,
      duration: 0.8,
      ease: [0.6, 0.01, -0.05, 0.9]
    }
  })
};

const Hero = () => {
  return (
    <HeroContainer>
      <HeroContent>
        <motion.div
          custom={0}
          variants={slideFromLeft}
          initial="hidden"
          animate="visible"
        >
          <Title>Jacob Albin</Title>
        </motion.div>

        <motion.div
          custom={1}
          variants={slideFromLeft}
          initial="hidden"
          animate="visible"
        >
          <Subtitle>Software Engineer</Subtitle>
        </motion.div>

        <motion.div
          custom={2}
          variants={slideFromLeft}
          initial="hidden"
          animate="visible"
        >
          <CTAButton>View Projects</CTAButton>
        </motion.div>
      </HeroContent>
    </HeroContainer>
  );
};