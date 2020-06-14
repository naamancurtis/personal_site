import React, { useState, useEffect, useRef } from 'react';
import PropTypes from 'prop-types';

import StyledHeader from './header.styles';
import ThemeToggleButton from '../theme-toggle-button/theme-toggler-button.component';
import Logo from './logo/logo.component';

const Header = ({ toggleTheme }) => {
  const self = useRef(null);

  const handleScroll = () => {
    if (!self) return;
    if (window.scrollY > 15) {
      self.current.classList.add('scrolled');
    } else {
      self.current.classList.remove('scrolled');
    }
  };

  // Set up listener
  useEffect(() => {
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <StyledHeader ref={self}>
      <Logo />
      <ThemeToggleButton toggleTheme={toggleTheme} />
    </StyledHeader>
  );
};

Header.propTypes = {
  toggleTheme: PropTypes.func.isRequired,
};

export default Header;
