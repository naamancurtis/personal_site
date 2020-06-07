import React from 'react';
import { ThemeProvider } from 'styled-components';

import { darkTheme, lightTheme } from '../../styles/theme';

import Greeting from './greeting.component';

export default {
  component: Greeting,
  title: 'Greeting',
};

export const TypedGreeting = () => (
  <ThemeProvider theme={darkTheme}>
    <Greeting />
  </ThemeProvider>
);
