import React, { useState } from 'react';
import { ThemeProvider } from 'styled-components';

import GlobalStyles from './styles/global';
import { darkTheme, lightTheme } from './styles/theme';
import Header from './components/header/header.component';
import Greeting from './components/greeting/greeting.component';

const App = () => {
  const [theme, setTheme] = useState('dark');
  const toggleTheme = () => setTheme(theme === 'dark' ? 'light' : 'dark');

  return (
    <ThemeProvider theme={theme === 'dark' ? darkTheme : lightTheme}>
      <GlobalStyles />
      <Header theme={theme} toggleTheme={toggleTheme} />
      <Greeting />
    </ThemeProvider>
  );
};

export default App;
