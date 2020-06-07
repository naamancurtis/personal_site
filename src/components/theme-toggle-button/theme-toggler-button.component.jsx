import React from 'react';
import PropTypes from 'prop-types';
import {
  ToggleSwitchLabel,
  ToggleSwitchWrapper,
  Switch,
} from './theme-toggler-button.styles';

const ThemeToggleButton = ({ theme, toggleTheme }) => (
  <div>
    <ToggleSwitchWrapper>
      <Switch
        id="toggle-theme"
        type="checkbox"
        value={theme === 'dark'}
        checked={theme === 'dark'}
        onChange={() => toggleTheme()}
      />
      <ToggleSwitchLabel htmlFor="toggle-theme" />
    </ToggleSwitchWrapper>
  </div>
);

ThemeToggleButton.propTypes = {
  theme: PropTypes.string.isRequired,
  toggleTheme: PropTypes.func.isRequired,
};

export default ThemeToggleButton;
