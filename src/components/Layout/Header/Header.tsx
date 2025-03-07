import React, { useState, useEffect } from 'react';
import { HeaderContainer, Logo, Nav, NavItems, NavLink } from './Header.styles';
import { motion } from 'framer-motion';

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <HeaderContainer
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ type: "spring", stiffness: 100 }}
      style={{
        boxShadow: isScrolled ? '0 2px 10px rgba(0,0,0,0.1)' : 'none'
      }}
    >
      <Logo>JA</Logo>
      <Nav>
        <NavItems>
          {['Home', 'About', 'Skills', 'Experience', 'Projects','Contact'].map((item) => (
            <motion.li
              key={item}
              whileHover={{ y: -2 }}
              whileTap={{ y: 0 }}
            >
              <NavLink href={`#${item.toLowerCase()}`}>{item}</NavLink>
            </motion.li>
          ))}
        </NavItems>
      </Nav>
    </HeaderContainer>
  );
};

export default Header;