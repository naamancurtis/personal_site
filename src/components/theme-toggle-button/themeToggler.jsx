import React from 'react';
import {
  ToggleSwitchLabel,
  ToggleSwitchWrapper,
  Switch,
} from './themeToggler.styles';

const ThemeToggleButton = ({ toggleTheme }) => (
  <div>
    <ToggleSwitchWrapper>
      <Switch
        id="toggle-theme"
        type="checkbox"
        onChange={(e) => console.log('Clicked checkbox', e.target.value)}
      />
      <ToggleSwitchLabel
        htmlFor="toggle-theme"
        onChange={(e) =>
          console.log('Something to do with label', e.target.value)
        }
      />
    </ToggleSwitchWrapper>
  </div>
);

export default ThemeToggleButton;
