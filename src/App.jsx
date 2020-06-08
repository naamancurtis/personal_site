import React, { useState } from 'react';
import { ThemeProvider } from 'styled-components';

import GlobalStyles from './styles/global';
import { darkTheme, lightTheme } from './styles/theme';
import Header from './components/header/header.component';
import IntroAnimation from './components/greeting/greeting.component';

import './App.css';

const App = () => {
  const [theme, setTheme] = useState('light');
  const toggleTheme = () => setTheme(theme === 'dark' ? 'light' : 'dark');

  const [intro, setIntro] = useState(false);

  return (
    <ThemeProvider theme={theme === 'dark' ? darkTheme : lightTheme}>
      <GlobalStyles />
      <Header theme={theme} toggleTheme={toggleTheme} />
      {intro ? null : <IntroAnimation toggleTyped={() => setIntro(!intro)} />}
    </ThemeProvider>
  );
};

export default App;
