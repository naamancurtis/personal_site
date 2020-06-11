import React from 'react';
import { ThemeProvider } from 'styled-components';

import { darkTheme, lightTheme } from '../../styles/theme';

import Skills from './skills.component';

export default {
  component: Skills,
  title: 'Skills',
};

export const DarkSkills = () => <Skills />;
