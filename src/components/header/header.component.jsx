import React from 'react';
import PropTypes from 'prop-types';

import StyledHeader, { HeaderBrand, HeaderBrandThin } from './header.styles';
import ThemeToggleButton from '../theme-toggle-button/theme-toggler-button.component';

const Header = ({ toggleTheme }) => {
  return (
    <StyledHeader>
      <HeaderBrand>
        <HeaderBrandThin>{'{'}</HeaderBrandThin>
        {' Naaman Curtis '.toUpperCase()}
        <HeaderBrandThin>{'}'}</HeaderBrandThin>
      </HeaderBrand>
      <ThemeToggleButton toggleTheme={toggleTheme} />
    </StyledHeader>
  );
};

Header.propTypes = {
  toggleTheme: PropTypes.func.isRequired,
};

export default Header;
