import React, { useRef } from 'react';
import PropTypes from 'prop-types';

import StyledHeader, { HeaderBrand } from './header.styles';
import ThemeToggleButton from '../theme-toggle-button/theme-toggler-button.component';
import Logo from './logo/logo.component';

const Header = ({ toggleTheme }) => {
  return (
    <StyledHeader>
      <HeaderBrand>
        <Logo />
      </HeaderBrand>
      <ThemeToggleButton toggleTheme={toggleTheme} />
    </StyledHeader>
  );
};

Header.propTypes = {
  toggleTheme: PropTypes.func.isRequired,
};

export default Header;
