import React from 'react';
import {func, string} from 'prop-types';
import {
  ToggleSwitchLabel,
  ToggleSwitchWrapper,
  Switch,
} from './themeToggler.styles';

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
      <ToggleSwitchLabel
        htmlFor="toggle-theme"
              />
    </ToggleSwitchWrapper>
  </div>
);

ThemeToggleButton.propTypes = {
  theme: string.isRequired,
  toggleTheme: func.isRequired,
}

export default ThemeToggleButton;
