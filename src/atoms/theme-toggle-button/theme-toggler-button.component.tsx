import React, { useContext } from 'react';
import {
  ToggleSwitchLabel,
  ToggleSwitchWrapper,
  Switch,
  IconWrapper,
} from './theme-toggler-button.styles';
import { ThemeContext, DefaultTheme } from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

type ThemeTogglerButtonProps = {
  toggleTheme: () => void;
};

const ThemeToggleButton = ({ toggleTheme }: ThemeTogglerButtonProps) => {
  const { theme } = useContext<DefaultTheme>(ThemeContext);

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

// value={theme === 'dark'} was on switch

export default ThemeToggleButton;
