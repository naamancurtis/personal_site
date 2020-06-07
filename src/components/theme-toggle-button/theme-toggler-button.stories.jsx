import React from 'react';
import ThemeToggleButton from './themeToggler';
import {ThemeProvider} from 'styled-components';
import {darkTheme, lightTheme} from '../../styles/theme';

export default {
  component: ThemeToggleButton,
  title: 'Button',
}

export const dark = () => (
  <ThemeProvider theme={darkTheme}>
    <ThemeToggleButton theme="dark" toggleTheme={() => {}} />
  </ThemeProvider>
);

export const light = () => (
  <ThemeProvider theme={lightTheme}>
    <ThemeToggleButton theme="light" toggleTheme={() => {}} />
  </ThemeProvider>
);
