import React, { useContext } from 'react';
import { ThemeContext } from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  ToggleSwitchLabel,
  ToggleSwitchWrapper,
  Switch,
  IconWrapper,
} from './theme-toggler-button.styles';

type ThemeTogglerButtonProps = {
  toggleTheme: () => void;
};

const ThemeToggleButton = ({ toggleTheme }: ThemeTogglerButtonProps) => {
  const { theme } = useContext(ThemeContext);

  return (
    <div>
      <ToggleSwitchWrapper>
        <Switch
          id="toggle-theme"
          type="checkbox"
          checked={theme === 'dark'}
          onChange={() => toggleTheme()}
        />
        <ToggleSwitchLabel htmlFor="toggle-theme">
          <IconWrapper className={`${theme === 'dark' ? 'dark' : ''}`}>
            <FontAwesomeIcon
              icon={
                theme === 'dark' ? ['fas', 'lightbulb'] : ['far', 'lightbulb']
              }
            />
          </IconWrapper>
        </ToggleSwitchLabel>
      </ToggleSwitchWrapper>
    </div>
  );
};

export default ThemeToggleButton;
