import React from 'react';
import { ThemeProvider } from 'styled-components';

import ThemeToggleButton from './theme-toggler-button.component';
import { darkTheme, lightTheme } from '../../styles/theme';

export default {
  component: ThemeToggleButton,
  title: 'Button',
};

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
