import React, { useState } from 'react';
import { ThemeProvider } from 'styled-components';

import GlobalStyles from './styles/global';
import { darkTheme, lightTheme } from './styles/theme';
import ThemeToggleButton from './components/theme-toggle-button/themeToggler';

const App = () => {
  const [theme, setTheme] = useState('dark');
  const toggleTheme = () => setTheme(theme === 'dark' ? 'light' : 'dark');

  return (
    <ThemeProvider theme={theme === 'dark' ? darkTheme : lightTheme}>
      <GlobalStyles />
      <h1> Hello </h1>
      <ThemeToggleButton theme={theme} toggleTheme={toggleTheme} />
    </ThemeProvider>
  );
};

export default App;
