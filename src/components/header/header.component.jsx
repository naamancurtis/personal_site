import React from 'react';
import PropTypes from 'prop-types';

import StyledHeader, { HeaderBrand, HeaderBrandCurly } from './header.styles';
import ThemeToggleButton from '../theme-toggle-button/theme-toggler-button.component';

const Header = ({ toggleTheme }) => {
  return (
    <StyledHeader>
      <HeaderBrand>
        <HeaderBrandCurly>{'{'}</HeaderBrandCurly>
        {' Naaman Curtis '.toUpperCase()}
        <HeaderBrandCurly>{'}'}</HeaderBrandCurly>
      </HeaderBrand>
      <ThemeToggleButton toggleTheme={toggleTheme} />
    </StyledHeader>
  );
};

Header.propTypes = {
  toggleTheme: PropTypes.func.isRequired,
};

export default Header;
