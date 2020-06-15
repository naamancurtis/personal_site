import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import {
  ToggleSwitchLabel,
  ToggleSwitchWrapper,
  Switch,
  IconWrapper,
} from './theme-toggler-button.styles';
import { ThemeContext } from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const ThemeToggleButton = ({ toggleTheme }) => {
  const theme = useContext(ThemeContext);

  return (
    <div>
      <ToggleSwitchWrapper>
        <Switch
          id="toggle-theme"
          type="checkbox"
          value={theme.theme === 'dark'}
          checked={theme.theme === 'dark'}
          onChange={() => toggleTheme()}
        />
        <ToggleSwitchLabel htmlFor="toggle-theme">
          <IconWrapper className={`${theme.theme === 'dark' ? 'dark' : ''}`}>
            <FontAwesomeIcon
              icon={
                theme.theme === 'dark'
                  ? ['far', 'lightbulb']
                  : ['fas', 'lightbulb']
              }
            />
          </IconWrapper>
        </ToggleSwitchLabel>
      </ToggleSwitchWrapper>
    </div>
  );
};

ThemeToggleButton.propTypes = {
  toggleTheme: PropTypes.func.isRequired,
};

export default ThemeToggleButton;
