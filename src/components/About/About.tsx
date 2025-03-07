import React, { useState, useEffect } from 'react';
import {
  AboutSection,
  Headshot,
  AboutContent,
  Description,
  TextBubble,
  QuickReplyBubble,
  QuickReplyButton,
  TypingIndicator,
} from './About.styles';

const bubbleVariants = {
  hidden: { 
    scale: 0,
    opacity: 0 
  },
  visible: { 
    scale: 1,
    opacity: 1,
    transition: {
      duration: 0.8,
      ease: 'easeInOut'
    }
  }
};

const About: React.FC = () => {
  const [showFirstBubble, setShowFirstBubble] = useState(false);
  const [showTypingIndicator, setShowTypingIndicator] = useState(false);
  const [showSecondBubble, setShowSecondBubble] = useState(false);
  const [showQuickReplyBubble, setShowQuickReplyBubble] = useState(false);
  const [hasScrolled, setHasScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setHasScrolled(true);
      window.removeEventListener('scroll', handleScroll);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  useEffect(() => {
    if (hasScrolled) {
      setShowFirstBubble(true);
      setTimeout(() => {
        setShowTypingIndicator(true);
        setTimeout(() => {
          setShowTypingIndicator(false);
          setShowSecondBubble(true);
          setTimeout(() => {
            setShowQuickReplyBubble(true);
          }, 2000); // Slightly longer pause before the last reply
        }, 3000);
      }, 2000);
    }
  }, [hasScrolled]);

  return (
    <AboutSection id="about">
      <AboutContent>
        <Headshot src="/assets/headshot.jpg" alt="Headshot" />
        <Description>
          <h2>Jacob Albin: Innovating Automation for Efficiency and Observability</h2>
          {showFirstBubble && (
            <TextBubble
              initial="hidden"
              animate="visible"
              variants={bubbleVariants}
            >
              Hi, I am Jacob. A hard-working problem solver with a knack for data, automation and AI tech. I'd love to help make your life easier.
            </TextBubble>
          )}
          {showTypingIndicator && <TypingIndicator />}
          {showSecondBubble && (
            <TextBubble
              initial="hidden"
              animate="visible"
              variants={bubbleVariants}
            >
              Are there any problems or enhancements that I could help with?
            </TextBubble>
          )}
          {showQuickReplyBubble && (
            <QuickReplyBubble
              initial="hidden"
              animate="visible"
              variants={bubbleVariants}
            >
              <QuickReplyButton onClick={() => window.location.href = "#contact"}>
                Contact Me
              </QuickReplyButton>
            </QuickReplyBubble>
          )}
        </Description>
      </AboutContent>
    </AboutSection>
  );
};

export default About;